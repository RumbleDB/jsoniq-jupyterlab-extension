import { CharStream, CommonTokenStream, CommonToken } from "antlr4ng";
import { tags, Tag } from "@lezer/highlight";
import { StreamLanguage, StringStream } from "@codemirror/language";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";
import {
    TAG_TO_STYLE_NAME,
    KEYWORD_TOKENS,
    NUMBER_TOKENS,
    SQUARE_BRACKET_TOKENS,
    BRACE_TOKENS,
    PAREN_TOKENS,
    OPERATOR_TOKENS,
    SEPARATOR_TOKENS,
    NAMESPACE_TOKENS,
} from "./tokenSets.js";

interface Token {
    text: string;
    type: number;
    startIndex: number;
    stopIndex: number;
}

interface TokenizerState {
    tokenValueClassFromPreviousTokenContext: string;
    hasTokenValueClassFromPreviousToken: boolean;
    cachedLineText?: string;
    cachedTokens?: Token[];
    currentTokenIndex?: number;
}

class Tokenizer {
    private tokens: Token[];

    constructor(text: string) {
        this.tokens = this.getTokensForText(text);
    }

    private getTokensForText(text: string): Token[] {
        const chars = CharStream.fromString(text);
        const lexer = new jsoniqLexer(chars);
        const tokensStream = new CommonTokenStream(lexer);
        tokensStream.fill();
        const rawTokens = (tokensStream as unknown as { tokens: CommonToken[] }).tokens;
        return this.convertCommonTokensToTokens(rawTokens);
    }

    private convertCommonTokensToTokens(tokens: CommonToken[]): Token[] {
        return tokens.map((token) => {
            return {
                text: token.text || "",
                type: token.type,
                startIndex: token.start,
                stopIndex: token.stop,
            };
        });
    }

    public getTokens(): Token[] {
        return this.tokens;
    }

    public findCurrentToken(streamPos: number): Token | undefined {
        return this.tokens.filter((t) => t.startIndex >= streamPos)[0];
    }
}

export class TokenToCodeMirrorStyleConverter {
    private currToken: Token | undefined;
    private stream: StringStream;
    private state: TokenizerState;

    constructor(currToken: Token | undefined, stream: StringStream, state: TokenizerState) {
        this.currToken = currToken;
        this.stream = stream;
        this.state = state;
    }

    private getStyleNameByTag(tag: Tag): string {
        return TAG_TO_STYLE_NAME.get(tag) || "";
    }

    public convertTokenToCodeMirrorStyle(): string | null {
        if (
            this.state.hasTokenValueClassFromPreviousToken &&
            this.currToken &&
            this.stream.match(this.currToken.text)
        ) {
            // Some previous context set the current token's class
            this.state.hasTokenValueClassFromPreviousToken = false;
            return this.state.tokenValueClassFromPreviousTokenContext;
        } else {
            return this.convertCurrentTokenToCodeMirrorStyle();
        }
    }

    private convertCurrentTokenToCodeMirrorStyle() {
        if (
            this.currToken &&
            this.currToken.type !== jsoniqLexer.EOF &&
            this.stream.match(this.currToken.text)
        ) {
            if (KEYWORD_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.keyword);
            }

            if (this.currToken.type === jsoniqLexer.XQComment) {
                return this.getStyleNameByTag(tags.comment);
            }

            if (this.currToken.type === jsoniqLexer.STRING) {
                return this.getStyleNameByTag(tags.string);
            }

            if (NUMBER_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.number);
            }

            if (SQUARE_BRACKET_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.squareBracket);
            }

            if (BRACE_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.brace);
            }

            if (PAREN_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.paren);
            }

            if (OPERATOR_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.operator);
            }

            if (SEPARATOR_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.separator);
            }

            if (this.currToken.type === jsoniqLexer.Kdot) {
                this.state.tokenValueClassFromPreviousTokenContext =
                    this.getStyleNameByTag(tags.propertyName);
                this.state.hasTokenValueClassFromPreviousToken = true;
                return this.getStyleNameByTag(tags.derefOperator);
            }

            if (NAMESPACE_TOKENS.has(this.currToken.type)) {
                return this.getStyleNameByTag(tags.namespace);
            }

            if (this.currToken.type === jsoniqLexer.Kmodule) {
                return this.getStyleNameByTag(tags.moduleKeyword);
            }

            if (this.currToken.type === jsoniqLexer.Kannotation) {
                return this.getStyleNameByTag(tags.annotation);
            }

            return this.getStyleNameByTag(tags.variableName);
        } else {
            this.stream.next();
            return null;
        }
    }
}

export const jsoniqLanguageDefinition = StreamLanguage.define({
    startState: (_) => {
        return {
            tokenValueClassFromPreviousTokenContext: "",
            hasTokenValueClassFromPreviousToken: false,
            cachedLineText: "",
            cachedTokens: [],
            currentTokenIndex: 0,
        };
    },
    token: (stream, state: TokenizerState) => {
        if (typeof state.cachedLineText !== "string") {
            state.cachedLineText = "";
        }
        if (!state.cachedTokens) {
            state.cachedTokens = [];
        }
        if (typeof state.currentTokenIndex !== "number") {
            state.currentTokenIndex = 0;
        }

        if (state.cachedLineText !== stream.string) {
            const tokenizer = new Tokenizer(stream.string);
            state.cachedLineText = stream.string;
            state.cachedTokens = tokenizer.getTokens();
            state.currentTokenIndex = 0;
        }

        const cachedTokens = state.cachedTokens;
        let currentTokenIndex = state.currentTokenIndex;

        while (
            currentTokenIndex < cachedTokens.length &&
            cachedTokens[currentTokenIndex].startIndex < stream.pos
        ) {
            currentTokenIndex += 1;
        }
        state.currentTokenIndex = currentTokenIndex;

        const currToken = cachedTokens[currentTokenIndex];
        const tokenConverter = new TokenToCodeMirrorStyleConverter(
            currToken,
            stream,
            state
        );
        const style = tokenConverter.convertTokenToCodeMirrorStyle();

        if (
            currToken &&
            currToken.type !== jsoniqLexer.EOF &&
            stream.pos >= currToken.startIndex + currToken.text.length
        ) {
            state.currentTokenIndex += 1;
        }

        return style;
    },
    copyState(state) {
        return {
            tokenValueClassFromPreviousTokenContext:
                state.tokenValueClassFromPreviousTokenContext,
            hasTokenValueClassFromPreviousToken:
                state.hasTokenValueClassFromPreviousToken,
            cachedLineText: state.cachedLineText,
            cachedTokens: state.cachedTokens,
            currentTokenIndex: state.currentTokenIndex,
        };
    },
});
