import { Compartment, EditorState, Extension } from "@codemirror/state"
import { jsoniq } from "./language";
import { JSONIQ_MAGIC_COMMAND } from "../const";

const languageConf = new Compartment;

/**
 * This function is called for every transaction (change in cell input).
 * If the cell is a JSONiq cell (starting with '%%jsoniq'), then the language is set to JSONiq.
 */
const autoLanguage = EditorState.transactionExtender.of(tr => {
    const isJSONIQ = tr.newDoc.sliceString(0, JSONIQ_MAGIC_COMMAND.length) === JSONIQ_MAGIC_COMMAND;

    if (isJSONIQ) {
        return {
            effects: languageConf.reconfigure(jsoniq)
        };
    }

    return {};
})

export function languageSelection(): Extension {
    return [
        languageConf.of(jsoniq),
        autoLanguage,
    ];
}