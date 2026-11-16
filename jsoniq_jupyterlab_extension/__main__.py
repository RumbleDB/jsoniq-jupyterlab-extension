"""Commands for the JSONiq language server: `python -m jsoniq_jupyterlab_extension --help`."""

import argparse
import subprocess
import sys

from .language_server import server_command


def ensure_wrapper() -> int:
    """Download RumbleDB to the cache, unless it is there, and print how the server starts it."""
    command = server_command("--ensure-wrapper")
    if command is None:
        print("Node.js or the JSONiq language server is not installed.", file=sys.stderr)
        return 1
    return subprocess.run(command, check=False).returncode


COMMANDS = {"ensure-wrapper": ensure_wrapper}


def main() -> int:
    parser = argparse.ArgumentParser(prog="python -m jsoniq_jupyterlab_extension")
    subparsers = parser.add_subparsers(dest="command", required=True)
    for name, command in COMMANDS.items():
        subparsers.add_parser(name, help=command.__doc__)
    return COMMANDS[parser.parse_args().command]()


if __name__ == "__main__":
    sys.exit(main())
