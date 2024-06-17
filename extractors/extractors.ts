import { RegExpForeignCodeExtractor } from "@jupyter-lsp/jupyterlab-lsp";

export const jsoniqExtractor = new RegExpForeignCodeExtractor({
  language: "jsoniq",
  pattern: "^%%(jsoniq)( .*?)?\n([^]*)",
  foreignCaptureGroups: [3],
  isStandalone: true,
  fileExtension: "jq",
});
