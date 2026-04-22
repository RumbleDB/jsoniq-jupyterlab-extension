import { Compartment, EditorState, Extension, Prec } from "@codemirror/state"
import { jsoniq } from "./language";
import { JSONIQ_MAGIC_COMMAND } from "../const";

const languageConf = new Compartment;

/**
 * This function is called for every transaction (change in cell input).
 * If the cell is a JSONiq cell (starting with '%%jsoniq'), then the language is set to JSONiq.
 * Otherwise, it clears its language selection to allow fallback to other extensions.
 */
const autoLanguage = EditorState.transactionExtender.of(tr => {
    const isJSONIQ = tr.newDoc.sliceString(0, JSONIQ_MAGIC_COMMAND.length) === JSONIQ_MAGIC_COMMAND;

    return {
        effects: languageConf.reconfigure(isJSONIQ ? jsoniq : [])
    };
})

export function languageSelection(): Extension {
    return [
        // We use high precedence to ensure JSONiq wins over other plugins (like jupysql)
        // when the cell is explicitly marked as JSONiq.
        // When not JSONiq, we reconfigure to an empty extension [], letting others take over.
        Prec.highest(languageConf.of([])),
        autoLanguage,
    ];
}