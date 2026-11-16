# jsoniq-jupyterlab-extension

## 3.0.0

### Major Changes

- [`5f72c56`](https://github.com/RumbleDB/jsoniq-jupyterlab-extension/commit/5f72c566f9c6061b33e6012cb54efeabf7f90dc8) - Run the JSONiq language server from this extension, instead of through jupyterlab-lsp.

    **Breaking changes**

    - jupyterlab-lsp and jupyter-lsp are no longer used. The extension runs its own JSONiq language server through a Jupyter server extension, so uninstall jupyterlab-lsp if you only used it for JSONiq.
    - Node.js must be on the Jupyter server's PATH. RumbleDB needs Java 17 or later.
    - Requires JupyterLab 4.6 or later and Python 3.11 or later.

    **New**

    - Highlighting uses the VS Code TextMate grammars. Multi-line comments and string templates now highlight correctly, and XQuery is detected.
    - Language features in `%%jsoniq` cells and `.jq` files: completion, diagnostics, hover, signature help, go to definition, references, rename and formatting.
    - The status bar shows the server's state, the RumbleDB download and memory use.
    - Settings for RumbleDB, Delta Lake and Spark properties.
    - Relative paths in notebook cells resolve against the notebook.
    - `python -m jsoniq_jupyterlab_extension ensure-wrapper` downloads RumbleDB ahead of time.
    - `JSONIQ_LSP_SERVER` and `JSONIQ_LSP_CACHE_DIR` override the server and the download location.

### Patch Changes

- [`85ee784`](https://github.com/RumbleDB/jsoniq-jupyterlab-extension/commit/85ee78482f344b22fb8e94243688dbaddc1a18ce) - Update dependencies, including the CodeMirror autocompletion bundled with the extension.
