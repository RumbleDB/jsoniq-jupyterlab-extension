import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { RegisterJSONiqInCodeMirror } from "./code_mirror_configuration/register-language.js";
import { jsoniqIcon } from "./icon.js";
import { INotebookTracker } from "@jupyterlab/notebook";
import { Cell, CodeCell } from "@jupyterlab/cells";
import { JSONIQ_EXTENSION, JSONIQ_LANGUAGE, JSONIQ_LANGUAGE_DISPLAY_NAME, JSONIQ_MIME_TYPE, JUPYTER_PLUGIN_ID } from "./const.js";

function highlightJSONiqCell(cell: Cell | null, registry?: IEditorLanguageRegistry): void {
    if (cell instanceof CodeCell) {
        const contents = cell.model.sharedModel.getSource();
        const isJSONiq = contents.trim().startsWith("%%jsoniq") || contents.trim().startsWith("%%JSONiq");

        if (isJSONiq) {
            const jsoniqMime = "text/x-jsoniq";
            if (cell.model.mimeType !== jsoniqMime) {
                cell.model.mimeType = jsoniqMime;
                cell.model.setMetadata('language', 'jsoniq');
                console.log("Cell mode changed to JSONiq");
            }
        } else if (cell.model.mimeType === "text/x-jsoniq") {
            let defaultMime = "text/x-python";
            if (registry) {
                const info = registry.findBest("python");
                if (info) {
                    defaultMime = Array.isArray(info.mime) ? info.mime[0] : info.mime;
                }
            }
            cell.model.mimeType = defaultMime;
            cell.model.deleteMetadata('language');
            console.log("Cell mode reset to default");
        }
    }
}

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [ILSPCodeExtractorsManager, IEditorLanguageRegistry, INotebookTracker],
    activate: (
        app: JupyterFrontEnd,
        extractors: ILSPCodeExtractorsManager,
        codeMirrorRecognizedLanguages: IEditorLanguageRegistry,
        tracker: INotebookTracker
    ) => {
        const jsoniqLanguageRegister = new RegisterJSONiqInCodeMirror(
            codeMirrorRecognizedLanguages
        );

        app.docRegistry.addFileType({
            name: JSONIQ_LANGUAGE,
            displayName: JSONIQ_LANGUAGE_DISPLAY_NAME,
            contentType: "code",
            fileFormat: "text",
            extensions: [JSONIQ_EXTENSION],
            mimeTypes: [JSONIQ_MIME_TYPE],
            icon: jsoniqIcon,
        });

        jsoniqLanguageRegister.registerJSONiqLanguage();

        const setupCell = (cell: Cell) => {
            console.log("Setup cell");
            if (!(cell instanceof CodeCell)) {
                console.log("Cell is not a CodeCell");
                return;
            }

            // Avoid duplicate setup
            if ((cell as any)._jsoniqSetup) {
                console.log("Cell is already setup");
                return;
            }
            (cell as any)._jsoniqSetup = true;

            highlightJSONiqCell(cell, codeMirrorRecognizedLanguages);

            // Listen for changes in the cell content to update highlighting live
            cell.model.sharedModel.changed.connect(() => {
                highlightJSONiqCell(cell, codeMirrorRecognizedLanguages);
            });
        };

        // Highlighting for notebooks
        tracker.currentChanged.connect((tr, nbPanel) => {
            if (!nbPanel) return;
            nbPanel.revealed.then(() => {
                nbPanel.content.widgets.forEach(setupCell);
                // Also listen for new cells added to this notebook
                nbPanel.content.model?.cells.changed.connect(() => {
                    nbPanel.content.widgets.forEach(setupCell);
                });
            });
        });

        tracker.activeCellChanged.connect(() => {
            if (tracker.activeCell) {
                setupCell(tracker.activeCell);
            }
        });

        tracker.widgetAdded.connect((tr, nbPanel) => {
            nbPanel.revealed.then(() => {
                console.log("Widget added");
                nbPanel.content.widgets.forEach(setupCell);
                nbPanel.content.model?.cells.changed.connect(() => {
                    nbPanel.content.widgets.forEach(setupCell);
                });
            });
        });
    },
    autoStart: true,
};

export default plugin;
