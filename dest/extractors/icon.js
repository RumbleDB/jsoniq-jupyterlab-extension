"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsoniqIcon = exports.NS = void 0;
exports.NS = "davidbuzatu-marian/jsoniq-jupyter-plugin";
const ui_components_1 = require("@jupyterlab/ui-components");
const JSONiq_svg_1 = __importDefault(require("../images/JSONiq.svg"));
exports.jsoniqIcon = new ui_components_1.LabIcon({
    svgstr: JSONiq_svg_1.default,
    name: `${exports.NS}:jsoniq`,
});
//# sourceMappingURL=icon.js.map