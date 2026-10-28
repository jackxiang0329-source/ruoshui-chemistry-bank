#!/usr/bin/env node
// Strict structural + independently authored scientific equation checks for 50 v4 cases.
// Machine validation only: does not establish expert peer review or chemical realism.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),R=8.314462618,F=96485.33212;
const eq=(a,b,where)=>assert.ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<(b===0?1e-10:1e-8*Math.max(1e-30,Math.abs(a),Math.abs(b))),where+': '+a+' vs '+b);
const groups={inorganic:[13,'I'],analytical:[13,'A'],organic:[12,'O'],physical:[12,'P']},all=[];
for(const [subject,[num,prefix]] of Object.entries(groups)){
 let part=[];
 for(const p of [1,2]){
  const path='editorial/advanced_integrated_v4/'+subject+'_part'+p+'.jsonl';
  const lines=readFileSync(root+path,'utf8').trimEnd().split('\n').map(JSON.parse);
  assert.equal(lines.length,p===1?subject==='inorganic'||subject==='analytical'?7:6:subject==='inorganic'||subject==='analytical'?6:6);
  part.push(...lines);
 }
 assert.equal(part.length,num);
 for(let i=0;i<part.length;i++){
  const q=part[i];
  assert.equal(q.subject,subject);assert.equal(q.id,'UC-ADV4-'+prefix+String(i+7).padStart(2,'0'));
  assert.equal(q.original_independent_model,true);assert.equal(q.numeric_variant,false);
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.verification.human_expert_reviewed,false);
  assert.ok(q.problem_zh.length>110&&q.solution_zh_steps.length>=7);
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite));
  assert.ok(q.verification.residuals.length>=3&&q.verification.residuals.every(x=>Math.abs(x)<1e-7));
  all.push(q);
 }
}
assert.equal(all.length,50);
assert.equal(new Set(all.map(x=>x.title)).size,50);
assert.equal(new Set(all.map(x=>x.id)).size,50);
let independently_checked=0;
for(const p of all){
 const a=p.answer_values,tag=p.id;
 switch(tag){
 case 'UC-ADV4-I07':{let h=10**(-a[0]),k1=.01,k2=1e-7,k3=1e-12,frac=k1*k2*k3/(h**3+k1*h*h+k1*k2*h+k1*k2*k3);eq(frac,a[2],tag);eq(a[1],.001*frac,tag);eq(.004**3*a[1]**2,1e-26,tag);break;}
 case 'UC-ADV4-I08':eq(a[0]/a[1]**2,75,tag);eq(a[1]+2*a[0],.02,tag);eq(a[2],63.546*a[0],tag);break;
 case 'UC-ADV4-I09':eq(10-10*a[0],3,tag);eq(a[1]+a[0],1,tag);eq(a[2]+a[0],2,tag);break;
 case 'UC-ADV4-I10':eq(a[0]-a[1],.025,tag);eq(a[0]*a[1],.01**2,tag);eq(a[2],-R*298.15/F*Math.log(a[0]/.01),tag);break;
 case 'UC-ADV4-I11':eq(a[0]*F,.8*23156.4797,tag);eq(a[0]+a[1],1,tag);eq(a[2],3+a[0],tag);break;
 case 'UC-ADV4-I12':eq(a[0],130*a[1]*a[2],tag);eq(a[1]+a[0],.012,tag);eq(a[2]+a[0],.02,tag);break;
 case 'UC-ADV4-I13':eq(a[1]+a[3],.025,tag);eq(a[2]+a[4],.04,tag);eq(a[0]+a[3]+a[4],.015,tag);eq(a[3],100*a[0]*a[1],tag);break;
 case 'UC-ADV4-I14':eq(.0003*Math.exp((a[0]-.25)/.08),a[1],tag);eq(.002*Math.exp(-(a[0]-.45)/.12),a[1],tag);eq(a[2],3600*a[1],tag);break;
 case 'UC-ADV4-I15':eq(4*a[0]**3*Math.sqrt(1e-4),4e-12,tag);eq(a[1],2*a[0],tag);eq(4*a[2]**3*Math.sqrt(1e-2),4e-12,tag);eq(a[3],2*a[2],tag);break;
 case 'UC-ADV4-I16':eq(a[0],3+.25-2*.12,tag);eq(a[1],a[0]-3,tag);eq(a[3],.12*15.999,tag);break;
 case 'UC-ADV4-I17':eq(a[0]+a[1],.02,tag);eq(a[2],2*a[0]/.02+3*a[1]/.02,tag);eq(a[3],.02*(.6+2*.3),tag);break;
 case 'UC-ADV4-I18':eq(a[0]+a[1],.002,tag);eq(a[1],.5*.025*a[0],tag);eq(a[3],a[2]+R*298.15/F*Math.log(.002/.008),tag);break;
 case 'UC-ADV4-I19':eq(a[0]+a[1],.01,tag);eq(a[2]+a[3],.005,tag);eq(a[1],.018*1500*a[0]/(1+1500*a[0]),tag);eq(a[3],.009*1500*a[2]/(1+1500*a[2]),tag);break;
 case 'UC-ADV4-A07':eq(a[0]*a[1]*.002/(1+a[1]*.002),.02,tag);eq(a[0]*a[1]*.006/(1+a[1]*.006),.04,tag);eq(a[2],a[0]*a[1]*.004/(1+a[1]*.004),tag);break;
 case 'UC-ADV4-A08':eq(a[0],.0014,tag);eq(a[1],R*298.15/F*Math.log((a[0]+.0012)/a[0]),tag);eq(a[2],R*298.15/F,tag);break;
 case 'UC-ADV4-A09':eq(a[0]/(1+.00002*a[0]),5200,tag);eq(a[1]/(1+.00002*a[1]),3400,tag);eq(a[3],a[0]/(a[0]+a[1]),tag);break;
 case 'UC-ADV4-A10':eq(10000*a[0]+2000*a[1]+1000*a[2],.35,tag);eq(2000*a[0]+9000*a[1]+3000*a[2],.27,tag);eq(1000*a[0]+3000*a[1]+8000*a[2],.17,tag);break;
 case 'UC-ADV4-A11':eq(5000*a[0]+2000*a[1],.9,tag);eq(5000*a[0]*Math.exp(-1)+2000*a[1]*Math.exp(-.4),.5*Math.exp(-1)+.4*Math.exp(-.4),tag);eq(a[2],a[0]*Math.exp(-1)+a[1]*Math.exp(-.4),tag);break;
 case 'UC-ADV4-A12':eq(a[0],.0005,tag);eq(a[1],.0006,tag);eq(a[2],.0008,tag);eq(a[0]+2*a[1]+a[2],.0025,tag);break;
 case 'UC-ADV4-A13':eq(a[0]+a[1],.015,tag);eq(a[1],140*.005*a[0],tag);eq(1000*a[2]/(1+140*.005+1000*a[2]),.9,tag);break;
 case 'UC-ADV4-A14':eq(F*(2*a[0]+a[1]),F*(2*.00008+.00005),tag);eq(F*(a[0]+2*a[1]),F*(.00008+2*.00005),tag);eq(a[2],a[0]/.1,tag);break;
 case 'UC-ADV4-A15':eq(a[0]*10+a[1],1.2,tag);eq(a[0]*30+a[1],4.1,tag);eq(a[0]*a[2]+a[1],5.25,tag);eq(a[3],5*a[2],tag);break;
 case 'UC-ADV4-A16':eq(a[0],.0025,tag);eq(a[1],.75*a[0],tag);eq(a[2],.25*a[0],tag);eq(a[3],.1*a[1],tag);break;
 case 'UC-ADV4-A17':eq(a[0],1/(1+1e-5/10**(-6)),tag);eq(a[1],4*a[0],tag);eq(.1*a[2]+.05*a[3],.0002,tag);eq(a[3],a[1]*a[2],tag);break;
 case 'UC-ADV4-A18':eq(a[0]*.005,1e-10,tag);eq(a[1],1000*.01*a[0],tag);eq(a[2],a[0]+a[1],tag);break;
 case 'UC-ADV4-A19':eq(a[0]+a[1],.01,tag);eq(.2*a[0]+.7*a[1],.004,tag);eq(a[2],a[0]/.01,tag);break;
 case 'UC-ADV4-O07':eq(a[0]/a[1],3.5,tag);eq(a[0]+a[1],1/12,tag);eq(a[2],.2*a[0]/(a[0]+a[1]),tag);break;
 case 'UC-ADV4-O08':eq(a[0],.12/.15,tag);eq(a[1],a[0]*(1-Math.exp(-.6)),tag);eq(a[2],a[1]*Math.exp(-.03),tag);break;
 case 'UC-ADV4-O09':eq(a[0],.55*1.2,tag);eq(a[1],a[0],tag);eq(a[2]+a[1],1.2/3+1/2,tag);eq(a[4],2*.55*a[0],tag);break;
 case 'UC-ADV4-O10':eq(a[0],.004*(1+.003/.002),tag);eq(a[1],.01*.006/(a[0]+.006),tag);eq(a[2],.01*.006/(.004+.006),tag);break;
 case 'UC-ADV4-O11':eq(a[0],Math.exp(5000/(R*298.15)),tag);eq(a[1],a[0]/(1+a[0]),tag);eq(a[2],1/(1+Math.exp(-5000/(R*330))),tag);break;
 case 'UC-ADV4-O12':{let p=Math.exp(-3000/(R*300)),q=Math.exp(-3000/(R*330));eq(a[0],p/(1+p),tag);eq(a[1],q/(1+q),tag);eq(a[2],1+1.7*a[0],tag);break;}
 case 'UC-ADV4-O13':{let alf=p=>1/(1+10**(p-4));eq(alf(3)*a[0]+(1-alf(3))*a[1],alf(3)*.08+(1-alf(3))*.02,tag);eq(alf(5)*a[0]+(1-alf(5))*a[1],alf(5)*.08+(1-alf(5))*.02,tag);eq(a[3],Math.log(2)/a[2],tag);break;}
 case 'UC-ADV4-O14':eq(2*200*a[0]**2,.01,tag);eq(a[1],30*.5*a[0],tag);eq(a[3],.2*.5*a[0],tag);eq(a[4],a[1]/(200*a[0]**2+a[3]),tag);break;
 case 'UC-ADV4-O15':eq(a[0]+10**(-.6),1,tag);eq(a[1],2e-6*300,tag);eq(a[2],a[1]*a[0],tag);eq(a[3],.35*a[2],tag);break;
 case 'UC-ADV4-O16':eq(a[0],.1,tag);eq(a[1],.06,tag);eq(a[2],a[0]/a[1],tag);eq(a[3],Math.exp((a[0]-a[1])*8),tag);break;
 case 'UC-ADV4-O17':eq(a[0],Math.PI*120/Math.SQRT2,tag);eq(a[2],1/a[0],tag);eq(a[3],a[0]/2,tag);break;
 case 'UC-ADV4-O18':eq(a[0]+a[1],1,tag);eq(a[0]-a[1],a[2],tag);eq(a[2],.8*Math.exp(-.5),tag);break;
 case 'UC-ADV4-P07':eq(a[0],315,tag);eq(a[1],48*Math.log(315/350)+48*Math.log(315/280),tag);eq(a[2],300*a[1],tag);break;
 case 'UC-ADV4-P08':eq(a[0],.003*.4/1.4,tag);eq(a[1],.001*2/3,tag);eq(a[2],a[0]+a[1],tag);break;
 case 'UC-ADV4-P09':eq(a[0],.001*Math.sqrt(.02/1e-9),tag);eq(a[1],1/Math.cosh(a[0]),tag);eq(a[3],Math.tanh(a[0])/a[0],tag);break;
 case 'UC-ADV4-P10':eq(a[0],.02*Math.sinh(F/(2*R*298.15)*a[1]),tag);eq(a[1]+a[2],.11,tag);eq(a[2],2*a[0],tag);break;
 case 'UC-ADV4-P11':eq(60*Math.log(a[0]/360)+100*Math.log(a[0]/300),0,tag);eq(a[1],60*360+100*300-160*a[0],tag);eq(a[2],(60*360+100*300)/160,tag);break;
 case 'UC-ADV4-P12':{let z=[.5,.3,.2],K=[2,.6,.1];eq(z.reduce((acc,zz,i)=>acc+zz*(K[i]-1)/(1+a[0]*(K[i]-1)),0),0,tag);for(let i=0;i<3;i++)eq(a[4+i],K[i]*a[1+i],tag);break;}
 case 'UC-ADV4-P13':eq(a[1],.03+a[0],tag);eq(a[2],.02-a[0],tag);eq(.1-R*298.15/F*Math.log(a[1]/a[2]),.09,tag);break;
 case 'UC-ADV4-P14':eq(a[0]*Math.tanh(a[0]/2),2,tag);eq(a[1],5000/(R*a[0]),tag);eq(a[2],R*a[0]**2*Math.exp(a[0])/(1+Math.exp(a[0]))**2,tag);break;
 case 'UC-ADV4-P15':eq(a[0],2*.04/1e8,tag);eq(a[1],16*Math.PI*.04**3/(3*1e16),tag);eq(a[3],Math.exp(-a[1]/(1.380649e-23*300)),tag);break;
 case 'UC-ADV4-P16':eq(Math.log(45/20),a[0]/R*(1/310-1/340),tag);eq(a[1],20*Math.exp(-a[0]/R*(1/325-1/310)),tag);eq(a[2],a[0]/325,tag);break;
 case 'UC-ADV4-P17':eq(a[0],(.015+2*.002)/3,tag);eq(a[1],.0002*.1*(1+1/2),tag);eq(a[2],Math.log(10)/a[1],tag);break;
 case 'UC-ADV4-P18':eq(a[0],1.00784*35.45/(1.00784+35.45),tag);eq(a[1],2.01410*35.45/(2.01410+35.45),tag);eq(a[4]**2,a[1]/a[0],tag);break;
 default:throw Error('No independent science reference case: '+tag);
 }
 independently_checked++;
}
console.log(JSON.stringify({ok:true,batch_new:50,subject_counts:{inorganic:13,analytical:13,organic:12,physical:12},independently_checked,expert_approved:0,publishable:0}));
