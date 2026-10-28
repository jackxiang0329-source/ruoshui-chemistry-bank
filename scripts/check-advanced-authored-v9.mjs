#!/usr/bin/env node
// Independent first-result numerical witnesses for v9; not human peer review.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const dir=fileURLToPath(new URL('../editorial/advanced_integrated_v9/',import.meta.url));
const R=8.314462618,F=96485.33212,kB=1.380649e-23,h=6.62607015e-34,c=299792458,NA=6.02214076e23;
function root(fn,a,b){
 let fa=fn(a);assert.ok(fa*fn(b)<0,'unbracketed independent root');
 for(let i=0;i<140;i++){let m=(a+b)/2,v=fn(m);if(fa*v>0){a=m;fa=v;}else b=m;}return(a+b)/2;
}
const w={
 I76:()=>-.4*22.5+18.5,
 I77:()=>(.72+2*.31)/3,
 I78:()=>1.02-.05916*6.5,
 I79:()=>5.4e-10**3,
 I80:()=>h*c/(400e-9)/1.602176634e-19,
 I81:()=>2*Math.asin(.15406/(2*.214))*180/Math.PI,
 I82:()=>2.12*9.2740100783e-24*.342/h/1e9,
 I83:()=>1.2*25+18,
 I84:()=>2/Math.sqrt(6)*(2*2.26-2*2.02),
 I85:()=>110+250+500-320,
 I86:()=>1.2*F/1000,
 I87:()=>.65*5.3*Math.exp(-2*12*12*.007**2),
 I88:()=>.006/(300-270)+2e-5,
 I89:()=>8e25*(1.602176634e-19)**2*1.5e-12/(kB*650),
 I90:()=>{let K=Math.exp(.17*F/(R*650)),b=.08;return K*b/(1-b+K*b);},
 I91:()=>.2/(.6+.2),
 I92:()=>Math.exp(-(.12+.03)*7),
 I93:()=>(.510/.850)/(.510/.850+.192/.480),
 I94:()=>h*c*56000,
 I95:()=>(1.4+1.35)/(Math.SQRT2*(.62+1.35)),
 I96:()=>2*3-3-2,
 I97:()=>Math.sqrt(.0196/.04),
 I98:()=>.22/(1+.7)+.05*.7/(1+.7),
 I99:()=>.8*2.5+.2*.5,
 I100:()=>Math.min(.08/2,.12/3),
 A76:()=>.6*.5/(20000*240),
 A77:()=>1000+100*Math.log(13/10)/Math.log(16/10),
 A78:()=>1.2*(1+4),
 A79:()=>200*28/(200+28)*1.66053906660e-27,
 A80:()=>Math.log(.403/.4)/Math.log(62/60),
 A81:()=>12*16/(12+16),
 A82:()=>1-1.5/4,
 A83:()=>3,
 A84:()=>F*1e-5*2*Math.sqrt(1e-9/Math.PI)+.00008,
 A85:()=>2.69e5*.07*Math.sqrt(1e-5)*1e-6*Math.sqrt(.1),
 A86:()=>(.3e-6)**2/(4*.005),
 A87:()=>6e-6/(2*Math.PI*2.4*Math.sqrt(Math.sin(Math.PI/4)**2-(1.4/2.4)**2))*1e6,
 A88:()=>7,
 A89:()=>10/60,
 A90:()=>-Math.log10((.01+.01)/(1+.01)),
 A91:()=>2**(-12/6),
 A92:()=>2/3,
 A93:()=>.758**2,
 A94:()=>3.3*.006/.8,
 A95:()=>10,
 A96:()=>8/(80*1*.2),
 A97:()=>4/(.4/.25-1),
 A98:()=>500.0125-500,
 A99:()=>.001+.02*Math.sqrt(.0004),
 A100:()=>(2.6-.2)/2,
 O73:()=>1/(1+Math.exp(2000/(R*298.15))),
 O74:()=>.04-(.08-.04)/(.3-.1)*.1,
 O75:()=>Math.log10(2)/.3,
 O76:()=>1*.03,
 O77:()=>.001/(2e-5),
 O78:()=>2*.8/(2*.8+2*.1+1.6),
 O79:()=>2*(-75),
 O80:()=>(1+Math.sqrt(129))/16,
 O81:()=>10*12+11+14+32,
 O82:()=>8+5*2,
 O83:()=>-35000/(-110),
 O84:()=>.97**5,
 O85:()=>Math.min(.01-.001,.012-.004),
 O86:()=>{let p=.2/.3;return p+(.9-p)*Math.exp(-.3*10);},
 O87:()=>.7**2,
 O88:()=>100e-12*.2e-9,
 O89:()=>Math.sqrt(1e5*1e-14/1e4),
 O90:()=>1,
 O91:()=>1-Math.exp(-.12*15),
 O92:()=>.03**2/(.02**2+.03**2),
 O93:()=>.012*.03*.025/(.015*.03+.02*.025+.03*.025),
 O94:()=>.003/(.003+.027),
 O95:()=>20*.03/(20+.01),
 O96:()=>.8*10000+.2*50000,
 O97:()=>.5*600,
 P73:()=>root(v=>R*350/(v-4.3e-5)-.36/v**2-5e6,4.3e-5*1.001,.02),
 P74:()=>.5*(4*.01+.02+.04),
 P75:()=>126.5+144.9-149.9,
 P76:()=>(20*5+145)/(20*140+10),
 P77:()=>2*.072/(10e-9)/1e6,
 P78:()=>-(.068-.072)/(R*298.15*Math.log(.1/.01)),
 P79:()=>20,
 P80:()=>1/(2*Math.PI*8e-12)/1e9,
 P81:()=>300*1e-6/6000,
 P82:()=>(.4-.15)/(.65-.15),
 P83:()=>Math.log(2)/(2*Math.PI*.5*.5),
 P84:()=>.620*F*.1*(1e-5)**(2/3)*(.01)**(-1/6)*Math.sqrt(100)*1e-6,
 P85:()=>Math.exp(-10/5)/5,
 P86:()=>.1/(1+2*.1*5),
 P87:()=>{let x=300/300,z=Math.exp(x);return 3*R*x*x*z/(z-1)**2;},
 P88:()=>2*2000*9.81*(50e-9)**2/(9*.001),
 P89:()=>kB*300*2e-9/1e-18,
 P90:()=>-R*(Math.log(20/410**2)-Math.log(10/400**2))/(1/410-1/400)/1000,
 P91:()=>10/50,
 P92:()=>Math.exp(-.02*10),
 P93:()=>2*Math.sqrt(.1),
 P94:()=>2*.072*Math.cos(Math.PI/6)/.00025,
 P95:()=>100/2,
 P96:()=>100*(400-350)/30000,
 P97:()=>-2*F*1.1/1000,
};
const specs=[
 ['inorganic','I',76,[['inorganic_part1',7],['inorganic_part2',9],['inorganic_part3a',5],['inorganic_part3b',4]]],
 ['analytical','A',76,[['analytical_part1',8],['analytical_part2',9],['analytical_part3',8]]],
 ['organic','O',73,[['organic_part1',8],['organic_part2a',4],['organic_part2b',5],['organic_part3',8]]],
 ['physical','P',73,[['physical_part1',8],['physical_part2',9],['physical_part3',8]]]
];
assert.equal(Object.keys(w).length,100);
const ids=new Set(),titles=new Set(),families=new Set();let count=0, maxErr=0;const stats={};
for(const [subject,letter,start,files] of specs){
 let records=[];
 for(const [name,target] of files){
  const rows=readFileSync(dir+name+'.jsonl','utf8').trimEnd().split('\n').map(JSON.parse);
  assert.equal(rows.length,target,name+' count');
  records.push(...rows);
 }
 assert.equal(records.length,25,subject);
 stats[subject]=records.length;
 records.forEach((q,i)=>{
  const key=letter+(start+i);
  assert.equal(q.id,'UC-ADV9-'+key);assert.equal(q.subject,subject);
  assert.ok(!ids.has(q.id)&&!titles.has(q.title)&&!families.has(q.model_family));
  ids.add(q.id);titles.add(q.title);families.add(q.model_family);
  assert.ok(q.problem_zh.length>=95&&q.solution_zh_steps.length>=7);
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite));
  assert.ok(q.model_residuals.length>=3&&q.model_residuals.every(Number.isFinite));
  assert.ok(q.model_residuals.every(v=>Math.abs(v)<=1e-8));
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
  assert.equal(q.parametric_variant,null);
  assert.ok(w[key],q.id+' missing witness');
  let calculated=w[key](),published=q.answer_values[0];
  let tol=1e-8*Math.max(1e-14,Math.abs(calculated),Math.abs(published));
  assert.ok(Number.isFinite(calculated)&&Math.abs(calculated-published)<=tol,q.id+': '+calculated+' != '+published);
  maxErr=Math.max(maxErr,Math.abs(calculated-published));
  count++;
 });
}
assert.equal(count,100);
console.log(JSON.stringify({passed:true,series:'v9',items:count,subject_distribution:stats,distinct_ids:ids.size,distinct_titles:titles.size,within_series_model_labels:families.size,independent_primary_answer_checks:count,max_primary_absolute_error:maxErr,human_expert_approvals:0,cross_series_core_model_review:'pending'},null,2));
