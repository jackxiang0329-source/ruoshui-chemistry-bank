// Formatting + option-assembly + validation utilities shared by every archetype.

export const round = (v, d = 2) => {
  const f = 10 ** d;
  return Math.round((v + Number.EPSILON) * f) / f;
};

// Plain number -> clean string ("2", "2.5", "0.75"), max 2 decimals.
export const num = (v) => {
  if (typeof v !== "number") return String(v);
  if (!Number.isFinite(v)) return String(v);
  return String(round(v, 2));
};

export const money = (v) => `$${round(v, 2).toFixed(2)}`;
export const pct = (v) => `${num(v)}%`;
export const withUnit = (u) => (v) => `${num(v)} ${u}`;

export const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
};

// reduced fraction string, e.g. frac(2,8) -> "1/4"; frac(0,5) -> "0"; frac(5,5) -> "1"
export const frac = (n, d) => {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  const nn = n / g;
  const dd = d / g;
  if (nn === 0) return "0";
  if (dd === 1) return String(nn);
  return `${nn}/${dd}`;
};

const LETTERS = ["A", "B", "C", "D", "E"];

// Build the 5 lettered options from a correct value + trap distractors.
// fmt turns a raw value into display text (units etc.). Throws if it cannot
// assemble 5 DISTINCT options — the builder catches that and retries with new
// parameters, which keeps every emitted item clean.
export function assembleOptions(answer, distractors, fmt, rng) {
  const aStr = fmt(answer);
  const seen = new Set([aStr]);
  const dStr = [];
  for (const d of distractors) {
    const s = fmt(d);
    if (!seen.has(s)) {
      seen.add(s);
      dStr.push(s);
    }
    if (dStr.length === 4) break;
  }
  // numeric safety net if trap distractors collided
  if (dStr.length < 4 && typeof answer === "number") {
    const mags = [0.5, 2, 1.25, 0.75, 1.5, 0.9, 1.1, 3, 0.25];
    const base = answer === 0 ? 1 : answer;
    for (let i = 0; i < mags.length && dStr.length < 4; i++) {
      const s = fmt(round(base * mags[i], 4));
      if (!seen.has(s)) {
        seen.add(s);
        dStr.push(s);
      }
    }
  }
  if (dStr.length < 4) throw new Error("could not assemble 4 distinct distractors");

  const all = rng.shuffle([aStr, ...dStr]);
  const options = all.map((s, i) => `${LETTERS[i]}. ${s}`);
  const correct = LETTERS[all.indexOf(aStr)];
  return { options, correct };
}

// Independent structural check on a finished item (the "self-checking" layer).
// Math correctness is guaranteed because the correct option IS the solver's
// output; this verifies the item is well-formed and unambiguous.
export function validateItem(q) {
  const problems = [];
  if (!q.id) problems.push("missing id");
  if (!q.question || q.question.length < 8) problems.push("question too short");
  if (!Array.isArray(q.options) || q.options.length !== 5)
    problems.push("must have exactly 5 options");
  else {
    q.options.forEach((o, i) => {
      if (!o.startsWith(`${LETTERS[i]}. `)) problems.push(`option ${i} bad prefix: ${o}`);
    });
    const bodies = q.options.map((o) => o.slice(3).trim());
    if (new Set(bodies).size !== 5) problems.push("duplicate option text");
  }
  if (!LETTERS.includes(q.correct)) problems.push(`bad correct letter: ${q.correct}`);
  if (!["easy", "medium", "hard"].includes(q.difficulty))
    problems.push(`bad difficulty: ${q.difficulty}`);
  if (!q.explanation || q.explanation.length < 12) problems.push("explanation too short");
  return problems;
}
