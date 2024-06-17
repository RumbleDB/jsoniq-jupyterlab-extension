# jsoniq-jupyterlab-extension

`jsoniq-jupyterlab-extension` is a JupyterLab extension that adds support for Python magics to interact with the JSONiq language server. This extension allows users to take advantage of JSONiq diagnostics display.
In the future, this extension will also support syntax highlighting through CodeMirror.

## Features

- **JSONiq LSP integration** - the extension provides seamless integration for the LSP to execute within Python cells with the `%%jsoniq` magic.

## Installation

To install the `jsoniq-jupyterlab-extension`, you can use `npm` or `yarn`. Make sure you have JupyterLab installed before proceeding.

```sh
# Using npm
npm install jsoniq-jupyterlab-extension

# Using yarn
yarn add jsoniq-jupyterlab-extension
```

After installing the package, you need to enable the extension in JupyterLab:

```sh
jupyter labextension enable jsoniq-jupyterlab-extension
```

## Usage

Once the extension is installed and enabled, the extension automatically recognizes jsoniq magic cells.

### Example

```python
%%jsoniq
for $book in json-file("books.json")
where $book.price lt 20
return $book.title
```

This example demonstrates how to run a JSONiq query to find the titles of books priced below $20 from a JSON file named `books.json`.

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

## Project Structure

- `src/`: Contains the source code of the extension.
- `dest/extractors/plugin.js`: The main entry point for the extension.
- `package.json`: Contains the configuration and dependencies for the extension.

## Contributing

We welcome contributions to the `jsoniq-jupyter-lsp` project! If you have any suggestions, bug reports, or pull requests, please feel free to subapache them on the [GitHub repository](https://github.com/DavidBuzatu-Marian/JSONiq-JupyterLabLSP).

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.
