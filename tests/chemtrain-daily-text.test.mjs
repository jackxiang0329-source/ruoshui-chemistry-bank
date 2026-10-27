import test from 'node:test';
import assert from 'node:assert/strict';
import {buildQuestions,questionId,gitBlob,parseData} from '../scripts/import-chemtrain-daily-text.mjs';
const base=(s,k,t,f,ex='This explanation contains sufficient chemical reasoning for review.')=>({
 s,k,t,f,a:'Question in source',ex,o:[{x:'Correct answer'},{x:'Distractor one'},{x:'Distractor two'}]});
test('only text-safe and owner-licensed topical cards convert to unpublished MCQs',()=>{
 const questions=[base('tmc','Geometry','Nickel tetracarbonyl','Ni(CO)₄'),
 base('tmc','Ligand electrons','carbonyl','CO'),
 base('tmc','Ligand class','triphenylphosphine','PPh₃'),
 base('pg','Removed by','TBS ether','tert-butyldimethylsilyl ether'),
 base('rl','N value','Toluene','C₆H₅CH₃')];
 const result=buildQuestions(questions);
 assert.equal(result.records.length,4);
 assert.deepEqual(result.records.map(x=>x.subject),['inorganic','inorganic','inorganic','organic']);
 assert.ok(result.records.every(x=>x.source.license==='CC BY 4.0'&&!x.publishable));
 assert.ok(result.records.every(x=>x.quality_status==='awaiting_expert_review'&&
   x.source.original_exam_question===false&&x.id===questionId(x.question)));
 assert.ok(result.records.every(x=>!JSON.stringify(x).includes('"fig"')));
});
test('source correct answer index is respected, not assumed always A',()=>{
 const q={...base('tmc','Geometry','Iron pentacarbonyl','Fe(CO)₅'),y:2};
 const rows=buildQuestions([q]).records;
 assert.equal(rows[0].answer,'Distractor two');
 assert.equal(rows[0].answer_option,'C');
});
test('reject duplicate named targets and invalid options or missing structural names',()=>{
 const one=base('tmc','Geometry','Ni','Ni(CO)₄');
 const dupe=structuredClone(one);
 const wrong=base('tmc','Geometry','Fe','Fe(CO)₅');wrong.o[1].x='Correct answer';
 const missing=base('tmc','Geometry','Co','Co(OH)₂');missing.f='';
 const x=buildQuestions([one,dupe,wrong,missing]);
 assert.equal(x.records.length,1);
 assert.equal(x.excluded.duplicate_card_target,1);
 assert.equal(x.excluded.identical_answer_options,1);
 assert.equal(x.excluded.incomplete_text_or_answer,1);
});
test('source JSON layout and Git object framing are pinned',()=>{
 assert.equal(gitBlob('test\n'),'9daeafb9864cf43055ae93beb0afd6c7d144bfa4');
 assert.throws(()=>parseData('<script>window.CTD_DATA = {};</script>'),/changed/);
 assert.throws(()=>parseData('const DATA = {};'),/not found/);
});
