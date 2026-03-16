import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { registerJSONiqLanguage } from "./code-mirror/register-language.js";
import { jsoniqIcon } from "./icon.js";
import { INotebookTracker } from "@jupyterlab/notebook";
import { JSONIQ_EXTENSION, JSONIQ_LANGUAGE, JSONIQ_LANGUAGE_DISPLAY_NAME, JSONIQ_MIME_TYPE, JUPYTER_PLUGIN_ID } from "./const.js";
import { registerNotebookTracker } from "./notebook.js";

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [IEditorLanguageRegistry, INotebookTracker],
    activate: (
        app: JupyterFrontEnd,
        codeMirrorRecognizedLanguages: IEditorLanguageRegistry,
        tracker: INotebookTracker
    ) => {
        registerJSONiqLanguage(codeMirrorRecognizedLanguages);

        app.docRegistry.addFileType({
            name: JSONIQ_LANGUAGE,
            displayName: JSONIQ_LANGUAGE_DISPLAY_NAME,
            contentType: "code",
            fileFormat: "text",
            extensions: [JSONIQ_EXTENSION],
            mimeTypes: [JSONIQ_MIME_TYPE],
            icon: jsoniqIcon,
        });

        registerNotebookTracker(tracker);
    },
    autoStart: true,
};

export default plugin;
