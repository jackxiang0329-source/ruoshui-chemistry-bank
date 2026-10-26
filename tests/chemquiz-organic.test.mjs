import test from 'node:test';
import assert from 'node:assert/strict';
import {verifyPinnedSources,makeFunctionalQuestions,makeSeriesQuestions,makeQuestions,questionId,gitBlobSha}
 from '../scripts/import-chemquiz-organic.mjs';

test('Git blob hash and NFKC prompt IDs',()=>{
 assert.equal(gitBlobSha(Buffer.from('hello\n')),'ce013625030ba8dba906f756967f9e9ca394464a');
 assert.equal(questionId('Ａ  B'),questionId('a b'));
});
test('MIT source lock, license and both Git blob checksums',()=>{
 const {groups,series}=verifyPinnedSources();
 assert.equal(groups.length,17);assert.equal(series.length,14);
});
test('curated group answers and unique questions',()=>{
 const {groups,series}=verifyPinnedSources();
 const a=makeFunctionalQuestions(groups),b=makeSeriesQuestions(series),all=makeQuestions(groups,series);
 assert.equal(a.length,15);assert.equal(b.length,10);assert.equal(all.length,25);
 assert.equal(new Set(all.map(x=>x.id)).size,25);
 assert.equal(a.find(x=>x.original_id==='Phenols').answer,'酚羟基');
 assert.equal(a.find(x=>x.original_id==='Alcohols').answer,'醇羟基');
 assert.equal(a.find(x=>x.original_id==='Nitriles').answer,'腈基（氰基）');
 assert.equal(b.find(x=>x.original_id==='Amines|n=4').answer,'C4H11N');
 assert.equal(b.find(x=>x.original_id==='Carboxylic acids|n=4').answer,'C4H8O2');
});
test('reject changed structural formula, changed homologous formula and duplicates',()=>{
 const {groups,series}=verifyPinnedSources();
 const g=structuredClone(groups),s=structuredClone(series);
 g.find(x=>x.label_en==='Phenols').example_compounds[0].skeletal_formula='C6H5OH2';
 assert.throws(()=>makeFunctionalQuestions(g),/mismatch/);
 s.find(x=>x.name_en==='Amines').general_formula='CnH2n+2N';
 assert.throws(()=>makeSeriesQuestions(s),/mismatch/);
 const g2=structuredClone(groups);g2[0].label_en=g2[1].label_en;
 assert.throws(()=>makeFunctionalQuestions(g2),/Duplicate group/);
});
