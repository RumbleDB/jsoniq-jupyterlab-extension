import { sql } from "@codemirror/lang-sql";
import { Compartment, EditorState, type Extension, Prec, Text } from "@codemirror/state";

import { JSONIQ_MAGIC_COMMAND, JSONIQ_MIME_TYPE, SPARKSQL_MAGIC_COMMAND } from "../const";
import { jsoniq } from "./language";

export type EditorModel = {
    mimeType: string;
    sharedModel: {
        source: string;
    };
};

type CellLanguage = "jsoniq" | "sparksql" | null;

function startsWith(doc: Text, prefix: string): boolean {
    return doc.sliceString(0, prefix.length) === prefix;
}

/** Whether the editor holds JSONiq: a JSONiq file, or a cell that starts with `%%jsoniq`. */
export function isJSONiq(doc: Text, model: EditorModel): boolean {
    return model.mimeType === JSONIQ_MIME_TYPE || startsWith(doc, JSONIQ_MAGIC_COMMAND);
}

function cellLanguage(doc: Text, model: EditorModel): CellLanguage {
    if (isJSONiq(doc, model)) {
        return "jsoniq";
    }
    return startsWith(doc, SPARKSQL_MAGIC_COMMAND) ? "sparksql" : null;
}

function languageExtension(language: CellLanguage): Extension {
    return language === "jsoniq" ? jsoniq : language === "sparksql" ? sql() : [];
}

/**
 * Highlights JSONiq files and the cells that start with `%%jsoniq` as JSONiq, and `%%sparksql`
 * cells as SQL. Other editors keep the language that JupyterLab gives them.
 */
export function languageSelection(model: EditorModel): Extension {
    const languageConf = new Compartment();
    let current = cellLanguage(Text.of(model.sharedModel.source.split(/\r?\n/)), model);
    // Reconfigures only when the language changes: `sql()` creates a new parser each time.
    // The MIME type changes when a file is renamed, so it is checked again on the next edit.
    const autoLanguage = EditorState.transactionExtender.of((tr) => {
        const language = cellLanguage(tr.newDoc, model);
        if (language === current) {
            return null;
        }
        current = language;
        return { effects: languageConf.reconfigure(languageExtension(language)) };
    });

    return [
        // We use high precedence to ensure JSONiq wins over other plugins (like jupysql)
        // when the file type or cell magic explicitly marks the editor as JSONiq.
        // When not JSONiq, we reconfigure to an empty extension [], letting others take over.
        Prec.highest(languageConf.of(languageExtension(current))),
        autoLanguage,
    ];
}
