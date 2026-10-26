// Chemistry data + parser + formatters for the Gen Chem calc engine.
// All values are public physical constants — no external data, no scraping.
import { round } from "../core/options.js";

// Atomic masses (g/mol, 2 dp)
export const ATOMIC = Object.freeze({
  H: 1.01, Li: 6.94, C: 12.01, N: 14.01, O: 16.0, F: 19.0, Na: 22.99,
  Mg: 24.31, Al: 26.98, P: 30.97, S: 32.07, Cl: 35.45, K: 39.1, Ca: 40.08,
  Mn: 54.94, Fe: 55.85, Cu: 63.55, Zn: 65.38, Br: 79.9, Ag: 107.87,
  I: 126.9, Ba: 137.33,
});

// Atomic numbers (for the "used atomic number instead of mass" trap)
export const Z = Object.freeze({
  H: 1, Li: 3, C: 6, N: 7, O: 8, F: 9, Na: 11, Mg: 12, Al: 13, P: 15,
  S: 16, Cl: 17, K: 19, Ca: 20, Mn: 25, Fe: 26, Cu: 29, Zn: 30, Br: 35,
  Ag: 47, I: 53, Ba: 56,
});

export const CONST = Object.freeze({
  R: 0.0821, // L·atm·mol⁻¹·K⁻¹
  Kw: 1e-14,
  NA: 6.022e23,
  MOLAR_VOL_STP: 22.4, // L/mol
  F: 96485, // C/mol
  C_WATER: 4.18, // J/g·°C
  KELVIN: 273,
});

// Tiered formula pool (every element is in ATOMIC). Each entry: [formula, displayName?]
export const FORMULA_POOL = Object.freeze({
  easy: ["H2O", "CO2", "NaCl", "KCl", "CaO", "MgO", "HCl", "NaOH", "O2", "N2", "NH3", "CH4", "SO2", "NO2"],
  medium: ["Na2SO4", "CaCO3", "K2CO3", "NaHCO3", "MgCl2", "AlCl3", "H2SO4", "HNO3", "C6H12O6", "Fe2O3", "K2SO4", "Li2O"],
  hard: ["Ca(OH)2", "(NH4)2SO4", "Fe2(SO4)3", "CuSO4·5H2O", "Al2(SO4)3", "Ba(OH)2", "Mg(NO3)2", "Ca3(PO4)2", "(NH4)3PO4"],
});

// Pre-balanced reactions: coefficients are TRUSTED (never generated).
export const REACTIONS = Object.freeze([
  { eq: "N2 + 3 H2 → 2 NH3", reactants: [{ f: "N2", c: 1 }, { f: "H2", c: 3 }], products: [{ f: "NH3", c: 2 }] },
  { eq: "2 H2 + O2 → 2 H2O", reactants: [{ f: "H2", c: 2 }, { f: "O2", c: 1 }], products: [{ f: "H2O", c: 2 }] },
  { eq: "CH4 + 2 O2 → CO2 + 2 H2O", reactants: [{ f: "CH4", c: 1 }, { f: "O2", c: 2 }], products: [{ f: "CO2", c: 1 }, { f: "H2O", c: 2 }] },
  { eq: "2 Na + Cl2 → 2 NaCl", reactants: [{ f: "Na", c: 2 }, { f: "Cl2", c: 1 }], products: [{ f: "NaCl", c: 2 }] },
  { eq: "CaCO3 → CaO + CO2", reactants: [{ f: "CaCO3", c: 1 }], products: [{ f: "CaO", c: 1 }, { f: "CO2", c: 1 }] },
  { eq: "Fe2O3 + 3 CO → 2 Fe + 3 CO2", reactants: [{ f: "Fe2O3", c: 1 }, { f: "CO", c: 3 }], products: [{ f: "Fe", c: 2 }, { f: "CO2", c: 3 }] },
  { eq: "2 H2O2 → 2 H2O + O2", reactants: [{ f: "H2O2", c: 2 }], products: [{ f: "H2O", c: 2 }, { f: "O2", c: 1 }] },
]);

// Weak acids: name, formula, Ka
export const KA = Object.freeze([
  { name: "acetic acid", formula: "CH3COOH", ka: 1.8e-5 },
  { name: "formic acid", formula: "HCOOH", ka: 1.8e-4 },
  { name: "hydrofluoric acid", formula: "HF", ka: 6.8e-4 },
  { name: "benzoic acid", formula: "C6H5COOH", ka: 6.3e-5 },
  { name: "hypochlorous acid", formula: "HClO", ka: 3.0e-8 },
]);

// Standard reduction potentials (V) and electrons transferred
export const REDOX = Object.freeze([
  { couple: "Al³⁺/Al", e: -1.66, n: 3 },
  { couple: "Zn²⁺/Zn", e: -0.76, n: 2 },
  { couple: "Fe²⁺/Fe", e: -0.44, n: 2 },
  { couple: "Ni²⁺/Ni", e: -0.25, n: 2 },
  { couple: "Pb²⁺/Pb", e: -0.13, n: 2 },
  { couple: "Cu²⁺/Cu", e: 0.34, n: 2 },
  { couple: "Ag⁺/Ag", e: 0.8, n: 1 },
]);

// Specific heats (J/g·°C)
export const SPECIFIC_HEAT = Object.freeze([
  { name: "water", c: 4.18 },
  { name: "aluminum", c: 0.9 },
  { name: "iron", c: 0.45 },
  { name: "copper", c: 0.39 },
  { name: "silver", c: 0.24 },
]);

// ---- Formula-mass parser (recursive descent) ----
// Handles nested parens (multiply inward), hydrate dot "·"/"*" with leading
// coefficient, two-letter elements before one-letter. THROWS on unknown element.
function parseGroup(s) {
  const counts = {};
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === "(") {
      let depth = 1;
      let j = i + 1;
      while (j < s.length && depth > 0) {
        if (s[j] === "(") depth++;
        else if (s[j] === ")") depth--;
        j++;
      }
      const inner = parseGroup(s.slice(i + 1, j - 1));
      let k = j;
      let numStr = "";
      while (k < s.length && /\d/.test(s[k])) numStr += s[k++];
      const mult = numStr ? parseInt(numStr, 10) : 1;
      for (const [el, n] of Object.entries(inner)) counts[el] = (counts[el] || 0) + n * mult;
      i = k;
    } else if (/[A-Z]/.test(ch)) {
      let el = ch;
      let k = i + 1;
      if (k < s.length && /[a-z]/.test(s[k])) el += s[k++];
      let numStr = "";
      while (k < s.length && /\d/.test(s[k])) numStr += s[k++];
      counts[el] = (counts[el] || 0) + (numStr ? parseInt(numStr, 10) : 1);
      i = k;
    } else {
      throw new Error(`bad character in formula: '${ch}'`);
    }
  }
  return counts;
}

export function elementCounts(formula) {
  const parts = formula.split(/[·*]/);
  const total = {};
  for (const part of parts) {
    const m = part.match(/^(\d+)/);
    const coeff = m ? parseInt(m[1], 10) : 1;
    const body = m ? part.slice(m[1].length) : part;
    for (const [el, n] of Object.entries(parseGroup(body))) total[el] = (total[el] || 0) + n * coeff;
  }
  return total;
}

export function formulaMass(formula) {
  const counts = elementCounts(formula);
  let mass = 0;
  for (const [el, n] of Object.entries(counts)) {
    if (!(el in ATOMIC)) throw new Error(`unknown element: ${el}`);
    mass += ATOMIC[el] * n;
  }
  return round(mass, 2);
}

// ---- Formatters ----
const SUP = { "-": "⁻", "+": "⁺", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
const SUB = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
const supStr = (s) => String(s).split("").map((c) => SUP[c] || c).join("");

// n significant figures
export function sigFig(value, n = 3) {
  if (value === 0 || !Number.isFinite(value)) return value;
  const d = Math.ceil(Math.log10(Math.abs(value)));
  const power = n - d;
  const factor = 10 ** power;
  return Math.round(value * factor) / factor;
}

// Scientific notation with Unicode superscripts, e.g. 1.34e-3 -> "1.34 × 10⁻³"
export function sci(value, sig = 2) {
  if (value === 0) return "0";
  let exp = Math.floor(Math.log10(Math.abs(value)));
  let mant = value / 10 ** exp;
  mant = Number(mant.toFixed(sig - 1));
  if (Math.abs(mant) >= 10) {
    mant /= 10;
    exp += 1;
  }
  return `${mant} × 10${supStr(exp)}`;
}

// Pretty formula for display: subscript digits that follow a letter or ")".
export function formula(str) {
  return str.replace(/([A-Za-z)])(\d+)/g, (_, pre, digits) =>
    pre + digits.split("").map((d) => SUB[d]).join("")
  );
}
