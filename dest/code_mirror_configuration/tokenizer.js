// import antlr from "antlr4";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { tags } from "@lezer/highlight";
import { StreamLanguage } from "@codemirror/language";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";
function getStyleNameByTag(tag) {
    for (let t in tags) {
        if (tags[t] === tag) {
            return t;
        }
    }
    return "";
}
function getTokenNameByTokenValue(tokenValue) {
    for (let tokenName in jsoniqLexer) {
        if (jsoniqLexer[tokenName] === tokenValue) {
            return tokenName;
        }
    }
    return "";
}
function getTokens(tokens) {
    return tokens.map((token) => {
        return {
            tokenName: getTokenNameByTokenValue(token.type),
            text: token.text || "",
            type: token.type,
            startIndex: token.start,
            stopIndex: token.stop,
        };
    });
}
export function getTokensForText(text) {
    var chars = CharStream.fromString(text);
    var lexer = new jsoniqLexer(chars);
    var tokensStream = new CommonTokenStream(lexer);
    tokensStream.fill();
    return getTokens(tokensStream.tokens);
}
export const jsoniqLanguageDefinition = StreamLanguage.define({
    token: (stream, _) => {
        const tokens = getTokensForText(stream.string);
        const nextToken = tokens.filter((t) => t.startIndex >= stream.pos)[0];
        if (nextToken.type !== jsoniqLexer.EOF && stream.match(nextToken.text)) {
            let valueClass = getStyleNameByTag(tags.keyword);
            console.log(nextToken);
            switch (nextToken.type) {
                case jsoniqLexer.T__1:
                    // $ symbol
                    valueClass = getStyleNameByTag(tags.variableName);
                    break;
                case jsoniqLexer.NCName:
                    valueClass = getStyleNameByTag(tags.variableName);
                    break;
                case jsoniqLexer.Kversion:
                case jsoniqLexer.Kcontext:
                case jsoniqLexer.Ktype:
                case jsoniqLexer.Kfor:
                case jsoniqLexer.Ktypeswitch:
                case jsoniqLexer.Kswitch:
                case jsoniqLexer.Kif:
                case jsoniqLexer.Kthen:
                case jsoniqLexer.Kelse:
                case jsoniqLexer.Ktry:
                case jsoniqLexer.Kcatch:
                case jsoniqLexer.Kwhere:
                case jsoniqLexer.Kgroup:
                case jsoniqLexer.Kby:
                case jsoniqLexer.Korder:
                case jsoniqLexer.Kas:
                case jsoniqLexer.Kat:
                case jsoniqLexer.Kin:
                case jsoniqLexer.Kdeclare:
                case jsoniqLexer.Kimport:
                case jsoniqLexer.Kreplace:
                case jsoniqLexer.Kvalue:
                case jsoniqLexer.Kof:
                case jsoniqLexer.Krename:
                case jsoniqLexer.Kinsert:
                case jsoniqLexer.Kdelete:
                case jsoniqLexer.Kcopy:
                case jsoniqLexer.Kappend:
                case jsoniqLexer.Kwith:
                case jsoniqLexer.Kmodify:
                case jsoniqLexer.Kinto:
                case jsoniqLexer.Kbreak:
                case jsoniqLexer.Kloop:
                case jsoniqLexer.Kcontinue:
                case jsoniqLexer.Kexit:
                case jsoniqLexer.Kreturning:
                case jsoniqLexer.Kwhile:
                case jsoniqLexer.Kannotate:
                case jsoniqLexer.Kvalidate:
                case jsoniqLexer.Kcastable:
                case jsoniqLexer.Kcast:
                case jsoniqLexer.Ktreat:
                case jsoniqLexer.Kis:
                case jsoniqLexer.Kstatically:
                case jsoniqLexer.Kinstance:
                case jsoniqLexer.Kto:
                case jsoniqLexer.Kcollation:
                case jsoniqLexer.Ksatisfies:
                case jsoniqLexer.Kstable:
                case jsoniqLexer.Kempty:
                case jsoniqLexer.Kallowing:
                case jsoniqLexer.Kreturn:
                case jsoniqLexer.Kleast:
                case jsoniqLexer.Kgreatest:
                case jsoniqLexer.Ksome:
                case jsoniqLexer.Kevery:
                case jsoniqLexer.Kascending:
                case jsoniqLexer.Kdescending:
                case jsoniqLexer.Kordering:
                case jsoniqLexer.Kordered:
                case jsoniqLexer.Kcase:
                case jsoniqLexer.Kdefault:
                case jsoniqLexer.Kunordered:
                case jsoniqLexer.Keq:
                case jsoniqLexer.Kne:
                case jsoniqLexer.Klt:
                case jsoniqLexer.Kle:
                case jsoniqLexer.Kgt:
                case jsoniqLexer.Kge:
                case jsoniqLexer.Kand:
                case jsoniqLexer.Kor:
                case jsoniqLexer.Knot:
                case jsoniqLexer.Kcontext_dollars:
                case jsoniqLexer.Ktrue:
                case jsoniqLexer.Kfalse:
                    valueClass = getStyleNameByTag(tags.keyword);
                    break;
                case jsoniqLexer.XQComment:
                    valueClass = getStyleNameByTag(tags.comment);
                    break;
                case jsoniqLexer.STRING:
                    valueClass = getStyleNameByTag(tags.string);
                    break;
                case jsoniqLexer.Literal:
                case jsoniqLexer.NumericLiteral:
                case jsoniqLexer.DoubleLiteral:
                case jsoniqLexer.IntegerLiteral:
                case jsoniqLexer.DecimalLiteral:
                    valueClass = getStyleNameByTag(tags.number);
                    break;
                case jsoniqLexer.T__33:
                case jsoniqLexer.T__34:
                    // [] brackets
                    valueClass = getStyleNameByTag(tags.squareBracket);
                    break;
                case jsoniqLexer.T__2:
                case jsoniqLexer.T__3:
                    // {} braces
                    valueClass = getStyleNameByTag(tags.brace);
                    break;
                case jsoniqLexer.T__4:
                case jsoniqLexer.T__5:
                    // () parenthesis
                    valueClass = getStyleNameByTag(tags.paren);
                    break;
                case jsoniqLexer.T__27:
                case jsoniqLexer.T__28:
                case jsoniqLexer.T__6:
                case jsoniqLexer.T__29:
                case jsoniqLexer.T__31:
                case jsoniqLexer.Kassign:
                    // +, -, *, div, mod, :=
                    valueClass = getStyleNameByTag(tags.operator);
                    break;
                case jsoniqLexer.T__9:
                case jsoniqLexer.T__35:
                case jsoniqLexer.T__0:
                    // ",", ".", ";"
                    valueClass = getStyleNameByTag(tags.punctuation);
                    break;
                case jsoniqLexer.Kfunction:
                case jsoniqLexer.Kvariable:
                case jsoniqLexer.Klet:
                    valueClass = getStyleNameByTag(tags.keyword);
                    break;
                case jsoniqLexer.Knamespace:
                case jsoniqLexer.Kexternal:
                    valueClass = getStyleNameByTag(tags.namespace);
                    break;
                case jsoniqLexer.Kmodule:
                    valueClass = getStyleNameByTag(tags.moduleKeyword);
                    break;
                case jsoniqLexer.T__8:
                    // "%"
                    valueClass = getStyleNameByTag(tags.annotation);
                    break;
                default:
                    valueClass = getStyleNameByTag(tags.variableName);
                    break;
            }
            return valueClass;
        }
        else {
            stream.next();
            return null;
        }
    },
});
//# sourceMappingURL=tokenizer.js.map