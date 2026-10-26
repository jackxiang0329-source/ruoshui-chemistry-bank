import test from 'node:test';
import assert from 'node:assert/strict';
import { auditImports } from '../scripts/audit-imports.mjs';
import { buildManifest } from '../scripts/export-manifest.mjs';

test('imported datasets are deduplicated and provenance-complete', () => {
  const audit = auditImports();
  assert.deepEqual(audit.errors, []);
  assert.equal(audit.raw_record_count, 1117);
  assert.equal(audit.removed_duplicates, 30);
  assert.equal(audit.chemiq_count, 814);
  assert.equal(audit.chemquiz_count, 273);
  assert.equal(audit.imported_quarantined_count, 1087);
});
test('external review-quarantine never enters publishable chemistry manifest', () => {
  const publishable = buildManifest();
  assert.equal(publishable.published_count, 0);
  assert.equal(publishable.draft_count, 4);
  assert.deepEqual(publishable.questions, []);
});
