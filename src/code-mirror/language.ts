import { HighlightStyle, LanguageSupport, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

import { jsoniqLanguageDefinition } from "./tokenizer";

/**
 * Colors for the tags that JupyterLab's own highlight style leaves uncolored, taken from the
 * JupyterLab theme variables so that they follow the theme.
 */
const jsoniqHighlightStyle = HighlightStyle.define([
    { tag: tags.null, color: "var(--jp-mirror-editor-keyword-color)", fontWeight: "bold" },
    { tag: tags.typeName, color: "var(--jp-mirror-editor-builtin-color)" },
    { tag: tags.annotation, color: "var(--jp-mirror-editor-meta-color)" },
    { tag: tags.escape, color: "var(--jp-mirror-editor-string-2-color)" },
]);

const jsoniq = new LanguageSupport(jsoniqLanguageDefinition, [
    syntaxHighlighting(jsoniqHighlightStyle),
]);

export { jsoniq };
