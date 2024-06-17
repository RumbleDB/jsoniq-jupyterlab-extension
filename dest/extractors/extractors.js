"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsoniqExtractor = void 0;
const jupyterlab_lsp_1 = require("@jupyter-lsp/jupyterlab-lsp");
exports.jsoniqExtractor = new jupyterlab_lsp_1.RegExpForeignCodeExtractor({
    language: "jsoniq",
    pattern: "^%%(jsoniq)( .*?)?\n([^]*)",
    foreignCaptureGroups: [3],
    isStandalone: true,
    fileExtension: "jq",
});
//# sourceMappingURL=extractors.js.map