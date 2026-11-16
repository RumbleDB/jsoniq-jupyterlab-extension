import { acceptCompletion, completionStatus, startCompletion } from "@codemirror/autocomplete";
import { Compartment, Prec, type Extension } from "@codemirror/state";
import {
    EditorView,
    keymap,
    ViewPlugin,
    type PluginValue,
    type ViewUpdate,
} from "@codemirror/view";

import { JSONIQ_LANGUAGE } from "../const";
import type { LanguageServerConnection } from "./connection";

/** Marks the editors that the language server supports; see `completer-guard.ts`. */
export const LSP_EDITOR_CLASS = "jp-jsoniq-LanguageServerEditor";

export interface LanguageServerEditorOptions {
    connection: LanguageServerConnection;
    /** Whether the editor holds JSONiq. */
    isJSONiq: (view: EditorView) => boolean;
    /** The URI of the document in the editor, or `null` if it has none, such as in a console. */
    documentUri: (view: EditorView) => string | null;
}

/** Sizes the language server's popups, and colors them like the rest of JupyterLab. */
const languageServerTheme = EditorView.theme({
    ".cm-tooltip": {
        backgroundColor: "var(--jp-layout-color1)",
        border: "var(--jp-border-width) solid var(--jp-border-color1)",
        boxShadow: "var(--jp-elevation-z6)",
        color: "var(--jp-content-font-color1)",
    },
    ".cm-tooltip.cm-tooltip-hover, .cm-tooltip.cm-lsp-signature-tooltip": {
        maxWidth: "min(48em, 90vw)",
        maxHeight: "20em",
        overflowY: "auto",
    },
    // Signature help already shows the docs of the function being called.
    "&:has(.cm-lsp-signature-tooltip) .cm-tooltip-hover": {
        display: "none",
    },
    ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
        backgroundColor: "var(--jp-brand-color1)",
        color: "var(--jp-ui-inverse-font-color1)",
    },
    ".cm-completionDetail": {
        color: "var(--jp-content-font-color2)",
    },
});

/**
 * Tab completes, as in the rest of JupyterLab, and accepts the selected completion when the list
 * is open. At the start of a line, Tab indents.
 */
function completeOrIndent(view: EditorView): boolean {
    if (completionStatus(view.state) === "active") {
        return acceptCompletion(view);
    }
    const { from, to } = view.state.selection.main;
    const line = view.state.doc.lineAt(from);
    if (from !== to || /^\s*$/.test(line.text.slice(0, from - line.from))) {
        return false;
    }
    return startCompletion(view);
}

/**
 * Connects the editor to the language server while it holds JSONiq: a `%%jsoniq` cell or a `.jq`
 * file. A cell that loses its magic line is disconnected, and its diagnostics cleared.
 */
export function languageServerEditor(options: LanguageServerEditorOptions): Extension {
    const compartment = new Compartment();

    class Attachment implements PluginValue {
        private uri: string | null = null;
        private destroyed = false;

        constructor(private readonly view: EditorView) {
            this.schedule();
        }

        update(update: ViewUpdate): void {
            // Cells are created before they are added to the page, and only then can the
            // notebook be found; focusing a cell also picks up a renamed notebook.
            if (
                update.docChanged ||
                update.focusChanged ||
                (this.uri === null && update.geometryChanged)
            ) {
                this.schedule();
            }
        }

        destroy(): void {
            this.destroyed = true;
        }

        /** An update cannot dispatch a transaction, so the check runs right after it. */
        private schedule(): void {
            queueMicrotask(() => this.check());
        }

        private check(): void {
            // A cell scrolled out of the notebook is removed from the page, but keeps its document.
            if (this.destroyed || !this.view.dom.isConnected) {
                return;
            }
            const uri = options.isJSONiq(this.view) ? options.documentUri(this.view) : null;
            if (uri === this.uri) {
                return;
            }
            this.uri = uri;
            if (uri !== null) {
                options.connection.start();
            }
            this.view.dispatch({
                effects: compartment.reconfigure(
                    uri === null
                        ? []
                        : [
                              options.connection.client.plugin(uri, JSONIQ_LANGUAGE),
                              EditorView.editorAttributes.of({ class: LSP_EDITOR_CLASS }),
                              languageServerTheme,
                              Prec.high(keymap.of([{ key: "Tab", run: completeOrIndent }])),
                          ],
                ),
            });
        }
    }

    return [compartment.of([]), ViewPlugin.fromClass(Attachment)];
}

/**
 * The URI of a notebook cell. The language server ignores the `%%jsoniq` line of documents with
 * VS Code's notebook cell scheme, so cells use it too.
 */
export function notebookCellUri(notebookUri: string, cellId: string): string {
    return `vscode-notebook-cell:${notebookUri.replace(/^file:\/\//, "")}#${encodeURIComponent(cellId)}`;
}
