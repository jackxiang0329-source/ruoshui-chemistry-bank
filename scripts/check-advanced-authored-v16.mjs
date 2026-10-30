#!/usr/bin/env node
import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23;
const witnesses={
"UC-ADV16-I251":()=>{let s=4/5,NBO=2/5,BO=(4*s-NBO)/2;return[s,2/5,2*s+1/5,NBO,NBO/s,NBO,s-NBO,NBO/s,1-NBO/s,BO,BO+NBO,2*BO/s]},
"UC-ADV16-I252":()=>[.006,.006*96485.33212,.006,.004,.006,.002,.014,.007,.002,6-3,.006/.001],
"UC-ADV16-I253":()=>{let mass=22.98977*4+26.98154*4+28.085*8+15.999*24;return[4*3+8*4-24*2,4,mass,4/mass*1000,4/mass*1000,4/2,2/mass*1000,4/8,24,4,2*2-4]},
"UC-ADV16-I254":()=>{let m=3*22.98977+30.97376+12*183.84+40*15.999;return[5+72-80,12*6,-40*2,3+5+72,3+5+72-80,6,m-3*22.98977,m,12*183.84/m,40*15.999/m,12,6-6]},
"UC-ADV16-A251":()=>{let diff=.1866,c=diff/6220,rate=diff/(6220*30),V=.003;return[diff,diff/30,c,rate,rate*V,c*V,.2866/6220,.1/6220,2.866,rate*V*60*1e6]},
"UC-ADV16-A252":()=>[2,2,1,1.6,8,40,.75,6400,.8,30],
"UC-ADV16-A253":()=>{let e=5.7/96485.33212,n=.5*e;return[6,5.7,e,n,n*65380,n*10,n/.0001,.3,2*n*65380,2]},
"UC-ADV16-A254":()=>{let rate=.95,base=1.8/.95,sp=base+2;return[1.9,rate,95,base,10*base,18,1/rate-1,rate,sp,10*base]}
};
Object.assign(witnesses,{
"UC-ADV16-O248":()=>{let z=Math.exp(-2.1),p=.01*(1-z);return[2*.02,.03,.07,4/7,3/7,.01*z,p*4/7,p*3/7,4/3,1-z,Math.LN2/.07,2/3]},
"UC-ADV16-O249":()=>{let pc=Math.sqrt(.5);return[pc,.72,1.28,4.8,1.2,1.2,0,1,.8-pc,2*3+3*2,12-2*4.8,6/6]},
"UC-ADV16-O250":()=>{let f=2/7,g=6/11,t=g*g*g;return[f,1-f,.01*f,g,t,.01*t,1-t,f-t,t/f,.1*f]}
});

const starts={inorganic:["I",251],analytical:["A",251],organic:["O",248],physical:["P",248]};
const ids=new Set(),titles=new Set(),families=new Set(),counts={};
for(const [sub,[letter,start]] of Object.entries(starts)){
 const txt=read('editorial/advanced_integrated_v16/'+sub+'.jsonl').trim();
 const rows=txt?txt.split("\n").map(JSON.parse):[];counts[sub]=rows.length;assert.ok(rows.length<=25);
 rows.forEach((x,i)=>{
  assert.equal(x.id,'UC-ADV16-'+letter+(start+i));assert.equal(x.subject,sub);
  assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=8);
  assert.ok(x.answer_values.length>=8&&x.answer_values.length===x.answer_names.length&&x.answer_values.length===x.answer_units.length);
  assert.ok(x.answer_values.every(Number.isFinite));
  assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
  assert.equal(x.independent_numeric_check,true);
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,'awaiting_expert_review');assert.equal(x.novelty_review_status,'pending_cross_series_model_review');assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family));ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(witnesses,x.id));const expected=witnesses[x.id]();assert.equal(expected.length,x.answer_values.length);
  expected.forEach((v,j)=>{const u=x.answer_values[j],s=Math.max(1e-14,Math.abs(u),Math.abs(v));assert.ok(Math.abs(u-v)<=1e-9*s,x.id+' '+x.answer_names[j]+' mismatch '+u+'/'+v);});
 });
}
assert.equal(Object.keys(witnesses).length,ids.size);
const m=JSON.parse(read('release/chemistry-approved-manifest.json'));assert.equal(m.sixteenth_series_work_in_progress_items,ids.size);assert.equal(m.sixteenth_series_pending_cross_series_novelty_review,ids.size);assert.equal(m.advanced_editorial_items,1006+ids.size);assert.equal(m.approved_count,0);assert.deepEqual(m.items,[]);
const q=JSON.parse(read('editorial/advanced_integrated_v16/overlap_review_queue.json'));assert.equal(q.current_draft_count,ids.size);assert.equal(q.preliminary_flags,q.pairs.length);assert.equal(q.new_items_requiring_cross_series_comparison.length,ids.size);
console.log(JSON.stringify({pass:true,series:16,count:ids.size,subjects:counts}));
