import { LanguageSupport } from "@codemirror/language";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { jsoniqLanguageDefinition } from "./tokenizer.js";
import { JSONIQ_LANGUAGE, JSONIQ_LANGUAGE_DISPLAY_NAME, JSONIQ_MIME_TYPE, JSONIQ_EXTENSION } from "../const.js";

export function registerJSONiqLanguage(languageRegistry: IEditorLanguageRegistry) {
    languageRegistry.addLanguage({
        name: JSONIQ_LANGUAGE,
        displayName: JSONIQ_LANGUAGE_DISPLAY_NAME,
        mime: JSONIQ_MIME_TYPE,
        extensions: [JSONIQ_EXTENSION],
        support: new LanguageSupport(jsoniqLanguageDefinition),
    });
}
