# chemquiz full source snapshot · 2026-10-26

Origin: https://github.com/bem130/chemquiz
Pinned upstream commit: 10b81d4c1b02847e3d9b64e8d44a960d10559ea3
License: MIT (see ./LICENSE); original copyright notice must be kept.

The 99 upstream tracked files (including Rust question-generation engine, category logic, WASM UI, integration tests, raw nested catalog JSON, styles, HTML, and upstream workflows) are preserved under this directory. The original catalog is a **raw source snapshot**, not de-duplicated, and intentionally does not feed the ruoshui published manifest. The de-duplicated, isolated name-to-formula candidates are in ../../imports/chemquiz.

Build source as its own Rust project; do not merge upstream .github/workflows into repository-level workflows. Validate the upstream chemistry before using any answer as an official university-level question.
