import { tags, Tag } from "@lezer/highlight";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";

const KEYWORD_TOKENS: number[] = [
    jsoniqLexer.Kversion,
    jsoniqLexer.Kcontext,
    jsoniqLexer.Ktype,
    jsoniqLexer.Kfor,
    jsoniqLexer.Ktypeswitch,
    jsoniqLexer.Kswitch,
    jsoniqLexer.Kif,
    jsoniqLexer.Kthen,
    jsoniqLexer.Kelse,
    jsoniqLexer.Ktry,
    jsoniqLexer.Kcatch,
    jsoniqLexer.Kwhere,
    jsoniqLexer.Kgroup,
    jsoniqLexer.Kby,
    jsoniqLexer.Korder,
    jsoniqLexer.Kas,
    jsoniqLexer.Kat,
    jsoniqLexer.Kin,
    jsoniqLexer.Kdeclare,
    jsoniqLexer.Kimport,
    jsoniqLexer.Kreplace,
    jsoniqLexer.Kvalue,
    jsoniqLexer.Kof,
    jsoniqLexer.Krename,
    jsoniqLexer.Kinsert,
    jsoniqLexer.Kdelete,
    jsoniqLexer.Kcopy,
    jsoniqLexer.Kappend,
    jsoniqLexer.Kwith,
    jsoniqLexer.Kmodify,
    jsoniqLexer.Kinto,
    jsoniqLexer.Kbreak,
    jsoniqLexer.Kloop,
    jsoniqLexer.Kcontinue,
    jsoniqLexer.Kexit,
    jsoniqLexer.Kreturning,
    jsoniqLexer.Kwhile,
    jsoniqLexer.Kannotate,
    jsoniqLexer.Kvalidate,
    jsoniqLexer.Kcastable,
    jsoniqLexer.Kcast,
    jsoniqLexer.Ktreat,
    jsoniqLexer.Kis,
    jsoniqLexer.Kstatically,
    jsoniqLexer.Kinstance,
    jsoniqLexer.Kto,
    jsoniqLexer.Kcollation,
    jsoniqLexer.Ksatisfies,
    jsoniqLexer.Kstable,
    jsoniqLexer.Kempty,
    jsoniqLexer.Kallowing,
    jsoniqLexer.Kreturn,
    jsoniqLexer.Kleast,
    jsoniqLexer.Kgreatest,
    jsoniqLexer.Ksome,
    jsoniqLexer.Kevery,
    jsoniqLexer.Kascending,
    jsoniqLexer.Kdescending,
    jsoniqLexer.Kordering,
    jsoniqLexer.Kordered,
    jsoniqLexer.Kcase,
    jsoniqLexer.Kcount,
    jsoniqLexer.Kdefault,
    jsoniqLexer.Kunordered,
    jsoniqLexer.Keq,
    jsoniqLexer.Kne,
    jsoniqLexer.Klt,
    jsoniqLexer.Kle,
    jsoniqLexer.Kgt,
    jsoniqLexer.Kge,
    jsoniqLexer.Kand,
    jsoniqLexer.Kor,
    jsoniqLexer.Knot,
    jsoniqLexer.Kcontext_item,
    jsoniqLexer.Ktrue,
    jsoniqLexer.Kfalse,
    jsoniqLexer.NullLiteral,
    jsoniqLexer.Kfunction,
    jsoniqLexer.Kvariable,
    jsoniqLexer.Klet,
];

const NUMBER_TOKENS: number[] = [
    jsoniqLexer.Literal,
    jsoniqLexer.NumericLiteral,
    jsoniqLexer.DoubleLiteral,
    jsoniqLexer.IntegerLiteral,
    jsoniqLexer.DecimalLiteral,
];

const SQUARE_BRACKET_TOKENS: number[] = [
    jsoniqLexer.Klbracket,
    jsoniqLexer.Krbracket,
];

const BRACE_TOKENS: number[] = [
    jsoniqLexer.Klbrace,
    jsoniqLexer.Krbrace,
];

const PAREN_TOKENS: number[] = [
    jsoniqLexer.Klparen,
    jsoniqLexer.Krparen,
];

const OPERATOR_TOKENS: number[] = [
    jsoniqLexer.Kplus,
    jsoniqLexer.Kminus,
    jsoniqLexer.Kasterisk,
    jsoniqLexer.Kdiv,
    jsoniqLexer.Kmod,
    jsoniqLexer.Kassign,
];

const SEPARATOR_TOKENS: number[] = [
    jsoniqLexer.Kcomma,
    jsoniqLexer.Ksemicolon,
];

const NAMESPACE_TOKENS: number[] = [
    jsoniqLexer.Knamespace,
    jsoniqLexer.Kexternal,
];

/// Mapping from token types to CodeMirror styles
const BATCH_TOKENS_TO_STYLE = new Map<Array<number>, Tag>([
    [KEYWORD_TOKENS, tags.keyword],
    [NUMBER_TOKENS, tags.number],
    [SQUARE_BRACKET_TOKENS, tags.squareBracket],
    [BRACE_TOKENS, tags.brace],
    [PAREN_TOKENS, tags.paren],
    [OPERATOR_TOKENS, tags.operator],
    [SEPARATOR_TOKENS, tags.separator],
    [NAMESPACE_TOKENS, tags.namespace],
]);

export const TOKEN_TYPE_TO_TAG = new Map<number, Tag>([
    [jsoniqLexer.XQComment, tags.comment],
    [jsoniqLexer.STRING, tags.string],
    [jsoniqLexer.Kmodule, tags.moduleKeyword],
    [jsoniqLexer.Kannotation, tags.annotation],
]);

for (const [tokenBatch, tag] of BATCH_TOKENS_TO_STYLE) {
    for (const tokenType of tokenBatch) {
        TOKEN_TYPE_TO_TAG.set(tokenType, tag);
    }
}