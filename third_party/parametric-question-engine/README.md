# Parametric Question Engine

A parametric, **solver-verified** generator for standardized-test-style **Quantitative Reasoning** and **General Chemistry** questions. Every item is produced by a deterministic solver and ships with five multiple-choice options whose distractors are modeled on the *specific* mistakes a test-taker actually makes — so questions are correct by construction, fully reproducible, and tuned for difficulty by reasoning depth rather than arithmetic grind.

Calibrated to the difficulty profile of the DAT (Dental Admission Test), but the technique generalizes to any quantitative item bank.

## Why it's interesting

Most generated question banks are either hand-written (slow, finite, memorizable) or free-form (frequently wrong). This takes a third path:

- **Correct by construction.** Each archetype is a small program: it samples parameters, runs a real solver to compute the answer, and builds the options *from* that answer. The correct choice **is** the solver's output, so it can't be silently wrong.
- **Distractors are the design.** Every wrong option is a *named* error mode — averaging two speeds instead of the harmonic mean, permutation-vs-combination, using a diameter as a radius, reporting pOH instead of pH, dropping a stoichiometric coefficient. That is what makes an item feel real.
- **Difficulty is engineered, not labeled.** Easy / medium / hard scale by solution steps and concept layering, never by uglier numbers (the target exam allows a calculator, so grind isn't difficulty).
- **Reproducible.** A seeded PRNG means the same seed yields the same bank, so generated diffs are meaningful and regeneration is deterministic.
- **No dependencies.** Pure Node (ESM) and the standard library. Nothing to install.

## Architecture

```
core/                shared, dependency-free
  rng.js             seeded PRNG (mulberry32) + sampling helpers
  options.js         assembles/validates the 5 lettered options; number & fraction formatting
quant/               Quantitative Reasoning engine
  archetypes.js      17 archetypes (work-rate, mixtures, probability, geometry, trig, ...)
  build.js           blueprint + generate-with-retry + dedupe + validate + write
chem/                General Chemistry engine
  data.js            atomic masses, constants, reaction / Ka / redox tables, formula-mass parser
  archetypes.js      15 archetypes (stoichiometry, gas laws, pH, equilibrium, thermo, ...)
  build.js           same pipeline, chemistry blueprint
  selftest.mjs       asserts solver identities + parser correctness (run before building)
```

## Quick start

```bash
node chem/selftest.mjs   # gate: verify the chemistry solvers + parser
node quant/build.js      # generate the QR bank   -> output/quant/
node chem/build.js       # generate the chem bank  -> output/chem/
```

Each build prints a per-topic / per-difficulty report and writes the bank to `output/`.

## What an item looks like

```json
{
  "id": "qr_eng_00001",
  "topic": "Geometry",
  "subtopic": "Coordinate Geometry",
  "difficulty": "hard",
  "question": "What is the distance between the points (1, -4) and (-7, -19)?",
  "options": ["A. 289", "B. 17", "C. 4.8", "D. 23", "E. 11.5"],
  "correct": "B",
  "explanation": "d = √[(Δx)² + (Δy)²] = √[(8)² + (15)²] = √289 = 17. Forgetting the square root leaves 289; adding the legs gives 23.",
  "tags": ["geometry", "coordinate", "distance"]
}
```

Note the distractors: `289` is the "forgot the square root" error, `23` is "added the legs," `11.5` is "averaged the legs." Each wrong answer is a mistake a real student makes. More in [`examples/`](examples/).

## How it works

Each archetype implements one contract:

```js
gen(rng, difficulty) -> { question, answer, distractors, fmt, explanation }
```

- `answer` is the **solver's** computed result.
- `distractors` are raw trap values, each keyed to a specific error.
- `fmt` formats a value into option text (units, significant figures) and is applied identically to all five options, so formatting never betrays which one is correct.

`build.js` enforces a topic blueprint (weights per subtopic) and a difficulty mix, generates with retry, deduplicates, runs an independent structural validator, and writes the bank. `core/options.js` shuffles the correct answer in among the distractors and records the letter it lands on — the answer key is therefore correct by construction.

### The chemistry self-test

Because correctness rests entirely on the solvers, `chem/selftest.mjs` is a hard gate. It asserts known values before any bank is generated:

```
formulaMass("(NH4)2SO4") ≈ 132.17      pH(1e-4 M H+) = 4
E°cell(Zn anode, Cu cathode) = 1.10 V  28.02 g N2 -> 34.08 g NH3 (mass-mass)
PV=nRT converts °C -> K internally      unknown element symbols throw
```

…then smoke-tests that all 15 archetypes × 3 difficulties emit well-formed items. If a solver is wrong, the gate fails loudly instead of shipping a wrong key.

## Coverage

**Quantitative Reasoning** — applied math (work-rate, distance-rate-time, mixtures, ratio / proportion / variation, percentages, simple & compound interest, unit conversion), algebra (systems, exponents & radicals, quadratic applications), probability & statistics (with / without replacement, counting, weighted mean, missing value), geometry (area, composite & circle regions, volume & scaling, coordinate geometry), trigonometry.

**General Chemistry** — stoichiometry (molar mass, mole conversions, mass-mass, limiting reagent & percent yield, percent composition, empirical / molecular formula), solutions (molarity & dilution), gases (ideal & combined laws, gas stoichiometry at STP), acids & bases (strong and weak-acid pH), equilibrium (Keq & ICE), thermochemistry (calorimetry, Hess's law), kinetics (rate law), electrochemistry (standard cell potential).

A typical run yields ~520 QR and ~600 General Chemistry items at a faithful difficulty mix, zero invalid, all unique.

## License

MIT © 2026 Arya Mehta
