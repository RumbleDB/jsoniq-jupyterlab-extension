import { RegExpForeignCodeExtractor } from "@jupyter-lsp/jupyterlab-lsp";
export class JSONiqExtractor {
    extractorManager;
    constructor(extractorManager) {
        this.extractorManager = extractorManager;
    }
    registerExtractor() {
        const jsoniqExtractor = new RegExpForeignCodeExtractor({
            language: "jsoniq",
            pattern: "^%%(jsoniq)( .*?)?\n([^]*)",
            foreignCaptureGroups: [3],
            isStandalone: true,
            fileExtension: "jq",
        });
        this.extractorManager.register(jsoniqExtractor, "python");
    }
}
//# sourceMappingURL=extractors.js.map