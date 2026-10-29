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

"UC-ADV10-I117":()=>{const f=[.2,.65,.15],lam=[590,615,700],phi=.72,t=.0015,hc=1239.841984;const total=1/t,kr=phi*total,nr=total-kr,aa=f.map(x=>kr*x),e=f.reduce((s,x,i)=>s+x*hc/lam[i],0);assert.ok(Math.abs(aa.reduce((a,b)=>a+b,0)-kr)<1e-12);return [kr,nr,...aa,1000/kr,e,phi*e,phi*e/(hc/395),phi*1e18,phi*1e18*e*1.602176634e-19];},
"UC-ADV10-A117":()=>{const r=.801761423674483,q=1.508813572701714,cos=Math.sqrt(3)/2,ex=(1-.5/r)/cos,es=Math.exp(-.5),cx=q*10*(1-es)/(3*(1-ex)),s30=.5*(1-ex)/(1-ex*cos),sopt=(1-ex)/Math.sqrt(1-ex*ex);assert.ok(ex>0&&ex<1&&Math.abs(3*cx*(1-ex)/(10*(1-es))-q)<1e-12);return [ex,-1/Math.log(ex),cx,Math.acos(ex)*180/Math.PI,s30/sopt,q*10/3,(1-ex)/(1-es),.5/(1-ex*cos),3*cx*(1-ex)/(10*(1-es))];},
"UC-ADV10-O114":()=>{const m={A:71.03711,G:57.02146,S:87.03203,V:99.06841,K:128.09496},H=1.007276466621,water=18.010564684,obsB=[72.04439,129.06585,216.09788,315.16629],obsY=[147.11280,246.18121,333.21324,390.23470];const find=x=>Object.entries(m).find(([k,v])=>Math.abs(v-x)<.000015)?.[0];const N=[find(obsB[0]-H),...obsB.slice(1).map((x,i)=>find(x-obsB[i]))],C=[find(obsY[0]-water-H),...obsY.slice(1).map((x,i)=>find(x-obsY[i]))];assert.equal(N.join("")+C[0],"AGSVK");assert.equal(C.join(""),"KVSG");let sb=0,sy=0;const b=[],y=[];for(const a of N.join("")+C[0]){sb+=m[a];b.push(sb+H)}for(const a of C.join("")+"A"){sy+=m[a];y.push(sy+water+H)}for(let i=0;i<4;i++){assert.ok(Math.abs(b[i]-obsB[i])<.0000051&&Math.abs(y[i]-obsY[i])<.0000051);assert.ok(Math.abs(b[i]+y[3-i]-(sb+water+2*H))<1e-9)}return [...b.slice(0,4),...y.slice(0,4),sb+water,(sb+water+2*H)/2,1.0033548378/2,b[2]+y[1]];},
"UC-ADV10-P114":()=>{const rt=.008314462618*300,mf=4.2,mr=-1.8,d=(mf-mr)/2,v=(mf+mr)*rt,s=Math.sqrt(v),g=(w,m)=>Math.exp(-((w-m)**2)/(2*v))/Math.sqrt(2*Math.PI*v),ratio=g(0,mf)/g(0,-mr);assert.ok(Math.abs(Math.log(g(6,mf)/g(-6,mr))-(6-d)/rt)<1e-12);return [d,mf-d,mr+d,v,s,mf-v/(2*rt),mr-v/(2*rt),d,ratio,(mf-d)/rt,mf-d];},

"UC-ADV10-I116":()=>{
 const CM=.012,CL=.055,b1=75,b2=900;
 const species=l=>{const D=1+b1*l+b2*l*l;return [CM/D,CM*b1*l/D,CM*b2*l*l/D];};
 let lo=0,hi=CL;
 for(let j=0;j<110;j++){const l=(lo+hi)/2,[m,x,y]=species(l);if(l+x+2*y>CL)hi=l;else lo=l;}
 const l=(lo+hi)/2,[m,x,y]=species(l),bound=x+2*y;
 assert.ok(l>0&&l<CL&&Math.abs(m+x+y-CM)<1e-14&&Math.abs(l+bound-CL)<1e-14);
 assert.ok(Math.abs(2*(m+x+y)-2*CM)<1e-14);
 return [l,m,x,y,y/CM,bound/CM,bound,l/CL,2*CM];
},
"UC-ADV10-A116":()=>{
 const E=[[8000,2000],[1000,12000]],D=E[0][0]*E[1][1]-E[0][1]*E[1][0];
 const invert=(a,b)=>[(E[1][1]*a-E[0][1]*b)/D,(E[0][0]*b-E[1][0]*a)/D];
 const pH=[5.9,7.1],pKa=6.4,C=8e-5,obs=pH.map(ph=>{const frac=1/(1+10**(pKa-ph));return E.map(row=>C*(row[0]*(1-frac)+row[1]*frac));});
 const x=obs.map(([a,b])=>invert(a,b)),tot=x.map(z=>z[0]+z[1]),frac=x.map(z=>z[1]/(z[0]+z[1])),pks=x.map((z,i)=>pH[i]-Math.log10(z[1]/z[0]));
 assert.ok(Math.abs(tot[0]-tot[1])<1e-14&&Math.abs(pks[0]-pks[1])<1e-12&&x.flat().every(z=>z>0));
 const mid=E.map(row=>tot[0]*(row[0]+row[1])/2);
 return [tot[0],frac[0],frac[1],pks[0],...obs[0],...obs[1],...mid,obs[1][1]/obs[1][0]];
},
"UC-ADV10-O113":()=>{
 const m0=.3,m4=.15,donorNMR=.6,sum=1+m4-m0,discr=Math.sqrt(sum*sum-4*m4),roots=[(sum+discr)/2,(sum-discr)/2];
 const d=roots.find(z=>Math.abs(z-donorNMR)<1e-12),a=m4/d,onlyD=d*(1-a),onlyA=(1-d)*a,m2=onlyD+onlyA;
 assert.ok(d>0&&a>0&&Math.abs((1-d)*(1-a)-m0)<1e-14);
 assert.ok(Math.abs(m0+m2+m4-1)<1e-14&&Math.abs(2*m2+4*m4-2*(d+a))<1e-14);
 return [d,a,m0,m2,m4,onlyD,onlyA,2*m2+4*m4,onlyD/m2,d*(1-d)];
},
"UC-ADV10-P113":()=>{
 const R=8.314462618,a=.364,b=4.27e-5,T=300,P=1e6,Cp=37;
 const eos=v=>R*T/(v-b)-a/(v*v)-P;
 let lo=.001,hi=.01;for(let j=0;j<110;j++){const m=(lo+hi)/2;if(eos(m)>0)lo=m;else hi=m;}
 const v=(lo+hi)/2,tc=8*a/(27*R*b),pc=a/(27*b*b),vc=3*b;
 const h=1e-8,dp=(eos(v+h)-eos(v-h))/(2*h),dtd=R/(v-b)/(-dp),mu=(T*dtd-v)/Cp;
 assert.ok(v>b&&dp<0&&Math.abs(eos(v))<1e-6&&mu>0);
 return [tc,pc/1e6,vc*1000,v*1000,P*v/(R*T),dp/1e9,mu*1e6,2*a/(R*b)*(1-b/v)**2,2*a/(R*b)];
},


"UC-ADV10-I115":()=>{
 const raw=[2,12,5],fac=[.8,1.2,1],q=raw.map((v,j)=>v/fac[j]),z=q.reduce((a,b)=>a+b,0),f=q.map(v=>v/z),n=f.map(v=>70*v),nbo=2*n[0]+n[1],bo=(2*n[0]+3*n[1]+4*n[2])/2;
 assert.ok(Math.abs(nbo-60)<1e-12&&Math.abs(nbo+bo-170)<1e-12);
 return [...f,...n,nbo,bo,2*bo/70,bo/170,-f.reduce((s,v)=>s+v*Math.log(v),0)];
},
"UC-ADV10-A115":()=>{
 const y=[19.8148148148148,28.0088495575221,35.5084745762712],z=y.map(v=>v-5),r=z[1]/z[0];
 let lo=1e-10,hi=2;for(let j=0;j<100;j++){const m=(lo+hi)/2;if(.1/(m*(1+.5*(m+.1)))>r-1)lo=m;else hi=m;}
 const c=(lo+hi)/2,s=z[0]*(1+.5*c)/c,p=a=>5+s*(c+a)/(1+.5*(c+a));
 assert.ok(Math.abs(p(.2)-y[2])<1e-10&&Math.abs(.05*(c+.2)-(.05*c+.01))<1e-12);
 return [c,5*c,s,p(0),p(.1),p(.2),c+.2,1/(1+.5*(c+.2)),s/(1+.5*(c+.2))**2];
},
"UC-ADV10-O112":()=>{
 const R=8.314462618,kB=1.380649e-23,h=6.62607015e-34,t1=298.15,t2=318.15;
 const DH=-R*(Math.log(500/t2)-Math.log(80/t1))/(1/t2-1/t1),DS=R*(Math.log(80/t1)-Math.log(kB/h)+DH/(R*t1));
 const k=t=>kB*t/h*Math.exp(DS/R-DH/(R*t)),kc=Math.PI*120/Math.SQRT2;
 let lo=t1,hi=t2;for(let j=0;j<90;j++){const m=(lo+hi)/2;if(k(m)<kc)lo=m;else hi=m;}
 const tc=(lo+hi)/2;assert.ok(tc>t1&&tc<t2&&Math.abs(k(tc)-kc)<1e-9);
 return [DH/1000,DS,DH-t1*DS,kc,tc,k(308.15),1/80,k(t2)];
},
"UC-ADV10-P112":()=>{
 const R=8.314462618,F=96485.33212,a=F/(2*R*298.15),b=R*298.15/F,eta=.08,conc=i=>b*Math.log(1/(1-i/10)),fn=i=>i-4*Math.sinh(a*(eta-conc(i)));
 let i=5;for(let j=0;j<30;j++){const x=a*(eta-conc(i)),df=1+2*Math.cosh(x)/(10*(1-i/10)),next=i-fn(i)/df;assert.ok(next>0&&next<10);if(Math.abs(next-i)<1e-14){i=next;break;}i=next;}
 const ec=conc(i),ea=eta-ec,der=4*a*Math.cosh(a*ea)/(1+2*Math.cosh(a*ea)/(10*(1-i/10)));
 assert.ok(Math.abs(fn(i))<1e-11&&Math.abs(ec+ea-eta)<1e-12);
 return [i,ec,ea,1-i/10,i*1e-3/F,i*eta*1e-3,der,4*Math.sinh(a*eta)];
},

"UC-ADV10-I114":()=>{
 const a=.04,K=1e-4,solve=p=>{let lo=a/2,hi=1;for(let j=0;j<110;j++){let v=(lo+hi)/2;if(v*(2*v-a)**2*Math.sqrt(p)/(1-v)>K)hi=v;else lo=v;}return (lo+hi)/2;};
 const v1=solve(1),v2=solve(.01),n1=2*v1-a,n2=2*v2-a;
 for(const [v,n,p] of [[v1,n1,1],[v2,n2,.01]]){assert.ok(v>a/2&&v<1&&n>0);assert.ok(Math.abs(2*v-n-a)<1e-12);assert.ok(Math.abs(v*n*n*Math.sqrt(p)/(1-v)-K)<1e-12);}
 const slope=p=>{const h=1e-4;return (Math.log(solve(p*Math.exp(h)))-Math.log(solve(p*Math.exp(-h))))/(2*h);};
 return [v1,n1,v2,n2,n2/n1,v2-v1,slope(1),slope(.01)];
},
"UC-ADV10-A114":()=>{
 const q1=.1,q2=.2,t0=4,t1=10/3,t2=20/7,R1=1.8,R2=2.8;
 const kd1=(t0/t1-1)/q1,kd2=(t0/t2-1)/q2;assert.ok(Math.abs(kd1-kd2)<1e-12);
 const ks1=(R1/(t0/t1)-1)/q1,ks2=(R2/(t0/t2)-1)/q2;assert.ok(Math.abs(ks1-ks2)<1e-12&&ks1>0&&kd1>0);
 const tau=q=>t0/(1+kd1*q),ratio=q=>(1+ks1*q)*(1+kd1*q);
 return [kd1,ks1,kd1/(t0*1e-9),tau(q1),tau(q2),ratio(q1),ratio(q2),1/(1+ks1*q2),tau(q2)/t0,1/ratio(q2)];
},
"UC-ADV10-O111":()=>{
 const p=.8,pc=1/Math.sqrt(2);let ua=0,ub=0;
 for(let j=0;j<1500;j++){const nextA=1-p+p*ub*ub,nextB=1-p+p*ua;ua=nextA;ub=nextB;}
 assert.ok(p>pc&&ua>0&&ua<1&&ub>0&&ub<1);
 assert.ok(Math.abs(ua-(1-p+p*ub*ub))<1e-12&&Math.abs(ub-(1-p+p*ua))<1e-12);
 const sa=ua*ua,sb=ub**3,ga=1-sa,gb=1-sb,gm=(300*ga+300*gb)/600;
 assert.ok(Math.abs(600*(1-gm)-300*sa-300*sb)<1e-10);
 return [pc,ua,ub,sa,sb,ga,gb,gm];
},
"UC-ADV10-P111":()=>{
 const A=1.2,s1=60,s2=40;
 const calc=x=>{const g1=Math.exp(A*(1-x)**2),g2=Math.exp(A*x*x),p1=x*g1*s1,p2=(1-x)*g2*s2,P=p1+p2,y=p1/P;assert.ok(P>0&&y>0&&y<1);return [g1,g2,P,y,(y/(1-y))*((1-x)/x)];};
 const first=calc(.35),second=calc(.8);let lo=.01,hi=.99;
 for(let j=0;j<110;j++){const m=(lo+hi)/2;if(calc(m)[3]-m>0)lo=m;else hi=m;}
 const x=(lo+hi)/2,az=calc(x),h=1e-4;
 assert.ok(Math.abs(az[3]-x)<1e-12&&az[2]>calc(x-h)[2]&&az[2]>calc(x+h)[2]);
 assert.ok(Math.abs(x*(-2*A*(1-x))+(1-x)*2*A*x)<1e-12);
 return [first[0],first[1],first[2],first[3],first[4],x,az[2],second[2],second[3],second[4]];
},


"UC-ADV10-I113":()=>{
 const R=8.314462618,F=96485.33212,T=298.15,K=Math.exp(F*(.47-.43)/(R*T));
 const eq=x=>(.002+2*x)**2-K*(.012-x)*(.008-x);
 let lo=0,hi=.008;
 for(let j=0;j<100;j++){const m=(lo+hi)/2;if(eq(m)>0)hi=m;else lo=m;}
 const x=(lo+hi)/2,a=.012-x,b=.002+2*x,c=.008-x;
 const e32=.43+R*T/F*Math.log(b/a),e43=.47+R*T/F*Math.log(c/b);
 assert.ok(a>0&&b>0&&c>0&&Math.abs(a+b+c-.022)<1e-14);
 assert.ok(Math.abs(2*a+3*b+4*c-.062)<1e-13&&Math.abs(e32-e43)<1e-12);
 const absorb=(.5/100)*(200*a+1800*b+400*c);
 return [K,x,a,b,c,e32,absorb,-R*T*Math.log(K)/1000,b/(a+b+c),(2*a+3*b+4*c)/(a+b+c)];
},
"UC-ADV10-A113":()=>{
 const v=.1525,gamma=.5247413112003934,tau=Math.cbrt(gamma*Math.pow(v,1.5)/2);
 const sigma=Math.sqrt(v-tau*tau),mu=8.75-tau;
 const moments=(mu,sigma,tau)=>{
  const N=20000,max=40*tau,h=max/N;let norm=0,m2=0,m3=0;
  for(let i=0;i<=N;i++){
   const y=i*h,d=y-tau,weight=(i===0||i===N?1:i%2?4:2)*Math.exp(-y/tau)/tau;
   norm+=weight;m2+=weight*(d*d+sigma*sigma);m3+=weight*(d*d*d+3*d*sigma*sigma);
  }
  norm*=h/3;m2*=h/3;m3*=h/3;
  assert.ok(Math.abs(norm-1)<1e-10&&m2>0);
  return [mu+tau,m2,m3/Math.pow(m2,1.5)];
 };
 const first=moments(mu,sigma,tau),second=moments(11,.4,.1);
 const rm=(second[0]-first[0])/(2*(Math.sqrt(first[1])+Math.sqrt(second[1])));
 return [tau,sigma,mu,...first,...second,rm];
},
"UC-ADV10-O110":()=>{
 const a0=.01,kc=.012,kh=.003,k2=.035,n0=.4,kd=.01,dt=.01;
 let v=[a0,0,0,0];
 const f=(t,y)=>{const ext=k2*n0*Math.exp(-kd*t)*y[0];return [-(kc+kh)*y[0]-ext,kc*y[0],ext,kh*y[0]];};
 for(let j=0;j<12000;j++){
  const t=j*dt,add=(u,delta,h)=>u.map((z,i)=>z+h*delta[i]);
  const k1=f(t,v),k2v=f(t+dt/2,add(v,k1,dt/2)),k3=f(t+dt/2,add(v,k2v,dt/2)),k4=f(t+dt,add(v,k3,dt));
  v=v.map((z,i)=>z+dt*(k1[i]+2*k2v[i]+2*k3[i]+k4[i])/6);
 }
 const [a,c,e,h]=v,sum=c+e+h,branch=t=>k2*n0*Math.exp(-kd*t)/(kc+kh+k2*n0*Math.exp(-kd*t));
 const exact=a0*Math.exp(-(kc+kh)*120-(k2*n0/kd)*(1-Math.exp(-kd*120)));
 assert.ok(Math.abs(v.reduce((x,y)=>x+y,0)-a0)<1e-12&&Math.abs(a-exact)<1e-12);
 assert.ok(v.every(x=>x>=0)&&Math.abs(c/h-kc/kh)<1e-10);
 return [a,c,e,h,c/e,c/sum,branch(0),branch(120)];
},
"UC-ADV10-P110":()=>{
 const De=2e-9,k=.025,cs=1.2;
 const solve=radius=>{
  const phi=radius*Math.sqrt(k/De),N=10000,h=1/N;
  let x=h,u=1+phi*phi*x*x/6,v=phi*phi*x/3;
  const rhs=(x,u,v)=>[v,phi*phi*u-2*v/x];
  for(let j=1;j<N;j++){
   const a=rhs(x,u,v),b=rhs(x+h/2,u+h*a[0]/2,v+h*a[1]/2);
   const c=rhs(x+h/2,u+h*b[0]/2,v+h*b[1]/2),d=rhs(x+h,u+h*c[0],v+h*c[1]);
   u+=h*(a[0]+2*b[0]+2*c[0]+d[0])/6;
   v+=h*(a[1]+2*b[1]+2*c[1]+d[1])/6;x+=h;
  }
  const center=cs/u,eta=3*v/(u*phi*phi),J=De*cs*v/(u*radius);
  assert.ok(eta>0&&eta<1&&center>0&&center<cs);
  assert.ok(Math.abs(J-eta*k*cs*radius/3)<1e-15);
  return [phi,eta,center,J,4*Math.PI*radius*radius*J];
 };
 const first=solve(.0005),second=solve(.001);
 return [...first,second[0],second[1],second[3]];
},


"UC-ADV10-I112":()=>{
 const s=2.4,e0=2.1,quantum=.16;
 let prob=Math.exp(-s),sum=0,first=0,second=0,p2=0,p3=0;
 for(let n=0;n<=60;n++){sum+=prob;first+=n*prob;second+=n*n*prob;if(n===2)p2=prob;if(n===3)p3=prob;prob*=s/(n+1);}
 assert.ok(Math.abs(sum-1)<1e-12&&Math.abs(first-s)<1e-12&&Math.abs(second-first*first-s)<1e-11);
 const lambda=s*quantum,massRatio=1.21,newQuantum=quantum/Math.sqrt(massRatio);
 return [Math.exp(-s),p2,p3/p2,e0+quantum*first,e0-quantum*first,2*lambda,lambda,lambda/newQuantum,newQuantum];
},
"UC-ADV10-A112":()=>{
 const t0=1.5,phi0=.2,k0=Math.exp(5),strength=8;
 const integral=(t,beta)=>{
  const N=10000,h=t/N;let sum=0;
  for(let j=0;j<=N;j++){
   const time=j*h,ret=Math.exp(5-strength*(phi0+beta*time));
   sum+=(j===0||j===N?1:j%2===0?2:4)/(t0*(1+ret));
  }
  return h*sum/3;
 };
 const solve=beta=>{
  let lo=0,hi=60;
  for(let j=0;j<55;j++){const mid=(lo+hi)/2;if(integral(mid,beta)>1)hi=mid;else lo=mid;}
  const t=(lo+hi)/2,phi=phi0+beta*t;
  assert.ok(phi>0&&phi<1&&Math.abs(integral(t,beta)-1)<1e-10);
  return [t,phi,k0*Math.exp(-strength*phi)];
 };
 const slow=solve(.04),fast=solve(.06),iso=t0*(1+Math.exp(5-strength*phi0));
 return [...slow,...fast,iso,iso-slow[0]];
},
"UC-ADV10-O109":()=>{
 const ligandEE=.4,hetero=3,activity=.2,ct=.001,k=.02,t=600;
 const fractions=[(1+ligandEE)/2,(1-ligandEE)/2];
 const w=[fractions[0]*fractions[0],fractions[1]*fractions[1],2*hetero*fractions[0]*fractions[1]];
 const total=w.reduce((a,b)=>a+b,0),c=w.map(x=>x/total);
 assert.ok(Math.abs(c.reduce((a,b)=>a+b,0)-1)<1e-12);
 const r=ct*k*t*(c[0]+activity*c[2]/2),s=ct*k*t*(c[1]+activity*c[2]/2);
 assert.ok(r+s<.1&&r>0&&s>0);
 return [c[0],c[1],c[2],r,s,r+s,(r-s)/(r+s),(r+s)/(ct*k*t)];
},
"UC-ADV10-P109":()=>{
 const a=1.5;
 const jac=(b)=>{
  const x=a,y=b/a,h=1e-5;
  const f=(x,y)=>a-(b+1)*x+x*x*y,g=(x,y)=>b*x-x*x*y;
  assert.ok(Math.abs(f(x,y))<1e-12&&Math.abs(g(x,y))<1e-12);
  const j11=(f(x+h,y)-f(x-h,y))/(2*h),j12=(f(x,y+h)-f(x,y-h))/(2*h);
  const j21=(g(x+h,y)-g(x-h,y))/(2*h),j22=(g(x,y+h)-g(x,y-h))/(2*h);
  const tr=j11+j22,det=j11*j22-j12*j21;
  return {x,y,tr,det,real:tr/2,imag:Math.sqrt(4*det-tr*tr)/2};
 };
 const high=jac(3.4),low=jac(2.8),bc=1+a*a;
 assert.ok(high.tr>0&&low.tr<0&&Math.abs(high.det-a*a)<1e-9);
 return [high.x,high.y,high.tr,high.det,high.real,high.imag,bc,2*Math.PI/Math.sqrt(a*a),low.tr,low.real];
},
"UC-ADV10-I111":()=>{
 const h=6.62607015e-34,mu=9.2740100783e-24,nu=9.5e9;
 const calc=theta=>{const sn=Math.sin(theta),cs=Math.cos(theta),g=Math.hypot(1.98*sn,1.94*cs),A=Math.hypot(1.98*7*sn,1.94*18*cs)/g,b=h*nu/(mu*g)*1e3;
 const lines=Array.from({length:8},(_,j)=>b-(j-3.5)*A).sort((x,y)=>x-y);
 assert.ok(Math.abs(lines.reduce((a,v)=>a+v,0)/8-b)<1e-10);
 assert.ok(Math.abs(lines.at(-1)-lines[0]-7*A)<1e-10);
 return {g,A,b,lines};};
 const per=calc(Math.PI/2),par=calc(0),mid=calc(Math.PI/4);
 return [per.b,par.b,mid.g,mid.A,mid.b,per.lines[0],per.lines.at(-1),par.lines[0],par.lines.at(-1),mid.lines[0],mid.lines.at(-1)];
},
"UC-ADV10-A111":()=>{
 const tau=2e-6,m=164643.490828208,observed=111122.733102258,f=n=>n*Math.exp(-n*tau)-m;
 function bis(lo,hi){let fl=f(lo);for(let j=0;j<110;j++){const mid=(lo+hi)/2;if(fl*f(mid)<=0)hi=mid;else {lo=mid;fl=f(mid)}}return (lo+hi)/2;}
 const low=bis(1,1/tau),high=bis(1/tau,2e6),half=n=>n/2*Math.exp(-n*tau/2);
 assert.ok(low<1/tau&&high>1/tau&&Math.abs(half(low)-observed)<1e-6&&Math.abs(half(high)-observed)>1000);
 return [low,high,half(low),half(high),1/(Math.E*tau),Math.exp(-low*tau),low*10,Math.exp(-low*tau)*(1-low*tau)];
},
"UC-ADV10-O108":()=>{
 const a=(400-440)/2-12/4,b=(440-400)/2-12/4,off=6,d=Math.hypot(a-b,2*off),ep=(a+b+d)/2,em=(a+b-d)/2;
 const strength=e=>{const x=off,y=e-a,z=Math.hypot(x,y);return ((x+y)/z)**2;};
 const ip=strength(ep),im=strength(em),top=420+3,bottom=-420+3;
 const peaks=[em-bottom,top-ep,ep-bottom,top-em].sort((x,y)=>x-y);
 assert.ok(Math.abs(2*(ip+im)-4)<1e-12&&Math.abs(peaks.reduce((a,b)=>a+b,0)/4-420)<1e-12);
 return [d,...peaks,im,ip,ip/im,420];
},
"UC-ADV10-P108":()=>{
 const F=96485.33212,R=8.314462618,T=298.15,eps=78.5*8.8541878128e-12,c=10,psi=-.05,k=Math.sqrt(2*F*F*c/(eps*R*T));
 const charge=v=>Math.sqrt(8*eps*R*T*c)*Math.sinh(F*v/(2*R*T));
 const delta=1e-6,cap=(charge(psi+delta)-charge(psi-delta))/(2*delta);
 const N=1000,h=psi/N;let work=charge(0)+charge(psi);for(let i=1;i<N;i++)work+=(i%2?4:2)*charge(i*h);work*=h/3;
 const plus=c*Math.exp(-F*psi/(R*T)),minus=c*Math.exp(F*psi/(R*T));
 assert.ok(Math.abs(plus*minus-c*c)<1e-10&&charge(psi)<0&&cap>0&&work>0);
 return [1e9/k,charge(psi),cap,plus,minus,R*T*(plus+minus-2*c),work];
},


 "UC-ADV10-I110":()=>{
  // Independent atomic phase sum over eight crystallographic sites (not parity formula).
  const cl=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]];
  const na=cl.map(x=>[(x[0]+.5)%1,x[1],x[2]]);
  const F=(h,k,l)=>cl.reduce((s,x)=>s+17*Math.cos(2*Math.PI*(h*x[0]+k*x[1]+l*x[2])),0)+na.reduce((s,x)=>s+11*Math.cos(2*Math.PI*(h*x[0]+k*x[1]+l*x[2])),0);
  const f111=F(1,1,1),f200=F(2,0,0),f100=F(1,0,0);
  assert.ok(Math.abs(f100)<1e-10&&Math.abs(F(2,2,0)-112)<1e-10);
  const angle=(h,k,l)=>{const d=5.640/Math.hypot(h,k,l),s=1.5406/(2*d);assert.ok(s>0&&s<1);return 2*Math.asin(s)*180/Math.PI};
  return [angle(1,1,1),angle(2,0,0),angle(2,2,0),4*58.44/(6.02214076e23*(5.640e-8)**3),6*f200*f200/(8*f111*f111),f111,f200];
 },
 "UC-ADV10-A110":()=>{
  // Independent elimination from two calibrated MS channels, plus separate residue audit.
  const gasC=(9.2-.05*8.6/2)/(1.5-.05*.1/2),gasW=(8.6-.1*gasC)/2;
  const mg=gasW*58.319/1000,ca=gasC*100.086/1000,si=1-mg-ca;
  const loss=(gasW*18.015+gasC*44.009)/1000;
  const residue=(gasW*40.304+gasC*56.077)/1000+si;
  assert.ok(Math.abs(2*gasW+.1*gasC-8.6)<1e-12&&Math.abs(.05*gasW+1.5*gasC-9.2)<1e-12);
  assert.ok(Math.abs(loss-.336114)<1e-12&&Math.abs(residue+loss-1)<1e-12&&si>0);
  return [gasW,gasC,mg,ca,si,loss,residue,ca/(mg+ca)];
 },
 "UC-ADV10-O107":()=>{
  // Independent bisection on the measured half-deuteration response, not quadratic formula.
  const d=.4**2/.9,h=(1+.4)**2/(2*(1+.9));
  const f=x=>(1+x)**2/(2*(1+x*x/d))-h;
  function bis(lo,hi){let fl=f(lo);assert.ok(fl*f(hi)<0);for(let i=0;i<90;i++){let m=(lo+hi)/2;if(fl*f(m)<=0)hi=m;else {lo=m;fl=f(m)}}return (lo+hi)/2}
  const small=bis(.01,.05),large=bis(.3,.6),bs=small*small/d,bl=large*large/d;
  const atQuarter=(x,y)=>(.75+.25*x)**2/(.75+.25*y);
  assert.ok(Math.abs(atQuarter(large,bl)-.741025641025641)<1e-12&&Math.abs(atQuarter(small,bs)-.741025641025641)>1e-3);
  assert.ok(Math.abs(large*large/bl-d)<1e-12&&Math.abs(small*small/bs-d)<1e-12);
  return [large,bl,small,bs,atQuarter(large,bl),atQuarter(small,bs),.12*d];
 },
 "UC-ADV10-P107":()=>{
  // Independently enumerate each spin sector and finite-difference U(T) for heat capacities.
  const R=8.314462618,th=85.4;
  function energies(T){
   const groups=[[],[]];
   for(let j=0;j<=8;j++)groups[j%2].push([(2*j+1)*Math.exp(-th*j*(j+1)/T),th*j*(j+1)]);
   const Z=g=>g.reduce((s,x)=>s+x[0],0),avg=g=>g.reduce((s,x)=>s+x[0]*x[1],0)/Z(g);
   const zp=Z(groups[0]),zo=3*Z(groups[1]),ep=avg(groups[0]),eo=avg(groups[1]),fo=zo/(zp+zo);
   return [zp,zo,fo,R*((1-fo)*ep+fo*eo),R*(.25*ep+.75*eo)];
  }
  const e=energies(100),h=.1,plus2=energies(100+2*h),plus=energies(100+h),minus=energies(100-h),minus2=energies(100-2*h);
  // Fourth-order central derivative avoids subtractive cancellation at h=1e-4 K.
  const derivative=i=>(-plus2[i]+8*plus[i]-8*minus[i]+minus2[i])/(12*h);
  const cv=derivative(3),cvf=derivative(4);
  assert.ok(cv>0&&cvf>0&&e[2]<.75&&e[2]>0);
  return [e[0],e[1],e[2],e[3],cv,e[4],cvf,e[4]-e[3]];
 },

 "UC-ADV10-I109":()=>{
  // Independent symmetric mass-weighted Jacobi diagonalization, not secular quadratic.
  const u=1.66053906660e-27,k=800,c=299792458;
  function modes(m){
   const A=[[1/m[0],-1/Math.sqrt(m[0]*m[1]),0],[-1/Math.sqrt(m[0]*m[1]),2/m[1],-1/Math.sqrt(m[1]*m[2])],[0,-1/Math.sqrt(m[1]*m[2]),1/m[2]]];
   for(let z=0;z<70;z++){
    let p=0,q=1;for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)if(Math.abs(A[i][j])>Math.abs(A[p][q])){p=i;q=j}
    const v=A[p][q];if(Math.abs(v)<1e-16)break;
    const tau=(A[q][q]-A[p][p])/(2*v),t=(tau>=0?1:-1)/(Math.abs(tau)+Math.sqrt(1+tau*tau)),cs=1/Math.sqrt(1+t*t),sn=t*cs,ap=A[p][p],aq=A[q][q];
    A[p][p]=ap-t*v;A[q][q]=aq+t*v;A[p][q]=A[q][p]=0;
    for(let i=0;i<3;i++){if(i===p||i===q)continue;const ip=A[i][p],iq=A[i][q];A[i][p]=A[p][i]=cs*ip-sn*iq;A[i][q]=A[q][i]=sn*ip+cs*iq}
   }
   const eigen=[A[0][0],A[1][1],A[2][2]].sort((a,b)=>a-b);
   assert.ok(Math.abs(eigen[0])<1e-12&&eigen[1]>0&&eigen[2]>0);
   return eigen.slice(1).map(x=>Math.sqrt(x*k/u)/(2*Math.PI*c*100));
  }
  const s16=modes([16,28,16]),s18=modes([18,28,18]),mixed=modes([16,28,18]);
  assert.ok(s18[0]<s16[0]&&s18[1]<s16[1]);
  return [...s16,...s18,...mixed,-32/28];
 },
 "UC-ADV10-A109":()=>{
  const X100=1650-.3*100,X102=1350,g=1.04,R=X100/(g*X102);
  // Independently solve the isotope count equation, then reconstruct both raw signals.
  const a=.75-R*.25,b=R*.9*.5-.1*.5,n=b/a;
  const count100=.75*n+.05,count102=.25*n+.45,C=X102/count102;
  assert.ok(n>0&&Math.abs(g*C*count100+30-1650)<1e-9&&Math.abs(C*count102-1350)<1e-9);
  assert.ok(Math.abs(count100+count102-(n+.5))<1e-12);
  return [R,n,n+.5,n*101/10,.45/count102];
 },
 "UC-ADV10-O106":()=>{
  // Heun predictor-corrector (30k steps) independently of solution's RK4 integrator.
  const F=x=>(.4*x*x+x*(1-x))/(.4*x*x+2*x*(1-x)+1.8*(1-x)**2);
  const rhs=(X,x)=>(x-F(x))/(1-X);
  let x=.6;const n=30000,h=.4/n;
  for(let j=0;j<n;j++){const X=j*h,k1=rhs(X,x),predict=x+h*k1;x+=h*(k1+rhs(X+h,predict))/2;}
  const n1=.6*x,n2=.6*(1-x),average=(.6-n1)/.4;
  assert.ok(x>0&&x<1&&Math.abs(n1+n2-.6)<1e-12);
  assert.ok(Math.abs(n1+.4*average-.6)<1e-12&&Math.abs(n2+.4*(1-average)-.4)<1e-12);
  return [F(.6),x,F(x),average,n1,n2];
 },
 "UC-ADV10-P106":()=>{
  // Independent solve in temperature, not extent; thermodynamic Cp correction retained.
  const R=8.314462618,H=24000,dCp=10,T0=300;
  const extent=T=>-80*(T-T0)/(H+dCp*(T-T0));
  const K=T=>.2*Math.exp(-H/R*(1/T-1/T0)+dCp/R*(Math.log(T/T0)+T0/T-1));
  const f=T=>{const e=extent(T);return 4*e*e/(1-e*e)-K(T)};
  let lo=250,hi=300;
  assert.ok(f(lo)>0&&f(hi)<0);
  for(let j=0;j<90;j++){const mid=(lo+hi)/2;if(f(mid)>0)lo=mid;else hi=mid;}
  const T=(lo+hi)/2,e=extent(T),n1=1-e,n2=2*e,tot=n1+n2;
  assert.ok(T>0&&e>0&&e<1&&Math.abs(f(T))<1e-12);
  assert.ok(Math.abs((80+10*e)*(T-300)+24000*e)<1e-9);
  return [e,T,K(T),n2/tot,n1/tot,H+dCp*(T-T0)];
 },


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

 "UC-ADV10-I118":()=>{
  const rt=8.314462618*300,om=8000,f=x=>Math.log(x/(1-x))+om/rt*(1-2*x),df=x=>1/(x*(1-x))-2*om/rt;
  let x=.06;for(let i=0;i<30;i++){let y=x-f(x)/df(x);assert.ok(y>0&&y<.5);if(Math.abs(y-x)<1e-15){x=y;break;}x=y;}
  const energy=t=>rt*(t*Math.log(t)+(1-t)*Math.log(1-t))+om*t*(1-t),curv=t=>rt/(t*(1-t))-2*om;
  const sp=(1-Math.sqrt(1-2*rt/om))/2;
  assert.ok(curv(x)>0&&curv(.5)<0&&energy(.5)>energy(x)&&Math.abs(f(x))<1e-12);
  return [x,1-x,energy(x),energy(.5)-energy(x),curv(x),curv(.5),sp,1-sp,om/(2*8.314462618)];
 },
 "UC-ADV10-A118":()=>{
  const raw=[[259.4723601902123,-23.9656379457135],[179.89697311271587,-86.10037409164481],[46.06545297144797,-45.90977746706515]];
  const inv=([a,b])=>[a/(a*a+b*b),-b/(a*a+b*b)],y=raw.map(([a,b])=>inv([a-20,b]));
  const d1=[y[1][0]-y[0][0],y[1][1]-y[0][1]],d2=[y[2][0]-y[1][0],y[2][1]-y[1][1]];
  const phase=Math.atan2(d1[1],d1[0]),alpha=2*phase/Math.PI;
  assert.ok(Math.abs(Math.log(Math.hypot(...d2)/Math.hypot(...d1))/Math.log(10)-alpha)<1e-12);
  const q=Math.hypot(...d1)/((2*Math.PI*10)**alpha-(2*Math.PI)**alpha),G=y[0][0]-q*(2*Math.PI)**alpha*Math.cos(phase);
  assert.ok(Math.abs(y[0][1]-q*(2*Math.PI)**alpha*Math.sin(phase))<1e-12&&G>0);
  const w=2*Math.PI*50,ar=G+q*w**alpha*Math.cos(phase),ai=q*w**alpha*Math.sin(phase),den=ar*ar+ai*ai,zr=20+ar/den,zi=-ai/den;
  return [alpha,q,1/G,G,zr,zi,Math.hypot(zr,zi),Math.atan2(raw[0][1],raw[0][0])*180/Math.PI,phase*180/Math.PI];
 },
 "UC-ADV10-O115":()=>{
  const F=2e16,sZ=2e-17,sE=1e-17,kth=.03,kf=F*sZ*.35,phot=F*sE*.2,kb=phot+kth,ss=kf/(kf+kb);
  const deriv=x=>kf*(1-x)-kb*x;let x=0,dt=.001;
  for(let i=0;i<10000;i++){const a=deriv(x),b=deriv(x+dt*a/2),c=deriv(x+dt*b/2),d=deriv(x+dt*c);x+=dt*(a+2*b+2*c+d)/6;}
  const absorbed=F*(sZ*(1-ss)+sE*ss),fwd=kf*(1-ss),rev=phot*ss,thermal=kth*ss;
  assert.ok(Math.abs(fwd-rev-thermal)<1e-13&&x>0&&x<ss);
  return [kf,kb,ss,ss/(1-ss),1/(kf+kb),x,ss*Math.exp(-kth*8),absorbed,fwd,rev,thermal,(fwd-rev)/absorbed];
 },
 "UC-ADV10-P115":()=>{
  const a=4e-9,b=1.5e-9,d=3e-9,x=200,y=-80,T=298.15,j1=a*x+b*y,j2=b*x+d*y,work=x*j1+y*j2,disc=Math.hypot(a-d,2*b);
  const stop=-b*x/d,jStop=a*x+b*stop,det=a*d-b*b;
  assert.ok(det>0&&work>0&&j2>0&&y<0&&Math.abs(b*x+d*stop)<1e-18);
  return [j1,j2,work,work/T,(a+d-disc)/2,(a+d+disc)/2,b/Math.sqrt(a*d),stop,jStop,jStop*x,det];
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
  assert.equal(x.subject,sub);assert.ok(typeof x.title==='string'&&x.title.length>=8,'Missing title '+x.id);assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
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
const queue=JSON.parse(readFileSync(base+'overlap_review_queue.json','utf8'));
assert.equal(queue.current_draft_count,all);
assert.equal(queue.preliminary_flags,queue.pairs.length);
assert.equal(queue.expert_approved,0);
for(const row of queue.new_items_requiring_cross_series_comparison)assert.ok(ids.has(row.new_id));
const distribution=Object.fromEntries(Object.entries(req).map(([k,v])=>[k,v.count]));
console.log(JSON.stringify({pass:true,series:'v10-work-in-progress',draft_count:all,distribution,independently_checked_full_answer_vectors:all,required_for_complete_volume:100,review:'pending human chemistry and cross-volume core model comparison',expert_approved:0}));
