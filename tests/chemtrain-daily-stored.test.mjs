import test from 'node:test';
import assert from 'node:assert/strict';
import {buildQuestions} from '../scripts/import-chemtrain-daily-text.mjs';
import {auditPersistedDaily} from '../scripts/audit-chemtrain-daily-stored.mjs';
const base=(name,formula,kind='Geometry')=>({
 s:'tmc',k:kind,t:name,f:formula,y:1,
 ex:'This source-linked explanation supplies independent chemistry interpretation pending expert review.',
 o:[{x:'Wrong option 1'},{x:'Correct option'},{x:'Wrong option 2'}]});
const fixture=buildQuestions([
 base('Nickel tetracarbonyl','Ni(CO)4'),
 base('Iron pentacarbonyl','Fe(CO)5')
]).records;
test('source-indexed ChemTrain Daily saved files exactly match pinned importer output',()=>{
 const audit=auditPersistedDaily(fixture,structuredClone(fixture),2);
 assert.equal(audit.stored_text_only_mcq_candidates_replayed,2);
 assert.equal(audit.distinct_source_question_indexes,2);
 assert.equal(audit.expert_chemistry_approved,0);
 assert.equal(audit.formally_exam_ready,0);
});
test('mislabelled answer, swapped options and altered author/license evidence stop review',()=>{
 const edited=changes=>[{...fixture[0],...changes},fixture[1]];
 assert.throws(()=>auditPersistedDaily(fixture,edited({answer:'Incorrect'}),2),/answer changed/);
 assert.throws(()=>auditPersistedDaily(fixture,edited({options:[...fixture[0].options].reverse()}),2),/answer changed/);
 assert.throws(()=>auditPersistedDaily(fixture,edited({source:{...fixture[0].source,git_blob_sha:'0'.repeat(40)}}),2),/answer changed/);
 assert.throws(()=>auditPersistedDaily(fixture,edited({publishable:true}),2),/answer changed/);
});
test('a missing or orphan saved question does not inflate source coverage',()=>{
 assert.throws(()=>auditPersistedDaily(fixture,[fixture[0]],2),/Missing stored/);
 const extra={...fixture[0],id:'e'.repeat(64)};
 assert.throws(()=>auditPersistedDaily(fixture,[...fixture,extra],2),/orphan or duplicate/);
});
