from importlib.metadata import version
from pathlib import Path

__version__ = version("jsoniq-jupyterlab-extension")


def _jupyter_labextension_paths():
    """For `jupyter labextension develop`: installed packages get the extension from the wheel."""
    lab_path = Path(__file__).parent.parent / "dist" / "labextension"
    return [{"src": str(lab_path), "dest": "jsoniq-jupyterlab-extension"}]


def _jupyter_server_extension_points():
    return [{"module": "jsoniq_jupyterlab_extension"}]


def _load_jupyter_server_extension(server_app):
    from .language_server import setup

    setup(server_app)
