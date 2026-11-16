// Copies the language server into the Python package, which runs it with Node.js. The server
// finds its assets next to its `package.json`, so the package's layout is kept.
import { cpSync, rmSync } from "node:fs";

const source = "node_modules/jsoniq-language-server";
const target = "jsoniq_jupyterlab_extension/language-server";

const files = [
    "package.json",
    "LICENSE",
    "NOTICE",
    "assets",
    "dist/bundled/main.mjs",
    "dist/bundled/THIRD-PARTY-NOTICES.txt",
];

rmSync(target, { recursive: true, force: true });
for (const path of files) {
    cpSync(`${source}/${path}`, `${target}/${path}`, { recursive: true });
}
