# Changesets

Each change that users should know about comes with a changeset: a markdown file here that says
how it bumps the version and what goes in the changelog.

1. Run `pnpm changeset` and pick `patch`, `minor` or `major`, then commit the file it creates.
2. When the change is merged to `main`, the release workflow opens a `[ci] release` pull request,
   which bumps the version in `package.json` and adds the changesets to `CHANGELOG.md`.
3. Merging that pull request publishes the version to PyPI, then tags it and creates a GitHub
   release with its changelog.
