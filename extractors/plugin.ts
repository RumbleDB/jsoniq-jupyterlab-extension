import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { jsoniqExtractor } from "./extractors.js";

const PLUGIN_ID = "davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq";
const plugin: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  requires: [ILSPCodeExtractorsManager as any],
  activate: (_app: JupyterFrontEnd, extractors: ILSPCodeExtractorsManager) => {
    extractors.register(jsoniqExtractor, "python");
  },
  autoStart: true,
};

export default plugin;
