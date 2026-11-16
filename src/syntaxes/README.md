# TextMate grammars

`jsoniq.tmLanguage.json` and `xquery.tmLanguage.json` are copies of the grammars that the VS Code
extension uses, so that both editors highlight JSONiq and XQuery the same way. Do not edit them here:
fix the grammar in the language tools repository and copy it again.

- Source: https://github.com/RumbleDB/language-tools/tree/main/packages/vscode-extension/syntaxes
- Copied from commit `d2ff362d77badd3c2b5d6cc5e2e727d63d676769` (2026-11-11)

With the language tools repository checked out next to this one as `../jsoniq-lsp`, run
`pnpm run sync:grammars` to copy them, then update the commit above.

The grammars run on a JavaScript port of Oniguruma (`@shikijs/engine-javascript`), not on the
Oniguruma that VS Code uses. `tests/grammars.test.ts` compiles every pattern, so a pattern that only
Oniguruma supports fails the tests instead of silently not highlighting.
