# 2026-10-27 — University chemistry source triage and upstream MCQ integrity safeguards

Scope: inorganic, organic, analytical and physical chemistry. This run is a **source-rights screening and quality-control improvement**, not a new question import. All newly found sources below were examined at a pinned GitHub main commit. The repository-level SPDX label alone does **not** prove that included questions were authored by the code owner.

## New source screening (not imported)

| Source | Commit | Repository license signal | Relevant material | Decision |
| --- | --- | --- | --- | --- |
| [sieule/chemistry07](https://github.com/sieule/chemistry07) | `88e6ca4e81644eda783616d855d63e56e98206bb` | MIT (README + repository metadata) | `questions.json`, Vietnamese chemistry multiple-choice questions with explanations; many basic atomic-structure items | **HOLD**: no independently verified authorship of question texts; level not demonstrated to be university; 0 copied. |
| [nwabuezeeminence-cell/chemistry-102-CBT-exam-simulator](https://github.com/nwabuezeeminence-cell/chemistry-102-CBT-exam-simulator) | `10239077e8b4ce9e807a1c50dfc30a562e820991` | MIT root LICENSE (copyright 2026 Nwabueze Eminence) | `index.html`, mixed chemistry/physics MCQs | **HOLD**: embedded quiz lacks per-question provenance; university alignment and chemistry-only filtering not verified; 0 copied. |
| [theadityat24/chem-accel-question-generator](https://github.com/theadityat24/chem-accel-question-generator) | `2b24f00fd61b693e0a629f5eafde60a36896ce17` | MIT repository metadata | `question.js`, acid/base neutralization question generator | **REJECT for current import**: acid-concentration/acid-volume formula uses the acid/base equivalence ratio in the wrong direction for unequal acid H+ and base OH- stoichiometry; numerical correctness not acceptable. 0 copied. |
| [gluonMaster/chemie-eroberung](https://github.com/gluonMaster/chemie-eroberung) | `93149a58f9e73d059f087eff0b15a053ec1743b1` | MIT root LICENSE and README explicitly **code** licensed | 55 school-grade-8 German/Russian chemistry questions | **EXCLUDE**: below undergraduate level; MIT code scope does not separately establish question rights. 0 copied. |
| [dewaara/GizaQuiz](https://github.com/dewaara/GizaQuiz) | `aab7cb02a678b839a913a637c16c1c9ced1a69a3` | Apache-2.0 repository metadata | Android general-knowledge app with embedded SQLite question database `GizaQuiz2019.db` | **HOLD**: database and its third-party content not independently licensed; non-chemistry content mixed in. 0 copied. |
| [jqChen1566/analytical-chemistry-review-notes](https://github.com/jqChen1566/analytical-chemistry-review-notes) | `353cd31e554afd87d0cc12c5cb53468abeb4f1c9` | CC BY-SA 4.0 (README and LICENSE) | University analytical chemistry review notes | **HOLD**: README explicitly says textbook text was OCR-extracted; original textbook rights and exercise authorship not established. Do not assume CC BY-SA cures third-party rights. 0 copied. |
| [ahutchison-sudo/Chem-2210-practice-problems](https://github.com/ahutchison-sudo/Chem-2210-practice-problems) | `771cab985f87d9ac167b335c7eb8b8bf05a8b31c` | UNKNOWN (no root license found in inspected listing) | Analytical chemistry titration app, `docs/acidbase-titrations.js` referenced in README | **HOLD**: no verified redistribution license; do not copy source code or questions. 0 copied. |

The university general-chemistry [Georgia OER worksheets](https://oer.galileo.usg.edu/chemistry-ancillary/19/) remain a **pending file-by-file review**, not an approved question import; previous screening identified CC BY 4.0 on the landing page but has not established rights and answer quality for each packaged item.

## Newly added automated safeguards

- `scripts/audit-mcq-integrity.mjs` reads the existing `data/candidates/*.json` only, and produces `harvest/mcq_integrity_audit.json`. It checks source-question-index reuse across locally different question IDs, answer letter versus option text, duplicate choices, pinned source SHA, content-license evidence and explicit unpublished review status.
- `tests/mcq-integrity-audit.test.mjs` contains synthetic regression fixtures for correct MCQs, conflicting answer/option, repeated upstream source index, missing rights evidence and improper publication state.
- This audit reports **review flags**, never auto-deletes or publishes questions, and never interprets an MIT/Apache SPDX tag as question-level permission. It is independent of the existing exact-text/template/semantic-overlap audit.

## Increment, status and remaining work

- New source question files imported in this run: **0**; source copies: **0**; no new source approved for redistribution.
- Last verified baseline before these code changes: **1,390 candidate records** (inorganic 849, organic 455, analytical 33, physical 53), of which **1,112 exercise candidates** and **278 study cards**; all unpublished. No claim that all are distinct examination questions.
- Pending: run the new audit against the full 1,390-candidate corpus in GitHub Actions; inspect any flagged records; obtain primary-author question rights for promising sources; validate analytical/physical answer keys; complete cross-language semantic dedup and 36 template-family reviews.
- No upstream files were downloaded into the repository, and no third-party question text, answer key, images or binary databases were copied.
