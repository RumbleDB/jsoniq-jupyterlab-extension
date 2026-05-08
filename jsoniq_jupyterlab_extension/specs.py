import pathlib
import shutil
from pathlib import Path

HERE = Path(__file__).parent.resolve()
REPO_ROOT = HERE.parent
LANGUAGE_SERVER_ROOT = HERE / "language_server"
DEV_LANGUAGE_SERVER_ROOT = (
    REPO_ROOT / "node_modules" / "@jimmycai" / "jsoniq-language-server"
)

NODE_LOCATION = (
    shutil.which("node") or shutil.which("node.exe") or shutil.which("node.cmd")
)
NODE = pathlib.Path(NODE_LOCATION) if NODE_LOCATION else None


def _find_language_server_root():
    bundled_script = LANGUAGE_SERVER_ROOT / "dist" / "bundled" / "main.mjs"
    if bundled_script.exists():
        return LANGUAGE_SERVER_ROOT

    dev_script = DEV_LANGUAGE_SERVER_ROOT / "dist" / "bundled" / "main.mjs"
    if dev_script.exists():
        return DEV_LANGUAGE_SERVER_ROOT

    return LANGUAGE_SERVER_ROOT


class JSONIQLanguageServer:
    key = "@jimmycai/jsoniq-language-server"
    languages = ["jsoniq"]

    @property
    def is_installed(self):
        return NODE is not None and self.script.exists()

    @property
    def script(self):
        return _find_language_server_root() / "dist" / "bundled" / "main.mjs"

    @property
    def argv(self):
        node = NODE
        if node is None:
            return []

        return [node, str(self.script), "--stdio"]

    @property
    def spec(self):
        return dict(
            argv=self.argv,
            languages=self.languages,
            display_name="JSONiq Language Server",
            mime_types=["text/x-jsoniq"],
            urls=dict(
                home="https://www.npmjs.com/package/@jimmycai/jsoniq-language-server",
            ),
            install=dict(
                pip="pip install jsoniq-jupyterlab-extension",
            ),
            env={"JSONIQ_LSP_DEBUG": "1"},
        )


jsoniq_language_server = JSONIQLanguageServer()
