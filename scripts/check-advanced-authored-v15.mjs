#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23;
const witnesses={
"UC-ADV15-I226":()=>{let s=159+79+520-328,u=-617-s,bad=-617-(159+79+520+328);return[79,159,520,-328,s,u,-u,-617,Math.abs(u/617),bad-u]},
"UC-ADV15-I227":()=>{let K=T=>Math.exp(-(20000-60*T)/(R*T)),a=K(250),b=K(350),p=a/(1+a),q=b/(1+b);return[5,-1,a,b,p,q,1-p,b/a,20000/60,q-p]},
"UC-ADV15-I228":()=>{let E=.368,lnK=F*E/(R*298.15),K=Math.exp(lnK),Q=1e4,v=E-R*298.15/F*Math.log(Q);return[E,lnK,lnK/Math.log(10),K,Q,v,-F*v/1000,-F*E/1000,Math.sqrt(.01/K),Number(v>0)]},
"UC-ADV15-I229":()=>{let c=NA*1.602176634e-19**2/(8*Math.PI*8.8541878128e-12)/1000,g=c*(1-1/78.5),a=-g/1e-10,b=-g*4/8e-11;return[a,b,b/a,10,50,b-a,4*a,4,-c/1e-10,1-1/78.5]},
"UC-ADV15-I230":()=>{let a=1e-10/.005,b=3e-7/.002;return[a,b,b/a,.005e-6,.002e-6,.005e-6/1e-10,.002e-6/3e-7,a,b,b-a]},
"UC-ADV15-I231":()=>{let d=.01,e=2*d;return[d,e,e,1-e,3-e,3-d,d/3,d,e,2*d-e]},
"UC-ADV15-I232":()=>{let G=T=>65000+30*T,k=T=>1.380649e-23*T/6.62607015e-34*Math.exp(-G(T)/(R*T)),a=k(298.15),b=k(350);return[G(298.15)/1000,G(350)/1000,a,b,Math.log(2)/a,Math.log(2)/b,b/a,-65000/R,350/298.15,-30]},
"UC-ADV15-I233":()=>{let a=2,b=1.2,Z=1+a+b,C=.01;return[a,b,Z,C/Z,C*a/Z,C*b/Z,1/Z,a/Z,b/Z,a/b,(a+b)/Z]},
"UC-ADV15-I234":()=>{let k=R*298.15/F,q1=.005/.02,q2=.01/.002,a=-.255-k*Math.log(q1),b=-.255-k*Math.log(q2);return[q1,q2,a,b,b-a,.02/.025,.002/.012,k*Math.log(10),.02/.005,-.255]}
};
const starts={inorganic:["I",226],analytical:["A",226],organic:["O",223],physical:["P",223]};
const ids=new Set(),titles=new Set(),models=new Set(),counts={};
for(const [subject,[L,start]] of Object.entries(starts)){
 const raw=read("editorial/advanced_integrated_v15/"+subject+".jsonl").trim();
 const rows=raw?raw.split("\n").map(JSON.parse):[];counts[subject]=rows.length;
 assert.ok(rows.length<=25);rows.forEach((x,i)=>{
  assert.equal(x.id,"UC-ADV15-"+L+(start+i));assert.equal(x.subject,subject);
  assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=8,x.id+" completeness");
  assert.ok(x.answer_values.length>=8&&x.answer_names.length===x.answer_values.length&&x.answer_units.length===x.answer_values.length);
  assert.ok(x.answer_values.every(Number.isFinite)&&x.model_residuals.length>=3&&x.model_residuals.every(v=>Number.isFinite(v)&&Math.abs(v)<1e-8));
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);assert.equal(x.quality_status,"awaiting_expert_review");assert.equal(x.novelty_review_status,"pending_cross_series_model_review");assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!models.has(x.model_family));ids.add(x.id);titles.add(x.title);models.add(x.model_family);
  assert.ok(Object.hasOwn(witnesses,x.id));
  const expected=witnesses[x.id]();assert.equal(expected.length,x.answer_values.length);
  expected.forEach((v,j)=>{const u=x.answer_values[j],s=Math.max(Math.abs(u),Math.abs(v),1e-14);assert.ok(Math.abs(u-v)<=1e-9*s,x.id+" "+x.answer_names[j]);});
 });
}
assert.equal(Object.keys(witnesses).length,ids.size);
const m=JSON.parse(read("release/chemistry-approved-manifest.json"));assert.equal(m.fifteenth_series_work_in_progress_items,ids.size);assert.equal(m.fifteenth_series_pending_cross_series_novelty_review,ids.size);assert.equal(m.advanced_editorial_items,906+ids.size);assert.equal(m.approved_count,0);assert.deepEqual(m.items,[]);
const q=JSON.parse(read("editorial/advanced_integrated_v15/overlap_review_queue.json"));assert.equal(q.current_draft_count,ids.size);assert.equal(q.preliminary_flags,q.pairs.length);
for(const id of ids)assert.ok(q.new_items_requiring_cross_series_comparison.some(x=>x.new_id===id));
console.log(JSON.stringify({pass:true,series:15,count:ids.size,subjects:counts}));
