#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23;
const witnesses={
"UC-ADV15-I226":()=>{let s=159+79+520-328,u=-617-s,bad=-617-(159+79+520+328);return[79,159,520,-328,s,u,-u,-617,Math.abs(u/617),bad-u]},
"UC-ADV15-I227":()=>{let K=T=>Math.exp(-(20000-60*T)/(R*T)),a=K(250),b=K(350),p=a/(1+a),q=b/(1+b);return[5,-1,a,b,p,q,1-p,b/a,20000/60,q-p]},
"UC-ADV15-I228":()=>{let E=.368,lnK=F*E/(R*298.15),K=Math.exp(lnK),Q=1e4,v=E-R*298.15/F*Math.log(Q);return[E,lnK,lnK/Math.log(10),K,Q,v,-F*v/1000,-F*E/1000,Math.sqrt(.01/K),Number(v>0)]},
"UC-ADV15-I229":()=>{let c=NA*1.602176634e-19**2/(8*Math.PI*8.8541878128e-12)/1000,g=c*(1-1/78.5),a=-g/1e-10,b=-g*4/8e-11;return[a,b,b/a,10,50,b-a,4*a,4,-c/1e-10,1-1/78.5]},
"UC-ADV15-I230":()=>{let a=1e-10/.005,b=3e-7/.002;return[a,b,b/a,.005e-6,.002e-6,.005e-6/1e-10,.002e-6/3e-7,a,b,b-a]},
"UC-ADV15-I231":()=>{let d=.01,e=2*d;return[d,e,e,1-e,3-e,3-d,d/3,d,e,2*d-e]},
"UC-ADV15-I232":()=>{let G=T=>65000+30*T,k=T=>1.380649e-23*T/6.62607015e-34*Math.exp(-G(T)/(R*T)),a=k(298.15),b=k(350);return[G(298.15)/1000,G(350)/1000,a,b,Math.log(2)/a,Math.log(2)/b,b/a,-65000/R,350/298.15,-30]},
"UC-ADV15-I233":()=>{let a=2,b=1.2,Z=1+a+b,C=.01;return[a,b,Z,C/Z,C*a/Z,C*b/Z,1/Z,a/Z,b/Z,a/b,(a+b)/Z]},
"UC-ADV15-I234":()=>{let k=R*298.15/F,q1=.005/.02,q2=.01/.002,a=-.255-k*Math.log(q1),b=-.255-k*Math.log(q2);return[q1,q2,a,b,b-a,.02/.025,.002/.012,k*Math.log(10),.02/.005,-.255]}
};
Object.assign(witnesses,{
"UC-ADV15-A226":()=>{let s=.002,ratio=(.9-.25)/(.25-.01),n=s*ratio,tot=n+s,H=n*.01+s*.9,L=tot-H;return[n,s,ratio,n*.01,s*.9,tot,H,L,H/L,H/tot]},
"UC-ADV15-A227":()=>{let fac=.6*.5/20000,f=t=>fac/t,a=f(80),b=f(125),e=f(100);return[e,a,b,a-e,b-e,.5/80,.5/125,.5/100,(a-e)-(b-e),(.5/80)/(.5/100)]},
"UC-ADV15-A228":()=>{let a=4e-8*(-30000)*1000,b=2e-8*(-30000)*1000,obs1=a+.1,obs2=b+.1;return[a,obs1,b,obs2,.1,a/1000/4e-8/1000,obs1/1000/4e-8/1000,obs1/obs2,6e-8,a+b]},
"UC-ADV15-A229":()=>{let p=.7578,q=.2422,a=p*p,b=2*p*q,c=q*q;return[a,b,c,b/a,c/a,100*b/a,100*c/a,100000*b,2*q,2*p*q]},
"UC-ADV15-A230":()=>{let km=3,imax=8,g=c=>imax*c/(km+c);return[km,imax,g(1),g(3),g(5),g(10),imax/km,km,g(10)/g(5),g(10)/imax]},
"UC-ADV15-A231":()=>{let k=.5,A=.85,B=.1,an=A-B,C=an/k;return[an,C,B,A/2,B/2,an/2,C/2,A/k,(A/k)/C-1,an/A]},
"UC-ADV15-A232":()=>{let s=.5*(300/350)*Math.exp(-5000/R*(1/350-1/300)),a=s*.02*.1,base=.5*.02*.1,ap=a/(.5*.1);return[s,a,ap,ap/.02-1,s/.5,2*a,base,a/base,a/(s*.1),.1]},
"UC-ADV15-A233":()=>{let rs=10,r=100,t=.01,g=f=>{let x=2*Math.PI*f*t;return[rs+r/(1+x*x),r*x/(1+x*x)]},a=g(1),b=g(100);return[...a,...b,1/(2*Math.PI*t),110,10,60,50,Math.hypot(...b)]},
"UC-ADV15-A234":()=>{let k=R*298.15/F,g=a=>.3+k*Math.log(a),a=g(.001),b=g(.01),u=g(.003);return[a,b,u,Math.exp((u-.3)/k),-Math.log10(.003),k*Math.log(10),Math.log(3)/Math.log(10),g(.006),k*Math.log(2),b-a]}
});

Object.assign(witnesses,{
"UC-ADV15-O223":()=>{let a=.005*Math.exp(-.04*30),b=.005*Math.exp(-.01*30),p=.005-a,q=.005-b;return[a,b,p,q,(p+q)/.01,(b-a)/(a+b),(p-q)/(p+q),p+q,a+b+p+q,4]},
"UC-ADV15-O224":()=>{let f=.25,g=.75,a=f*.2,b=g*.04,k=a+b,r=.02*Math.exp(-20*k),p=.02-r;return[f,g,a,b,k,a/k,b/k,a/b,r,p*a/k,p*b/k,Math.log(2)/k]},
"UC-ADV15-O225":()=>{let k=.08,j=.02,C=.01,f=t=>{let a=C*Math.exp(-k*t),b=C*k/(k-j)*(Math.exp(-j*t)-Math.exp(-k*t));return[a,b,C-a-b]},x=f(20),tp=Math.log(k/j)/(k-j),y=f(tp);return[...x,...x.map(z=>z/C),tp,y[1],k*y[0],j*y[1],C]},
"UC-ADV15-O226":()=>{let k=(T,H,S)=>1.380649e-23*T/6.62607015e-34*Math.exp(S/R-H/(R*T)),a=k(298.15,55000,-40),b=k(298.15,60000,-25),c=k(350,55000,-40),d=k(350,60000,-25);return[a,b,c,d,a/b,c/d,a/(a+b),c/(c+d),(-5000+298.15*15)/1000,(-5000+350*15)/1000,c/a]},
"UC-ADV15-O227":()=>{let p=.5/1.5,k=4*.01*p,a=.02*Math.exp(-k*30),k2=.04*(2/3);return[p,1-p,k,a,.02-a,1-a/.02,.02*k,Math.log(2)/k,k2,k2/k]},
"UC-ADV15-O228":()=>{let p=.4,q=.6;return[p*p,p*q,q*p,q*q,p*q*p,q*p*q,2*p*p*q,-p*Math.log(p)-q*Math.log(q),1000*p,1000*p*q,(p+q)**2]},
"UC-ADV15-O229":()=>{let n=499,p=.01,z=.99**n,l=n*p,v=Math.exp(-l);return[l,n*p*(1-p),z,1-z,1+l,(1-p)**2,n*(1-p),l,v,z-v]},
"UC-ADV15-O230":()=>{let a=5*.02,b=2*.02,x=Math.exp(-20*a),y=Math.exp(-20*b),p=.01*(1-x),q=.01*(1-y);return[a,b,.01*x,.01*y,p,q,1-x,1-y,p/q,5/2,a/b]}
});

Object.assign(witnesses,{
"UC-ADV15-P223":()=>{let H=-20000,k=T=>100*Math.exp(-H/R*(1/T-1/298.15)),a=k(318.15),b=k(348.15);return[100,a,b,a/100,b/100,-R*298.15*Math.log(100)/1000,-R*318.15*Math.log(a)/1000,-R*348.15*Math.log(b)/1000,Math.log(a/100),-H/R]},
"UC-ADV15-P224":()=>{let f=T=>{let x=300/T,n=1/Math.expm1(x),c=3*R*x*x*Math.exp(x)/(Math.expm1(x)**2),u=3*R*300*n;return[x,n,c,u]},a=f(150),b=f(600);return[a[0],b[0],a[2],b[2],a[2]/(3*R),b[2]/(3*R),a[1],b[1],a[3],b[3],b[2]/a[2]]},
"UC-ADV15-P225":()=>{let V=1,Q=.05,k=.02,C=.1,t=V/Q,Da=k*t,A=C/(1+Da),P=C-A;return[t,Da,A,P,P/C,Q*C,Q*A,V*A,k*V*A,1-Math.exp(-Da)]},
"UC-ADV15-P226":()=>{let l=.8,B=8.617333262145e-5*298.15,G=d=>(l+d)**2/(4*l),K=d=>1e11*Math.exp(-G(d)/B),a=K(-.2),b=K(-.8),c=K(-1.4);return[G(-.2),G(-.8),G(-1.4),a,b,c,a/c,B,a/b,c/b]},
"UC-ADV15-P227":()=>{let k1=1e-12,km=2e-12,k2=1e4,f=n=>k1*n*k2/(km*n+k2),a=f(1e15),b=f(1e17),lim=k1*k2/km;return[k1*1e15,k1*1e17,km*1e15,km*1e17,a,b,lim,a/lim,b/lim,b/a,k2/km]},
"UC-ADV15-P228":()=>{let h=-15000,k=.001*Math.exp(-h/R*(1/318.15-1/298.15));return[.001,k,.001,.005,k,k*5,k/.001,.005-5*k,Math.log(k/.001),-h/R]},
"UC-ADV15-P229":()=>{let E=6.62607015e-34**2/(8*9.1093837139e-31*1e-18),q=1.602176634e-19,hc=6.62607015e-34*299792458;return[E/q,4*E/q,9*E/q,3*E/q,5*E/q,hc/(3*E)*1e9,8*E/q,hc/(8*E)*1e9,E,9]},
"UC-ADV15-P230":()=>{let f=x=>{let v=80*x+100*(1-x)+20*x*(1-x),dv=80-100+20*(1-2*x);return[v,20*x*(1-x),dv,v+(1-x)*dv,v-x*dv]},a=f(.3),b=f(.7);return[a[0],b[0],a[1],b[1],a[2],b[2],a[3],a[4],b[3],b[4],.3*a[3]+.7*a[4],1]}
});

Object.assign(witnesses,{
"UC-ADV15-I235":()=>{let p=2.84,q=2.005,v=.3905e-7,M=87.62+47.867+47.997;return[p/(Math.sqrt(2)*q),p,q,(v/1e-7)**3,M,M/NA,M/(NA*v*v*v),1/(v*v*v),0,1]},
"UC-ADV15-I236":()=>{let weight=1e6,Z=1+weight,ag=Math.sqrt(5e-13/Z),complex=ag*weight,br=ag+complex;return[Z,br,ag,complex,1/Z,weight/Z,Math.sqrt(5e-13),Math.sqrt(Z),ag*br,weight/(.1*.1)]},
"UC-ADV15-I237":()=>{let u=9.2740100783e-24,m2=(2.1**2)*.75*u*u,C=1.25663706212e-6*6.02214076e23*m2/(3*1.380649e-23);return[2.1*Math.sqrt(.75),Math.sqrt(m2),1.05,1.05*u,C/298.15,C/150,298.15/150,Math.sqrt(3),C,1]},
"UC-ADV15-I238":()=>{let x=.2,y=.6;return[6-3*(1-x)-2*x,6-3*(1-y)-2*y,x,y,1-x,1-y,x,y,y-x,y,(3-3*y)+(2*y)+(3+y)-6]},
"UC-ADV15-I239":()=>{let c=3,cn=c*6,f=4,net=3*f+2*c-cn;return[c,f,cn,f+c,cn/c,3*f+2*c,-cn,net,(4-c)/4,f/c,(f+c)*55.845+cn*12.011+cn*14.007]},
"UC-ADV15-I240":()=>{let a=10**(-20/3),b=10**(-22/3),c=10**(-24/3);return[a,b,10**(2/3),a/b,1e-20,1e-22,1e-26,1e-26,-Math.log10(b),c]},
"UC-ADV15-I241":()=>{let oct=12000,tet=12000*4/9,a=(-.4*6+.6*2)*oct,b=(-.6*4+.4*4)*tet;return[oct,tet,a,b,a*.01196266,b*.01196266,(b-a)*.01196266,2,2,2*Math.sqrt(1*(1+1))]},
"UC-ADV15-I242":()=>{let h=.2,k=20,p=k*h,q=.1/h,base=-R*1000*Math.log(k)/1000,g=base+R*1000*Math.log(q)/1000,extra=base+R*1000*Math.log(5/h)/1000;return[p,k,base,q,g,q/k,+(q<k),-g,25,extra]},
"UC-ADV15-I243":()=>{let a=.02,b=.05,C=.01,t=40,A=C*Math.exp(-a*t),B=C*a/(b-a)*(Math.exp(-a*t)-Math.exp(-b*t)),Z=C-A-B,tp=Math.log(b/a)/(b-a),bp=C*a/(b-a)*(Math.exp(-a*tp)-Math.exp(-b*tp));return[A,B,Z,A/C,B/C,Z/C,tp,bp,b*bp,b*bp,C]},
"UC-ADV15-I244":()=>{let beta=T=>1/(8.617333262145e-5*T),a=Math.exp(-beta(800)/2),b=Math.exp(-beta(1000)/2),d=n=>1e9/Math.cbrt(n);return[a,b,a*1e28,b*1e28,d(a*1e28),d(b*1e28),Math.exp((beta(800)-beta(1000))/2),Math.exp(-beta(800)),Math.exp(-beta(1000)),beta(800),beta(1000)]}
});

Object.assign(witnesses,{
"UC-ADV15-A235":()=>{let c=.003,s=.01*.001/.025,u=c*.01/.025,v=u+s;return[u,v,s,c,100*s,c*.01,.4,.01/26,.16/.12,100*v]},
"UC-ADV15-A236":()=>{let H=3600,L=6400,N=H+L,p=H/N,q=L/N,varp=H*L/N**3,se=Math.sqrt(varp);return[p,q,H/L,se,se/(q*q),se/(p*q),p-1.96*se,p+1.96*se,Math.sqrt(varp/2),Math.sqrt(2)]},
"UC-ADV15-A237":()=>{let r=2/.9,one=(4*5/.4)**2,two=(4*6/.5)**2;return[r,one,two,4,5,5/4,4,5,5/4,1]},
"UC-ADV15-A238":()=>{let charge=6,eta=.98,m=charge*eta/96485.33212,C=m/0.05;return[charge,5.88,m,C,m*35.453*1000/.05,m*35.453*1000,.12,(1-.98)/.98,300*(.02/.01),m]},
"UC-ADV15-A239":()=>{let theta=Math.PI/9,c=Math.cos(theta),b=.008,good=.9*.15406/(.008*c),bad=good*.8;return[theta*180/Math.PI,b,.8,.6,good,bad,.2,1/good,good-bad,1e-4]},
"UC-ADV15-A240":()=>{let C=.001/1000,p=96485.33212*.01*C*Math.sqrt(1e-5/Math.PI);return[p,p/2,p/4,2,p,1e-5,.75,p,0.5,C]},
"UC-ADV15-A241":()=>{let delta=.8,x=710.5,y=724;return[delta,x,y,724.8-711.3,x-284.8,284.8,.8,711.3/x,-delta,-delta]},
"UC-ADV15-A242":()=>{let n=1e7/532,st=n-1000,as=n+1000,q=Math.exp(4*Math.log(as/st)),a=q*Math.exp(-1438.776877/300),b=q*Math.exp(-1438.776877/400),wrong=1438.776877/Math.log(1/a);return[n,st,as,q,a/q,a,b,b/a,300,wrong-300]},
"UC-ADV15-A243":()=>{let u=6000/500,orig=5*u;return[u,orig,20,.18,.6,6000,10000,orig/20,u/.6,5*6200/500,2]},
"UC-ADV15-A244":()=>{let a=216,b=180,pa=144/576,pb=60/420,ra=2*pa/(3-pa),rb=2*pb/(3-pb);return[a,b,ra,rb,pa,pb,792,600,ra-rb,ra/rb,ra]}
});

Object.assign(witnesses,{
"UC-ADV15-O231":()=>{let p=1/(1+Math.exp(7600/(R*298.15))),q=1/(1+Math.exp(7600/(R*350)));return[p/(1-p),q/(1-q),p,q,1-p,1-q,q-p,7600/(R*Math.log(9)),(1-p)/p,q]},
"UC-ADV15-O232":()=>{let l=20,e2=l*l+l,p0=Math.exp(-l);return[l,e2/l,2000,100*e2/l,e2/(l*l),p0,l*p0,l,-Math.expm1(-l),1+1/40]},
"UC-ADV15-O233":()=>{let u=-Math.expm1(-3.5);return[.5,.2,.7,5/7,2/7,.01*(1-u),.01*u*5/7,.01*u*2/7,2.5,u,Math.log(2)/.7]},
"UC-ADV15-O234":()=>{let a=160/161,b=1600/1601;return[160,1600,a,b,1/161,.02*a,.02*b,.02/1601,b/a,16/19,.02]},
"UC-ADV15-O235":()=>[2,1,4,.0025,.005,.0025,.25,.5,.25,2,.75,.01],
"UC-ADV15-O236":()=>{let h=(x,y)=>-x*Math.log(x)-y*Math.log(y);return[.4,.6,.04,.36,.36,.24,.216,.324,.4*h(.1,.9)+.6*h(.6,.4),1/6,0]},
"UC-ADV15-O237":()=>{let z=Math.exp(-1),p=.02*(1-z);return[.015,.05,.6,.4,.02*z,p*.6,p*.4,1.5,Math.log(2)/.05,3/7]},
"UC-ADV15-O238":()=>{let k=4*Math.exp(1e4/R*(1/300-1/350)),q=1/(1+1/k);return[4,k,.8,q,.008,.01*q,-R*300*Math.log(4)/1000,-R*350*Math.log(k)/1000,k/4,q-.8,.01/(1+k)]},
"UC-ADV15-O239":()=>{let C=.1,m=2*C/(1+Math.sqrt(1+8*100*C)),d=(C-m)/2;return[m,d,m/C,1-m/C,C,.4*m,.04,m/C,d/m,m/(2*d)]},
"UC-ADV15-O240":()=>{let b=Math.exp(-.3),f=Math.exp(-1.2),p=Math.exp(-1.5),q=f-p,r=b-p,s=1-p-q-r;return[b,f,p,q,r,s,.01*p,.01*q,.01*r,q/r,1]}
});

Object.assign(witnesses,{
"UC-ADV15-P231":()=>{let SL=.05-.036,W=.072+.05-SL,spread=.05-SL-.072,pressure=.072/.001;return[SL,W,spread,Math.cos(Math.PI/3),W/.072,pressure,pressure/9810,Math.PI/3,.036,0]},
"UC-ADV15-P232":()=>{let eps=8.8541878128e-12*78.5,t=298.15,k=R*t/F**2*eps/2,l1=Math.sqrt(k/10),l2=l1/Math.sqrt(10);return[l1*1e9,l2*1e9,Math.sqrt(10),10,100,1/l1,1/l2,k/10,Math.sqrt(10),1]},
"UC-ADV15-P233":()=>{let q=R*300/.0280134,u=Math.sqrt(q),a=[Math.sqrt(2)*u,Math.sqrt(8/Math.PI)*u,Math.sqrt(3)*u],b=a.map(x=>x*Math.SQRT2);return[...a,...b,Math.SQRT2,2/Math.sqrt(Math.PI),450*R,900*R,2]},
"UC-ADV15-P234":()=>{let c=.5,d=.1,fun=x=>-(-x*Math.log(x)-(1-x)*Math.log(1-x))+3*x*(1-x),lo=(1-Math.sqrt(1/3))/2,hi=1-lo;return[-2,1/(.1*.9)-6,fun(c),fun(d),lo,hi,2,R*300*fun(c),0,1,hi-lo,0]},
"UC-ADV15-P235":()=>{let V=1e-5,km=3e-3,alpha=1+.002/.001,f=s=>V/(1+km/s);return[alpha,V/alpha,km,f(.002),f(.002)/3,f(.01),f(.01)/3,1/3,1/3,(V/3)/2,km,2/3]},
"UC-ADV15-P236":()=>{let v=(200+50)*30*1e-6,i=v/10;return[250,v,v*1000,i,5*i,i*i*5,v/5,i*i*5,i*i*5,.006,-.0015]},
"UC-ADV15-P237":()=>{let x=.3,N=100,base=x/N*Math.log(x)+(1-x)*Math.log(1-x),second=1/(N*x)+1/(1-x),s=second/2;return[base+.5*x*(1-x),base+x*(1-x),second-1,second-2,1,0,s,1/11,.605,Math.log(x)/N+1/N-Math.log(.7)-1+.5*.4,s-.5]},
"UC-ADV15-P238":()=>{let q=500,r1=.05,r2=.04,rc=.01,a=q*r1,b=q*rc,c=q*r2;return[r1,rc,r2,.1,q,a,b,c,55,50,30,50/.09/500-1]},
"UC-ADV15-P239":()=>{let d=3e-10,k=12*Math.PI*3e-19,rate=k*NA*1000,z=rate*2e-12;return[d,3,k,rate,z,1/3,2/3,1/(rate*2e-6),z*NA*1000,2]},
"UC-ADV15-P240":()=>{let r=Math.sqrt(.02),p=(r+.1)/2,m=(r-.1)/2,tot=p+m;return[p,m,p/.05,-R*298.15/F*Math.log(p/.05)*1000,R*298.15*(tot-.1)*1000,p-.05,1-m/.05,.0025,0,tot/.1]}
});

Object.assign(witnesses,{
"UC-ADV15-I245":()=>{let r=.18,dist=.282,cube=(.564e-7)**3,molar=58.44,mass=4*molar/6.02214076e23;return[r,dist,cube/1e-21,molar,mass,mass/cube,4/cube,4,4,4-4,r/.102]},
"UC-ADV15-I246":()=>{let d1=9-1,d2=9-3,l1=4+2+2,l2=l1+4;return[1,3,d1,d2,l1,l2,d1+l1,d2+l2,l2-l1-2,2,4,6]},
"UC-ADV15-I247":()=>{let E=.771-.535,q=(.02/.01/.1)**2,k=2*96485.33212*E/(8.314462618*298.15),e=(R*298.15/(2*F))*(k-Math.log(q));return[E,-2*F*E/1000,k,Math.log10(Math.exp(k)),q,e,-2*F*e/1000,Math.exp(k),+(q<Math.exp(k)),2]},
"UC-ADV15-I248":()=>{let E=180/96485.33212,nZn=E/2,mAg=E*107.8682,mZn=nZn*65.38;return[180,E,nZn,mZn,E,mAg,2,(2*107.8682)/65.38,1.5*E*6.02214076e23,nZn]},
"UC-ADV15-I249":()=>{let x=1e-10,poh=10,pH=4,a=1e-10,b=1e-9,q=.001*a*a*a,w=.001*b*b*b;return[x,poh,pH,a,b,q,w,q/1e-33,w/1e-33,0,1000]},
"UC-ADV15-I250":()=>{let s=[.7**3,3*.3*.7**2,3*.3**2*.7,.3**3],mean=s.reduce((a,b,i)=>a+i*b,0),varr=s.reduce((a,b,i)=>a+(i-mean)**2*b,0);return[s[0],s[1],s[2],s[3],100*s[1]/s[0],100*s[2]/s[0],100*s[3]/s[0],mean,varr,1-s[0],s.reduce((x,y)=>x+y,0)]}
});

Object.assign(witnesses,{
"UC-ADV15-A245":()=>{let n=.123/233.39,p=n*96.06/.5,f=n*32.06/.5;return[.123,n,n,p*.5,p,100*p,f*.5,f,2000*n,.002/.123]},
"UC-ADV15-A246":()=>{let A=.0025,B=.0005,N=.002,M=N*14.007*1000;return[A,B,N,N,M,M/10,(6.25*M)/10,B*14.007*100,(A-B)/A,6.25*M]},
"UC-ADV15-A247":()=>{let drift=.8,corrected=6400/.8,ratio=corrected/10000,c=10*ratio;return[2,1.6,drift,c,10*c,64,(10*c-64)/(10*c),corrected,ratio,2]},
"UC-ADV15-A248":()=>{let c0=.8,c1=.4,k=Math.LN2/100;return[c0,c1,.5,k,100,.2,.25,.5,100*Math.log(10)/Math.LN2,-k*.4]},
"UC-ADV15-A249":()=>{let p=2.69e5*.05*1e-6*Math.sqrt(1e-5*.01),q=2*p,C=1e-6;return[p,q,p*1e6,q*1e6,2,4,p/.1,1e-5,p/C,q/C,p]},
"UC-ADV15-A250":()=>{let dur=120,area=5e-3*120/2,mol=.01/100,enthalpy=area/mol;return[dur,area,area/.01,enthalpy,.005,.0025,1/6,2,mol,enthalpy/1000]}
});

const starts={inorganic:["I",226],analytical:["A",226],organic:["O",223],physical:["P",223]};
const ids=new Set(),titles=new Set(),models=new Set(),counts={};
for(const [subject,[L,start]] of Object.entries(starts)){
 const raw=read("editorial/advanced_integrated_v15/"+subject+".jsonl").trim();
 const rows=raw?raw.split("\n").map(JSON.parse):[];counts[subject]=rows.length;
 assert.ok(rows.length<=25);rows.forEach((x,i)=>{
  assert.equal(x.id,"UC-ADV15-"+L+(start+i));assert.equal(x.subject,subject);
  assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=8,x.id+" completeness");
  assert.ok(x.answer_values.length>=8&&x.answer_names.length===x.answer_values.length&&x.answer_units.length===x.answer_values.length);
  assert.ok(x.answer_values.every(Number.isFinite)&&x.model_residuals.length>=3&&x.model_residuals.every(v=>Number.isFinite(v)&&Math.abs(v)<1e-8));
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);assert.equal(x.quality_status,"awaiting_expert_review");assert.equal(x.novelty_review_status,"pending_cross_series_model_review");assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!models.has(x.model_family));ids.add(x.id);titles.add(x.title);models.add(x.model_family);
  assert.ok(Object.hasOwn(witnesses,x.id));
  const expected=witnesses[x.id]();assert.equal(expected.length,x.answer_values.length);
  expected.forEach((v,j)=>{const u=x.answer_values[j],s=Math.max(Math.abs(u),Math.abs(v),1e-14);assert.ok(Math.abs(u-v)<=1e-9*s,x.id+" "+x.answer_names[j]);});
 });
}
assert.equal(Object.keys(witnesses).length,ids.size);
const m=JSON.parse(read("release/chemistry-approved-manifest.json"));assert.equal(m.fifteenth_series_work_in_progress_items,ids.size);assert.equal(m.fifteenth_series_pending_cross_series_novelty_review,ids.size);assert.equal(m.advanced_editorial_items,906+ids.size);assert.equal(m.approved_count,0);assert.deepEqual(m.items,[]);
const q=JSON.parse(read("editorial/advanced_integrated_v15/overlap_review_queue.json"));assert.equal(q.current_draft_count,ids.size);assert.equal(q.preliminary_flags,q.pairs.length);
for(const id of ids)assert.ok(q.new_items_requiring_cross_series_comparison.some(x=>x.new_id===id));
console.log(JSON.stringify({pass:true,series:15,count:ids.size,subjects:counts}));
