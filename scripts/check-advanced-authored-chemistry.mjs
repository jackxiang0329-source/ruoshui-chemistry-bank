#!/usr/bin/env node
// Strict machine gate for independently authored advanced chemistry, not expert approval.
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const source=fileURLToPath(new URL('../editorial/advanced_integrated_v2/advanced_authored_set01.jsonl',import.meta.url));
const data=readFileSync(source,'utf8').trimEnd().split('\n').map(JSON.parse);
const R=8.314462618,F=96485.33212,T=298.15,NA=6.02214076e23;
const c=(x,y,tag,tol=3e-8)=>assert.ok(Number.isFinite(x)&&Number.isFinite(y)&&Math.abs(x-y)<=tol*Math.max(Math.abs(y),Math.abs(x),1e-9),tag+': '+x+' vs '+y);
assert.equal(data.length,12);
const ids=new Set(),titles=new Set(),counts={inorganic:0,analytical:0,organic:0,physical:0};
for(const p of data){
  assert.match(p.id,/^UC-ADV2-[IAOP]0[1-3]$/);
  assert.ok(!ids.has(p.id));ids.add(p.id);
  assert.ok(!titles.has(p.title));titles.add(p.title);
  counts[p.subject]++;
  assert.ok(p.authoring.individually_authored && !p.authoring.numeric_parameter_variants && !p.authoring.third_party_question_text_copied);
  assert.equal(p.quality_status,'awaiting_expert_review');
  assert.equal(p.publishable,false);
  assert.equal(p.exclude_from_official_bank,true);
  assert.equal(p.verification.human_expert_approved,false);
  assert.ok(p.problem_zh.length>150 && p.solution_zh_steps.length>=7 && p.model_assumptions.length>40);
  assert.ok(p.answer_values.every(Number.isFinite) && p.answer_values.length===p.answer_units.length);
  assert.ok(p.verification.independent_equation_residuals.length>=3);
  assert.ok(p.verification.independent_equation_residuals.every(x=>Math.abs(x)<1e-7));
  const a=p.answer_values;
  switch(p.id){
   case 'UC-ADV2-I01':{
     const [L0,m0,n0,L,m,ml,n,nl,ppt]=a;
     c(m0*(1+400*L0),.010,p.id+' initial M');
     c(n0*(1+120*L0),.020,p.id+' initial N');
     c(L0+400*m0*L0+120*n0*L0,.025,p.id+' initial ligand');
     c(L+ml+nl,.025,p.id+' final ligand');
     c(m+ml+ppt,.010,p.id+' final M');
     c(n+nl,.020,p.id+' final N');
     c(m*1e-5,1e-8,p.id+' MS Ksp');
     assert.ok(n*1e-5<1e-6 && ppt>0 && m0*1e-5>1e-8);
     break;
   }
   case 'UC-ADV2-I02':{
     const [d,rho,por]=a;
     c(2+3+.7-2*(3-d),0,p.id+' electroneutrality');
     c(rho,(87.62+58.933+(3-d)*15.999)/(NA*(.389e-7)**3),p.id+' crystal mass');
     c((1-por)*rho,5.18,p.id+' density');break;
   }
   case 'UC-ADV2-I03':{
     const [x1,x2,H,S,t50]=a;
     c(24*x1,6,p.id+' 280 K spin');
     c(24*x2,14.4,p.id+' 320 K spin');
     c(Math.exp(S/R-H/(R*280)),x1/(1-x1),p.id+' K280');
     c(Math.exp(S/R-H/(R*320)),x2/(1-x2),p.id+' K320');
     c(H/S,t50,p.id+' midpoint');break;
   }
   case 'UC-ADV2-A01':{
     const [q,x,y]=a;
     c(q*(8000*x+2000*y),.2952,p.id+' A1');
     c(q*(3000*x+7000*y),.2132,p.id+' A2');
     c(q*(8000*(x+1e-5)+2000*y),.3608,p.id+' A1 spike');
     c(q*(3000*(x+1e-5)+7000*y),.2378,p.id+' A2 spike');break;
   }
   case 'UC-ADV2-A02':{
     const [CT,na,cl,ph,h2,ha,a2]=a;
     const h=10**(-ph),kw=1e-14;
     c(CT,h2+ha+a2,p.id+' carbon');
     c(na+h,cl+ha+2*a2+kw/h,p.id+' charge');
     c(ha*h/h2,10**-6.35,p.id+' first dissociation');
     c(a2*h/ha,10**-10.33,p.id+' second dissociation',1e-7);break;
   }
   case 'UC-ADV2-A03':{
     const [cu,ag,cuM,agM,qUseful,qLost]=a;
     c(cuM,cu/.1,p.id+' Cu assay');c(agM,ag/.1,p.id+' Ag assay');
     c(63.546*cu+107.8682*ag,.18161356,p.id+' mass');
     c(F*(2*cu+ag),qUseful,p.id+' Faraday');
     c(qUseful/(qUseful+qLost),.92,p.id+' current efficiency');break;
   }
   case 'UC-ADV2-O01':{
     const [t,A,B,C,D]=a,K=.14;
     c(A+B+C+D,1,p.id+' atom units');
     c(A,Math.exp(-K*t),p.id+' A decay');
     c(B,.11/(K-.045)*(Math.exp(-.045*t)-Math.exp(-K*t)),p.id+' B kinetics');
     c(.11*A,.045*B,p.id+' peak condition');
     c(D,.03/K*(1-A),p.id+' D flux');break;
   }
   case 'UC-ADV2-O02':{
     const [x1,x2,total,Afinal,Wfinal]=a;
     c(x1*(.05+x1),4*(1-x1)*(1.2-x1),p.id+' stage1 K');
     c((x1+x2)*(.05+x1-.15+x2),4*(1-x1-x2)*(1.2-x1-x2),p.id+' stage2 K');
     c(total,x1+x2,p.id+' extent');
     c(Afinal+total,1,p.id+' A mass');
     c(Wfinal,.05+total-.15,p.id+' H2O');break;
   }
   case 'UC-ADV2-O03':{
     const [finit,fend,flast,favg]=a,r1=.2,r2=2;
     const ff=f=>(r1*f*f+f*(1-f))/(r1*f*f+2*f*(1-f)+r2*(1-f)**2);
     c(finit,ff(.4),p.id+' feed initial');
     c(flast,ff(fend),p.id+' feed final');
     c(.4*favg+.6*fend,.4,p.id+' M1 balance');
     // Independent 4th order integration at a different step size.
     let f=.4,X=0,h=.0005;
     const der=(x,v)=>(v-ff(v))/(1-x);
     for(let i=0;i<800;i++){let k1=der(X,f),k2=der(X+h/2,f+h*k1/2),k3=der(X+h/2,f+h*k2/2),k4=der(X+h,f+h*k3);f+=h*(k1+2*k2+2*k3+k4)/6;X+=h;}
     c(f,fend,p.id+' independent RK4',1e-7);break;
   }
   case 'UC-ADV2-P01':{
     const [xi,temp,k]=a, h0=-40000, dcp=20,t0=298.15;
     c((200+20*xi)*(temp-t0)+xi*h0,0,p.id+' enthalpy',1e-6);
     c(k,xi/(1-xi),p.id+' equilibrium');
     const ratio=Math.exp(h0/R*(1/t0-1/temp)+dcp/R*(Math.log(temp/t0)+t0/temp-1));
     c(k,2.4*ratio,p.id+' vanthoff');break;
   }
   case 'UC-ADV2-P02':{
     const [c1,c2,n1,n2,frac]=a;
     const balance=c=>c+.2*(3*c+720*c*c);
     c(balance(c1),.01,p.id+' first balance');
     c(balance(c2),c1,p.id+' second balance');
     c(n1+n2+c2,.01,p.id+' total extraction');
     c(frac,1-c2/.01,p.id+' removal rate');break;
   }
   case 'UC-ADV2-P03':{
     const [final,dg,wmax]=a;
     c(3*final,.03,p.id+' NaCl mass');
     const exact=2*R*T*(.02*Math.log(final/.02)+.01*Math.log(final/.005));
     c(dg,exact,p.id+' Gibbs free energy');
     c(wmax,-dg,p.id+' maximum work');assert.ok(wmax>0);break;
   }
   default:throw Error('Unknown independent authored case '+p.id);
  }
}
assert.deepEqual(counts,{inorganic:3,analytical:3,organic:3,physical:3});
console.log(JSON.stringify({status:'PASS',advanced_originals:data.length,subjects:counts,approved:0,numeric_crosschecks:'12 multidimensional model residual sets'}));
