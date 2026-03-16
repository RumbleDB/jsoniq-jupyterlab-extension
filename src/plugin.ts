import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { CodeMirrorEditor, IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { registerJSONiqLanguage } from "./code-mirror/register-language.js";
import { jsoniqIcon } from "./icon.js";
import { INotebookTracker, NotebookPanel } from "@jupyterlab/notebook";
import { Cell, CodeCell, ICellModel } from "@jupyterlab/cells";
import { JSONIQ_EXTENSION, JSONIQ_LANGUAGE, JSONIQ_LANGUAGE_DISPLAY_NAME, JSONIQ_MIME_TYPE, JUPYTER_PLUGIN_ID } from "./const.js";

const refreshedWidgets = new WeakSet<any>();

const hasWrongHighlighting = (cell: Cell): boolean => {
    /// For some reason, when starting the JupyterLab, the first couple of cells are not rendered correctly
    /// I believe that there is some racing conditions between this plugin and the internal notebook rendering engine
    /// Because the mime type is set to JSONiq, but the cell is still highlighted as python
    /// Here I check that the cell is highlighted as python, if it is, then it is not rendered correctly
    return cell.node.querySelectorAll(`div[data-language="python"]`).length > 0;
}

const shouldRefresh = (cell: Cell): boolean => {
    if (cell instanceof CodeCell && cell.editor instanceof CodeMirrorEditor) {
        return !refreshedWidgets.has(cell) && hasWrongHighlighting(cell);
    }
    return false;
}

/**
 * Force a CodeMirror editor to re-evaluate its language and re-render.
 */
function refreshEditor(cell: Cell): void {
    if (cell instanceof CodeCell && cell.editor instanceof CodeMirrorEditor && shouldRefresh(cell)) {
        const cmEditor = cell.editor as CodeMirrorEditor;
        console.log("[JSONiq] Refreshing editor", cell);

        try {
            // 1. Force JLab's internal language sync
            if ((cmEditor as any)._onMimeTypeChanged) {
                console.log("_onMimeTypeChanged");
                (cmEditor as any)._onMimeTypeChanged();
            }

            // 2. Force CodeMirror 6 to re-render/measure
            if (cmEditor.editor) {
                cmEditor.editor.requestMeasure();
            }

            refreshedWidgets.add(cell);
        } catch (e) {
            console.error('[JSONiq] Failed to refresh editor', e);
        }
    }
}

/**
 * Update the MIME type of a cell model based on its content.
 * Uses a "shake" mechanism to force CodeMirror to re-evaluate the language extensions.
 */
function updateCellMimeType(cellOrModel: Cell | ICellModel, nbPanel: NotebookPanel): void {
    if (!cellOrModel || nbPanel.isDisposed) {
        return;
    }

    const isCell = cellOrModel instanceof Cell;
    const model = isCell ? (cellOrModel as Cell).model : (cellOrModel as ICellModel);

    if (!model || model.type !== 'code' || model.isDisposed) {
        return;
    }

    // Try to get the widget for refreshing
    const cellWidget = isCell ? (cellOrModel as Cell) : nbPanel.content.widgets.find(w => w.model === model);

    const contents = model.sharedModel.getSource();
    const isJSONiq = contents.trim().toLowerCase().startsWith("%%jsoniq");

    if (isJSONiq) {
        if (model.mimeType !== JSONIQ_MIME_TYPE) {
            console.log(`[JSONiq] Setting MIME type to ${JSONIQ_MIME_TYPE} for cell ${model.id}`);
            model.mimeType = JSONIQ_MIME_TYPE;
        }
        if (cellWidget) {
            refreshEditor(cellWidget);
        }
    } else {
        if (cellWidget) {
            refreshedWidgets.delete(cellWidget);
        }
    }
}

/**
 * Set up highlighting for all cells in a notebook panel.
 */
function setupNotebookHighlighting(nbPanel: NotebookPanel, registry: IEditorLanguageRegistry): void {
    const model = nbPanel.content.model;
    if (!model) return;

    const checkAllCells = () => {
        if (!model || model.isDisposed) return;
        for (let i = 0; i < model.cells.length; i++) {
            updateCellMimeType(model.cells.get(i), nbPanel);
        }
    };

    const setupCell = (cellModel: ICellModel) => {
        cellModel.sharedModel.changed.connect(() => {
            updateCellMimeType(cellModel, nbPanel);
        });

        updateCellMimeType(cellModel, nbPanel);
    };

    let isInitialized = false;
    const initialize = async () => {
        if (isInitialized || !model) {
            return;
        }
        isInitialized = true;

        // Verify registry
        const lang = await registry.getLanguage(JSONIQ_MIME_TYPE);
        console.log(`[JSONiq] Initializing highlights for: ${nbPanel.title.label}. Registry check: ${lang?.name || 'FAILED'}`);

        // Initialize existing cells
        for (let i = 0; i < model.cells.length; i++) {
            setupCell(model.cells.get(i));
        }

        // Listen for new cells
        model.cells.changed.connect((sender, args) => {
            if (args.type === 'add') {
                args.newValues.forEach(cellModel => setupCell(cellModel));
            }
        });

        // // Also check on session ready
        nbPanel.sessionContext.ready.then(() => checkAllCells());
        nbPanel.sessionContext.kernelChanged.connect(() => checkAllCells());
    };

    nbPanel.context.ready.then(() => initialize());
}

const plugin: JupyterFrontEndPlugin<void> = {
    id: JUPYTER_PLUGIN_ID,
    requires: [IEditorLanguageRegistry, INotebookTracker],
    activate: (
        app: JupyterFrontEnd,
        codeMirrorRecognizedLanguages: IEditorLanguageRegistry,
        tracker: INotebookTracker
    ) => {
        registerJSONiqLanguage(codeMirrorRecognizedLanguages);
        app.docRegistry.addFileType({
            name: JSONIQ_LANGUAGE,
            displayName: JSONIQ_LANGUAGE_DISPLAY_NAME,
            contentType: "code",
            fileFormat: "text",
            extensions: [JSONIQ_EXTENSION],
            mimeTypes: [JSONIQ_MIME_TYPE],
            icon: jsoniqIcon,
        });

        const initializedPanels = new WeakSet<NotebookPanel>();

        const maybeSetupNotebook = (nbPanel: NotebookPanel | null) => {
            if (nbPanel && !initializedPanels.has(nbPanel)) {
                initializedPanels.add(nbPanel);
                setupNotebookHighlighting(nbPanel, codeMirrorRecognizedLanguages);
            }
        };

        // Handle already open and future notebooks
        tracker.forEach(maybeSetupNotebook);
        tracker.widgetAdded.connect((sender, nbPanel) => maybeSetupNotebook(nbPanel));
        tracker.currentChanged.connect((sender, nbPanel) => maybeSetupNotebook(nbPanel));
    },
    autoStart: true,
};

export default plugin;
