import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { registerJSONiqLanguage } from "./code-mirror/register-language.js";
import { jsoniqIcon } from "./icon.js";
import { JSONIQ_EXTENSION, JSONIQ_LANGUAGE, JSONIQ_LANGUAGE_DISPLAY_NAME, JSONIQ_MIME_TYPE, JUPYTER_PLUGIN_ID } from "./const.js";
import {
    EditorExtensionRegistry,
    IEditorExtensionRegistry
} from '@jupyterlab/codemirror';
import { languageSelection } from "./code-mirror/highlight.js";

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [IEditorLanguageRegistry, IEditorExtensionRegistry],
    activate: (
        app: JupyterFrontEnd,
        codeMirrorRecognizedLanguages: IEditorLanguageRegistry,
        extensions: IEditorExtensionRegistry
    ) => {
        console.log("JSONiq JupyterLab extension loaded");
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

        extensions.addExtension({
            name: JUPYTER_PLUGIN_ID,
            default: 1,
            factory: () =>
                EditorExtensionRegistry.createConfigurableExtension(() => languageSelection())
        })

    },
    autoStart: true,
};

export default plugin;
