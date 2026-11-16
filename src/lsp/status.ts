import type { IStatusBar } from "@jupyterlab/statusbar";
import { Signal } from "@lumino/signaling";
import { Widget } from "@lumino/widgets";

import type { ConnectionState, LanguageServerConnection, MemoryUsage } from "./connection";

const STATUS_ID = "jsoniq-jupyterlab-extension:language-server-status";

const MODIFIERS = ["jp-jsoniq-mod-busy", "jp-jsoniq-mod-warning", "jp-jsoniq-mod-error"];

function megabytes(bytes: number): string {
    return `${Math.round(bytes / 1024 / 1024)} MB`;
}

function describe(state: ConnectionState): { text: string; tooltip: string; className: string } {
    switch (state.kind) {
        case "idle":
        case "starting":
            return {
                text: "JSONiq: starting…",
                tooltip: "Starting the JSONiq language server.",
                className: "jp-jsoniq-mod-busy",
            };
        case "downloading": {
            const percent =
                state.totalBytes > 0
                    ? Math.floor((state.downloadedBytes / state.totalBytes) * 100)
                    : 0;
            return {
                text: `JSONiq: downloading RumbleDB ${percent}%`,
                tooltip:
                    "RumbleDB is downloaded once, on first use. Until then, completions of fields " +
                    `and types are unavailable.\n${megabytes(state.downloadedBytes)} of ${megabytes(state.totalBytes)}`,
                className: "jp-jsoniq-mod-busy",
            };
        }
        case "ready":
            return state.warning === undefined
                ? {
                      text: "JSONiq",
                      tooltip: "The JSONiq language server is running.",
                      className: "",
                  }
                : { text: "JSONiq ⚠", tooltip: state.warning, className: "jp-jsoniq-mod-warning" };
        case "reconnecting":
            return {
                text: "JSONiq: reconnecting…",
                tooltip: "Lost the connection to the JSONiq language server.",
                className: "jp-jsoniq-mod-busy",
            };
        case "unavailable":
            return {
                text: "JSONiq: unavailable",
                tooltip: `No completions or diagnostics for JSONiq: ${state.reason}`,
                className: "jp-jsoniq-mod-error",
            };
    }
}

function describeMemory(usage: MemoryUsage | null): string {
    if (usage === null) {
        return "";
    }
    const rumble = usage.wrapper === null ? "not running" : megabytes(usage.wrapper);
    return `\n\nMemory: language server ${megabytes(usage.languageServer)}, RumbleDB ${rumble}`;
}

/** Shows in the status bar whether the language server works, once a JSONiq editor uses it. */
export function addLanguageServerStatus(
    statusBar: IStatusBar,
    connection: LanguageServerConnection,
): void {
    const item = new Widget();
    item.addClass("jp-jsoniq-LanguageServerStatus");
    const activeStateChanged = new Signal<Widget, void>(item);

    const update = () => {
        const { text, tooltip, className } = describe(connection.state);
        item.node.textContent = text;
        item.node.title = tooltip + describeMemory(connection.memoryUsage);
        for (const modifier of MODIFIERS) {
            item.node.classList.toggle(modifier, modifier === className);
        }
        activeStateChanged.emit();
    };
    connection.changed.connect(update);
    update();

    statusBar.registerStatusItem(STATUS_ID, {
        item,
        align: "left",
        rank: 4,
        isActive: () => connection.state.kind !== "idle",
        activeStateChanged,
    });
}
