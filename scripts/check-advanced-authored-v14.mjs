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
"UC-ADV14-A202":()=>{let nS=.01/100,nA=nS*(8/2)/(15/3),mass=nA*200*1000,naive=nS*(8/15)*200*1000;return[nS,nA,mass,mass/20,20-mass,8/2,15/3,(8/2)/(15/3),naive,naive/20]},
"UC-ADV14-A203":()=>{let det=10000*5000-30000*25000;let a=(.25*5000-30000*.1)/det,b=(10000*.1-.25*25000)/det;let pKa=7-Math.log10(b/a),fb=1/(1+10**(pKa-8)),acid=1e-5*(1-fb),base=1e-5*fb;return[a,b,b/(a+b),pKa,a/b,fb,10000*acid+30000*base,25000*acid+5000*base,base,a+b]},
"UC-ADV14-A204":()=>{let CL=1e-5/(.01+.5*.02),CG=.5*CL,nl=CL*.01,ng=CG*.02;return[CL,CG,nl,ng,ng/1e-5,CG*.001,CG/CL,CG/CL-1,.02/(.01+.02),ng+nl]},
"UC-ADV14-O198":()=>{let m=.7,r=.3;return[m*m,m*r,r*m,r*r,2*m*r,(m/r)**2,(m+r)**2,1000*m,1000*m*r,1000*r]},
"UC-ADV14-O199":()=>{let S=(-10000+5000)/298.15,G=T=>-10000-T*S,rate=T=>Math.exp(-G(T)/(R*T)),a=rate(298.15),b=rate(350),p=a/(1+a),q=b/(1+b);return[S,G(298.15)/1000,G(350)/1000,a,b,p,q,2*p-1,2*q-1,(2*q-1)-(2*p-1)]},
"UC-ADV14-O200":()=>{let c=.8*.01,n=.7/c,actual=n*114.14,naive=.7/.01*114.14;return[c,.7,n,.3,actual,c,naive,naive/actual-1,.9/c,.9/c*114.14]},
"UC-ADV14-P198":()=>{let a=.1*10/(1+.1*10),b=.1*.5/(1+.1*.5),c=10/11,d=.5/1.5,lo=a+2*b,hi=c+2*d;return[a,b,a,2*b,lo,c,d,hi,hi/3,hi/lo]},
"UC-ADV14-P199":()=>{let f=T=>{let x=300/T,p=1/(1+Math.exp(x)),z=1+Math.exp(-x),U=R*300*p,C=R*x*x*p*(1-p);return[z,p,U,C]},a=f(150),b=f(300);return[a[0],b[0],a[1],b[1],a[2],b[2],a[3],b[3],R*300/1000,a[3]/b[3]]},
"UC-ADV14-P200":()=>{let r1=.01/.2,r2=.02/1,q=50/(r1+r2);return[r1,r2,r1+r2,q,q,q*r1,q*r2,350-q*r1,r1/r2,q*300]}
,
"UC-ADV14-I205":()=>{const k=T=>5*Math.exp(60/R-18000/(R*T));let a=k(250),b=k(300),fa=a/(1+a),fb=b/(1+b);return[a,b,fa,fb,Math.sqrt(24*fa),Math.sqrt(24*fb),18000/(60+R*Math.log(5)),b/a]},
"UC-ADV14-I206":()=>{let ca=1e10*.35*2e-6*1e-9,mg=1e8*.35*5e-5*1e-9;return[ca,mg,1e-9+ca+mg,2e-6+ca,5e-5+mg,ca/(2e-6+ca),mg/(5e-5+mg),ca/mg,.35e-9]},
"UC-ADV14-I207":()=>{let x=.08,n=.5,v=n*x;return[2*x,1-2*x,4-2*x,2-x,140.116+(2-x)*15.999,n*2*x,v,v/2,2*v*F]},
"UC-ADV14-I208":()=>{let E=.521-.153,K=Math.exp(F*E/(R*298.15)),t=.02/(1+Math.sqrt(1+8*K*.01)),x=(.01-t)/2;return[E,Math.log10(K),K,t,x,2*x/.01,x,63.546*x]},
"UC-ADV14-A205":()=>{let ns=1*1.3*(4-.75)/(5*(.75-.3)),ls=ns/1.3,hs=ns-ls,lsp=.2,hsp=.8;return[ns,ls,hs,lsp,hsp,ls+lsp,hs+hsp,ns*.1,(hs+hsp)/(ls+lsp)]},
"UC-ADV14-A206":()=>{let x=.02,y=.01,b=.005,arr=[2*x+y+b,x+3*y+b,3*x+2*y+b];return[x,y,b,...arr,x/y,4*x+y+b,Math.max(...arr.map((a,i)=>Math.abs(a-[.055,.055,.085][i])))]},
"UC-ADV14-A207":()=>{let a=600,b=400,i4=a*Math.exp(-2)+b*Math.exp(-.5),i8=a*Math.exp(-4)+b*Math.exp(-1),area=a*2+b*8;return[a,b,i4,i8,area,b*8/area,area/1000,Math.log(a/b)/(.5-.125),a/1000]},
"UC-ADV14-A208":()=>{let a=F*.2*1e-6*Math.sqrt(1e-5/Math.PI),q=2*a;return[a,a/2,q,2*q,2,2,Math.PI*(a/(F*.2*1e-6))**2,q*2/F,2*q/4]},
"UC-ADV14-O201":()=>{let f=.4,g=.6,r1=.5,r2=2,F1=(r1*f*f+f*g)/(r1*f*f+2*f*g+r2*g*g),F2=1-F1;return[F1,F2,F1/F2,F1/f,f-F1,f+.01*(f-F1),F2/F1,F1-f]},
"UC-ADV14-O202":()=>{let r=.5*Math.exp(-.12*8),s=.5*Math.exp(-.03*8),pr=.5-r,ps=.5-s;return[r,s,1-r-s,(s-r)/(s+r),(pr-ps)/(pr+ps),4,pr+ps,pr,ps]},
"UC-ADV14-O203":()=>{let g=(h,s,t)=>h-t*s/1000,a=g(55,-80,298.15),b=g(58,-65,298.15),c=g(55,-80,350),d=g(58,-65,350),q=Math.exp(-(a-b)*1000/(R*298.15)),p=Math.exp(-(c-d)*1000/(R*350));return[a,b,q,q/(1+q),c,d,p,(-3000)/(-15),p/(1+p)]},
"UC-ADV14-O204":()=>{let ri=2*.6*1e-5*.01,rad=Math.sqrt(ri/(2e7)),rp=1000*2*rad,nu=rp/ri;return[ri,rad,rp,nu,nu,2*nu,.1/rp,ri/2]},
"UC-ADV14-P201":()=>{let er=4+76/2,el=76/2;return[er,el,el/er,Math.hypot(er,el),4+76/5,76*2/5,1e9,1e9/(2*Math.PI*1e6),38]},
"UC-ADV14-P202":()=>{let gamma=.03,dg=-3e7,r=-2*gamma/dg,area=4*Math.PI*r*r,vol=4*Math.PI*r**3/3,G=x=>4*Math.PI*x*x*gamma+4*Math.PI*x**3*dg/3,bar=G(r);return[r*1e9,area,vol,area*gamma,vol*dg,bar,bar/(1.380649e-23*300),G(1e-9),G(3e-9)]},
"UC-ADV14-P203":()=>{let B=.62*F*.1*(1e-5)**(2/3)*(.01)**(-1/6)*1e-6,l1=B*10,l2=B*20,k=20e-6,o1=k*l1/(k+l1),o2=k*l2/(k+l2);return[l1,l2,o1,o2,o2/o1,o1/l1,1/k,l2/l1]},
"UC-ADV14-P204":()=>{let B=-1e-4,T=300,p=1e6,z1=1+B*p/(R*T),z2=1+B*2*p/(R*T),phi=Math.exp(B*p/(R*T));return[z1,z2,R*T/p+B,phi,phi, B*p,B,B/(R*T)]},
"UC-ADV14-I209":()=>{let a=1+1e8*.001,b=1+1e5*.001,d=R*298.15/F*Math.log(b/a);return[a,b,1/a,1/b,.77+d,d,.77+d,a-1,b-1]},
"UC-ADV14-I210":()=>{let y=.04,v=y/2,z=1-y-v;return[z,y,v,z+y,2*z+3*y,2,z*65.38+y*26.982+15.999,.25*y,.25*v]},
"UC-ADV14-I211":()=>[10,2.5,2,2,9,2.25,1,3,F],
"UC-ADV14-I212":()=>{let e=6.02214076e23*6.62607015e-34*299792458*100*18000/1000;return[18000,1000,1000/1200,1e7/18000,1e7/33000,e,-1.2*e,3,Math.sqrt(15)]},
"UC-ADV14-A209":()=>[1,2,1,2,Math.sqrt(.5),Math.sqrt(2/3),-.5,1.5,7],
"UC-ADV14-A210":()=>{let a=10**(-.3),b=10**(-.15);return[1000*a,500*b,a,b,2*a/b,2,1/a,1-a,1-b]},
"UC-ADV14-A211":()=>{let a=t=>.2+.8*Math.exp(-.5*t),x=a(2),y=a(4);return[.2,.8,x,1-x,y,1-y,Math.log(2)/.5,.4,.4*x-.1*(1-x)]},
"UC-ADV14-A212":()=>{let cu=80/(2*F),ni=10/(2*F);return[80,10,cu,ni,cu*63.546,ni*58.6934,cu*63.546+ni*58.6934,.9,10,90/F]},
"UC-ADV14-O205":()=>{let c=.01/13,cs=2*c,cp=10*c,v0=.01*2/3;return[c,cs,cp,c/.01,cs/.01,cp/.01,cs,v0,cs/v0,.01-c-cs-cp]},
"UC-ADV14-O206":()=>{let p=.8,x5=(1-p)*p**4,n=p**9,m=n*(10-9*p);return[1/(1-p),(1+p)/(1-p),1+p,x5,5*x5*(1-p),n,m,p/(1-p)**2,m/n]},
"UC-ADV14-O207":()=>{let a=2,b1=.5,b4=2,r=b=>.01*a*b/(3+b)**2,x=r(b1),y=r(b4);return[x,y,b1/3.5,a/3.5,b4/5,a/5,y/x,1-2*b1/3.5,6,.01*a/12]},
"UC-ADV14-O208":()=>{let k=p=>10/(1+10**(6-p)+10**(p-8)),v=k(7);return[k(6),v,k(8),7,v,v/10,k(6)/v,k(8)/v,.1]},
"UC-ADV14-P205":()=>{let eps=78.5*8.8541878128e-12,k=1.380649e-23,T=298.15,e=1.602176634e-19,N=6.02214076e23,l=I=>Math.sqrt(eps*k*T/(2*N*e*e*1000*I)),a=l(.1),b=l(.01),bj=e*e/(4*Math.PI*eps*k*T);return[a*1e9,b*1e9,b/a,1/a,1/b,bj*1e9,a/bj,b/bj]},
"UC-ADV14-P206":()=>{let t0=298.15,t=350,h=-50000-20*(t-t0),s=-100-20*Math.log(t/t0),g=h-t*s,g0=-50000+t0*100,k=Math.exp(-g/(R*t)),k0=Math.exp(-g0/(R*t0));return[h/1000,s,g/1000,k,g0/1000,k0,k/k0,-R*t*Math.log(k)-g]},
"UC-ADV14-P207":()=>{let t=100*10e-6,q=10e-6*.1;return[t,.1/100,.1/100*Math.exp(-1),q*(1-Math.exp(-1)),q,.5*10e-6*.1**2,.5*10e-6*.1**2,t*Math.log(10),Math.exp(-1)]},
"UC-ADV14-P208":()=>{let x=.1,cs=.05,p=(x+Math.sqrt(x*x+4*cs*cs))/2,m=cs*cs/p,d=p+m-2*cs;return[p,m,p/m,p+m,d,R*298.15*1000*d,R*298.15/F*Math.log(cs/p),p-m-x,p*m-cs*cs]},
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
