import { tags } from "@lezer/highlight";
import { describe, expect, test } from "vitest";

import { SCOPE_RULES } from "../src/code-mirror/scopes";
import { createOnigLib, rawGrammar, type GrammarLanguage } from "../src/code-mirror/textmate";
import { createTokenizerState, tokenizeLine } from "../src/code-mirror/tokenizer";

/** Highlights a document line by line, as `[text, style]` pairs per line. */
function highlight(source: string): [string, string][][] {
    const state = createTokenizerState();
    return source
        .split("\n")
        .map((line) =>
            tokenizeLine(state, line).map(({ from, to, style }) => [line.slice(from, to), style]),
        );
}

function styleOf(source: string, text: string): string | undefined {
    return highlight(source)
        .flat()
        .find(([spanText]) => spanText === text)?.[1];
}

function patternsOf(grammar: unknown): string[] {
    const patterns: string[] = [];
    const walk = (value: unknown): void => {
        if (Array.isArray(value)) {
            value.forEach(walk);
        } else if (typeof value === "object" && value !== null) {
            for (const [key, child] of Object.entries(value)) {
                if (["match", "begin", "end", "while"].includes(key) && typeof child === "string") {
                    patterns.push(child);
                } else {
                    walk(child);
                }
            }
        }
    };
    walk(grammar);
    return patterns;
}

describe("grammars", () => {
    test.each<GrammarLanguage>(["jsoniq", "xquery"])(
        "every %s pattern compiles to a JavaScript regular expression",
        (language) => {
            const onigLib = createOnigLib({ forgiving: false });
            const patterns = patternsOf(rawGrammar(language));
            expect(patterns.length).toBeGreaterThan(50);
            for (const pattern of patterns) {
                expect(() => onigLib.createOnigScanner([pattern]), pattern).not.toThrow();
            }
        },
    );

    test("every style is a known highlighting tag", () => {
        const styles = [
            ...SCOPE_RULES.map(([, style]) => style).filter((style) => style !== "bracket"),
            "paren",
            "squareBracket",
            "brace",
            "meta",
        ];
        for (const style of styles) {
            const [tag, ...modifiers] = style.split(".");
            expect(tag in tags, style).toBe(true);
            for (const modifier of modifiers) {
                expect(typeof (tags as Record<string, unknown>)[modifier], style).toBe("function");
            }
        }
    });
});

describe("JSONiq highlighting", () => {
    test("keywords, functions, numbers and literals", () => {
        const source = "for $b in json-lines(1, 2.5, 1e3, true, null)";
        expect(styleOf(source, "for")).toBe("keyword");
        expect(styleOf(source, "json-lines")).toBe("variableName.function");
        expect(styleOf(source, "1")).toBe("number");
        expect(styleOf(source, "2.5")).toBe("number");
        expect(styleOf(source, "1e3")).toBe("number");
        expect(styleOf(source, "true")).toBe("bool");
    });

    test("a comment continues on the next lines", () => {
        expect(highlight("(: first\n\n   second :)\n1")).toEqual([
            [["(: first", "comment"]],
            [],
            [["   second :)", "comment"]],
            [["1", "number"]],
        ]);
    });

    test("a string template continues on the next lines, with its expressions highlighted", () => {
        const [first, second] = highlight("``[Hello `{ $name }` and\nmore]``");
        expect(first).toEqual([
            ["``[Hello ", "string"],
            ["`{", "brace"],
            ["$name", "variableName"],
            ["}`", "brace"],
            [" and", "string"],
        ]);
        expect(second).toEqual([["more]``", "string"]]);
    });

    test("a variable is one span with its dollar sign", () => {
        expect(styleOf("$name + 1", "$name")).toBe("variableName");
    });

    test("object lookups are part of the variable, as in VS Code", () => {
        expect(highlight("$order.customer.name")[0]).toEqual([
            ["$order.customer.name", "variableName"],
        ]);
    });

    test("object keys are properties", () => {
        expect(styleOf('{ title: "a" }', "title")).toBe("propertyName");
    });

    test("declarations", () => {
        const source = "declare function local:f($x as integer) { $x };";
        expect(styleOf(source, "declare")).toBe("definitionKeyword");
        expect(styleOf(source, "local:f")).toBe("variableName.function.definition");
        expect(styleOf(source, "integer")).toBe("typeName");
        expect(styleOf("declare variable $limit := 1;", "$limit")).toBe("variableName.definition");
        expect(styleOf("let $limit := 1", "$limit")).toBe("variableName");
    });

    test("a minus between operands is not part of a name", () => {
        expect(styleOf("$a - $b", "-")).toBe("operator");
        expect(styleOf("$a -$b", "-")).toBe("operator");
    });

    test("the magic line of a notebook cell is not JSONiq", () => {
        expect(highlight("%%jsoniq -t\n1 + 1")).toEqual([
            [["%%jsoniq -t", "meta"]],
            [
                ["1", "number"],
                ["+", "operator"],
                ["1", "number"],
            ],
        ]);
    });

    test("a cell magic below the first line is not treated as one", () => {
        expect(styleOf("1\n%%jsoniq", "%%jsoniq")).not.toBe("meta");
    });
});

describe("XQuery highlighting", () => {
    test("a version declaration selects XQuery", () => {
        // `true` is a boolean literal in JSONiq, but a name in XQuery.
        expect(styleOf('xquery version "3.1";\ntrue', "true")).not.toBe("bool");
        expect(styleOf('jsoniq version "1.0";\ntrue', "true")).toBe("bool");
    });

    test("XML constructors", () => {
        const source = 'xquery version "3.1";\n<a href="{ $u }">text</a>';
        expect(styleOf(source, "xquery")).toBe("keyword");
        expect(styleOf(source, "a")).toBe("tagName");
        expect(styleOf(source, "href")).toBe("attributeName");
        expect(styleOf(source, "$u")).toBe("variableName");
    });

    test("a version declaration after the cell magic selects XQuery", () => {
        expect(styleOf('%%jsoniq\n\nxquery version "3.1";\n<a/>', "a")).toBe("tagName");
    });
});
