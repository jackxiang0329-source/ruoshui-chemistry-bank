import test from 'node:test';
import assert from 'node:assert/strict';
import {generate,ITEMS,qid} from '../scripts/import-original-reasoning-chemistry.mjs';

test('32 authored multi-step reasoning problems span 32 unique topics, 8 per discipline',()=>{
 const qs=generate();
 assert.equal(qs.length,32);
 assert.equal(ITEMS.length,32);
 assert.equal(new Set(qs.map(q=>q.id)).size,32);
 assert.equal(new Set(qs.map(q=>q.topic)).size,32);
 for(const subject of ['inorganic','analytical','organic','physical'])
  assert.equal(qs.filter(q=>q.subject===subject).length,8);
});
test('all 32 retain rights provenance, full worked explanation and strict publication gate',()=>{
 for(const q of generate()){
  assert.equal(q.id,qid(q.question));
  assert.equal(q.source.repository,'jackxiang0329-source/ruoshui-chemistry-bank');
  assert.equal(q.source.license,'CC0-1.0');
  assert.equal(q.source.original_exam_question,false);
  assert.equal(q.source.third_party_question_text_copied,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);
  assert.equal(q.requires_human_chemistry_review,true);
  assert.equal(q.semantic_duplicate_review_pending,true);
  assert.ok(q.answer.length>20&&q.explanation.length>=45&&q.question.length>=55);
 }
});
test('spot-check critical chemistry keys, units and case-specific caveats',()=>{
 const get=t=>generate().find(q=>q.topic===t);
 assert.match(get('octahedral_high_spin_d6').answer,/4.*−0.4Δo/);
 assert.match(get('octahedral_low_spin_d6').answer,/S=0.*−2.4Δo/);
 assert.match(get('chromate_dichromate_acid_equilibrium').explanation,/电荷/);
 assert.match(get('edta_one_to_one_metal_stoichiometry').answer,/0.01000/);
 assert.match(get('carbonate_back_titration_purity').answer,/75.07%/);
 assert.match(get('buret_reading_uncertainty').answer,/0.141%/);
 assert.match(get('crossed_aldol_selectivity').answer,/Ph—CH=CH—CHO/);
 assert.match(get('gibbs_phase_rule_one_component').answer,/F=1/);
 assert.match(get('kirchhoff_reaction_enthalpy').answer,/−98.0/);
 assert.match(get('parallel_first_order_branching').answer,/0.60/);
});
