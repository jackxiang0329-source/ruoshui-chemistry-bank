# 2026-10-27 QC-Edu IntroQM CC0 physical-chemistry import audit

## Pinned source and license
- Upstream: https://github.com/QC-Edu/IntroQM ; pinned Git commit `6709e555b10953d0938b7e3636559a95183de0bd` (GitHub branch read and file fetch).
- Authors listed by project: Paul Ayers, Valerii Chuiko, Farnaz Heidar-Zadeh. Main course text under CC0 1.0, but third-party reused content retains original rights. License blob `d6f0c9a0ae3f8013d6e1e6953983c811d705e867`; notice blob `5e5067b414c3021b23dd2155dc4054f321dcb37b`.
- Selected and Git Blob-checked source files: `book/IntroExercise1.ipynb` (`05452012f4be8990ce7e3501bd72745d24348221`), `book/IntroExercise2.ipynb` (`b2762830e5d023e31921549c1f6ac184b2c5e7cd`), `book/SchrodingerExercise3.md` (`a2fa47e963ba30218e53f20bfcf339001be69cf1`). None of these three selected exercises had an identified third-party attribution in the inspected file content; do not generalize CC0 to the entire repository.
- Imported 3 text-only undergraduate physical/quantum-chemistry exercises, translated/adapted into Chinese. No image, PDF, external article, or full notebook copied. Preserve course attribution despite CC0 not requiring it.

## Screening and corrections
- Inspected 5 source exercises; accepted 3, excluded 2. `SchrodingerExercise1.ipynb` contains a solution-code wavelength typo (`485.1e-7` cm instead of the 486.1 nm prompt); `SchrodingerExercise2.ipynb` has assumptions on real constants requiring clarification.
- In `IntroExercise2.ipynb`, the printed output incorrectly labels the input as `1e7`, although the prompt and computation use `1e8`. This import independently recalculates `k=1e8 m^-1`, corrects the label, and does not reuse the faulty output text.
- Numeric answers independently recomputed from exact SI values for `h`, `e`, and `c`. Morse eigenvalue checked by direct substitution of the analytic ground-state wavefunction into the Hamiltonian.
- Deduplication: before commit, checked all 825 candidate filenames on `main`; none of the 3 new normalized SHA-256 IDs existed. Importer rejects ID, answer, source-SHA, and publication-status collisions on rerun. Semantic duplicates across paraphrases/languages remain unverified.
- Subject: physical chemistry 3; inorganic 0, organic 0, analytical 0. All `awaiting_expert_review`, `publishable=false`.

## Counts and operational status
- Baseline `main` commit: `516e7e4a354dbb0e3511e29b0f29f0f703f0e4a5`, candidate JSON count: 825.
- This commit adds exactly 3 candidate JSON files, 1 pinned manifest, 1 importer, 1 test, 1 report, and this log; also updates the existing Actions workflow. Expected candidate count: 828 (verify against GitHub tree after commit).
- No new third-party exam questions claimed; 3 adapted university course exercises. No expert-approved questions.
- Remaining: professional chemistry review; cross-source semantic dedup; rights review of existing PR #1 and #5-#9; additional analytical/inorganic/organic sources. Do not import OpenStax Chemistry 2e without resolving contradictory current licensing statements; avoid USNCO/ACS copyrighted problem scans.
- Errors: upstream notebook output-label typo and one other notebook calculation typo documented above; no source fetch or GitHub write error at time of preparation. CI execution to be verified separately after commit.
