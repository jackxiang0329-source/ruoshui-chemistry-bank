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

Object.assign(witnesses,{
"UC-ADV16-P248":()=>{let a=995,b=2955,c=4875,De=50000;return[a,b,c,1960,1920,40,1e7/1960,De,a,a/De,c-a]},
"UC-ADV16-P249":()=>{let v=Math.sqrt(8*8.314462618*298.15/(Math.PI*.0280134)),d=2*v*1e-8/3;return[d,2*d,1000*d,2000*d,2,2,v,10*d,10*d*6.02214076e23,1e-6/(2*d),1e-6/(4*d)]},
"UC-ADV16-P250":()=>[.2,.5,.8,.8,.5,.2,.25,1,4,.5,50,.6,16,2]
});

Object.assign(witnesses,{
"UC-ADV16-I255":()=>[.7,.3,.3,1.7,.3,.85,1,2,8,-8,0,1],
"UC-ADV16-I256":()=>[5,6,2.5,1.5,2.75,4*4,-11*2,16-22,4*4,16-11,10/4,6],
"UC-ADV16-I257":()=>{let d=18000,p=20000,H=(-1.6+1.2)*d+p,L=-2.4*d+3*p;return[-.4*d,-2.4*d,p,3*p,H,L,2*(p-d),4,0,Math.sqrt(24),0,1]},
"UC-ADV16-I258":()=>{let z=1.011,p=10**(-2)/z,n=10**(-3)/z;return[10**(-2),10**(-3),z,p,1-p-n,n,.01*p,.01*(1-p-n),.01*n,p-n,.01*(p-n),(4+9)/2]},
"UC-ADV16-I259":()=>{let v=.08;return[.84,.16,1.92,v,.04,3.84,-3.84,0,1.92,.5,8]},
"UC-ADV16-I260":()=>{let y=2/(1+Math.sqrt(17)),d=1-y;return[y,d,y,d,y,d,2-y,2*d/(2-y),4,2-y,d/y]},
"UC-ADV16-I261":()=>{let a=1,b=.2,z=2.2;return[a,b,z,a/z,b/z,1/z,.01/z,.002/z,.012/z,5,1.2/z,.01/z,.5]},
"UC-ADV16-I262":()=>{let Cu=.08,O=.05,M=Cu*63.546+O*15.999;return[.06,.02,.03,.02,Cu,O,1.25,.75,.25,M,.05*15.999/M,.08*63.546/M,.06+.04-.1]},
"UC-ADV16-I263":()=>{let a=10**1.95,b=10**(-2.03),e=1/(1+a*(1+b)),y=a*e,z=a*b*e;return[a,b,e,y,z,.01*e,.01*y,.01*z,.01,y+2*z,a*b,b]},
"UC-ADV16-I264":()=>{let j=35/4,s=3/4,l=12,g=6/7,M=g*Math.sqrt(j),mu=9.2740100783e-24*M,C=1.25663706212e-6*NA*mu*mu/(3*1.380649e-23);return[j,s,l,g,M,mu,6,15/7,C/300,C]}
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
