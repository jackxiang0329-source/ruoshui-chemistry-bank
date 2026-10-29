#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const witnesses={
"UC-ADV12-I151":()=>{const a=.4,lam=.15406,K=.9,D=50,eps=.001,NA=6.02214076e23,hs=[Math.sqrt(3),2],t=hs.map(h=>Math.asin(lam*h/(2*a))),beta=t.map(y=>(K*lam/D+4*eps*Math.sin(y))/Math.cos(y)),xx=t.map(y=>4*Math.sin(y)),yy=t.map((y,i)=>beta[i]*Math.cos(y)),strain=(yy[1]-yy[0])/(xx[1]-xx[0]),b=yy[0]-strain*xx[0],da=K*lam/b,aa=t.map((z,i)=>lam*hs[i]/(2*Math.sin(z))),rho=4*(24.305+15.999)/1000/(NA*(a*1e-9)**3);assert.ok(Math.abs(da-D)<1e-10&&Math.abs(strain-eps)<1e-13);return[...t.map(z=>z*180/Math.PI),...beta,xx[0],xx[1],strain,b,da,aa[0],aa[1],aa[0]**3,rho,strain,0];},
"UC-ADV12-A151":()=>{const gamma=2.6752218744e8,dd=.002,DT=.04,D=8e-10,T=298.15,kb=1.380649e-23,eta=.00089,G=[.1,.25,.4],b=g=>gamma**2*g*g*dd**2*(DT-dd/3),s=g=>1000*Math.exp(-b(g)*D),Ss=G.map(s),bb=G.map(b),DI=-Math.log(Ss[1]/Ss[0])/(bb[1]-bb[0]),S0=Ss[0]*Math.exp(bb[0]*DI),rad=kb*T/(6*Math.PI*eta*DI),rms=Math.sqrt(2*DI*DT);assert.ok(Math.abs(DI/D-1)<1e-13&&Math.abs(S0/1000-1)<1e-13);return[...bb,...Ss,DI,S0,rad*1e9,rms*1e6,Ss[1]/Ss[0],Math.log(Ss[0]/Ss[1]),Ss[2]/1000,1/rms,D*gamma**2*dd**2*(DT-dd/3)];},
"UC-ADV12-O148":()=>{const E=1e-7,V=5e-6,Km=.001,Ki=.002,vs=(s,i)=>V*s/(Km*(1+i/Ki)+s),v1=vs(.002,0),v2=vs(.002,.002),v3=vs(.0005,.002);let slope=(1/v3-1/v2)/(1/.0005-1/.002),ic=1/v2-slope/.002,vmax=1/ic,kapp=slope*vmax,km=.002*(vmax/v1-1),ki=.002/(kapp/km-1),time=(.002-.001+kapp*Math.log(2))/vmax;assert.ok(Math.abs(vmax/V-1)<1e-12&&Math.abs(km/Km-1)<1e-12&&Math.abs(ki/Ki-1)<1e-12);return[v1,v2,v3,vmax,km,ki,vmax/E,v2/v1,kapp/km,time,.001,.001,E*(vmax/E),vmax/kapp,1/(v1/vmax)];},
"UC-ADV12-P148":()=>{const h=5,C=500,Ts=20,Q=20,g=Q/(h*Ts),f=x=>g*Math.exp(x)-x,root=(l,r)=>{for(let j=0;j<140;j++){let x=(l+r)/2;if(f(l)*f(x)<=0)r=x;else l=x;}return(l+r)/2},a=root(0,1),b=root(1,5),t=C/h,lam1=(a-1)/t,lam2=(b-1)/t;assert.ok(a>0&&a<1&&b>1&&Math.abs(g*Math.exp(a)-a)<1e-13);return[g,a,b,300+Ts*a,300+Ts*b,h*Ts*a,h*Ts*b,lam1,lam2,-1/lam1,1/lam2,h*Ts/Math.E,t,1/Math.E,g*Math.exp(a)];}
};
const spec={inorganic:['I',151],analytical:['A',151],organic:['O',148],physical:['P',148]};
let count=0;const ids=new Set(),titles=new Set(),families=new Set();
const previous=new Set();
for(let v=2;v<=11;v++){
 let dir='editorial/advanced_integrated_v'+v+'/';
 for(const sub of Object.keys(spec)){
   try{for(const x of read(dir+sub+'.jsonl').trim().split('\n').filter(Boolean).map(JSON.parse))previous.add(x.model_family);}
   catch(e){if(v>=10)throw e;}
 }
}
for(const [subject,[letter,start]] of Object.entries(spec)){
 const path='editorial/advanced_integrated_v12/'+subject+'.jsonl';
 const rows=read(path).trim().split('\n').filter(Boolean).map(JSON.parse);
 assert.ok(rows.length>=1&&rows.length<=25);
 rows.forEach((x,i)=>{
 count++;assert.equal(x.id,'UC-ADV12-'+letter+(start+i));
 assert.equal(x.subject,subject);
 assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
 assert.ok(x.answer_values.length>=4&&x.answer_values.length===x.answer_units.length);
 assert.ok(x.answer_values.every(Number.isFinite));
 assert.ok(Array.isArray(x.answer_names)&&x.answer_names.length===x.answer_values.length&&new Set(x.answer_names).size===x.answer_names.length);
 assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
 assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
 assert.equal(x.quality_status,'awaiting_expert_review');assert.equal(x.novelty_review_status,'pending_cross_series_model_review');assert.equal(x.parametric_variant,null);
 assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family)&&!previous.has(x.model_family),'Duplicate ID/title/model family '+x.id);
 ids.add(x.id);titles.add(x.title);families.add(x.model_family);
 assert.ok(Object.hasOwn(witnesses,x.id),'Missing independent witness '+x.id);
 const values=witnesses[x.id]();assert.equal(values.length,x.answer_values.length);
 values.forEach((a,j)=>{const b=x.answer_values[j],scale=Math.max(Math.abs(a),Math.abs(b),1e-14);assert.ok(Math.abs(a-b)<=1e-9*scale,x.id+' index '+j+' '+a+' vs '+b);});
 });
}
assert.equal(Object.keys(witnesses).length,count);
const queue=JSON.parse(read('editorial/advanced_integrated_v12/overlap_review_queue.json'));
assert.equal(queue.current_draft_count,count);assert.equal(queue.expert_approved,0);
assert.equal(queue.preliminary_flags,queue.pairs.length);
const registered=new Set(queue.new_items_requiring_cross_series_comparison.map(x=>x.new_id));
for(const id of ids)assert.ok(registered.has(id),'Missing cross-series review item '+id);
const man=JSON.parse(read('release/chemistry-approved-manifest.json'));
assert.equal(man.advanced_editorial_items,606+count);
assert.equal(man.twelfth_series_work_in_progress_items,count);
assert.equal(man.twelfth_series_pending_cross_series_novelty_review,count);
assert.equal(man.approved_count,0);assert.deepEqual(man.items,[]);
console.log(JSON.stringify({pass:true,series:12,items:count,distribution:Object.fromEntries(Object.entries(spec).map(([s])=>[s,read('editorial/advanced_integrated_v12/'+s+'.jsonl').trim().split('\n').length])),independent_witnesses:count,human_approved:0}));
