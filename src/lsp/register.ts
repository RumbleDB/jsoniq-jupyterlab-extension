import { ILSPCodeExtractorsManager } from "@jupyterlab/lsp";
import { RegExpForeignCodeExtractor } from "@jupyter-lsp/jupyterlab-lsp";

export function registerJSONiqMagicLSP(lspCodeExtractorsManager: ILSPCodeExtractorsManager | null) {
    if (lspCodeExtractorsManager !== null) {
        console.log("Registering JSONiq magic for jupyterlab-lsp");
        lspCodeExtractorsManager.register(
            new RegExpForeignCodeExtractor({
                language: "jsoniq",
                pattern: "^%%(jsoniq)( .*?)?\n([^]*)",
                foreignCaptureGroups: [3],
                isStandalone: true,
                fileExtension: "jq",
            }),
            null,
        );
    } else {
        console.warn("jupyterlab-lsp not found, skipping registration of JSONiq magic");
    }
}
