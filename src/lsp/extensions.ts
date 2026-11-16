import { autocompletion, CompletionContext } from "@codemirror/autocomplete";
import {
    findReferencesKeymap,
    formatKeymap,
    hoverTooltips,
    jumpToDefinitionKeymap,
    renameKeymap,
    serverCompletionSource,
    serverDiagnostics,
    signatureHelp,
} from "@codemirror/lsp-client";
import { keymap } from "@codemirror/view";

/** A name followed by the `-` or `:` that continues it, as in `json-` or `jn:`. */
const NAME_CONTINUED = /[\p{L}\p{N}_][-:]$/u;

/**
 * The client asks the server only after a letter or a trigger character, so typing the `-` of
 * `json-lines` would close the list. JSONiq names contain hyphens: ask again.
 */
function completionSource(context: CompletionContext) {
    if (!context.explicit && context.matchBefore(NAME_CONTINUED) !== null) {
        context = new CompletionContext(context.state, context.pos, true, context.view);
    }
    return serverCompletionSource(context);
}

/** `languageServerExtensions()` of `@codemirror/lsp-client`, with the completions above. */
export function languageServerExtensions() {
    return [
        autocompletion({ override: [completionSource] }),
        hoverTooltips(),
        keymap.of([
            ...formatKeymap,
            ...renameKeymap,
            ...jumpToDefinitionKeymap,
            ...findReferencesKeymap,
        ]),
        signatureHelp(),
        serverDiagnostics(),
    ];
}
