import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { JSONiqExtractor } from "./extractor/extractors.js";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { RegisterJSONiqInCodeMirror } from "./code_mirror_configuration/register-language.js";
const PLUGIN_ID = "davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq";
const plugin = {
    id: PLUGIN_ID,
    requires: [ILSPCodeExtractorsManager, IEditorLanguageRegistry],
    activate: (_app, extractors, codeMirrorRecognizedLanguages) => {
        const jsoniqExtractor = new JSONiqExtractor(extractors);
        const jsoniqLanguageRegister = new RegisterJSONiqInCodeMirror(codeMirrorRecognizedLanguages);
        jsoniqExtractor.registerExtractor();
        jsoniqLanguageRegister.registerJSONiqLanguage();
    },
    autoStart: true,
};
export default plugin;
//# sourceMappingURL=plugin.js.map