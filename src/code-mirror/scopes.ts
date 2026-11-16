/**
 * TextMate scope prefixes and the CodeMirror style each one maps to. A style is the name of a
 * `@lezer/highlight` tag, optionally followed by modifiers (`variableName.function`).
 * The first matching rule wins, so more specific prefixes come first.
 */
export const SCOPE_RULES: readonly (readonly [prefix: string, style: string])[] = [
    ["comment", "comment"],
    ["string", "string"],
    ["constant.character.escape", "escape"],
    ["constant.character.entity", "character"],
    ["constant.numeric", "number"],
    ["constant.language.boolean", "bool"],
    ["constant.language.null", "null"],
    ["support.constant", "atom"],
    ["keyword.operator.word", "operatorKeyword"],
    ["keyword.operator", "operator"],
    ["keyword.control.import", "moduleKeyword"],
    ["keyword.control.module", "moduleKeyword"],
    ["keyword.control.namespace", "moduleKeyword"],
    ["keyword.control.version", "moduleKeyword"],
    ["keyword.control.declare", "definitionKeyword"],
    ["keyword.control.function", "definitionKeyword"],
    ["keyword.control.variable", "definitionKeyword"],
    ["keyword", "keyword"],
    ["storage.modifier", "modifier"],
    ["storage.type", "typeName"],
    ["support.type", "typeName"],
    ["entity.name.type", "typeName"],
    ["entity.name.function", "variableName.function"],
    ["entity.name.namespace", "namespace"],
    ["entity.name.qualified.uri", "namespace"],
    ["entity.name.tag.annotation", "annotation"],
    ["punctuation.definition.annotation", "annotation"],
    ["entity.name.tag.pragma", "meta"],
    ["punctuation.definition.pragma", "meta"],
    ["entity.name.tag.processing-instruction", "processingInstruction"],
    ["entity.name.tag", "tagName"],
    ["entity.other.attribute-name", "attributeName"],
    ["punctuation.definition.tag", "angleBracket"],
    ["variable.other.property", "propertyName"],
    ["variable.language", "self"],
    ["punctuation.definition.variable", "variableName"],
    ["variable", "variableName"],
    ["punctuation.definition.lookup", "operator"],
    ["punctuation.section.embedded", "brace"],
    ["punctuation.separator", "separator"],
    ["punctuation.bracket", "bracket"],
];

const BRACKET_STYLES: Record<string, string> = {
    "(": "paren",
    ")": "paren",
    "[": "squareBracket",
    "]": "squareBracket",
};

function matchesPrefix(scope: string, prefix: string): boolean {
    return scope === prefix || scope.startsWith(`${prefix}.`);
}

/**
 * Finds the style of a token from its scopes, innermost first, so that a variable inside a string
 * template is styled as a variable rather than as the string around it.
 */
export function styleForScopes(scopes: readonly string[], text: string): string | null {
    for (let index = scopes.length - 1; index >= 0; index--) {
        const rule = SCOPE_RULES.find(([prefix]) => matchesPrefix(scopes[index], prefix));
        if (rule === undefined) {
            continue;
        }
        const style = rule[1];
        if (style === "bracket") {
            return BRACKET_STYLES[text] ?? "brace";
        }
        if (style.startsWith("variableName") && isInDeclaration(scopes)) {
            return `${style}.definition`;
        }
        return style;
    }
    return null;
}

/** The name of a `declare function` or `declare variable`, which JupyterLab colors as a definition. */
function isInDeclaration(scopes: readonly string[]): boolean {
    return scopes.some(
        (scope) =>
            matchesPrefix(scope, "meta.declaration.function") ||
            matchesPrefix(scope, "meta.declaration.variable"),
    );
}
