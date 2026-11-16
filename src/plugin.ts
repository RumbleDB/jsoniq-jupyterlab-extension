import type { EditorView } from "@codemirror/view";
import { JupyterFrontEnd, JupyterFrontEndPlugin } from "@jupyterlab/application";
import type { ICellModel } from "@jupyterlab/cells";
import {
    EditorExtensionRegistry,
    IEditorExtensionRegistry,
    IEditorLanguageRegistry,
} from "@jupyterlab/codemirror";
import { ICompletionProviderManager } from "@jupyterlab/completer";
import { IEditorTracker } from "@jupyterlab/fileeditor";
import { INotebookTracker } from "@jupyterlab/notebook";
import { ISettingRegistry } from "@jupyterlab/settingregistry";
import { IStatusBar } from "@jupyterlab/statusbar";

import { isJSONiq, languageSelection, type EditorModel } from "./code-mirror/highlight";
import { registerJSONiqLanguage } from "./code-mirror/register-language";
import {
    JSONIQ_EXTENSION,
    JSONIQ_LANGUAGE,
    JSONIQ_LANGUAGE_DISPLAY_NAME,
    JSONIQ_MIME_TYPE,
    JUPYTER_PLUGIN_ID,
} from "./const";
import { jsoniqIcon } from "./icon";
import { hideJupyterCompletionsInLanguageServerEditors } from "./lsp/completer-guard";
import { LanguageServerConnection, type LanguageServerSettings } from "./lsp/connection";
import { languageServerEditor, notebookCellUri } from "./lsp/editor";
import { addLanguageServerStatus } from "./lsp/status";

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [IEditorLanguageRegistry, IEditorExtensionRegistry],
    optional: [
        INotebookTracker,
        IEditorTracker,
        ICompletionProviderManager,
        IStatusBar,
        ISettingRegistry,
    ],
    activate: (
        app: JupyterFrontEnd,
        languages: IEditorLanguageRegistry,
        extensions: IEditorExtensionRegistry,
        notebooks: INotebookTracker | null,
        fileEditors: IEditorTracker | null,
        completionManager: ICompletionProviderManager | null,
        statusBar: IStatusBar | null,
        settingRegistry: ISettingRegistry | null,
    ) => {
        registerJSONiqLanguage(languages);

        app.docRegistry.addFileType({
            name: JSONIQ_LANGUAGE,
            displayName: JSONIQ_LANGUAGE_DISPLAY_NAME,
            contentType: "code",
            fileFormat: "text",
            extensions: [`.${JSONIQ_EXTENSION}`],
            mimeTypes: [JSONIQ_MIME_TYPE],
            icon: jsoniqIcon,
        });

        const settings = settingRegistry
            ? settingRegistry.load(JUPYTER_PLUGIN_ID).catch((error) => {
                  console.warn("Couldn't load the JSONiq settings", error);
                  return null;
              })
            : Promise.resolve(null);
        const read = (loaded: ISettingRegistry.ISettings) =>
            loaded.composite as unknown as LanguageServerSettings;
        const connection = new LanguageServerConnection(
            settings.then((loaded) => loaded && read(loaded)),
        );
        // The server reads its settings only when it starts.
        void settings.then((loaded) =>
            loaded?.changed.connect(() => connection.restart(read(loaded))),
        );

        /** The notebook cell or file in the editor, found from where the editor is on the page. */
        const documentUri = (model: EditorModel, view: EditorView): string | null => {
            const notebook = notebooks?.find((panel) => panel.node.contains(view.dom));
            if (notebook) {
                const cellId = (model as Partial<ICellModel>).id;
                return cellId
                    ? notebookCellUri(connection.fileUri(notebook.context.path), cellId)
                    : null;
            }
            const file = fileEditors?.find((widget) => widget.node.contains(view.dom));
            return file ? connection.fileUri(file.context.path) : null;
        };

        extensions.addExtension({
            name: JUPYTER_PLUGIN_ID,
            default: 1,
            factory: (options) =>
                EditorExtensionRegistry.createConfigurableExtension(() => [
                    languageSelection(options.model),
                    languageServerEditor({
                        connection,
                        isJSONiq: (view) => isJSONiq(view.state.doc, options.model),
                        documentUri: (view) => documentUri(options.model, view),
                    }),
                ]),
        });

        if (statusBar) {
            addLanguageServerStatus(statusBar, connection);
        }

        if (completionManager) {
            hideJupyterCompletionsInLanguageServerEditors(completionManager);
        }
    },
    autoStart: true,
};

export default plugin;
