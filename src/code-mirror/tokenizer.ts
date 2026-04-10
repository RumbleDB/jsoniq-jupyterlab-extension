import { CharStream, CommonTokenStream, CommonToken } from "antlr4ng";
import { StreamLanguage, StringStream } from "@codemirror/language";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";
import {
    TOKEN_TYPE_TO_TAG
} from "./tokenSets.js";
import { tags } from "@lezer/highlight";

/**
 * Token type ID from the JSONiq ANTLR lexer.
 * Values correspond to constants like jsoniqLexer.Kdot, jsoniqLexer.STRING, etc.
 */
type JsoniqTokenType = number;

interface Token {
    text: string;
    /** Token type ID from jsoniqLexer (e.g., jsoniqLexer.Kdot, jsoniqLexer.STRING) */
    type: JsoniqTokenType;
    startIndex: number;
    stopIndex: number;
}

export interface TokenizerState {
    /// Cache the current line and its tokens
    /// Because CodeMirror may call the tokenizer multiple times for the same line, 
    ///     and we want to avoid re-tokenizing.
    cachedLineText: string;
    cachedTokens: Token[];

    /// token() is called sequentially for each token in the line, by keeping track of the current token index, we can find the current token without searching
    currentTokenIndex: number;

    /// For some tokens (e.g. dot), we want to set the style of the following token based on the current token, this is to keep track of that context.
    /// For example, after a dot operator, the following token is likely a property name, so we want to style it as such.
    nextTokenStyle: string | null;
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

    public convertTokenToCodeMirrorStyle(): string | null {
        if (
            this.state.nextTokenStyle &&
            this.currToken &&
            this.stream.match(this.currToken.text)
        ) {
            const style = this.state.nextTokenStyle;
            this.state.nextTokenStyle = null; // clear for next call
            return style.toString();
        }

        return this.convertCurrentTokenToCodeMirrorStyle();
    }

    private convertCurrentTokenToCodeMirrorStyle(): string | null {
        if (
            this.currToken &&
            this.currToken.type !== jsoniqLexer.EOF &&
            this.stream.match(this.currToken.text)
        ) {
            if (this.currToken.type === jsoniqLexer.Kdot) {
                this.state.nextTokenStyle = tags.propertyName.toString();
            }

            const style = TOKEN_TYPE_TO_TAG.get(this.currToken.type);
            return style?.toString() || tags.variableName.toString();
        } else {
            this.stream.next();
            return null;
        }
    }
}

export const jsoniqLanguageDefinition = StreamLanguage.define({
    startState: (_) => {
        return {
            cachedLineText: "",
            cachedTokens: [],
            currentTokenIndex: 0,
            nextTokenStyle: null,
        };
    },
    token: (stream, state: TokenizerState) => {
        if (state.cachedLineText !== stream.string) {
            const tokenizer = new Tokenizer(stream.string);

            state.cachedLineText = stream.string;
            state.cachedTokens = tokenizer.getTokens();
            state.currentTokenIndex = 0;
            state.nextTokenStyle = null;
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

        /// The current token has been fully consumed, move to the next token for the next call
        if (
            currToken &&
            currToken.type !== jsoniqLexer.EOF &&
            stream.pos >= currToken.startIndex + currToken.text.length
        ) {
            state.currentTokenIndex += 1;
        }

        return style;
    },
});
