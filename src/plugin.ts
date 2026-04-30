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
import { ILSPCodeExtractorsManager } from '@jupyterlab/lsp';
import { languageSelection } from "./code-mirror/highlight.js";
import { registerJSONiqMagicLSP } from "./lsp/register.js";

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [IEditorLanguageRegistry, IEditorExtensionRegistry],
    optional: [ILSPCodeExtractorsManager],      /// In case jupyterlab-lsp is not installed, the plugin will still work without registering the code extractor
    activate: (
        app: JupyterFrontEnd,
        codeMirrorRecognizedLanguages: IEditorLanguageRegistry,
        extensions: IEditorExtensionRegistry,
        lspCodeExtractorsManager: ILSPCodeExtractorsManager | null
    ) => {
        console.log("JSONiq JupyterLab extension loaded");
        registerJSONiqLanguage(codeMirrorRecognizedLanguages);
        registerJSONiqMagicLSP(lspCodeExtractorsManager);

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
