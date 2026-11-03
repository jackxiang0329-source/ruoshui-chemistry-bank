<img src="logo.svg" alt="ChemTrain logo" height="110" align="right">

# pKa Learn

pKa Learn is a Quizlet-style trainer for the pKa values of organic acids and bases. Everything is in one HTML file.

**Play it here:** https://chemtrain.github.io/pka-learn/pka_learn.html

You can also download `pka_learn.html` and open it in any browser.

## What's inside

- 253 cards in seven sets: textbook essentials, enolates, carbanions and ylides, O–H acids, amines, N–H acids, and bases for synthesis
- A 2D structure for each molecule, with the acidic proton highlighted
- Every question names the solvent its value is for (water, DMSO or THF); when a molecule has values in both water and DMSO, both are shown
- A Learn mode (multiple choice, then typed answers), flashcards, and space for your own cards or a Quizlet export
- Rank: deal 5, 10 or 15 cards from a set and put them in order, lowest pKa first
- Most acidic: 29 molecules with two to four labelled protons; pick the most acidic one, or rank them all from most to least acidic, then see the pKa of each
- Easy and Hard levels: the values you compare are always at least 5 pKa units apart on Easy, and at least 1 on Hard

## Sources

Most card values come from the [Evans pKa table](https://organicchemistrydata.org/hansreich/resources/pka/pka_data/evans_pKa_table.pdf) (D. H. Ripin and D. A. Evans, ACS Organic Division, updated 2024). The textbook set uses common textbook values.

In Most acidic, values marked ≈ are estimates taken from a simpler model compound, mostly one from the card sets (an alcohol O–H as in ethanol, for example). The other values are commonly quoted measurements for that molecule; the amino-acid values follow standard biochemistry tables (Lehninger).

Structures are drawn with [RDKit](https://www.rdkit.org).

## How to cite

If you use pKa Learn in a course, a worksheet or a paper, please cite it:

> Bindschaedler, Q. *pKa Learn* (2026). ChemTrain. https://github.com/ChemTrain/pka-learn

GitHub's **Cite this repository** button (from `CITATION.cff`) gives the same reference in APA and BibTeX.

## License

- Code (the HTML, CSS and JavaScript): [MIT](LICENSE).
- Content (the card sets, questions, notes and Most acidic molecules): [CC BY 4.0](LICENSE-CONTENT.md). You may reuse and adapt it, as long as you credit pKa Learn.
- Logo (`logo.svg`): the locomotive is adapted from [Twemoji](https://github.com/jdecked/twemoji), © Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the benzene-ring smoke was added for ChemTrain.

The pKa values are measurements by others; please cite their sources (above) as well.
