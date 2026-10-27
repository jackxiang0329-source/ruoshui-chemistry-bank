import test from 'node:test';
import assert from 'node:assert/strict';
import {curatePage,inferSubject,questionHash} from '../scripts/stage-nvidia-rqa.mjs';
const cfg={dataset:'nvidia/Nemotron-Science-v1',revision:'82e1af468197076b4f0f392c239274eac032adc7',max_question_chars:12000,max_answer_chars:12000};
const q='Under standard thermodynamic laboratory conditions, calculate the equilibrium constant for a gas-phase chemistry reaction using the specified standard Gibbs free energy and temperature, and show all computations.';
const make=(i)=>({row_idx:i,row:{license:'cc-by-4.0',uuid:'a8c31e23-49d7-453c-8a42-'+String(i).padStart(12,'0'),messages:[
 {role:'user',content:q+i},{role:'assistant',content:'Use delta G = -RT ln K with appropriately converted joule units. Numerical verification has not been performed.'}]},truncated_cells:[]});
test('unverified AI-generated chemistry remains excluded from official bank',()=>{
 const o=curatePage([make(0)],cfg,new Set());
 assert.equal(o.rows.length,1);assert.equal(o.rows[0].publishable,false);
 assert.equal(o.rows[0].exclude_from_official_bank,true);
 assert.equal(o.rows[0].quality_status,'not_scientifically_verified');
 assert.equal(o.rows[0].subject_suggestion,'physical');
});
test('duplicate prompts, invalid licenses and incomplete answers are excluded',()=>{
 const short=make(3);short.row.messages[1].content='yes';
 const bad=make(2);bad.row.license='NONE';
 const x=curatePage([make(1),make(1),bad,short],cfg,new Set());
 assert.equal(x.rows.length,1);
 assert.equal(x.excluded.duplicate_question,1);
 assert.equal(x.excluded.license_not_verified,1);
 assert.equal(x.excluded.answer_or_question_length,1);
});
test('hash and subject heuristics are stable without interpreting science correctness',()=>{
 assert.equal(questionHash(' H2O\n'),questionHash('h2o'));
 assert.equal(inferSubject('analytical spectrophotometry'), 'analytical');
 assert.equal(inferSubject('coordination complex ligand field'),'inorganic');
 assert.equal(inferSubject('stereochemistry of aromatic substitution'),'organic');
 assert.equal(inferSubject('chemical compound'),'needs_manual_classification');
});
