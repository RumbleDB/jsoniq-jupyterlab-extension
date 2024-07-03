# jsoniq-jupyterlab-extension

`jsoniq-jupyterlab-extension` is a JupyterLab extension that adds support for Python magics to interact with the JSONiq language server. This extension allows users to enjoy language features of jsoniq cells within Python notebooks or `.jq` files. With the extension, syntax highlighting with CodeMirror is also enabled for jsoniq cells using the `%%jsoniq` magic or `.jq` files.

## Features

- **JSONiq LSP integration** - the extension provides integration for the LSP to execute within Python cells with the `%%jsoniq` magic.
- **Synax highlighting** - syntax highlighting is automatically enabled for `%%jsoniq` magic cells within Python notebooks, and can be enabled for `.jq` files using the language selector of Jupyter.

## Installation

To install the `jsoniq-jupyterlab-extension`, you can use `npm` or `yarn`. Make sure you have JupyterLab and the JupyterLSP extension installed before proceeding.

To install JupyterLSP, run:

```sh
pip install jupyter-lsp
```

To install the JSONiq Jupyter Extension, run:

```sh
# Using npm
npm install jsoniq-jupyterlab-extension

# Using yarn
yarn add jsoniq-jupyterlab-extension
```

After installing the package, you may need to enable the extension in JupyterLab:

```sh
jupyter labextension enable jsoniq-jupyterlab-extension
```

## Usage

Once the extension is installed and enabled, the extension automatically recognizes jsoniq magic cells and files.

### Example

```python
%%jsoniq
for $book in json-file("books.json")
where $book.price lt 20
return $book.title
```

This cell should become highlighted and language features should be enabled.

## Development

To contribute to the development of `jsoniq-jupyterlab-extension`, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/davidbuzatu-marian/jsoniq-jupyterlab-extension.git
   cd jsoniq-jupyterlab-extension
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Build the extension:

   ```sh
   npm run build
   ```

4. Link the extension for local development:

   ```sh
   jupyter labextension link .
   ```

5. Launch JupyterLab:

   ```sh
   jupyter lab
   ```

## Building and testing the extension

To build the project for production, the following commands build the JavaScript files, build the Jupyter extension and install this result for local testing.

```sh
npm run build && npm run build-ext && jupyter labextension install .
```

## Project Structure

- `src/`: Contains the source code of the extension.
- `dest/plugin.js`: The main entry point for the extension after building.
- `package.json`: Contains the configuration and dependencies for the extension.
- `tests/`: Contains a set of tests relating to syntax highlighting.

## Contributing

We welcome contributions to the `jsoniq-jupyter-lsp` project! If you have any suggestions, bug reports, or pull requests, please feel free to subapache them on the [GitHub repository](https://github.com/DavidBuzatu-Marian/JSONiq-JupyterLabLSP).

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.
