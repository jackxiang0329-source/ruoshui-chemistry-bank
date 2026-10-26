import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeStructures } from '../scripts/chemistry-structure-audit.mjs';
test('flag raw-SMILES collisions without deleting allotropes or distinct sugars',()=>{
  const r=analyzeStructures();
  assert.deepEqual(r.errors,[]);
  assert.equal(r.catalog_records,273);
  assert.equal(r.catalog_with_smiles,241);
  assert.equal(r.identical_raw_smiles_groups,4);
  assert.equal(r.critical_groups.length,2);
  assert.equal(r.critical_record_count,6);
  assert.equal(r.review_holds,6);
  assert.ok(r.critical_groups.some(x=>x.smiles==='C' && x.formulae.length===2));
});
test('ChemIQ OPSIN evaluation key is SMILES rather than a printed IUPAC name',()=>{
  const r=analyzeStructures();
  assert.equal(r.chemiq_iupac_prompt_count,200);
  assert.equal(r.chemiq_iupac_reference_is_smiles,200);
});
