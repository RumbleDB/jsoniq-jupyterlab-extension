import type { CodeEditor } from "@jupyterlab/codeeditor";
import type {
    ICompletionContext,
    ICompletionProvider,
    ICompletionProviderManager,
} from "@jupyterlab/completer";

import { LSP_EDITOR_CLASS } from "./editor";

function hasLanguageServer(editor: CodeEditor.IEditor | null | undefined): boolean {
    return editor?.host.querySelector(`.${LSP_EDITOR_CLASS}`) != null;
}

/**
 * In editors that the language server supports, completions come from the server and show in
 * CodeMirror's list. JupyterLab's completer would show a second list, with the Python kernel's
 * completions and the words of the notebook, so its providers are made not to apply there.
 *
 * The manager asks every provider whether it applies on each request; with none applicable,
 * it neither completes while typing nor on Tab.
 */
export function hideJupyterCompletionsInLanguageServerEditors(
    manager: ICompletionProviderManager,
): void {
    const guarded = new WeakSet<ICompletionProvider>();
    const guard = (provider: ICompletionProvider) => {
        if (guarded.has(provider)) {
            return;
        }
        guarded.add(provider);
        const isApplicable = provider.isApplicable.bind(provider);
        provider.isApplicable = async (context: ICompletionContext) =>
            !hasLanguageServer(context.editor) && (await isApplicable(context));
    };

    // `getProviders` is not part of the token's interface, but of its only implementation.
    const providers = (
        manager as { getProviders?: () => Map<string, ICompletionProvider> }
    ).getProviders?.();
    providers?.forEach(guard);

    const registerProvider = manager.registerProvider.bind(manager);
    manager.registerProvider = (provider: ICompletionProvider) => {
        guard(provider);
        registerProvider(provider);
    };
}
