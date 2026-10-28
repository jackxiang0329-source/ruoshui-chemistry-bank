#!/usr/bin/env node
// Independent model-specific equation checks of 50 original advanced chemistry cases.
// This script reads committed JSONL; machine consistency is NOT human expert approval.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),R=8.314462618,F=96485.33212;
const close=(a,b,label)=>{assert.ok(Number.isFinite(a)&&Number.isFinite(b),label+' finite');const tol=1e-8*Math.max(1e-10,Math.abs(a),Math.abs(b));assert.ok(Math.abs(a-b)<=tol,label+': '+a+' vs '+b)};
const files={inorganic:['inorganic.jsonl'],analytical:['analytical_part1.jsonl','analytical_part2.jsonl'],organic:['organic_part1.jsonl','organic_part2.jsonl'],physical:['physical_part1.jsonl','physical_part2.jsonl']};
const expected={inorganic:[13,'I',20],analytical:[13,'A',20],organic:[12,'O',19],physical:[12,'P',19]};
const items=[];
for(const [subject,paths] of Object.entries(files)){
 let rows=[];
 for(const name of paths)rows.push(...readFileSync(root+'editorial/advanced_integrated_v5/'+name,'utf8').trim().split('\n').map(JSON.parse));
 assert.equal(rows.length,expected[subject][0],subject+' 13/12 item count');
 rows.forEach((q,i)=>{
  assert.equal(q.id,'UC-ADV5-'+expected[subject][1]+(expected[subject][2]+i));
  assert.equal(q.subject,subject);
  assert.equal(q.individual_model,true);assert.equal(q.parametric_variant,false);
  assert.equal(q.difficulty,'advanced_integrated');
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.ok(q.problem_zh.length>=130&&q.solution_zh_steps.length>=7,q.id+' full rigorous reasoning');
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite),q.id+' numeric answers');
  assert.equal(q.answer_names.length,q.answer_values.length);assert.equal(q.answer_units.length,q.answer_values.length);
  assert.ok(q.model_residuals.length>=3&&q.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-7));
  items.push(q);
 });
}
assert.equal(items.length,50);
assert.equal(new Set(items.map(x=>x.id)).size,50);
assert.equal(new Set(items.map(x=>x.title)).size,50);
const models=new Set();
for(const q of items){
 const a=q.answer_values, tag=q.id; let k=0;
 const eq=(v,w)=>{close(v,w,tag+' check'+(++k))};
 switch(tag){
 case 'UC-ADV5-I20':{const x=.002,dh=40000,K1=x*x/(1-x),K2=K1*Math.exp(-dh/R*(1/1100-1/900));eq(a[0],K1);eq(a[1],K2);eq(a[2]*a[2]/(1-a[2]),K2);break;}
 case 'UC-ADV5-I21':eq(a[0]+2*a[1],.012);eq(a[1],450*a[0]**2);eq(a[2],2*a[1]/.012);break;
 case 'UC-ADV5-I22':{let k=10**3.2;eq(a[1],.1*a[0]);eq(a[2]+a[3],.003);eq(a[0]+a[1]+a[3],.012);eq(a[3],k*a[0]*a[2]);break;}
 case 'UC-ADV5-I23':eq(a[0]+a[2],.05);eq(a[0]/a[2],2.3);eq(a[3],a[0]*F);break;
 case 'UC-ADV5-I24':{let t=29.3*Math.PI/180,lam=.154;eq(2*a[0]*Math.sin(t),lam);eq(a[1],a[0]*Math.SQRT2);eq(2*a[0]*1.002*Math.sin(a[2]*Math.PI/360),lam);break;}
 case 'UC-ADV5-I25':{let mult=5*Math.exp(-.12*1.602176634e-19/(1.380649e-23*300));eq(a[0],mult/(1+mult));eq(a[1],1.5*(1-a[0])+4.5*a[0]);break;}
 case 'UC-ADV5-I26':eq(a[0],200*a[1]*a[2]);eq(a[0]+a[1],.004);eq(a[0]+a[2],.002);break;
 case 'UC-ADV5-I27':eq(a[0]+Math.exp(-.0012*600),1);eq(a[1]+.05*a[0],.05);eq(a[2],.05*a[0]);break;
 case 'UC-ADV5-I28':eq(a[0]+a[1],2);eq(a[0],.4);eq(a[2],a[0]/2);break;
 case 'UC-ADV5-I29':eq(a[0],.01+3*.02);eq(a[1]*5,a[0]);eq(a[2],F*a[0]);break;
 case 'UC-ADV5-I30':eq(a[1],.1*a[0]);eq(a[2]+a[3],.02);eq(a[0]+a[1]+a[3],.01);eq(a[3],200*a[0]*a[2]);break;
 case 'UC-ADV5-I31':eq(a[0],.4);eq(a[0]+a[1],1);eq(a[2],4-a[0]);eq(a[3],2.54*a[0]);break;
 case 'UC-ADV5-I32':eq(a[1]+a[2]+a[3],.02);eq(a[0]+a[2]+2*a[3],.01);eq(a[2],300*a[0]*a[1]);eq(a[3],80*a[0]*a[2]);break;
 case 'UC-ADV5-A20':{let alpha=.5;eq(a[0],.0016);eq(a[1],7000*alpha*(.0016*.01+.01*.002)/.012);eq(a[2],7000*alpha*(.0016*.01+.01*.005)/.015);break;}
 case 'UC-ADV5-A21':eq(a[0],240*a[1]*a[2]);eq(a[0]+a[1],.002);eq(a[0]+a[2],.003);break;
 case 'UC-ADV5-A22':eq(.1*a[0]+.025*a[1],.0004);eq(a[1],3*a[0]);eq(a[3],a[1]*R*298.15);break;
 case 'UC-ADV5-A23':eq(a[0]+a[3]+a[4],.025);eq(a[1]+a[3],.02);eq(a[2]+a[4],.015);eq(a[3],10000*a[0]*a[1]);break;
 case 'UC-ADV5-A24':{let X=a[0],Y=a[1],Z=a[2];eq(15000*(X+Y),22.5);eq(15000*(X+.5*Y+Z),23.25);eq(15000*(.2*X+Y+Z),15);break;}
 case 'UC-ADV5-A25':eq(a[0],2000*Math.exp(-.001*10)+50000*Math.exp(-.03*10));eq(a[1],2000*Math.exp(-.001*30)+50000*Math.exp(-.03*30));eq(a[2],2000/.001+50000/.03);break;
 case 'UC-ADV5-A26':eq(a[0],30.5/(2*F));eq(a[1],18.015*a[0]);eq(a[2],a[1]/.2);break;
 case 'UC-ADV5-A27':eq(a[0]*a[0],.02/.01);eq(a[1],.001+.02/a[0]+.01*a[0]);eq(a[2],1200/a[1]);break;
 case 'UC-ADV5-A28':{let h=a[3],ka=1e-5;eq(a[0],-Math.log10(h));eq(a[1]+a[2],.002);eq(a[1],.002*ka/(ka+h));eq(h+.0015,a[1]+1e-14/h);break;}
 case 'UC-ADV5-A29':eq(2*a[0]+.7*a[1],.034);eq(a[0]+2*a[1],.05);eq(a[2],F*.02*(a[0]+2*a[1]));break;
 case 'UC-ADV5-A30':eq(a[0],350*a[1]*a[2]);eq(a[0]+a[1],.001);eq(a[0]+a[2],.0018);break;
 case 'UC-ADV5-A31':eq(.7*a[0]+.2*a[1],.0011);eq(.3*a[0]+.8*a[1],.0019);eq(a[2],.5);break;
 case 'UC-ADV5-A32':eq(a[0],.0005);eq(40000*a[0]/(1+40000*a[0]),20/21);eq(a[1],40000/(1+40000*a[0])**2);break;
 case 'UC-ADV5-O19':eq(a[0],8*a[1]*a[2]);eq(a[0]+a[1],.06);eq(a[0]+a[2],.03);break;
 case 'UC-ADV5-O20':{let A=a[0],B=a[1],C=a[2],D=a[3];eq(A+B+C+D,1);eq(A,Math.exp(-.21*5));eq(B,.18*(Math.exp(-.06*5)-Math.exp(-.21*5))/.15);break;}
 case 'UC-ADV5-O21':{let k=(.04+1.8*.15)/2.8;eq(a[0],k);eq(a[1],Math.exp(-k*10));eq(a[1]+a[2]+a[3],1);eq(a[3]/a[2],1.8*.15/.04);break;}
 case 'UC-ADV5-O22':eq(a[0],Math.exp(-.2*4));eq(a[1],.2*(Math.exp(-.08*4)-Math.exp(-.2*4))/.12);eq(a[0]+a[1]+a[2],1);eq(a[3],Math.log(.2/.08)/(.2-.08));break;
 case 'UC-ADV5-O23':eq(a[0]+a[1],.01);eq(a[0]/a[1],12.5);eq(a[2],.4*a[0]);break;
 case 'UC-ADV5-O24':eq(a[0],1/(1-.94));eq(a[1],(1+.94)/(1-.94));eq(a[2],a[1]/a[0]);break;
 case 'UC-ADV5-O25':eq(a[1],a[0]*(2*.6)/(2*.6+.4));eq(a[2],a[0]*(1-(2*.6)/(2*.6+.4)));eq(a[1]+2*a[2]+a[3],1);break;
 case 'UC-ADV5-O26':{let [r,s,prod,ee]=a;eq(r+s+prod,1);eq(ee,(r-s)/(r+s));eq(r+s,1-prod);break;}
 case 'UC-ADV5-O27':eq(a[0],1e9/(1/(5e-9)+4e9*.08));eq(a[1],a[0]/5);eq(a[2],a[1]/(1+6*.08));break;
 case 'UC-ADV5-O28':eq(a[0]+a[1]+a[2],.008);eq(a[1],6*a[0]);eq(a[2],1.6*a[0]);eq(a[3],.5*a[1]);break;
 case 'UC-ADV5-O29':eq(a[0],.02*Math.exp(-.012*120));eq(a[1],.02*.012*(Math.exp(-.005*120)-Math.exp(-.012*120))/(.012-.005));eq(a[0]+a[1]+a[2],.02);break;
 case 'UC-ADV5-O30':eq(a[0],.001*Math.exp(-45000/R*(1/300-1/310)));eq(a[1]+a[2],1);eq(a[2],Math.exp(-300*a[0]));break;
 case 'UC-ADV5-P19':eq(a[0]*(1-a[0]),R*300/(2*6000));eq(a[1],1-a[0]);eq(a[2],6000/(2*R));break;
 case 'UC-ADV5-P20':{let k=T=>Math.exp(-(-40000+80*(T-300)-T*(-120+80*Math.log(T/300)))/(R*T));eq(a[0],k(300));eq(a[1],k(350));eq(a[2],a[1]/(1+a[1]));break;}
 case 'UC-ADV5-P21':eq(a[1],a[0]*.005);eq(a[2],.3+R*298.15/(2*F)*Math.log(a[1]));eq(a[3],R*298.15/(2*F)*Math.log(a[0]));break;
 case 'UC-ADV5-P22':eq(a[0],180/250);eq(a[2],a[1]*250*70);eq(400*(360-a[3]),a[2]);eq(250*(a[4]-290),a[2]);break;
 case 'UC-ADV5-P23':eq(a[0]*a[1],.008);eq(a[2],a[0]/1e-4);eq(a[3],a[0]/2e-4);eq(a[4],a[0]/5e-5);break;
 case 'UC-ADV5-P24':{let θ=70*Math.PI/180;eq(a[0],2*.065/1e5);eq(a[1],16*Math.PI*.065**3/(3*(1e5)**2));eq(a[2],(2+Math.cos(θ))*(1-Math.cos(θ))**2/4);eq(a[3],a[1]*a[2]);break;}
 case 'UC-ADV5-P25':eq(a[0],(.1+2*.02)/3);eq(a[1],.1+2*.02);eq(a[3],-a[2]);break;
 case 'UC-ADV5-P26':{const φ=.002*Math.sqrt(.004/1e-9);eq(a[0],φ);eq(a[1],φ/Math.sinh(φ));eq(a[2],3/(φ*φ)*(φ/Math.tanh(φ)-1));break;}
 case 'UC-ADV5-P27':eq(a[0],.1/(1+.4*2));eq(a[1],1-a[0]/.1);eq(a[2],.5+.4);eq(a[3],Math.log(10)/a[2]);break;
 case 'UC-ADV5-P28':eq(a[0],3*.2+.8*(-.1));eq(a[1],.8*.2+2*(-.1));eq(a[2],a[0]*.2+a[1]*(-.1));eq(a[3],3*2-.8*.8);break;
 case 'UC-ADV5-P29':{let den=1+100*.02+50*.03;eq(a[0],100*.02/den);eq(a[1],50*.03/den);eq(a[2],.01*a[0]*a[1]);eq(a[3],(1+50*.03)/100);break;}
 case 'UC-ADV5-P30':eq(a[0],R*298.15*Math.log(.15/100));eq(a[1],-a[0]/(2*F));eq(a[2],R*298.15*Math.log(100)/(2*F));eq(a[3],-.01*a[0]);break;
 default:throw Error('Missing independent validation: '+tag);
 }
 models.add(tag);
}
assert.equal(models.size,50);
console.log(JSON.stringify({ok:true,new_items:items.length,per_subject:{inorganic:13,analytical:13,organic:12,physical:12},independent_model_checks:models.size,expert_approved:0,official_release:0},null,2));
