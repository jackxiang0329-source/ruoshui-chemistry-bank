import test from 'node:test';
import assert from 'node:assert/strict';
import { readVendorCatalog, readHolds, previewFromVendor } from '../src/chemistry/catalog-node.mjs';
import { deduplicateCatalog, generatePractice } from '../src/chemistry/practice.mjs';
import { gradeChoices, gradeNumerical } from '../src/chemistry/grading.mjs';

test('source catalogs load from imported chemquiz Rust project with real exercise entries', () => {
  assert.equal(readVendorCatalog('inorganic').length, 149);
  assert.equal(readVendorCatalog('organic').length, 152);
  assert.equal(readHolds().length, 6);
});
test('canonical name + full formula dedup is non-destructive and excludes review holds', () => {
  const inorganic = deduplicateCatalog(readVendorCatalog('inorganic'), 'inorganic', readHolds());
  const organic = deduplicateCatalog(readVendorCatalog('organic'), 'organic', readHolds());
  assert.equal(inorganic.raw_count + organic.raw_count, 301);
  assert.equal(inorganic.duplicate_count + organic.duplicate_count, 28);
  assert.equal(inorganic.hold_count + organic.hold_count, 6);
  assert.equal(inorganic.items.length + organic.items.length, 267);
  for (const item of [...inorganic.items, ...organic.items])
    assert.equal(item.review_status, 'external_quarantine');
});
test('deterministic exam generation creates unique questions and unique options', () => {
  for (const track of ['inorganic', 'organic']) {
    for (const mode of ['name_to_formula', 'formula_to_name']) {
      const build = () => previewFromVendor({ track, mode, count: 12, optionCount: 4, seed: 12345 });
      const a = build(), b = build();
      assert.deepEqual(a, b);
      assert.equal(a.student.questions.length, 12);
      assert.equal(new Set(a.student.questions.map(q => q.id)).size, 12);
      assert.equal(a.student.status, 'UNREVIEWED_DO_NOT_PUBLISH');
      assert.ok(!JSON.stringify(a.student).includes('correct_index'));
      assert.ok(!JSON.stringify(a.student).includes('correct_answer'));
      for (const [i, q] of a.student.questions.entries()) {
        assert.equal(q.options.length, 4);
        assert.equal(new Set(q.options).size, 4);
        assert.equal(q.options[a.teacher.answers[i].correct_index],
          a.teacher.answers[i].correct_answer);
      }
      assert.equal(gradeChoices(a.student, a.teacher,
        Object.fromEntries(a.teacher.answers.map(q => [q.id, q.correct_index]))).score_percent, 100);
    }
  }
});
test('wrong or absent answers are marked without leaking the correct choice', () => {
  const { student, teacher } = previewFromVendor({ track:'organic',count:3,seed:7 });
  const result = gradeChoices(student,teacher,{});
  assert.equal(result.correct_count,0);
  assert.equal(result.score_percent,0);
  assert.ok(!JSON.stringify(result).includes('correct_index'));
});
test('reject unsupported subjects, invalid mode, insufficient questions and bad seed', () => {
  assert.throws(() => previewFromVendor({track:'analytical'}), /Only inorganic\/organic/);
  assert.throws(() => generatePractice([], {track:'physical'}), /only inorganic and organic/);
  assert.throws(() => previewFromVendor({mode:'reaction'}), /Unsupported quiz mode/);
  assert.throws(() => previewFromVendor({count:500}), /count must be/);
  assert.throws(() => previewFromVendor({seed:-1}), /Seed must be/);
  assert.throws(() => previewFromVendor({optionCount:1}), /optionCount must be/);
});
test('numerical answer verification honors tolerances and units rather than guessing chemistry', () => {
  assert.deepEqual(gradeNumerical({expected:1,submitted:1.0001,unit:'mol/L',submittedUnit:'mol/L',absTolerance:0.001}).correct,true);
  assert.deepEqual(gradeNumerical({expected:1,submitted:1.0001,unit:'mol/L',submittedUnit:'mol',absTolerance:0.001}).reason,'unit_mismatch');
  assert.throws(() => gradeNumerical({expected:1,submitted:NaN}), /finite/);
  assert.throws(() => gradeNumerical({expected:1,submitted:1,absTolerance:-1}), /Tolerances/);
});
