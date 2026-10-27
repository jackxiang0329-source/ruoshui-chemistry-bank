import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateRegistry} from '../scripts/validate-oer-work-license.mjs';
const data=JSON.parse(readFileSync(new URL('../harvest/oer_work_license_review.json',import.meta.url),'utf8'));
test('six official GALILEO work-level CC BY claims are indexed, zero question imports',()=>{
 assert.deepEqual(validateRegistry(data),{sources:6,questions_added:0});
 assert.ok(data.reviewed_sources.some(x=>x.suggested_subjects.includes('organic')));
 assert.ok(data.reviewed_sources.some(x=>x.suggested_subjects.includes('analytical')));
 assert.ok(data.reviewed_sources.some(x=>x.suggested_subjects.includes('physical')));
 assert.ok(data.reviewed_sources.some(x=>x.suggested_subjects.includes('inorganic')));
});
test('a work-level license cannot silently authorize copying unreviewed questions',()=>{
 const c=structuredClone(data);c.reviewed_sources[0].import_approved=true;
 assert.throws(()=>validateRegistry(c),/MUST NOT/);
 c.reviewed_sources[0].import_approved=false;
 c.reviewed_sources[0].individual_question_provenance_verified=true;
 assert.throws(()=>validateRegistry(c),/MUST NOT/);
});
test('rejects untrusted evidence domains and duplicate source records',()=>{
 const c=structuredClone(data);c.reviewed_sources[0].url='https://untrusted.example/19';
 assert.throws(()=>validateRegistry(c),/URL invalid/);
 const d=structuredClone(data);d.reviewed_sources[1].id=d.reviewed_sources[0].id;
 assert.throws(()=>validateRegistry(d),/duplicate/);
});
