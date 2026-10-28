#!/usr/bin/env node
// Independent source-file chemistry QA for third advanced series.
// Validates actual saved JSONL; does not confer human scientific approval.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const R=8.314462618,F=96485.33212,T=298.15;
const EQ=(v,w,label,tol=1e-8)=>{
 assert.ok(Number.isFinite(v)&&Number.isFinite(w),label+' nonfinite');
 assert.ok(Math.abs(v-w)<=tol*Math.max(Math.abs(v),Math.abs(w),1e-12),label+' '+v+' versus '+w);
};
const data=[];
for(const group of ['inorganic','analytical','organic','physical']){
 const rows=readFileSync(root+'editorial/advanced_integrated_v3/'+group+'.jsonl','utf8').trimEnd().split('\n').map(JSON.parse);
 assert.equal(rows.length,3,group+' group length');
 rows.forEach((row,i)=>{assert.equal(row.id,'UC-ADV3-'+({inorganic:'I',analytical:'A',organic:'O',physical:'P'}[group])+String(i+4).padStart(2,'0'));assert.equal(row.subject,group);});
 data.push(...rows);
}
assert.equal(data.length,12);
const names=new Set(),ids=new Set();
for(const p of data){
 assert.ok(!ids.has(p.id)&&!names.has(p.title),'Repeated title or id');
 ids.add(p.id);names.add(p.title);
 assert.equal(p.authorship.independent_original_model,true);
 assert.equal(p.authorship.parameter_variant,false);
 assert.equal(p.authorship.third_party_question_copied,false);
 assert.equal(p.publishable,false);
 assert.equal(p.exclude_from_official_bank,true);
 assert.equal(p.quality_status,'awaiting_expert_review');
 assert.equal(p.verification.human_approved,false);
 assert.ok(p.problem_zh.length>180&&p.solution_zh_steps.length>=7);
 assert.ok(p.answer_values.length===p.answer_units.length&&p.answer_values.every(Number.isFinite));
 assert.ok(p.verification.equation_residuals.length>=3&&p.verification.equation_residuals.every(x=>Math.abs(x)<1e-8));
 const a=p.answer_values;
 switch(p.id){
  case 'UC-ADV3-I04':{
   const [l,hl,m,ml,ml2,double,bound]=a;
   EQ(hl,l,p.id+' acid');
   EQ(m+ml+ml2,.012,p.id+' metal mass');
   EQ(hl+l+ml+2*ml2,.03,p.id+' ligand mass');
   EQ(ml,250*m*l,p.id+' K1');
   EQ(ml2,80*ml*l,p.id+' K2');
   EQ(double,ml2/.012,p.id+' double fraction');
   EQ(bound,(ml+2*ml2)/.03,p.id+' ligand binding');break;
  }
  case 'UC-ADV3-I05':{
   const [n,h,vac,sigma,fraction]=a,donors=1e17,acc=5e16,ni=1e10,e=1.602176634e-19;
   EQ(n-h,2*donors-acc,p.id+' charge neutrality');
   EQ(n*h,ni*ni,p.id+' mass-action np');
   EQ(vac,donors/4e22,p.id+' vacancy sites');
   EQ(sigma,e*(20*n+5*h),p.id+' conductivity');
   EQ(fraction,5*h/(20*n+5*h),p.id+' hole fraction');break;
  }
  case 'UC-ADV3-I06':{
   const [u,ph,smin,s11,s12]=a,K=1e-16,b=1e10;
   EQ(b*u**4,1,p.id+' optimum');
   EQ(ph,14+Math.log10(u),p.id+' pH');
   const s=o=>K/o**2+b*K*o**2;
   EQ(smin,s(u),p.id+' minimum');
   EQ(s11,s(1e-3),p.id+' pH11');
   EQ(s12,s(1e-2),p.id+' pH12');
   assert.ok(smin<s11&&smin<s12);break;
  }
  case 'UC-ADV3-A04':{
   const [c,k,q,spurious]=a,b=.015,d=.0008;
   const measured=s=>.015+30*(.0013+s)+500*(.0013+s)**2;
   for(const s of [0,d,2*d])EQ(b+k*(c+s)+q*(c+s)**2,measured(s),p.id+' measured spike '+s);
   assert.ok(c<.005&&c>0&&k>0&&spurious>.005);
   EQ(q,500,p.id+' quadratic response');break;
  }
  case 'UC-ADV3-A05':{
   const [n,c,eff,der]=a,ns=.0008,xnat=.2422,xsp=.98,xobs=(.2422*.002+.98*.0008)/.0028;
   EQ(c,n/.1,p.id+' initial volume');
   EQ(xobs,(xnat*n+xsp*ns)/(n+ns),p.id+' isotope conservation');
   EQ(4760,2e6*eff*(n+ns),p.id+' independent signal');
   EQ(der,-ns*(xsp-xnat)/(xobs-xnat)**2,p.id+' sensitivity');break;
  }
  case 'UC-ADV3-A06':{
   const [ca,cb,spec,det]=a;
   const alpha=(Ka,pH)=>Ka/(Ka+10**(-pH));
   const aa6=alpha(1e-5,6),bb6=alpha(1e-7,6),aa8=alpha(1e-5,8),bb8=alpha(1e-7,8);
   EQ(12000*aa6*ca+2000*bb6*cb,12000*aa6*3e-5+2000*bb6*2e-5,p.id+' obs1');
   EQ(3000*aa8*ca+10000*bb8*cb,3000*aa8*3e-5+10000*bb8*2e-5,p.id+' obs2');
   EQ(spec,3000*aa6*ca+10000*bb6*cb,p.id+' heldout');
   EQ(det,12000*aa6*10000*bb8-2000*bb6*3000*aa8,p.id+' det');break;
  }
  case 'UC-ADV3-O04':{
   const [time,conversion,tpeak,bpeak,rmax]=a,C=.082,B0=.002,k=5;
   const b=t=>C/(1+(.08/B0)*Math.exp(-k*C*t));
   EQ(b(time),.06,p.id+' targeted B');
   EQ(conversion,(.06-B0)/.08,p.id+' extent');
   EQ(b(tpeak),C/2,p.id+' rate peak');
   EQ(bpeak,C/2,p.id+' peak B');EQ(rmax,k*C*C/4,p.id+' max');break;
  }
  case 'UC-ADV3-O05':{
   const [H2,S2,k1,k2,t80,Y1,Y2]=a,KB=1.380649e-23,h=6.62607015e-34;
   const rate=(H,S,TT)=>KB*TT/h*Math.exp(S/R-H/(R*TT));
   const rat=(TT)=>rate(95000,-30,TT)/rate(H2,S2,TT);
   const raw=(TT)=>rate(95000,-30,TT)/rate(100000,-20,TT);
   for(const TT of [300,340])EQ(rat(TT),raw(TT),p.id+' Eyring ratio '+TT);
   EQ(k1,rate(95000,-30,320),p.id+' k1');
   EQ(k2,rate(H2,S2,320),p.id+' k2');
   EQ(Math.exp(-(k1+k2)*t80),.2,p.id+' first order conversion');
   EQ(Y1,.8*k1/(k1+k2),p.id+' product 1');
   EQ(Y2,.8*k2/(k1+k2),p.id+' product 2');
   EQ(Y1+Y2,.8,p.id+' mass');break;
  }
  case 'UC-ADV3-O06':{
   const [kr,ks,eep,t90,ee90]=a;
   const rn=t=>.5*Math.exp(-kr*t),sn=t=>.5*Math.exp(-ks*t);
   const r10=.5*Math.exp(-.12*10),s10=.5*Math.exp(-.03*10),X=1-r10-s10;
   EQ(rn(10),r10,p.id+' R');
   EQ(sn(10),s10,p.id+' S');
   EQ(eep,(sn(10)-rn(10))/X,p.id+' ee_product');
   EQ(rn(t90)+sn(t90),.1,p.id+' target conversion');
   EQ(ee90,(sn(t90)-rn(t90))/.9,p.id+' ee 90pct');break;
  }
  case 'UC-ADV3-P04':{
   const [az,paz,pb,yb,curvature]=a,A=1.5,pa=80,pbSat=40;
   const ga=x=>Math.exp(A*(1-x)**2),gb=x=>Math.exp(A*x*x),bp=x=>x*ga(x)*pa+(1-x)*gb(x)*pbSat;
   EQ(ga(az)*pa,gb(az)*pbSat,p.id+' azeotrope equality');
   EQ(paz,bp(az),p.id+' azeo pressure');
   EQ(pb,bp(.4),p.id+' bubble pressure');
   EQ(yb,.4*ga(.4)*pa/bp(.4),p.id+' vapor fraction');
   EQ(curvature,1/az+1/(1-az)-2*A,p.id+' g curvature');
   assert.ok(az>0&&az<1&&curvature>0);break;
  }
  case 'UC-ADV3-P05':{
   const [x100,x50,y100,y50]=a,K=.5;
   const Q=(x,P)=>4*x*x*(6-2*x)**2/(27*(1-x)**4*P*P);
   EQ(Q(x100,100),K,p.id+' K100');
   EQ(Q(x50,50),K,p.id+' K50');
   EQ(y100,2*x100/(6-2*x100),p.id+' y100');
   EQ(y50,2*x50/(6-2*x50),p.id+' y50');
   assert.ok(x100>x50&&x100<1&&x50>0);break;
  }
  case 'UC-ADV3-P06':{
   const [we,wxe,TT,nu02,nu23]=a;
   const G=v=>we*(v+.5)-wxe*(v+.5)**2;
   EQ(G(1)-G(0),1950,p.id+' fundamental');
   EQ(G(2)-G(1),1900,p.id+' hotband');
   EQ(2*Math.exp(-1.438776877*1950/TT),.08,p.id+' Boltzmann');
   EQ(nu02,G(2)-G(0),p.id+' overtone');
   EQ(nu23,G(3)-G(2),p.id+' hotband23');break;
  }
  default:throw Error('Unregistered third-series high-level chemistry case '+p.id);
 }
}
console.log(JSON.stringify({passed:true,new_high_difficulty:12,distinct_models:12,each_discipline:3,expert_approved:0},null,2));
