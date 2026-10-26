<img src="logo.svg" alt="ChemTrain logo" height="110" align="right">

# Reactivity Learn

Reactivity Learn is a Quizlet-style trainer for nucleophilicity, electrophilicity and regioselectivity in organic chemistry, built on Mayr's reactivity scales. Everything is in one HTML file.

Radicals and redox chemistry have their own pages: [Radical Learn](https://github.com/ChemTrain/radical-learn) (radical philicity, polarity matching, radical regioselectivity) and [Photoredox Learn](https://github.com/ChemTrain/photoredox-learn) (redox potentials, electron transfer, photoredox cycles).

**Play it here:** https://chemtrain.github.io/reactivity-learn/reactivity_learn.html

You can also download `reactivity_learn.html` and open it in any browser.

## What's inside

- 240 cards in 11 sets: 175 nucleophiles with their N and s<sub>N</sub> (π-nucleophiles, amines and N-heterocycles, phosphines and ylides, hydride donors, carbanions, anions in DMSO and in MeCN, nucleophiles in water) and 65 electrophiles with their E (carbocations and iminium ions, Michael acceptors, heteroatom electrophiles)
- A 2D structure for each molecule, with the atom that attacks, or is attacked, highlighted
- Learn: give the N or E of each card (multiple choice, then typed), or name the molecule that has a given value; cards are mastered after two right answers in a row
- Rank: deal 5, 10 or 15 cards from a set and put them in order of N or E; nucleophiles are only compared within one solvent
- Most reactive: 38 molecules with two to four labelled atoms; pick the one that attacks, or is attacked by, the named partner
- Reacting?: a nucleophile and an electrophile, and Mayr's rule of thumb (N + E > −5 at 20 °C); the answer works out log k = s<sub>N</sub>(N + E) and the half-life
- Regioselectivity: 61 questions on aromatic substitution, additions to alkenes and alkynes, dienes and Diels–Alder reactions, enolates and carbonyls, epoxide opening and eliminations, and the protection, deprotection and oxidation of primary, secondary and tertiary alcohols
- Flashcards, a browsable list of cards, and a Theory page: how N, s<sub>N</sub> and E are measured, how to read them, ambident reactivity, and the conceptual DFT indices (μ, η, ω and Domingo's N) computed from HOMO and LUMO energies, with references
- Easy and Hard levels: compared values are at least 2.5 units apart on Easy and 1 unit on Hard, and Easy leaves out the harder Most reactive and Regioselectivity questions

## Sources

Every N, s<sub>N</sub> and E value comes from [Mayr's Database of Reactivity Parameters](https://www.cup.lmu.de/oc/mayr/reaktionsdatenbank/) (LMU München). Each card names its database entry and the paper the value was published in; please cite those papers when you use the values, as the database asks. Only entries rated two stars or more are used.

The site and regioselectivity questions and their explanations were written for this app; the explanations of ambident reactivity follow H. Mayr, M. Breugst, A. R. Ofial, *Angew. Chem. Int. Ed.* **2011**, 50, 6470. The Theory page lists its references. Structures are drawn with [RDKit](https://www.rdkit.org).

## How to cite

If you use Reactivity Learn in a course, a worksheet or a paper, please cite it:

> Bindschaedler, Q. *Reactivity Learn* (2026). ChemTrain. https://github.com/ChemTrain/reactivity-learn

GitHub's **Cite this repository** button (from `CITATION.cff`) gives the same reference in APA and BibTeX.

## License

- Code (the HTML, CSS and JavaScript): [MIT](LICENSE).
- Content (the selection of cards, the questions, notes, explanations and Theory text): [CC BY 4.0](LICENSE-CONTENT.md). You may reuse and adapt it, as long as you credit Reactivity Learn.
- Logo (`logo.svg`): the locomotive is adapted from [Twemoji](https://github.com/jdecked/twemoji), © Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the benzene-ring smoke was added for ChemTrain.

The N, s<sub>N</sub> and E values are measurements published by others; please cite their sources as well.
