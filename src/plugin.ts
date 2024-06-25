import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { JSONiqExtractor } from "./extractor/extractors.js";
import { IEditorLanguageRegistry } from "@jupyterlab/codemirror";
import { LanguageSupport } from "@codemirror/language";
import { jsoniqLanguageDefinition } from "./code_mirror_configuration/tokenizer.js";

const PLUGIN_ID = "davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq";
const plugin: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  requires: [ILSPCodeExtractorsManager as any, IEditorLanguageRegistry],
  activate: (
    _app: JupyterFrontEnd,
    extractors: ILSPCodeExtractorsManager,
    codeMirrorRecognizedLanguages: IEditorLanguageRegistry
  ) => {
    const jsoniqExtractor = new JSONiqExtractor(extractors);
    jsoniqExtractor.registerExtractor();

    codeMirrorRecognizedLanguages.addLanguage({
      name: "jsoniq",
      displayName: "JSONiq",
      mime: [
        "application/jsoniq",
        "text/jsoniq",
        "text/x-jsoniq",
        "text/python",
        "text/x-python",
      ],
      extensions: [".jq"],
      support: new LanguageSupport(jsoniqLanguageDefinition),
    });
    console.log("Activated plugin!");
  },
  autoStart: true,
};

export default plugin;
