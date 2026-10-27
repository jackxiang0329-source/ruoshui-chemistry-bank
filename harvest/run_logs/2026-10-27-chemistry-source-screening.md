# 2026-10-27 — Open chemistry repository screening and analytical-calculator exercise import

Scope: undergraduate inorganic, organic, analytical and physical chemistry. Public availability is **not** evidence of permission to redistribute content. Counts below distinguish reference code, newly authored examples, candidate records and expert-approved publishable questions.

## Rights and content checks (pinned sources)

| Source | Field | Pinned commit | Evidence | Decision |
| --- | --- | --- | --- | --- |
| [PWO-CHINA/Chemistry-Calculator-Toolkit](https://github.com/PWO-CHINA/Chemistry-Calculator-Toolkit) | Analytical | `879205657e777c00621a461e975218b395ee32ea` | Root `LICENSE` MIT (Copyright 2026 PWO-CHINA); `src/calculations.js` plus `docs/calculation-reference.md` and numeric tests. | APPROVED as a *reference to chemical formulae*, **not** as a source of exam questions. Eight independently worded numerical exercises, with 8 distinct analytical methods and independently recomputed numeric answers, are described in `harvest/pinned_analytical_calculator_mit.json`; no upstream questions, images or datasets were copied. Generated candidates must remain `publishable=false` pending semantic dedup and expert review. |
| [jlaaser/quantum-exercises](https://github.com/jlaaser/quantum-exercises) | Physical / quantum | `72e379450c3ceb4f2b6dc0867a25862163a89c15` | README explicitly states CC BY-NC-SA 4.0 for Jennifer Laaser's guided exercises. | EXCLUDED from automated mirror: NC/SA obligations require project policy and downstream-license assessment; no exercise text copied. |
| [qchemsoftware/teaching](https://github.com/qchemsoftware/teaching) | Physical / quantum | `67937ec3393b3bf6fe7ff089b7503c7284f32cac` | README states CC BY-NC-SA 4.0; `COPYING` says CC BY-NC 4.0; `LICENSE` is BY-NC-SA 4.0. | HOLD: conflicting license descriptions and NC/SA conditions; no exercises copied. |
| [trondhauklien/NTNU-TKJ4215](https://github.com/trondhauklien/NTNU-TKJ4215) | Physical / statistical thermodynamics | `385f8c2b9c972a86a7a398c42a6deefe3935ae8b` | Six exercise folders, formula sheet, no root LICENSE in inspected listing. | HOLD: redistribution rights not established; no exercises copied. |
| [CheersWorld/AnalyticalChemistryQuestionGenerator](https://github.com/CheersWorld/AnalyticalChemistryQuestionGenerator) | Analytical | `8ac3fcb47205a5af89fb7b58f6b93773df0f813e` | C# question generator, no root LICENSE in inspected listing. | HOLD: no permission to copy source/questions established. |
| [Kasa-SENSEI/InorganicChemistryQuiz](https://github.com/Kasa-SENSEI/InorganicChemistryQuiz) | Inorganic | `16e66532054a80e03b642cc7487f2304eb6d548b` | HTML quiz with no root LICENSE in inspected listing. | HOLD: no permission to copy quiz questions established. |
| [dipamsen/chemguessr](https://github.com/dipamsen/chemguessr) | Inorganic | `2dc4c6a7e71104a9b5f0c729ebe36cf4c93ab8aa` | Inorganic quiz app, no root LICENSE in inspected listing. | HOLD: no permission to copy quiz content established. |
| [andrewgajetzki/orgo-quiz](https://github.com/andrewgajetzki/orgo-quiz) | Organic | `5d1465cf9c0bc2729ffe38fcc04b4a3a20293cc4` | Root LICENSE MIT (Copyright 2026 Andrew Gajetzki), but `src/data` contains only `.gitkeep`; README is an Expo starter. | CODE LICENSE VERIFIED, **0 extractable question records** found in inspected data directory; no import. |

## Quality and provenance

- Approved *new reference source*: 1 MIT calculator repository; approved source **question copies**: 0.
- Newly authored formula-backed analytical exercise specifications: **8**; this is not eight distinct upstream questions or eight expert-reviewed examination questions.
- All eight method-level examples have independent numeric recomputation in `scripts/import-analytical-calculator-mit.mjs`, explicit pinned provenance, MIT attribution, SHA-locked source files and a negative test for unphysical titration conditions.
- The workflow tests `tests/analytical-calculator-mit.test.mjs` before importing. Candidate files are hash-addressed by normalized question text; reruns must not rewrite existing candidates and any conflicting answer/source triggers failure.
- Pending: check semantic overlap with existing 1,106 baseline candidates; human review of assumptions, significant figures and pedagogy; approve publication individually. Do **not** increase the published/expert-approved count based on automated calculations alone.
- No text or images were copied from any of the seven held or excluded repositories. The absence of a root LICENSE is only a *negative result for this screening*, not proof that no per-file permission exists.
