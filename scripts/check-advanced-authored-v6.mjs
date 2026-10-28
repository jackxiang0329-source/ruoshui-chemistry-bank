#!/usr/bin/env node
// Sixth batch: reread committed 50 cases and recompute a separate numeric witness
// for EACH individually specified model. Numerical checks do not constitute peer review.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),R=8.314462618,F=96485.33212;
const specs={inorganic:[['inorganic.jsonl'],13,'I',33],analytical:[['analytical_part1.jsonl','analytical_part2.jsonl'],13,'A',33],organic:[['organic_part1.jsonl','organic_part2.jsonl'],12,'O',31],physical:[['physical_part1.jsonl','physical_part2.jsonl'],12,'P',31]};
function eq(a,b,label){
 assert.ok(Number.isFinite(a)&&Number.isFinite(b),label+' finite');
 assert.ok(Math.abs(a-b)<=1e-8*Math.max(1e-10,Math.abs(a),Math.abs(b)),label+': '+a+' != '+b);
}
function bisect(f,a,b){
 let fa=f(a),fb=f(b);
 assert.ok(fa*fb<0,'missing bracket '+fa+' '+fb);
 for(let j=0;j<120;j++){const mid=(a+b)/2,fm=f(mid);if(fa*fm>0){a=mid;fa=fm;}else b=mid;}
 return(a+b)/2;
}
const rows=[];
for(const [subject,[files,num,letter,begin]] of Object.entries(specs)){
 let data=[];
 for(const file of files)data.push(...readFileSync(root+'editorial/advanced_integrated_v6/'+file,'utf8').trimEnd().split('\n').map(JSON.parse));
 assert.equal(data.length,num,subject);
 data.forEach((q,index)=>{
  assert.equal(q.id,'UC-ADV6-'+letter+(begin+index));
  assert.equal(q.subject,subject);
  assert.ok(q.problem_zh.length>75);
  assert.ok(q.solution_zh_steps.length>=6);
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite));
  assert.ok(q.model_residuals.length>=3&&q.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-7));
  assert.equal(q.individual_model,true);assert.equal(q.parametric_variant,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  rows.push(q);
 });
}
assert.equal(rows.length,50);
assert.equal(new Set(rows.map(q=>q.id)).size,50);
assert.equal(new Set(rows.map(q=>q.title)).size,50);
for(const q of rows){
 const a=q.answer_values,id=q.id;
 let w;
 switch(id){
 case 'UC-ADV6-I33':{let k=Math.exp(35/R-12000/(R*290));w=k/(1+k);break;}
 case 'UC-ADV6-I34':w=.0008*1e-4/(1e-4+.001);break;
 case 'UC-ADV6-I35':w=1-2*.15;break;
 case 'UC-ADV6-I36':w=1e-16*(1/(1e-4)**2+1e4/1e-4+1e8);break;
 case 'UC-ADV6-I37':w=bisect(x=>x/((.004-x)*(.002-x))-200,0,.0019999);break;
 case 'UC-ADV6-I38':w=bisect(l=>l+.02*(120*l+2*120*15*l*l)/(1+120*l+120*15*l*l)-.03,0,.03);break;
 case 'UC-ADV6-I39':w=3*Math.exp(-6000/(R*300));break;
 case 'UC-ADV6-I40':w=2*.12;break;
 case 'UC-ADV6-I41':w=bisect(j=>.004*Math.sinh(F*(.08-12*j)/(R*298.15))-j,0,.08/12);break;
 case 'UC-ADV6-I42':w=(2e26*2e-8+.5e26*5e-8)*1.602176634e-19;break;
 case 'UC-ADV6-I43':w=bisect(l=>l+.016*1500*l/(1+1500*l)+.006*375*l/(1+375*l)-.018,0,.018);break;
 case 'UC-ADV6-I44':w=R*298.15/F*Math.log(20);break;
 case 'UC-ADV6-I45':w=bisect(l=>l+.012*600*l/(1+600*l)-.008,0,.008);break;
 case 'UC-ADV6-A33':w=.0015;break;
 case 'UC-ADV6-A34':w=.003;break;
 case 'UC-ADV6-A35':w=2e-5;break;
 case 'UC-ADV6-A36':w=.0004;break;
 case 'UC-ADV6-A37':{let h=bisect(h=>h+.0018-.004*1e-6/(1e-6+h)-1e-14/h,1e-13,.01);w=-Math.log10(h);break;}
 case 'UC-ADV6-A38':w=6000/(1-6000*30e-6);break;
 case 'UC-ADV6-A39':w=bisect(x=>x/((.003-x)*(.004-x))-400,0,.0029999);break;
 case 'UC-ADV6-A40':w=.002*.02/(.02+5*.03);break;
 case 'UC-ADV6-A41':w=.002/(1+.3*2);break;
 case 'UC-ADV6-A42':w=2.5/170;break;
 case 'UC-ADV6-A43':{let theta=.08/10**(-.5/2);w=theta/(40*(1-theta));break;}
 case 'UC-ADV6-A44':w=1/(1+.1);break;
 case 'UC-ADV6-A45':w=2e-5*(1000*.002);break;
 case 'UC-ADV6-O31':w=Math.exp(-(.16+.08)*6);break;
 case 'UC-ADV6-O32':w=8;break;
 case 'UC-ADV6-O33':w=bisect(c=>.02*Math.log(.03/c)+.03-c-.01*4,1e-10,.0299999);break;
 case 'UC-ADV6-O34':w=.5*Math.exp(-.15*8);break;
 case 'UC-ADV6-O35':w=.008/(1+200*.03+80*.02);break;
 case 'UC-ADV6-O36':w=Math.exp((40-15000/310)/R);break;
 case 'UC-ADV6-O37':w=(2*.6)/(2*.6+.4);break;
 case 'UC-ADV6-O38':w=.08;break;
 case 'UC-ADV6-O39':w=2e-6*300;break;
 case 'UC-ADV6-O40':w=bisect(x=>x*(.2+x)/(1-x)**2-4,0,.999);break;
 case 'UC-ADV6-O41':{let t=6,b=(.2+.05+2*.08)/2,d=Math.sqrt((.2-.05)**2+4*.08**2)/2;w=.5*Math.exp(-b*t)*(Math.cosh(d*t)+(-.2-.08+b+.08)*Math.sinh(d*t)/d);break;}
 case 'UC-ADV6-O42':w=1e8*Math.exp(-60000/(R*298.15));break;
 case 'UC-ADV6-P31':{let Q=x=>4*x*x*(6-2*x)**2/(27*(1-x)**4*20**2);w=bisect(x=>Q(x)-.8,1e-9,.999);break;}
 case 'UC-ADV6-P32':w=Math.exp(-(-35000-300*(-100))/(R*300));break;
 case 'UC-ADV6-P33':w=(.1*1+.02*2)/3;break;
 case 'UC-ADV6-P34':w=Math.exp((60*Math.log(360)+100*Math.log(300))/160);break;
 case 'UC-ADV6-P35':w=.001*Math.sqrt(.02/1e-9);break;
 case 'UC-ADV6-P36':w=bisect(j=>.02*Math.sinh(F/(2*R*298.15)*(.11-2*j))-j,0,.11/2);break;
 case 'UC-ADV6-P37':w=(1-Math.sqrt(1-2*R*300/6000))/2;break;
 case 'UC-ADV6-P38':w=1-.0002*100000/(R*300);break;
 case 'UC-ADV6-P39':w=.05;break;
 case 'UC-ADV6-P40':w=1/Math.sqrt(.3*.08);break;
 case 'UC-ADV6-P41':w=bisect(c=>.1*c+.02*.02*Math.sqrt(c)-.1*.01,0,.01);break;
 case 'UC-ADV6-P42':{let K=t=>4*Math.exp(-(-20000)/R*(1/t-1/300));w=bisect(x=>x/(1-x)-K(300+200*x),1e-9,.999);break;}
 default:throw Error('Scientific witness missing for '+id);
 }
 eq(a[0],w,id);
}
console.log(JSON.stringify({pass:true,added:50,distribution:{inorganic:13,analytical:13,organic:12,physical:12},distinct_ids:50,machine_only:true,expert_approved:0}));
