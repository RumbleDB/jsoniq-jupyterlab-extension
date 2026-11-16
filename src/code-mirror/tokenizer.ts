import { StreamLanguage, type StringStream } from "@codemirror/language";

import { styleForScopes } from "./scopes";
import { getGrammar, INITIAL, type GrammarLanguage, type StateStack } from "./textmate";

/** A styled range of one line, in offsets from the start of the line. */
export interface Span {
    from: number;
    to: number;
    style: string;
}

export interface TokenizerState {
    /** Chosen at the first line with code, until then `null`. */
    language: GrammarLanguage | null;
    /** The TextMate rule stack at the end of the last line; it carries comments and strings across lines. */
    stack: StateStack;
    atFirstLine: boolean;
    /** The spans of the line being read, and the next one to return. */
    spans: Span[];
    spanIndex: number;
}

/** Like the language server, a module that starts with an XQuery version declaration is XQuery. */
const XQUERY_VERSION_DECLARATION = /^\s*xquery\s+(?:version|encoding)\b/;
const CELL_MAGIC = /^%%/;

export function createTokenizerState(): TokenizerState {
    return { language: null, stack: INITIAL, atFirstLine: true, spans: [], spanIndex: 0 };
}

/** Tokenizes the next line of the document and advances the state to the end of it. */
export function tokenizeLine(state: TokenizerState, line: string): Span[] {
    const atFirstLine = state.atFirstLine;
    state.atFirstLine = false;

    // The `%%jsoniq` line of a notebook cell is IPython syntax, not JSONiq.
    if (atFirstLine && CELL_MAGIC.test(line)) {
        return [{ from: 0, to: line.length, style: "meta" }];
    }

    if (state.language === null) {
        if (line.trim() === "") {
            return [];
        }
        state.language = XQUERY_VERSION_DECLARATION.test(line) ? "xquery" : "jsoniq";
    }

    const language = state.language;
    const result = getGrammar(language).tokenizeLine(line, state.stack);
    state.stack = result.ruleStack;

    const spans: Span[] = [];
    for (const token of result.tokens) {
        const end = Math.min(token.endIndex, line.length);
        const text = line.slice(token.startIndex, end);
        // Whitespace takes only the style of its own scope: the spaces inside `{ $x }` of a
        // string template are not part of the string.
        const scopes = text.trim() === "" ? token.scopes.slice(-1) : token.scopes;
        const style = styleForScopes(scopes, text);
        if (style !== null) {
            pushSpan(spans, token.startIndex, end, style);
        }
    }
    return spans;
}

/** Adds a span, merging it into the previous one when they touch and share a style. */
function pushSpan(spans: Span[], from: number, to: number, style: string): void {
    if (to <= from) {
        return;
    }
    const last = spans.at(-1);
    if (last !== undefined && last.to === from && last.style === style) {
        last.to = to;
    } else {
        spans.push({ from, to, style });
    }
}

function readToken(stream: StringStream, state: TokenizerState): string | null {
    if (stream.sol()) {
        state.spans = tokenizeLine(state, stream.string);
        state.spanIndex = 0;
    }

    const span = state.spans[state.spanIndex];
    if (span === undefined) {
        stream.skipToEnd();
        return null;
    }
    if (stream.pos < span.from) {
        stream.pos = span.from;
        return null;
    }
    stream.pos = span.to;
    state.spanIndex += 1;
    return span.style;
}

/** JSONiq, or XQuery when the module starts with an XQuery version declaration. */
export const jsoniqLanguageDefinition = StreamLanguage.define<TokenizerState>({
    name: "jsoniq",
    startState: () => createTokenizerState(),
    token: readToken,
    // Empty lines still advance the rule stack, and end the first line of a cell.
    blankLine: (state) => {
        tokenizeLine(state, "");
    },
    languageData: {
        commentTokens: { block: { open: "(:", close: ":)" } },
        closeBrackets: { brackets: ["(", "[", "{", '"'] },
    },
});
