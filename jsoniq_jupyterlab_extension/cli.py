import shutil
import subprocess
import sys

from .specs import _find_language_server_root


def _ensure_wrapper_script():
    return (
        _find_language_server_root()
        / "dist"
        / "wrapper"
        / "executable"
        / "ensure-wrapper.mjs"
    )


def ensure_wrapper():
    node = shutil.which("node")
    if node is None:
        raise SystemExit("Could not find 'node' on PATH.")

    script = _ensure_wrapper_script()
    if not script.exists():
        raise SystemExit(f"Could not find bundled ensure-wrapper script at {script}.")

    completed = subprocess.run([node, str(script), *sys.argv[1:]], check=False)
    raise SystemExit(completed.returncode)
