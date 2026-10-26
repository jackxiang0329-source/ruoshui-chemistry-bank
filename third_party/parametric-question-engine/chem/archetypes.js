// Gen Chem calculation archetypes. Same contract as the QR engine:
// gen(rng, diff) -> { question, answer, distractors, fmt, explanation }.
// The solver computes `answer`; distractors are trap values keyed to specific
// student errors. finalize() guarantees >=4 distinct formatted distractors
// (returns null otherwise -> build.js retries with new parameters).
import { round, num, withUnit, frac } from "../core/options.js";
import {
  ATOMIC, Z, CONST, FORMULA_POOL, REACTIONS, KA, REDOX, SPECIFIC_HEAT,
  elementCounts, formulaMass, sci, sigFig, formula,
} from "./data.js";

// ---- shared helpers ----
function finalize(question, answer, distractors, fmt, explanation) {
  const aStr = fmt(answer);
  const seen = new Set([aStr]);
  const good = [];
  for (const d of distractors) {
    let s;
    try {
      s = fmt(d);
    } catch {
      continue;
    }
    if (s === aStr || seen.has(s)) continue;
    seen.add(s);
    good.push(d);
  }
  if (good.length < 4) return null; // signal build.js to retry
  return { question, answer, distractors: good, fmt, explanation };
}

const gmol = withUnit("g/mol");
const gram = withUnit("g");
const molU = withUnit("mol");
const molar = withUnit("M");
const liter = withUnit("L");
const volt = withUnit("V");
const joule = withUnit("J");
const pHfmt = (v) => String(round(v, 1));
const pctf = (v) => `${round(v, 1)}%`;
const auto = (v) => {
  const a = Math.abs(v);
  if (a !== 0 && (a < 0.01 || a >= 10000)) return sci(v, 2);
  return String(round(v, 2));
};
const describeMass = (counts) =>
  Object.entries(counts)
    .map(([el, n]) => (n === 1 ? `${el}=${ATOMIC[el]}` : `${el}: ${n}×${ATOMIC[el]}`))
    .join(" + ");

// ============================================================ STOICHIOMETRY

const molar_mass = {
  key: "molar_mass",
  topic: "Stoichiometry",
  subtopic: "Molar Mass",
  w: 4,
  tags: ["stoichiometry", "molar-mass"],
  gen(rng, diff) {
    const f = rng.pick(FORMULA_POOL[diff] || FORMULA_POOL.medium);
    const counts = elementCounts(f);
    if (Object.keys(counts).length < 2) return null; // skip diatomics like O2
    const M = formulaMass(f);
    const noSub = round(Object.keys(counts).reduce((s, el) => s + ATOMIC[el], 0), 2);
    const zSum = Object.entries(counts).reduce((s, [el, n]) => s + Z[el] * n, 0);
    const plusO = round(M + ATOMIC.O, 2);
    const minusMin = round(M - Math.min(...Object.keys(counts).map((el) => ATOMIC[el])), 2);
    return finalize(
      `What is the molar mass of ${formula(f)}?`,
      M,
      [noSub, zSum, plusO, minusMin, round(M / 2, 2)],
      gmol,
      `Sum (atomic mass × subscript): ${describeMass(counts)} = ${M} g/mol.`
    );
  },
};

const mole_conversion = {
  key: "mole_conversion",
  topic: "Stoichiometry",
  subtopic: "Mole Conversions",
  w: 5,
  tags: ["stoichiometry", "mole-conversion"],
  gen(rng, diff) {
    const f = rng.pick(diff === "easy" ? FORMULA_POOL.easy : FORMULA_POOL.medium);
    const counts = elementCounts(f);
    if (Object.keys(counts).length < 2) return null;
    const M = formulaMass(f);
    const mol = rng.pick([0.25, 0.5, 1, 2, 1.5]);
    const grams = round(mol * M, 2);
    if (diff === "easy") {
      return finalize(
        `How many moles are in ${grams} g of ${formula(f)}? (molar mass = ${M} g/mol)`,
        mol,
        [round(grams * M, 2), grams, round(M / grams, 2), round(mol / 2, 2), round(mol * 2, 2)],
        molU,
        `moles = mass ÷ molar mass = ${grams} ÷ ${M} = ${round(mol, 2)} mol. Multiplying instead of dividing gives ${round(grams * M, 2)}.`
      );
    }
    if (diff === "medium") {
      const particles = mol * CONST.NA;
      const pf = (v) => `${sci(v, 2)} molecules`;
      return finalize(
        `How many molecules are in ${grams} g of ${formula(f)}? (molar mass = ${M} g/mol)`,
        particles,
        [grams * CONST.NA, mol, mol / CONST.NA, particles * 2, round(grams, 2)],
        pf,
        `${grams} g ÷ ${M} g/mol = ${round(mol, 2)} mol; × ${sci(CONST.NA)} = ${sci(particles)} molecules. Skipping the ÷ molar mass (treating grams as moles) gives ${sci(grams * CONST.NA)}.`
      );
    }
    // hard: atoms of ONE element within the compound
    const multiEl = Object.entries(counts).filter(([, n]) => n > 1);
    if (!multiEl.length) return null;
    const [el, sub] = rng.pick(multiEl);
    const atoms = mol * sub * CONST.NA;
    const af = (v) => `${sci(v, 2)} atoms`;
    return finalize(
      `How many atoms of ${el} are in ${grams} g of ${formula(f)}? (molar mass = ${M} g/mol)`,
      atoms,
      [mol * CONST.NA, grams * sub * CONST.NA, atoms * sub, mol * sub, atoms / 2],
      af,
      `moles of ${formula(f)} = ${grams} ÷ ${M} = ${round(mol, 2)} mol. Each formula unit has ${sub} ${el} atoms: ${round(mol, 2)} × ${sub} × ${sci(CONST.NA)} = ${sci(atoms)}. Forgetting the ×${sub} subscript gives ${sci(mol * CONST.NA)}.`
    );
  },
};

const mass_mass = {
  key: "mass_mass",
  topic: "Stoichiometry",
  subtopic: "Mass-Mass Stoichiometry",
  w: 7,
  tags: ["stoichiometry", "mass-mass"],
  gen(rng, diff) {
    const rxn = rng.pick(REACTIONS);
    const given = rng.pick(rxn.reactants);
    const targetPool = diff === "easy" ? rxn.reactants.concat(rxn.products) : rxn.products;
    const target = rng.pick(targetPool.filter((s) => s.f !== given.f));
    if (!target) return null;
    const Mg = formulaMass(given.f);
    const Mt = formulaMass(target.f);
    const ratio = target.c / given.c;
    if (diff === "easy" && given.c !== target.c) return null; // easy = 1:1 ratio only
    const molGiven = rng.pick([0.5, 1, 2, 1.5]);
    const gramsGiven = round(molGiven * Mg, 2);
    const gramsTarget = round(molGiven * ratio * Mt, 2);
    return finalize(
      `For the reaction ${rxn.eq}, how many grams of ${formula(target.f)} are produced from ${gramsGiven} g of ${formula(given.f)}?`,
      gramsTarget,
      [
        round(molGiven * Mt, 2), // ignored coefficients (1:1 ratio)
        round(gramsGiven * ratio, 2), // skipped molar-mass conversion (grams as moles)
        round(molGiven * ratio * Mg, 2), // used wrong (reactant) molar mass for product
        round(gramsGiven * (Mg / Mt), 2), // inverted the molar-mass ratio
        molGiven, // reported moles, not grams
        round(gramsTarget * 2, 2),
        round(gramsTarget / 2, 2),
      ],
      gram,
      `${gramsGiven} g ÷ ${Mg} g/mol = ${round(molGiven, 2)} mol ${formula(given.f)}; × mole ratio ${target.c}/${given.c} = ${round(molGiven * ratio, 2)} mol ${formula(target.f)}; × ${Mt} g/mol = ${gramsTarget} g. Using a 1:1 ratio gives ${round(molGiven * Mt, 2)} g.`
    );
  },
};

const limiting_yield = {
  key: "limiting_yield",
  topic: "Stoichiometry",
  subtopic: "Limiting Reagent & Percent Yield",
  w: 7,
  tags: ["stoichiometry", "limiting-reagent", "percent-yield"],
  gen(rng, diff) {
    const rxn = rng.pick(REACTIONS.filter((r) => r.reactants.length === 2));
    const [A, B] = rxn.reactants;
    const product = rng.pick(rxn.products);
    const Ma = formulaMass(A.f);
    const Mb = formulaMass(B.f);
    const Mp = formulaMass(product.f);
    const gA = round(rng.pick([2, 3, 4, 5]) * Ma, 1);
    const gB = round(rng.pick([2, 3, 4, 5]) * Mb, 1);
    const molA = gA / Ma;
    const molB = gB / Mb;
    const ratioA = molA / A.c;
    const ratioB = molB / B.c;
    if (Math.abs(ratioA - ratioB) / Math.max(ratioA, ratioB) < 0.15) return null; // ambiguous
    const limiting = ratioA < ratioB ? A : B;
    const limMol = Math.min(ratioA, ratioB);
    if (diff === "easy") {
      return finalize(
        `${gA} g of ${formula(A.f)} reacts with ${gB} g of ${formula(B.f)} (${rxn.eq}). Which is the limiting reagent?`,
        formula(limiting.f),
        [formula(limiting === A ? B.f : A.f), "Neither — they react completely", "Both equally", `${formula(A.f)} and ${formula(B.f)}`],
        (s) => String(s),
        `Compare moles ÷ coefficient: ${formula(A.f)} = ${round(molA, 2)}/${A.c} = ${round(ratioA, 3)}, ${formula(B.f)} = ${round(molB, 2)}/${B.c} = ${round(ratioB, 3)}. The smaller (${formula(limiting.f)}) runs out first. Comparing grams instead of mole-ratios is the classic error.`
      );
    }
    const theoretical = round(limMol * product.c * Mp, 2);
    if (diff === "medium") {
      const wrongLim = ratioA < ratioB ? B : A;
      const wrongMol = Math.max(ratioA, ratioB);
      return finalize(
        `${gA} g of ${formula(A.f)} reacts with ${gB} g of ${formula(B.f)} (${rxn.eq}). What is the theoretical yield of ${formula(product.f)}?`,
        theoretical,
        [
          round(wrongMol * product.c * Mp, 2), // used wrong (excess) reactant
          round(limMol * Mp, 2), // forgot product coefficient
          round(limMol * product.c * formulaMass(wrongLim.f), 2), // wrong molar mass
          round(theoretical / 2, 2),
          round(theoretical * 2, 2),
        ],
        gram,
        `Limiting reagent is ${formula(limiting.f)} (${round(limMol, 3)} mol ÷ coeff). Product = ${round(limMol, 3)} × ${product.c} × ${Mp} g/mol = ${theoretical} g.`
      );
    }
    // hard: percent yield given an actual yield
    const pctYield = rng.pick([75, 80, 85, 90, 60]);
    const actual = round((theoretical * pctYield) / 100, 2);
    return finalize(
      `${gA} g of ${formula(A.f)} reacts with ${gB} g of ${formula(B.f)} (${rxn.eq}), giving an actual yield of ${actual} g of ${formula(product.f)}. What is the percent yield?`,
      pctYield,
      [
        round((theoretical / actual) * 100, 1), // inverted
        round((actual / (Math.max(ratioA, ratioB) * product.c * Mp)) * 100, 1), // used excess reactant for theoretical
        round(actual, 1), // reported actual grams as %
        round(pctYield / 2, 1),
        round(100 - pctYield, 1),
      ],
      pctf,
      `Theoretical yield (from limiting ${formula(limiting.f)}) = ${theoretical} g. Percent yield = actual/theoretical × 100 = ${actual}/${theoretical} × 100 = ${pctYield}%.`
    );
  },
};

const percent_comp = {
  key: "percent_comp",
  topic: "Stoichiometry",
  subtopic: "Percent Composition",
  w: 4,
  tags: ["stoichiometry", "percent-composition"],
  gen(rng, diff) {
    const pool = diff === "easy" ? FORMULA_POOL.easy : diff === "hard" ? FORMULA_POOL.hard : FORMULA_POOL.medium;
    const f = rng.pick(pool);
    const counts = elementCounts(f);
    if (Object.keys(counts).length < 2) return null;
    const M = formulaMass(f);
    const el = rng.pick(Object.keys(counts));
    const sub = counts[el];
    const pctVal = round(((sub * ATOMIC[el]) / M) * 100, 1);
    const totalAtoms = Object.values(counts).reduce((a, b) => a + b, 0);
    return finalize(
      `What is the mass percent of ${el} in ${formula(f)}?`,
      pctVal,
      [
        round((ATOMIC[el] / M) * 100, 1), // forgot subscript on target element
        round((sub / totalAtoms) * 100, 1), // used atom-count fraction, not mass
        round((M / (sub * ATOMIC[el])) * 100, 1), // inverted
        round(pctVal / sub, 1),
        round(100 - pctVal, 1),
      ],
      pctf,
      `% ${el} = (${sub} × ${ATOMIC[el]}) / ${M} × 100 = ${pctVal}%. Forgetting the ×${sub} subscript gives ${round((ATOMIC[el] / M) * 100, 1)}%.`
    );
  },
};

const empirical_formula = {
  key: "empirical_formula",
  topic: "Stoichiometry",
  subtopic: "Empirical & Molecular Formula",
  w: 5,
  tags: ["stoichiometry", "empirical-formula"],
  gen(rng, diff) {
    // Construct BACKWARD from a known empirical formula so percentages reduce cleanly.
    const bank = [
      { emp: "CH2O", els: { C: 1, H: 2, O: 1 } },
      { emp: "NO2", els: { N: 1, O: 2 } },
      { emp: "CH", els: { C: 1, H: 1 } },
      { emp: "Fe2O3", els: { Fe: 2, O: 3 } },
      { emp: "CH3", els: { C: 1, H: 3 } },
      { emp: "P2O5", els: { P: 2, O: 5 } },
    ];
    const pick = rng.pick(bank);
    const M = Object.entries(pick.els).reduce((s, [el, n]) => s + ATOMIC[el] * n, 0);
    const pct = {};
    for (const [el, n] of Object.entries(pick.els)) pct[el] = round((ATOMIC[el] * n) / M * 100, 1);
    const pctStr = Object.entries(pct).map(([el, p]) => `${p}% ${el}`).join(", ");
    const idf = (s) => formula(s);
    if (diff === "hard") {
      const mult = rng.pick([2, 3, 4]);
      const molMass = round(M * mult, 1);
      const molFormula = Object.entries(pick.els).map(([el, n]) => `${el}${n * mult === 1 ? "" : n * mult}`).join("");
      return finalize(
        `A compound is ${pctStr} by mass and has a molar mass of ${molMass} g/mol. What is its molecular formula?`,
        molFormula,
        [pick.emp, Object.entries(pick.els).map(([el, n]) => `${el}${n * (mult + 1) === 1 ? "" : n * (mult + 1)}`).join(""), Object.entries(pick.els).map(([el, n]) => `${el}${n * 2 === 1 ? "" : n * 2}`).join(""), `${Object.keys(pick.els).join("")}`],
        idf,
        `Empirical formula ${formula(pick.emp)} has mass ${round(M, 1)} g/mol. Multiplier = ${molMass}/${round(M, 1)} = ${mult}, so molecular formula = ${formula(molFormula)}. Reporting the empirical formula forgets the multiplier.`
      );
    }
    // easy/medium: find the empirical formula from percentages
    const wrongRaw = Object.entries(pct).sort((a, b) => b[1] - a[1]).map(([el]) => el).join(""); // ratio by raw % (forgot ÷M)
    return finalize(
      `A compound is ${pctStr} by mass. What is its empirical formula?`,
      pick.emp,
      [
        wrongRaw,
        Object.keys(pick.els).join(""), // dropped all subscripts
        Object.entries(pick.els).map(([el, n]) => `${el}${n + 1}`).join(""), // off-by-one subscript
        Object.entries(pick.els).reverse().map(([el, n]) => `${el}${n === 1 ? "" : n}`).join(""),
      ],
      idf,
      `Assume 100 g → divide each mass by its atomic mass → mole ratio. ${Object.entries(pick.els).map(([el, n]) => `${el}: ${pct[el]}/${ATOMIC[el]}`).join(", ")} reduces to ${Object.values(pick.els).join(":")}, giving ${formula(pick.emp)}. Using the raw percents as the ratio (skipping ÷ atomic mass) is the trap.`
    );
  },
};

// ============================================================ SOLUTIONS

const molarity_dilution = {
  key: "molarity_dilution",
  topic: "Solutions",
  subtopic: "Molarity & Dilution",
  w: 6,
  tags: ["solutions", "molarity", "dilution"],
  gen(rng, diff) {
    if (diff === "easy") {
      const mol = rng.pick([0.5, 1, 1.5, 2, 0.25]);
      const V = rng.pick([0.5, 1, 2, 0.25]);
      const M = round(mol / V, 2);
      return finalize(
        `What is the molarity of a solution containing ${mol} mol of solute in ${V} L of solution?`,
        M,
        [round(mol * V, 2), round(V / mol, 2), round(mol / (V * 1000), 4), round(M * 2, 2), round(M / 2, 2)],
        molar,
        `M = moles ÷ liters = ${mol} ÷ ${V} = ${M} M.`
      );
    }
    if (diff === "medium") {
      // molarity from grams
      const f = rng.pick(["NaCl", "NaOH", "KCl", "CaCO3", "Na2SO4"]);
      const M = formulaMass(f);
      const mol = rng.pick([0.5, 1, 2]);
      const grams = round(mol * M, 2);
      const V = rng.pick([0.5, 1, 2]);
      const molarity = round(mol / V, 2);
      return finalize(
        `What is the molarity when ${grams} g of ${formula(f)} (molar mass ${M} g/mol) is dissolved in ${V} L of solution?`,
        molarity,
        [round(grams / V, 2), round(mol, 2), round((grams / M) * V, 2), round(grams / (M * V * 1000), 4), round(molarity * 2, 2)],
        molar,
        `moles = ${grams} ÷ ${M} = ${round(mol, 2)} mol; M = ${round(mol, 2)} ÷ ${V} = ${molarity} M. Using grams directly as moles gives ${round(grams / V, 2)} M.`
      );
    }
    // hard: how much water to ADD to dilute (V_water = V2 - V1)
    const M1 = rng.pick([2, 4, 6, 5]);
    const V1 = rng.pick([0.1, 0.25, 0.5]);
    const M2 = rng.pick([0.5, 1, 2].filter((m) => m < M1));
    const V2 = round((M1 * V1) / M2, 3);
    const water = round(V2 - V1, 3);
    if (water <= 0) return null;
    return finalize(
      `How much water must be added to ${V1} L of ${M1} M solution to dilute it to ${M2} M?`,
      water,
      [V2, round(M1 * V1 * M2, 3), round(V1 / M2, 3), round(M1 / M2, 3), round(water * 2, 3)],
      liter,
      `M₁V₁ = M₂V₂ → V₂ = (${M1})(${V1})/${M2} = ${V2} L total. Water added = V₂ − V₁ = ${V2} − ${V1} = ${water} L. Reporting the final volume (${V2} L) forgets to subtract the original.`
    );
  },
};

// ============================================================ GASES

const gas_laws = {
  key: "gas_laws",
  topic: "Gases",
  subtopic: "Ideal & Combined Gas Laws",
  w: 6,
  tags: ["gases", "ideal-gas", "combined-gas-law"],
  gen(rng, diff) {
    if (diff === "easy") {
      // Boyle: P1V1 = P2V2
      const P1 = rng.pick([1, 2, 3, 4]);
      const V1 = rng.pick([2, 4, 6, 8, 10]);
      const P2 = rng.pick([1, 2, 4, 8].filter((p) => (P1 * V1) % p === 0 && p !== P1));
      if (!P2) return null;
      const V2 = (P1 * V1) / P2;
      return finalize(
        `A gas occupies ${V1} L at ${P1} atm. At constant temperature, what volume does it occupy at ${P2} atm?`,
        V2,
        [round((P2 * V1) / P1, 2), round(V1 * (P2 / P1), 2), round(V1 + (P2 - P1), 2), round(V2 / 2, 2), round(V2 * 2, 2)],
        liter,
        `Boyle's law: P₁V₁ = P₂V₂ → V₂ = (${P1})(${V1})/${P2} = ${V2} L. (Pressure up → volume down.)`
      );
    }
    if (diff === "medium") {
      // ideal gas, solve for n; temperature given in °C (convert inside)
      const P = rng.pick([1, 2, 3]);
      const V = rng.pick([2, 3, 4, 5]);
      const Tc = rng.pick([0, 27, 127, 227]);
      const Tk = Tc + CONST.KELVIN;
      const n = round((P * V) / (CONST.R * Tk), 2);
      return finalize(
        `How many moles of an ideal gas occupy ${V} L at ${P} atm and ${Tc}°C? (R = 0.0821)`,
        n,
        [
          round((P * V) / (CONST.R * Tc || 1), 2), // used °C not K
          round((P * V) / Tk, 2), // forgot R
          round((CONST.R * Tk) / (P * V), 2), // inverted
          round((P * V * CONST.R) / Tk, 2), // multiplied by R
          round(n * 2, 2),
        ],
        molU,
        `Convert: T = ${Tc} + 273 = ${Tk} K. n = PV/RT = (${P})(${V}) / (0.0821 × ${Tk}) = ${n} mol. Using ${Tc}°C without converting to Kelvin is the trap.`
      );
    }
    // hard: combined gas law, solve V2; temps in °C
    const P1 = rng.pick([1, 2]);
    const V1 = rng.pick([2, 4, 6]);
    const T1c = rng.pick([27, 127]);
    const P2 = rng.pick([1, 2, 4].filter((p) => p !== P1));
    const T2c = rng.pick([227, 327]);
    const T1 = T1c + CONST.KELVIN;
    const T2 = T2c + CONST.KELVIN;
    const V2 = round((P1 * V1 * T2) / (T1 * P2), 2);
    return finalize(
      `A gas at ${P1} atm and ${T1c}°C occupies ${V1} L. What volume will it occupy at ${P2} atm and ${T2c}°C?`,
      V2,
      [
        round((P1 * V1 * T2c) / (T1c * P2), 2), // used °C not K
        round((P2 * V1 * T2) / (T1 * P1), 2), // inverted pressure ratio
        round((P1 * V1 * T1) / (T2 * P2), 2), // inverted temperature ratio
        round(V2 / 2, 2),
        round(V2 * 2, 2),
      ],
      liter,
      `P₁V₁/T₁ = P₂V₂/T₂ with T in Kelvin (${T1} K, ${T2} K). V₂ = P₁V₁T₂/(T₁P₂) = (${P1}×${V1}×${T2})/(${T1}×${P2}) = ${V2} L.`
    );
  },
};

const gas_stoich_stp = {
  key: "gas_stoich_stp",
  topic: "Gases",
  subtopic: "Gas Stoichiometry at STP",
  w: 4,
  tags: ["gases", "stoichiometry", "STP"],
  gen(rng, diff) {
    if (diff === "easy") {
      const mol = rng.pick([0.5, 1, 2, 1.5, 0.25]);
      const V = round(mol * CONST.MOLAR_VOL_STP, 2);
      return finalize(
        `What volume does ${mol} mol of an ideal gas occupy at STP?`,
        V,
        [round(mol / CONST.MOLAR_VOL_STP, 3), round(mol * 24.4, 2), round(mol * 22.7, 2), round(V / 2, 2), round(mol * 24, 2)],
        liter,
        `At STP, 1 mol = 22.4 L, so ${mol} × 22.4 = ${V} L.`
      );
    }
    // medium/hard: g of solid -> mol -> L of gas at STP through a reaction
    const rxn = rng.pick(REACTIONS.filter((r) => r.products.some((p) => ["CO2", "O2", "H2O"].includes(p.f))));
    const gasProd = rng.pick(rxn.products.filter((p) => ["CO2", "O2"].includes(p.f))) || rxn.products[0];
    const solid = rxn.reactants[0];
    const Ms = formulaMass(solid.f);
    const molSolid = rng.pick([0.5, 1, 2]);
    const grams = round(molSolid * Ms, 2);
    const molGas = molSolid * (gasProd.c / solid.c);
    const V = round(molGas * CONST.MOLAR_VOL_STP, 2);
    return finalize(
      `For ${rxn.eq}, what volume of ${formula(gasProd.f)} (at STP) is produced from ${grams} g of ${formula(solid.f)}?`,
      V,
      [
        round(molSolid * CONST.MOLAR_VOL_STP, 2), // ignored coefficient ratio
        round((molGas / CONST.MOLAR_VOL_STP) * 100, 3), // divided by 22.4
        round(grams * CONST.MOLAR_VOL_STP, 2), // used grams as moles
        round(molGas * 24.4, 2), // wrong molar volume
        round(V / 2, 2),
      ],
      liter,
      `${grams} g ÷ ${Ms} g/mol = ${round(molSolid, 2)} mol ${formula(solid.f)}; × ${gasProd.c}/${solid.c} = ${round(molGas, 2)} mol gas; × 22.4 L/mol = ${V} L.`
    );
  },
};

// ============================================================ ACIDS & BASES

const ph_strong = {
  key: "ph_strong",
  topic: "Acids & Bases",
  subtopic: "pH / pOH (Strong)",
  w: 5,
  tags: ["acids-bases", "pH"],
  gen(rng, diff) {
    if (diff === "easy") {
      const n = rng.int(1, 6);
      const conc = 10 ** -n;
      return finalize(
        `What is the pH of a strong acid solution with [H⁺] = ${sci(conc)} M?`,
        n,
        [14 - n, -n, round(n + 1, 1), round(n - 1, 1), round(14 + n, 1)],
        pHfmt,
        `pH = −log[H⁺] = −log(10⁻${n}) = ${n}. Reporting 14 − ${n} = ${14 - n} would be the pOH.`
      );
    }
    if (diff === "medium") {
      // given [OH-], find pH
      const n = rng.int(1, 6);
      const conc = 10 ** -n;
      const pH = 14 - n;
      return finalize(
        `What is the pH of a solution with [OH⁻] = ${sci(conc)} M?`,
        pH,
        [n, round(14 + n, 1), round(pH - 1, 1), round(pH + 1, 1), round(7, 1)],
        pHfmt,
        `pOH = −log[OH⁻] = ${n}; pH = 14 − pOH = 14 − ${n} = ${pH}. Stopping at pOH (${n}) is the trap.`
      );
    }
    // hard: strong base with 2 OH per formula
    const base = rng.pick([{ f: "Ca(OH)2", oh: 2 }, { f: "Ba(OH)2", oh: 2 }]);
    const m = rng.pick([0.05, 0.005, 0.5]);
    const oh = m * base.oh;
    const pOH = round(-Math.log10(oh), 1);
    const pH = round(14 - pOH, 1);
    return finalize(
      `What is the pH of a ${m} M solution of ${formula(base.f)}?`,
      pH,
      [
        round(14 - -Math.log10(m), 1), // forgot ×2 for the two OH⁻
        pOH, // reported pOH
        round(-Math.log10(oh), 1), // pOH again (distinct value guard handles)
        round(pH - 1, 1),
        round(pH + 1, 1),
      ],
      pHfmt,
      `${formula(base.f)} gives ${base.oh} OH⁻ per formula: [OH⁻] = ${m} × ${base.oh} = ${round(oh, 4)} M. pOH = ${pOH}, pH = 14 − ${pOH} = ${pH}. Forgetting the ×${base.oh} is the trap.`
    );
  },
};

const ph_weak_ka = {
  key: "ph_weak_ka",
  topic: "Acids & Bases",
  subtopic: "Weak-Acid Ka → pH",
  w: 5,
  tags: ["acids-bases", "weak-acid", "Ka"],
  gen(rng, diff) {
    const acid = rng.pick(KA);
    const C = rng.pick([0.1, 0.2, 0.5, 1]);
    if (C / acid.ka < 1000) return null; // small-x approximation must hold
    const H = Math.sqrt(acid.ka * C);
    const pH = round(-Math.log10(H), 1);
    if (diff === "hard") {
      const pctIon = round((H / C) * 100, 2);
      return finalize(
        `What is the percent ionization of a ${C} M solution of ${acid.name} (Ka = ${sci(acid.ka)})?`,
        pctIon,
        [
          round(H * 100, 2), // forgot ÷ C
          round((acid.ka / C) * 100, 4), // used Ka/C not sqrt
          round((C / H) * 100, 2), // inverted
          round(pctIon * 2, 2),
          round(pctIon / 2, 2),
        ],
        pctf,
        `[H⁺] = √(Ka·C) = √(${sci(acid.ka)} × ${C}) = ${sci(H)} M. % ionization = [H⁺]/C × 100 = ${pctIon}%.`
      );
    }
    return finalize(
      `What is the approximate pH of a ${C} M solution of ${acid.name} (Ka = ${sci(acid.ka)})?`,
      pH,
      [
        round(-Math.log10(C), 1), // treated as strong acid
        round(-Math.log10(acid.ka * C), 1), // forgot the square root
        round(-Math.log10(acid.ka), 1), // reported pKa
        round(14 - pH, 1), // pOH side
        round(pH + 1, 1),
      ],
      pHfmt,
      `Weak acid: [H⁺] ≈ √(Ka·C) = √(${sci(acid.ka)} × ${C}) = ${sci(H)} M; pH = −log[H⁺] = ${pH}. Treating it as fully ionized gives pH = −log(${C}) = ${round(-Math.log10(C), 1)}.`
    );
  },
};

// ============================================================ EQUILIBRIUM

const keq_ice = {
  key: "keq_ice",
  topic: "Equilibrium",
  subtopic: "Keq Expression & ICE",
  w: 4,
  tags: ["equilibrium", "Keq"],
  gen(rng, diff) {
    if (diff === "medium" || diff === "easy") {
      // numeric Keq from equilibrium concentrations
      const useExp = diff === "medium";
      if (useExp) {
        // N2 + 3H2 <-> 2NH3 : K = [NH3]^2 / ([N2][H2]^3)
        const nh3 = rng.pick([0.2, 0.4, 0.5, 1]);
        const n2 = rng.pick([0.5, 1, 2]);
        const h2 = rng.pick([0.5, 1, 2]);
        const K = (nh3 ** 2) / (n2 * h2 ** 3);
        return finalize(
          `For N₂ + 3H₂ ⇌ 2NH₃ at equilibrium [N₂]=${n2} M, [H₂]=${h2} M, [NH₃]=${nh3} M. What is Kc?`,
          round(K, 3),
          [
            round(nh3 / (n2 * h2), 3), // dropped all exponents
            round((nh3 ** 2) / (n2 * h2), 3), // dropped the cube on H2
            round((n2 * h2 ** 3) / nh3 ** 2, 3), // inverted
            round(K * 2, 3),
            round(K / 2, 3),
          ],
          auto,
          `Kc = [NH₃]² / ([N₂][H₂]³) = ${nh3}² / (${n2} × ${h2}³) = ${round(K, 3)}. Dropping the coefficient exponents is the headline error.`
        );
      }
      // easy: simple A + B <-> C
      const c = rng.pick([0.2, 0.4, 0.6, 1]);
      const a = rng.pick([0.5, 1, 2]);
      const b = rng.pick([0.5, 1, 2]);
      const K = c / (a * b);
      return finalize(
        `For A + B ⇌ C at equilibrium [A]=${a} M, [B]=${b} M, [C]=${c} M. What is Kc?`,
        round(K, 3),
        [round((a * b) / c, 3), round(c / (a + b), 3), round(c * a * b, 3), round(K * 2, 3), round(K / 2, 3)],
        auto,
        `Kc = [C] / ([A][B]) = ${c} / (${a} × ${b}) = ${round(K, 3)}. Inverting (reactants over products) gives ${round((a * b) / c, 3)}.`
      );
    }
    // hard: the symbolic equilibrium expression
    const cases = [
      { eq: "2 SO2 + O2 ⇌ 2 SO3", ans: "[SO₃]² / ([SO₂]²[O₂])", traps: ["[SO₂]²[O₂] / [SO₃]²", "[SO₃] / ([SO₂][O₂])", "[SO₃]² / ([SO₂]²[O₂]²)", "2[SO₃] / (2[SO₂][O₂])"] },
      { eq: "N2 + 3 H2 ⇌ 2 NH3", ans: "[NH₃]² / ([N₂][H₂]³)", traps: ["[N₂][H₂]³ / [NH₃]²", "[NH₃] / ([N₂][H₂])", "[NH₃]² / ([N₂][H₂])", "2[NH₃] / ([N₂]·3[H₂])"] },
      { eq: "PCl5 ⇌ PCl3 + Cl2", ans: "[PCl₃][Cl₂] / [PCl₅]", traps: ["[PCl₅] / ([PCl₃][Cl₂])", "[PCl₃][Cl₂][PCl₅]", "[PCl₃] + [Cl₂] / [PCl₅]", "[PCl₅] / [PCl₃][Cl₂]"] },
    ];
    const cse = rng.pick(cases);
    return finalize(
      `What is the equilibrium expression (Kc) for: ${cse.eq}?`,
      cse.ans,
      cse.traps,
      (s) => String(s),
      `Kc = products over reactants, each raised to its coefficient: ${cse.ans}.`
    );
  },
};

// ============================================================ THERMOCHEMISTRY

const thermochem = {
  key: "thermochem",
  topic: "Thermochemistry",
  subtopic: "Calorimetry & Hess's Law",
  w: 6,
  tags: ["thermochemistry", "calorimetry", "hess"],
  gen(rng, diff) {
    if (diff === "hard") {
      // Hess's law: target = step1 (maybe reversed) + step2 (maybe scaled)
      const sets = [
        { prompt: "C + O₂ → CO₂ (ΔH = −393 kJ); CO + ½O₂ → CO₂ (ΔH = −283 kJ). Find ΔH for C + ½O₂ → CO.", ans: -110, traps: [110, -676, -283, 676] },
        { prompt: "H₂ + ½O₂ → H₂O (ΔH = −286 kJ); 2H₂ + O₂ → 2H₂O (ΔH = ?). Find ΔH.", ans: -572, traps: [-286, 286, -143, 572] },
        { prompt: "N₂ + O₂ → 2NO (ΔH = +180 kJ). Find ΔH for 2NO → N₂ + O₂.", ans: -180, traps: [180, -360, 90, 360] },
      ];
      const s = rng.pick(sets);
      const kJ = (v) => `${v} kJ`;
      return finalize(s.prompt, s.ans, s.traps, kJ, `Apply Hess's law: reversing a step flips the sign of ΔH; scaling a step multiplies ΔH. Result = ${s.ans} kJ.`);
    }
    const c = rng.pick(SPECIFIC_HEAT);
    const m = rng.pick([20, 50, 100, 25, 200]);
    const dT = rng.pick([10, 20, 25, 5, 40]);
    const q = round(m * c.c * dT, 1);
    if (diff === "easy") {
      return finalize(
        `How much heat is required to raise ${m} g of ${c.name} (c = ${c.c} J/g·°C) by ${dT}°C?`,
        q,
        [round(m * dT, 1), round(c.c * dT, 1), round((m * dT) / c.c, 1), round(q / 2, 1), round(q * 2, 1)],
        joule,
        `q = mcΔT = ${m} × ${c.c} × ${dT} = ${q} J. Forgetting the specific heat (just m·ΔT) gives ${round(m * dT, 1)}.`
      );
    }
    // medium: solve for specific heat given q
    const cf = (v) => `${round(v, 2)} J/g·°C`;
    return finalize(
      `${q} J of heat raises the temperature of ${m} g of a metal by ${dT}°C. What is its specific heat?`,
      c.c,
      [round(q / (m + dT), 2), round((q * dT) / m, 2), round(q / m, 2), round(q / dT, 2), round(c.c * 2, 2)],
      cf,
      `c = q / (m·ΔT) = ${q} / (${m} × ${dT}) = ${c.c} J/g·°C.`
    );
  },
};

// ============================================================ KINETICS

const kinetics_rate = {
  key: "kinetics_rate",
  topic: "Kinetics",
  subtopic: "Rate Law & Rate Constant",
  w: 4,
  tags: ["kinetics", "rate-law"],
  gen(rng, diff) {
    const order = rng.pick([1, 2]);
    const factor = rng.pick([2, 3]);
    const rateFactor = factor ** order;
    if (diff === "easy" || diff === "medium") {
      const overall = diff === "medium" ? order + rng.pick([0, 1]) : order;
      if (diff === "medium") {
        // overall order + units of k
        const unitMap = { 0: "M·s⁻¹", 1: "s⁻¹", 2: "M⁻¹·s⁻¹", 3: "M⁻²·s⁻¹" };
        return finalize(
          `A reaction is ${order === 1 ? "first" : "second"} order in [A] and ${overall - order === 0 ? "zero" : "first"} order in [B]. What are the units of the rate constant k? (overall order ${overall})`,
          unitMap[overall],
          [unitMap[(overall + 1) % 4], unitMap[(overall + 2) % 4], "M·s⁻¹", "mol·L⁻¹"].filter((u) => u !== unitMap[overall]),
          (s) => String(s),
          `Units of k = M^(1−overall order)·s⁻¹. Overall order ${overall} → ${unitMap[overall]}.`
        );
      }
      return finalize(
        `When [A] is ${factor === 2 ? "doubled" : "tripled"}, the reaction rate increases by a factor of ${rateFactor}. What is the order with respect to A?`,
        order,
        [rateFactor, factor, round(rateFactor / factor + 1, 0), order + 1, 0].filter((v) => v !== order),
        (v) => String(v),
        `rate ∝ [A]ⁿ. ${factor}ⁿ = ${rateFactor} → n = ${order}. Reading the order off the rate factor (${rateFactor}) instead of solving is the trap.`
      );
    }
    // hard: solve for k from a data row
    const A = rng.pick([0.1, 0.2, 0.5]);
    const k = rng.pick([0.02, 0.05, 0.1]);
    const rate = round(k * A ** order, 4);
    const kf = (v) => sci(v, 2);
    return finalize(
      `A reaction is ${order === 1 ? "first" : "second"} order in A. When [A] = ${A} M, the rate is ${rate} M/s. What is the rate constant k?`,
      k,
      [round(rate / A, 4), round(rate * A, 4), round(rate / A ** (order + 1), 4), round(k * 2, 4), round(rate, 4)],
      kf,
      `rate = k[A]^${order} → k = rate / [A]^${order} = ${rate} / ${A}^${order} = ${sci(k)}.`
    );
  },
};

// ============================================================ ELECTROCHEMISTRY

const electrochem = {
  key: "electrochem",
  topic: "Electrochemistry",
  subtopic: "Standard Cell Potential",
  w: 4,
  tags: ["electrochemistry", "cell-potential"],
  gen(rng, diff) {
    const [a, b] = rng.sample(REDOX, 2);
    const cathode = a.e > b.e ? a : b;
    const anode = a.e > b.e ? b : a;
    const Ecell = round(cathode.e - anode.e, 2);
    if (Ecell <= 0) return null;
    if (diff === "hard") {
      // ΔG° = -nFE°, in kJ
      const n = cathode.n;
      const dG = round((-n * CONST.F * Ecell) / 1000, 0);
      const kJ = (v) => `${v} kJ`;
      return finalize(
        `For a cell built from ${cathode.couple} (E° = ${cathode.e} V) and ${anode.couple} (E° = ${anode.e} V) with n = ${n}, what is ΔG°? (F = 96485 C/mol)`,
        dG,
        [round((n * CONST.F * Ecell) / 1000, 0), round((-CONST.F * Ecell) / 1000, 0), round((-n * CONST.F * Ecell), 0), round(dG / 2, 0), round(dG / n, 0)],
        kJ,
        `E°cell = ${cathode.e} − (${anode.e}) = ${Ecell} V. ΔG° = −nFE° = −(${n})(96485)(${Ecell}) = ${dG * 1000} J = ${dG} kJ (negative → spontaneous).`
      );
    }
    return finalize(
      `What is the standard cell potential for a cell made from ${cathode.couple} (E° = ${cathode.e} V) and ${anode.couple} (E° = ${anode.e} V)?`,
      Ecell,
      [
        round(cathode.e + anode.e, 2), // added the potentials
        round(anode.e - cathode.e, 2), // reversed cathode/anode
        round(Math.abs(cathode.e) + Math.abs(anode.e), 2),
        round(Ecell / 2, 2),
        round(Ecell * 2, 2),
      ],
      volt,
      `E°cell = E°cathode − E°anode = ${cathode.e} − (${anode.e}) = ${Ecell} V. The cathode is the more positive (${cathode.couple}). Adding the two potentials (${round(cathode.e + anode.e, 2)} V) is the classic error.`
    );
  },
};

export const ARCHETYPES = [
  molar_mass, mole_conversion, mass_mass, limiting_yield, percent_comp,
  empirical_formula, molarity_dilution, gas_laws, gas_stoich_stp, ph_strong,
  ph_weak_ka, keq_ice, thermochem, kinetics_rate, electrochem,
];
