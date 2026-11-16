import { LSPClient, type Transport } from "@codemirror/lsp-client";
import { PageConfig, URLExt } from "@jupyterlab/coreutils";
import { ServerConnection } from "@jupyterlab/services";
import { Signal, type ISignal } from "@lumino/signaling";

import { languageServerExtensions } from "./extensions";

/** The first requests wait for the server to start RumbleDB, which takes several seconds. */
const REQUEST_TIMEOUT_MS = 30_000;
/** Reconnecting waits twice as long after each failure, up to the maximum. */
const RECONNECT_DELAY_MS = { initial: 1_000, max: 60_000 };
/** Saving the settings can change them several times in a row; the server restarts once. */
const RESTART_DELAY_MS = 500;
/** The close code of a Jupyter server that cannot run the language server: `language_server.py`. */
const NOT_INSTALLED = 4001;

/** What the status bar shows. */
export type ConnectionState =
    /** No JSONiq editor has been opened yet. */
    | { kind: "idle" }
    | { kind: "starting" }
    /** RumbleDB is downloaded on first use, which is several hundred megabytes. */
    | { kind: "downloading"; downloadedBytes: number; totalBytes: number }
    /** `warning` says what does not work, such as completions that need RumbleDB. */
    | { kind: "ready"; warning?: string }
    | { kind: "reconnecting" }
    | { kind: "unavailable"; reason: string };

/** Memory of the language server and of RumbleDB, in bytes; RumbleDB's is `null` until it runs. */
export interface MemoryUsage {
    languageServer: number;
    wrapper: number | null;
}

interface DownloadProgress {
    stage:
        | "download-started"
        | "download-progress"
        | "download-complete"
        | "download-failed"
        | "verified";
    downloadedBytes: number;
    totalBytes: number;
}

/** The extension's settings, from `schema/plugin.json`. */
export interface LanguageServerSettings {
    rumbleEnabled: boolean;
    lakehouseFormats: { delta?: boolean };
    sparkConf: Record<string, string | number | boolean>;
}

/** Carries one JSON-RPC message per WebSocket message. */
class WebSocketTransport implements Transport {
    private readonly handlers = new Set<(message: string) => void>();

    constructor(private readonly socket: WebSocket) {
        socket.addEventListener("message", (event) => {
            for (const handler of this.handlers) {
                handler(String(event.data));
            }
        });
    }

    send(message: string): void {
        this.socket.send(message);
    }

    subscribe(handler: (message: string) => void): void {
        this.handlers.add(handler);
    }

    unsubscribe(handler: (message: string) => void): void {
        this.handlers.delete(handler);
    }
}

/**
 * The language server client of the page. The Jupyter server starts a language server for each
 * connection, and stops it when the connection closes. The client connects when the first JSONiq
 * editor needs it, and reconnects when the connection drops, for example when Jupyter restarts.
 */
export class LanguageServerConnection {
    readonly client: LSPClient;
    private readonly rootUri = PageConfig.getOption("jsoniqRootUri");
    private readonly serverSettings = ServerConnection.makeSettings();
    /**
     * Sent to the server when it starts. The client reads this object on every connection, so
     * changing it and reconnecting starts a server with the new settings.
     */
    private readonly initializationOptions: { wrapper: Record<string, unknown> } = { wrapper: {} };
    private socket: WebSocket | null = null;
    private started = false;
    private reconnectDelay = RECONNECT_DELAY_MS.initial;
    private reconnectTimer: ReturnType<typeof setTimeout> | undefined;
    private restartTimer: ReturnType<typeof setTimeout> | undefined;
    private _state: ConnectionState = { kind: "idle" };
    private _memoryUsage: MemoryUsage | null = null;
    private readonly _changed = new Signal<this, void>(this);

    /** @param settings The settings to start the server with; `null` for the server's defaults. */
    constructor(private readonly settings: Promise<LanguageServerSettings | null>) {
        this.client = new LSPClient({
            rootUri: this.rootUri || undefined,
            timeout: REQUEST_TIMEOUT_MS,
            initializationOptions: this.initializationOptions,
            extensions: languageServerExtensions(),
            notificationHandlers: {
                "jsoniq/wrapper-download-progress": (_client, progress: DownloadProgress) => {
                    this.onDownloadProgress(progress);
                    return true;
                },
                "jsoniq/memory-usage": (_client, usage: MemoryUsage) => {
                    this._memoryUsage = usage;
                    this._changed.emit();
                    return true;
                },
                // VS Code switches between its JSONiq and XQuery modes; the highlighter does that here.
                "jsoniq/active-parser": () => true,
            },
        });
    }

    get state(): ConnectionState {
        return this._state;
    }

    get memoryUsage(): MemoryUsage | null {
        return this._memoryUsage;
    }

    /** Emitted when the state or the memory usage changes. */
    get changed(): ISignal<this, void> {
        return this._changed;
    }

    /** Starts the server, unless it is started. Pages without JSONiq do not start one. */
    start(): void {
        if (this.started) {
            return;
        }
        this.started = true;
        this.setState({ kind: "starting" });
        void this.settings.then((settings) => {
            this.applySettings(settings);
            this.connect();
        });
    }

    /** The `file:` URI of a path relative to the Jupyter root directory. */
    fileUri(path: string): string {
        const encoded = path.split("/").map(encodeURIComponent).join("/");
        return `${this.rootUri.replace(/\/$/, "")}/${encoded}`;
    }

    /** Restarts the language server with new settings: the server reads them only when it starts. */
    restart(settings: LanguageServerSettings): void {
        this.applySettings(settings);
        clearTimeout(this.restartTimer);
        this.restartTimer = setTimeout(() => {
            if (this.socket !== null) {
                this.disconnect();
                this.setState({ kind: "starting" });
                this.connect();
            }
        }, RESTART_DELAY_MS);
    }

    private setState(state: ConnectionState): void {
        this._state = state;
        this._changed.emit();
    }

    private applySettings(settings: LanguageServerSettings | null): void {
        this.initializationOptions.wrapper =
            settings === null
                ? {}
                : {
                      enabled: settings.rumbleEnabled,
                      lakehouseFormats: settings.lakehouseFormats,
                      sparkConf: settings.sparkConf,
                  };
    }

    private connect(): void {
        clearTimeout(this.reconnectTimer);
        let url = URLExt.join(this.serverSettings.wsUrl, "jsoniq", "language-server");
        if (this.serverSettings.token) {
            url += `?token=${encodeURIComponent(this.serverSettings.token)}`;
        }
        const socket = new WebSocket(url);
        this.socket = socket;
        socket.addEventListener("open", () => {
            this.client.connect(new WebSocketTransport(socket));
            this.client.initializing.then(
                () => {
                    this.reconnectDelay = RECONNECT_DELAY_MS.initial;
                    if (this.socket === socket && this._state.kind !== "downloading") {
                        this.setState({ kind: "ready" });
                    }
                },
                (error: { message?: string }) => {
                    if (this.socket === socket) {
                        this.setState({
                            kind: "unavailable",
                            reason: error?.message ?? String(error),
                        });
                    }
                },
            );
        });
        socket.addEventListener("close", (event) => {
            if (this.socket !== socket) {
                return;
            }
            this.disconnect();
            if (event.code === NOT_INSTALLED) {
                this.setState({ kind: "unavailable", reason: event.reason });
                return;
            }
            this.setState({ kind: "reconnecting" });
            this.reconnectTimer = setTimeout(() => this.connect(), this.reconnectDelay);
            this.reconnectDelay = Math.min(this.reconnectDelay * 2, RECONNECT_DELAY_MS.max);
        });
    }

    /** Closes the connection, which stops its server. */
    private disconnect(): void {
        const socket = this.socket;
        this.socket = null;
        this.client.disconnect();
        socket?.close();
    }

    private onDownloadProgress(progress: DownloadProgress): void {
        if (progress.stage === "download-started" || progress.stage === "download-progress") {
            this.setState({
                kind: "downloading",
                downloadedBytes: progress.downloadedBytes,
                totalBytes: progress.totalBytes,
            });
        } else if (this._state.kind === "downloading") {
            this.setState(
                progress.stage === "download-failed"
                    ? {
                          kind: "ready",
                          warning:
                              "Couldn't download RumbleDB: completions of fields and types are unavailable.",
                      }
                    : { kind: "ready" },
            );
        }
    }
}
