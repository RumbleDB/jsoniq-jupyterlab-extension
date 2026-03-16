import { LanguageSupport } from "@codemirror/language";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { jsoniqLanguageDefinition } from "./tokenizer.js";

export class RegisterJSONiqInCodeMirror {
    private codeMirrorRecognizedLanguages;

    constructor(codeMirrorRecognizedLanguages: IEditorLanguageRegistry) {
        this.codeMirrorRecognizedLanguages = codeMirrorRecognizedLanguages;
    }

    public registerJSONiqLanguage() {
        this.codeMirrorRecognizedLanguages.addLanguage({
            name: "jsoniq",
            displayName: "JSONiq",
            mime: "text/x-jsoniq",
            extensions: ["jq"],
            filename: /\.jq$/,
            support: new LanguageSupport(jsoniqLanguageDefinition),
        });
    }
}
