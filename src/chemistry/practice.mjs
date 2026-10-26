// Independent JS adaptation of the open chemquiz generation approach.
// Upstream source: https://github.com/bem130/chemquiz (MIT); see third_party/chemquiz/LICENSE.
// This module has no Node-only dependencies and can be bundled for Workers after content approval.
export const TRACKS = Object.freeze(['inorganic', 'organic']);
export const MODES = Object.freeze(['name_to_formula', 'formula_to_name']);
const normalizeName = name => String(name ?? '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('en');
const normalizeFormula = formula => String(formula ?? '').normalize('NFKC').trim().replace(/\s+/g, '');
function fail(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}
function requireTrack(track) {
  if (!TRACKS.includes(track)) fail('UNSUPPORTED_DISCIPLINE', 'The preview catalog supports only inorganic and organic. Analytical and physical require separately reviewed questions.');
}
export function deduplicateCatalog(compounds, track, holdIds = []) {
  requireTrack(track);
  if (!Array.isArray(compounds)) fail('INVALID_CATALOG', 'Expected catalog compounds[]');
  const held = new Set(holdIds);
  const seen = new Set();
  const items = [];
  const duplicated = [];
  const skippedHolds = [];
  const prefix = track === 'inorganic' ? 'INORGANIC' : 'ORGANIC';
  for (let n = 0; n < compounds.length; n++) {
    const item = compounds[n];
    const id = 'CQ-' + prefix + '-' + String(n + 1).padStart(4, '0');
    const name = String(item?.iupac_name ?? '').trim();
    const formula = String(item?.molecular_formula ?? '').trim();
    if (!name || !formula) continue;
    const key = normalizeName(name) + '|' + normalizeFormula(formula);
    if (seen.has(key)) {
      duplicated.push(id);
      continue;
    }
    seen.add(key);
    if (held.has(id)) {
      skippedHolds.push(id);
      continue;
    }
    items.push({
      id, track, name, formula,
      source: {
        repository: 'bem130/chemquiz',
        reference: '10b81d4c1b02847e3d9b64e8d44a960d10559ea3',
        file: 'catalog/' + (track === 'inorganic' ? 'Inorganic' : 'Organic') + '/compounds.json',
        row: n + 1,
        license: 'MIT'
      },
      review_status: 'external_quarantine'
    });
  }
  return { items, raw_count: compounds.length, duplicate_count: duplicated.length,
    hold_count: skippedHolds.length, duplicated, skippedHolds };
}
function prng(seed) {
  if (!Number.isSafeInteger(seed) || seed < 0 || seed > 4294967295)
    fail('INVALID_SEED', 'Seed must be an unsigned 32-bit integer');
  let state = (seed >>> 0) || 0x9e3779b9;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}
function shuffle(items, rng) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function validateOptions(value, min, max, label) {
  if (!Number.isInteger(value) || value < min || value > max)
    fail('INVALID_' + label.toUpperCase(), label + ' must be ' + min + '..' + max);
}
export function generatePractice(compounds, config = {}) {
  const { track = 'organic', mode = 'name_to_formula', count = 5,
    optionCount = 4, seed = 42, heldIds = [] } = config;
  requireTrack(track);
  if (!MODES.includes(mode)) fail('INVALID_MODE', 'Unsupported quiz mode');
  validateOptions(count, 1, 50, 'count');
  validateOptions(optionCount, 2, 6, 'optionCount');
  const catalog = deduplicateCatalog(compounds, track, heldIds);
  const pool = catalog.items;
  if (pool.length < Math.max(count, optionCount))
    fail('INSUFFICIENT_CANDIDATES', 'Not enough non-held, unique catalog items');
  const rng = prng(seed);
  // Every question gets one unique source item; options must be mutually
  // distinguishable, including when different names share a molecular formula.
  const selected = [];
  const usedQuestionFormulas = new Set();
  for (const item of shuffle(pool, rng)) {
    // Avoid near-duplicate question concepts (synonyms or isomeric entries)
    // whose prompts would have the same formula answer in a single paper.
    const key = normalizeFormula(item.formula);
    if (usedQuestionFormulas.has(key)) continue;
    usedQuestionFormulas.add(key);
    selected.push(item);
    if (selected.length === count) break;
  }
  if (selected.length !== count)
    fail('INSUFFICIENT_DISTINCT_QUESTIONS', 'Not enough distinct formulas for this paper');
  const questions = [];
  const answers = [];
  for (const item of selected) {
    const distractors = shuffle(pool, rng);
    const usedFormulas = new Set([normalizeFormula(item.formula)]);
    const usedNames = new Set([normalizeName(item.name)]);
    const choices = [item];
    for (const other of distractors) {
      if (choices.length === optionCount) break;
      const formula = normalizeFormula(other.formula);
      const name = normalizeName(other.name);
      if (!formula || !name || usedFormulas.has(formula) || usedNames.has(name)) continue;
      choices.push(other);
      usedFormulas.add(formula);
      usedNames.add(name);
    }
    if (choices.length !== optionCount)
      fail('INSUFFICIENT_DISTINCT_OPTIONS', 'Not enough options with distinct formulas and names');
    const options = shuffle(choices, rng).map(c => mode === 'name_to_formula' ? c.formula : c.name);
    const correctText = mode === 'name_to_formula' ? item.formula : item.name;
    const correct_index = options.indexOf(correctText);
    if (correct_index < 0 || options.filter(x => x === correctText).length !== 1)
      fail('AMBIGUOUS_ANSWER', 'Question has ambiguous or missing correct option');
    const questionId = 'P-' + item.id;
    const prompt = mode === 'name_to_formula'
      ? '请选择 ' + item.name + ' 的分子式。'
      : '下列选项中，哪一个化合物具有分子式 ' + item.formula + '？';
    questions.push({ id: questionId, track, type: 'single_choice', prompt,
      options, review_status: 'unreviewed_preview' });
    answers.push({ id: questionId, correct_index, correct_answer: correctText,
      source: item.source, review_status: 'external_quarantine' });
  }
  return {
    student: {
      schema_version: '1.0', kind: 'ruoshui-chemistry-practice-preview',
      mode, track, seed, status: 'UNREVIEWED_DO_NOT_PUBLISH',
      question_count: questions.length, questions
    },
    teacher: {
      schema_version: '1.0', kind: 'ruoshui-chemistry-practice-answer-key',
      mode, track, seed, status: 'UNREVIEWED_DO_NOT_PUBLISH',
      question_count: answers.length, answers
    },
    report: {
      raw_count: catalog.raw_count, unique_usable_count: pool.length,
      removed_exact_duplicates: catalog.duplicate_count,
      excluded_structural_holds: catalog.hold_count,
      option_policy: 'No two options share a formula or a name in the same question'
    }
  };
}
