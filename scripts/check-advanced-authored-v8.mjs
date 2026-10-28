#!/usr/bin/env node
// 8th collection: 60 item-level independent numeric witnesses, counters, constraints.
// This verifies calculations for stated models; not novelty or scientific peer review.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const rootDir=fileURLToPath(new URL('../editorial/advanced_integrated_v8/',import.meta.url)),R=8.314462618,F=96485.33212;
function bis(fn,a,b){
 let fa=fn(a),fb=fn(b);assert.ok(fa*fb<0,'missing sign change');
 for(let i=0;i<125;i++){let m=(a+b)/2,v=fn(m);if(v*fa>0){a=m;fa=v;}else b=m;}return(a+b)/2;
}
function close(a,b,id){assert.ok(Number.isFinite(a)&&Number.isFinite(b),id+' nonfinite');assert.ok(Math.abs(a-b)<1e-8*Math.max(1e-10,Math.abs(a),Math.abs(b)),id+': '+a+' ≠ '+b);}
const witnesses={
 I61:()=>bis(l=>l+.012*2000*(1e-7/(1e-7+1e-8))*l/(1+2000*(1e-7/(1e-7+1e-8))*l)-.018,0,.018),
 I62:()=>-(.14+.06)/2,
 I63:()=>.002/(1+1e4*1e-5),
 I64:()=>bis(l=>l+.008*(300*l+2*300*50*l*l)/(1+300*l+300*50*l*l)-.012,0,.012),
 I65:()=>{let k=5*Math.exp(-7800/(R*310));return k/(1+k);},
 I66:()=>bis(l=>l+.005*800*l/(1+800*l)-.01,0,.01),
 I67:()=>3+.12,
 I68:()=>.02*(2e-4)**2/((2e-4)**2+5e-4*2e-4+5e-4*2e-5),
 I69:()=>.002/(1+400*.006),
 I70:()=>.5*Math.exp(-24000/(R*300))+2*Math.exp(-52000/(R*300)),
 I71:()=>.32,
 I72:()=>.002/(1+150*.005+450*.003),
 I73:()=>{let k=Math.exp(10/R-6000/(R*700));return k/(1+k);},
 I74:()=>.02*10/(.08314462618*850),
 I75:()=>-2*.04,
 A61:()=>.0012,
 A62:()=>.0004,
 A63:()=>.002,
 A64:()=>.002*.03/(.03+5*.01),
 A65:()=>.003,
 A66:()=>-Math.log10(bis(h=>h+.0016-.004*2e-5/(2e-5+h)-1e-14/h,1e-13,.1)),
 A67:()=>8000/(1-8000*30e-6),
 A68:()=>{let tau=.025/.01;return .004/(1+.35*tau);},
 A69:()=>.00035,
 A70:()=>bis(l=>l+.002*700*l/(1+700*l)-.003,0,.003),
 A71:()=>.0015,
 A72:()=>90-50,
 A73:()=>.002*.1/(.1+4*.025),
 A74:()=>3*.0018*.05*F/.9,
 A75:()=>1-.25-.5,
 O58:()=>{let d=.02-.03;return d/((.02/.03)*Math.exp(d*50)-1);},
 O59:()=>Math.exp(-(.12+.025)*7),
 O60:()=>.5*Math.exp(-.2*6),
 O61:()=>7,
 O62:()=>bis(x=>x*(.015+x)/((.04-x)*(.02-x))-8,1e-12,.019999),
 O63:()=>{let d=bis(x=>x/(.02-2*x)**2-300,1e-12,.009999);return .02-2*d;},
 O64:()=>bis(s=>.02*Math.log(.03/s)+.03-s-.01*4,1e-12,.029999),
 O65:()=>4e-6*300,
 O66:()=>1.8*.65/(1.8*.65+.35),
 O67:()=>Math.exp(25/R-8000/(R*320)),
 O68:()=>(1+.9)/(1+.9-2*.9*.92),
 O69:()=>{let k=.08+.03;return .08/k*(1-Math.exp(-k*8));},
 O70:()=>.004/(1+120*.02+60*.01),
 O71:()=>1e9*Math.exp(-65000/(R*300)),
 O72:()=>.002*Math.exp(-.04*10),
 P58:()=>1-.0002*120000/(R*320),
 P59:()=>(1-Math.sqrt(1-2*R*320/7000))/2,
 P60:()=>Math.exp(-(-30000-300*(-90))/(R*300)),
 P61:()=>((.08*1)+(.02*2))/3,
 P62:()=>1e-9*(.002*1000)/.0005,
 P63:()=>bis(x=>1/x+1/(100*(1-x))-2*.8,1e-6,Math.sqrt(100)/(1+Math.sqrt(100))),
 P64:()=>bis(s=>s+.003*500*s/(1+500*s)-.006,0,.006),
 P65:()=>220/300,
 P66:()=>{let z=[.5,.3,.2],K=[2.4,.9,.3];return bis(b=>z.reduce((a,v,i)=>a+v*(K[i]-1)/(1+b*(K[i]-1)),0),0,1);},
 P67:()=>Math.exp((60*Math.log(360)+100*Math.log(300))/(60+100)),
 P68:()=>bis(j=>.008*Math.sinh(F*(.1-8*j)/(R*298.15))-j,0,.1/8),
 P69:()=>1e5/(R*300),
 P70:()=>Math.exp(.7*(1-.4)**2),
 P71:()=>{let k=t=>.25*Math.exp(-40000/R*(1/t-1/300)),f=t=>t-300-90*2*k(t)/(1+2*k(t)),n=0,prev=f(300);for(let t=300.25;t<=390;t+=.25){let v=f(t);if(prev*v<0)n++;prev=v;}return n;},
 P72:()=>.0005*Math.sqrt(.02/1e-9),
};
assert.equal(Object.keys(witnesses).length,60);
const spec={inorganic:['I',61],analytical:['A',61],organic:['O',58],physical:['P',58]};
let total=0;const ids=new Set(),titles=new Set(),stats={};
for(const [subject,[prefix,start]] of Object.entries(spec)){
 let rows=[];
 for(let part=1;part<=3;part++){
  const file=rootDir+subject+'_part'+part+'.jsonl',a=readFileSync(file,'utf8').trimEnd().split('\n').map(JSON.parse);
  assert.equal(a.length,5,subject+' part '+part);rows.push(...a);
 }
 stats[subject]=rows.length;assert.equal(rows.length,15);
 for(let i=0;i<rows.length;i++){
  const q=rows[i],key=prefix+(start+i);
  assert.equal(q.id,'UC-ADV8-'+key);assert.equal(q.subject,subject);
  assert.ok(q.problem_zh.length>=85);assert.ok(q.solution_zh_steps.length>=7);
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite));
  assert.ok(q.model_residuals.length>=3&&q.model_residuals.every(x=>Number.isFinite(x)&&Math.abs(x)<=1e-8));
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.parametric_variant,null);assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
  assert.ok(!ids.has(q.id)&&!titles.has(q.title));ids.add(q.id);titles.add(q.title);
  close(q.answer_values[0],witnesses[key](),q.id);total++;
 }
}
assert.equal(total,60);
console.log(JSON.stringify({pass:true,added:60,distribution:stats,independent_first_answer_witnesses:60,novelty_review:'pending',expert_approved:0}));
