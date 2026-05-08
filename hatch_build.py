from __future__ import annotations

from pathlib import Path

from hatchling.builders.hooks.plugin.interface import BuildHookInterface


class CustomBuildHook(BuildHookInterface):
    def initialize(self, version: str, build_data: dict) -> None:
        language_server_root = (
            Path(self.root) / "node_modules" / "@jimmycai" / "jsoniq-language-server"
        ).resolve()
        if not language_server_root.exists():
            return

        force_include = build_data.setdefault("force_include", {})
        target_root = Path("jsoniq_jupyterlab_extension") / "language_server"

        package_json = language_server_root / "package.json"
        if package_json.is_file():
            force_include[str(package_json)] = str(target_root / "package.json")

        assets_root = language_server_root / "assets"
        if assets_root.is_dir():
            force_include[str(assets_root)] = str(target_root / "assets")

        dist_root = language_server_root / "dist"
        if not dist_root.is_dir():
            return

        for path in sorted(dist_root.rglob("*.mjs")):
            relative_path = path.relative_to(language_server_root)
            force_include[str(path)] = str(target_root / relative_path)
