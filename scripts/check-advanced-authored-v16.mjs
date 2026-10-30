#!/usr/bin/env node
import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const R=8.314462618,F=96485.33212,NA=6.02214076e23;
const witnesses={
"UC-ADV16-I251":()=>{let s=4/5,NBO=2/5,BO=(4*s-NBO)/2;return[s,2/5,2*s+1/5,NBO,NBO/s,NBO,s-NBO,NBO/s,1-NBO/s,BO,BO+NBO,2*BO/s]},
"UC-ADV16-I252":()=>[.006,.006*96485.33212,.006,.004,.006,.002,.014,.007,.002,6-3,.006/.001],
"UC-ADV16-I253":()=>{let mass=22.98977*4+26.98154*4+28.085*8+15.999*24;return[4*3+8*4-24*2,4,mass,4/mass*1000,4/mass*1000,4/2,2/mass*1000,4/8,24,4,2*2-4]},
"UC-ADV16-I254":()=>{let m=3*22.98977+30.97376+12*183.84+40*15.999;return[5+72-80,12*6,-40*2,3+5+72,3+5+72-80,6,m-3*22.98977,m,12*183.84/m,40*15.999/m,12,6-6]},
"UC-ADV16-A251":()=>{let diff=.1866,c=diff/6220,rate=diff/(6220*30),V=.003;return[diff,diff/30,c,rate,rate*V,c*V,.2866/6220,.1/6220,2.866,rate*V*60*1e6]},
"UC-ADV16-A252":()=>[2,2,1,1.6,8,40,.75,6400,.8,30],
"UC-ADV16-A253":()=>{let e=5.7/96485.33212,n=.5*e;return[6,5.7,e,n,n*65380,n*10,n/.0001,.3,2*n*65380,2]},
"UC-ADV16-A254":()=>{let rate=.95,base=1.8/.95,sp=base+2;return[1.9,rate,95,base,10*base,18,1/rate-1,rate,sp,10*base]}
};
Object.assign(witnesses,{
"UC-ADV16-O248":()=>{let z=Math.exp(-2.1),p=.01*(1-z);return[2*.02,.03,.07,4/7,3/7,.01*z,p*4/7,p*3/7,4/3,1-z,Math.LN2/.07,2/3]},
"UC-ADV16-O249":()=>{let pc=Math.sqrt(.5);return[pc,.72,1.28,4.8,1.2,1.2,0,1,.8-pc,2*3+3*2,12-2*4.8,6/6]},
"UC-ADV16-O250":()=>{let f=2/7,g=6/11,t=g*g*g;return[f,1-f,.01*f,g,t,.01*t,1-t,f-t,t/f,.1*f]}
});

Object.assign(witnesses,{
"UC-ADV16-P248":()=>{let a=995,b=2955,c=4875,De=50000;return[a,b,c,1960,1920,40,1e7/1960,De,a,a/De,c-a]},
"UC-ADV16-P249":()=>{let v=Math.sqrt(8*8.314462618*298.15/(Math.PI*.0280134)),d=2*v*1e-8/3;return[d,2*d,1000*d,2000*d,2,2,v,10*d,10*d*6.02214076e23,1e-6/(2*d),1e-6/(4*d)]},
"UC-ADV16-P250":()=>[.2,.5,.8,.8,.5,.2,.25,1,4,.5,50,.6,16,2]
});

Object.assign(witnesses,{
"UC-ADV16-I255":()=>[.7,.3,.3,1.7,.3,.85,1,2,8,-8,0,1],
"UC-ADV16-I256":()=>[5,6,2.5,1.5,2.75,4*4,-11*2,16-22,4*4,16-11,10/4,6],
"UC-ADV16-I257":()=>{let d=18000,p=20000,H=(-1.6+1.2)*d+p,L=-2.4*d+3*p;return[-.4*d,-2.4*d,p,3*p,H,L,2*(p-d),4,0,Math.sqrt(24),0,1]},
"UC-ADV16-I258":()=>{let z=1.011,p=10**(-2)/z,n=10**(-3)/z;return[10**(-2),10**(-3),z,p,1-p-n,n,.01*p,.01*(1-p-n),.01*n,p-n,.01*(p-n),(4+9)/2]},
"UC-ADV16-I259":()=>{let v=.08;return[.84,.16,1.92,v,.04,3.84,-3.84,0,1.92,.5,8]},
"UC-ADV16-I260":()=>{let y=2/(1+Math.sqrt(17)),d=1-y;return[y,d,y,d,y,d,2-y,2*d/(2-y),4,2-y,d/y]},
"UC-ADV16-I261":()=>{let a=1,b=.2,z=2.2;return[a,b,z,a/z,b/z,1/z,.01/z,.002/z,.012/z,5,1.2/z,.01/z,.5]},
"UC-ADV16-I262":()=>{let Cu=.08,O=.05,M=Cu*63.546+O*15.999;return[.06,.02,.03,.02,Cu,O,1.25,.75,.25,M,.05*15.999/M,.08*63.546/M,.06+.04-.1]},
"UC-ADV16-I263":()=>{let a=10**1.95,b=10**(-2.03),e=1/(1+a*(1+b)),y=a*e,z=a*b*e;return[a,b,e,y,z,.01*e,.01*y,.01*z,.01,y+2*z,a*b,b]},
"UC-ADV16-I264":()=>{let j=35/4,s=3/4,l=12,g=6/7,M=g*Math.sqrt(j),mu=9.2740100783e-24*M,C=1.25663706212e-6*NA*mu*mu/(3*1.380649e-23);return[j,s,l,g,M,mu,6,15/7,C/300,C]}
});

Object.assign(witnesses,{
"UC-ADV16-A255":()=>[-.1,2,20,.08,.002,.05,1/35,-Math.log10(.05),-Math.log10(1/35),.25,.5,.001],
"UC-ADV16-A256":()=>{let n=4e-6/3,t=n+1e-6;return[4/3,n,t,t/2,t/2,n/5,9e-7,.5,3/7,1,n*100*1e6]},
"UC-ADV16-A257":()=>{let a=1.1,b=1.5;return[10,a,b,1000/a,1000/b,5/a,5/b,1.5/1.1,1.5/1.1,1/a,1/b,1e8]},
"UC-ADV16-A258":()=>{let r=Math.pow(10,10/59.16),x=.01/(11*r-10);return[r,x,(10*x+.01)/11,10*x/11,.01/11,1e-5,x/100,10/11,10,(10*x+.01)/(11*x)]},
"UC-ADV16-A259":()=>[-60,420,5.75,180,0,75,10**(-5.75),10**1.25,(60/59.16-1)*100,120],
"UC-ADV16-A260":()=>{let x=-Math.log10(.5);return[x,x/(.1*.01),-Math.log10(.25),.25,1-.5,1-.25,2,2,.25/.5,Math.log(2),Math.log(4)]},
"UC-ADV16-A261":()=>{let x=9.6/7200,y=8.4/7200;return[7200,x,y,100*x,40*y,20*x,80*y,.18,.12,x/y,100*x/.18]},
"UC-ADV16-A262":()=>[2,.04,3,150,.75,75/50,.02/.01,300,1,150*100],
"UC-ADV16-A263":()=>{let q=2*Math.SQRT2*Math.PI*1.333/(633e-9),D=1e3/(q*q),r=(1.380649e-23*298.15)/(6*Math.PI*.001*D);return[q,q*q,D,r,r*1e9,1/1000,D*1e12,2e9*r,.5e9*r,2]},
"UC-ADV16-A264":()=>{let a=.0005,b=.0005;return[a,.0015,a,b,.02,.02,.04,1,.06,.001,.0005*105.988,.0005*84.007,.0015]}
});

Object.assign(witnesses,{
"UC-ADV16-O251":()=>{let ss=.75,e=Math.exp(-.8),z=.75*(1-e);return[.04,ss,.25,z,.25+.75*e,.01*z,.01*(1-z),.0075,.0025,3,Math.LN10/.04,25,z/(1-z)]},
"UC-ADV16-O252":()=>{let a=1.56,b=-.54,x=Math.pow(10,1.56),y=Math.pow(10,-.54);return[a,b,x,y,.01*x,.01*y,10**(a-b),Math.LN2/.01,Math.LN2/(.01*x),Math.LN2/(.01*y),Math.exp(-.3*x),Math.exp(-.3*y)]},
"UC-ADV16-O253":()=>{let f=1/6,k=.1/6,s=Math.exp(-1),c=.01*s;return[f,5/6,.1,k,c,.01*(1-s),1-s,6*Math.LN2/.1,.01*k,c/6,c*5/6,.2]},
"UC-ADV16-O254":()=>{let q=Math.exp(-1),p=-Math.expm1(-1),a=q**3,b=3*p*q*q,c=3*p*p*q,d=p**3;return[p,q,a,b,c,d,3*p,3*p*q,1-a-b,1,.01*d,.01*3*p]},
"UC-ADV16-O255":()=>{let v=.05/7,p=.05*6/7;return[v,v,p,6/7,10,.005,2*v**2,90,1/49,.05]},
"UC-ADV16-O256":()=>{let c=10**5.2/(1+10**5.2),a=10**1.6/(1+10**1.6),b=10**3.1/(1+10**3.1);return[c,a,b,a+b-c,a+b,1-c,a*b,c*a*b,(1-a)*(1-b),b/a,-c]},
"UC-ADV16-O257":()=>{let ri=1.2e-7,r=Math.sqrt(6e-15),rp=1000*r;return[ri,r,ri,rp,rp/ri,r/ri,rp/2,r*Math.sqrt(2),rp*Math.sqrt(2),Math.sqrt(2),ri/2]},
"UC-ADV16-O258":()=>{let a=.49,b=.21,c=.09;return[a,b,b,c,2*b,a/c,1,-.7*Math.log(.7)-.3*Math.log(.3),1000-1,1000-2,998*a,998*c]},
"UC-ADV16-O259":()=>{let x=.75,r=.25,y=2/3;return[x,r,r,x,x,.5,1.5,9,0,y,x-y,.75,1/3]},
"UC-ADV16-O260":()=>{const C=x=>{let z=x,y=2/Math.sqrt(Math.PI)*(2/3*z**3-2/5*z**5+1/7*z**7-1/27*z**9+1/132*z**11-1/780*z**13+1/5400*z**15);return y},a=2*Math.sqrt(3/200),b=2*Math.sqrt(3/800),p=C(a),q=C(b);return[25,100,5,10,25/3,100/3,a,b,p,q,p/q,5]}
});

Object.assign(witnesses,{
"UC-ADV16-P251":()=>{let z=R*300,u=-10/z,v=-50/z;return[1+u,1+v,Math.exp(u),Math.exp(v),Math.exp(u),5*Math.exp(v),z/1e5-1e-4,z/5e5-1e-4,z/1e5,v,v-u,v-u]},
"UC-ADV16-P252":()=>{let unit=R*298.15/F,x=unit*2*Math.LN10;return[100,2*Math.LN10,x,1000*x,-R*298.15*2*Math.LN10/1000,unit*Math.log(.1),unit*Math.log(.001),x,1000*unit*Math.LN10,unit*Math.LN10,2,.01*R*298.15*2*Math.LN10]},
"UC-ADV16-P253":()=>{let X=.75,C=.5,heat=50000*C*X;return[10,3,X,.125,.375,heat/4000,298.15+heat/4000,heat,.0375,1875,.05,.0125]},
"UC-ADV16-P254":()=>[75,150,2,300*R,600*R,R*(Math.log(75)+1),R*(Math.log(150)+1),R*Math.LN2,R,Math.log(75),4,300*R],
"UC-ADV16-P255":()=>{let a=-.0509,c=-.509*Math.sqrt(.1),x=Math.pow(10,a),y=Math.pow(10,4*a),u=Math.pow(10,c),v=Math.pow(10,4*c);return[a,4*a,x,y,c,4*c,u,v,Math.pow(10,3*a),Math.pow(10,2*a),Math.pow(10,2*c),Math.pow(10,2*(c-a))]},
"UC-ADV16-P256":()=>{let e=Math.SQRT2;return[3,1.75,(3+e)/2,(3-e)/2,1,-1.5,4,6,-2,4,0,1]},
"UC-ADV16-P257":()=>{let x=1/3,a=Math.exp(x),b=Math.exp(-x),Z=2*(a+b),p=a/(a+b),q=b/(a+b),t=(a-b)/(a+b);return[Z,p,q,p/2,Math.exp(2*x),t,-100*t,-1.380649e-23*100*t,R*x*x*(1-t*t),Math.log(Z)-x*t,1,200]},
"UC-ADV16-P258":()=>{let c=F/(2*R*298.15),a=.05*c,b=.1*c,j=1e-5*Math.exp(a),ratio=Math.exp(b-a),s=2*R*298.15*Math.LN10/F;return[a,b,j,j*ratio,ratio,s,1000*s,2*s,b-a,j*(ratio-1),2*j,2*j*ratio]},
"UC-ADV16-P259":()=>{let delta=1/300-1/330,l=30000/R*delta,p=.2*Math.exp(l);return[p,Math.exp(l),l,1/(1/300-R/30000*Math.log(5)),1/(1/300-R/30000*Math.log(2.5)),30000/(R*90000),30000/(R*330**2),20000,1e5*p,R*l/delta,-delta]},
"UC-ADV16-P260":()=>{let a=298.15,b=328.15,d=1/a-1/b,r=Math.exp(20000/R*d);return[1e-10,1e-10*r,r,1e-7,1e-7*r,r,5000,5000/r,1-1/r,Math.log(r),-d,R*Math.log(r)/d]}
});

const starts={inorganic:["I",251],analytical:["A",251],organic:["O",248],physical:["P",248]};
const ids=new Set(),titles=new Set(),families=new Set(),counts={};
for(const [sub,[letter,start]] of Object.entries(starts)){
 const txt=read('editorial/advanced_integrated_v16/'+sub+'.jsonl').trim();
 const rows=txt?txt.split("\n").map(JSON.parse):[];counts[sub]=rows.length;assert.ok(rows.length<=25);
 rows.forEach((x,i)=>{
  assert.equal(x.id,'UC-ADV16-'+letter+(start+i));assert.equal(x.subject,sub);
  assert.ok(x.problem_zh.length>=150&&x.solution_zh_steps.length>=8);
  assert.ok(x.answer_values.length>=8&&x.answer_values.length===x.answer_names.length&&x.answer_values.length===x.answer_units.length);
  assert.ok(x.answer_values.every(Number.isFinite));
  assert.ok(x.model_residuals.length>=3&&x.model_residuals.every(z=>Number.isFinite(z)&&Math.abs(z)<1e-8));
  assert.equal(x.independent_numeric_check,true);
  assert.equal(x.publishable,false);assert.equal(x.exclude_from_official_bank,true);
  assert.equal(x.quality_status,'awaiting_expert_review');assert.equal(x.novelty_review_status,'pending_cross_series_model_review');assert.equal(x.parametric_variant,null);
  assert.ok(!ids.has(x.id)&&!titles.has(x.title)&&!families.has(x.model_family));ids.add(x.id);titles.add(x.title);families.add(x.model_family);
  assert.ok(Object.hasOwn(witnesses,x.id));const expected=witnesses[x.id]();assert.equal(expected.length,x.answer_values.length);
  expected.forEach((v,j)=>{const u=x.answer_values[j],s=Math.max(1e-14,Math.abs(u),Math.abs(v));assert.ok(Math.abs(u-v)<=1e-9*s,x.id+' '+x.answer_names[j]+' mismatch '+u+'/'+v);});
 });
}
assert.equal(Object.keys(witnesses).length,ids.size);
const m=JSON.parse(read('release/chemistry-approved-manifest.json'));assert.equal(m.sixteenth_series_work_in_progress_items,ids.size);assert.equal(m.sixteenth_series_pending_cross_series_novelty_review,ids.size);assert.equal(m.advanced_editorial_items,1006+ids.size);assert.equal(m.approved_count,0);assert.deepEqual(m.items,[]);
const q=JSON.parse(read('editorial/advanced_integrated_v16/overlap_review_queue.json'));assert.equal(q.current_draft_count,ids.size);assert.equal(q.preliminary_flags,q.pairs.length);assert.equal(q.new_items_requiring_cross_series_comparison.length,ids.size);
console.log(JSON.stringify({pass:true,series:16,count:ids.size,subjects:counts}));
