from jupyter_lsp.specs.utils import NodeModuleSpec


class JSONIQLanguageServer(NodeModuleSpec):
    node_module = key = "@jimmycai/jsoniq-language-server"
    script = ["dist", "server", "main.js"]
    languages = ["jsoniq"]
    args = ["--stdio"]
    spec = dict(
        display_name="JSONiq Language Server",
        mime_types=["text/x-jsoniq"],
        urls=dict(
            home="https://www.npmjs.com/package/@jimmycai/jsoniq-language-server",
        ),
        install=dict(
            npm="npm install -g @jimmycai/jsoniq-language-server",
            yarn="yarn global add @jimmycai/jsoniq-language-server",
            pnpm="pnpm add -g @jimmycai/jsoniq-language-server",
        ),
        env={"JSONIQ_LSP_DEBUG": "1"},
    )


jsoniq_language_server = JSONIQLanguageServer()
