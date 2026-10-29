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

Object.assign(witness,{
"UC-ADV11-I132":function I132(){const n=[.042,.018,.012,.014],e=[8,2,10,2],h=[9,2,12,2],E=n.reduce((a,v,i)=>a+v*e[i],0),H=n.reduce((a,v,i)=>a+v*h[i],0),N=.042+.018+2*.012;return [.12-N,E,E*96485.33212,H,...n.map((v,i)=>v*e[i]/E),N/.12,.042/N]},
"UC-ADV11-A132":function A132(){const a=.6915,b=.3085,c=.02,d=.98,s=.01,r=1.4,m=s*(c-r*d)/(r*b-a),der=-d/(c-r*d)-b/(r*b-a);return[r,m/s,m,m/.025,d*s/(b*m+d*s),c*s/(a*m+c*s),der,Math.abs(der)*.005]},
"UC-ADV11-I133":function I133(){const R=8.314462618,E=25+R*Math.log(5),p=t=>1/(1+Math.exp(18000/(R*t)-25/R)/5),r=t=>p(t)/(1-p(t));return[E,18000/E,r(300),p(300),r(400),p(400),3*p(300),Math.sqrt(24*p(300)),(18000-300*E)/1000]},
"UC-ADV11-A133":function A133(){const km=1e5,kn=1e3;let x=.0002;for(let j=0;j<80;j++){let f=x+.001*km*x/(1+km*x)+.002*kn*x/(1+kn*x)-.0015,df=1+.001*km/(1+km*x)**2+.002*kn/(1+kn*x)**2,xx=x-f/df;if(xx<=0)xx=x/2;if(Math.abs(xx-x)<1e-18){x=xx;break}x=xx;}let m=.001*km*x/(1+km*x),n=.002*kn*x/(1+kn*x);return[x,m,n,.001-m,.002-n,900*m+300*n,150*m+1200*n,m/.001,n/.002]},
"UC-ADV11-O129":function O129(){const R=8.314462618,kB=1.380649e-23,h=6.62607015e-34,k=(t,H,S)=>kB*t/h*Math.exp((S-H/t)/R),e=k(298.15,55000,-90),x=k(298.15,60000,-80),z=e+x,X=-Math.expm1(-z*30);return[e,x,e/x,e/z,X,.01*X*e/z,.01*X*x/z,k(400,55000,-90)/k(400,60000,-80),500,x/z]},
"UC-ADV11-O130":function O130(){const N=16000,dt=30/N,k=.08,j=.02,r=.01;let x=[.5,.5,0,0];const d=v=>[-(k+r)*v[0]+r*v[1],r*v[0]-(j+r)*v[1],k*v[0],j*v[1]];for(let n=0;n<N;n++){let a=d(x),b=d(x.map((v,i)=>v+dt*a[i]/2)),c=d(x.map((v,i)=>v+dt*b[i]/2)),e=d(x.map((v,i)=>v+dt*c[i]));x=x.map((v,i)=>v+dt*(a[i]+2*b[i]+2*c[i]+e[i])/6);}let [R,S,pr,ps]=x,nr=.5*(1-Math.exp(-k*30)),ns=.5*(1-Math.exp(-j*30));return[R,S,pr,ps,pr+ps,(pr-ps)/(pr+ps),(S-R)/(R+S),-.06+Math.sqrt(.001),(nr-ns)/(nr+ns)]},
"UC-ADV11-P129":function P129(){const R=8.314462618,F=96485.33212,eps=78.5*8.8541878128e-12,T=298.15,c=10,x=F*(-.075)/(R*T),s=Math.sqrt(8*eps*R*T*c)*(Math.exp(x/2)-Math.exp(-x/2))/2,C=Math.sqrt(8*eps*R*T*c)*F/(R*T)*(Math.exp(x/2)+Math.exp(-x/2))/4,p=.01*Math.exp(-x),n=.01*Math.exp(x);return[s,C,p,n,Math.sqrt(eps*R*T/(2*F*F*c))*1e9,-s/F,p*n,(p+n)/2]},
"UC-ADV11-P130":function P130(){const a=.364,b=4.27e-5,R=8.314462618,T=350,P=5e6;let v=R*T/P;for(let j=0;j<80;j++){let f=R*T/(v-b)-a/v**2-P,df=-R*T/(v-b)**2+2*a/v**3,n=v-f/df;if(n<=b)n=(v+b)/2;if(Math.abs(n-v)<1e-18){v=n;break}v=n;}let slope=-R*T/(v-b)**2+2*a/v**3;return[8*a/(27*R*b),a/(27*b*b),3*b,v,P*v/(R*T),-1/(v*slope),(T*(-R/(v-b)/slope)-v)/37*1e5,slope,2*a/(R*b)]}
});

Object.assign(witness,{
"UC-ADV11-I134":()=>{const ni=10.3,fe=9.45,x=(ni-9.62)/(ni-fe),a=1-x,b=x,c=x,d=2-x,m=58.6934+2*55.845+4*15.999;const ma=2*a+5*b,mb=2*c+5*d,net=mb-ma;assert.ok(x>=0&&x<=1&&Math.abs((8-3.2)/6-x)<1e-12);return[x,a,b,c,d,ma,mb,net,ni*a+fe*b,(ni*c+fe*d)/2,m,8*m/1000/(6.02214076e23*(.834e-9)**3),net*6.02214076e23*9.2740100783e-24/(m/1000)];},
"UC-ADV11-A134":()=>{const c=700000-1.5*50000,r=c/1e6/1.02,n=2e-9*(.95-.02*r)/(r*.8258-.0986),s=n-.1e-9,u=Math.sqrt((700000+1.5**2*50000)/1e12+c*c/1e18)/1.02,d=-2e-9*(.95*.8258-.02*.0986)/(r*.8258-.0986)**2;assert.ok(s>0&&c>0);return[c,r,n,s,s*87.62*1e6,u,d,Math.abs(d)*u,Math.abs(d)*u/s,(.0986*n+.95*2e-9)/(.8258*n+.02*2e-9)];},
"UC-ADV11-O131":()=>{const p=.65,b=300*p,n=250-b,q=2*p*p,ea=1+3*p*p/(1-q),eb=3*p/(1-q);assert.ok(q<1);return[1/Math.sqrt(2),b,300-b,300-b,n,31500/n,250/n,(1-p)**3,3*p*(1-p)**2,3*p*p*(1-p),p**3,q,ea,eb,ea+eb];},
"UC-ADV11-P131":()=>{const x=(1+Math.log(2)/1.5)/2,g1=Math.exp(1.5*(1-x)**2),g2=Math.exp(1.5*x*x),b=.45,h1=Math.exp(1.5*(1-b)**2),h2=Math.exp(1.5*b*b),pr=b*h1*80+(1-b)*h2*40;assert.ok(Math.abs(g1*80-g2*40)<1e-10);return[x,g1,g2,80*g1,x,1.5*x*(1-x),x*Math.log(x)+(1-x)*Math.log(1-x)+1.5*x*(1-x),1/x+1/(1-x)-3,pr,b*h1*80/pr,h1,h2,.25];}
});
Object.assign(witness,{
"UC-ADV11-I135":()=>{const l=.8,H=.08,T=298.15,q=Math.sqrt(1-4*H*H/(l*l)),v=-H*H/l,zero=l/4-H,E=zero-v,kT=8.617333262145e-5*T,boltz=Math.exp(-E/kT),rate=1.380649e-23*T/6.62607015e-34*boltz;assert.ok(q>0&&q<1&&E>0);return[q,v,zero,E,l/4,2*H,kT,boltz,rate,l/2-l*l/(4*H),q*q];},
"UC-ADV11-A135":()=>{const i1=85.25,i4=46,i9=33.91666666666667,t1=i1-i4,t2=i4-i9,K=1.5*(5*t1/3-t2),slope=(.5*K-t1)/3,base=i1-K-slope,F=96485.33212;const D=Math.PI*(K*1e-6/(F*.5*1e-6))**2,Qf=2*K*(4-1),Qbg=base*15+.5*slope*(256-1),n=Qf*1e-6/F;assert.ok(D>0&&Math.abs(K/4+base+16*slope-29)<1e-9);return[K,base,slope,D,K/4+base+16*slope,Qf,Qf+Qbg,n,n*107.8682*1e6,Math.sqrt(16*D),Qbg];},
"UC-ADV11-O132":()=>{const H=.001,G=.0015,k1=1000,k2=2000,fun=g=>g+H*(k1*g+2*k1*k2*g*g)/(1+k1*g+k1*k2*g*g)-G;let lo=0,hi=G;for(let i=0;i<105;i++){const mid=(lo+hi)/2;if(fun(mid)>0)hi=mid;else lo=mid;}const g=(lo+hi)/2,Z=1+k1*g+k1*k2*g*g,h=H/Z,hg=k1*h*g,hg2=k1*k2*h*g*g;assert.ok(Math.abs(h+hg+hg2-H)<1e-14&&Math.abs(g+hg+2*hg2-G)<1e-14);return[g,h,hg,hg2,h/H,hg/H,hg2/H,(hg+2*hg2)/H,(hg+2*hg2)/G,4*k2/k1,k1*k2];},
"UC-ADV11-P132":()=>{const a=1.2,b=2.7,tr=b-1-a*a,det=a*a,w=Math.sqrt(det-tr*tr/4),t2=2.4-1-a*a;assert.ok(det>0&&tr>0);return[a,b/a,tr,det,tr/2,w,1+a*a,a,2*Math.PI/a,t2,Math.sqrt(det-t2*t2/4),b-1,a*a,-b,-a*a];}
});
Object.assign(witness,{
"UC-ADV11-I136":()=>{const m=.24*.59/(.24+.59),e=13.605693122994*m/8.5**2,a=.0529177210903*8.5/m,edge=3.370-e,thermal=8.617333262145e-5*298.15;assert.ok(m<.24&&edge>0);return[m,e,a,edge,1239.841984/edge,thermal,e/thermal,(.25/(a*1e-7))**3];},
"UC-ADV11-A136":()=>{const L=150,B=.012,C=.00006,a=.002,alpha=1.15,k=4,u0=Math.sqrt(B/C),h0=a+2*Math.sqrt(B*C),n0=L/h0,r=n=>Math.sqrt(n)/4*(alpha-1)/alpha*k/(1+k),umax=.5/(.0004*L),hh=a+B/umax+C*umax,nn=L/hh;assert.ok(umax<u0);return[u0,h0,n0,r(n0),umax,hh,nn,r(nn),L/umax,L*(1+k)/umax,L*(1+k/alpha)/umax];},
"UC-ADV11-O133":()=>{const R=8.314462618,T1=298.15,T2=320,p=(8.4-3)/9,q=(7.95-3)/9,K=p/(1-p),L=q/(1-q),H=-R*Math.log(L/K)/(1/T2-1/T1),S=R*Math.log(K)+H/T1,V=Math.exp(S/R-H/(R*350));assert.ok(p>0&&p<1&&q>0&&q<1);return[p,1-p,K,q,1-q,L,-R*T1*Math.log(K),H,S,V,V/(1+V)];},
"UC-ADV11-P133":()=>{const V=1000*8.314462618*310/96485.33212,N=2*5+.5*145+150,D=2*140+.5*10+150,sK=V*2*(5/N-140/D),sN=V*.5*(145/N-10/D),sC=V*(150/N-150/D);assert.ok(Math.abs(sK+sN+sC)<1e-12);return[N,D,N/D,V*Math.log(N/D),V*Math.log(5/140),V*Math.log(145/10),0,sK,sN,sC];}
});
Object.assign(witness,{
"UC-ADV11-I137":()=>{const x=.2,a=.542e-9,Z=4,NA=6.02214076e23,T=800,T2=900,sigma=.015*100,H=.7,e=1.602176634e-19,k=1.380649e-23;const delta=x/2,M=.8*140.116+.2*157.25+(2-delta)*15.999,n=Z*delta/a**3,D=sigma*k*T/(H*n*(2*e)**2),f=6*D/(a/2)**2,ratio=Math.exp(.7/8.617333262145e-5*(1/T-1/T2));assert.ok(D>0&&ratio>1&&Math.abs(.8*4+.2*3-1.9*2)<1e-12);return[delta,Z*delta,M,Z*M/1000/(NA*a**3),n,D,f,ratio,D*ratio,.015*ratio*T/T2];},
"UC-ADV11-A137":()=>{const E=18000/.6,app=t=>.5/(E*t),eof=app(250),mx=app(180),my=app(320),sx=Math.sqrt(2*6e-10*180**3)/.5,sy=Math.sqrt(2*8e-10*320**3)/.5,eps=78.5*8.8541878128e-12;assert.ok(mx>eof&&my<eof&&my>0);return[E,eof,mx,my,eof,mx-eof,my-eof,-eof*.00089/eps,sx,sy,140/(2*(sx+sy))];},
"UC-ADV11-O134":()=>{const ke=.06,kx=.025,re=.01,rx=.005,dt=30/30000;let A=1,E=0,X=0;const f=y=>[-(ke+kx)*y[0]+re*y[1]+rx*y[2],ke*y[0]-re*y[1],kx*y[0]-rx*y[2]];let z=[A,E,X];for(let i=0;i<30000;i++){const k1=f(z),k2=f(z.map((v,j)=>v+dt*k1[j]/2)),k3=f(z.map((v,j)=>v+dt*k2[j]/2)),k4=f(z.map((v,j)=>v+dt*k3[j]));z=z.map((v,j)=>v+dt*(k1[j]+2*k2[j]+2*k3[j]+k4[j])/6);} [A,E,X]=z;const tr=-(ke+re+kx+rx),det=(ke+re)*(kx+rx)-ke*kx,w=Math.sqrt(tr*tr-4*det);assert.ok(Math.abs(A+E+X-1)<1e-12&&Math.abs(A-1/12)>.01);return[A,E,X,E+X,E/(E+X),1/12,1/2,5/12,(tr-w)/2,(tr+w)/2,ke/re,kx/rx];},
"UC-ADV11-P134":()=>{const M=350,H=200,C=5,R=.008314462618,g=t=>H*(1-t/M)+C*((t-M)-t*Math.log(t/M)),star=M*Math.exp(-H/(M*C));let lo=250,hi=300;for(let i=0;i<110;i++){let mid=(lo+hi)/2;if(g(mid)>0)hi=mid;else lo=mid;}let cold=(lo+hi)/2,t=298.15,enthalpy=H+C*(t-M),entropy=H/M+C*Math.log(t/M),dG=g(t),K=Math.exp(-dG/(R*t));assert.ok(cold<star&&star<M&&Math.abs(g(cold))<1e-11);return[cold,star,g(star),dG,enthalpy,entropy,K/(1+K),K,g(250),g(M),g(400)];}
});
Object.assign(witness,{"UC-ADV11-I138":()=>{const ni=2,fe=5,x=(4.4-ni)/(fe-ni),A=(1-x)*ni+x*fe,B=x*ni+(2-x)*fe,net=B-A,M=58.6934+2*55.845+4*15.999,N=6.02214076e23,mb=9.2740100783e-24;assert.ok(x>=0&&x<=1&&net>0&&Math.abs((1-x)+x-1)<1e-14);return[x,A,B,net,M,net*mb*N/(M/1000),net*mb*N,(8-net)/6,1-x,x,2+2*3-4*2];}});

Object.assign(witness,{
"UC-ADV11-I139":()=>{const l1=.02,l2=.08,y1=.005,y2=.008,L=.04,c=.1,t=120,S=1e-4;const s=(1/y1-1/y2)/(1/l1-1/l2),b=1/y1-s/l1,k=1/b,a=s/b,K=k*L/(L+a),prod=S*(1-Math.exp(-K*t));assert.ok(k>0&&a>0&&Math.abs(k*.08/(.08+a)-y2)<1e-12);return[k,a,a/c,K,prod/S,prod,prod,k,Math.log(2)/K,a/(a+L),0];},
"UC-ADV11-A138":()=>{const F=96485.33212,A=.19635,C=1e-6,nu=.01,d=1.2e-5,k=.003,w=r=>r*Math.PI/30,il=r=>.62*F*A*C*d**(2/3)*nu**(-1/6)*Math.sqrt(w(r)),ik=F*A*C*k,im=r=>1/(1/ik+1/il(r)),i1=im(400),i2=im(1600),x1=1/Math.sqrt(w(400)),x2=1/Math.sqrt(w(1600)),s=(1/i1-1/i2)/(x1-x2),b=1/i1-s*x1,L=1/s,I900=1/(b+s/Math.sqrt(w(900))),D=(L/(.62*F*A*C*nu**(-1/6)))**1.5,lev=.62*F*A*C*D**(2/3)*nu**(-1/6)*Math.sqrt(w(900));assert.ok(b>0&&s>0&&Math.abs(I900-im(900))<1e-15);return[i1*1e6,i2*1e6,I900*1e6,1/b*1e6,1/b/(F*A*C),D,L*1e6,lev*1e6,I900/lev,w(900),1-I900/lev];},
"UC-ADV11-O135":()=>{const m=.02,c=.03,d=.025,old=.1,CT=.01,K=c/m,B=d/(m*m);let lo=0,hi=CT;for(let t=0;t<120;t++){let x=(lo+hi)/2;if(2*B*x*x+(1+K)*x>CT)hi=x;else lo=x;}let mon=(lo+hi)/2,cyc=K*mon,dim=B*mon*mon;assert.ok(Math.abs(mon+cyc+2*dim-CT)<1e-14);return[K,B,mon,cyc,dim,mon/CT,cyc/CT,2*dim/CT,c/old,2*d/old,dim/cyc,mon+cyc+2*dim];},
"UC-ADV11-P135":()=>{const kb=1.380649e-23,T=298.15,w=50,r1=.04,r2=.06,rm=.05,dr=200,vis=.001,mean=1e16,Delta=r2*r2-r1*r1,buoy=2*kb*T*4/(w*w*Delta),rad=(3*buoy/(4*Math.PI*dr))**(1/3),zeta=6*Math.PI*vis*rad,D=kb*T/zeta,beta=buoy*w*w/(2*kb*T),n1=mean*beta*Delta/Math.expm1(beta*Delta),n2=n1*Math.exp(beta*Delta),nmid=n1*Math.exp(beta*(rm*rm-r1*r1)),v=buoy*w*w*rm/zeta,Pe=buoy*w*w*r2*(r2-r1)/(kb*T);assert.ok(D>0&&n2>nmid&&nmid>n1);return[buoy,rad*1e9,zeta,D,beta,Math.exp(beta*Delta),n1,n2,nmid,v,Pe,mean,n1*Math.expm1(beta*Delta)/(beta*Delta)];}
});

Object.assign(witness,{
"UC-ADV11-I140":()=>{const t=[700,8600,10700],s=(t[0]+t[2]-t[1])/7,u=(3*s-t[0])/5,d=(t[1]+s+10*u)/10,v=[-4*d-s+4*u,-4*d+2*s-u,6*d-2*s-6*u,6*d+2*s-u];assert.ok(v[0]<v[1]&&v[1]<v[2]&&v[2]<v[3]);return[d,s,u,10*d,...v,1e7/t[0],1e7/t[1],1e7/t[2],2*v[0]+v[1]+v[2]+v[3]];},
"UC-ADV11-A139":()=>{const R=8.314462618,e0=75000,A0=1e8,T=[425,440,455],k=t=>A0*Math.exp(-e0/(R*t)),b=t=>k(t)*R*t*t/e0;let y=t=>Math.log(b(t)/(t*t)),s=(y(440)-y(425))/(1/440-1/425),E=-R*s,AA=Math.exp(y(425)+E/(R*425))*E/R;assert.ok(Math.abs(AA/A0-1)<1e-9);return[b(425),b(440),E/1000,AA,k(425),k(440),b(455),60*b(455),1.2,-90,b(440)/b(425),s];}
});

Object.assign(witness,{
"UC-ADV11-O136":()=>{const u=8400/1.2,v=2400/.8,P=u/(u+v),n=.01*.5,rt=8.314462618*298.15,m=8*12.011+8*1.008+15.999;assert.ok(Math.abs(P+(1-P)-1)<1e-14&&Math.abs(n*.8+n*.2-n)<1e-14);return[P,1-P,P/(1-P),P*n,(1-P)*n,.8*n,.2*n,.01-n,-rt*Math.log(P/(1-P))/1000,m,m+15.999,P*n+(1-P)*n+.01-n];},
"UC-ADV11-P136":()=>{const C=.1,K=20,w=.1*Math.sqrt(17),a=(Math.sqrt(1+8*K*C)-1)/(4*K),b=K*a*a,kr=w/Math.sqrt(1+8*K*C),kf=K*kr,L=kr+4*kf*a,t=1/L,Z=kf*a*a/L;assert.ok(Math.abs(a+2*b-C)<1e-14&&Math.abs(L-w)<1e-12);return[a,b,kr,kf,L,t,L/(2*Math.PI),Z,Z/Math.sqrt(2),Z/2,-Math.PI/4,a+2*b,1+4*K*a];}
});

Object.assign(witness,{"UC-ADV11-I141":()=>{const K=120,T=100,R=8.314462618,kb=1.380649e-23,NA=6.02214076e23,mb=3*9.2740100783e-24,r=Math.exp(-4*K/T),p=r/(3+r),mean=(3+9*r)/(3+r),chi=NA*mb*mb/(kb*T)*mean;assert.ok(p>0&&p<1&&mean>=1&&mean<=3);return[r,p,3/(3+r),R*K*(-1+4*p),R*(4*K/T)**2*p*(1-p),R*(Math.log(6+2*r)+4*K/T*p),chi,mean/3,mean,6+2*r,R*Math.log(6),R*Math.log(8)];}});

Object.assign(witness,{"UC-ADV11-A140":()=>{const w=3e-7,z=1.5e-6,t=.00045,tt=3e-6,f=.15,T=298.15,NA=6.02214076e23,kb=1.380649e-23,eta=.00089,g0=1/(20*(1-f)),N=1/(g0*(1-f)),s=z/w,D=w*w/(4*t),rad=kb*T/(6*Math.PI*eta*D),V=Math.pow(Math.PI,1.5)*w*w*z,G=x=>1/N/(1+x/t)/Math.sqrt(1+x/(s*s*t))*(1+f/(1-f)*Math.exp(-x/tt));assert.ok(N>0&&D>0&&rad>0&&Math.abs(4*D*t/(w*w)-1)<1e-12);return[s,g0,N,D,rad*1e9,V*1e18,N/(NA*V*1000)*1e9,N/V,G(tt),G(t),1/N,f/(1-f),4*D*t/(w*w)];}});

Object.assign(witness,{
"UC-ADV11-O137":()=>{const C=20,F=96485.33212,f=.8,n=C*f/F,M=n/2,A=[3600/1,5760/1.2,1280/.8],tot=A.reduce((x,y)=>x+y),P=A.map(y=>y/tot),fa=(2*P[0]+P[1])/2,nn=P.map(y=>y*M),na=fa*n,nb=(1-fa)*n,V=n*.08314462618*298.15*1000;assert.ok(Math.abs(2*nn[0]+nn[1]-na)<1e-14&&Math.abs(2*nn[2]+nn[1]-nb)<1e-14);return[...P,...nn,n,M,na,nb,n,V,fa,2*na+3*nb,2*nn[0]+3*nn[1]+4*nn[2]+n,2*n];},
"UC-ADV11-P137":()=>{const D=2e-9,k=.05,R=8.314462618,E=45000,T=298.15,V=318.15,k2=k*Math.exp(E/R*(1/T-1/V)),lam=Math.sqrt(k/D),c=2*D*lam,l2=Math.sqrt(k2/D),c2=2*D*l2,ratio=c2/c;assert.ok(c>0&&Math.abs(D*lam*lam-c*lam+k)<1e-12);return[k,lam,c,c*1e6,1/lam*1e6,k2,l2,c2,c2*1e6,ratio,Math.log(ratio),E/(2*R)*(1/T-1/V),D*lam*lam-c*lam+k];}
});

Object.assign(witness,{
"UC-ADV11-I142":()=>{const ND=1e16,N0=4.7e17,g=2,d=.05,kb=8.617333262145e-5,nc=t=>N0*(t/300)**1.5,b=t=>g*Math.exp(d/(kb*t))/nc(t),ne=t=>2*ND/(1+Math.sqrt(1+4*b(t)*ND)),Ec=t=>kb*t*Math.log(nc(t)/ne(t)),n1=ne(300),n2=ne(150),sig=1.602176634e-19*n1*8500;assert.ok(n2<n1&&n1<ND&&n2<ND&&Math.abs(n1*(1+b(300)*n1)/ND-1)<1e-12);return[nc(300),nc(150),b(300),b(150),n1,n2,n1/ND,n2/ND,Ec(300),Ec(150),sig,1/sig,n2/n1,ND-n1,ND-n2];},
"UC-ADV11-A141":()=>{const M=24678.9,H=1.007276466621,O=15.99491461957,iso=1.003354835,a=M/12+H,b=M/13+H,Z=(b-H)/(a-b),N=Z*(a-H),deltaA=iso/Z,deltaB=iso/(Z+1);assert.ok(Math.abs(Z-12)<1e-11&&Math.abs(N-M)<1e-8);return[a,b,a-b,Z,N,deltaA,deltaB,N+O,a+O/Z,b+O/(Z+1),O/Z,O/(Z+1),a/deltaA,a/(O/Z),deltaA/(a-b)];}
});

Object.assign(witness,{
"UC-ADV11-O138":()=>{const kb=1.380649e-23,h=6.62607015e-34,R=8.314462618,T=350,dh=84000,ds=-35,phi=.12,sigma=1e-17,flux=2e17,NA=6.02214076e23,n0=1e-8,time=10,k=kb*T/h*Math.exp(-dh/(R*T)+ds/R),p=phi*sigma*flux,kt=k+p,x=-Math.expm1(-kt*time),nC=n0*x*k/kt,nD=n0*x*p/kt,rem=n0*(1-x),abs=nD*NA/phi,inc=flux*time;assert.ok(abs<inc&&Math.abs(nC+nD+rem-n0)<1e-21);return[dh/1000,-ds,dh-T*ds,k,p,kt,x,nC,nD,rem,nD/nC,abs,inc,abs/inc,n0*NA*sigma];},
"UC-ADV11-P138":()=>{const ep=8.8541878128e-12,er=3,d=1e-6,g=.072,V=30,V0=1e-9,c=ep*er/d,u0=Math.cos(110*Math.PI/180),u=u0+c*V*V/(2*g),theta=Math.acos(u),f=z=>Math.cbrt(3*V0*(1-z*z)**1.5/(Math.PI*(2-3*z+z**3))),a=f(u),a0=f(u0),A=Math.PI*a*a,H=a*(1-u)/Math.sqrt(1-u*u),q=c*A*V,energy=q*V/2;assert.ok(u>=-1&&u<=1&&a>a0&&V/d<5e7);return[c,u0,u,theta*180/Math.PI,a0*1e3,a*1e3,a/a0,A*1e6,H*1e3,q*1e9,energy*1e9,V/d/1e6,5e7*d,c*V*V/2];}
});

Object.assign(witness,{
"UC-ADV11-I143":()=>{const E=14.4125e3,c=299792458,ev=1.602176634e-19,h=6.62607015e-34,u=1.66053906660e-27,M=56.9354*u,kb=8.617333262145e-5,ph=.025,G=4.66e-9,r=(E*ev)**2/(2*M*c*c)/ev,x=r/ph,g=t=>Math.exp(-x*(Math.exp(ph/(kb*t))+1)/(Math.exp(ph/(kb*t))-1)),a=g(80),b=g(300),lam=h*c/(E*ev),life=(h/(2*Math.PI))/(G*ev);assert.ok(a>b&&b>0&&r>0);return[M,r,r*1e3,x,a,b,b/a,lam*1e12,G,life,G/E*c*1000,E*.001/c,ph/(kb*300)];},
"UC-ADV11-A142":()=>{const kb=1.380649e-23,T=298.15,K=kb*T/1e-21,x0=.4,k0=.1,ra=100,rb=1000,force=r=>K/x0*Math.log(r*x0/(k0*K)),a=force(ra),b=force(rb),xx=K*Math.log(rb/ra)/(b-a),ko=ra*xx/K*Math.exp(-a*xx/K),haz=(r,F)=>ko*Math.exp(F*xx/K),S=(r,F)=>Math.exp(-ko*K/(r*xx)*(Math.exp(F*xx/K)-1));assert.ok(xx>0&&ko>0&&a>0&&b>a);return[K,a,b,b-a,xx,ko,haz(ra,a),haz(rb,b),S(ra,a),S(rb,b),1-S(ra,a),rb/ra,Math.exp(a*x0/K)];},
"UC-ADV11-O139":()=>{const ka=.004,kc=.196,r1=.05,r2=.5,reff=.001,t=600,C=20e-6,dm=1.006276746,obs=k=>ka*k/(kc+k),a=obs(r1),b=obs(r2),s=(1/a-1/b)/(1/r1-1/r2),v=1/a-s/r1,ko=1/v,close=s/v,p=1-Math.exp(-b*t),q=1-Math.exp(-reff*t),p0=(1-p)*(1-q),p1=p*(1-q)+(1-p)*q,p2=p*q;assert.ok(Math.abs(p0+p1+p2-1)<1e-13&&close>ko);return[a,b,s,v,ko,close,ko/(ko+close),p,q,p0,p1,p2,p+q,(p+q)*dm,C*p2,p0+p1+p2,ko/(ko+close+r2)];},
"UC-ADV11-P139":()=>{const r=8,b=2,R=8.314462618,T=298.15,t=60,p=r/(r+b),J=(r-b)/3,A=3*Math.log(r/b),S=(r-b)*Math.log(r/b),P=R*T*S,variance=(r+b)*t/9;assert.ok(J>0&&S>0&&Math.abs(3*J-(r-b))<1e-12);return[p,1-p,1/3,r/3,b/3,J,A,R*T*A/1000,S,P,P/1000,J*t,variance,Math.sqrt(variance),Math.exp(-A),r+b];}
});

Object.assign(witness,{
"UC-ADV11-I144":()=>{const d=15e-9,vol=(4*Math.PI/3)*(d/2)**3,K=30000,kb=1.380649e-23,t0=1e-9,m1=.001,m2=100,E=K*vol,theta=E/kb,T1=theta/Math.log(m1/t0),T2=theta/Math.log(m2/t0),s=(Math.log(m2)-Math.log(m1))/(1/T2-1/T1),attempt=Math.exp(Math.log(m2)-s/T2),ki=s*kb/vol,mag=4e5*vol;assert.ok(T1>T2&&Math.abs(attempt/t0-1)<1e-12);return[vol,E,E/1.602176634e-19,theta,T1,T2,s,attempt,ki,mag,mag*.01/E,t0*Math.exp(E/(kb*300)),Math.log(m2/m1),T1/T2,1/T2-1/T1];},
"UC-ADV11-A143":()=>{const M=10e-6,L=20e-6,K=2e-6,V=200e-6,h1=-35,h2=-5,b1=5,b2=20,n=(h2-h1)/(b2-b1),hi=h1-n*b1;let lo=0,up=Math.min(M,L);for(let i=0;i<120;i++){let x=(lo+up)/2;if(x*K>(M-x)*(L-x))up=x;else lo=x;}let c=(lo+up)/2,fm=M-c,fl=L-c,q1=c*V*h1*1e3,q2=c*V*h2*1e3,pro=n*c*V;assert.ok(c>0&&c<M&&c<L&&Math.abs(K*c-fm*fl)<1e-18);return[n,hi,K,1/K,c,fm,fl,c/M,q1*1e6,q2*1e6,(q2-q1)*1e6,pro*1e9,pro*(b2-b1)*1e3*1e6,fm*fl/(K*c)];},
"UC-ADV11-O140":()=>{const aa=300,ab=500,bb=200,t=aa+ab+bb,a=aa/t,h=ab/t,b=bb/t,pa=a+h/2,pb=b+h/2,pAA=a/pa,pAB=(h/2)/pa,pBA=(h/2)/pb,pBB=b/pb,H=-(a*Math.log(pAA)+(h/2)*Math.log(pAB)+(h/2)*Math.log(pBA)+b*Math.log(pBB));assert.ok(Math.abs(pAA+pAB-1)<1e-13&&Math.abs(pa+pb-1)<1e-13);return[a,h,b,pa,pb,pAA,pAB,pBA,pBB,1/pAB,1/pBA,1-pAB-pBA,H,1/H,10000*h,pa*pAB-pb*pBA];},
"UC-ADV11-P140":()=>{const kb=1.380649e-23,T=298.15,NA=6.02214076e23,R=8.314462618,e0=8.8541878128e-12,E=1e8,m=4*3.33564e-30,n=.1*1000*NA,x=m*E/(kb*T),L=y=>1/Math.tanh(y)-1/y,P=n*m*L(x),F=-R*T*Math.log(Math.sinh(x)/x),U=-NA*m*E*L(x);let low=0,high=1e-28;for(let j=0;j<120;j++){let mid=(low+high)/2;if(n*mid*L(mid*E/(kb*T))>P)high=mid;else low=mid;}let recovered=(low+high)/2;assert.ok(Math.abs(recovered/m-1)<1e-11&&U<F&&F<0);return[m,x,L(x),n*m,P,P/(e0*E),x/3,L(x)/(x/3),F,U,(U-F)/T,n*m/P,x,R*Math.log(Math.sinh(x)/x)];}
});

Object.assign(witness,{
"UC-ADV11-I145":()=>{const KT=100e-6,KR=2e-6,L=100,f=x=>{const a=x/KT,b=x/KR,t=L*(1+a)**4,r=(1+b)**4,z=t+r,mean=4*(L*a*(1+a)**3+b*(1+b)**3)/z,fac=12*(L*a*a*(1+a)**2+b*b*(1+b)**2)/z,varn=fac+mean-mean*mean;return[t,r,z,r/z,mean/4,mean,varn];};let g=f(10e-6),lo=0,hi=.01;for(let i=0;i<130;i++){let x=(lo+hi)/2;if(f(x)[4]>.5)hi=x;else lo=x;}let root=(lo+hi)/2,p=f(root),hill=p[6]/(4*p[4]*(1-p[4]));assert.ok(g[4]>.5&&Math.abs(p[4]-.5)<1e-12&&p[6]>0);return[g[0],g[1],g[2],g[3],g[4],g[5],4e-6*g[4],root*1e6,hill,p[6],g[6],4e-6*g[4]*31.998,1-g[3],KT/KR,p[4]];},
"UC-ADV11-A144":()=>{const ratio=1+Math.exp(-1.2),I=100,t=-Math.log(ratio-1),alpha=t/1,cs=1e-14,n=alpha/cs,S=I/(1-Math.exp(-t)),I2=S*(1-Math.exp(-2*t)),I3=S*(1-Math.exp(-3*t)),b=(1-Math.exp(-t))/t,th=S*t,NA=6.02214076e23;assert.ok(ratio>1&&ratio<2&&Math.abs(I2/I-ratio)<1e-13);return[ratio,I2,t,alpha,n,n,S,I3,b,th,th/I,55.845*n/NA,1+Math.exp(-t)+Math.exp(-2*t),1-b];},
"UC-ADV11-O141":()=>{const a=10*8/(8+2),b=20*6/(6+4),c=a*20/(20+1),w=b*2/(2+18),ec=a-c,ew=b-w,prod=c+w,err=w/prod,pre=b/(a+b),im=(b/a)/(w/c),ATP=(a+b)/prod;assert.ok(Math.abs(a-c-ec)<1e-12&&Math.abs(b-w-ew)<1e-12&&ATP>1);return[8/10,6/10,a,b,c,w,ec,ew,prod,err,pre,im,ATP,ec+ew,a+b,1-err];},
"UC-ADV11-P141":()=>{const R=8.314462618,T=298.15,c=.5,V=1e-5,chi=3,K=1e-8,M=1e-25,L=100e-9,curv=R*T/V*(1/c+1/(1-c)-2*chi),cut=Math.sqrt(-curv/K),max=cut/Math.sqrt(2),w=2*Math.PI/cut,wmax=2*Math.PI/max,g=k=>-M*k*k*(curv+K*k*k),g1=g(2*Math.PI/L),g2=g(4*Math.PI/L),g3=g(6*Math.PI/L),a=[g1,g2,g3],ix=a.indexOf(Math.max(...a))+1;assert.ok(curv<0&&g(0)===0&&g(max)>0);return[curv,cut,max,w*1e9,wmax*1e9,g(max),max*L/(2*Math.PI),g1,g2,g3,ix,2*Math.PI*ix/L,g(0),cut*wmax];}
});

Object.assign(witness,{
"UC-ADV11-I146":()=>{const std=284.8,d1=286.3-std,d2=285.6-std,be1=934.2-d1,be2=933.5-d2,ke1=915+d1,ke2=914.7+d2,a1=be1+ke1,a2=be2+ke2,da=a1-a2;assert.ok(Math.abs(a1-(934.2+915))<1e-10&&Math.abs(a2-(933.5+914.7))<1e-10);return[d1,d2,be1,be2,ke1,ke2,a1,a2,da,da/2,be1-be2,(934.2-933.5)-(d1-d2),ke1-ke2,1000*da/a2];},
"UC-ADV11-A145":()=>{const n=20000,a=15900,b=2500,c=1400,d=200,v=.00085,qA=(a+c)/n,qB=(a+b)/n,la=-Math.log(qA),lb=-Math.log(qB),pred=(1-qA)*(1-qB),chi=n*(a*d-b*c)**2/((a+c)*(b+d)*(a+b)*(c+d)),uA=Math.sqrt((1-qA)/(n*qA)),uB=Math.sqrt((1-qB)/(n*qB));assert.ok(a+b+c+d===n&&la>0&&lb>0);return[qA,qB,la,lb,la/v,lb/v,d/n,pred,n*pred,d/n-pred,chi,a*d/(b*c),uA,uB,a+b+c+d-n];},
"UC-ADV11-O142":()=>{const A=.02,B=.015,k=200,t=1,M=.01,w=100,m0=300,rr=B/A*Math.exp((B-A)*k*t);let lo=0,hi=B;for(let j=0;j<110;j++){let x=(lo+hi)/2;const val=Math.log((B-x)/(A-x))-Math.log(B/A)-(B-A)*k*t;if(val<0)hi=x;else lo=x;}const x=(lo+hi)/2,p=x/A,pp=[(1-p)**2,2*p*(1-p),p*p],n=pp.map(v=>v*M),mass=[m0,m0+w,m0+2*w],mn=pp.reduce((s,v,i)=>s+v*mass[i],0),mw=pp.reduce((s,v,i)=>s+v*mass[i]**2,0)/mn;assert.ok(x>0&&x<B&&Math.abs(n[1]+2*n[2]-x)<1e-14);return[rr,x,A-x,B-x,p,...pp,...n,mn,mw,mw/mn,n[1]+2*n[2],n.reduce((a,b)=>a+b),k*(A-x)*(B-x)];},
"UC-ADV11-P142":()=>{const Ec=2,Ex=2.1,g=.08,dl=Ex-Ec,split=Math.hypot(dl,2*g),low=(Ec+Ex-split)/2,high=(Ec+Ex+split)/2,coupling=.5*Math.sqrt((high-low)**2-dl**2),ph=.5*(1+dl/(high-low)),hc=1239.841984,hbar=6.582119569e-16,kap=.04,gam=.06;assert.ok(low>0&&high>low&&Math.abs(coupling-g)<1e-14&&ph>0&&ph<1);return[low,high,high-low,coupling,ph,1-ph,1-ph,hc/low,hc/high,(high-low)/hbar,2*g,4*g/(kap+gam),Ec/kap,(kap+gam)/4,split];}
});

Object.assign(witness,{
"UC-ADV11-I147":()=>{const r0=1.803,b=.37,s=1.6,S=5,ss=Math.exp((r0-s)/b),sl=(S-2*ss)/4,rl=r0-b*Math.log(sl),avg=(2*s+4*rl)/6,dis=(2*(s/avg-1)**2+4*(rl/avg-1)**2)/6,tot=2*ss+4*sl;assert.ok(sl>0&&sl<ss&&rl>s&&Math.abs(tot-S)<1e-12);return[ss,sl,rl,tot,avg,dis,tot/6,2*ss/S,4*sl/S,2*S,5*2,2*tot-10,rl-s,Math.exp((r0-rl)/b)];},
"UC-ADV11-A146":()=>{const L=1e-5,f1=100,f2=400,K=.1,eps=1000,dc=.01,alpha=1e-7,c=.01,F=1-Math.exp(-Math.LN10*eps*dc*c),a=f=>L*Math.sqrt(Math.PI*f/alpha),amp=f=>K*F*Math.exp(-a(f))/Math.sqrt(f),A=amp(f1),B=amp(f2),ratio=B/A,del=-Math.log(ratio*Math.sqrt(f2/f1)),D=Math.PI*L*L*(Math.sqrt(f2)-Math.sqrt(f1))**2/(del*del),FF=A*Math.sqrt(f1)*Math.exp(L*Math.sqrt(Math.PI*f1/D))/K,cc=-Math.log(1-FF)/(Math.LN10*eps*dc);assert.ok(D>0&&Math.abs(D/alpha-1)<1e-11&&Math.abs(cc-c)<1e-11);return[a(f1),a(f2),-a(f1),-a(f2),F,A*1e3,B*1e3,ratio,del,D,FF,cc,K*F/Math.sqrt(f1)*1e3,ratio*Math.sqrt(f2/f1)];},
"UC-ADV11-O143":()=>{const h=6.62607015e-34,c=29979245800,NA=6.02214076e23,kb=1.380649e-23,T=298.15,R=8.314462618,delta=5000,tot=.001;const f=s=>{const a=3000*s,b=3500*s,q=w=>Math.exp(-h*c*w/(2*kb*T))/(1-Math.exp(-h*c*w/(kb*T))),K=Math.exp(-delta/(R*T))*q(b)/q(a),Z=NA*h*c*(b-a)/2;return[K,Z,-R*T*Math.log(K),K/(1+K)]};const a=f(1),b=f(1/Math.sqrt(2));assert.ok(a[0]>0&&b[0]>a[0]&&b[1]<a[1]);return[a[1]/1000,b[1]/1000,a[0],b[0],b[0]/a[0],a[3],b[3],a[2]/1000,b[2]/1000,(a[2]-b[2])/1000,tot*a[3],tot*b[3],1-a[3],1-b[3],Math.log(b[0]/a[0])];},
"UC-ADV11-P143":()=>{const kb=1.380649e-23,q=1.602176634e-19,T=298.15,I0=1e-9,Iph=.01,Pin=.1,Eg=1.5,Vt=kb*T/q,Voc=Vt*Math.log(1+Iph/I0),fun=v=>Iph-I0*(Math.exp(v/Vt)-1),der=v=>fun(v)-v*I0*Math.exp(v/Vt)/Vt;let a=0,b=Voc;for(let j=0;j<120;j++){let v=(a+b)/2;if(der(v)>0)a=v;else b=v}let Vm=(a+b)/2,Im=fun(Vm),P=Vm*Im,ratio=P/(Iph*Voc),eff=P/Pin,flux=Iph/q;assert.ok(Vm>0&&Vm<Voc&&Math.abs(der(Vm))<1e-10);return[Vt,Voc,Vm/Vt,Vm,Im*1e3,P*1e3,ratio,eff,flux,flux*Eg*q,Pin/(flux*Eg*q),I0*Math.exp(Vm/Vt),0,Voc/Vt];}
});

Object.assign(witness,{
"UC-ADV11-I148":()=>{const R=8.314462618,NA=6.02214076e23,a=4e-10,Vm=NA*a**3,M=44.9559+3*18.9984,B=3e10,C=3*R,g=-1.5,av=g*C/(B*Vm),al=av/3,d=50,a2=a*(1+d*al),V2=NA*a2**3,rho=M/1000/Vm,rho2=M/1000/V2;assert.ok(a2<a&&rho2>rho&&Math.abs(B*Vm*av-g*C)<1e-12);return[Vm,M,rho,av,al,a2*1e10,V2,rho2,rho2/rho-1,g*C,B*Vm*av,3-3,(a2/a)**3-1];},
"UC-ADV11-A147":()=>{const f0=1e5,m=1e-9,cap=2e-11,K=2,des=.02,ms=p=>cap*K*p/(1+K*p),fr=p=>f0/Math.sqrt(1+ms(p)/m),a=m*((f0/fr(.1))**2-1),b=m*((f0/fr(1))**2-1),sl=(1/a-1/b)/(10-1),it=1/a-sl*10,M=1/it,k=it/sl,z=ms(.5);assert.ok(Math.abs(k/K-1)<1e-11&&Math.abs(M/cap-1)<1e-11);return[fr(.1),fr(1),a,b,sl,it,M,k,z,fr(.5),k*.5/(1+k*.5),k*des,1/(des*(1+k*.5)),z/M];}
});

Object.assign(witness,{
"UC-ADV11-O144":()=>{const B=[8,10.5],A=[3.1,4.2,10.1],bp=t=>B.map(x=>1/(1+10**(t-x))),ap=t=>A.map(x=>1/(1+10**(x-t))),z=t=>bp(t).reduce((s,x)=>s+x,0)-ap(t).reduce((s,x)=>s+x,0);let lo=0,hi=14;for(let j=0;j<100;j++){let x=(lo+hi)/2;if(z(x)>0)lo=x;else hi=x}const p=(lo+hi)/2,P=bp(p),N=ap(p),V=P.concat(N).reduce((s,x)=>s+x*(1-x),0),C=prob=>prob.reduce((d,x)=>{let b=Array(d.length+1).fill(0);d.forEach((v,i)=>{b[i]+=v*(1-x);b[i+1]+=v*x});return b},[1]);let d1=C(P),d2=C(N),eq=d1.reduce((s,x,i)=>s+x*d2[i],0),positive=P[0]+P[1],negative=N.reduce((s,x)=>s+x);assert.ok(Math.abs(positive-negative)<1e-12&&eq>0&&eq<1);return[p,z(7),z(8),z(11),z(0),z(14),...P,...N,V,-Math.LN10*V,eq,Math.LN10*.0005*V,positive,negative,z(p)];},
"UC-ADV11-P144":()=>{const tau=120,v=4800,n=tau*tau/v,k=.02,C=.5,Q=1/60,z=1+k*tau/n,rem=z**(-n),X=1-rem,Xp=1-Math.exp(-k*tau),Xc=k*tau/(1+k*tau),a=C*rem,b=C*X,prod=Q*b,heat=60000*prod,Et=n**n*Math.exp(-n)/(2*tau);assert.ok(n===3&&Xc<X&&X<Xp&&Math.abs(a+b-C)<1e-13);return[n,v,tau/Math.sqrt(n),tau/n,z,X,Xp,Xc,a,b,prod,heat,rem,1/z,Et,n/tau];}
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
