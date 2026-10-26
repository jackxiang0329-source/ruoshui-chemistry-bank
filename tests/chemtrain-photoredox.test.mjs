import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,validatePinned,questionId} from '../scripts/import-chemtrain-photoredox.mjs';
const fixture=JSON.parse(readFileSync(new URL('../harvest/pinned_photoredox_quenching.json',import.meta.url),'utf8'));
test('pinned content license, upstream blob SHA and 18 cycle questions',()=>{
 assert.equal(validatePinned(fixture),fixture);
 assert.equal(fixture.source_git_blob_sha,'5351d56c165fd581edbc66e71f80c3a42bcdb738');
 assert.equal(fixture.content_license,'CC BY 4.0');
 assert.equal(fixture.cards.length,18);
});
test('generate exactly 18 non-publishable, unique, sourced organic questions',()=>{
 const rows=makeQuestions(fixture);
 assert.equal(rows.length,18);
 assert.equal(new Set(rows.map(x=>x.id)).size,18);
 assert.ok(rows.every(x=>x.subject==='organic'&&x.quality_status==='awaiting_expert_review'&&x.publishable===false));
 assert.ok(rows.every(x=>x.source.content_rights_verified&&x.source.license==='CC BY 4.0'&&x.id===questionId(x.question)));
 assert.ok(rows.every(x=>['氧化淬灭','还原淬灭','能量转移'].includes(x.answer)));
 assert.ok(rows.every(x=>!/[−+-]\d+(?:\.\d+)?\s*(?:eV|V)(?:\b|$)/i.test(x.question)));
});
test('reject duplicate source, unlicensed values and wrong upstream pin',()=>{
 const clone=()=>structuredClone(fixture);
 let x=clone();x.cards[1].original_name=x.cards[0].original_name;x.cards[1].conditions=x.cards[0].conditions;
 assert.throws(()=>validatePinned(x),/Duplicate/);
 x=clone();x.cards[0].conditions+=' +1.23 V';
 assert.throws(()=>validatePinned(x),/Unlicensed/);
 x=clone();x.source_git_blob_sha='0000000000000000000000000000000000000000';
 assert.throws(()=>validatePinned(x),/manifest/);
 x=clone();x.cards[0].correct_label='Unknown';
 assert.throws(()=>validatePinned(x),/malformed/);
});
