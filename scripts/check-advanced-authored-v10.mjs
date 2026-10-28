#!/usr/bin/env node
// v10 is intentionally WORK IN PROGRESS until 25 per subject, 100 total.
// New records MUST acquire a separate witness here before they pass CI.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const base=fileURLToPath(new URL('../editorial/advanced_integrated_v10/',import.meta.url));
const R=8.314462618;
const F=96485.33212;
const T=280,J=2400,q=Math.exp(-J/(R*T)),Z=1+3*q,p=3*q/Z;
const w={

 "UC-ADV10-I108":()=>{
  const Ksp=1.8e-10,beta=1.6e7,LT=.02,C0=.01;
  const bisect=(f,lo,hi)=>{let fl=f(lo);for(let j=0;j<90;j++){const mid=(lo+hi)/2;if(fl*f(mid)<=0)hi=mid;else {lo=mid;fl=f(mid)}}return (lo+hi)/2};
  const f=L=>{const c=(LT-L)/2,s=(-(C0-c)+Math.sqrt((C0+c)**2+4*Ksp))/2,a=Ksp/(C0+s);return c-beta*a*L*L};
  const L=bisect(f,.015,.02),c=(LT-L)/2,s=(-(C0-c)+Math.sqrt((C0+c)**2+4*Ksp))/2,a=Ksp/(C0+s);
  assert.ok(Math.abs(s-a-c)<1e-12&&Math.abs(L+2*c-LT)<1e-12);
  assert.ok(Math.abs(a*(C0+s)-Ksp)<1e-15&&Math.abs(c-beta*a*L*L)<1e-12);
  return [s,a,c,L,2*c/LT,s/(Ksp/C0)];
 },
 "UC-ADV10-A108":()=>{
  const x=[0,1,2,4],y=[170,221,268,370],sig=[1,2,3,4],w=sig.map(v=>1/(v*v));
  const S=w.reduce((a,b)=>a+b,0),mx=x.reduce((a,z,i)=>a+w[i]*z,0)/S,my=y.reduce((a,z,i)=>a+w[i]*z,0)/S;
  const vxx=x.reduce((a,z,i)=>a+w[i]*(z-mx)**2,0),vxy=x.reduce((a,z,i)=>a+w[i]*(z-mx)*(y[i]-my),0);
  const b=vxy/vxx,a=my-b*mx,c=(a-20)/b,vb=1/vxx,va=1/S+mx**2/vxx,cov=-mx/vxx;
  const u=Math.sqrt(va/b**2+(a-20)**2*vb/b**4-2*(a-20)*cov/b**3);
  const chi=y.reduce((z,yi,i)=>z+((yi-a-b*x[i])/sig[i])**2,0);
  assert.ok(b>0&&c>0&&u>0&&chi>=0);
  return [a,b,c,u,chi,-a/b];
 },
 "UC-ADV10-O105":()=>{
  const T=298.15,R=8.314462618,kB=1.380649e-23,h=6.62607015e-34;
  const z=1+Math.exp(-3000/(R*T)),w1=1/z,w2=1-w1,pref=kB*T/h;
  const rate=(w,bar)=>Math.exp(Math.log(w)+Math.log(pref)-bar/(R*T));
  const p1=rate(w1,75000),p2=rate(w2,70000),q1=rate(w1,80000),q2=rate(w2,78000);
  const kp=p1+p2,kq=q1+q2;
  assert.ok(kp>0&&kq>0&&Math.abs(w1+w2-1)<1e-12);
  return [w2,kp,kq,kp/(kp+kq),p2/kp,-R*T*Math.log(kp/pref)/1000];
 },
 "UC-ADV10-P105":()=>{
  const chi=3;let x=.075;
  for(let j=0;j<25;j++){const f=Math.log(x/(1-x))+chi*(1-2*x),df=1/x+1/(1-x)-2*chi;x-=f/df}
  const spin=(1-Math.sqrt(1-2/chi))/2;
  const g=z=>z*Math.log(z)+(1-z)*Math.log(1-z)+chi*z*(1-z);
  assert.ok(x>0&&x<spin&&Math.abs(Math.log(x/(1-x))+chi*(1-2*x))<1e-12);
  assert.ok(1/x+1/(1-x)-2*chi>0&&4-2*chi<0);
  return [x,1-x,spin,1-spin,4-2*chi,g(x)];
 },


 "UC-ADV10-I105":()=>{
  const K=1e-12,p1=.04,p2=.16,va=(K/(4*Math.sqrt(p1)))**(1/3),vb=(K/(4*Math.sqrt(p2)))**(1/3);
  return [va,2*va,vb,vb/va,-1/6];
 },
 "UC-ADV10-I106":()=>{
  const mu=.22,e=8.5,ry=13.605693,bohr=.0529177,t=300;
  const binding=ry/(e*e/mu),radius=bohr/(mu/e);
  return [binding,radius,binding/(R*t/96485.33212),binding*96485.33212/R,2*radius];
 },
 "UC-ADV10-I107":()=>{
  const surface=.25,g=1.8e8,Vunit=4e-29,T=320,Kb=1.380649e-23;
  const rr=2*surface/g,energy=16*Math.PI*surface**3/(3*g*g),n=4/3*Math.PI*rr**3/Vunit;
  return [rr/1e-9,energy,n,energy/(Kb*T),g*Vunit];
 },
 "UC-ADV10-A105":()=>{
  const c1=100,c2=400,t1=10.5,t2=20.5,tx=15.5;
  const a=(t2-t1)/(Math.sqrt(c2)-Math.sqrt(c1)),t0=t1-a*Math.sqrt(c1);
  const m=((tx-t0)/a)**2,deriv=2*(tx-t0)/(a*a);
  return [a,t0,m,deriv*.05,t0+a*Math.sqrt(900)];
 },
 "UC-ADV10-A106":()=>{
  const r1=30,r2=60,w1=.5,w2=.5,numberRatio=(w1/w2)*(r2/r1)**6;
  return [numberRatio,numberRatio/(numberRatio+1),1/(numberRatio+1),1/(w1/r1+w2/r2),w1*r1+w2*r2];
 },
 "UC-ADV10-A107":()=>{
  const d=1,l=2,theta=Math.PI/3;
  const normal=Math.exp(-d/l),tilted=Math.exp(-d/(l*Math.cos(theta)));
  return [normal,tilted,1-normal,1-tilted,-l*Math.log(normal),-l*Math.cos(theta)*Math.log(tilted)];
 },
 "UC-ADV10-O102":()=>{
  const x1=.01,x2=.03,y1=.02,y2=.04,Ki=x1*x2*(y2-y1)/(y1*x2-y2*x1);
  const kMax=y1*(Ki+x1)/x1,condition=.02,kobs=kMax*condition/(Ki+condition);
  return [Ki,kMax,kobs,Math.exp(-10*kobs),Math.log(2)/kobs];
 },
 "UC-ADV10-O103":()=>{
  const r12=2,I13=.125,I23=.5;
  const r13=r12/(I13**(1/6)),r23=r12/(I23**(1/6));
  const cosine=(r12*r12+r13*r13-r23*r23)/(2*r12*r13),angle=Math.acos(cosine);
  return [r13,r23,angle*180/Math.PI,(r12*r13/2)*Math.sin(angle),I13];
 },
 "UC-ADV10-O104":()=>{
  const k=[.2,.05,.1],residence=k.map(v=>1/v),cycle=residence.reduce((a,b)=>a+b,0);
  const weights=residence.map(x=>x/cycle),TOF=1/cycle;
  return [...weights,TOF,.002*TOF,cycle];
 },
 "UC-ADV10-P102":()=>{
  const R=8.314462618,T=310,dC=100,sigma=.85,dP=3e5,Lp=2e-12;
  const osmotic=R*T*dC,waterDriving=dP-sigma*osmotic;
  const flux=Lp*waterDriving,wrong=Lp*(dP-osmotic);
  return [osmotic,waterDriving,flux,sigma*osmotic,wrong,flux-wrong];
 },
 "UC-ADV10-P103":()=>{
  const alpha=.0002,Tc=300,Th=310,I=.5,R=2,K=.01;
  const Pi=alpha*Tc,Pel=Pi*I,Joule=.5*I*I*R,heat=K*(Th-Tc);
  return [Pi,Pel,Joule,heat,Pel-Joule-heat,alpha*(Th-Tc)];
 },
 "UC-ADV10-P104":()=>{
  const x=[.2,.3,.5],D12=1e-5,D13=2e-5,D23=1.5e-5,c=40;
  const A=x[1]/D12+(x[2]+x[0])/D13,B=x[0]*(1/D13-1/D12);
  const C=x[1]*(1/D23-1/D12),D=x[0]/D12+(x[2]+x[1])/D23;
  const rhs1=10*c,rhs2=-4*c,det=A*D-B*C;
  const n1=(D*rhs1-B*rhs2)/det,n2=(A*rhs2-C*rhs1)/det;
  return [n1,n2,-n1-n2,det,A,B,C,D];
 },

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
