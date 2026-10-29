#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23,kB=1.380649e-23;
const witnesses={
"UC-ADV14-I201":()=>[6,2*6,18,6,6*2,18,6+5*2,6+5*2+2,18-(6+5*2),5],
"UC-ADV14-I202":()=>{let m=12*15.994915/(12+15.994915),n=13.003355*15.994915/(13.003355+15.994915),neww=2050*Math.sqrt(m/n),E=w=>6.62607015e-34*299792458*w*100/1.602176634e-19;return[m,n,m*1.66053906660e-27,n*1.66053906660e-27,neww,2050-neww,neww/2050,E(2050),E(neww),1e4/neww]},
"UC-ADV14-I203":()=>{let a=.01*.3,b=.01*.7,p=3*a+4*b;return[a,b,(3*a+2*b)/.01,p,p/.01,6*.01,F*b,a+b,p-3*a-4*b,b/.01]},
"UC-ADV14-I204":()=>{let m=195.79,C=F/m,cap=C*1000/3600;return[C,cap,cap*3.1,cap*.8,cap*3.1*.8,3*C*.8,3*C*.8*3.1/3600,3/m*.8,3*C/(2*3600),m===0?0:157.76/m]},
"UC-ADV14-A201":()=>{let c=(7000-1000)/2000,LOD=3*60/2000,LOQ=10*60/2000;return[c,c*5,LOD,LOQ,LOQ/LOD,1000+LOD*2000,1000+LOQ*2000,(7000-1000)/60,c*5/LOD,c*5/LOQ]},
"UC-ADV14-A202":()=>{let nS=.01/100,nA=nS*(12/2)/(15/3),mass=nA*200*1000,naive=nS*(12/15)*200*1000;return[nS,nA,mass,mass/20,20-mass,12/2,15/3,(12/2)/(15/3),naive,naive/20]},
"UC-ADV14-A203":()=>{let b=(.25-.1)/(30000-10000-5000+25000);let a=(.25-30000*b)/10000;let pKa=7-Math.log10(b/a),fb=1/(1+10**(pKa-8)),acid=1e-5*(1-fb),base=1e-5*fb;return[a,b,b/(a+b),pKa,a/b,fb,10000*acid+30000*base,25000*acid+5000*base,base,a+b]},
"UC-ADV14-A204":()=>{let CL=1e-5/(.01+.5*.02),CG=.5*CL,nl=CL*.01,ng=CG*.02;return[CL,CG,nl,ng,ng/1e-5,CG*.001,CG/CL,CG/CL-1,.02/(.01+.02),ng+nl]},
"UC-ADV14-O198":()=>{let m=.7,r=.3;return[m*m,m*r,r*m,r*r,2*m*r,(m/r)**2,(m+r)**2,1000*m,1000*m*r,1000*r]},
"UC-ADV14-O199":()=>{let S=(-10000+5000)/298.15,G=T=>-10000-T*S,rate=T=>Math.exp(-G(T)/(R*T)),a=rate(298.15),b=rate(350),p=a/(1+a),q=b/(1+b);return[S,G(298.15)/1000,G(350)/1000,a,b,p,q,2*p-1,2*q-1,(2*q-1)-(2*p-1)]},
"UC-ADV14-O200":()=>{let c=.8*.01,n=.7/c,actual=n*114.14,naive=.7/.01*114.14;return[c,.7,n,.3,actual,c,naive,naive/actual-1,.9/c,.9/c*114.14]},
"UC-ADV14-P198":()=>{let a=.1*10/(1+.1*10),b=.1*.5/(1+.1*.5),c=10/11,d=.5/1.5,lo=a+2*b,hi=c+2*d;return[a,b,a,2*b,lo,c,d,hi,hi/3,hi/lo]},
"UC-ADV14-P199":()=>{let f=T=>{let x=300/T,p=1/(1+Math.exp(x)),z=1+Math.exp(-x),U=R*300*p,C=R*x*x*p*(1-p);return[z,p,U,C]},a=f(150),b=f(300);return[a[0],b[0],a[1],b[1],a[2],b[2],a[3],b[3],R*300/1000,a[3]/b[3]]},
"UC-ADV14-P200":()=>{let r1=.01/.2,r2=.02/1,q=50/(r1+r2);return[r1,r2,r1+r2,q,q,q*r1,q*r2,350-q*r1,r1/r2,q*300]}
};
const starts={inorganic:["I",201],analytical:["A",201],organic:["O",198],physical:["P",198]};
const allIDs=new Set(),titles=new Set(),families=new Set(),counts={};
for(const [sub,[L,start]] of Object.entries(starts)){
 const raw=read("editorial/advanced_integrated_v14/"+sub+".jsonl").trim();
 const rows=raw?raw.split("\n").map(JSON.parse):[];
 counts[sub]=rows.length;assert.ok(rows.length<=25);
 rows.forEach((r,i)=>{
  assert.equal(r.id,"UC-ADV14-"+L+(start+i));assert.equal(r.subject,sub);
  assert.ok(r.problem_zh.length>=150&&r.solution_zh_steps.length>=8);
  assert.ok(r.answer_values.length>=8&&r.answer_values.length===r.answer_names.length&&r.answer_values.length===r.answer_units.length);
  assert.ok(r.answer_values.every(Number.isFinite)&&r.model_residuals.length>=3&&r.model_residuals.every(x=>Number.isFinite(x)&&Math.abs(x)<1e-8));
  assert.equal(r.publishable,false);assert.equal(r.exclude_from_official_bank,true);
  assert.equal(r.quality_status,"awaiting_expert_review");
  assert.equal(r.novelty_review_status,"pending_cross_series_model_review");
  assert.equal(r.parametric_variant,null);
  assert.ok(!allIDs.has(r.id)&&!titles.has(r.title)&&!families.has(r.model_family));
  allIDs.add(r.id);titles.add(r.title);families.add(r.model_family);
  assert.ok(Object.hasOwn(witnesses,r.id),"No independent numeric witness "+r.id);
  const values=witnesses[r.id]();assert.equal(values.length,r.answer_values.length);
  values.forEach((v,j)=>{const observed=r.answer_values[j],scale=Math.max(Math.abs(v),Math.abs(observed),1e-14);
   assert.ok(Math.abs(v-observed)<=1e-9*scale,r.id+" index "+j+" "+v+" vs "+observed);});
 });
}
assert.equal(Object.keys(witnesses).length,allIDs.size);
const man=JSON.parse(read("release/chemistry-approved-manifest.json"));
assert.equal(man.fourteenth_series_work_in_progress_items,allIDs.size);
assert.equal(man.fourteenth_series_pending_cross_series_novelty_review,allIDs.size);
assert.equal(man.advanced_editorial_items,806+allIDs.size);
assert.equal(man.approved_count,0);assert.deepEqual(man.items,[]);
const q=JSON.parse(read("editorial/advanced_integrated_v14/overlap_review_queue.json"));
assert.equal(q.current_draft_count,allIDs.size);assert.equal(q.preliminary_flags,q.pairs.length);
for(const id of allIDs)assert.ok(q.new_items_requiring_cross_series_comparison.some(x=>x.new_id===id));
console.log(JSON.stringify({passed:true,series:14,total:allIDs.size,distribution:counts}));
