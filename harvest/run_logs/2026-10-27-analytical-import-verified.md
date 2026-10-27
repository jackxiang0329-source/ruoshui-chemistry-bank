# 2026-10-27 — Verified automated import result

Repository: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank

## Commits and run

- Source/formula pin (8 original analytical problem specifications): https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0f591e5bc9feee4a15b69ca9a66a2bcdda74fd0d
- Importer, independently recalculated answers, tests, and 30-minute workflow integration: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/e9ae075323b753663e2bf3aa8aec84c9d4576f77
- Importer corrections (rights-scope validation and anchor coverage): https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/3214f8b4cf9e018d706402d9b28f152070efc12c and https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/50f8d16f98d34b72553d061a25eee68ba0e54c77
- Eight-source rights screening: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/10e55672ba105444feda1e412c9f0a965dac3616
- Verified candidate import: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/5d8c7d0fc26c97b607dd6a82750ad3ee4fdd347d
- Completed GitHub Actions run, conclusion **success**: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442495347

## Observed, not estimated

- Before import: 1,106 total candidate files (inorganic 622, organic 414, analytical 25, physical 45); 828 exercise candidates and 278 study cards.
- After import: **1,114** total candidate files (inorganic 622, organic 414, analytical **33**, physical 45); 836 exercise candidates and 278 study cards.
- Net new: **8** analytical **original formula-based exercise candidates**; **0** upstream exam questions copied; **0** new inorganic, organic or physical questions this run.
- Import report: `harvest/import_reports/analytical_calculator_mit.json` states `initial_import_added=8`, `initial_import_already_present=0`, pinned MIT code commit `879205657e777c00621a461e975218b395ee32ea` and 8 distinct analytical methods.
- Audit: **0 exact same-text question groups** in current corpus; **36 numeric-template similarity families** still require semantic review. These counts do not establish semantic uniqueness or chemical correctness.
- Publication gate: **all 1,114** candidates have `publishable=false`; **0** expert-approved new questions.

## Errors and remaining work

- Two preceding workflow runs failed before importing because of a new importer test/validation bug: https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442389850 and https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442421214. Both have been superseded by the successful run above. No failed-run import counts are claimed.
- Seven additional screened sources were excluded or held: missing explicit content rights, NC/SA restrictions or contradictory license notices, or an MIT-licensed project without extractable quiz data. Detailed evidence and pinned revisions: `harvest/run_logs/2026-10-27-chemistry-source-screening.md`.
- Expert chemical review, significant-figure review, and cross-source semantic overlap review remain open. Do not promote these eight new exercises to publishable status without those checks.
- The existing GitHub Actions workflow remains scheduled at minutes 17 and 47 each hour; subsequent runs are idempotent and should not count re-imports as new items.
