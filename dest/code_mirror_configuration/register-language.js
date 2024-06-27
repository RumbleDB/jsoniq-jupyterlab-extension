import { LanguageSupport } from "@codemirror/language";
import { jsoniqLanguageDefinition } from "./tokenizer.js";
export class RegisterJSONiqInCodeMirror {
    codeMirrorRecognizedLanguages;
    constructor(codeMirrorRecognizedLanguages) {
        this.codeMirrorRecognizedLanguages = codeMirrorRecognizedLanguages;
    }
    registerJSONiqLanguage() {
        this.codeMirrorRecognizedLanguages.addLanguage({
            name: "jsoniq",
            displayName: "JSONiq",
            mime: ["application/jsoniq", "text/jsoniq", "text/x-jsoniq"],
            extensions: [".jq"],
            support: new LanguageSupport(jsoniqLanguageDefinition),
        });
    }
}
//# sourceMappingURL=register-language.js.map