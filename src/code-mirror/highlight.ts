import { Compartment, EditorState, Extension, Prec } from "@codemirror/state";
import { jsoniq } from "./language";
import { JSONIQ_MAGIC_COMMAND, JSONIQ_MIME_TYPE } from "../const";

type EditorModel = {
    mimeType: string;
    sharedModel: {
        source: string;
    };
};

/**
 * This function is called for every transaction (change in cell input).
 * If the editor is a JSONiq file or the cell starts with '%%jsoniq',
 * then the language is set to JSONiq.
 * Otherwise, it clears its language selection to allow fallback to other extensions.
 */
function isJSONIQText(text: string, model: EditorModel): boolean {
    return (
        model.mimeType === JSONIQ_MIME_TYPE ||
        text.slice(0, JSONIQ_MAGIC_COMMAND.length) === JSONIQ_MAGIC_COMMAND
    );
}

export function languageSelection(model: EditorModel): Extension {
    const languageConf = new Compartment();
    const autoLanguage = EditorState.transactionExtender.of((tr) => {
        return {
            effects: languageConf.reconfigure(
                isJSONIQText(tr.newDoc.sliceString(0, JSONIQ_MAGIC_COMMAND.length), model)
                    ? jsoniq
                    : [],
            ),
        };
    });

    return [
        // We use high precedence to ensure JSONiq wins over other plugins (like jupysql)
        // when the file type or cell magic explicitly marks the editor as JSONiq.
        // When not JSONiq, we reconfigure to an empty extension [], letting others take over.
        Prec.highest(languageConf.of(isJSONIQText(model.sharedModel.source, model) ? jsoniq : [])),
        autoLanguage,
    ];
}
