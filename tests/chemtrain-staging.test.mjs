import test from 'node:test';
import assert from 'node:assert/strict';
import {auditStagedChemTrain} from '../scripts/check-chemtrain-staging.mjs';
test('source questions and metadata cards have verified counts and quarantine',()=>{
 const result=auditStagedChemTrain();
 assert.deepEqual(result.errors,[]);
 assert.equal(result.source_question_objects,232);
 assert.equal(result.unique_reference_card_metadata,587);
 assert.equal(result.reference_card_duplicates_removed,49);
 assert.equal(result.publication_count,0);
});
