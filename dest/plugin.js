import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { JSONiqExtractor } from "./extractor/extractors.js";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { jsoniqLanguageDefinition } from "./code_mirror_configuration/tokenizer.js";
import { LanguageSupport } from "@codemirror/language";
const PLUGIN_ID = "davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq";
const plugin = {
    id: PLUGIN_ID,
    requires: [ILSPCodeExtractorsManager, IEditorLanguageRegistry],
    activate: (_app, extractors, codeMirrorRecognizedLanguages) => {
        const jsoniqExtractor = new JSONiqExtractor(extractors);
        jsoniqExtractor.registerExtractor();
        codeMirrorRecognizedLanguages.addLanguage({
            name: "jsoniq",
            displayName: "JSONiq",
            mime: ["application/jsoniq", "text/jsoniq", "text/x-jsoniq"],
            extensions: [".jq"],
            support: new LanguageSupport(jsoniqLanguageDefinition),
        });
        console.log("Activated plugin!");
    },
    autoStart: true,
};
export default plugin;
//# sourceMappingURL=plugin.js.map