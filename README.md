# JSONiq JupyterLab Extension

`jsoniq-jupyterlab-extension` is a JupyterLab extension for JSONiq: it highlights `%%jsoniq` cells and `.jq` files, and connects them to the JSONiq language server.

## Features

- **Syntax highlighting** - `%%jsoniq` cells and `.jq` files are highlighted with the same TextMate grammars as the VS Code extension, and `%%sparksql` cells as SQL.
- **Language server** - completions, diagnostics, hover documentation, signature help, go to definition and rename for `%%jsoniq` cells and `.jq` files.

## Installation

Install the extension from Python packaging. No `npm` or `yarn` installation is required for users.

The language server runs with [Node.js](https://nodejs.org), which must be on the `PATH` of the Jupyter server. Completions of fields and types also need Java 17 or later; RumbleDB is downloaded on first use. To run another build of the language server, set `JSONIQ_LSP_SERVER` to its `main.mjs`.

RumbleDB is downloaded to the user's cache directory, or to `JSONIQ_LSP_CACHE_DIR`. To download it ahead of time, for example when building an image:

```sh
python -m jsoniq_jupyterlab_extension ensure-wrapper
```

To install, run:

```sh
pip install jsoniq-jupyterlab-extension
```

After installing the package, you may need to enable the extension in JupyterLab:

```sh
jupyter labextension enable jsoniq-jupyterlab-extension
```

## Usage

Once the extension is installed and enabled, it automatically recognizes jsoniq magic cells and files for syntax highlighting.

### Example

```python
%%jsoniq
for $book in json-file("books.json")
where $book.price lt 20
return $book.title
```

This cell should become highlighted.

## Development

1. Clone the repository and install the dependencies:

    ```sh
    git clone https://github.com/RumbleDB/jsoniq-jupyterlab-extension.git
    cd jsoniq-jupyterlab-extension
    pnpm install
    uv sync
    ```

2. Build the extension, and link it into JupyterLab so that rebuilds take effect:

    ```sh
    uv run pnpm run build
    uv run jupyter labextension develop . --overwrite
    ```

3. Launch JupyterLab. `pnpm run watch` rebuilds the extension when the source changes; reload the page to see it.

    ```sh
    uv run jupyter lab
    ```

Run the tests with `pnpm test` and `uv run pytest`. `uv run pnpm run build:prod` builds the extension for release.

## Project Structure

- `src/`: The JupyterLab extension: highlighting in `code-mirror/`, the language server client in `lsp/`.
- `jsoniq_jupyterlab_extension/`: The Jupyter server extension, which runs a language server for each JupyterLab tab.
- `schema/`: The extension's settings.
- `scripts/`: Copies the language server into the Python package when building.
- `tests/`: Tests of the highlighting.

## Contributing

We welcome contributions to the `jsoniq-jupyterlab-extension` project! If you have any suggestions, bug reports, or pull requests, please feel free to submit them on the [GitHub repository](https://github.com/RumbleDB/jsoniq-jupyterlab-extension).

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.
