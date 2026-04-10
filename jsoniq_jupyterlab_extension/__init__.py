try:
    from ._version import __version__
except ImportError:
    # Fallback when running from source
    import json
    from pathlib import Path

    HERE = Path(__file__).parent.resolve()
    # Check both standard and reorganized dist location
    lab_path = HERE / "labextension"
    if not lab_path.exists():
        lab_path = HERE.parent / "dist" / "labextension"

    if (lab_path / "package.json").exists():
        with (lab_path / "package.json").open() as fid:
            __version__ = json.load(fid)["version"]
    else:
        __version__ = "0.0.0" # Fallback

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jsoniq-jupyterlab-extension"
    }]
