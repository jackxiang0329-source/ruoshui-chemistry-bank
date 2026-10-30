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
"UC-ADV14-I213":()=>{let k=T=>Math.exp(20/R-80000/(R*T)),a=Math.sqrt(k(800)),b=Math.sqrt(k(1000)),q=2*1.602176634e-19;return[k(800),k(1000),a,b,b/a,1e28*b,1e28*b*q*q*1e-10/(1.380649e-23*1000),q]},
"UC-ADV14-I214":()=>{let a=5.64,d1=a/Math.sqrt(3),d2=a/2,angle=d=>2*Math.asin(1.5406/(2*d))*180/Math.PI;return[d1,d2,angle(d1),angle(d2),4*(17-11),4*(17+11),(6/28)**2,4*58.44/(6.02214076e23*(a*1e-8)**3)]},
"UC-ADV14-A213":()=>{let K=.5,t0=1,m=((8.5-t0)/K)**2,res=(8.5-t0)/(2*.05);return[K,t0,Math.sqrt(m),m,t0+K*30,res,m/res,K*(Math.sqrt(226)-Math.sqrt(225))]},
"UC-ADV14-A214":()=>{let f=.3,s1=1000*(.7*Math.exp(-1)+f*Math.exp(-.2)),s2=1000*(.7*Math.exp(-2)+f*Math.exp(-.4));return[f,700,300,s1,s2,700*Math.exp(-1)/s1,-Math.log(s1/1000)/1e9,300*Math.exp(-.4)/s2]},
"UC-ADV14-O209":()=>{let b=.95*.98,ch=.975-b,dp=.975/ch,dp0=1/(1-.98);return[b,1-b,.95-b,.975,ch,dp,dp0,dp/dp0,(1-b+.95-b)/ch]},
"UC-ADV14-O210":()=>{let l=40,mn=100+100*l,mw=mn+10000*l/mn;let fact=1;for(let i=2;i<=40;i++)fact*=i;return[l,mn,mw,mw/mn,l,Math.exp(-l),Math.exp(-l)*l**40/fact,l+1]},
"UC-ADV14-P209":()=>{let n=x=>2*20*x/((1-x)*(1+19*x)),a=n(.3),b=n(.5),i=1/(2*20),s=19/(2*20);return[a,b,a/2,b/2,.3/(a*.7),s,i,1/(s+i),1+s/i]},
"UC-ADV14-P210":()=>{let k=2*.072*18e-6/(R*298.15),a=-k/5e-9,b=-k/1e-8;return[Math.exp(a),Math.exp(b),a,b,2*.072/5e-9,R*298.15*a,R*298.15*b,-k/Math.log(.9)*1e9]},
};
const invariantChecks={
"UC-ADV14-I205":a=>[a.K250/(1+a.K250)-a.highspin_fraction_250,a.mu_eff_300_muB**2-24*a.highspin_fraction_300,a.K300/a.K250-a.K300_over_K250],
"UC-ADV14-I206":a=>[a.EDTA_total_M-a.CaY_M-a.MgY_M-1e-9,a.Ca_total_M-a.CaY_M-2e-6,a.CaY_M/a.MgY_M-a.CaY_over_MgY],
"UC-ADV14-I207":a=>[a.CeIII_fraction+a.CeIV_fraction-1,a.Ce_average_oxidation-(4-2*.08),a.O2_released_mol-a.vacancy_mol/2],
"UC-ADV14-I208":a=>[a.CuI_equilibrium_M+2*a.CuII_equilibrium_M-.01,a.K*a.CuI_equilibrium_M**2-a.CuII_equilibrium_M,a.Cu_metal_mass_g-63.546*a.Cu_metal_mol],
"UC-ADV14-A205":a=>[a.sample_light_umol+a.sample_heavy_umol-a.sample_total_umol,a.mixture_light_umol-a.sample_light_umol-a.spike_light_umol,a.mixture_heavy_umol/a.mixture_light_umol-a.ratio_reconstruction],
"UC-ADV14-A206":a=>[2*a.cX_M+a.cY_M+a.baseline_absorbance-a.A1_reconstructed,a.cX_M+3*a.cY_M+a.baseline_absorbance-a.A2_reconstructed,3*a.cX_M+2*a.cY_M+a.baseline_absorbance-a.A3_reconstructed],
"UC-ADV14-A207":a=>[a.A_initial_counts+a.B_initial_counts-1000,a.A_initial_counts*2+a.B_initial_counts*8-a.integrated_area_counts_ns,a.A_initial_counts*Math.exp(-2)+a.B_initial_counts*Math.exp(-.5)-a.I4_counts],
"UC-ADV14-A208":a=>[a.current_1s_A/a.current_4s_A-a.current_ratio,a.charge_4s_C/a.charge_1s_C-a.charge_ratio,a.D_recovered_cm2_s-1e-5],
"UC-ADV14-O201":a=>[a.instant_F1+a.instant_F2-1,a.instant_F1/a.instant_F2-a.polymer_M1_M2_ratio,a.feed_f1_at_X001_first_order-.4-.01*a.initial_df1_dX],
"UC-ADV14-O202":a=>[a.R_remaining_mmol+a.R_product_mmol-.5,a.S_remaining_mmol+a.S_product_mmol-.5,a.R_product_mmol+a.S_product_mmol-a.product_total_mmol],
"UC-ADV14-O203":a=>[Math.exp(-(a.Gendo_298_kJmol-a.Gexo_298_kJmol)*1000/(R*298.15))-a.kendo_over_kexo_298,a.kendo_over_kexo_350/(1+a.kendo_over_kexo_350)-a.endo_fraction_350,a.crossover_temperature_K-200],
"UC-ADV14-O204":a=>[2e7*a.radical_concentration_M**2-a.initiation_rate_M_s,2000*a.radical_concentration_M-a.polymerization_rate_M_s,a.DPn_combination-2*a.DPn_disproportionation],
"UC-ADV14-P201":a=>[a.eps_real_omega1-42,a.eps_loss_omega1-38,a.peak_frequency_MHz*2*Math.PI*1e6-a.peak_omega_rad_s],
"UC-ADV14-P202":a=>[a.surface_term_J+a.volume_term_J-a.barrier_J,a.critical_radius_nm-2,a.barrier_J/(1.380649e-23*300)-a.barrier_over_kBT],
"UC-ADV14-P203":a=>[1/a.observed_i100_A-1/(20e-6)-1/a.Levich_i100_A,a.Levich_i400_A/a.Levich_i100_A-a.Levich_rotation_400_over_100,a.KL_intercept_per_A-1/(20e-6)],
"UC-ADV14-P204":a=>[a.Z_1MPa-1-(-1e-4*1e6/(R*300)),a.Vm_1MPa_m3mol-(R*300/1e6-1e-4),a.residual_Gibbs_Jmol-(-1e-4*1e6)],
"UC-ADV14-I209":a=>[a.D3*a.f3-1,a.Eformal-.77-a.deltaE,a.bound3_free-(a.D3-1)],
"UC-ADV14-I210":a=>[a.Zn_per_O+a.Al_per_O+a.vacancy_per_O-1,a.positive_charge-a.negative_charge,a.molar_mass-(a.Zn_per_O*65.38+a.Al_per_O*26.982+15.999)],
"UC-ADV14-I211":a=>[3*a.FeIII_before+2*a.FeII_before-a.sum_before,3*a.FeIII_after+2*a.FeII_after-a.sum_after,a.sum_before-a.sum_after-1],
"UC-ADV14-I212":a=>[a.Dq10+15*a.B_Racah-33000,a.CFSE_kJmol+1.2*a.energy_kJmol,a.spin_muB**2-15],
"UC-ADV14-A209":a=>[a.a+a.b*a.unknown_x-4,a.a+3*a.b-a.predicted_y3,a.SE_slope**2-.5],
"UC-ADV14-A210":a=>[a.A_observed-1000*a.TA,a.B_observed-500*a.TB,a.observed_ratio-a.true_ratio*a.TA/a.TB],
"UC-ADV14-A211":a=>[a.A2+a.B2-1,a.A4+a.B4-1,a.flux_2s-(a.A2*.4-a.B2*.1)],
"UC-ADV14-A212":a=>[a.QCu+a.QNi+a.Qside-100,a.mCu+a.mNi-a.total_mass,a.metal_e_mol-(a.QCu+a.QNi)/F],
"UC-ADV14-O205":a=>[a.free_C+a.CS+a.CP-.01,a.free_fraction+a.CS_fraction+a.CP_fraction-1,a.rate-a.CS],
"UC-ADV14-O206":a=>[a.DPw/a.DPn-a.dispersity,a.mass_tail_10-a.number_tail_10*a.tail_ratio,a.variance-.8/(.2**2)],
"UC-ADV14-O207":a=>[a.r1-.01*a.S1*a.H1,a.r4-.01*a.S4*a.H4,a.P_peak-6],
"UC-ADV14-O208":a=>[a.kopt-10*a.active_fraction,a.k6-a.k8,a.k6/a.kopt-a.k6_over_opt],
"UC-ADV14-P205":a=>[a.lambda_001_nm/a.lambda_01_nm-a.ratio,a.kappa_01*a.lambda_01_nm*1e-9-1,a.lambda1_over_Bj-a.lambda_01_nm/a.Bjerrum_nm],
"UC-ADV14-P206":a=>[a.H350-a.S350*350/1000-a.G350,Math.exp(-a.G350*1000/(R*350))-a.K350,a.K350/a.K298-a.K_ratio],
"UC-ADV14-P207":a=>[a.Qfinal-10e-6*.1,a.Ecap-a.Eheat,a.t90-a.tau*Math.log(10)],
"UC-ADV14-P208":a=>[a.cation-a.anion-.1,a.cation*a.anion-.05**2,a.osmotic_pressure-R*298.15*1000*a.osmotic_delta_M],
"UC-ADV14-I213":a=>[a.c800**2-a.K800,a.c1000**2-a.K1000,a.defect_pair_density_m3/(1e28*a.c1000)-1],
"UC-ADV14-I214":a=>[a.d111_A*Math.sqrt(3)-5.64,2*a.d200_A-5.64,a.intensity_ratio-(a.F111/a.F200)**2],
"UC-ADV14-A213":a=>[a.t0_us+10*a.K_us_sqrtDa-6,a.t0_us+20*a.K_us_sqrtDa-11,a.unknown_mz-a.sqrt_unknown_mz**2],
"UC-ADV14-A214":a=>[a.fast_initial_counts+a.slow_initial_counts-1000,a.S_b1-(a.fast_initial_counts*Math.exp(-1)+a.slow_initial_counts*Math.exp(-.2)),a.S_b2-(a.fast_initial_counts*Math.exp(-2)+a.slow_initial_counts*Math.exp(-.4))],
"UC-ADV14-O209":a=>[a.initial_molecules_mol-a.bonds_mol-a.final_chains_mol,a.A_ends_mol+a.B_ends_mol-2*a.final_chains_mol,a.initial_molecules_mol/a.final_chains_mol-a.DPn_imbalanced],
"UC-ADV14-O210":a=>[a.Mn_gmol-(100+100*a.mean_growth),a.Mw_gmol/a.Mn_gmol-a.dispersity,a.weight_average_growth-a.mean_growth-1],
"UC-ADV14-P209":a=>[a.slope+a.intercept-1/a.recovered_nm,a.recovered_C-1-a.slope/a.intercept,a.BET_y03-(a.intercept+a.slope*.3)],
"UC-ADV14-P210":a=>[R*298.15*a.lnh5-a.delta_mu5_Jmol,R*298.15*a.lnh10-a.delta_mu10_Jmol,a.r_at_h09_nm*1e-9*Math.log(.9)+2*.072*18e-6/(R*298.15)],
};
Object.assign(witnesses,{
"UC-ADV14-I215":()=>{let x=.1,c=4*(1-x),y=4*x,f=8+y,M=40.078*c+88.906*y+18.998*f,m=M/NA;return[c,y,8,y,f,m,m/(.546e-7)**3,y/f,2*c+3*y-f,y/4]},
"UC-ADV14-I216":()=>{let A=1+1e6*.1,B=1+100*.1,k=8.314462618*298.15/96485.33212,d=k*Math.log(B/A);return[A,B,1/A,1/B,1.82+d,d,1.82+k*Math.log(3*B/A),k*Math.log(3),B/A,(A-1)/A]},
"UC-ADV14-I217":()=>{let x=500*.004,y=80*.01,z=1+x+y,a=.005/z,b=a*x,c=a*y;return[z,a,b,c,a/.005,b/.005,c/.005,b/c,1-a/.005,.005]},
"UC-ADV14-I218":()=>{let y=.1,f=.2,a=(1-y)*f,b=(1-y)*(1-f),Q=3*(a+y)+4*b,o=Q/2,d=2-o;return[a,b,y,Q,d,o,d/2,a/(a+b),d,Q-2*o]},
"UC-ADV14-I219":()=>{let p=Math.exp(-2),q=Math.exp(-.5),Z=1+3*p,Y=1+3*q,a=1-1/Z,b=1-1/Y;return[Z,Y,a,b,1/Z,1/Y,R*100*a,R*100*b,b/a,1/(1+Math.exp(2))]},
"UC-ADV14-I220":()=>{let s=2e-11,m=.001,C=.01,base=s/m,x=base/C,pH=10.33+Math.log10(x)-Math.log10(1-x),a=C*10**(9-10.33)/(1+10**(9-10.33)),b=C*10**(11-10.33)/(1+10**(11-10.33));return[base,x,C*(1-x),pH,a,b,m*a,m*b,m*a/s,m*b/s]},
"UC-ADV14-I221":()=>{let f=96485.33212,x=.35,y=.8;return[3-(1-x),3-(1-y),x,y,1-x,1-y,x,y,f*x,f*y,(f*y)/(f*x)]},
"UC-ADV14-I222":()=>{let l=0,h=.005;for(let i=0;i<115;i++){let x=(l+h)/2,g=4*x*x-100*(.01-2*x)**2*(.008-x);if(g>0)h=x;else l=x}let z=(h+l)/2,a=.01-2*z,b=.008-z,c=2*z;return[z,a,b,c,(.01-a)/.01,c,z,c**2/(a*a*b),.01,.016]},
"UC-ADV14-I223":()=>{let k1=2000*.01,k2=100*.01,A=.004,B=.006,x=A*k1/(1+k1),y=B*k2/(1+k2),u=A/(1+k1),v=B/(1+k2);return[x/A,y/B,x,y,u,v,x/y,v/u,x+y,x/(x+y)]},
"UC-ADV14-I224":()=>{let x=Math.exp(-900/300),y=Math.exp(-900/450),a=2.5*x,b=2.5*y;return[a,b,y/x,900/90000,900/202500,a*900/90000,b*900/202500,-900/Math.log(y),y,y/x-1]}
});

Object.assign(witnesses,{
"UC-ADV14-A215":()=>{let volume=.0178,th=.0125*volume,per=th*.5,C=per/1e-2,U=.0125*.018/(2e-2);return[volume*1e3,th,per,C,34.0147*C,U,U/C-1,34.0147*C*.05,2*C,per]},
"UC-ADV14-A216":()=>{let dead=1.2,low=4.2-dead,hi=5.9-dead,ana=5-dead,p=Math.log(ana/low)/Math.log(hi/low);return[low,hi,ana,ana/dead,low/dead,hi/dead,800+100*p,100*p,100*(1-p),p]},
"UC-ADV14-A217":()=>{let m=.001*.0005,volume=.025,added=m/volume,base=.04/1000,original=base*.025/.01;return[base,base+added,original,added,.01/.025,1000*added,1+added/base,m/.0255,original*.01,.04+1000*added]},
"UC-ADV14-A218":()=>{let A=.115,B=.09,d=740000,u=(800*A-300*B)/d,v=(1000*B-200*A)/d;return[u,v,1000*u,300*v,200*u,800*v,u+v,u/(u+v),u/v,740000]},
"UC-ADV14-A219":()=>{let u=Math.sqrt(8),Hmin=10+2*Math.sqrt(40*5),H1=55,H5=10+8+25;return[u,Hmin,H1,H5,150/(Hmin*.001),150/(H1*.001),150/(H5*.001),150/u,5/u,H5-Hmin]},
"UC-ADV14-A220":()=>{let f=q=>1+20*q,u=f(.01),v=f(.05),I=q=>1000/f(q),t=q=>5/f(q);return[u,v,I(.01),I(.05),t(.01),t(.05),20*.01/u,20*.05/v,20/5e-9,I(.01)/I(.05)]},
"UC-ADV14-A221":()=>{let slope=8.314462618*298.15/96485.33212,log10=Math.log(10),a=.001,b=.01,c=.003,f=x=>.3+slope*Math.log(x);return[f(a),f(b),f(c),c,-Math.log10(c),slope*log10,Math.log(c/a)/log10,f(2*c),slope*Math.LN2,slope*Math.log(b/a)]},
"UC-ADV14-A222":()=>{let A=2.5e-4,B=8e-5,C=A-B,M=C/20e-3,mg=M*40078,na=A/.02*40078;return[A,B,C,M,mg,C/A,na,na-mg,C*40078,A]},
"UC-ADV14-A223":()=>{let nA=2200/(2*.011),nB=3300/(3*.011),f=nA/(nA+nB),g=1-f,Ca=.1*f,Cb=.1*g,mis=2200/(2200+3300);return[nA/nB,f,g,.011*(2*f+3*g),Ca,Cb,.011*2*Ca+.011*3*Cb,mis,mis-f,nA/nB]},
"UC-ADV14-A224":()=>{let cell=1.5456,conductance1=1/300,conductance2=1/800,s1=cell*conductance1,s2=cell*conductance2;return[cell,s1,s2,s1*1000,s2*1000,800/300,s1/s2,2*cell,conductance1,1/120]}
});

Object.assign(witnesses,{
"UC-ADV14-O211":()=>{let x=.01*Math.exp(Math.log(10)*2*.3),y=.01*Math.exp(Math.log(10)*2*(-.2));return[x,y,10**.6,10**(-.4),10**(2*(.3+.2)),-Math.expm1(-60*x),-Math.expm1(-60*y),Math.log(2)/x,Math.log(2)/y,-R*298.15*(2*(.3+.2)*Math.log(10))/1000]},
"UC-ADV14-O212":()=>{let c=.1,k=4,r=Math.sqrt(k),a=c*r/(1+r),w=.01,b=(2*k*c+w-Math.sqrt(w*w+4*k*c*w))/(2*k);return[a,c-a,c-a,a,a,a/c,r,k,b,b/c]},
"UC-ADV14-O213":()=>{let a=500000,b=200000,total=a+b,F=a/total,x=-Math.expm1(-.6),C=.01;return[a,total,F,b/total,x,C*x*F,C*x*b/total,C*Math.exp(-.6),1/total,2.5,250000/(250000+b)]},
"UC-ADV14-O214":()=>{let H=p=>Math.pow(10,-p),O=p=>1e-14/H(p),rate=p=>10*H(p)+100000*O(p)+.002,r1=rate(4),r2=rate(9);return[10*H(4),1e5*O(4),r1,10*H(9),1e5*O(9),r2,-Math.expm1(-r1*100),-Math.expm1(-r2*100),.01*Math.exp(-r1*100),.01*Math.exp(-r2*100),5]},
"UC-ADV14-O215":()=>{let n=2,c=.001,init=1e-8,t=n*c/init,obs=20000,dur=Math.max(0,obs-t),prod=3e-7*dur,base=3e-7*obs;return[n*c,t,dur,prod,base,(base-prod)/base,c-init*1e4/n,c*n/(2*init),Math.min(1,t/obs),prod/base]},
"UC-ADV14-O216":()=>{let f=.022/.035,z=f*(1-Math.exp(-3.5)),dark=.002/.01;return[.022,.013,f,.022/.013,1/.035,.01*z,.01*(1-z),dark,f-dark,.01]},
"UC-ADV14-O217":()=>{let q=.2,p=1-q,En=1/q,En2=(1+p)/(q*q),W=En2/En;return[En,W,En2/(En*En),100*En,100*W,p**9,p**9*(10-9*p),p/(q*q),q,q*p]},
"UC-ADV14-O218":()=>{let act=T=>80000+50*T,rate=T=>1.380649e-23*T/(6.62607015e-34)*Math.exp(-act(T)/(8.314462618*T)),r1=rate(300),r2=rate(350);return[act(300)/1000,act(350)/1000,r1,r2,Math.log(2)/r1,Math.log(2)/r2,r2/r1,-80000/R,350/300,-50]},
"UC-ADV14-O219":()=>{let lam=.016,f=t=>Math.exp(-lam*t),x=f(30),y=f(100);return[lam,Math.log(2)/lam,.01*x,.01*y,.01*(1-x),.01*(1-y),1-x,1-y,1.6e-4,1.6e-4*y]},
"UC-ADV14-O220":()=>{let K=3,frac=1/(1+K),lam=.1*frac,u=Math.exp(-lam*20),v=Math.exp(-lam*60);return[frac,K/(1+K),lam,.02*u,.02*v,.02*(1-u),.02*(1-v),1-u,Math.log(2)/lam,1/frac]}
});

Object.assign(witnesses,{
"UC-ADV14-P211":()=>{let L=2*Math.log(2/5)+3*Math.log(3/5),entropy=-8.314462618*L,g=8.314462618*298.15*L;return[2/5,3/5,2/5,3/5,entropy,g,0,-298.15,entropy/5,g/5]},
"UC-ADV14-P212":()=>{let d=40000/8.314462618,base=298.15,p=T=>20*Math.exp(d*(1/base-1/T)),a=p(318.15),b=p(338.15);return[a,b,a/20,b/20,1/318.15-1/base,1/338.15-1/base,Math.log(a/20),1/(1/base-Math.log(101.325/20)/d),-d,b/a]},
"UC-ADV14-P213":()=>{let w=2*Math.PI*1e-9,z=v=>{let x=w*v,d=1+x*x,real=(5*d+75)/d,loss=75*x/d;return[real,loss,loss/real]},a=z(10e6),b=z(100e6);return[a[0],a[1],a[2],b[0],b[1],b[2],80-5,1/(2*Math.PI*1e-3),37.5,b[1]/a[1]]},
"UC-ADV14-P214":()=>{let u=4,v=6,a=2/u,b=1/u,c=4/v,d=1/v,r=.01*a*b,s=.01*c*d;return[a,b,1/u,r,c,d,1/v,s,s/r,1,.01*2/(4*4)]},
"UC-ADV14-P215":()=>{let T=298.15,q=1.380649e-23*T,a=6*Math.PI*3e-12,d=q/a;return[d,d/2,2,a,2*a,2*d,d,Math.sqrt(2*d)*1e6,Math.sqrt(d)*1e6,3]},
"UC-ADV14-P216":()=>{let f=T=>Math.pow(10,-17.44*(T-300)/(51.6+T-300)),a=f(310),b=f(320),c=f(330);return[Math.log10(a),Math.log10(b),Math.log10(c),a,b,c,100*a,100*b,100*c,a/c]},
"UC-ADV14-P217":()=>{let f=(z,I)=>-.509*z*z*Math.sqrt(I),a=10**f(1,.001),b=10**f(2,.001),c=10**f(1,.01),d=10**f(2,.01);return[a,b,c,d,b/a,d/c,c/a,d/b,.005*d,f(2,.01)-f(2,.001)]},
"UC-ADV14-P218":()=>{let k=96485.33212/(8.314462618*298.15),x=k*.05/2,a=2*Math.sinh(x),b=2*Math.sinh(2*x);return[a,-a,Math.exp(x),Math.exp(-x),Math.exp(2*x),b,b/a,0,k,a+(-a)]},
"UC-ADV14-P219":()=>{let x=1e-8,y=1e-7,p=.1/x,q=.1/y,A=4*Math.PI*x*x,B=4*Math.PI*y*y,E=.05*A,G=.05*B;return[p,q,100000+p,100000+q,A,B,E,G,y/x,(x/y)**2,E/(1.380649e-23*298.15)]},
"UC-ADV14-P220":()=>{let a=Math.sqrt(1/17),b=Math.sqrt(1/65),x=2*a/(1+a),y=(1-a)/(1+a),z=8*b/(1+b),w=4*(1-b)/(1+b);return[a,b,x,y,z,w,1+a,1+b,a/b,x*x/y,2]}
});

Object.assign(witnesses,{
"UC-ADV14-I225":()=>{let l=.001,k=[1e4,1e3,1e2],beta=[1,k[0]*l,k[0]*k[1]*l*l,k[0]*k[1]*k[2]*l*l*l],Z=beta.reduce((x,y)=>x+y,0),f=beta.map(x=>x/Z),v=f.map(x=>x*.002),bound=f.reduce((x,y,i)=>x+i*y,0);return[Z,...f,...v,bound,bound*.002,.002]},
"UC-ADV14-A225":()=>{let f=.25,x=.01,s=.9,sp=.002,ratio=(s-f)/(f-x),n=ratio*sp,tot=sp+n,h=tot*f;return[n,tot,h,tot*(1-f),ratio,n*x,sp*s,f/(1-f),x/(1-x),f]},
"UC-ADV14-O221":()=>{let q=1.5*.1,r=.5*.2,K=q+r,s=.02*Math.exp(-K*10),p=.02-s;return[K,q/K,r/K,s,p*q/K,p*r/K,q/r,1-s/.02,Math.log(2)/K,.02*q,.02*r]},
"UC-ADV14-O222":()=>{let d=69000-65000,a=Math.exp(d/(8.314462618*298.15)),p=1/(1+1/a),b=1/(1+a),c=Math.exp(d/(8.314462618*350));return[a,p,b,2*p-1,p/b,-d/1000,p*.01,b*.01,p/b-1,c,c/(1+c)]},
"UC-ADV14-P221":()=>{let pa=24,pb=28,p=52,ya=24/52,yb=28/52,X=(ya/80)/(ya/80+yb/40);return[pa,pb,p,ya,yb,ya/yb,80/40,X,ya/.3,0]},
"UC-ADV14-P222":()=>{let rate=T=>.001*Math.exp(50000/(8.314462618)*(1/300-1/T));let n=4000,step=50/n,s=rate(300)+rate(350);for(let i=1;i<n;i++)s+=((i&1)?4:2)*rate(300+i*step);let H=s*step/3,trap=25*(rate(300)+rate(350));return[rate(350),H,Math.exp(-H),-Math.expm1(-H),.001,rate(350),H/.001,trap,trap/H-1,50]}
});

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
  if(Object.hasOwn(invariantChecks,r.id)){
    const vals=Object.fromEntries(r.answer_names.map((n,j)=>[n,r.answer_values[j]]));
    const residuals=invariantChecks[r.id](vals);
    assert.equal(residuals.length,3);
    assert.ok(residuals.every(x=>Number.isFinite(x)&&Math.abs(x)<1e-8),r.id+" physical invariants");
    assert.ok(r.model_residual_names?.length===3,r.id+" residual labels");
    residuals.forEach((x,j)=>assert.ok(Math.abs(x-r.model_residuals[j])<1e-8,r.id+" residual index "+j));
  }
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
assert.equal(man.advanced_editorial_items,806+allIDs.size+(man.fifteenth_series_work_in_progress_items||0)+(man.sixteenth_series_work_in_progress_items||0));
assert.equal(man.approved_count,0);assert.deepEqual(man.items,[]);
const q=JSON.parse(read("editorial/advanced_integrated_v14/overlap_review_queue.json"));
assert.equal(q.current_draft_count,allIDs.size);assert.equal(q.preliminary_flags,q.pairs.length);
for(const id of allIDs)assert.ok(q.new_items_requiring_cross_series_comparison.some(x=>x.new_id===id));
console.log(JSON.stringify({passed:true,series:14,total:allIDs.size,distribution:counts}));
