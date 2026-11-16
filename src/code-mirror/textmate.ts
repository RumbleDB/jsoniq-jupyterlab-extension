import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";
import {
    INITIAL,
    Registry,
    type IGrammar,
    type IOnigLib,
    type IRawGrammar,
    type StateStack,
} from "@shikijs/vscode-textmate";

import jsoniqGrammar from "../syntaxes/jsoniq.tmLanguage.json";
import xqueryGrammar from "../syntaxes/xquery.tmLanguage.json";

export type GrammarLanguage = "jsoniq" | "xquery";

export { INITIAL, type StateStack };

const RAW_GRAMMARS: Record<GrammarLanguage, IRawGrammar> = {
    jsoniq: jsoniqGrammar as unknown as IRawGrammar,
    xquery: xqueryGrammar as unknown as IRawGrammar,
};

/**
 * Runs the grammars' Oniguruma patterns as JavaScript regular expressions, so that no WASM is needed.
 * `forgiving` skips a pattern that cannot be translated instead of failing the whole grammar; the
 * grammar tests compile every pattern without it.
 */
export function createOnigLib(options: { forgiving: boolean }): IOnigLib {
    const engine = createJavaScriptRegexEngine({ forgiving: options.forgiving });
    return {
        createOnigScanner: (sources) => engine.createScanner(sources),
        createOnigString: (text) => engine.createString(text),
    };
}

export function rawGrammar(language: GrammarLanguage): IRawGrammar {
    return RAW_GRAMMARS[language];
}

let registry: Registry | undefined;
const grammars = new Map<GrammarLanguage, IGrammar>();

/** Loads a grammar on first use; patterns are compiled lazily as the tokenizer reaches them. */
export function getGrammar(language: GrammarLanguage): IGrammar {
    let grammar = grammars.get(language);
    if (grammar === undefined) {
        registry ??= new Registry({
            onigLib: createOnigLib({ forgiving: true }),
            loadGrammar: (scopeName) =>
                Object.values(RAW_GRAMMARS).find((raw) => raw.scopeName === scopeName) ?? null,
        });
        const loaded = registry.loadGrammar(RAW_GRAMMARS[language].scopeName);
        if (loaded === null) {
            throw new Error(`Could not load the ${language} grammar`);
        }
        grammar = loaded;
        grammars.set(language, grammar);
    }
    return grammar;
}
