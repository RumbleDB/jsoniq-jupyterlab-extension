---
"jsoniq-jupyterlab-extension": major
---

Run the JSONiq language server from this extension, instead of through jupyterlab-lsp.

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
