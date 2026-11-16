import asyncio
import json
from pathlib import Path

import pytest
from tornado.httpclient import HTTPClientError

from jsoniq_jupyterlab_extension.__main__ import ensure_wrapper
from jsoniq_jupyterlab_extension.language_server import (
    NOT_INSTALLED,
    frame,
    read_message,
    server_command,
)

ENDPOINT = ("jsoniq", "language-server")
TIMEOUT_S = 30

needs_server = pytest.mark.skipif(
    server_command() is None,
    reason="needs Node.js and the bundled language server: run `pnpm run build`",
)


def stream_of(data: bytes) -> asyncio.StreamReader:
    stream = asyncio.StreamReader()
    stream.feed_data(data)
    stream.feed_eof()
    return stream


async def send(ws, method, params=None, id=None):
    message = {"jsonrpc": "2.0", "method": method, "params": params or {}}
    if id is not None:
        message["id"] = id
    await ws.write_message(json.dumps(message))


async def receive(ws, matches):
    """Reads messages until one that `matches`."""
    while True:
        message = await asyncio.wait_for(ws.read_message(), TIMEOUT_S)
        assert message is not None, f"closed: {ws.close_code} {ws.close_reason}"
        if matches(parsed := json.loads(message)):
            return parsed


async def test_reads_messages_until_the_server_exits():
    content = '{"name":"é"}'.encode()
    other_headers = b"Content-Type: application/vscode-jsonrpc; charset=utf-8\r\n"
    stream = stream_of(frame(content) + other_headers + frame(b"{}"))

    assert await read_message(stream) == content
    assert await read_message(stream) == b"{}"
    assert await read_message(stream) is None


async def test_a_truncated_message_ends_the_stream():
    assert await read_message(stream_of(b"Content-Length: 10\r\n\r\n{}")) is None


async def test_gives_the_page_the_root_uri(jp_serverapp):
    page_config = jp_serverapp.web_app.settings["page_config_data"]
    assert page_config["jsoniqRootUri"] == Path(jp_serverapp.root_dir).resolve().as_uri()


async def test_requires_authentication(jp_ws_fetch):
    with pytest.raises(HTTPClientError) as error:
        await jp_ws_fetch(*ENDPOINT, headers={"Authorization": "token wrong"})
    assert error.value.code == 403


async def test_closes_when_the_server_is_not_installed(jp_ws_fetch, monkeypatch, tmp_path):
    monkeypatch.setenv("JSONIQ_LSP_SERVER", str(tmp_path / "missing.mjs"))
    ws = await jp_ws_fetch(*ENDPOINT)

    assert await asyncio.wait_for(ws.read_message(), TIMEOUT_S) is None
    assert ws.close_code == NOT_INSTALLED


@needs_server
async def test_runs_a_language_server_until_it_exits(jp_ws_fetch):
    ws = await jp_ws_fetch(*ENDPOINT)
    options = {"wrapper": {"enabled": False}}
    initialize = {"processId": None, "rootUri": None, "capabilities": {}}
    await send(ws, "initialize", {**initialize, "initializationOptions": options}, id=1)
    response = await receive(ws, lambda message: message.get("id") == 1)
    assert "completionProvider" in response["result"]["capabilities"]

    await send(ws, "initialized")
    document = {"uri": "file:///a.jq", "languageId": "jsoniq", "version": 1, "text": "$y"}
    await send(ws, "textDocument/didOpen", {"textDocument": document})
    diagnostics = await receive(
        ws, lambda message: message.get("method") == "textDocument/publishDiagnostics"
    )
    assert [d["message"] for d in diagnostics["params"]["diagnostics"]] == [
        "Reference to undefined variable 'y'"
    ]

    await send(ws, "shutdown", id=2)
    await receive(ws, lambda message: message.get("id") == 2)
    await send(ws, "exit")
    assert await asyncio.wait_for(ws.read_message(), TIMEOUT_S) is None
    assert ws.close_code == 1011


def test_ensure_wrapper_needs_node(monkeypatch, capsys):
    monkeypatch.setenv("PATH", "")

    assert ensure_wrapper() == 1
    assert "not installed" in capsys.readouterr().err
