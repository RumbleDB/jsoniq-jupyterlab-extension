"""Runs a JSONiq language server for each JupyterLab tab, over a WebSocket.

A language server serves a single client, so each connection starts its own server, which stops
when the connection closes.
"""

from __future__ import annotations

import asyncio
import os
import shutil
from pathlib import Path

from jupyter_core.utils import ensure_async
from jupyter_server.auth.decorator import ws_authenticated
from jupyter_server.base.handlers import JupyterHandler
from jupyter_server.serverapp import ServerApp
from jupyter_server.utils import url_path_join
from tornado import web
from tornado.websocket import WebSocketClosedError, WebSocketHandler

BUNDLED_SERVER = Path(__file__).parent / "language-server" / "dist" / "bundled" / "main.mjs"

# Closing with this code tells the client not to reconnect; `src/lsp/connection.ts` has it too.
NOT_INSTALLED = 4001


def server_command(*args: str) -> list[str] | None:
    """Runs the bundled server, or the one at `JSONIQ_LSP_SERVER`, with Node.js; `None` without
    Node.js or the server."""
    node = shutil.which("node")
    script = Path(os.environ.get("JSONIQ_LSP_SERVER", BUNDLED_SERVER))
    if node is None or not script.is_file():
        return None
    return [node, str(script), *args]


async def read_message(stream: asyncio.StreamReader) -> bytes | None:
    """Reads a message of the LSP base protocol: headers, an empty line, then `Content-Length`
    bytes of content. `None` once the server has exited."""
    length = 0
    while (line := await stream.readline()) != b"\r\n":
        if not line:
            return None
        name, _, value = line.partition(b":")
        if name.strip().lower() == b"content-length":
            length = int(value)
    try:
        return await stream.readexactly(length)
    except asyncio.IncompleteReadError:
        return None


def frame(content: bytes) -> bytes:
    return b"Content-Length: %d\r\n\r\n%s" % (len(content), content)


class LanguageServerHandler(JupyterHandler, WebSocketHandler):
    """Carries one LSP message per WebSocket message, to and from the server's stdio."""

    auth_resource = "jsoniq"
    process: asyncio.subprocess.Process | None = None
    forwarding: asyncio.Task[None] | None = None

    @ws_authenticated
    async def get(self, *args, **kwargs):
        user = self.current_user
        if not await ensure_async(self.authorizer.is_authorized(self, user, "execute", "jsoniq")):
            raise web.HTTPError(403)
        await super().get(*args, **kwargs)

    async def open(self, *args, **kwargs):
        command = server_command("--stdio")
        if command is None:
            self.close(NOT_INSTALLED, "Node.js or the JSONiq language server is not installed.")
            return
        self.process = await asyncio.create_subprocess_exec(
            *command, stdin=asyncio.subprocess.PIPE, stdout=asyncio.subprocess.PIPE
        )
        self.forwarding = asyncio.create_task(self.forward_from_server(self.process))

    async def forward_from_server(self, process: asyncio.subprocess.Process) -> None:
        assert process.stdout is not None
        try:
            while (message := await read_message(process.stdout)) is not None:
                await self.write_message(message.decode())
        except WebSocketClosedError:
            pass
        finally:
            await process.wait()
            self.close(1011, "The JSONiq language server exited.")

    async def on_message(self, message: str | bytes):
        if self.process is None or self.process.stdin is None:
            return
        content = message.encode() if isinstance(message, str) else message
        try:
            self.process.stdin.write(frame(content))
            await self.process.stdin.drain()
        except ConnectionError:
            pass  # The server exited; `forward_from_server` closes the connection.

    def on_close(self):
        if self.process is not None and self.process.returncode is None:
            self.process.terminate()


def setup(server_app: ServerApp) -> None:
    web_app = server_app.web_app
    route = url_path_join(web_app.settings["base_url"], "jsoniq", "language-server")
    web_app.add_handlers(".*$", [(route, LanguageServerHandler)])
    # The client names documents by their `file:` URI, which the server needs to resolve imports.
    root_uri = Path(server_app.root_dir).expanduser().resolve().as_uri()
    web_app.settings.setdefault("page_config_data", {})["jsoniqRootUri"] = root_uri
