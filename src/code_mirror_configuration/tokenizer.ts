// import antlr from "antlr4";
import { CharStream, CommonTokenStream, CommonToken } from "antlr4ng";
import { tags, Tag } from "@lezer/highlight";
import { StreamLanguage } from "@codemirror/language";
import { jsoniqLexer } from "../grammar/jsoniqLexer.js";

function getStyleNameByTag(tag: Tag): string {
  for (let t in tags) {
    if ((tags as any)[t] === tag) {
      return t;
    }
  }

  return "";
}
function getTokenNameByTokenValue(tokenValue: number): string {
  for (let tokenName in jsoniqLexer) {
    if (((jsoniqLexer as any)[tokenName] as number) === tokenValue) {
      return tokenName;
    }
  }

  return "";
}

function getTokens(tokens: CommonToken[]) {
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

export function getTokensForText(text: string) {
  var chars = CharStream.fromString(text);
  var lexer = new jsoniqLexer(chars);
  var tokensStream = new CommonTokenStream(lexer);
  tokensStream.fill();
  return getTokens((tokensStream as any).tokens);
}

export const jsoniqLanguageDefinition = StreamLanguage.define({
  token: (stream, _) => {
    const tokens = getTokensForText(stream.string);
    console.log("Tokens:");
    console.log(tokens);
    const nextToken = tokens.filter((t) => t.startIndex >= stream.pos)[0];
    if (nextToken.type !== jsoniqLexer.EOF && stream.match(nextToken.text)) {
      let valueClass = getStyleNameByTag(tags.keyword);
      console.log(nextToken);
      console.log(nextToken.type);
      switch (nextToken.type) {
        case jsoniqLexer.Kmodule:
        case jsoniqLexer.Kversion:
        case jsoniqLexer.Kexternal:
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
          valueClass = "keyword";
          break;
        default:
          valueClass = "variable";
          break;
      }

      return valueClass;
    } else {
      stream.next();
      return null;
    }
  },
});
