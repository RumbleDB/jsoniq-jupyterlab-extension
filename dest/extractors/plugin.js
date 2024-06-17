"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lsp_1 = require("@jupyterlab/lsp");
const extractors_js_1 = require("./extractors.js");
const PLUGIN_ID = "davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq";
const plugin = {
    id: PLUGIN_ID,
    requires: [lsp_1.ILSPCodeExtractorsManager],
    activate: (_app, extractors) => {
        extractors.register(extractors_js_1.jsoniqExtractor, "python");
    },
    autoStart: true,
};
exports.default = plugin;
//# sourceMappingURL=plugin.js.map