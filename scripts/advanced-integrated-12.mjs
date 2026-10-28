#!/usr/bin/env node
// Twelve individually authored advanced scientific cases, no numerical variants.
// Machine mathematical checks are NOT independent chemistry peer review.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='jackxiang0329-source/ruoshui-chemistry-bank';
const E=(x,y)=>Math.abs(x-y)/Math.max(1e-24,Math.abs(y));
const bisect=(f,lo,hi,n=110)=>{let a=lo,b=hi,fa=f(a),fb=f(b);if(!(Number.isFinite(fa)&&Number.isFinite(fb)&&fa<=0&&fb>=0))throw Error('Invalid monotone root bracket');for(let i=0;i<n;i++){const m=(a+b)/2;if(f(m)>0)b=m;else a=m;}return(a+b)/2;};
export const CASES=[
{id:"I01",subject:"inorganic",title:"闭合氨配位体系中 AgCl 的非线性溶解",question_tex:"在 \\(1.000\\,\\mathrm L\\) 的理想溶液中有过量固体 \\(\\ce{AgCl(s)}\\)，体系的游离氨及络合氨总分析浓度为 \\(C_{\\mathrm L}=0.1000\\,\\mathrm{mol\\,L^{-1}}\\)。仅允许 \\(\\ce{Ag+}\\)、\\(\\ce{[Ag(NH3)2]+}\\)、\\(\\ce{Cl-}\\) 及游离 \\(\\ce{NH3}\\) 存在，并假设 \\(\\ce{NH3}/\\ce{NH4+}\\) 酸碱平衡及其它配合物可忽略。给定 \\(K_{\\rm sp}=1.80\\times10^{-10}\\) 和 \\(\\beta_2=1.60\\times10^7\\,\\mathrm{L^2\\,mol^{-2}}\\)，同时求游离氨、游离银、二氨合银和总溶解银浓度；不得把游离氨浓度直接等同于 \\(C_{\\mathrm L}\\)。",solution_tex:"令 \\(L=[\\ce{NH3}],\\ p=[\\ce{Ag+}],\\ z=[\\ce{[Ag(NH3)2]+}],\\ s=p+z=[\\ce{Cl-}]\\)。电中性由此自动满足。沉淀平衡、配合平衡及氨物料守恒为\n\\[\nps=K_{\\rm sp},\\qquad z=\\beta_2pL^2,\\qquad L+2z=C_{\\mathrm L}.\n\\]\n消去 \\(p,z,s\\)，得\n\\[\np=\\sqrt{\\frac{K_{\\rm sp}}{1+\\beta_2L^2}},\\quad\nz=\\beta_2L^2\\sqrt{\\frac{K_{\\rm sp}}{1+\\beta_2L^2}},\n\\quad\nF(L)=L+2z-C_{\\mathrm L}=0.\n\\]\n由于 \\(z(L)=\\sqrt{K_{\\rm sp}}\\,\\beta_2L^2(1+\\beta_2L^2)^{-1/2}\\) 对 \\(L>0\\) 严格递增，且 \\(F(0)<0<F(C_{\\mathrm L})\\)，因此物理解唯一。用二分法求得\n\\[\n\\begin{aligned}\nL&=0.09030725\\,\\mathrm M, &\np&=3.714086\\times10^{-8}\\,\\mathrm M,\\\\\nz&=0.004846377\\,\\mathrm M, &\ns&=0.004846414\\,\\mathrm M.\n\\end{aligned}\n\\]\n将数值代回可得 \\(ps=1.80\\times10^{-10}\\)、\\(z/(pL^2)=1.60\\times10^7\\)、\\(L+2z=0.1000\\,\\mathrm M\\)。",assumptions:"理想活度；明确忽略 NH4+、Ag(NH3)+、其他络合及溶解产生的体积改变；过量 AgCl 固体仍存在。",reference:[0.09030724634,3.714086355e-8,0.00484637683,0.004846413971],calc:()=>{const k=1.8e-10,bt=1.6e7,C=.1;const f=l=>{const p=Math.sqrt(k/(1+bt*l*l));return l+2*bt*l*l*p-C;};const l=bisect(f,0,C),p=Math.sqrt(k/(1+bt*l*l)),z=bt*l*l*p;return[l,p,z,p+z];},verify:x=>{const [l,p,z,s]=x;return[E(p*s,1.8e-10),E(z,1.6e7*p*l*l),E(l+2*z,.1),E(s,p+z)];}},
{id:"I02",subject:"inorganic",title:"有限体积原电池的 Nernst 电势与平衡转化",question_tex:"假想二价金属电池反应为 \\(\\ce{M(s)+N^{2+}(aq)<=>M^{2+}(aq)+N(s)}\\)，在 \\(298.15\\,\\mathrm K\\) 时标准电动势 \\(E^\\circ=0.0450\\,\\mathrm V\\)。同一 \\(0.2500\\,\\mathrm L\\) 理想、均匀的反应体系初始 \\([\\ce{M^{2+}}]_0=0.0100\\,\\mathrm M\\)、\\([\\ce{N^{2+}}]_0=0.0200\\,\\mathrm M\\)，金属固体过量。忽略体积改变和液接电势。求初始电动势、无量纲平衡常数、平衡反应进度（以 \\(\\mathrm{mol\\,L^{-1}}\\) 表示）及从初态到平衡传递的总电量。",solution_tex:"反应商 \\(Q=[\\ce{M^{2+}}]/[\\ce{N^{2+}}]\\) 的数值采用相同标准浓度归一化。Nernst 方程为\n\\[\nE=E^\\circ-\\frac{RT}{2F}\\ln Q,\\qquad\nK=\\exp\\!\\left(\\frac{2FE^\\circ}{RT}\\right).\n\\]\n初始 \\(Q_0=0.0100/0.0200=0.5\\)，故 \\(E_0=0.0539044\\,\\mathrm V\\)。在平衡时令反应进度按单位体积记为 \\(\\xi\\)，则\n\\[\n\\frac{0.0100+\\xi}{0.0200-\\xi}=K,\\quad\n\\xi=\\frac{0.0200K-0.0100}{K+1}.\n\\]\n代入 \\(R=8.314462618\\,\\mathrm{J\\,mol^{-1}K^{-1}}\\)、\\(F=96485.33212\\,\\mathrm{C\\,mol^{-1}}\\)，得\n\\[\nK=33.2135,\\qquad \\xi=0.01912315\\,\\mathrm M.\n\\]\n因此平衡 \\([\\ce{M^{2+}}]=0.02912315\\,\\mathrm M\\)、\\([\\ce{N^{2+}}]=0.000876846\\,\\mathrm M\\)。转移电荷为\n\\[\nQ_{\\rm el}=2F\\cdot \\xi \\cdot (0.2500\\,\\mathrm L)=922.552\\,\\mathrm C.\n\\]\n注意电荷计算中 \\(\\xi\\) 是浓度形式，必须乘溶液体积。",assumptions:"假想可逆金属体系；固体活度为 1；离子活度按理想标准化浓度；电势随反应进行变化；足量固体。",reference:[0.05390436939,33.21351942,0.01912315364,922.551915],calc:()=>{const R=8.314462618,F=96485.33212,T=298.15,e0=.045,K=Math.exp(2*F*e0/(R*T)),e=e0-R*T/(2*F)*Math.log(.5),xi=(K*.02-.01)/(1+K);return[e,K,xi,2*F*xi*.25];},verify:x=>{const [e,K,xi,Q]=x;const R=8.314462618,F=96485.33212,T=298.15;return[E(e,.045-R*T/(2*F)*Math.log(.5)),E(Math.log(K),2*F*.045/(R*T)),E((.01+xi)/(.02-xi),K),E(Q,2*F*.25*xi)];}},
{id:"I03",subject:"inorganic",title:"X 射线晶胞测定、密度与空位缺陷联合反演",question_tex:"某银晶体可近似为 FCC 晶格，使用波长 \\(\\lambda=0.1540\\,\\mathrm{nm}\\) 的 X 射线观察到一阶 \\((111)\\) 衍射，给定 Bragg 角 \\(\\theta=18.90^\\circ\\)（不是 \\(2\\theta\\)）。银摩尔质量 \\(M=107.8682\\,\\mathrm{g\\,mol^{-1}}\\)，实测体密度 \\(10.20\\,\\mathrm{g\\,cm^{-3}}\\)。假设晶胞边长不受缺陷影响，唯一缺陷是均匀、随机的银原子位点空位，求晶面间距、晶胞边长、满占据理想密度、空位位点分数。",solution_tex:"由一阶 Bragg 定律和立方晶系面间距关系，\n\\[\n2d_{111}\\sin\\theta=\\lambda,\\qquad\nd_{111}=\\frac{a_{\\rm cell}}{\\sqrt3}.\n\\]\n故\n\\[\nd_{111}=0.2377149\\,\\mathrm{nm},\\qquad\na_{\\rm cell}=0.4117343\\,\\mathrm{nm}.\n\\]\nFCC 常规晶胞有 \\(4\\) 个可能原子位点，若全部被占据，其密度为\n\\[\n\\rho_0=\\frac{4M}{N_Aa_{\\rm cell}^{\\,3}}\n       =10.26482\\,\\mathrm{g\\,cm^{-3}},\n\\]\n其中 \\(a_{\\rm cell}(\\mathrm{cm})=a_{\\rm cell}(\\mathrm{nm})\\times10^{-7}\\)。若平均空位分数为 \\(v\\)，有 \\(\\rho_{\\rm obs}=(1-v)\\rho_0\\)，故\n\\[\nv=1-\\frac{10.20}{10.26482}=0.00631484\\approx0.6315\\%.\n\\]\n计算只在“体密度差异仅由空位造成、晶胞常数保持不变”的指定模型中成立，不应将此数值当作真实银晶体的实验空位浓度。",assumptions:"晶体为理想 FCC；一阶 (111) 峰；角度是 θ；仅空位降低平均晶胞原子数，忽略夹杂、孔隙、仪器误差与应变。",reference:[0.237714910264,0.411734302294,10.264820745,0.006314844324],calc:()=>{const theta=18.9*Math.PI/180,d=.154/(2*Math.sin(theta)),a=Math.sqrt(3)*d,rho=4*107.8682/(6.02214076e23*(a*1e-7)**3);return[d,a,rho,1-10.2/rho];},verify:x=>{const [d,a,rho,v]=x;return[E(2*d*Math.sin(18.9*Math.PI/180),.154),E(a/Math.sqrt(3),d),E(rho*(a*1e-7)**3,4*107.8682/6.02214076e23),E((1-v)*rho,10.2)];}},
{id:"A01",subject:"analytical",title:"双波长光谱解混、稀释反算与试样质量",question_tex:"两种仅含 \\(X,Y\\) 的分析物在光程 \\(1.00\\,\\mathrm{cm}\\) 下服从 Beer--Lambert 定律，校正空白后的两波长吸光度分别为 \\(A_1=0.4600\\)、\\(A_2=0.3400\\)。摩尔吸光系数矩阵为\n\\[\n\\begin{pmatrix}10000&2000\\\\3000&8000\\end{pmatrix}\n\\ \\mathrm{L\\,mol^{-1}cm^{-1}}.\n\\]\n测量液由 \\(10.00\\,\\mathrm{mL}\\) 原样定容至 \\(100.0\\,\\mathrm{mL}\\) 得到。求测量液及原样的两组分浓度；再求原样 \\(25.00\\,\\mathrm{mL}\\) 中 \\(X,Y\\) 的质量（取 \\(M_X=150.0\\)、\\(M_Y=200.0\\,\\mathrm{g\\,mol^{-1}}\\)）。",solution_tex:"由吸光度加和关系，\n\\[\n\\begin{bmatrix}10000&2000\\\\3000&8000\\end{bmatrix}\n\\begin{bmatrix}c_X\\\\c_Y\\end{bmatrix}\n=\\begin{bmatrix}0.4600\\\\0.3400\\end{bmatrix}.\n\\]\n行列式为 \\(D=10000\\times8000-3000\\times2000=74.0\\times10^6\\neq0\\)，故\n\\[\nc_X=\\frac{8000(0.4600)-2000(0.3400)}D\n    =4.054054\\times10^{-5}\\,\\mathrm M,\n\\]\n\\[\nc_Y=\\frac{10000(0.3400)-3000(0.4600)}D\n    =2.729730\\times10^{-5}\\,\\mathrm M.\n\\]\n定容导致 \\(10.00\\) 倍稀释，原样浓度分别为 \\(4.054054\\times10^{-4}\\) 与 \\(2.729730\\times10^{-4}\\,\\mathrm M\\)。取 \\(25.00\\,\\mathrm{mL}\\) 原样，\n\\[\nm_X=c_{X,0}(0.02500)(150.0)=1.52027\\times10^{-3}\\,\\mathrm g,\n\\quad\nm_Y=c_{Y,0}(0.02500)(200.0)=1.36486\\times10^{-3}\\,\\mathrm g.\n\\]\n代回两波长方程应分别恢复 \\(0.4600\\) 与 \\(0.3400\\)。",assumptions:"两种发色团彼此不反应、光程一致、吸光系数已在测量条件下标定；完全回收与线性吸收；两个测量波长可逆矩阵。",reference:[0.00004054054054,0.0000272972973,0.0004054054054,0.000272972973,0.00152027027,0.001364864865],calc:()=>{const d=74e6,x=(8000*.46-2000*.34)/d,y=(10000*.34-3000*.46)/d;return[x,y,10*x,10*y,10*x*.025*150,10*y*.025*200];},verify:x=>{const [cx,cy,ox,oy,mx,my]=x;return[E(10000*cx+2000*cy,.46),E(3000*cx+8000*cy,.34),E(ox/10,cx),E(oy/10,cy),E(mx,ox*.025*150),E(my,oy*.025*200)];}},
{id:"A02",subject:"analytical",title:"双指示剂滴定反演碳酸盐组成与离子强度",question_tex:"从一份仅由 \\(\\ce{Na2CO3}\\) 与 \\(\\ce{NaHCO3}\\) 组成的水溶液中取 \\(25.00\\,\\mathrm{mL}\\)，用 \\(0.1000\\,\\mathrm M\\) 的 \\(\\ce{HCl}\\) 滴定。到酚酞终点累计消耗 \\(8.20\\,\\mathrm{mL}\\)，到甲基橙终点累计消耗 \\(21.60\\,\\mathrm{mL}\\)。认为两终点理想精确、无 \\(\\ce{OH-}\\) 或其它缓冲组分。求原液两种盐的形式浓度、原液 \\(250.0\\,\\mathrm{mL}\\) 中两种盐的质量，以及按完全解离形式计算的离子强度。",solution_tex:"设取样中的 \\(\\ce{CO3^{2-}}\\) 与 \\(\\ce{HCO3-}\\) 物质的量为 \\(x,y\\)。第一终点仅有\n\\(\\ce{CO3^{2-}->HCO3-}\\)，故 \\(x=0.1000(0.00820)=0.0008200\\,\\mathrm{mol}\\)。\n第二终点累计耗酸满足 \\(2x+y=0.1000(0.02160)\\)，得到\n\\(y=0.0005200\\,\\mathrm{mol}\\)。因此\n\\[\nc_{\\ce{Na2CO3}}=\\frac{x}{0.02500}=0.03280\\,\\mathrm M,\\qquad\nc_{\\ce{NaHCO3}}=\\frac{y}{0.02500}=0.02080\\,\\mathrm M.\n\\]\n以 \\(M(\\ce{Na2CO3})=105.99\\)、\\(M(\\ce{NaHCO3})=84.0066\\,\\mathrm{g\\,mol^{-1}}\\)，\n\\[\nm_1=0.03280(0.2500)(105.99)=0.86912\\,\\mathrm g,\\quad\nm_2=0.02080(0.2500)(84.0066)=0.43683\\,\\mathrm g.\n\\]\n形式电荷平衡给 \\([\\ce{Na+}]=2c_1+c_2\\)，所以完全解离模型下\n\\[\nI=\\tfrac12\\bigl([\\ce{Na+}]+4c_1+c_2\\bigr)=3c_1+c_2\n=0.11920\\,\\mathrm M.\n\\]\n该 \\(I\\) 是按给定形式浓度的估算；若考虑酸碱物种与活度，需重解平衡。",assumptions:"以形式组分为定义的浓度；终点不计碳酸溶解/逸散损失；电中性及完全解离，仅计算形式离子强度。",reference:[0.0328,0.0208,0.869118,0.43683432,0.1192],calc:()=>{const x=.1*.0082,y=.1*.0216-2*x,a=x/.025,b=y/.025;return[a,b,a*.25*105.99,b*.25*84.0066,3*a+b];},verify:x=>{const [a,b,m1,m2,I]=x;return[E(a*.025,.1*.0082),E((2*a+b)*.025,.1*.0216),E(m1,a*.25*105.99),E(m2,b*.25*84.0066),E(I,3*a+b)];}},
{id:"A03",subject:"analytical",title:"钙镁络合差量滴定、空白校正与总硬度",question_tex:"将水样平行取 \\(50.00\\,\\mathrm{mL}\\) 两份，以 \\(0.01000\\,\\mathrm M\\) EDTA 滴定。钙专测原始读数 \\(17.60\\,\\mathrm{mL}\\)，钙镁总测原始读数 \\(28.40\\,\\mathrm{mL}\\)，两测定各有 \\(0.20\\,\\mathrm{mL}\\) 空白消耗。取 \\(M_{\\rm Ca}=40.078\\)、\\(M_{\\rm Mg}=24.305\\)、\\(M_{\\ce{CaCO3}}=100.09\\,\\mathrm{g\\,mol^{-1}}\\)。假设没有竞争金属、有效络合计量均为 \\(1:1\\)，求两种金属的浓度、若将整个 \\(0.5000\\,\\mathrm L\\) 同浓度样品完全回收所得各金属质量、以 \\(\\ce{CaCO3}\\) 计的总硬度。",solution_tex:"空白校正体积为 \\(V_{\\rm Ca}=17.40\\,\\mathrm{mL}\\)、\\(V_{\\rm tot}=28.20\\,\\mathrm{mL}\\)。由 EDTA 的 \\(1:1\\) 络合计量，\n\\[\nc_{\\rm Ca}=\\frac{0.01000(0.01740)}{0.05000}\n=0.003480\\,\\mathrm M,\n\\]\n\\[\nc_{\\rm Mg}=\\frac{0.01000(0.02820-0.01740)}{0.05000}\n=0.002160\\,\\mathrm M.\n\\]\n若有同浓度 \\(0.5000\\,\\mathrm L\\) 样品，则其中金属质量为\n\\[\nm_{\\rm Ca}=c_{\\rm Ca}(0.5000)(40.078)=0.069736\\,\\mathrm g,\\qquad\nm_{\\rm Mg}=c_{\\rm Mg}(0.5000)(24.305)=0.0262494\\,\\mathrm g.\n\\]\n将两者的摩尔浓度和以相同 \\(2+\\) 价的 \\(\\ce{CaCO3}\\) 当量换算，\n\\[\nH=(c_{\\rm Ca}+c_{\\rm Mg})(100.09)(1000)\n=564.51\\,\\mathrm{mg\\,L^{-1}}.\n\\]\n这里的硬度是 \\emph{以 \\(\\ce{CaCO3}\\) 计}，不是实际生成的碳酸钙质量。",assumptions:"平行等体积取样；各自单独扣空白；Ca 专测时 Mg 完全屏蔽；总滴定无其它金属干扰；络合终点与回收率理想。",reference:[0.00348,0.00216,0.06973572,0.0262494,564.5076],calc:()=>{const a=.01*(17.6-.2)/1000/.05,b=.01*((28.4-.2)-(17.6-.2))/1000/.05;return[a,b,a*.5*40.078,b*.5*24.305,(a+b)*100090];},verify:x=>{const [ca,mg,mc,mm,h]=x;return[E(ca*.05/.01*1000,17.4),E((ca+mg)*.05/.01*1000,28.2),E(mc,ca*.5*40.078),E(mm,mg*.5*24.305),E(h,(ca+mg)*100090)];}},
{id:"O01",subject:"organic",title:"连续一级反应的中间体最佳分离时刻",question_tex:"在封闭、恒温、恒容条件下，假想有机反应网络为 \\(\\ce{A->B->C}\\)，两步严格遵守一级动力学，速率常数 \\(k_1=0.1000\\,\\mathrm{h^{-1}}\\)、\\(k_2=0.0400\\,\\mathrm{h^{-1}}\\)。初始只有 \\(A\\)，总物质的量 \\(0.2500\\,\\mathrm{mol}\\)，假设 \\(1:1:1\\) 化学计量、无逆反应和其它副反应，\\(M_B=150.0\\,\\mathrm{g\\,mol^{-1}}\\)。求 \\(B\\) 的浓度（或摩尔分数）函数、使 \\(B\\) 最大的时间、该时刻三种物质的摩尔分数与 \\(B\\) 的理论质量。",solution_tex:"设 \\(a,b,c\\) 为对初始 \\(A\\) 物质的量归一化的分数。动力学方程\n\\[\na'=-k_1a,\\qquad b'=k_1a-k_2b,\\qquad c'=k_2b,\\qquad\n(a,b,c)(0)=(1,0,0).\n\\]\n线性微分方程给出\n\\[\na(t)=e^{-k_1t},\\qquad\nb(t)=\\frac{k_1}{k_2-k_1}\n\\left(e^{-k_1t}-e^{-k_2t}\\right),\\qquad\nc(t)=1-a(t)-b(t).\n\\]\n求导 \\(b'(t)=0\\)，等价于 \\(k_2e^{-k_2t}=k_1e^{-k_1t}\\)，故\n\\[\nt_*=\\frac{\\ln(k_2/k_1)}{k_2-k_1}\n=15.2715\\,\\mathrm h.\n\\]\n该时刻\n\\[\n(a,b,c)=(0.217153,\\ 0.542884,\\ 0.239963).\n\\]\n因此 \\(B\\) 的可分离理论质量（若瞬时完美分离）为\n\\[\nm_B=(0.2500\\,\\mathrm{mol})\\times0.542884\\times\n150.0\\,\\mathrm{g\\,mol^{-1}}=20.3581\\,\\mathrm g.\n\\]\n该极值唯一，因为 \\(b(0)=0\\)、\\(b(t)>0\\) 且 \\(b(\\infty)=0\\)。",assumptions:"严格的一级不可逆连续反应；正确定义 k1,k2；所有物种 1:1 转化，恒温恒容，极值时瞬时完美分离。",reference:[15.271512198,0.2171534093,0.5428835233,0.23996306735,20.35813212],calc:()=>{const k1=.1,k2=.04,t=Math.log(k2/k1)/(k2-k1),a=Math.exp(-k1*t),b=k1/(k2-k1)*(Math.exp(-k1*t)-Math.exp(-k2*t)),c=1-a-b;return[t,a,b,c,.25*b*150];},verify:x=>{const [t,a,b,c,m]=x;return[E(Math.exp((.04-.1)*t),.04/.1),E(a,Math.exp(-.1*t)),E(b,.1/(.04-.1)*(Math.exp(-.1*t)-Math.exp(-.04*t))),E(a+b+c,1),E(m,.25*b*150)];}},
{id:"O02",subject:"organic",title:"非等当量缩聚的 Carothers 关系、脱水守恒与数均分子量",question_tex:"理想双官能 AA/BB 单体缩聚体系中，初始 A 类官能团为 \\(0.9600\\,\\mathrm{mol}\\)，B 类官能团为 \\(1.000\\,\\mathrm{mol}\\)。A 类官能团反应分数为 \\(p=0.9700\\)；每形成一条连接键均损失一分子水。假设体系初始分子全为双官能单体、无环化、无交联、无单官能杂质；全部单体按数目平均的摩尔质量为 \\(130.0\\,\\mathrm{g\\,mol^{-1}}\\)，\\(M_{\\ce{H2O}}=18.015\\,\\mathrm{g\\,mol^{-1}}\\)。求初始单体分子物质的量、缩合键物质的量、最终链物质的量、数均聚合度、产物总质量和数均摩尔质量。",solution_tex:"双官能起始单体的分子 mol 数为\n\\[\nN_0=\\frac{0.9600+1.000}{2}=0.9800\\,\\mathrm{mol}.\n\\]\n每形成一条键消耗一个 A 与一个 B 官能团，故反应键数\n\\[\n\\xi=pN_{A,0}=0.9700(0.9600)=0.9312\\,\\mathrm{mol}.\n\\]\n无环化时每形成一条键，独立分子数减少一，最终链数\n\\(N_{\\rm chain}=0.9800-0.9312=0.04880\\,\\mathrm{mol}\\)。因而\n\\[\nX_n=\\frac{N_0}{N_{\\rm chain}}\n=\\frac{1+r}{1+r-2rp}\n=20.08197,\\qquad r=\\frac{N_{A,0}}{N_{B,0}}=0.9600.\n\\]\n初始总质量 \\(m_0=(0.9800)(130.0)=127.4\\,\\mathrm g\\)，水损失 \\(m_{\\rm water}=0.9312(18.015)=16.775568\\,\\mathrm g\\)，\n\\[\nm_{\\rm polymer}=110.624432\\,\\mathrm g,\\qquad\nM_n=\\frac{m_{\\rm polymer}}{N_{\\rm chain}}\n=2266.89\\,\\mathrm{g\\,mol^{-1}}.\n\\]\n不能简单写成 \\(X_n\\times130.0\\)：因为每条缩合键有实际脱水质量损失。",assumptions:"AA/BB 双官能、无环化、无交联、每反应键脱去一分子水；p 是少量 A 官能团的转化分数；单体数均质量与起始总数相配。",reference:[0.98,0.9312,0.0488,20.0819672131,110.624432,2266.89409836],calc:()=>{const N0=(.96+1)/2,xi=.96*.97,nc=N0-xi,X=N0/nc,m=N0*130-xi*18.015;return[N0,xi,nc,X,m,m/nc];},verify:x=>{const [n0,xi,nc,X,m,Mn]=x;return[E(2*n0,.96+1),E(xi/.96,.97),E(n0-nc,xi),E(X*nc,n0),E(m+xi*18.015,n0*130),E(Mn*nc,m)];}},
{id:"O03",subject:"organic",title:"双响应因子手性色谱的 ee、质量平衡与收率",question_tex:"某反应仅生成互为对映体的 \\(R,S\\) 两种产物。手性色谱中，经独立质量标准校准的检测响应满足 \\(A_R=f_Rm_R\\)、\\(A_S=f_Sm_S\\)，其中 \\(A_R=1500\\)、\\(A_S=700\\)，响应因子 \\(f_R=1.20\\)、\\(f_S=0.800\\ \\mathrm{area\\,mg^{-1}}\\)。两对映体摩尔质量相同，没有其它产物或杂质。若理论完全转化可以得到产物总质量 \\(2500\\,\\mathrm{mg}\\)，求两对映体质量、主对映体质量百分数、正的 ee 和总分离收率。",solution_tex:"色谱面积不能直接用于求质量比，须先除以各自的响应因子：\n\\[\nm_R=\\frac{1500}{1.20}=1250\\,\\mathrm{mg},\\qquad\nm_S=\\frac{700}{0.800}=875\\,\\mathrm{mg}.\n\\]\n由于两对映体摩尔质量相同，物质的量比例等于质量比例。总分离产物 \\(m=2125\\,\\mathrm{mg}\\)，\\(R\\) 为主对映体，其质量百分数为\n\\[\nw_R=100\\frac{1250}{2125}=58.8235\\%.\n\\]\n对映体过量和总收率分别为\n\\[\nee=100\\frac{1250-875}{1250+875}=17.6471\\%,\\qquad\nY=100\\frac{2125}{2500}=85.00\\%.\n\\]\n“ee”衡量立体选择性；“总收率”衡量实际回收量相对理论产量。二者不可混用。",assumptions:"独立校准响应因子按质量标定、两组分完整分离、对映体摩尔质量相同、无第三组分、理论产物量可信。",reference:[1250,875,58.82352941,17.64705882,85],calc:()=>{const mr=1500/1.2,ms=700/.8,mt=mr+ms;return[mr,ms,100*mr/mt,100*(mr-ms)/mt,100*mt/2500];},verify:x=>{const [mr,ms,w,ee,Y]=x;return[E(1.2*mr,1500),E(.8*ms,700),E(w*(mr+ms)/100,mr),E(ee*(mr+ms)/100,mr-ms),E(Y*2500/100,mr+ms)];}},
{id:"P01",subject:"physical",title:"双层扩散膜的等效阻力、通量与累积转移质量",question_tex:"在温度固定、稳态一维扩散中，两储液侧浓度恒定为 \\(c_{\\mathrm L}=2.00\\)、\\(c_{\\mathrm R}=0.200\\,\\mathrm{mol\\,m^{-3}}\\)，中间串联两层膜：\\(L_1=80.0\\,\\mathrm{\\mu m},D_1=1.00\\times10^{-10}\\,\\mathrm{m^2s^{-1}},K_1=0.500\\)；\\(L_2=120.0\\,\\mathrm{\\mu m},D_2=3.00\\times10^{-10}\\,\\mathrm{m^2s^{-1}},K_2=0.800\\)。两侧与膜界面的局部分配遵守 \\(c_{\\mathrm{membrane},i}=K_i c_{\\mathrm{aqueous}}\\)，界面无传质阻力。膜面积 \\(2.00\\,\\mathrm{cm^2}\\)，维持上述储液浓度 \\(2.00\\,\\mathrm h\\)。求等效传质阻力、稳态物质通量、通过膜的物质的量及若 \\(M=180.0\\,\\mathrm{g\\,mol^{-1}}\\) 时的质量（mg）。",solution_tex:"各层稳态 Fick 定律 \\(J=-D_i\\,dc_i/dx\\)；按膜--水分配系数把两层的浓度降换算到同一水相参照浓度，可得到串联阻力\n\\[\n\\mathcal R=\\frac{L_1}{D_1K_1}+\\frac{L_2}{D_2K_2}\n=\\frac{80\\times10^{-6}}{1.00\\times10^{-10}(0.500)}\n+\\frac{120\\times10^{-6}}{3.00\\times10^{-10}(0.800)}\n=2.10\\times10^6\\,\\mathrm{s\\,m^{-1}}.\n\\]\n因此\n\\[\nJ=\\frac{c_{\\mathrm L}-c_{\\mathrm R}}{\\mathcal R}\n=\\frac{1.800}{2.10\\times10^6}\n=8.57143\\times10^{-7}\\,\\mathrm{mol\\,m^{-2}s^{-1}}.\n\\]\n面积 \\(A=2.00\\times10^{-4}\\,\\mathrm{m^2}\\)、时间 \\(t=7200\\,\\mathrm s\\)，故\n\\[\nn=JAt=1.23429\\times10^{-6}\\,\\mathrm{mol},\\qquad\nm=n(180.0)\\times1000=0.222171\\,\\mathrm{mg}.\n\\]\n保持两储液浓度不变是恒定通量计算的必要外部条件。",assumptions:"稳态 1D 串联扩散；分配系数定义一致；界面局部热力学平衡；储液浓度恒定；无对流、反应与膜内蓄积。",reference:[2100000,8.571428571e-7,0.000001234285714,0.22217142857],calc:()=>{const z=80e-6/(1e-10*.5)+120e-6/(3e-10*.8),j=1.8/z,n=j*2e-4*7200;return[z,j,n,n*180*1000];},verify:x=>{const [z,j,n,m]=x;return[E(z,80e-6/(1e-10*.5)+120e-6/(3e-10*.8)),E(j*z,1.8),E(n,j*2e-4*7200),E(m,n*180*1000)];}},
{id:"P02",subject:"physical",title:"热容差修正反应热力学与平衡常数",question_tex:"某假想标准反应在 \\(T_0=298.15\\,\\mathrm K\\) 的标准焓、标准熵分别为 \\(\\Delta_rH^\\circ(T_0)=45.000\\,\\mathrm{kJ\\,mol^{-1}}\\) 与 \\(\\Delta_rS^\\circ(T_0)=120.00\\,\\mathrm{J\\,mol^{-1}K^{-1}}\\)。在 \\(298.15\\) 到 \\(350.00\\,\\mathrm K\\) 区间，标准摩尔热容差恒为 \\(\\Delta_rC_p^\\circ=50.00\\,\\mathrm{J\\,mol^{-1}K^{-1}}\\)。求 \\(350.00\\,\\mathrm K\\) 的标准焓、熵、Gibbs 能和无量纲热力学平衡常数 \\(K\\)，并给出该温度的 van't Hoff 导数 \\(d\\ln K/dT\\)。",solution_tex:"由 Kirchhoff 定律和熵的温度积分，\n\\[\n\\Delta_rH^\\circ(T)=H_0+\\Delta C_p(T-T_0),\\qquad\n\\Delta_rS^\\circ(T)=S_0+\\Delta C_p\\ln(T/T_0).\n\\]\n取 \\(T=350.00\\,\\mathrm K\\)，得到\n\\[\n\\Delta_rH^\\circ=47.5925\\,\\mathrm{kJ\\,mol^{-1}},\n\\quad\n\\Delta_rS^\\circ=128.01682\\,\\mathrm{J\\,mol^{-1}K^{-1}}.\n\\]\n应先把焓与 \\(T\\Delta S\\) 统一成 J/mol，计算\n\\[\n\\Delta_rG^\\circ=47592.5-350(128.01682)\n=2786.61\\,\\mathrm{J\\,mol^{-1}}.\n\\]\n按标准活度定义的无量纲 \\(K\\) 满足\n\\[\nK=\\exp\\!\\left(-\\frac{\\Delta_rG^\\circ}{RT}\\right)\n=0.383821,\\qquad\n\\left.\\frac{d\\ln K}{dT}\\right|_{350}\n=\\frac{\\Delta_rH^\\circ(350)}{R(350)^2}\n=0.0467270\\,\\mathrm{K^{-1}}.\n\\]\n最后一式可由前述 \\(H(T),S(T)\\) 的显式表达求导复核。",assumptions:"ΔCp 在区间内常数；T 为绝对温度；K 由统一标准态活度定义并无量纲；近似只用于指定温度区间。",reference:[47592.5,128.016821946,2786.612318999,0.3838212380945,0.0467270372039],calc:()=>{const T=350,T0=298.15,R=8.314462618,H=45000+50*(T-T0),S=120+50*Math.log(T/T0),G=H-T*S,K=Math.exp(-G/(R*T));return[H,S,G,K,H/(R*T*T)];},verify:x=>{const [H,S,G,K,d]=x,T=350,R=8.314462618;return[E(H,45000+50*(T-298.15)),E(S,120+50*Math.log(T/298.15)),E(G,H-T*S),E(Math.log(K),-G/(R*T)),E(d*R*T*T,H)];}},
{id:"P03",subject:"physical",title:"有限溶液 Langmuir 吸附的非线性质量平衡",question_tex:"把 \\(m=2.000\\,\\mathrm g\\) 的均匀吸附剂加入 \\(V=0.5000\\,\\mathrm L\\)、初浓度 \\(C_0=0.002000\\,\\mathrm{mol\\,L^{-1}}\\) 的单溶质溶液中。吸附平衡遵守 \\(q(C)=q_{\\max}KC/(1+KC)\\)，其中 \\(q_{\\max}=4.00\\times10^{-4}\\,\\mathrm{mol\\,g^{-1}}\\)、\\(K=500.0\\,\\mathrm{L\\,mol^{-1}}\\)。假设没有化学反应或容器吸附且溶液体积不变，求平衡游离浓度 \\(C\\)、表面覆盖度 \\(\\theta\\)、吸附总物质的量及去除率；必须考虑吸附导致的溶液浓度下降。",solution_tex:"平衡时总物料守恒为\n\\[\nVC_0=VC+mq_{\\max}\\frac{KC}{1+KC}.\n\\]\n化为二次多项式，\n\\[\nVK C^2+\\bigl[V+m q_{\\max}K-VC_0K\\bigr]C-VC_0=0.\n\\]\n因常数项为负，二次方程恰有一个正根；等价地，原始右侧对 \\(C\\ge0\\) 严格递增，故物理解唯一。数值代入并取正根，\n\\[\nC=0.001354066\\,\\mathrm{mol\\,L^{-1}}.\n\\]\n相应表面覆盖度\n\\[\n\\theta=\\frac{KC}{1+KC}=0.4037088,\n\\]\n吸附总物质的量\n\\[\nn_{\\rm ads}=m q_{\\max}\\theta\n=3.22967\\times10^{-4}\\,\\mathrm{mol},\n\\]\n去除率\n\\[\n\\eta=100\\left(1-\\frac{C}{C_0}\\right)=32.2967\\%.\n\\]\n可代回验证 \\(VC+n_{\\rm ads}=VC_0=0.001000\\,\\mathrm{mol}\\)，不允许用初始浓度直接计算最终 \\(\\theta\\)。",assumptions:"单一吸附溶质；温度不变；理想单层 Langmuir、独立同质位点；没有溶液体积变化、容器损失和其它反应。",reference:[0.0013540659229,0.403708798219,0.000322967038575,32.2967038566],calc:()=>{const C0=.002,V=.5,m=2,q=.0004,K=500;const C=bisect(t=>V*t+m*q*K*t/(1+K*t)-V*C0,0,C0),theta=K*C/(1+K*C);return[C,theta,m*q*theta,100*(1-C/C0)];},verify:x=>{const [C,t,n,eta]=x;return[E(C*.5+n,.001),E(t*(1+500*C),500*C),E(n,2*.0004*t),E(eta/100,1-C/.002)];}}
];

export const stableId=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verifyCase(p){
 const numbers=p.calc();
 if(!Array.isArray(numbers)||numbers.length!==p.reference.length||numbers.some(x=>!Number.isFinite(x)))
  throw Error('Incomplete mathematical result for '+p.id);
 const witnesses=p.verify(numbers);
 if(!Array.isArray(witnesses)||witnesses.length!==numbers.length||
    witnesses.some(x=>!Number.isFinite(x)||x>1e-7))
  throw Error('Scientific equation witness failed for '+p.id);
 for(let i=0;i<numbers.length;i++)if(E(numbers[i],p.reference[i])>1e-5)
  throw Error('Independently computed reference disagreement: '+p.id+' result '+i);
 return {numbers,witnesses};
}
const esc=s=>String(s).replaceAll('&','\\&').replaceAll('%','\\%')
 .replaceAll('#','\\#').replaceAll('_','\\_').replaceAll('$','\\$');
const SUBJECTS=[
 ['inorganic','无机化学'],['analytical','分析化学'],
 ['organic','有机化学'],['physical','物理化学']
];
export function candidateRecords(){
 if(CASES.length!==12||new Set(CASES.map(x=>x.id)).size!==12||
    SUBJECTS.some(([s])=>CASES.filter(p=>p.subject===s).length!==3))
  throw Error('Expected three independent authored scientific cases per discipline');
 return CASES.map(p=>{
  const {numbers,witnesses}=verifyCase(p),question=p.title+'\n'+p.question_tex;
  const id=stableId(question);
  return {schema_version:1,id,subject:p.subject,topic:'advanced_integrated_2026_'+p.id,
   level:'undergraduate',difficulty:'advanced_integrated',
   question_type:'independently_authored_nonparametric_multistage_science',
   resource_type:'original_solved_exercise_not_upstream_question',
   source_problem_number:p.id,question,
   answer:numbers.map((x,i)=>String(i+1)+': '+Number(x).toPrecision(10)).join('；'),
   explanation:p.solution_tex,problem_title:p.title,
   scientific_assumptions:p.assumptions,
   numeric_answers:numbers,independent_equation_residuals:witnesses,
   independent_model_witness_count:witnesses.length,
   human_expert_reviewed:false,requires_human_chemistry_review:true,
   quality_status:'awaiting_expert_review',
   semantic_duplicate_review_pending:true,publishable:false,
   source:{repository:REPO,file:'scripts/advanced-integrated-12.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+REPO+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_12_distinct_advanced_integrated_chemical_problems',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Written independently; 12 new analytic modeling problems with explicit scientific assumptions, no adapted textbook/exam question text.'}};
 });
}
const preamble=String.raw`\documentclass[UTF8,openany,11pt,a4paper]{ctexbook}
\usepackage{fontspec}
\setCJKmainfont{Noto Serif CJK SC}
\setCJKsansfont{Noto Sans CJK SC}
\setmainfont{Latin Modern Roman}
\usepackage[margin=24mm,headheight=15pt]{geometry}
\usepackage{amsmath,amssymb,mathtools,mhchem,booktabs,longtable}
\usepackage{microtype,xcolor,tcolorbox,fancyhdr,hyperref}
\definecolor{ink}{HTML}{193247}
\definecolor{accent}{HTML}{087F76}
\definecolor{soft}{HTML}{F0F7F6}
\definecolor{warn}{HTML}{8A4513}
\hypersetup{colorlinks=true,linkcolor=ink,urlcolor=accent,pdfauthor={Ruoshui Chemistry Editorial Review},pdftitle={大学四大化学·原创高阶综合题科学复核册}}
\setlength{\parindent}{2em}
\setlength{\parskip}{.25em}
\linespread{1.16}
\setcounter{secnumdepth}{2}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small 三千弱水 \quad 化学综合题科学复核}
\fancyhead[R]{\small \textcolor{warn}{未通过专家审定}}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{.35pt}
\newtcolorbox{reviewnote}{colback=soft,colframe=accent!60!black,arc=1.3mm,boxrule=.55pt,left=2mm,right=2mm}
\newcommand{\sciencewarn}[1]{\begin{reviewnote}\textbf{\textcolor{warn}{模型适用条件与审核重点：}}#1\end{reviewnote}}
\begin{document}
\begin{titlepage}
\vspace*{22mm}
{\color{accent}\rule{\linewidth}{2.3pt}}\\[12mm]
{\Large 三千弱水 · 大学四大化学题库}\\[12mm]
{\Huge\bfseries 原创高阶综合题}\\[4mm]
{\Huge\bfseries 科学复核册}\\[12mm]
{\large 第一辑 \quad 12 道独立专题 \quad 题目与完整推导}\\[16mm]
\begin{reviewnote}
本册供\textbf{科学性、题意条件、计算和排版}联合复核。
全部题目为原创教学题，不宣称出自真实大学考试；
无外部专家签名，不作为已审定的正式试题册发布。
特别区分机器方程残差为零与化学模型真实可靠两种概念。
\end{reviewnote}
\vfill
{\small 版本：2026-10-28 \quad 校验：数值反算、来源许可、假设清单}\\[6mm]
{\small 许可证：独立原创题文 CC0-1.0；第三方材料不在本声明范围内}
{\color{accent}\rule{\linewidth}{1.1pt}}
\end{titlepage}
\frontmatter
\tableofcontents
\mainmatter
\chapter*{编者说明}
\addcontentsline{toc}{chapter}{编者说明}
题库现有大量用于计算训练的参数变式，本辑不继续通过数字替换扩大名义独立知识点。
本册选入\textbf{每科三道}独立撰写的高阶综合题，强调建模、约束条件、数值求解、
守恒检验、近似适用范围以及易错点。个别题目使用明确标记的理想化模型或假想体系；
这不是现实实验结果。机器脚本可以重算表内结果，仍需人工科学审阅。
`;
// Typeset mhchem arrows with required lexical spaces without altering canonical stored question IDs.
const latexize=s=>s.replaceAll('M(s)+N^{2+}(aq)<=>M^{2+}(aq)+N(s)','M(s) + N^{2+}(aq) <=> M^{2+}(aq) + N(s)')
 .replaceAll('CO3^{2-}->HCO3-','CO3^{2-} -> HCO3-')
 .replaceAll('A->B->C','A -> B -> C');
export function buildTex(){
 let t=preamble;
 t+=String.raw`\part{题目册}`+'\n';
 for(const [subject,name] of SUBJECTS){
  t+=String.raw`\chapter{`+name+'}\n';
  for(const p of CASES.filter(q=>q.subject===subject)){
   t+=String.raw`\section{`+p.id+' \\quad '+p.title+'}\n';
   t+=latexize(p.question_tex)+'\n'+String.raw`\sciencewarn{`+esc(p.assumptions)+'}\n';
  }
 }
 t+=String.raw`\cleardoublepage\part{严格解答与计算验证}`+'\n';
 for(const [subject,name] of SUBJECTS){
  t+=String.raw`\chapter{`+name+'：解答}\n';
  for(const p of CASES.filter(q=>q.subject===subject)){
   const {numbers,witnesses}=verifyCase(p);
   t+=String.raw`\section{`+p.id+' \\quad '+p.title+'}\n'+latexize(p.solution_tex)+'\n';
   t+=String.raw`\begin{reviewnote}`+'\n';
   t+='本题计算机独立数值见证：'+numbers.map((v,i)=>String(i+1)+'：'+Number(v).toPrecision(8)).join('；')+'。\n';
   t+='逆向方程最大相对残差：'+Math.max(...witnesses).toExponential(3)+'。\n';
   t+=String.raw`\end{reviewnote}`+'\n';
  }
 }
 t+=String.raw`\chapter*{质量控制与发布边界}
\addcontentsline{toc}{chapter}{质量控制与发布边界}
\begin{enumerate}
\item 12 道题各有独立内容，不使用批量参数变式增加“独立题型”计数。
\item 每题列出前提、关键守恒关系和数值反算；计算过程可以由版本固定的脚本重现。
\item 数值反算无法自动检验文献真实性、实验可行性、结构化学细节和教学适切性。
\item 所有题目仍为 awaiting\_expert\_review、publishable=false，
不自动进入正式组卷索引。
\item PDF 为专家审校稿。若修改题意、反应模型或常数，必须同时重新生成 PDF、
题目 JSON 与科学审核报告。
\end{enumerate}
\end{document}
`;
 return t;
}
export function build(){
 const records=candidateRecords(),root=join(ROOT,'editorial/advanced_integrated_v1');
 mkdirSync(root,{recursive:true});
 const dir=join(ROOT,'data/candidates');mkdirSync(dir,{recursive:true});
 let added=0;
 for(const rec of records){
  const out=join(dir,rec.id+'.json');
  if(existsSync(out)&&JSON.stringify(JSON.parse(readFileSync(out,'utf8')))!==JSON.stringify(rec))
   throw Error('Source drift for high-quality original '+rec.source_problem_number);
 }
 for(const rec of records){
  const out=join(dir,rec.id+'.json');if(existsSync(out))continue;
  writeFileSync(out,JSON.stringify(rec,null,2)+'\n');added++;
 }
 const science={schema_version:1,generated:12,distinct_original_topic_models:12,
  discipline_counts:{inorganic:3,analytical:3,organic:3,physical:3},
  numeric_equation_checks:records.reduce((n,r)=>n+r.independent_model_witness_count,0),
  no_parametric_replicates:true,copied_external_question_text:0,
  scientific_assumption_checklist:CASES.map(p=>({id:p.id,title:p.title,subject:p.subject,
   assumptions:p.assumptions,independent_equation_residuals:p.verify(p.calc()),
   human_scientific_approval:false,semantic_duplicate_review_pending:true})),
  original_license:'CC0-1.0',expert_approved:0,publishable:false,
  notice:'Machine conservation checks validate exact authored mathematical models only. Not official exam questions and not cleared for publication.'};
 const artifacts=[
  ['original_advanced_integrated_12.tex',buildTex()],
  ['science_assumption_review.json',JSON.stringify(science,null,2)+'\n'],
  ['candidate_ids.json',JSON.stringify(records.map(r=>({code:r.source_problem_number,id:r.id,subject:r.subject,title:r.problem_title})),null,2)+'\n']
 ];
 for(const [file,body] of artifacts){
  const out=join(root,file);
  if(!existsSync(out)||readFileSync(out,'utf8')!==body)writeFileSync(out,body);
 }
 console.log('12 genuinely distinct advanced chemistry problems: added='+added+' existing='+(12-added)+
  ' inverse witnesses='+science.numeric_equation_checks+' expert approvals=0');
 return {added,existing:12-added,science};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{build();}catch(e){console.error(e.stack);process.exitCode=1;}
}
