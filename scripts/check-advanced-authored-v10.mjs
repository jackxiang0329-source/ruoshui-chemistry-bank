#!/usr/bin/env node
// v10 is intentionally WORK IN PROGRESS until 25 per subject, 100 total.
// New records MUST acquire a separate witness here before they pass CI.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const base=fileURLToPath(new URL('../editorial/advanced_integrated_v10/',import.meta.url));
const R=8.314462618;
const T=280,J=2400,q=Math.exp(-J/(R*T)),Z=1+3*q,p=3*q/Z;
const w={
 "UC-ADV10-I101":()=>[p,1-p,4*q/Z,J*p,J**2/(R*T*T)*p*(1-p)],
 "UC-ADV10-A101":()=>{
  const gamma=2.67522e8,g=.25,delta=.0025,Delt=.045,D=6e-10;
  const b=(gamma*g*delta)**2*(Delt-delta/3),signal=Math.exp(-b*D);
  return [b,signal,-Math.log(signal)/b,Math.exp(-4*b*D)];
 },
 "UC-ADV10-O98":()=>{
  const mixed=.30,p=.5,a=mixed/(2*p*(1-p)),same=(1-a)/2+a/4,n=.01;
  return [a,same,mixed,same,n*mixed,n*(1-a)];
 },
 "UC-ADV10-P98":()=>{
  const temp=320,M=.028,rad=1e-7,Dm=1.8e-5,eps=.35,tort=2.5,L=8e-4,cDiff=2.5;
  const DK=2*rad/3*Math.sqrt(8*R*temp/(Math.PI*M)),Dp=Dm*DK/(Dm+DK),De=eps/tort*Dp;
  const flux=De*cDiff/L,wrong=(eps/tort*Dm)*cDiff/L;
  return [DK,Dp,De,flux,wrong/flux];
 }
};
const req={inorganic:{id:"I101",count:0},analytical:{id:"A101",count:0},organic:{id:"O98",count:0},physical:{id:"P98",count:0}};
const ids=new Set(),titles=new Set(),families=new Set();let all=0;
function near(a,b,label){
 assert.ok(Number.isFinite(a)&&Number.isFinite(b),label+' nonfinite');
 const scale=Math.max(Math.abs(a),Math.abs(b),1e-14);
 assert.ok(Math.abs(a-b)<=1e-9*scale,label+': '+a+' vs '+b);
}
for(const sub of Object.keys(req)){
 const rows=readFileSync(base+sub+'.jsonl','utf8').trimEnd().split('\n').map(JSON.parse);
 for(const x of rows){
  all++;req[sub].count++;
  assert.equal(x.subject,sub);assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
  assert.ok(x.answer_values.length>=4&&x.answer_values.every(Number.isFinite));
  assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,'awaiting_expert_review');
  assert.equal(x.novelty_review_status,'pending_cross_series_model_review');
  assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family));
  ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(w,x.id),'Missing independent witness for '+x.id+'; extend QA before adding another counted item');
  const results=w[x.id]();assert.equal(results.length,x.answer_values.length);
  results.forEach((v,i)=>near(v,x.answer_values[i],x.id+' answer '+i));
 }
 assert.ok(req[sub].count>=1&&req[sub].count<=25,'v10 sub count outside 1..25: '+sub);
}
assert.equal(Object.keys(w).length,all);
const distribution=Object.fromEntries(Object.entries(req).map(([k,v])=>[k,v.count]));
console.log(JSON.stringify({pass:true,series:'v10-work-in-progress',draft_count:all,distribution,independently_checked_full_answer_vectors:all,required_for_complete_volume:100,review:'pending human chemistry and cross-volume core model comparison',expert_approved:0}));
