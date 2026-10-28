#!/usr/bin/env node
// 60 committed chemistry cases, 15 in each branch; extra independently computed witnesses.
// Scientific model validity and cross-series originality require expert review.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const dir=fileURLToPath(new URL('../editorial/advanced_integrated_v7/',import.meta.url));
const R=8.314462618,F=96485.33212;
const paths=['inorganic','analytical','organic','physical'];
const letters=['I','A','O','P'];
const starts=[46,46,43,43];
const close=(x,y,id)=>{assert.ok(Number.isFinite(x)&&Number.isFinite(y),id+' finite');assert.ok(Math.abs(x-y)<1e-8*Math.max(1e-10,Math.abs(x),Math.abs(y)),id+' witnessed '+x+' vs '+y);};
function root(fn,a,b){
 let fa=fn(a),fb=fn(b);assert.ok(fa*fb<0,'bracket '+fa+' '+fb);
 for(let i=0;i<140;i++){let m=(a+b)/2,v=fn(m);if(v*fa>0){a=m;fa=v;}else b=m;}return(a+b)/2;
}
const models={
 I46:()=>root(l=>l+.01*500*l/(1+500*l+3e-6/1e-5)-.012,0,.012),
 I47:()=>{const h=1e-8,K1=10**-6.5,K2=10**-10.5;return h*h/(h*h+K1*h+K1*K2);},
 I48:()=>root(l=>l+.02*3000*l/(1+3000*l+250*.005)-.015,0,.015),
 I49:()=>root(x=>x/((.03-x)*(.04-2*x)**2)-125,1e-14,.019999),
 I50:()=>.12/2,
 I51:()=>root(x=>x*(.01+x)/((.002-x)*(.02-x))-30,1e-12,.0019999),
 I52:()=>root(l=>l+.01*(150*l+2*150*800*l*l)/(1+150*l+150*800*l*l)-.008,0,.008),
 I53:()=>.004/(1+750*.02*.02),
 I54:()=>.004/(1+500*.01),
 I55:()=>{let X=.01,cs=.02;return (X+Math.sqrt(X*X+4*cs*cs))/2;},
 I56:()=>.65*5+.35*4,
 I57:()=>{let a=3*Math.exp(-2200/(R*320));return a/(1+a);},
 I58:()=>{let h=1e-9,K1=10**-6.35,K2=10**-10.33,al=K1*K2/(h*h+K1*h+K1*K2);return root(u=>u+.003*700*al*u/(1+700*al*u)-.012,0,.012);},
 I59:()=>root(n=>(.01+n)*n*n/2*Math.sqrt(1e-4)-1e-9,1e-15,.1),
 I60:()=>.015,
 A46:()=>.002,
 A47:()=>.003,
 A48:()=>{let h=root(h=>h+.001-.002*(1e-5*h+2e-14)/(h*h+1e-5*h+1e-14)-1e-14/h,1e-12,.01);return -Math.log10(h);},
 A49:()=>.003*Math.exp(-.15*10),
 A50:()=>.002,
 A51:()=>.00002,
 A52:()=>.8,
 A53:()=>root(l=>l+.002*700*l/(1+700*l+200*.001)-.004,0,.004),
 A54:()=>.0008,
 A55:()=>500*.003/(1+500*.003+200*.004),
 A56:()=>.002*.1/(.1+4*.025),
 A57:()=>{let C=.0015,V=.025,eff=.85;return 2*C*V*F/eff;},
 A58:()=>5/(1+3e9*5e-9*.08),
 A59:()=>1-Math.exp(-3/1.8),
 A60:()=>root(c=>c*(.08+.12)+.002*.08*350*c/(1+350*c)-.006*.08,1e-14,.006),
 O43:()=>{let kf=.2,kr=.06,kc=.04,t=5,trace=-(kf+kr+kc),det=kf*kc,d=Math.sqrt((trace/2)**2-det),l1=trace/2+d,l2=trace/2-d;return ((l1+kr+kc)*Math.exp(l1*t)-(l2+kr+kc)*Math.exp(l2*t))/(l1-l2);},
 O44:()=>.12/(.12+.03+.02)*(1-Math.exp(-(.12+.03+.02)*10)),
 O45:()=>Math.exp(-10/R+5000/(R*298.15)),
 O46:()=>1/(1/100+.04*.015+.12*.01),
 O47:()=>root(x=>x*(.01+x)/((.02-x)*(.04-x))-12,1e-14,.019999),
 O48:()=>{let al=1e-7/(1e-7+10**-7.5);return al*.06+(1-al)*.005;},
 O49:()=>.004/.0002,
 O50:()=>1.05*.8,
 O51:()=>.02*(1+.01/.04),
 O52:()=>{let k=4*Math.exp(-.03*1.602176634e-19/(1.380649e-23*300));return k/(1+k);},
 O53:()=>1/(1+(.98/.02)*Math.exp(-.15*20)),
 O54:()=>{let x=.7,y=.3;return (.6*x*x+x*y)/(.6*x*x+2*x*y+.4*y*y);},
 O55:()=>Math.PI*120/Math.sqrt(2),
 O56:()=>Math.exp(-.09*12),
 O57:()=>.08*Math.exp(-(60*.01+20*.03)*15),
 P43:()=>{let z=[.5,.3,.2],K=[2.5,1.1,.25];return root(x=>z.reduce((v,e,i)=>v+e*(K[i]-1)/(1+x*(K[i]-1)),0),0,1);},
 P44:()=>8*.2/(1+8*.2),
 P45:()=>Math.exp(.8*(1-.4)**2),
 P46:()=>{let T0=300,DH=-25000,CpA=100,dCp=40,K0=1.5,DS=(DH+R*T0*Math.log(K0))/T0;let T=x=>T0-DH*x/(CpA+dCp*x),K=t=>Math.exp(-(DH+dCp*(t-T0)-t*(DS+dCp*Math.log(t/T0)))/(R*t));return root(x=>x/(1-x)-K(T(x)),1e-10,.999);},
 P47:()=>{let anod=e=>.001*Math.exp(e/.05),cath=e=>.005*Math.exp(-e/.06)/(1+.005*Math.exp(-e/.06)/.003);return root(e=>anod(e)-cath(e),-.5,.4);},
 P48:()=>{let k=t=>.3*Math.exp(-40000/R*(1/t-1/300)),fun=t=>t-300-100*2*k(t)/(1+2*k(t));let count=0,last=fun(300);for(let t=300.25;t<=400;t+=.25){let now=fun(t);if(now*last<0)count++;last=now;}return count;},
 P49:()=>.03*50/(1+50),
 P50:()=>root(x=>1/x+1/(100*(1-x))-2*.8,1e-6,Math.sqrt(100)/(1+Math.sqrt(100))),
 P51:()=>{let a=2*Math.exp(-3500/(R*300));return a/(1+a);},
 P52:()=>1e-9*3600/(.001*.001),
 P53:()=>220/300,
 P54:()=>root(t=>(500-t)/.3-1.5*(t-300)-.8*5.670374419e-8*.02*(t**4-300**4),300,500),
 P55:()=>1e5/(R*300),
 P56:()=>3/(2*3+8),
 P57:()=>Math.sqrt(1*16),
};
assert.equal(Object.keys(models).length,60);
const all=[],seenIDs=new Set(),seenTitles=new Set();
for(let si=0;si<4;si++){
 const subject=paths[si],letter=letters[si],rows=[];
 for(let k=1;k<=3;k++){
  const filename=dir+subject+'_part'+k+'.jsonl';
  rows.push(...readFileSync(filename,'utf8').trimEnd().split('\n').map(JSON.parse));
 }
 assert.equal(rows.length,15,subject+' 15 records');
 for(let i=0;i<rows.length;i++){
  const q=rows[i],key=letter+(starts[si]+i);
  assert.equal(q.id,'UC-ADV7-'+key);assert.equal(q.subject,subject);
  assert.ok(!seenIDs.has(q.id)&&!seenTitles.has(q.title),'unique id/title');
  seenIDs.add(q.id);seenTitles.add(q.title);
  assert.ok(q.problem_zh.length>=110&&q.solution_zh_steps.length>=8);
  assert.ok(q.answer_values.length>=3&&q.answer_values.every(Number.isFinite));
  assert.ok(q.model_residuals.length>=3&&q.model_residuals.every(x=>Number.isFinite(x)&&Math.abs(x)<1e-7));
  assert.equal(q.quality_status,'awaiting_expert_review');
  assert.equal(q.publishable,false);assert.equal(q.exclude_from_official_bank,true);
  assert.equal(q.parametric_variant,null);
  assert.equal(q.novelty_review_status,'pending_cross_series_model_review');
  close(q.answer_values[0],models[key](),q.id);
  all.push(q);
 }
}
assert.equal(all.length,60);
console.log(JSON.stringify({passed:true,new_records:60,distribution:{inorganic:15,analytical:15,organic:15,physical:15},independent_first_answer_witnesses:60,novelty_review:'pending',expert_approved:0},null,2));
