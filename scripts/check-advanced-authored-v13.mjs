#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23;
const witnesses={
"UC-ADV13-I176":()=>{let H=-15000,L=-20000,d=L-H,ej=d*.01196266*1000,w=3*Math.exp(-ej/(R*298.15)),p=w/(5+w);return[H,L,d,ej/1000,p,1-p,25000-20000,p/(1-p)]},
"UC-ADV13-I177":()=>{let a=.06,b=.04,na=a+2*b,I=(a+4*b+na)/2,pH=7.21+Math.log10(b/a),beta=2.303*a*b/(a+b);return[pH,I,na,beta,b/a,a+b,na-(a+2*b),2.303*(a+b)*.24]},
"UC-ADV13-I178":()=>{let a=31,u=.005/a,v=u*10,w=u*20;return[a,u,v,w,(v+2*w)/.005,(v+w)/.005,v+2*w,u+v+w]},
"UC-ADV13-I179":()=>{let a=10**(-11.5),b=10**(-10.5),x=1e-38/a**3,y=1e-38/b**3;return[a,b,x,y,x/y,Math.log10(x/y),x*a**3,y*b**3]},
"UC-ADV13-I180":()=>{let a=.5,b=.8,w=x=>x*1.008/(106.42+x*1.008),m=x=>x*1.008/106.42;return[a,b,w(a),w(b),m(a),m(b),b/a,w(b)/w(a)]},
"UC-ADV13-I181":()=>{let Q=(.01/.05)**2*(.02/.1**2),E=.23-R*298.15*Math.log(Q)/(2*F),xi=.025;return[Q,E,E-.23,-2*F*E/1000,xi,2*xi,2*F*xi,Math.log(Q)]},
"UC-ADV13-I182":()=>{let e=6.62607015e-34*9.5e9,B=e/(2.003*9.2740100783e-24),a=.0016;return[B,B-2*a,B+2*a,4*a,3/9,e,5,9]},
"UC-ADV13-I183":()=>{let m=100*(.4-.2)/(.6-.2),v1=(100-m)/10,v2=m/8,v=v1+v2;return[m,100-m,v1,v2,v2/v,100/v,m*.6+(100-m)*.2,m*70]},
"UC-ADV13-I184":()=>{let k=R*298.15/(5*F),E=p=>1.51+k*(Math.log(.1)-8*p*Math.log(10)),s=-8*k*Math.log(10);return[E(1),E(4),s,E(4)-E(1),8/5,k,k*Math.log(.1),3*s]},
"UC-ADV13-A176":()=>{let C=.02,V=10,k=1000,c=.003,s=v=>k*(c*V+C*v)/(V+v),f0=s(0),f1=s(1),f2=s(2),slope=f1*11-f0*10,inter=f0*10;return[f0,f1,f2,slope,inter,C*inter/(slope*V),slope/C,(c*V+2*C)/12]},
"UC-ADV13-A177":()=>{let a=-Math.log10(.4/51),b=-Math.log10(.2/53),g1=10**(-a)*51,g2=10**(-b)*53,s=(g2-g1)/2,t=g1-s;return[a,b,g1,g2,s,t,t/.1,t/50]},
"UC-ADV13-A178":()=>{let c=.001+.1*Math.sqrt(.0004),E=.2+.05916*Math.log10(c),u=10**((E-.2)/.05916);return[c,E,u,u-.002,u/.001-1,.002/c,Math.sqrt(.0004),Math.log10(c)]},
"UC-ADV13-A179":()=>{let q=4*Math.PI*1.333/(633e-9*Math.SQRT2),D=1.380649e-23*298.15/(6*Math.PI*.00089*50e-9),g=1+.8*Math.exp(-2*D*q*q*1e-4);return[q,D,g,D*q*q,1/(D*q*q),1.380649e-23*298.15/(6*Math.PI*.00089*D)*1e9,g-1,(g-1)/.8]},
"UC-ADV13-A180":()=>{let r=75000/225000,m=r*(2500/2000)*(.9/.75)*100,bad=r*(2500/2000)*100;return[r,m,bad,bad/m-1,.75*m,90,75000/2000,225000/2500]},
"UC-ADV13-A181":()=>{let p=.5069,q=.4931,a=p*p,b=2*p*q,c=q*q;return[a,b,c,b/a,c/a,2*q,a+b+c,b/c]},
"UC-ADV13-A182":()=>{let a=.01,b=.02,r=q=>(1+50*q)*(1+20*q),t=q=>4/(1+50*q);return[r(a),r(b),t(a),t(b),1+50*a,1+50*b,1+20*a,1+20*b]},
"UC-ADV13-A183":()=>{let Q=.025*100,n=.98*Q/F,c=n/.025;return[Q,.98*Q,n,c,c*35.45*1000,n*35.45*1000,1/.98-1,.98]},
"UC-ADV13-A184":()=>{let cB=(.6-.4)/100,cA=(.5-.4)/100,cC=(.5-.4)/200,b=.4-100*(cA+cB+cC);return[cA,cB,cC,b,100*cA+200*cB+100*cC+b,200*cA+100*cB+100*cC+b,100*cA+100*cB+300*cC+b,100*cA+100*cB+100*cC+b]},
"UC-ADV13-O173":()=>{let a=.85*.6,b=.15*.6,total=a+b,ee=(a-b)/total;return[a,b,total,ee,ee*80,.85*.4,.15*.4,total+.4]},
"UC-ADV13-O174":()=>{let h=.12,d=.03,t=10,a=Math.exp(-h*t),b=Math.exp(-d*t);return[h/d,1-a,1-b,Math.log(2)/h,Math.log(2)/d,R*298.15*Math.log(4)/1000,a,b]},
"UC-ADV13-O175":()=>{let c=T=>{let g=-8000+20*T,K=Math.exp(-g/(R*T));return{g,K,x:K/(1+K)}},a=c(298.15),b=c(350);return[a.K,b.K,a.x,b.x,a.g/1000,b.g/1000,b.x-a.x,Math.log(b.K/a.K)]},
"UC-ADV13-O176":()=>{let exponent=90000/R*(1/298.15-1/330),k=.001*Math.exp(exponent),t=Math.log(10)/k;return[exponent,k,k/.001,Math.log(2)/k,t,1-Math.exp(-k*300),Math.exp(-k*300),1-Math.exp(-.001*300)]},
"UC-ADV13-O177":()=>{let a=1,b=1.5,C=.02,u=C/(1+a+b),x=a*u,y=b*u;return[u,x,y,(x+y)/C,y/x,x+y+u,x/C,y/C]},
"UC-ADV13-O178":()=>{let ka=1e9*1e-4,kp=1e3*1,ind=1e-4/2e-7,poly=600-ind;return[ka,kp,ka/(ka+kp),kp/(ka+kp),ind,poly,poly*2e-7,ind/600]},
"UC-ADV13-O179":()=>{let pc=1/Math.sqrt(2),a=2*.6*.6,b=2*.8*.8;return[pc,a,b,1-.6,1-.8,a-1,b-1,b/a]},
"UC-ADV13-O180":()=>{let x=.6,y=.4,RR=x*x,SS=y*y,RS=2*x*y,ee=(RR-SS)/(RR+SS);return[RR,SS,RS,RR+SS,ee,ee/.2,(1+ee)/2,(1-ee)/2]},
"UC-ADV13-P173":()=>{let T=300,H=40000,T2=330,p=20*Math.exp(H/R*(1/T-1/T2)),t=1/(1/T-R*Math.log(2)/H);return[p,p/20,H/R*(1/T-1/T2),H/1000,H/(R*T*T),H/(R*T2*T2),t,t-300]},
"UC-ADV13-P174":()=>{let g=c=>10**(-.509*Math.sqrt(c)),a=g(.01),b=g(.1);return[a,b,a*.01,b*.1,2*R*298.15*Math.log(a)/1000,2*R*298.15*Math.log(b)/1000,b/a,.1/.01]},
"UC-ADV13-P175":()=>{let f=T=>{let x=1438.8/T,z=Math.exp(x),n=1/(z-1),q=Math.exp(-x/2)/(1-Math.exp(-x)),U=R*1438.8*(n+.5),Cv=R*x*x*z/(z-1)**2;return[n,q,U,Cv]},a=f(300),b=f(600);return[a[0],b[0],a[1],b[1],a[2],b[2],a[3],b[3]]},
"UC-ADV13-P176":()=>{let K=1000,C=.001,M=2*C/(1+Math.sqrt(1+8*K*C)),D=K*M*M,pi=R*298.15*1000*(M+D);return[M,D,2*D/C,pi,C/(M+D),M+D,M+2*D,K*M*M]},
"UC-ADV13-P177":()=>{let k=2*.1+.05,eq=.2/k,z=eq*(1-Math.exp(-k*10));return[k,eq,1/k,z,Math.log(2)/k,.2*(1-eq),.05*eq,1-eq]},
"UC-ADV13-P178":()=>{let nu=1e7/532,a=nu+1000,b=nu-1000,Q=(a/b)**4,ratio=Q*Math.exp(-1438.776877/400),reT=1438.776877/Math.log(Q/ratio),bad=1438.776877/Math.log(1/ratio);return[nu,a,b,Q,ratio,reT,bad,bad-reT]},
"UC-ADV13-P179":()=>{let k=1.380649e-23,T=298.15,p=1e5,d=.37e-9,M=.028,lam=k*T/(Math.SQRT2*Math.PI*d*d*p),v=Math.sqrt(8*R*T/(Math.PI*M)),rho=p*M/(R*T);return[lam,lam*1e9,v,rho,p/(k*T),v/lam,rho*v*lam/3,1/v*lam]},
"UC-ADV13-P180":()=>{let i0=.001,al=.45,T=298.15,k=F/(R*T),a=e=>Math.exp((1-al)*k*e),c=e=>Math.exp(-al*k*e),ip=i0*(a(.1)-c(.1)),im=i0*(a(-.1)-c(-.1));return[ip,im,i0*a(.1),i0*c(.1),2.303/(1-al)/k,2.303/al/k,0,ip/im]}
};
Object.assign(witnesses,{
"UC-ADV13-I185":()=>{let z=3e-17,beta=1e15,a=10**(-6),b=10**(-2),f=x=>z/(x*x),g=x=>z*beta*x*x,o=Math.pow(beta,-.25);let S=f(b)+g(b);return[a,b,f(a),g(a),f(a)+g(a),f(b),g(b),S,o,14+Math.log10(o),f(o)+g(o),g(b)/S,0];},
"UC-ADV13-I186":()=>{let Ka=1/Math.sqrt(1e13),d=50,ct=.01,s=p=>{let t=Ka*10**p,B=1+t,X=4*ct/(B+Math.sqrt(B*B+8*d*ct))*0.5,Y=t*X,Z=d*X*X;return[X,Y,Z,2*Z/ct,X+Y+2*Z,t]};let a=s(6),b=s(7);return[a[0],a[1],a[2],a[3],b[0],b[1],b[2],b[3],a[3]/b[3],a[4],b[4],a[5],b[5]];},
"UC-ADV13-I187":()=>{let H=-25000,b1=2,T=300,U=330,k=b1*Math.exp(H/R*(1/T-1/U)),s=b1*.5,v=k*.5,x=s/(s+1),y=v/(v+1);return[b1,k,x,y,x*3,y*3,y/x,1-y/x,H/1000,1+v];},
"UC-ADV13-I188":()=>{let lam=.025,exp=Math.exp(-3),used=.01*(1-exp);return[lam,1-exp,.01*exp,used,used*2,used*2,Math.log(2)/lam,exp,lam*.01*exp,.01];},
"UC-ADV13-I189":()=>{let t=80,k1=.02,k2=.005,C=.004,rem=C*Math.exp(-(k1+k2)*t),p=(C-rem)*k1/(k1+k2),q=C-rem-p;return[k1+k2,Math.log(2)/(k1+k2),rem,p,q,k1/(k1+k2),k2/(k1+k2),p/q,C,1-rem/C];},
"UC-ADV13-I190":()=>{let g1=2.25,g2=2.05,h=6.62607015e-34,mu=9.2740100783e-24,nu=9.5e9,p=h*nu/mu,bp=p/g1,bt=p/g2;return[g1,g2,bp,bt,1e3*(bt-bp),(g1+2*g2)/3,(g1*g1+2*g2*g2)/3,h*nu,g1*mu*bp/h,bt/bp];},
"UC-ADV13-I191":()=>{let C=.001,S=1e-26,T=1e-21,k1=1e-36,k2=1e-25,x=Math.min(C,k1/S),y=Math.min(C,k2/S),u=Math.min(C,k1/T),v=Math.min(C,k2/T);return[x,y,(C-x)/C,(C-y)/C,u,v,(C-u)/C,(C-v)/C,k2/C,v/u,k1/C];},
"UC-ADV13-I192":()=>{let ea=35000,c=1e6,f=t=>c*Math.exp(-ea/(8.314462618*t))/t,x=f(600),y=f(900),A=.0001,L=.001,rx=L/(x*A),ry=L/(y*A),m=(Math.log(900*y/(600*x)))/(1/900-1/600);return[x,y,rx,ry,1/rx,1/ry,y/x,m,-8.314462618*m/1000,rx/ry];},
"UC-ADV13-I193":()=>{let h=178e3,s=161,r=8.314462618,g1=h-900*s,g2=h-1100*s,K1=Math.exp(-g1/(r*900)),K2=Math.exp(-g2/(r*1100));return[g1/1e3,g2/1e3,K1,K2,K1,K2,h/s,h/(s-r*Math.log(.1)),K2/K1,Math.log(K2/K1)];},
"UC-ADV13-I194":()=>{let ox=1.26,red=-1.33,E=2.12,postOx=ox-E,postRed=red+E,a=postOx+.3,b=.6-postRed,conv=1.602176634e-19*6.02214076e23/1000;return[postOx,postRed,a,b,a*conv,b*conv,E,a-b,2];}
});

const starts={inorganic:["I",176],analytical:["A",176],organic:["O",173],physical:["P",173]};
let count=0;const counts={},ids=new Set(),families=new Set(),titles=new Set();
for(const [sub,[L,start]] of Object.entries(starts)){
 const raw=read("editorial/advanced_integrated_v13/"+sub+".jsonl").trim();
 const rows=raw?raw.split("\n").map(JSON.parse):[];
 counts[sub]=rows.length;
 assert.ok(rows.length<=25);
 rows.forEach((x,i)=>{
  count++;
  assert.equal(x.id,"UC-ADV13-"+L+(start+i));
  assert.equal(x.subject,sub);
  assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=8);
  assert.equal(x.answer_values.length,x.answer_names.length);
  assert.equal(x.answer_values.length,x.answer_units.length);
  assert.ok(x.answer_values.length>=8&&x.answer_values.every(Number.isFinite));
  assert.equal(x.publishable,false);
  assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,"awaiting_expert_review");
  assert.equal(x.novelty_review_status,"pending_cross_series_model_review");
  assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family));
  ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(witnesses,x.id),"Missing recomputation witness: "+x.id);
  const expected=witnesses[x.id]();
  assert.equal(expected.length,x.answer_values.length);
  for(let j=0;j<expected.length;j++){
   const v=expected[j],u=x.answer_values[j],scale=Math.max(Math.abs(v),Math.abs(u),1e-14);
   assert.ok(Math.abs(v-u)<=1e-9*scale,x.id+" "+j+" "+v+" vs "+u);
  }
 });
}
assert.equal(Object.keys(witnesses).length,count);
const man=JSON.parse(read("release/chemistry-approved-manifest.json"));
assert.equal(man.thirteenth_series_work_in_progress_items,count);
assert.equal(man.thirteenth_series_pending_cross_series_novelty_review,count);
assert.equal(man.advanced_editorial_items,706+count);
assert.equal(man.approved_count,0);assert.deepEqual(man.items,[]);
const q=JSON.parse(read("editorial/advanced_integrated_v13/overlap_review_queue.json"));
assert.equal(q.current_draft_count,count);assert.equal(q.preliminary_flags,q.pairs.length);
const inQueue=new Set(q.new_items_requiring_cross_series_comparison.map(x=>x.new_id));
for(const id of ids)assert.ok(inQueue.has(id));
console.log(JSON.stringify({passed:true,series:13,total:count,distribution:counts,expert_approved:0}));
