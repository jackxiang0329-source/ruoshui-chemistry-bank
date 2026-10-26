<img src="logo.svg" alt="ChemTrain logo" height="110" align="right">

# PG Learn

PG Learn is a Quizlet-style trainer for protecting groups in organic synthesis: which conditions remove which group, and how to plan a sequence of deprotections. Everything is in one HTML file.

**Play it here:** https://chemtrain.github.io/pg-learn/pg_learn.html

You can also download `pg_learn.html` and open it in any browser.

## What's inside

- 44 protecting groups in 5 sets: core groups, advanced groups, and themed sets for peptides, sugars and nucleosides, and silicon groups
- A chart of what 22 sets of deprotection conditions do to each group, with a note on every cell that needs one
- Learn: how is this group removed, which group do these conditions remove, and what is this group called
- Removed?: a molecule carries several protecting groups; pick every one the conditions remove
- Plan: given a sequence of conditions, choose a protecting group for each site so that each step frees exactly one
- Easy asks only clear-cut cases; Hard adds selectivity (TES before TBS, primary before secondary TBS, acetate before pivalate)
- Flashcards, a list of cards, and the full chart

## Sources

The chart, descriptions and notes are written for this quiz from standard organic chemistry knowledge. Real outcomes depend on the substrate and the exact conditions; check the literature before running a reaction. Structures are drawn with [RDKit](https://www.rdkit.org).

## How to cite

If you use PG Learn in a course, a worksheet or a paper, please cite it:

> Bindschaedler, Q. *PG Learn* (2026). ChemTrain. https://github.com/ChemTrain/pg-learn

GitHub's **Cite this repository** button (from `CITATION.cff`) gives the same reference in APA and BibTeX.

## License

- Code (the HTML, CSS and JavaScript): [MIT](LICENSE).
- Content (the chart, cards, questions, descriptions and notes): [CC BY 4.0](LICENSE-CONTENT.md). You may reuse and adapt it, as long as you credit PG Learn.
- Logo (`logo.svg`): the locomotive is adapted from [Twemoji](https://github.com/jdecked/twemoji), © Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the benzene-ring smoke was added for ChemTrain.
