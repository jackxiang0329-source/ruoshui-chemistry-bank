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

Object.assign(witnesses,{
"UC-ADV12-O155":()=>{const R=8.314462618,T=298.15,E=6000,ct=.002,w=Math.exp(E/(R*T)),Z=w+14,p=w/Z,p1=6/Z,p0=8/Z,mu=(3*w+6)/Z,m2=(9*w+6)/Z,v=m2-mu*mu,b=3*ct;assert.ok(Math.abs(p+p1+p0-1)<1e-14&&v>0);return[15,w,Z,p,p1,p0,w/14,-R*T*Math.log(w/14)/1000,mu,m2,v,ct*p,b,b,2*b,6*ct,2*b,1/15];},
"UC-ADV12-P155":()=>{const e=1.602176634e-19,k=1.380649e-23,NA=6.02214076e23,R=8.314462618,T=298.15,eps=78.5*8.8541878128e-12,c=10,V=.05,Vt=k*T/e,x=V/(2*Vt),d=Math.sqrt(eps*k*T/(2*e*e*NA*c)),scale=Math.sqrt(8*eps*R*T*c),sigma=scale*Math.sinh(x),cap=scale/(2*Vt)*Math.cosh(x),cap0=scale/(2*Vt),pos=c*Math.exp(-2*x),neg=c*Math.exp(2*x),pressure=R*T*(pos+neg-2*c),maxwell=sigma*sigma/(2*eps),W=2*Vt*scale*(Math.cosh(x)-1);assert.ok(sigma>0&&cap>cap0&&Math.abs(maxwell/pressure-1)<1e-9);return[Vt,x,d*1e9,1/d,scale,sigma,cap,cap0,cap/cap0,pos,neg,neg/pos,pressure,maxwell,W,(neg-pos)*e*NA,V/Vt];}
});

Object.assign(witnesses,{
"UC-ADV12-I160":()=>{const R=8.314462618,k=1.380649e-23,NA=6.02214076e23,mu=9.2740100783e-24,T=30,d=650,g=2.1,B=5,x=d/(R*T),u=Math.exp(-x),Z=1+3*u,pS=1/Z,pT=3*u/Z,eq=d/(R*Math.log(3)),C=R*x*x*pT*pS,S=R*(Math.log(Z)+x*pT),y=g*mu*B/(k*T),ZB=1+u*(1+2*Math.cosh(y)),mag=NA*g*mu*2*u*Math.sinh(y)/ZB,chi=NA*g*g*mu*mu/(k*T)*2*u/Z;assert.ok(Math.abs(pS+pT-1)<1e-14&&mag>0&&C>0);return[x,u,Z,pS,pT,eq,d*pT,C,S,chi,y,ZB,mag,mag/B,u*(1+2*Math.cosh(y))/ZB,pS+pT,d/R];},
"UC-ADV12-A160":()=>{const F=96485.33212,Q=.12,eff=.9,M=63.546,W=18.01528,C=56.6,df=-2500,A=1,den=8.96,t=60,cuQ=Q*eff,HQ=Q-cuQ,n=cuQ/(2*F),cug=n*M*1e6,mt=-df/C*A,wg=mt-cug,nw=wg/1e6/W,nh=HQ/(2*F),d=cug*1e-6/(den*A)*1e7;assert.ok(wg>0&&Math.abs((2*F*(n+nh))/Q-1)<1e-14);return[cuQ,HQ,n,cug,mt,wg,nw,nh,nw/n,d,eff*100,n/t,Q/t,n*6.02214076e23,cuQ+HQ,n*2*F/Q];}
});

Object.assign(witnesses,{
"UC-ADV12-O156":()=>{const p=.8,a=.002,b=.003,MA=300,MB=200,pc=1/Math.sqrt(2),u=(1-p*p)/(p*p),v=1-p+p*u*u,ga=1-u**3,gb=1-v*v,ma=a*MA,mb=b*MB,gel=ma*ga+mb*gb,sol=ma+mb-gel,l=3*a*p;assert.ok(ga>0&&gb>0&&Math.abs(u-(1-p+p*v))<1e-14&&Math.abs(v-(1-p+p*u*u))<1e-14);return[pc,p/pc,u,v,ga,gb,ma,mb,gel,sol,gel/(ma+mb),l,3*a*(1-p),2*b*(1-p),a*ga,b*gb,0,0];},
"UC-ADV12-P156":()=>{const NA=6.02214076e23,a=5e-10,D=8e-10+6e-10,kappa=.2,c0=1e-6,t=.01,Da=kappa*a/D,kdiff=4*Math.PI*a*D*NA*1000,keff=kdiff/(1+D/(kappa*a)),factor=keff/kdiff,c=c0/(1+keff*c0*t),p=c0-c,half=1/(keff*c0),radius=a*factor,rate=keff*c*c,initial=keff*c0*c0;assert.ok(keff<kdiff&&Math.abs(c+p-c0)<1e-15&&half>a*a/D);return[D,Da,kdiff,keff,factor,radius*1e9,half,c,p,rate,initial,a*a/D,D/(kappa*a),c+p,1/c-1/c0,keff*t,keff*c0*t];}
});

Object.assign(witnesses,{
"UC-ADV12-I161":()=>{const R=8.314462618,T=1000,H=-15000,S=-10,co0=.02,co20=.005,feo0=.012,G=H-T*S,K=Math.exp(-G/(R*T)),x=(K*co0-co20)/(1+K),co=co0-x,co2=co20+x,feo=feo0-x,Go=150000,pO2=Math.exp(-2*Go/(R*T)),Kco=Math.exp(-(G-Go)/(R*T)),o0=feo0+co0+2*co20,o=feo+co+2*co2;assert.ok(x>0&&x<feo0&&Math.abs(co2/co-K)<1e-12&&Math.abs(o-o0)<1e-12);return[G/1000,K,x,co,co2,feo,x,x/feo0,co2/co,co+co2,o0,o,pO2,Kco,Kco*Math.sqrt(pO2),H*x,(co20+feo0)/(co0-feo0),2*x];},
"UC-ADV12-A161":()=>{const u=[.01,.02,.05],h=[.0055,.004,.0043],d1=h[0]-h[1],d2=h[1]-h[2],a11=1/u[0]-1/u[1],a12=u[0]-u[1],a21=1/u[1]-1/u[2],a22=u[1]-u[2],det=a11*a22-a12*a21,B=(d1*a22-d2*a12)/det,C=(a11*d2-a21*d1)/det,A=h[0]-B/u[0]-C*u[0],f=x=>A+B/x+C*x,opt=Math.sqrt(B/C),H=f(opt),L=20,N=L/H,t0=L/opt,ret=t0*4,rs=Math.sqrt(N)/4*(.1/1.1)*(.75),sd=ret/Math.sqrt(N);assert.ok(A>0&&B>0&&C>0&&Math.abs(f(u[2])-h[2])<1e-12);return[...h,A,B,C,opt,H,N,t0,ret,rs,sd,B/opt,C*opt,f(opt),2*Math.sqrt(B*C),f(2*opt)/H];}
});

Object.assign(witnesses,{
"UC-ADV12-O157":()=>{const s=2.8,w=1.6,a=s+w,b=s-w,hc=1239.841984,F=96485.33212,lev=[-a,-b,b,a],sq=[-a,0,0,a],E=2*(lev[0]+lev[1]),E0=2*sq[0],gain=E0-E,gap=2*b;assert.ok(gain>0&&gap>0&&Math.abs(lev.reduce((u,v)=>u+v,0))<1e-12);return[a,b,...lev,...sq,E,E0,gain,gap,0,hc/gap,gain*F/1000,lev.reduce((u,v)=>u+v,0),4];},
"UC-ADV12-P157":()=>{const q1=.001,q2=.004,t0=4e-9,T=298.15,R=8.314462618,KD=20,KS=150,l=q=>1+KD*q,i=q=>l(q)*(1+KS*q),l1=l(q1),l2=l(q2),i1=i(q1),i2=i(q2),d=(l2-l1)/(q2-q1),s1=(i1/l1-1)/q1,s2=(i2/l2-1)/q2,rate=d/t0,bound=s2*q2/(1+s2*q2),G=-R*T*Math.log(s2);assert.ok(Math.abs(s1-s2)<1e-10&&Math.abs((1-bound)/l2-1/i2)<1e-12);return[l1,l2,i1,i2,d,s1,s2,rate,t0/l2*1e9,bound,1-bound,1/l2,1/i2,G/1000,i2/l2,rate*q2,i1/(l1*(1+s1*q1)),(1-bound)/l2];}
});

Object.assign(witnesses,{
"UC-ADV12-I162":()=>{const k=1e-33,b=1e33,o=(3/b)**.25,poh=-Math.log10(o),ph=14-poh,a=k/o**3,z=b*k*o,S=a+z,s=p=>{const q=10**(p-14),x=k/q**3,y=b*k*q;return[x,y,x+y]},p5=s(5),p7=s(7),p9=s(9);assert.ok(Math.abs(z/(3*a)-1)<1e-12&&p5[2]>S&&p9[2]>S);return[o,poh,ph,a,z,S,z/S,3*a/z,p5[2],p7[2],p9[2],p7[0],p7[1],b*k,0,3*a,z/S];},
"UC-ADV12-A162":()=>{const b=.1,k=1e8,C=4e-8,tau=20,t1=10,t3=30,S=t=>b+k*C*(1-Math.exp(-t/tau)),I1=S(t1),I3=S(t3),y1=I1-b,y3=I3-b,rat=y3/y1,x=(-1+Math.sqrt(4*rat-3))/2,ta=-t1/Math.log(x),c=y1/(k*(1-x)),lod=3*.02/k;assert.ok(x>0&&x<1&&Math.abs(ta/tau-1)<1e-12);return[I1,I3,y1,y3,rat,x,ta,c,c*1e9,S(20),ta*Math.log(2),lod,lod/(1-Math.exp(-t1/ta)),lod/(1-Math.exp(-t3/ta)),1-Math.exp(-t1/ta),1-Math.exp(-t3/ta),k*C,(y3-y1)/(t3-t1)];}
});

Object.assign(witnesses,{
"UC-ADV12-O158":()=>{const kp=300,M=.5,kT=50,T=.1,kd=1,a=kp*M,b=kT*T+kd,p=a/(a+b),q=b/(a+b),m=a/b,dp=1+m,dpw=1+2*m,den=dpw/dp,T2=.05,m2=a/(kT*T2+kd),dp2=1+m2,ktr=(1/(dp-1)-1/(dp2-1))/(T-T2)*a;assert.ok(Math.abs(p+q-1)<1e-12&&Math.abs(ktr-kT)<1e-12);return[a,kT*T,b,p,q,1/b,m,dp,dpw,den,dp*100,dpw*100,q,q*p,1-p**5,kT*T/b,kd/b,dp2,ktr,1/m];},
"UC-ADV12-P158":()=>{const R=8.314462618,T=298.15,G=3e-6,K=2000,gm=.072,c1=1e-4,c2=.001,NA=6.02214076e23,th=c=>K*c/(1+K*c),ex=c=>G*th(c),g=c=>gm-R*T*G*Math.log1p(K*c),g1=g(c1),g2=g(c2),a=1/(G*NA)*1e18,r=1e-5,rr=.00025,rho=1000,grav=9.81;assert.ok(g2>0&&g2<g1&&g1<gm);return[g1,g2,gm-g1,gm-g2,th(c1),th(c2),ex(c1),ex(c2),-R*T*ex(c1),-R*T*ex(c2),a,ex(c2)*NA,2*g2/r,2*gm/r,2*g2/(rho*grav*rr)*100,2*gm/(rho*grav*rr)*100,g2/gm,-R*T*G];}
});

Object.assign(witnesses,{
"UC-ADV12-I163":()=>{const k=1.1e-10,c=2e-5,f=5e-6,g=I=>Math.exp(-Math.LN10*.51*4*(Math.sqrt(I)/(1+Math.sqrt(I))-.3*I)),g1=g(.01),g2=g(.1),s=x=>{const v=k/(x*x);return 2*v/(Math.sqrt(c*c+4*v)+c)},a=s(g1),b=s(g2),y1=(c+a)*a,y2=(c+b)*b,Q1=g1*g1*(c+f)*f,Q2=g2*g2*(c+f)*f;assert.ok(b>a&&a>0&&Math.abs(g1*g1*y1/k-1)<1e-12);return[g1,g2,a,b,b/a,c+a,c+b,g1*g1*y1,g2*g2*y2,y1,y2,Q1,Q2,Math.log10(Q1/k),Math.log10(Q2/k),2*(c+a)+2*a,4*a,4*b,Math.sqrt(c*c+4*k/(g1*g1))-c];},
"UC-ADV12-A163":()=>{const e=[[15000,4000],[3000,12000]],b=[.01,.02],y=[.14,.084],l=1,sd=[.002,.003],D=e[0][0]*e[1][1]-e[0][1]*e[1][0],cx=(e[1][1]*y[0]-e[0][1]*y[1])/(l*D),cy=(-e[1][0]*y[0]+e[0][0]*y[1])/(l*D),v1=(e[1][1]**2*sd[0]**2+e[0][1]**2*sd[1]**2)/(l*D)**2,v2=(e[1][0]**2*sd[0]**2+e[0][0]**2*sd[1]**2)/(l*D)**2,cov=-(e[1][1]*e[1][0]*sd[0]**2+e[0][1]*e[0][0]*sd[1]**2)/(l*D)**2,rx=Math.sqrt(v1),ry=Math.sqrt(v2),A1=b[0]+e[0][0]*cx+e[0][1]*cy,A2=b[1]+e[1][0]*cx+e[1][1]*cy;assert.ok(cx>0&&cy>0&&Math.abs(A1-.15)<1e-12);return[A1,A2,y[0],y[1],D,cx,cy,cx*1e6,cy*1e6,cx/cy,rx,ry,v1,v2,cov,cov/(rx*ry),3*rx,3*ry,A1,A2,cx*e[0][0],cy*e[0][1]];}
});

Object.assign(witnesses,{
"UC-ADV12-O159":()=>{const R=8.314462618,T=298.15,ratio=2/3,A=1/(1+ratio),B=ratio/(1+ratio),k=2,t1=.5,t2=1,q=t=>B*(-Math.expm1(-k*t)),v1=q(t1),v2=q(t2),K1=-Math.log1p(-v1/B)/t1,K2=-Math.log1p(-v2/B)/t2,ab=K1*B,ba=K1*A,flux=A*ab;assert.ok(Math.abs(K1-K2)<1e-12&&Math.abs(flux-B*ba)<1e-14);return[A,B,ratio,v1,v2,1-v1,1-v2,K1,K2,ab,ba,1/K1,Math.log(2)/K1,-R*T*Math.log(ratio)/1000,.01*A,.01*B,flux,0,v2/v1,Math.exp(-k*t2)];},
"UC-ADV12-P159":()=>{const M=[.02,.5],k1=2,km=800,k2=120,T=350,A0=.01,t=5,f=m=>k1*m*k2/(km*m+k2),lo=f(M[0]),hi=f(M[1]),slope=(1/lo-1/hi)/(1/M[0]-1/M[1]),intercept=1/lo-slope/M[0],zero=1/slope,infty=1/intercept,p=m=>k2/(km*m+k2),star=infty/zero,r=m=>1-Math.exp(-f(m)*t),x=r(M[0]),y=r(M[1]),a= k1*M[0]/(km*M[0]+k2),b=k1*M[1]/(km*M[1]+k2);assert.ok(b<.01&&Math.abs(zero-k1)<1e-12&&Math.abs(infty-k1*k2/km)<1e-12);return[zero,infty,star,lo,hi,hi/lo,slope,intercept,zero,infty,p(M[0]),p(M[1]),a,b,x,y,A0*x,A0*y,A0*(1-x),A0*(1-y),M[0]*1000*8.314462618*T,M[1]*1000*8.314462618*T,1/lo,1/hi];}
});

Object.assign(witnesses,{
"UC-ADV12-I164":()=>{const J=5000,R=8.314462618,T1=400,T2=550,root=t=>{let a=1e-10,b=.999999;for(let j=0;j<130;j++){let x=(a+b)/2;if(-J*x+R*t*Math.atanh(x)<0)a=x;else b=x}return(a+b)/2},a=root(T1),b=root(T2),U=x=>-J*x*x/2,S=x=>-R*((1+x)*Math.log1p(x)+(1-x)*Math.log1p(-x))/2,G=(t,x)=>U(x)-t*S(x),cur=(t,x)=>-J+R*t/(1-x*x),r=x=>(x*(-2)/54)**2;assert.ok(a>b&&b>0&&G(T1,a)<0);return[J/R,J/(R*T1),a,b,0,(1+a)/2,(1-a)/2,(1+b)/2,(1-b)/2,U(a),S(a),G(T1,a),G(T2,b),cur(T1,a),cur(T2,b),r(a),r(b),r(b)/r(a),1-a,0];},
"UC-ADV12-A164":()=>{const Ka=.00068,R=8.314462618,F=96485.33212,T=298.15,E0=.2,g=.8,cl=.01,K=.001,C=.0001,VT=R*T/F,fr=p=>Ka/(Ka+Math.pow(10,-p)),a=fr(2.5),b=fr(4.5),u=g*C*a+K*g*cl,v=g*C*b+K*g*cl,E1=E0-VT*Math.log(u),E2=E0-VT*Math.log(v),z1=Math.exp((E0-E1)/VT),z2=Math.exp((E0-E2)/VT),ct=(z2-z1)/(g*(b-a)),sel=(z1-g*ct*a)/(g*cl),inter=sel*g*cl;assert.ok(Math.abs(ct/C-1)<1e-12&&Math.abs(sel/K-1)<1e-12);return[VT,a,b,u,v,E1,E2,E1-E2,ct,sel,ct*a,ct*b,ct*(1-a),ct*(1-b),inter,inter/u,inter/v,inter/(g*a),inter/(g*b),z1,z2,b/a];}
});

Object.assign(witnesses,{
"UC-ADV12-O160":()=>{const kf=.2,ks=.04,t=5,C=.01,a=.005*Math.exp(-kf*t),b=.005*Math.exp(-ks*t),u=.005-a,v=.005-b,S=a+b,P=u+v,x=P/C,es=(b-a)/S,ep=(u-v)/P,ratio=kf/ks,R=8.314462618,T=298.15;assert.ok(Math.abs(es*(1-x)-ep*x)<1e-14&&Math.abs(a+u-.005)<1e-14);return[a,b,u,v,S,P,x,es,ep,ratio,-R*T*Math.log(ratio)/1000,Math.log(2)/kf,Math.log(2)/ks,-Math.log(a/.005)/t,-Math.log(b/.005)/t,es*(1-x),ep*x,u+a,v+b,(kf-ks)/(kf+ks),1-x];},
"UC-ADV12-P160":()=>{const X=.05,T=298.15,R=8.314462618,F=96485.33212,RT=R*T,VT=RT/F,solve=c=>{let z=Math.sqrt(X*X+4*c*c),p=(z+X)/2,n=c*c/p,psi=VT*Math.log(c/p),pi=RT*1000*(p+n-2*c);return[p,n,psi,pi,RT*Math.log(p/c)+F*psi,RT*Math.log(n/c)-F*psi]};const a=solve(.1),b=solve(.2),poly=RT*1000*.02;assert.ok(Math.abs(a[0]*a[1]-.01)<1e-14&&Math.abs(a[0]-a[1]-X)<1e-14&&a[3]>b[3]);return[a[0],a[1],a[0]*a[1],a[0]-a[1],a[2]*1000,a[3],poly,a[3]+poly,a[1]/.1,a[0]+a[1]-.2,0,0,b[0],b[1],b[2]*1000,b[3],b[1]/.2,a[3]/b[3],a[0]/.1,a[1]/.1];}
});

Object.assign(witnesses,{
"UC-ADV12-I165":()=>{const E=14412.5,c=299792458,v1=-.35,v2=1.25,cen=(v1+v2)/2,dv=v2-v1,lo=E*v1*.001/c,hi=E*v2*.001/c,ce=E*cen*.001/c,del=E*dv*.001/c,M=56.9354*1.66053906660e-27,e=1.602176634e-19,Er=(E*e)**2/(2*M*c*c)/e;assert.ok(del>0&&Er>del);return[cen,dv,lo,hi,ce,del,del*1e9,del/4.135667696e-15,del*e/1.380649e-23,Er,Er*1000,Er/del,1239.841984/E,lo+hi-2*ce,hi-lo-del,2*del,2*Er];},
"UC-ADV12-A165":()=>{const Vi=.02,ca=.01,cs=.005,cb=.02,lambda=[.03496,.005011,.007635,.01985],calc=v=>{let nh=Math.max(0,ca*Vi-cb*v),no=Math.max(0,cb*v-ca*Vi),na=cs*Vi+cb*v,cl=(cs+ca)*Vi;return 1000*(lambda[0]*nh+lambda[1]*na+lambda[2]*cl+lambda[3]*no)/(Vi+v)},vol=[0,.005,.01,.015,.02],raw=vol.map(calc),corr=vol.map((x,i)=>raw[i]*(Vi+x)/Vi),sl=(corr[1]-corr[0])/.005,sr=(corr[3]-corr[2])/.005,ve=(corr[3]-corr[0]-sr*.015)/(sl-sr);assert.ok(Math.abs(ve-.01)<1e-12&&sl<0&&sr>0);return[.01,...raw,...corr,sl,sr,ve,cb*ve/Vi,ca*Vi,cb*.01,calc(.01),cs*Vi+cb*.01,(cs+ca)*Vi,corr[2]-corr[0],calc(.015)/calc(.005)];}
});

Object.assign(witnesses,{
"UC-ADV12-O161":()=>{const R=8.314462618,H=4500,S=8,T1=298.15,T2=350,A=12,G=3,C=t=>{let w=Math.exp(S/R-H/(R*t)),pa=1/(1+2*w),pg=w*pa,job=A*pa+2*G*pg,mix=-R*(pa*Math.log(pa)+2*pg*Math.log(pg)),cv=H*H/(R*t*t)*pa*2*pg;return[w,pa,pg,job,mix,cv]},a=C(T1),b=C(T2),w1=(A-a[3])/(2*(a[3]-G)),w2=(A-b[3])/(2*(b[3]-G)),h=-R*Math.log(w2/w1)/(1/T2-1/T1),s=R*Math.log(w1)+h/T1;assert.ok(Math.abs(h-H)<1e-10&&Math.abs(s-S)<1e-12);return[A,G,a[0],b[0],a[1],b[1],a[2],b[2],2*a[2],2*b[2],a[3],b[3],w1,w2,h,s,(H-T1*S)/1000,(H-T2*S)/1000,a[4],b[4],a[5],b[5],a[1]+2*a[2],b[1]+2*b[2]];},
"UC-ADV12-P161":()=>{const R=8.314462618,hc=1.438776877,T=800,rm=(c,o)=>c*o/(c+o),m=rm(12,15.994915),M=rm(13.003355,15.994915),v=2143,V=v*Math.sqrt(m/M),f=n=>{let x=hc*n/T,ex=Math.exp(-x),p0=1-ex,p1=p0*ex,nn=ex/(1-ex),z=R*hc*n/2,U=R*hc*n*(.5+nn),Cv=R*x*x*nn*(1+nn),S=R*(x*nn-Math.log(p0));return{x,nn,p0,p1,z,U,Cv,S,q:1/p0}},a=f(v),b=f(V);assert.ok(M>m&&V<v&&b.nn>a.nn);return[m,M,v,V,v-V,V/v,a.x,b.x,a.nn,b.nn,a.p0,b.p0,a.p1,b.p1,a.z,b.z,a.z-b.z,a.U,b.U,a.Cv,b.Cv,a.S,b.S,a.q,b.q,a.p0+a.p1,a.U-b.U];}
});

Object.assign(witnesses,{
"UC-ADV12-A166":()=>{const F=96485.33212,M=18.01528,eta=.975,dr=.2e-6,t=150,sm=.5,sp=.0002,st=80,toQ=x=>2*F*x/(eta*M),back=x=>eta*M*x/(2*F),q=toQ(.000375+dr*t),b=toQ(dr*t),qs=toQ(sp+dr*st),w=back(q)-dr*t,ws=back(qs)-dr*st,sd=Math.hypot(.01*eta*M/(2*F),.01e-6*t);assert.ok(Math.abs(w-.000375)<1e-15);return[q,b,q-b,eta*q/(2*F),back(q)*1e6,dr*t*1e6,w*1e6,w/sm*1e6,q/t,qs,dr*st*1e6,ws*1e6,ws/sp*100,sd*1e6,sd/sm*1e6,w/sm,eta*q/F,b/q];},
"UC-ADV12-P162":()=>{const kb=1.380649e-23,T=298.15,x=.5,r=10,k0=.1,thermal=kb*T*1e21,alpha=x/thermal,A=k0/(r*alpha),rate=f=>k0*Math.exp(alpha*f),S=f=>Math.exp(-A*Math.expm1(alpha*f)),mode=q=>Math.log(q*alpha/k0)/alpha,median=q=>Math.log1p(Math.log(2)*q*alpha/k0)/alpha,f=mode(r),g=mode(40);assert.ok(Math.abs(g-f-Math.log(4)/alpha)<1e-12);return[thermal,1/alpha,A,f,median(r),g,median(40),g-f,rate(f),1/rate(f),S(15),1-S(15),S(30),1-S(30),S(f),k0/r,rate(f)*S(f)/r,Math.log(4)/alpha,0];}
});

Object.assign(witnesses,{
"UC-ADV12-I166":()=>{const R=8.314462618,T=298.15,dp=1e8,VL=10e-6,VR=4e-6,fr=Math.exp(-VL*dp/(R*T)),rr=Math.exp(-VR*dp/(R*T)),kf=2*fr,kr=.08*rr,K0=25,K=kf/kr,run=(f,r)=>{const a=f*.1,b=r,L=a+b,th=a/L,p=.01*th*(-Math.expm1(-L*.5));return[th,.01*th,p,1/L,th/(1-th)/.1]};const a=run(2,.08),b=run(kf,kr),G0=-R*T*Math.log(K0),G1=-R*T*Math.log(K);assert.ok(Math.abs((G1-G0)-600)<1e-10);return[fr,rr,kf,kr,K0,K,K/K0,(VL-VR)*1e6,G0/1000,G1/1000,G1-G0,a[0],b[0],a[1],b[1],a[2],b[2],a[3],b[3],a[4],b[4],.01,.01];},
"UC-ADV12-O162":()=>{const pS=8.3,pN=9.5,C=.01,E0=.001,t=2,kS=100,kN=20,calc=p=>{let fs=1/(1+10**(pS-p)),fn=1/(1+10**(pN-p)),a=kS*C*fs,b=kN*C*fn,L=a+b,x=-Math.expm1(-L*t),ps=E0*x*a/L,pn=E0*x*b/L,rem=E0*(1-x);return[fs,fn,a,b,L,a/b,x,ps,pn,rem,ps/pn]},A=calc(8.5),B=calc(10),r=20/5,y=(r-1)/(10**pN-r*10**pS),p=-Math.log10(y),target=calc(p)[5];assert.ok(Math.abs(target-20)<1e-12&&Math.abs(A[7]+A[8]+A[9]-E0)<1e-15);return[A[0],A[1],A[2],A[3],A[4],A[5],A[6],A[7],A[8],A[9],B[0],B[1],B[4],B[5],B[6],B[7],B[8],B[9],p,target,A[7]+A[8]+A[9],B[7]+B[8]+B[9],A[10],B[10]];}
});

Object.assign(witnesses,{
"UC-ADV12-I167":function wi(){
 const R=8.314462618,T0=298.15,MT=.01,LT=.03,H1=-20000,H2=-10000;
 const run=T=>{const K1=100*Math.exp(-H1/R*(1/T-1/T0)),K2=25*Math.exp(-H2/R*(1/T-1/T0));const f=x=>{const z=1+K1*x+K1*K2*x*x;return x+MT*(K1*x+2*K1*K2*x*x)/z-LT};let lo=0,hi=LT;for(let j=0;j<110;j++){const m=(lo+hi)/2;if(f(m)>0)hi=m;else lo=m;}const x=(lo+hi)/2,Z=1+K1*x+K1*K2*x*x,p0=1/Z,p1=K1*x/Z,p2=K1*K2*x*x/Z,n=p1+2*p2,v=p1+4*p2-n*n;return {K1,K2,x,m0:MT*p0,m1:MT*p1,m2:MT*p2,p0,p1,p2,n,bound:MT*n,inventory:x+MT*n,variance:v,slope:MT*v/x,metalsum:MT*(p0+p1+p2)};};const a=run(T0),b=run(323.15);
 if(Math.abs(a.inventory-LT)>1e-12||Math.abs(b.inventory-LT)>1e-12||Math.abs(a.metalsum-MT)>1e-12)throw Error('I ligand conservation');
 return [a.K1,a.K2,a.x,a.m0,a.m1,a.m2,a.p0,a.p1,a.p2,a.n,a.bound,a.inventory,a.variance,a.slope,b.K1,b.K2,b.x,b.m0,b.m1,b.m2,b.n,b.bound,b.inventory,b.p2/a.p2,H1/1000,H2/1000,a.metalsum,b.metalsum];
},
"UC-ADV12-A167":function wa(){
 const tau=50e-9,alpha=1.02,nsp=2e-6,fs63=.6915,fs65=.3085,ft63=.05,ft65=.95,M=63.546,V=.010;
 const Lo=392156.862745098,Ho=516456.806790183,L=Lo/(1-tau*Lo),H=Ho/(1-tau*Ho),rraw=Ho/Lo,r=H/(alpha*L),den=r*fs63-fs65,n=nsp*(ft65-r*ft63)/den;
 const total63=n*fs63+nsp*ft63,total65=n*fs65+nsp*ft65;
 const sdL=300,sdH=300,sda=.002;
 const drdh=1/(alpha*L*(1-tau*Ho)**2),drdl=-H/(alpha*L*L*(1-tau*Lo)**2),drda=-r/alpha;
 const sr=Math.hypot(drdh*sdH,drdl*sdL,drda*sda);
 const dndr=nsp*(ft63*fs65-ft65*fs63)/(den*den),sn=Math.abs(dndr)*sr;
 const mass=n*M*1000,con=mass/V,sc=sn*M*1000/V;
 if(Math.abs(total65/total63-r)>1e-10||!(n>0&&sn>0))throw Error('A isotope balance');
 return [Lo,Ho,L,H,rraw,r,n*1e6,mass,con,n/V,total63*1e6,total65*1e6,total65/total63,sr,sn*1e6,sc,L/Lo,H/Ho,r/(1+r),n+nsp];
},
"UC-ADV12-O163":function wo(){
 const flux=1e17,sigmaE=5e-18,sigmaZ=2e-18,phiE=.4,phiZ=.25,Ce=.002;
 const pe=flux*sigmaE*phiE,pz=flux*sigmaZ*phiZ,thermE=.01,thermZ=.04,a=pe+thermE,b=pz+thermZ,L=a+b,zstar=a/L;
 const z10=zstar*(-Math.expm1(-L*10)),e10=1-z10,zd=thermE/(thermE+thermZ),z30=zd+(z10-zd)*Math.exp(-(thermE+thermZ)*20),ed=1-z30;
 const phE=(L*zstar-thermE)/(flux*sigmaE),phZ=(L*(1-zstar)-thermZ)/(flux*sigmaZ);
 if(Math.abs(phE-phiE)>1e-12||Math.abs(phZ-phiZ)>1e-12||Math.abs(e10+z10-1)>1e-12)throw Error("O photo balance");
 return [pe,pz,a,b,L,zstar,1-zstar,1/L,Math.log(2)/L,z10,e10,Ce*z10,Ce*e10,zd,z30,ed,Ce*z30,Math.log(2)/(thermE+thermZ),phE,phZ,a,Ce*z30+Ce*ed];
},
"UC-ADV12-P163":function wp(){
 const Rs=10,Rct=100,C=100e-6,V=.01,f1=10,f2=100;
 const impedance=f=>{const x=2*Math.PI*f*Rct*C;return [Rs+Rct/(1+x*x),-Rct*x/(1+x*x)]};
 const z1=impedance(f1),z2=impedance(f2),u=z1[0]-Rs,v=-z1[1],tau=v/(2*Math.PI*f1*u),rinv=u*(1+(v/u)**2),cinv=tau/rinv;
 const star=1/(2*Math.PI*tau),mag=Math.hypot(...z1),phase=Math.atan2(-z1[1],z1[0])*180/Math.PI,I=V/mag;
 if(Math.abs(rinv-Rct)>1e-10||Math.abs(cinv-C)>1e-14||Math.abs(z2[0]-impedance(f2)[0])>1e-12)throw Error('P impedance inverse');
 return [z1[0],z1[1],z2[0],z2[1],tau,rinv,cinv*1e6,star,Rs+Rct/2,-Rct/2,mag,I*1e6,phase,V/Rs,Rs+Rct,Rs,2*Math.PI*f1*tau,z1[0]-Rs,-z1[1],Rct*C];
}
});


Object.assign(witnesses,{
"UC-ADV12-I168":()=>{const R=8.314462618,D=17000,w=4000;function root(T){let a=1e-12,b=1-1e-12;for(let k=0;k<140;k++){let x=(a+b)/2;const entSlope=R*Math.log((1-x)*(2-x)/(x*x));if(D+w*x-T*entSlope>0)b=x;else a=x;}const x=(a+b)/2,terms=[1-x,x,x/2,1-x/2],s=-R*((1-x)*Math.log(1-x)+x*Math.log(x)+x*Math.log(x/2)+(2-x)*Math.log((2-x)/2)),E=D*x+w*x*x/2,G=E-T*s,q=w+R*T*(2/x+1/(1-x)+1/(2-x)),ds=R*Math.log((1-x)*(2-x)/(x*x));return{x,s,E,G,q,ds,slope:ds/q,terms}}const a=root(1100),b=root(1450);assert.ok(a.q>0&&b.q>0&&b.x>a.x&&Math.abs(a.terms[0]+a.terms[1]-1)<1e-14);return[a.x,b.x,...a.terms,a.s,a.E/1000,a.G/1000,b.s,b.E/1000,b.G/1000,b.x/a.x,a.slope,a.q,a.ds,(1-a.x)+a.x,a.x+(2-a.x),2*(1-a.x)+3*a.x+2*a.x+3*(2-a.x),b.s-a.s,(b.G-a.G)/1000,b.slope,b.q,0];},
"UC-ADV12-A168":()=>{const H2O=18.01528,SO3=32.065+3*15.999,CO2=12.011+2*15.999,ms=21.618336,mt=19.214880,mc=8.801800,tot=120;const nS=mt/SO3,nC=mc/CO2,hyd=ms/(H2O*nS),salt=nS*(63.546+32.065+4*15.999+hyd*H2O),chalk=nC*(40.078+12.011+3*15.999),q=tot-salt-chalk,cuo=nS*(63.546+15.999),cao=nC*(40.078+15.999),ash=cuo+cao+q,fin=tot-ms-mt-mc,ux=hyd*Math.sqrt((.02/ms)**2+(.015/mt)**2);assert.ok(q>0&&Math.abs(fin-ash)<1e-10&&Math.abs(hyd-5)<1e-10);return[SO3,CO2,ms,mt,mc,nS*1000,nC*1000,hyd,salt,chalk,q,100*salt/tot,100*chalk/tot,100*q/tot,ash,fin,nS/nC,ux,.015*1000/SO3,100*(tot-fin)/tot,cuo,cao,q/tot];},
"UC-ADV12-O164":()=>{const sigma=[-.3,0,.5],S=x=>.025*Math.pow(10,-2*x),E=x=>.015*Math.pow(10,1.2*x),k=x=>S(x)+E(x),p=x=>S(x)/k(x),ss=.25,t=20,initial=.01;const h1=S(ss),h2=E(ss),d1=h1/1.05,d2=h2/3,kh=h1+h2,kd=d1+d2,Ch=initial*Math.exp(-kh*t),Cd=initial*Math.exp(-kd*t),PsH=(initial-Ch)*h1/kh,PeH=(initial-Ch)*h2/kh,PsD=(initial-Cd)*d1/kd,PeD=(initial-Cd)*d2/kd;const rhS=(Math.log10(k(.5)*p(.5))-Math.log10(k(-.3)*p(-.3)))/.8,rhE=(Math.log10(k(.5)*(1-p(.5)))-Math.log10(k(-.3)*(1-p(-.3))))/.8;assert.ok(Math.abs(PsH+PeH+Ch-initial)<1e-15&&Math.abs(PsD+PeD+Cd-initial)<1e-15);return[...sigma.map(k),...sigma.map(p),k(0)*p(0),k(0)*(1-p(0)),rhS,rhE,rhS-rhE,h1,h2,kh,d1,d2,kd,kh/kd,1-Ch/initial,1-Cd/initial,PsH,PeH,Ch,PsD,PeD,Cd,h1/kh,d1/kd,(d1/kd)/(h1/kh)];},
"UC-ADV12-P164":()=>{const L=[[2e-8,3e-4],[3e-4,10]],a=L[0][0],b=L[0][1],c=L[1][1],f=(x,y)=>[a*x+b*y,b*x+c*y],x=1,y=1e-4,[j,e]=f(x,y),det=a*c-b*b,r=b/Math.sqrt(a*c),sigma=j*x+e*y;const xb=-b*y/a,[bj,be]=f(xb,y),sb=bj*xb+be*y;const ya=-b*x/c,[aj,ae]=f(x,ya),sa=aj*x+ae*ya;const [uj,ue]=f(-x,y),su=-x*uj+y*ue;assert.ok(Math.abs(bj)<1e-18&&Math.abs(ae)<1e-14&&det>0&&su>0&&uj>0);return[det,r,j,e,sigma,j*x,e*y,xb,be,sb,c-b*b/a,ya,aj,sa,a-b*b/c,uj,ue,su,-x*uj,y*ue,x*y,Math.sqrt(det),r*r];}
});


Object.assign(witnesses,{
"UC-ADV12-I169":()=>{const k=1e-6,pl=[.01,1e-6],root=p=>{let l=0,h=.49999999999999;for(let i=0;i<145;i++){const x=(l+h)/2,ratio=(2*x/(1-2*x)),v=x/(2-x)*ratio*ratio*Math.sqrt(p);if(v>k)h=x;else l=x;}return(l+h)/2};const d=pl.map(root),f=x=>({c3:2*x,c4:1-2*x,v:x/2,o:1-x/2,ox:4-2*x,loss:x*15.999,power:-1/(2*(3+x/(2-x)+4*x/(1-2*x))),approx:Math.pow(k/(2*Math.sqrt(pl[d.indexOf(x)])),1/3)}),a=f(d[0]),b=f(d[1]);const K=(x,p)=>x/(2-x)*Math.pow(2*x/(1-2*x),2)*Math.sqrt(p);assert.ok(d[0]<d[1]&&b.c3<1&&Math.abs(K(d[1],pl[1])-k)<1e-13);return[k,...d,d[1]/d[0],a.c3,a.c4,a.v,a.o,b.c3,b.c4,b.v,b.o,a.ox,b.ox,a.loss,b.loss,K(d[0],pl[0]),K(d[1],pl[1]),a.power,b.power,a.approx,b.approx,d[0]/a.approx,d[1]/b.approx,2*d[0]-a.c3,2*d[1]-b.c3,a.c3+a.c4,b.c3+b.c4,2-d[0],2-d[1]];},
"UC-ADV12-A169":()=>{const sc=.01,ac=.0025,sa=.8,aa=2,z=1e6,one=(c,T,n)=>z*c*(1-Math.exp(-n/T)),a=one(ac,aa,1),A=one(ac,aa,2),s=one(sc,sa,1),S=one(sc,sa,2),da=2*a-A,ds=2*s-S,amp=a*a/da,samp=s*s/ds,Ta=-1/Math.log(A/a-1),Ts=-1/Math.log(S/s-1),n=sc*amp/samp,u=2,rr=Math.sqrt(Math.pow(u*(2/a-2/da),2)+Math.pow(u/da,2)+Math.pow(u*(2/s-2/ds),2)+Math.pow(u/ds,2));assert.ok(Math.abs(n-ac)<1e-14&&Math.abs(Ta-aa)<1e-12&&Math.abs(Ts-sa)<1e-12);return[a,A,s,S,A/a,S/s,da,ds,Ta,Ts,amp,samp,samp/sc,amp/samp,n,n*100,amp/samp,sc*a/s,(sc*a/s)/n,rr,n*rr,100*n*rr,amp/((samp/sc)*n),samp/((samp/sc)*sc),a/amp,s/samp,1,1];},
"UC-ADV12-O165":()=>{const n=.01,u=.12,v=.04,w=.03,L=u+w,exp=Math.exp,states=t=>{const A=n*exp(-L*t),B=n*u/(L-v)*(exp(-v*t)-exp(-L*t)),D=n*w/L*(1-exp(-L*t)),C=n-A-B-D;return[A,B,C,D]},tmax=Math.log(L/v)/(L-v),q=states(8),h=states(tmax),j=states(20);assert.ok(q.every(x=>x>=0)&&j.every(x=>x>=0)&&Math.abs(q.reduce((a,b)=>a+b,0)-n)<1e-14&&Math.abs(u*h[0]-v*h[1])<1e-14);return[u,v,w,L,...q,q.reduce((a,b)=>a+b,0),1-q[0]/n,tmax,h[1],h[0],h[2],h[3],u*h[0],v*h[1],...j,n*u/L,n*w/L,u/L,w/L,Math.log(2)/L,w/u,q[1]/n,j[1]/n,j[2]/n];},
"UC-ADV12-P165":()=>{const R=8.314462618,T=400,W=10000,Z=R*T,tc=W/(2*R),delta=1-2*Z/W,sp=(1-Math.sqrt(delta))/2,der=x=>Z*Math.log(x/(1-x))+W*(1-2*x),G=x=>Z*(x*Math.log(x)+(1-x)*Math.log(1-x))+W*x*(1-x),cur=x=>Z/(x*(1-x))-2*W;let left=1e-14,right=sp;for(let i=0;i<150;i++){let x=(left+right)/2;if(der(x)>0)right=x;else left=x;}const a=(left+right)/2,b=1-a,up=(.3-a)/(b-a),gm=G(a),hom=G(.3);assert.ok(a<sp&&sp<.3&&up>0&&Math.abs(der(a))<1e-9&&cur(.3)<0);return[tc,Z,Math.sqrt(delta),sp,1-sp,a,b,der(a),der(b),gm,G(b),hom,hom-gm,up,1-up,up*b+(1-up)*a,cur(a),cur(.3),cur(.5),G(.5),G(.5)-gm,W*.3*.7,Z*(.3*Math.log(.3)+.7*Math.log(.7)),4*R*650-2*W,tc-T,delta,der(.5),(hom-gm)/Z,.3-a,1-sp-.3];}
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
