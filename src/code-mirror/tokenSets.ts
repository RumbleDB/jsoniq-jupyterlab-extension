import { tags, Tag } from "@lezer/highlight";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";

export const TAG_TO_STYLE_NAME = new Map<Tag, string>();
for (const [styleName, tag] of Object.entries(tags)) {
    if (tag instanceof Tag) {
        TAG_TO_STYLE_NAME.set(tag, styleName);
    }
}

export const KEYWORD_TOKENS = new Set<number>([
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
]);

export const NUMBER_TOKENS = new Set<number>([
    jsoniqLexer.Literal,
    jsoniqLexer.NumericLiteral,
    jsoniqLexer.DoubleLiteral,
    jsoniqLexer.IntegerLiteral,
    jsoniqLexer.DecimalLiteral,
]);

export const SQUARE_BRACKET_TOKENS = new Set<number>([
    jsoniqLexer.Klbracket,
    jsoniqLexer.Krbracket,
]);

export const BRACE_TOKENS = new Set<number>([
    jsoniqLexer.Klbrace,
    jsoniqLexer.Krbrace,
]);

export const PAREN_TOKENS = new Set<number>([
    jsoniqLexer.Klparen,
    jsoniqLexer.Krparen,
]);

export const OPERATOR_TOKENS = new Set<number>([
    jsoniqLexer.Kplus,
    jsoniqLexer.Kminus,
    jsoniqLexer.Kasterisk,
    jsoniqLexer.Kdiv,
    jsoniqLexer.Kmod,
    jsoniqLexer.Kassign,
]);

export const SEPARATOR_TOKENS = new Set<number>([
    jsoniqLexer.Kcomma,
    jsoniqLexer.Ksemicolon,
]);

export const NAMESPACE_TOKENS = new Set<number>([
    jsoniqLexer.Knamespace,
    jsoniqLexer.Kexternal,
]);
