# JSONiq JupyterLab Extension

`jsoniq-jupyterlab-extension` is a JupyterLab extension that adds basic token highlighting for JSONiq code. Syntax highlighting with CodeMirror is enabled for jsoniq cells using the `%%jsoniq` magic and for `.jq` files.

## Features

- **Basic token highlighting** - provides JSONiq token highlighting for `%%jsoniq` magic cells within Python notebooks.
- **Syntax highlighting for `.jq` files** - can be enabled for `.jq` files using the Jupyter language selector.

## Installation

Install the extension from Python packaging. No `npm` or `yarn` installation is required for users.

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

To contribute to the development of `jsoniq-jupyterlab`, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/davidbuzatu-marian/jsoniq-jupyterlab.git
   cd jsoniq-jupyterlab
   ```

2. Install dependencies:

   ```sh
   pnpm install         # Install JavaScript dependencies
   pnpm run antlr4      # Generate parser from grammar
   uv python install    # Setup Python environment using uv
   uv sync              # Sync dependencies for Python environment
   ```

3. Build the extension:

   ```sh
   uv run pnpm run build:prod
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
uv run pnpm run build:prod
```

## Project Structure

- `src/`: Contains the source code of the extension.
- `dist/`: Build artifacts for the extension.
- `package.json`: Contains the configuration and dependencies for the extension.
- `tests/`: Contains a set of tests relating to syntax highlighting.

## Contributing

We welcome contributions to the `jsoniq-jupyterlab-extension` project! If you have any suggestions, bug reports, or pull requests, please feel free to submit them on the [GitHub repository](https://github.com/RumbleDB/jsoniq-jupyterlab-extension).

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.
