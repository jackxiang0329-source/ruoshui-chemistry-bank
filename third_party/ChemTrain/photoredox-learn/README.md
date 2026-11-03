<img src="logo.svg" alt="ChemTrain logo" height="110" align="right">

# Photoredox Learn

Photoredox Learn is a Quizlet-style trainer for redox potentials and photoredox catalysis: the potentials of photocatalysts, reagents and substrates, whether an electron transfer is downhill, and how photoredox cycles turn over. Everything is in one HTML file.

**Play it here:** https://chemtrain.github.io/photoredox-learn/photoredox_learn.html

You can also download `photoredox_learn.html` and open it in any browser. Its sister pages are [Reactivity Learn](https://github.com/ChemTrain/reactivity-learn) (nucleophiles, electrophiles and Mayr's scales) and [Radical Learn](https://github.com/ChemTrain/radical-learn).

## What's inside

- 143 cards in 6 sets: metal photocatalysts (Ru, Ir and Cu, each with its excited- and ground-state potentials), organic photocatalysts (acridinium, 4CzIPN, eosin Y and others), reagents and metal couples (metallocenes, magic blue, amines, Hantzsch ester, halides, iodine(III), nickel and copper), substrates to oxidise and to reduce, and textbook standard potentials in water; shown vs SCE or, with one click, vs Fc⁺/Fc
- A 2D structure for each species; metal complexes drawn with their ligands fanned around the metal
- Learn: give the potential of each card (multiple choice, then typed), or name the couple that has a given potential; cards are mastered after two right answers in a row
- Rank: deal 5, 10 or 15 cards from a set and put them in order of potential; only cards measured in the same solvent are compared
- Electron transfer: a donor and an acceptor (photocatalysts, reagents, substrates); is the electron transfer downhill?
- Cycles: 18 published reactions (which quenching cycle, or energy transfer?), plus generated questions on which photocatalyst can both oxidise one substrate and reduce another, and which partner turns the catalyst over
- Flashcards, a browsable list of cards, and a Theory page: E½ and Eₚ/₂, reference electrodes, excited-state potentials, ΔG of electron transfer and the two quenching cycles, with references
- Easy and Hard levels: compared potentials are at least 0.5 V apart on Easy and 0.2 V on Hard, and Easy leaves out the harder Cycles questions

## Sources

Redox potentials come from J. K. Prier, D. A. Rankic, D. W. C. MacMillan, *Chem. Rev.* **2013**, 113, 5322 (photocatalysts, Table 1, and quoted values); H. G. Roth, N. A. Romero, D. A. Nicewicz, *Synlett* **2016**, 27, 714 (half-peak potentials of substrates and reagents, from its Supporting Information); N. G. Connelly, W. E. Geiger, *Chem. Rev.* **1996**, 96, 877 (metallocenes, magic blue and the ferrocene offsets); the standard potentials tabulated on Wikipedia; and primary papers named on each card. The Cycles questions follow the papers they cite. The Theory page lists its references. Structures are drawn with [RDKit](https://www.rdkit.org).

## How to cite

If you use Photoredox Learn in a course, a worksheet or a paper, please cite it:

> Bindschaedler, Q. *Photoredox Learn* (2026). ChemTrain. https://github.com/ChemTrain/photoredox-learn

GitHub's **Cite this repository** button (from `CITATION.cff`) gives the same reference in APA and BibTeX.

## License

- Code (the HTML, CSS and JavaScript): [MIT](LICENSE).
- Content (the selection and grouping of the card sets, the notes, the Electron transfer and Cycles questions with their explanations, the Theory text and the structure drawings): [CC BY 4.0](LICENSE-CONTENT.md). You may reuse and adapt it, as long as you credit Photoredox Learn.
- Logo (`logo.svg`): the locomotive is adapted from [Twemoji](https://github.com/jdecked/twemoji), © Twitter, Inc and other contributors, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the benzene-ring smoke was added for ChemTrain.

The redox potentials are measurements published by others; please cite their sources as well.
