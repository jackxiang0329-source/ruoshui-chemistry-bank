import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makeQuestions,hashQuestion} from '../scripts/import-muzapro-organic-mit.mjs';
const pinned=JSON.parse(readFileSync(new URL('../harvest/pinned_muzapro_organic_quiz.json',import.meta.url),'utf8'));
test('MIT rights, source ids, four choices, unique ids, and review isolation',()=>{
 const rows=makeQuestions(pinned);
 assert.equal(rows.length,3);
 assert.deepEqual(rows.map(x=>x.source.original_id),['q1','q3','q5']);
 assert.equal(new Set(rows.map(x=>x.id)).size,3);
 assert.ok(rows.every(x=>x.id===hashQuestion(x.question)&&x.options.length===4));
 assert.ok(rows.every(x=>x.subject==='organic'&&x.source.license==='MIT'&&!x.publishable));
 assert.ok(rows.every(x=>x.quality_status==='awaiting_expert_review'&&x.semantic_duplicate_review_pending));
});
test('chemical answer and conditional-workup regression',()=>{
 const rows=makeQuestions(pinned);
 assert.ok(rows[0].answer.startsWith('B.')&&rows[0].explanation.includes('NaBr'));
 assert.ok(rows[1].answer.startsWith('B.')&&rows[1].explanation.includes('β-H'));
 assert.ok(rows[2].answer.startsWith('C.')&&rows[2].question.includes('无水')&&rows[2].question.includes('酸性水解'));
 assert.ok(rows[2].explanation.includes('PhCH₂CH₂OH'));
});
test('fail closed on unlicensed or changed upstream and misleading workup',()=>{
 assert.throws(()=>makeQuestions({...pinned,license:'UNKNOWN'}));
 assert.throws(()=>makeQuestions({...pinned,source_blob_sha:'unverified'}));
 const changed=structuredClone(pinned);changed.items[2].question=changed.items[2].question.replace('酸性水解','直接分离');
 assert.throws(()=>makeQuestions(changed),/Grignard/);
 const wrong=structuredClone(pinned);wrong.items[0].correct_option='A';
 assert.throws(()=>makeQuestions(wrong));
 const missing=structuredClone(pinned);missing.items.splice(1,1);
 assert.throws(()=>makeQuestions(missing));
});
