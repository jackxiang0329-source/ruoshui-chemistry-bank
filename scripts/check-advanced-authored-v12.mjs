#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const witnesses={
"UC-ADV12-I151":()=>{const a=.4,lam=.15406,K=.9,D=50,eps=.001,NA=6.02214076e23,hs=[Math.sqrt(3),2],t=hs.map(h=>Math.asin(lam*h/(2*a))),beta=t.map(y=>(K*lam/D+4*eps*Math.sin(y))/Math.cos(y)),xx=t.map(y=>4*Math.sin(y)),yy=t.map((y,i)=>beta[i]*Math.cos(y)),strain=(yy[1]-yy[0])/(xx[1]-xx[0]),b=yy[0]-strain*xx[0],da=K*lam/b,aa=t.map((z,i)=>lam*hs[i]/(2*Math.sin(z))),rho=4*(24.305+15.999)/1000/(NA*(a*1e-9)**3);assert.ok(Math.abs(da-D)<1e-10&&Math.abs(strain-eps)<1e-13);return[...t.map(z=>z*180/Math.PI),...beta,xx[0],xx[1],strain,b,da,aa[0],aa[1],aa[0]**3,rho,strain,0];},
"UC-ADV12-A151":()=>{const gamma=2.6752218744e8,dd=.002,DT=.04,D=8e-10,T=298.15,kb=1.380649e-23,eta=.00089,G=[.1,.25,.4],b=g=>gamma**2*g*g*dd**2*(DT-dd/3),s=g=>1000*Math.exp(-b(g)*D),Ss=G.map(s),bb=G.map(b),DI=-Math.log(Ss[1]/Ss[0])/(bb[1]-bb[0]),S0=Ss[0]*Math.exp(bb[0]*DI),rad=kb*T/(6*Math.PI*eta*DI),rms=Math.sqrt(2*DI*DT);assert.ok(Math.abs(DI/D-1)<1e-13&&Math.abs(S0/1000-1)<1e-13);return[...bb,...Ss,DI,S0,rad*1e9,rms*1e6,Ss[1]/Ss[0],Math.log(Ss[0]/Ss[1]),Ss[2]/1000,1/rms,D*gamma**2*dd**2*(DT-dd/3)];},
"UC-ADV12-O148":()=>{const E=1e-7,V=5e-6,Km=.001,Ki=.002,vs=(s,i)=>V*s/(Km*(1+i/Ki)+s),v1=vs(.002,0),v2=vs(.002,.002),v3=vs(.0005,.002);let slope=(1/v3-1/v2)/(1/.0005-1/.002),ic=1/v2-slope/.002,vmax=1/ic,kapp=slope*vmax,km=.002*(vmax/v1-1),ki=.002/(kapp/km-1),time=(.002-.001+kapp*Math.log(2))/vmax;assert.ok(Math.abs(vmax/V-1)<1e-12&&Math.abs(km/Km-1)<1e-12&&Math.abs(ki/Ki-1)<1e-12);return[v1,v2,v3,vmax,km,ki,vmax/E,v2/v1,kapp/km,time,.001,.001,E*(vmax/E),vmax/kapp,1/(v1/vmax)];},
"UC-ADV12-P148":()=>{const h=5,C=500,Ts=20,Q=20,g=Q/(h*Ts),f=x=>g*Math.exp(x)-x,root=(l,r)=>{for(let j=0;j<140;j++){let x=(l+r)/2;if(f(l)*f(x)<=0)r=x;else l=x;}return(l+r)/2},a=root(0,1),b=root(1,5),t=C/h,lam1=(a-1)/t,lam2=(b-1)/t;assert.ok(a>0&&a<1&&b>1&&Math.abs(g*Math.exp(a)-a)<1e-13);return[g,a,b,300+Ts*a,300+Ts*b,h*Ts*a,h*Ts*b,lam1,lam2,-1/lam1,1/lam2,h*Ts/Math.E,t,1/Math.E,g*Math.exp(a)];}
};
Object.assign(witnesses,{
"UC-ADV12-I152":()=>{const K=1.8e-10,B=1.6e7,T=.1,s=f=>Math.sqrt(K*(1+B*f*f)),c=f=>s(f)*B*f*f/(1+B*f*f),ff=f=>f+2*c(f)-T;let l=0,r=T;for(let j=0;j<130;j++){let u=(l+r)/2;if(ff(u)>0)r=u;else l=u}let f=(l+r)/2,sol=s(f),comp=c(f),ag=sol/(1+B*f*f),naive=s(T);assert.ok(f<T&&f>0&&Math.abs(ag*sol/K-1)<1e-12);return[f,sol,ag,comp,sol,comp/sol,2*comp,T-2*comp,naive,naive/sol-1,ag*sol,B*ag*f*f,comp+ag,2*comp+f,0];},
"UC-ADV12-A152":()=>{const hs=.25,hp=.95,hm=.60,mp=.00025,blank=.00002,r=.8,n=mp*(hp-hm)/(hm-hs),rec=n-blank,orig=rec/r,H=n*hs+mp*hp,L=n*(1-hs)+mp*(1-hp);assert.ok(n>blank&&Math.abs(H/(H+L)-hm)<1e-13);return[H/(n+mp),H/L,n,rec,orig,orig*1e6,n+mp,H,L,n/mp,blank/n,r*orig,0,hm/(1-hm)];},
"UC-ADV12-O149":()=>{const a=.05,k=2,S0=.02,t=20,b=2*k*S0/a,E=Math.exp(-a*t),den=1+b*(1-E),S=S0*E/den,P=a/(2*k)*Math.log(den),D=(S0-S-P)/2,half=-Math.log((1+b)/(2+b))/a,rateA=a*S,rateB=k*S*S;assert.ok(S>0&&P>0&&D>0&&Math.abs((S+P+2*D)/S0-1)<1e-13);return[b,S,P,D,S0-S,P/(S0-S),rateA,rateB,P+2*D,S0,a/k,half,S0/2,P/D,Math.log(den)];},
"UC-ADV12-P149":()=>{const g=.072,V=18e-6,R=8.314462618,T=298.15,ps=3167,NA=6.02214076e23,r1=1e-8,r2=2e-8,a=2*g*V/(R*T),x=a/r1,y=a/r2,P=ps*Math.exp(x),Q=ps*Math.exp(y),d1=2*g/r1,d2=2*g/r2,rt=a/Math.log(1.1),n=4*Math.PI*r1**3/(3*V),N=n*NA;assert.ok(P>Q&&Q>ps&&Math.abs(d1/d2-2)<1e-12);return[x,y,P,Q,P/Q,d1/1e6,d2/1e6,d1*V,d2*V,rt*1e9,N,n,P-ps,d1/d2,a];}
});
Object.assign(witnesses,{
"UC-ADV12-I153":()=>{const b=9.2740100783e-24,k=1.380649e-23,N=6.02214076e23,R=8.314462618,B=5,T=5,x=b*B/(k*T),pol=Math.tanh(x),S=R*(Math.log(2*Math.cosh(x))-x*pol),M=N*b*pol,U=-N*b*B*pol,C=R*x*x/Math.cosh(x)**2,T2=1;assert.ok(S>0&&S<R*Math.log(2));return[x,T2,pol,S,S/(R*Math.log(2)),M,U,C,-N*b*1*pol,M/N,2*b*B/k,b/(k*T2),S-R*Math.log(2),B/T];},
"UC-ADV12-A153":()=>{const F=96485.33212,A=1e-4,C=.001,D=1e-9,dl=.05e-6,G=1e-8,s=2*F*A*C*Math.sqrt(D/Math.PI),b=dl+F*A*G,Q=t=>s*Math.sqrt(t)+b,v=[1,4,9].map(Q),m=v[1]-v[0],ic=v[0]-m,dr=Math.PI*(m/(2*F*A*C))**2,gr=(ic-dl)/(F*A),cov=gr/2e-8,k=cov/(1-cov)/1e-6;assert.ok(Math.abs(dr/D-1)<1e-12&&Math.abs(gr/G-1)<1e-12);return[...v.map(z=>z*1e6),m*1e6,ic*1e6,dr,gr,F*A*G*1e6,dl*1e6,cov,k,m*3*1e6,v[2]/v[0],F*A*C,ic-dl];},
"UC-ADV12-O150":()=>{const k=.1,j=.025,t=20,C0=.01,A=C0*Math.exp(-k*t),B=C0*k/(k-j)*(Math.exp(-j*t)-Math.exp(-k*t)),C=C0-A-B,tp=Math.log(k/j)/(k-j),a=C0*Math.exp(-k*tp),b=C0*k/(k-j)*(Math.exp(-j*tp)-Math.exp(-k*tp)),c=C0-a-b;assert.ok(A>=0&&B>=0&&C>=0&&Math.abs(k*a-j*b)<1e-14);return[A,B,C,tp,b,a,c,B/C0,C/C0,k*A,j*B,k/j,A+B+C,Math.exp(-k*tp),Math.exp(-j*tp)];},
"UC-ADV12-P150":()=>{const a=.364,b=4.27e-5,R=8.314462618,T=350,P=5e6,Cp=40,f=v=>R*T/(v-b)-a/v**2;let l=b*1.00001,u=.01;for(let i=0;i<130;i++){let x=(l+u)/2;if(f(x)>P)l=x;else u=x}const V=(l+u)/2,der=-R*T/(V-b)**2+2*a/V**3,alpha=(R/(V-b))/(-der),jt=(T*alpha-V)/Cp;assert.ok(V>b&&der<0&&Math.abs(f(V)/P-1)<1e-12);return[8*a/(27*R*b),a/(27*b*b)/1e6,3*b,V,V*1e6,P*V/(R*T),der,-V*der/1e6,alpha,jt,jt*1e5,-a/V+P*V-R*T,R*T/(V-b),a/V**2,f(V)];}
});
Object.assign(witnesses,{
"UC-ADV12-I154":()=>{const R=8.314462618,T=298.15,F=96485.33212,VV=.08,IV=.02,II=.07,III=.03,H=1,vol=.25,I=2,pos=1-R*T/F*Math.log(IV/(VV*H*H)),neg=-.26-R*T/F*Math.log(II/III),q=Math.min(VV,II)*vol,elec=q*F,hyd=2*q;assert.ok(pos>neg&&VV*vol>II*vol);return[pos,neg,pos-neg,IV/(VV*H*H),II/III,VV*vol,II*vol,q,elec,elec/I,hyd,H-hyd/vol,(pos-neg)*I,VV+IV,II+III,1+2+2-(2+3)];},
"UC-ADV12-A154":()=>{const h=6.62607015e-34,mu=9.2740100783e-24,k=1.380649e-23,T=298.15,g=2.1,v=9.5e9,a=.007,B=h*v/(g*mu),ms=[1.5,.5,-.5,-1.5],fld=ms.map(z=>B-z*a),amp=[2000/1,2100/1.05,1900/.95,2000],sum=amp.reduce((x,y)=>x+y),sp=3e-9*sum/6000;assert.ok(amp.every(x=>Math.abs(x-2000)<1e-10)&&Math.abs(fld.reduce((x,y)=>x+y,0)/4-B)<1e-13);return[B,...fld,a,h*v/(mu*B),sum,sp,sp/1e-4,Math.tanh(h*v/(2*k*T)),sp*6.02214076e23,(fld[3]-fld[0])/(3*a),(fld[3]-fld[0])*1e3,fld.reduce((x,y)=>x+y)/4,2000+2100+1900+2000];},
"UC-ADV12-O151":()=>{const KA=100,KB=50,A=.02,B=.01,G=1e-6,k=2,area=.1,t=60,x=KA*A,y=KB*B,d=1+x+y,ta=x/d,tb=y/d,te=1/d,rate=k*G*ta*tb,p=rate*area*t,opt=(1+y)/KA,rmax=k*G*y/(4*(1+y));assert.ok(Math.abs(ta+tb+te-1)<1e-12&&rmax>rate&&p<A&&p<B);return[x,y,ta,tb,te,rate,p,opt,rmax,rmax/rate-1,p,A-p,B-p,ta+tb+te,k*G];},
"UC-ADV12-P151":()=>{const A=2,low=4.8,high=5.2,det=A*A,tr=b=>b-1-det,ee=b=>{const re=tr(b)/2,im=Math.sqrt(det-re*re);return[re,im,2*Math.PI/im]},l=ee(low),h=ee(high),Bc=1+det;assert.ok(l[0]<0&&h[0]>0&&Bc===5);return[A,low/A,tr(low),det,...l,Bc,Bc/A,...h,A,2*Math.PI/A,-1/l[0],1/h[0],Bc-low];}
});
Object.assign(witnesses,{
"UC-ADV12-I155":()=>{const R=8.314462618,T1=5,T2=10,c1=.002*T1+.0001*T1**3,c2=.002*T2+.0001*T2**3,b=(c2/T2-c1/T1)/(T2*T2-T1*T1),g=c1/T1-b*T1*T1,theta=(12*Math.PI**4*4*R/(5*b))**(1/3),ele=g*T2,ph=b*T2**3;assert.ok(g>0&&b>0&&theta>T2*10);return[c1,c2,g,b,theta,ele,ph,ele/(ele+ph),g*T2+b*T2**3/3,g*T2**2/2+b*T2**4/4,3*58.6934+26.9815,ph/ele,c2/T2,12*Math.PI**4*4*R/(5*theta**3)];},
"UC-ADV12-A155":()=>{const ID=400,IA=700,alpha=.1,bg=60,gm=.75,r0=5,t0=4,acc=IA-alpha*ID-bg,N=acc+gm*ID,E=acc/N,r=r0*(1/E-1)**(1/6),tau=t0*(1-E),k=1/tau-1/t0,err=Math.sqrt(E*(1-E)/N),dr=r/(6*E*(1-E))*err;assert.ok(E>0&&E<1&&Math.abs(1/(1+(r/r0)**6)-E)<1e-12);return[acc,N,E,1-E,r,tau,k,N,err,dr,acc/(gm*ID),IA-acc,alpha*ID,bg,E];},
"UC-ADV12-O152":()=>{const a=.1,b=.08,p=.75,bond=2*b*p,n=a+b-bond,dp=(a+b)/n,unA=2*a-bond,unB=2*b-bond,mass=200*a+150*b;assert.ok(Math.abs(unA+unB-2*n)<1e-12&&Math.abs(dp-(1+b/a)/(1+b/a-2*(b/a)*p))<1e-12);return[bond,n,dp,b/a,bond/(2*a),unA,unB,unA/(2*n),unB/(2*n),mass,mass/n,a/n,b/n,(a+b)/(a-b),bond+n,unA+unB];},
"UC-ADV12-P152":()=>{const R=8.314462618,T=298.15,F=96485.33212,Dp=2e-9,Dm=1e-9,L=.001,c1=200,c2=100,D=2*Dp*Dm/(Dp+Dm),grad=(c2-c1)/L,j=-D*grad,psi=R*T/F*((Dm-Dp)/(Dp+Dm))*Math.log(c2/c1),times=L*L/(Math.PI*Math.PI*D);assert.ok(j>0&&psi>0&&Dp>D&&D>Dm);return[D,grad,j,psi*1e3,Dp/(Dp+Dm),Dm/(Dp+Dm),F*j,0,times,Math.log(c2/c1),c1/1e3,c2/1e3,Dp/Dm,psi*F/(R*T),D/(Dp+Dm)];}
});
Object.assign(witnesses,{
"UC-ADV12-I156":()=>{const C11=300e9,C12=100e9,C44=80e9,a=4.18e-10,NA=6.02214076e23,M=58.6934+15.999,V=a**3,rho=4*M/1000/(NA*V),bulk=(C11+2*C12)/3,cv=(C11-C12)/2,az=2*C44/(C11-C12),Gv=(C11-C12+3*C44)/5,Gr=5*(C11-C12)*C44/(4*C44+3*(C11-C12)),G=(Gv+Gr)/2,nu=(3*bulk-2*G)/(2*(3*bulk+G));assert.ok(C11>C12&&C44>0&&Gr<=Gv&&nu<.5);return[M,V,rho,bulk/1e9,cv/1e9,az,Math.sqrt(C11/rho),Math.sqrt(C44/rho),Math.sqrt((C11+C12+2*C44)/(2*rho)),Math.sqrt((C11-C12)/(2*rho)),Gv/1e9,Gr/1e9,G/1e9,nu,C11-C12,C11+2*C12,C44];},
"UC-ADV12-A156":()=>{const vm=20,C=50,f=x=>vm*C*x/((1-x)*(1+(C-1)*x)),g=x=>x/(f(x)*(1-x)),Y1=g(.1),Y2=g(.3),s=(Y2-Y1)/(.3-.1),b=Y1-s*.1,V=1/(s+b),CC=1+s/b,SA=V/22414*6.02214076e23*.162e-18;assert.ok(Math.abs(V/vm-1)<1e-12&&Math.abs(CC/C-1)<1e-12);return[f(.1),f(.3),Y1,Y2,s,b,V,CC,f(.2),SA,8.314462618*77*Math.log(C)/1000,(C-1)/C,g(.1),1/(vm*C)];},
"UC-ADV12-O153":()=>{const rho=2.5,k0=.01,sig=[-.27,0,.78],k=sig.map(s=>k0*10**(rho*s)),r=Math.log10(k[2]/k[0])/(sig[2]-sig[0]),ratio=k[2]/k[0],conv=1-Math.exp(-k[2]*60);assert.ok(Math.abs(r-rho)<1e-12&&k[2]>k[1]&&k[1]>k[0]);return[...k,rho,r,k[1],ratio,conv,1-conv,-8.314462618*298.15*Math.log(k[2]/k[1])/1000,Math.log(2)/k[2],Math.log10(ratio),60*k[2],k[2]/k[1],sig[2]-sig[0]];},
"UC-ADV12-P153":()=>{const r=.001,k=.01,D=1e-9,cs=1,phi=r*Math.sqrt(k/D),coth=1/Math.tanh(phi),eta=3*(phi*coth-1)/(phi*phi),cc=phi/Math.sinh(phi),vol=4*Math.PI*r**3/3,area=4*Math.PI*r*r,rate=eta*k*cs*vol,flux=D*cs*(phi*coth-1)/r;assert.ok(eta>0&&eta<1&&cc<1&&Math.abs(rate/(flux*area)-1)<1e-12);return[phi,eta,cc,cs*cc,vol,area,rate,flux,flux*area,eta,phi*coth-1,1/eta,3/phi*(coth-1/phi),Math.sqrt(D/k)];}
});

Object.assign(witnesses,{
"UC-ADV12-I157":()=>{const R=8.314462618,H=18000,S=65,g=5,T=300,k=t=>g*Math.exp(S/R-H/(R*t)),K=k(T),p=K/(1+K),p2=k(350)/(1+k(350)),half=H/(S+R*Math.log(g)),U=H*p,C=H*H*p*(1-p)/(R*T*T),m2=p*4.9**2,E=-R*(p*Math.log(p)+(1-p)*Math.log(1-p))+p*(S+R*Math.log(5));assert.ok(p>0&&p<1&&p2>p);return[K,p,1-p,p2,half,U,C,m2,Math.sqrt(m2),E,K/(1+K),1,H-T*(S+R*Math.log(5))];},
"UC-ADV12-A157":()=>{const A=[.25,.55],s=[.5,2.5],blank=.1,m=(A[1]-A[0])/(s[1]-s[0]),Cx=(A[0]-blank)/m-s[0],Cx2=(A[1]-blank)/m-s[1];assert.ok(Math.abs(Cx-Cx2)<1e-12);return[m,blank,Cx/1000,Cx*1000,A[0]-blank,A[0]-blank,A[1]-blank,A[1]/A[0],(Cx/1000)/.001,A[0]/m,A[1]/m,A[1]-A[0],Cx/1000*.004*1e6];}
});

Object.assign(witnesses,{
"UC-ADV12-I158":()=>{const K=2e-6,lo=.001,hi=.1,a0=5.41e-8,b=.1,NA=6.02214076e23,e=1.602176634e-19,mu=.05,Ce=140.116,O=15.999;const del=p=>Math.exp((Math.log(K)-Math.log(2)-.5*Math.log(p))/3),d=del(lo),D=del(hi),a=a0*(1+b*d),A=a0*(1+b*D),n=4/a**3,rho=(dd,aa)=>4*(Ce+(2-dd)*O)/(NA*aa**3),v=n*d,c=n*2*d;assert.ok(d<.5&&D<d&&Math.abs(c-2*v)<1e-6);return[d,D,D/d,d/2,2*d,a*1e8,A*1e8,n,v,c,e*mu*c,rho(d,a),rho(D,A),Math.log(D/d)/Math.log(hi/lo),2*d**3*Math.sqrt(lo)];},
"UC-ADV12-O154":()=>{const R=8.314462618,T=320,h=6.62607015e-34,kb=1.380649e-23,GA=3000,BA=83000,BB=78000,n=.01,t=2,K=Math.exp(-GA/(R*T)),pA=1/(1+K),pB=K/(1+K),ka=kb*T/h*Math.exp(-BA/(R*T)),kb2=kb*T/h*Math.exp(-BB/(R*T)),a=pA*ka,b=pB*kb2,rate=a+b,X=-Math.expm1(-rate*t),mA=n*X*a/rate,mB=n*X*b/rate,remain=n*(1-X),diff=GA+BB-BA;assert.ok(Math.abs(mA+mB+remain-n)<1e-15&&b/a>1);return[K,pA,pB,ka,kb2,a,b,rate,b/a,Math.exp(-diff/(R*T)),X,mA,mB,remain,1/rate,diff/1000,mA+mB+remain];}
});

Object.assign(witnesses,{
"UC-ADV12-A158":()=>{const r0=.0112,std=.01118,a=.98,u=.4,v=.7,n0=1/(1+r0),n1=r0/(1+r0),r=x=>r0*Math.exp((a-1)*Math.log(x)),rA=r(u),rB=r(v),n12=n0*u,n13=n1*Math.exp(a*Math.log(u)),p12=n0-n12,p13=n1-n13,rc=p13/p12,inst=a*rA,d=x=>1e3*(x/std-1),rec=1+Math.log(rA/rB)/Math.log(u/v);assert.ok(Math.abs(n12+p12-n0)<1e-15&&Math.abs(n13+p13-n1)<1e-15);return[n0,n1,rA,rB,rec,d(r0),d(rA),d(rB),n12,n13,p12,p13,rc,d(rc),inst,d(inst),n12+p12,n13+p13];},
"UC-ADV12-P154":()=>{const A=.03*40,L=.001,D=1e-9,cv=10,R=8.314462618,B=Math.exp(-A),c0=cv*A/(-Math.expm1(-A)),c1=c0*B,cm=c0*Math.exp(-A/2),dc=-A*cm/L,F=-D*dc,S=-D*.03*cm*40/L,heat=-.6*40/L,sigma=.6*(40/L)**2/320**2;assert.ok(Math.abs(F+S)<1e-20&&Math.abs(c0*(1-B)/A-cv)<1e-11);return[A,B,c0,c1,cm,c0/c1,dc,F,S,0,heat,sigma,cv*L,c0*(1-B)*L/A,L*L/D,c0*R*300,c1*R*340];}
});

Object.assign(witnesses,{
"UC-ADV12-I159":()=>{const m=148+738+1451,o=249,a=-141+744,pre=m+o+a,form=-602,L=form-pre,hyd=-1921-1300,sol=-L+hyd,R=8.314462618,T=298.15;assert.ok(pre>0&&L<0&&form-(pre+L)===0);return[m,o,a,pre,L,-L,hyd,sol,0,0,-L/pre,sol/1000];},
"UC-ADV12-A159":()=>{const n0=20000,v=1000,theta=1.438776877*v,T=350,ambient=298.15,F=((n0+v)/(n0-v))**4,r=F*Math.exp(-theta/T),Tinv=theta/Math.log(F/r),S=1e6,A=S*r,occ=1/Math.expm1(theta/T),sr=r*Math.sqrt(1/A+1/S),st=T*T/theta*Math.sqrt(1/A+1/S);assert.ok(Math.abs(Tinv-T)<1e-12&&A>0);return[n0-v,n0+v,1e7/(n0-v),1e7/(n0+v),F,Math.exp(-theta/T),r,Tinv,occ,1+occ,A,sr,st,T-ambient,Math.log(F/r),A/S];}
});
const spec={inorganic:['I',151],analytical:['A',151],organic:['O',148],physical:['P',148]};
let count=0;const ids=new Set(),titles=new Set(),families=new Set();
const previous=new Set();
for(let v=2;v<=11;v++){
 let dir='editorial/advanced_integrated_v'+v+'/';
 for(const sub of Object.keys(spec)){
   try{for(const x of read(dir+sub+'.jsonl').trim().split('\n').filter(Boolean).map(JSON.parse))previous.add(x.model_family);}
   catch(e){if(v>=10)throw e;}
 }
}
for(const [subject,[letter,start]] of Object.entries(spec)){
 const path='editorial/advanced_integrated_v12/'+subject+'.jsonl';
 const rows=read(path).trim().split('\n').filter(Boolean).map(JSON.parse);
 assert.ok(rows.length>=1&&rows.length<=25);
 rows.forEach((x,i)=>{
 count++;assert.equal(x.id,'UC-ADV12-'+letter+(start+i));
 assert.equal(x.subject,subject);
 assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=7);
 assert.ok(x.answer_values.length>=4&&x.answer_values.length===x.answer_units.length);
 assert.ok(x.answer_values.every(Number.isFinite));
 assert.ok(Array.isArray(x.answer_names)&&x.answer_names.length===x.answer_values.length&&new Set(x.answer_names).size===x.answer_names.length);
 assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
 assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
 assert.equal(x.quality_status,'awaiting_expert_review');assert.equal(x.novelty_review_status,'pending_cross_series_model_review');assert.equal(x.parametric_variant,null);
 assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family)&&!previous.has(x.model_family),'Duplicate ID/title/model family '+x.id);
 ids.add(x.id);titles.add(x.title);families.add(x.model_family);
 assert.ok(Object.hasOwn(witnesses,x.id),'Missing independent witness '+x.id);
 const values=witnesses[x.id]();assert.equal(values.length,x.answer_values.length);
 values.forEach((a,j)=>{const b=x.answer_values[j],scale=Math.max(Math.abs(a),Math.abs(b),1e-14);assert.ok(Math.abs(a-b)<=1e-9*scale,x.id+' index '+j+' '+a+' vs '+b);});
 });
}
assert.equal(Object.keys(witnesses).length,count);
const queue=JSON.parse(read('editorial/advanced_integrated_v12/overlap_review_queue.json'));
assert.equal(queue.current_draft_count,count);assert.equal(queue.expert_approved,0);
assert.equal(queue.preliminary_flags,queue.pairs.length);
const registered=new Set(queue.new_items_requiring_cross_series_comparison.map(x=>x.new_id));
for(const id of ids)assert.ok(registered.has(id),'Missing cross-series review item '+id);
const man=JSON.parse(read('release/chemistry-approved-manifest.json'));
assert.equal(man.advanced_editorial_items,606+count);
assert.equal(man.twelfth_series_work_in_progress_items,count);
assert.equal(man.twelfth_series_pending_cross_series_novelty_review,count);
assert.equal(man.approved_count,0);assert.deepEqual(man.items,[]);
console.log(JSON.stringify({pass:true,series:12,items:count,distribution:Object.fromEntries(Object.entries(spec).map(([s])=>[s,read('editorial/advanced_integrated_v12/'+s+'.jsonl').trim().split('\n').length])),independent_witnesses:count,human_approved:0}));
