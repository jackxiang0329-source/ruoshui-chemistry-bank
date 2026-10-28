#!/usr/bin/env node
// v10 is intentionally WORK IN PROGRESS until 25 per subject, 100 total.
// New records MUST acquire a separate witness here before they pass CI.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const base=fileURLToPath(new URL('../editorial/advanced_integrated_v10/',import.meta.url));
const R=8.314462618;
const T=280,J=2400,q=Math.exp(-J/(R*T)),Z=1+3*q,p=3*q/Z;
const w={
 "UC-ADV10-I101":()=>[p,1-p,4*q/Z,J*p,J**2/(R*T*T)*p*(1-p)],
 "UC-ADV10-A101":()=>{
  const gamma=2.67522e8,g=.25,delta=.0025,Delt=.045,D=6e-10;
  const b=(gamma*g*delta)**2*(Delt-delta/3),signal=Math.exp(-b*D);
  return [b,signal,-Math.log(signal)/b,Math.exp(-4*b*D)];
 },
 "UC-ADV10-O98":()=>{
  const mixed=.30,p=.5,a=mixed/(2*p*(1-p)),same=(1-a)/2+a/4,n=.01;
  return [a,same,mixed,same,n*mixed,n*(1-a)];
 },

 "UC-ADV10-I102":()=>{
  const T=298.15,e0=.62,s=R*T/96485.33212,po=5,pr=8,ph=6.5;
  const expO=Math.pow(10,ph-po),expR=Math.pow(10,ph-pr);
  const protonO=1/(1+expO),protonR=1/(1+expR);
  const bare=e0+s*Math.log(Math.pow(10,-pr)/Math.pow(10,-po));
  return [bare,e0+s*Math.log(protonO/protonR),protonO,protonR,
    e0+s*Math.log((1+Math.pow(10,2-pr))/(1+Math.pow(10,2-po)))];
 },
 "UC-ADV10-I103":()=>{
  const nA=6.02214076e23,M=1.74756,e=1.602176634e-19,eps=8.8541878128e-12,r=.282e-9,k=9;
  const coulomb=nA*M*e**2/(4*Math.PI*eps*r),energy=-coulomb*(1-1/k);
  return [coulomb/1000,energy/1000,-energy/1000,4*.05844/(nA*(2*r)**3),1/k];
 },
 "UC-ADV10-A102":()=>{
  const B=340,an=15*.1,ah=5*.1,positions=[];
  for(const m of [-1,0,1])for(const p of [-.5,.5])positions.push(B-m*an-p*ah);
  positions.sort((a,b)=>a-b);
  return [positions.length,...positions,positions.reduce((a,b)=>a+b,0)/6,positions.at(-1)-positions[0]];
 },
 "UC-ADV10-A103":()=>{
  const t=8,t2=8.8,obs1=.25,obs2=.3,ext=.15,L=1.2;
  const s1=Math.sqrt(obs1*obs1-ext*ext),s2=Math.sqrt(obs2*obs2-ext*ext);
  const plates=(t/s1)**2;
  return [s1,(t/obs1)**2,plates,L/plates,s2,(t2-t)/(2*(obs1+obs2)),(t2-t)/(2*(s1+s2))];
 },
 "UC-ADV10-O99":()=>{
  const t1=298.15,t2=340,t3=320,k1=6,k2=4;
  const m=(Math.log(k2)-Math.log(k1))/(1/t2-1/t1);
  const H=-R*m,S=R*Math.log(k1)+H/t1;
  return [H/1000,S,(H-t1*S)/1000,Math.exp(-H/(R*t3)+S/R),m];
 },
 "UC-ADV10-O100":()=>{
  const alpha=2e4,L=100e-6,N=6.02214076e23,F0=1e20,phi=.15,x=alpha*L;
  const absorb=-Math.expm1(-x);
  const mean=(1-(1+x)*Math.exp(-x))/(alpha*absorb);
  return [absorb,phi*F0*absorb/N,mean*1e6,(-Math.expm1(-x/2))/absorb,x];
 },
 "UC-ADV10-P99":()=>{
  const N=1e21,saha=4e20,T=8000,k=1.380649e-23;
  const ratio=saha/N,x=2*ratio/(ratio+Math.sqrt(ratio*ratio+4*ratio));
  const ion=N*x,neutral=N*(1-x);
  return [x,ion,neutral,(N+ion)*k*T,ion*12*1.602176634e-19];
 },
 "UC-ADV10-P100":()=>{
  const T=300,V=1.8e-5,a=2e-4,k=5e-10,cp=75;
  const cpCv=T*V*a*a/k,cv=cp-cpCv;
  return [cv,cpCv,a/k,a*V,-k*V,cp*Math.log(310/300)];
 },
 "UC-ADV10-P98":()=>{
  const temp=320,M=.028,rad=1e-7,Dm=1.8e-5,eps=.35,tort=2.5,L=8e-4,cDiff=2.5;
  const DK=2*rad/3*Math.sqrt(8*R*temp/(Math.PI*M)),Dp=Dm*DK/(Dm+DK),De=eps/tort*Dp;
  const flux=De*cDiff/L,wrong=(eps/tort*Dm)*cDiff/L;
  return [DK,Dp,De,flux,wrong/flux];
 },

 "UC-ADV10-I104":()=>{
  const K=Math.exp(-12000/(R*1000));
  let lo=0,hi=1;
  for(let j=0;j<90;j++){const m=(lo+hi)/2;if(m*m-K*(1-m)*(2-m)>0)hi=m;else lo=m;}
  const x=(lo+hi)/2,terms=[1-x,x,x/2,1-x/2];
  const entropy=-((1-x)*Math.log(1-x)+x*Math.log(x)+x*Math.log(x/2)+(2-x)*Math.log((2-x)/2));
  assert.ok(Math.abs(x*x-K*(1-x)*(2-x))<1e-12);
  assert.ok(Math.abs((1-x)+x-1)<1e-12&&Math.abs(terms[2]+terms[3]-1)<1e-12);
  return [x,x/2,1-x/2,entropy,12000*x-R*1000*entropy];
 },
 "UC-ADV10-A104":()=>{
  // Independent Simpson quadrature, not the closed-form Laplace integrals in the solution.
  const a=[.65,.35],tau=[1.5,5],omega=2*Math.PI*.1;
  const N=100000,h=250/N;let sum=[0,0,0,0,0];
  for(let j=0;j<=N;j++){
   const t=j*h,y1=a[0]*Math.exp(-t/tau[0]),y2=a[1]*Math.exp(-t/tau[1]),y=y1+y2;
   const w=(j===0||j===N)?1:(j%2?4:2);
   const v=[y,y2,t*y,y*Math.cos(omega*t),y*Math.sin(omega*t)];
   for(let k=0;k<5;k++)sum[k]+=w*v[k];
  }
  sum=sum.map(v=>v*h/3);
  const [den,part,first,cos,sin]=sum,G=cos/den,S=sin/den;
  assert.ok(G*G+S*S<1&&part<den);
  return [part/den,first/den,G,S,S/(omega*G)];
 },
 "UC-ADV10-O101":()=>{
  // Independent RK4 propagation of four coupled material balances.
  const kr=.04,kR=.12,kS=.02,dt=.001,N=20000;
  const f=v=>[-(kR+kr)*v[0]+kr*v[1],kr*v[0]-(kS+kr)*v[1],kR*v[0],kS*v[1]];
  let v=[.5,.5,0,0];
  for(let j=0;j<N;j++){
   const a=f(v),b=f(v.map((z,i)=>z+dt*a[i]/2)),c=f(v.map((z,i)=>z+dt*b[i]/2)),d=f(v.map((z,i)=>z+dt*c[i]));
   v=v.map((z,i)=>z+dt*(a[i]+2*b[i]+2*c[i]+d[i])/6);
  }
  const [r,s,pr,ps]=v;
  assert.ok(Math.abs(r+s+pr+ps-1)<1e-10);
  assert.ok(v.every(z=>z>=0));
  return [r,s,pr,ps,(pr-ps)/(pr+ps),pr+ps];
 },
 "UC-ADV10-P101":()=>{
  // Solve the cubic by Newton iteration; the worked solution uses Donnan balance monotonicity.
  const cs=.1,CT=.15,a=Math.pow(10,-.5),T=298.15;
  let r=1.5;
  for(let i=0;i<25;i++){
   const f=a*cs*r**3+cs*r*r-(a*cs+CT)*r-cs;
   const df=3*a*cs*r*r+2*cs*r-a*cs-CT;
   const next=r-f/df;
   if(Math.abs(next-r)<1e-15){r=next;break;}r=next;
  }
  const na=cs*r,cl=cs/r,alpha=1/(1+a*r);
  assert.ok(r>1&&alpha>0&&alpha<1);
  assert.ok(Math.abs(na-cl-CT*alpha)<1e-12&&Math.abs(na*cl-cs*cs)<1e-12);
  return [r,na,cl,alpha,7-Math.log10(r),-R*T/F*Math.log(r),R*T*1000*(na+cl-2*cs)];
 },
};
const req={inorganic:{id:"I101",count:0},analytical:{id:"A101",count:0},organic:{id:"O98",count:0},physical:{id:"P98",count:0}};
const ids=new Set(),titles=new Set(),families=new Set();let all=0;
function near(a,b,label){
 assert.ok(Number.isFinite(a)&&Number.isFinite(b),label+' nonfinite');
 const scale=Math.max(Math.abs(a),Math.abs(b),1e-14);
 assert.ok(Math.abs(a-b)<=1e-9*scale,label+': '+a+' vs '+b);
}
for(const sub of Object.keys(req)){
 const rows=readFileSync(base+sub+'.jsonl','utf8').trimEnd().split('\n').map(JSON.parse);
 for(const x of rows){
  all++;req[sub].count++;
  assert.equal(x.subject,sub);assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
  assert.ok(x.answer_values.length>=4&&x.answer_values.every(Number.isFinite));
  assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,'awaiting_expert_review');
  assert.equal(x.novelty_review_status,'pending_cross_series_model_review');
  assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family));
  ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(w,x.id),'Missing independent witness for '+x.id+'; extend QA before adding another counted item');
  const results=w[x.id]();assert.equal(results.length,x.answer_values.length);
  results.forEach((v,i)=>near(v,x.answer_values[i],x.id+' answer '+i));
 }
 assert.ok(req[sub].count>=1&&req[sub].count<=25,'v10 sub count outside 1..25: '+sub);
}
assert.equal(Object.keys(w).length,all);
const distribution=Object.fromEntries(Object.entries(req).map(([k,v])=>[k,v.count]));
console.log(JSON.stringify({pass:true,series:'v10-work-in-progress',draft_count:all,distribution,independently_checked_full_answer_vectors:all,required_for_complete_volume:100,review:'pending human chemistry and cross-volume core model comparison',expert_approved:0}));
