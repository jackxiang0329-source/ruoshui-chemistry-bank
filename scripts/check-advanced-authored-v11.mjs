#!/usr/bin/env node
// Every accepted editorial item requires its own independently evaluated full answer vector.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=p=>readFileSync(root+p,'utf8');

const witness={
"UC-ADV11-I126":()=>{const M=87.62+55.845+3*15.999,d=.01*M/15.999,y=1-2*d,m=M-15.999*d,rho=(m/1000)/(6.02214076e23*(.3900e-9)**3);assert.ok(y>0&&y<1&&Math.abs(2+3+y-2*(3-d))<1e-12);return [d,y,1-y,3+y,d,m,rho];},
"UC-ADV11-I127":()=>{const r=8.314462618,th=q=>2/(1+Math.sqrt(1+4*q)),q=5*.02/.1**2,t=th(q),K=5*Math.exp(-20000/r*(1/298.15-1/318.15)),q2=K*.02/.1**2;assert.ok(Math.abs(.01*t+2*.01*(1-t)/2-.01)<1e-12&&K<5);return [q,t,1-t,.01*t,.01*(1-t)/2,K,q2,th(q2),1-th(q2)];},
"UC-ADV11-A126":()=>{const m=34/56.6,n=.001/(2*96485.33212),cu=n*63.546*1e6,w=m-cu,nw=w*1e-6/18.015;assert.ok(w>0&&Math.abs(2*96485.33212*n-.001)<1e-14);return [m,n,cu,w,nw,nw/n,n,-56.6*(cu+w)];},
"UC-ADV11-A127":()=>{const d=1.003354835-.997034893,w=500/120000,p13=.0107,p15=.00364,pC=20*p13*(1-p13)**19*(1-p15)**2,pN=2*p15*(1-p15)*(1-p13)**20;assert.ok(d>0&&d/w>1);return [d,w,d/w,500/d,pC/pN,d/2,250/120000];},
"UC-ADV11-O123":()=>{const M=1.2,I=.012,x=.8,k=.05,lam=M*x/I,t=-Math.log(1-x)/(k*I),mn=lam*104,D=1+1/lam;assert.ok(Math.abs((lam*lam+lam)/lam-(lam+1))<1e-12);return [M*(1-x),t,lam,lam,lam+1,mn,mn*D,D,I];},
"UC-ADV11-O124":()=>{const p=.2422,b=.4931,q=1-p,c=1-b,v=[q*q*c,2*p*q*c+q*q*b,p*p*c+2*p*q*b,p*p*b];assert.ok(Math.abs(v.reduce((a,z)=>a+z,0)-1)<1e-14&&Math.abs(v.reduce((a,z,i)=>a+i*z,0)-(2*p+b))<1e-14);return [...v,v[3]/v[0],1-v[0],2*p+b];},
"UC-ADV11-P123":()=>{const delta=.25,H=40;const find=(a,b,ascending)=>{for(let i=0;i<100;i++){const m=(a+b)/2,high=m*Math.exp(-m)>delta;if(high===ascending)b=m;else a=m;}return (a+b)/2};const l=find(0,1,true),h=find(1,10,false);assert.ok(l<1&&h>1&&Math.abs(l*Math.exp(-l)-delta)<1e-13&&Math.abs(h*Math.exp(-h)-delta)<1e-13);return [delta,l,h,H*l,H*h,1/Math.E,H/Math.E,1];},
"UC-ADV11-P124":()=>{const a=2e6*2e-6,b=6,p=a/(a+b),t=1/(a+b),v=p*(1-p),c=v*Math.exp(-.2/t),s=2*v*t/(1+(5*t)**2);assert.ok(Math.abs((1-p)*a-p*b)<1e-12);return [a,b,p,1-p,b/2e6,1/b,1/a,t,v,c,s,(1-p)*a];}
};

Object.assign(witness,{
"UC-ADV11-O126":()=>{const s=.5,r=s/Math.exp(.08*20),q=s/Math.exp(.015*20),p=s-r,v=s-q,X=p+v;assert.ok(Math.abs(r+q+p+v-1)<1e-12);return[r,q,X,(q-r)/(q+r),p,v,(p-v)/X,.08/.015,8.314462618*298.15*Math.log(.08/.015)/1000,r+q];},
"UC-ADV11-O127":()=>{const a=10**(-1)/(1+10**(-1)),h=.2,b=.05,p=a*h*4/5+(1-a)*b/3,q=a*h/5+(1-a)*b*2/3,K=p+q,X=-Math.expm1(-12*K),P=X*p/K;assert.ok(Math.abs(P+(X-P)+(1-X)-1)<1e-13);return[a,p,q,K,p/K,X,P,X-P,1-X,1/3];},
"UC-ADV11-O128":()=>{const q1=4.5/1.5,q2=.75/1.5,g=x=>-8.314462618*298.15*Math.log(x)/1000;assert.ok(q1>1&&q2<1);return[q1,q2,q1/(1+q1),1/(1+q1),q2/(1+q2),1/(1+q2),g(q1),g(q2),g(q2)-g(q1),4.5/5.5,.75/1.75];},
"UC-ADV11-P126":()=>{const R=8.314462618,t=[330,350,370],r=[.8,1.8],P=r[1]/r[0]*Math.sqrt(t[1]/t[0]),H=R*Math.log(P)/(1/t[0]-1/t[1]),p3=Math.exp(H/R*(1/t[1]-1/t[2]));assert.ok(p3>1);return[P,H/1000,r[1]*Math.sqrt(t[1]/t[2])*p3,p3,Math.log(P),r[1]*Math.sqrt(t[1]/t[0])*Math.exp(-H/R*(1/t[0]-1/t[1]))];},
"UC-ADV11-P127":()=>{let x=.4,s=.015,dT=20,p=x/(1-x),q=p/Math.exp(s*dT),z=q/(1+q);assert.ok(z<x&&Math.abs(z/(1-z)-q)<1e-13);return[p,q,z,1-z,p/q,-s,-x*(1-x)*s*2000,x-z];},
"UC-ADV11-P128":()=>{let a=.8e-10,h=1.054571817e-34,ev=1.602176634e-19,m=[1.67262192369e-27,3.3435837724e-27],k=m.map(z=>Math.sqrt(2*z*.1*ev)/h),p=k.map(z=>Math.exp(-2*a*z)),up=Math.exp(-2*a*Math.sqrt(2*m[0]*.09*ev)/h);assert.ok(p[0]>p[1]&&up>p[0]);return[k[0],k[1],p[0],p[1],p[0]/p[1],k[1]/k[0],up,2*a*k[0]];},
"UC-ADV11-I129":()=>{const a=12,b=13.003355,o=15.994915,u=1.6605390666e-27,m=z=>1/(1/z+1/o),ma=m(a),mb=m(b);const n=2050*Math.sqrt(ma/mb),k=ma*u*(2*Math.PI*299792458*205000)**2;assert.ok(n<2050&&k>0);return[ma,mb,n,2050-n,(2050-n)/2050,k,.5*6.02214076e23*6.62607015e-34*299792458*100*(2050-n)/1000];},
"UC-ADV11-I130":()=>{const c=6*(3+1)+2,n=5*3+9,exC=2*6,exN=2*5,pc=(c-exC)/2,pn=(n-exN)/2;assert.equal(pc,6+1);assert.equal(pn,5+2);return[c,exC,c-exC,pc,n,exN,n-exN,pn,5+1];},
"UC-ADV11-I131":()=>{const L=6.94,Co=58.933,O=15.999,f=.35,orig=L+Co+2*O,fin=f*L+Co+2*O,x=1-f,Q=x*96485.33212,cap=Q/(3.6*orig);assert.ok(Math.abs(f+3+x-4)<1e-12);return[orig,fin,3+x,Q,cap,3.85*cap,f,x*L,x];},
"UC-ADV11-A129":()=>{let a=.4,b=.15,t=4e-9,theta=t*b/(a-b),D=1/(6*theta),kb=1.380649e-23,eta=.89e-3,T=298.15;const rad=Math.cbrt(kb*T/(8*Math.PI*eta*D));const r2=a*(2*theta)/(2*theta+t);assert.ok(r2>b&&r2<a);return[theta*1e9,D,rad*1e9,2*theta*1e9,r2,3*b/(2+b),theta/t,b];},
"UC-ADV11-A130":()=>{const Vol=[.02,.01,1e-5],K=[1,100,1000],w=Vol.map((v,i)=>v*K[i]),d=w.reduce((a,b)=>a+b),g=1e-8/d,n=w.map(v=>g*v);assert.ok(Math.abs(n.reduce((a,b)=>a+b)-1e-8)<1e-20);let prev=1e-8/(Vol[0]+K[1]*Vol[1]);return[d,g,100*g,1000*g,n[0]*1e9,n[1]*1e9,n[2]*1e9,n[2]/1e-8,prev,1-g/prev,10];},
"UC-ADV11-A131":()=>{const b=8.617333262145e-5,ratio=0.19055997528370827,temp=-1.5/(b*Math.log(ratio)),f=ratio**(2.2/1.5),ne=.018/.012*1e17;assert.ok(temp>0&&f<ratio);return[temp,ratio,f,ne,ne*1e6,1.5/(b*temp**2),.01*b*temp/1.5,.018];},
"UC-ADV11-I128":()=>{const ge=2.0023,lam=-830,gp=2.3,gt=2.07,d1=-8*lam/(gp-ge),d2=-2*lam/(gt-ge),ga=(gp+2*gt)/3,gr=Math.sqrt((gp*gp+2*gt*gt)/3);assert.ok(d1>0&&d2>0&&Math.abs(ge-8*lam/d1-gp)<1e-12);return [d1,d2,1e7/d1,1e7/d2,ga,gr,gr*Math.sqrt(.75),gp-gt,Math.abs(lam)/d1];},
"UC-ADV11-A128":()=>{const tau0=4,tau1=1.6,k0=1/tau0,k=1/tau1-k0,e=k/(k+k0),d=5*((1-e)/e)**(1/6),t2=1/(k0+2*k),e2=2*k/(k0+2*k);assert.ok(e2<1&&t2<tau1);return [k0,k,e,d,.8*tau1/tau0,t2,e2,.8*t2/tau0];},
"UC-ADV11-O125":()=>{const K=4;const solve=(a,b,c,d)=>{let lo=0,hi=a;for(let j=0;j<110;j++){const x=(lo+hi)/2;if((c+x)*(d+x)/((a-x)*(b-x))>K)hi=x;else lo=x;}return (lo+hi)/2;};const x=solve(1,2,.2,.1),w=(.1+x)/2,y=solve(1-x,2-x,.2+x,w),tot=x+y;assert.ok(x>0&&tot<1&&y>0&&Math.abs((1-tot)+(.2+tot)-1.2)<1e-12);return [x,1-x,2-x,.2+x,.1+x,w,y,tot,.2+tot,tot,1-tot];},
"UC-ADV11-P125":()=>{const R=8.314462618,E=60000,n=3,k1=Math.pow(Math.log(2),1/3)/100,k2=k1*Math.exp(E/R*(1/300-1/320)),t50=Math.pow(Math.log(2),1/3)/k2,t90=Math.pow(Math.log(10),1/3)/k2,rate=3*k2**3*t50**2*.5;assert.ok(t90>t50&&rate>0);return [k1,k2,t50,t90,rate,k2/k1,k1*Math.exp(E/(R*300))];}
});

const groups={inorganic:'I',analytical:'A',organic:'O',physical:'P'};
const ids=new Set(),titles=new Set(),families=new Set();let count=0;
const previousFamilies=new Set();
for(const sub of Object.keys(groups)){
 for(const row of read('editorial/advanced_integrated_v10/'+sub+'.jsonl').trim().split('\n').map(JSON.parse))previousFamilies.add(row.model_family);
}
for(const [sub,letter] of Object.entries(groups)){
 const rows=read('editorial/advanced_integrated_v11/'+sub+'.jsonl').trim().split('\n').map(JSON.parse);
 assert.ok(rows.length>=1&&rows.length<=25);
 rows.forEach((x,i)=>{
  count++;assert.equal(x.id,'UC-ADV11-'+letter+(126+i-(sub==='organic'||sub==='physical'?3:0)));
  assert.equal(x.subject,sub);assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
  assert.ok(x.answer_values.length>=4&&x.answer_values.length===x.answer_units.length&&x.answer_values.every(Number.isFinite));
  assert.ok(Array.isArray(x.answer_names)&&x.answer_names.length===x.answer_values.length,'answer_names must match values '+x.id);
  assert.ok(x.answer_names.every(n=>typeof n==='string'&&n.trim().length>=2&&!/^主要结果\d+$/.test(n.trim())&&!/^answer\s*\d+$/i.test(n.trim())),'generic or missing answer label '+x.id);
  assert.equal(new Set(x.answer_names).size,x.answer_names.length,'duplicate answer label '+x.id);
  assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,'awaiting_expert_review');assert.equal(x.novelty_review_status,'pending_cross_series_model_review');assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family)&&!previousFamilies.has(x.model_family));
  ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(witness,x.id),'Missing witness '+x.id);
  const v=witness[x.id]();assert.equal(v.length,x.answer_values.length);
  v.forEach((a,j)=>{const b=x.answer_values[j],scale=Math.max(Math.abs(a),Math.abs(b),1e-14);assert.ok(Math.abs(a-b)<=1e-9*scale,x.id+' index '+j+' '+a+' vs '+b);});
 });
}
assert.equal(Object.keys(witness).length,count);
const queue=JSON.parse(read('editorial/advanced_integrated_v11/overlap_review_queue.json'));
assert.equal(queue.current_draft_count,count);assert.equal(queue.expert_approved,0);
for(const q of queue.new_items_requiring_cross_series_comparison)assert.ok(ids.has(q.new_id));
const manifest=JSON.parse(read('release/chemistry-approved-manifest.json'));
assert.equal(manifest.advanced_editorial_items,406+100+count);
assert.equal(manifest.eleventh_series_work_in_progress_items,count);
assert.equal(manifest.eleventh_series_pending_cross_series_novelty_review,count);
assert.equal(manifest.approved_count,0);assert.deepEqual(manifest.items,[]);
console.log(JSON.stringify({pass:true,series:11,count,distribution:Object.fromEntries(Object.keys(groups).map(s=>[s,read('editorial/advanced_integrated_v11/'+s+'.jsonl').trim().split('\n').length])),independently_checked_answer_vectors:count,expert_approved:0}));
