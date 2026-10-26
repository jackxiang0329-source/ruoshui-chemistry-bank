import test from 'node:test';
import assert from 'node:assert/strict';
import { buildManifest } from '../scripts/export-manifest.mjs';
import { renderPreview } from '../scripts/render-preview.mjs';
test('four draft examples are not publicly releasable', () => {
  const m = buildManifest();
  assert.equal(m.published_count, 0);
  assert.equal(m.draft_count, 4);
  assert.deepEqual(m.questions, []);
});
test('four preview wrappers reference independent problem and solution TeX', () => {
  for (const track of ['INORG','ANAL','PHYS','ORG']) {
    const id = 'CHEM-' + track + '-0001';
    const tex = renderPreview(id, 'both');
    assert.ok(tex.includes('questions/' + id + '/problem.tex'));
    assert.ok(tex.includes('questions/' + id + '/solution.tex'));
    assert.ok(!renderPreview(id, 'problem').includes('solution.tex'));
  }
  assert.throws(() => renderPreview('../README.md'), /Invalid ID/);
  assert.throws(() => renderPreview('CHEM-ORG-9999'), /Unknown question/);
});
