#!/usr/bin/env node
/**
 * Machine-only gate for the 2026-10-28 staged batch.
 * This checks uniqueness, count, published flags, calculated answers,
 * and selected mass/charge balances; it is NOT expert chemistry approval.
 */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

const batch=fileURLToPath(new URL('../data/integrated_challenges/2026-10-28/batch-001.jsonl',import.meta.url));
const rows=readFileSync(batch,'utf8').trimEnd().split('\n').map((line,i)=>{
  try{return JSON.parse(line);}catch(e){throw Error('Invalid JSONL at '+(i+1)+': '+e.message);}
});
const R=8.314462618,F=96485.33212,T=298.15,Rb=.08314462618,Ksp=1.8e-10;
const close=(x,y,where)=>{
  assert.ok(Number.isFinite(x)&&Number.isFinite(y),where+': nonfinite value');
  assert.ok(Math.abs(x-y)<=1e-10*Math.max(1e-6,Math.abs(x),Math.abs(y)),where+': '+x+' != '+y);
};
const application={
  activity(c){const g=10**(-.509*Math.sqrt(c));return [g,g*c,R*T*Math.log(g)];},
  osmotic_force(c){const pi=2*c*Rb*T;return [pi,pi*1e5*.012];},
  freezing_point(c){return [2*1.86*c,1.86*c,50];},
  common_ion_solubility(c){const s0=Math.sqrt(Ksp),s=2*Ksp/(c+Math.sqrt(c*c+4*Ksp));return [s,s0,s0/s];},
  concentration_cell(c){const E=-R*T/F*Math.log(c/.001);return [E,-F*E];},
  conductivity_circuit(c){const k=126.4*c/1000,res=1.5/k,I=.8/res;return [k,res,I,.8*I];},
  electrodialysis(c){const n=2*c*.4,q=n*F/.88;return [n,q,7*q,.6*c];},
  langmuir_balance(c){
    const V=1,Q=.001,K=900,a=V*K,b=V+Q*K-c*V*K;
    const ce=2*c*V/(Math.sqrt(b*b+4*a*c*V)+b),ads=Q*K*ce/(1+K*ce);
    close(V*ce+ads,V*c,'Langmuir chloride mass balance');
    return [ce,ads,ads/(c*V)];
  },
  pseudo_first_order(c){const k=18*c;return [k,Math.exp(-120*k),Math.log(2)/k];},
  fick_diffusion(c){const J=1.4e-9*(c-.00015)*1000/.0002,n=J*.01*3600;return [J,n,n*35.45*1000];}
};
assert.equal(rows.length,200,'Expected exactly 200 exercises');
const idSet=new Set(),pairSet=new Set(),methods=new Map(),models=new Map(),diff={4:0,5:0};
rows.forEach((p,i)=>{
  const id='UC-CI-20261028-'+String(i+1).padStart(3,'0');
  assert.equal(p.id,id,'Stable ID order mismatch');
  assert.equal(p.batch_id,'2026-10-28-r01');
  assert.ok(!idSet.has(id),'Duplicate ID: '+id);idSet.add(id);
  assert.ok(p.quality_status==='awaiting_expert_review' && p.publishable===false &&
            p.exclude_from_official_bank===true && p.verification.human_expert_reviewed===false);
  assert.equal(p.advanced_editorial_eligible,false,'Do not count as advanced authored');
  assert.equal(p.original_high_difficulty_label_invalidated,true);
  assert.equal(p.set_classification,'legacy_cross_model_training_not_advanced');
  assert.equal(p.source.origin,'independently_composed_original_integrated_exercise');
  assert.equal(p.source.third_party_question_reused,false);
  assert.ok([2,3].includes(p.difficulty_5),'Legacy training difficulty must be 2 or 3');
  diff[p.difficulty_5]++;
  assert.ok(typeof p.problem_zh==='string' && p.problem_zh.includes('第一阶段') &&
            p.problem_zh.includes('第二阶段') && p.problem_zh.includes('(4)'));
  assert.ok(Array.isArray(p.solution_zh_steps) && p.solution_zh_steps.length>=7);
  assert.ok(!p.problem_zh.includes('实际水质量45.0 g'),'Physically inconsistent solvent amount');
  assert.ok(!p.problem_zh.includes('含水0.320 mol'),'Physically inconsistent vapor-pressure sample');
  const pair=p.method+'/'+p.linked_model;
  assert.equal(p.verification.verified_design_pair,pair);
  assert.ok(!pairSet.has(pair),'Duplicate method + model: '+pair);pairSet.add(pair);
  methods.set(p.method,(methods.get(p.method)||0)+1);
  models.set(p.linked_model,(models.get(p.linked_model)||0)+1);
  const c=p.answer.original_concentration_mol_L;
  assert.ok(Number.isFinite(c)&&c>.00015&&c<.005);
  close(p.verification.inverse_recomputed_concentration_mol_L,c,id+' independent inverse');
  assert.ok(p.verification.relative_inverse_error<1e-8);
  close(p.answer.chloride_mass_250mL_mg,c*.250*35.45*1000,id+' chloride mass');
  const fn=application[p.linked_model];assert.ok(fn,'Unknown model: '+p.linked_model);
  const want=fn(c),got=p.answer.linked_results;
  assert.equal(got.length,want.length,'Result dimension: '+id);
  got.forEach((v,k)=>close(v,want[k],id+' result '+k));
  assert.ok(p.problem_zh.includes('(5) 高阶误差传递'),'Missing sensitivity extension');
  assert.ok(p.solution_zh_steps.some(x=>x.includes('高阶误差传递')),'Missing worked sensitivity');
  const se=p.answer.sensitivity;
  assert.equal(se.shift_fraction,.01);
  assert.equal(se.at_true_c,got[0],'Sensitivity must concern primary linked result');
  close(se.at_plus_1pct_c,fn(c*1.01)[0],id+' perturbed result');
  close(se.exact_delta,se.at_plus_1pct_c-se.at_true_c,id+' finite difference');
  let local;
  switch(p.linked_model){
    case 'activity':local=-.509*Math.LN10*Math.sqrt(c)/2;break;
    case 'common_ion_solubility':local=-c/(c+2*got[0]);break;
    case 'concentration_cell':local=-R*T/F;break;
    case 'langmuir_balance':local=(c/got[0])/(1+.001*900/(1+900*got[0])**2);break;
    case 'fick_diffusion':local=c/(c-.00015);break;
    default:local=1;
  }
  close(se.local_sensitivity,local,id+' analytical derivative');
  assert.equal(se.type,p.linked_model==='concentration_cell'?'absolute_dY_dlnc':'dimensionless_dlnY_dlnc');
    if(p.linked_model==='fick_diffusion')assert.ok(p.problem_zh.includes('有效扩散系数'));
  if(p.linked_model==='langmuir_balance')assert.ok(p.solution_zh_steps.join(' ').includes('电中性'));
});
assert.equal(methods.size,20,'Expected 20 measurement methods');
assert.equal(models.size,10,'Expected 10 coupled application models');
assert.equal(pairSet.size,200,'Expected 200 distinct methodological combinations');
for(const [method,n] of methods)assert.equal(n,10,'Method coverage: '+method);
for(const [model,n] of models)assert.equal(n,20,'Model coverage: '+model);
assert.deepEqual(diff,{'2':51,'3':149},'Reclassified training distribution');
console.log(JSON.stringify({ok:true,records:rows.length,measurement_methods:methods.size,application_models:models.size,unique_pairs:pairSet.size,difficulty:diff,approved:0},null,2));
