import { LanguageSupport } from "@codemirror/language";
import { jsoniqLanguageDefinition } from "./tokenizer";

const jsoniq = new LanguageSupport(jsoniqLanguageDefinition);

export {
    jsoniq
}