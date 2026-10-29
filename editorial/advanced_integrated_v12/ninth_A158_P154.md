# 第十二辑 A158 与 P154 完整中文解答

专家待审，不允许进入正式发布。

## UC-ADV12-A158 IRMS Rayleigh碳同位素分馏的双点反演与重轻原子库存闭合

### 题干
某假想有机溶剂挥发过程由稳定碳同位素比质谱(IRMS)监测，初始碳总库存为1.000 mol，初始重轻同位素比R₀=N(¹³C)/N(¹²C)=0.01120，报告δ¹³C使用同位素标准比R_std=0.01118。体系为完全混合储库，瞬时气相移除产物比R_inst=αR_res，常数动力学分馏因子α=0.9800，无外源碳交换、无未收集挥发物。轻同位素剩余比例f=N₁₂/N₁₂,0，测得两阶段f₁=0.4000和f₂=0.7000。推导Rayleigh分馏精确公式，求两个阶段剩余库同位素比和δ¹³C并由这两个比值反演α；在f₁阶段分别计算剩余¹²C与¹³C、累计产物的同位素摩尔数及平均比与δ、当时瞬时产物的比与δ。核验双同位素原子库存守恒、瞬时与累计差别和δ单位，讨论分馏常数失效条件。

### 严密解答
1. 定义IRMS重轻同位素比R=N(¹³C)/N(¹²C)，初始总碳1.000 mol及R₀=0.01120唯一决定两同位素初始物质的量N₁₂,0=1/(1+R₀)、N₁₃,0=R₀/(1+R₀)。

2. 分馏因子α=R_inst/R_res=0.9800，使瞬时逸出产物相对贫¹³C；剩余库则逐渐富集¹³C。

3. 严格令f=N₁₂/N₁₂,0为剩余轻同位素比例，而非剩余总碳比例，避免有限R下的近似误差。

4. 两同位素的微分库存方程dN₁₃/dN₁₂=αN₁₃/N₁₂积分，得到N₁₃=N₁₃,0f^α及Rayleigh残余比R_res=R₀f^(α−1)。

5. 对f₁=0.4000求R_res=0.0114071413438；对f₂=0.7000求0.0112801808324，因α<1且f₁<f₂，前者更高。

6. 用两观测反演α=1+ln(R₁/R₂)/ln(f₁/f₂)=0.980000000000，这要求f₁和f₂不同、测量同一原始均匀库。

7. 同位素δ记号δ¹³C=1000(R/R_std−1)‰，本题参考比R_std=0.01118；不能用原子丰度直接代替R。

8. 初始和两个剩余阶段的δ依次为1.78890876565、20.3167570474、8.96071845879‰。

9. f₁处残余¹²C=0.395569620253 mol、¹³C=0.00451231856954 mol，由初始库存减去剩余量，分别得到累计去除¹²C=0.593354430380及¹³C=0.00656363079755 mol。

10. 累计产物R_cum=0.0110619057708、δ_cum=-10.5629900888‰，为全过程平均，不能与当前微分产物混淆。

11. f₁时瞬时产物比R_inst=αR_res=0.0111789985169、δ_inst=-0.0895780935837‰，其比值体现此刻的分馏而非累积总量。

12. 以¹²C和¹³C分别检查：残余原子摩尔数+累计产物原子摩尔数恰等于各自初始库存，这比只检查总碳更严格。

13. 本模型要求封闭进料、单一充分混合库、常数α和同位素定量测量；温度依赖、重新混合或反应机理变化会破坏Rayleigh指数规律。

### 答案向量
- initial_12C_mol = 0.9889240506329113 derived
- initial_13C_mol = 0.011075949367088606 derived
- residual_R_f04 = 0.011407141343789525 derived
- residual_R_f07 = 0.01128018083236926 derived
- reconstructed_alpha = 0.9800000000000002 derived
- initial_delta13C_permil = 1.7889087656528524 derived
- residual_delta_f04_permil = 20.316757047363467 derived
- residual_delta_f07_permil = 8.960718458788763 derived
- remaining_12C_f04_mol = 0.39556962025316456 derived
- remaining_13C_f04_mol = 0.004512318569536996 derived
- cumulative_product_12C_mol = 0.5933544303797468 derived
- cumulative_product_13C_mol = 0.00656363079755161 derived
- cumulative_product_isotope_ratio = 0.011061905770806981 derived
- cumulative_product_delta13C_permil = -10.562990088821111 derived
- instantaneous_product_isotope_ratio = 0.011178998516913735 derived
- instantaneous_product_delta13C_permil = -0.08957809358367541 derived
- total_12C_inventory_mol = 0.9889240506329113 derived
- total_13C_inventory_mol = 0.011075949367088606 derived

审查状态：awaiting_expert_review，pending_cross_series_model_review，publishable=false。

## UC-ADV12-P154 Soret热扩散封闭槽的零物质通量、指数浓度剖面及熵产生

### 题干
某封闭一维溶剂槽长度L=1.000 mm，左、右端分别维持300.0 K及340.0 K，初始溶质均匀平均浓度c̄=10.00 mol/m³。溶质不带电，不发生反应、对流或蒸发，且给定Fick扩散系数D=1.000×10⁻⁹ m²/s及Soret热扩散系数S_T=+0.03000 K⁻¹，温度沿长度线性分布。稳态通量J=−D[dc/dx+c S_T dT/dx]=0。求完整指数浓度剖面、冷/热端与中点浓度、富集比、归一库存、在中点分别由浓度梯度和温度梯度驱动的通量及其抵消。热导率κ=0.6000 W/(m K)，R=8.314462618 J/(mol K)，计算Fourier热流、温度中点传热熵产生率κ(∇T)²/T²、两端理想渗透压及L²/D扩散时间尺度，核验量纲、熵产生正性与真实大温差体系局限。

### 严密解答
1. 建立无对流一维封闭槽x∈[0,L]，端温T₀=300 K、T₁=340 K，溶剂与溶质保持均匀定容，温度梯度ΔT/L恒定。

2. 给定恒定Fick扩散系数D和Soret系数S_T，溶质通量J=−D(dc/dx+cS_TdT/dx)，封闭两端要求稳态J=0。

3. 约去正D，分离变量得到dlnc/dx=−S_TΔT/L，积分得c(x)=c(0)exp(−Ax/L)，其中A=S_TΔT。

4. 以S_T=0.03 K⁻¹、ΔT=40.00 K求A=1.20000000000，热端与冷端浓度比c(L)/c(0)=e^(−A)=0.301194211912。

5. 由初始均匀平均浓度c̄=10.00 mol/m³和无物料出入，稳态必须满足∫₀ᴸ c(x)dx=c̄L。

6. 对指数剖面积分求c(0)=c̄A/(1−e^(−A))=17.1721531283 mol/m³，确保归一后与初始库存完全相等。

7. 计算热端c(L)=5.17215312832 mol/m³，中点c(L/2)=9.42427745361 mol/m³；正Soret系数造成热端溶质贫化。

8. 中点梯度dc/dx=−Ac_mid/L=-11309.1329443 mol/m⁴。

9. 中点Fick通量J_F=−D dc/dx=0.0000113091329443 mol/(m²s)，符号指向热端。

10. 中点热扩散通量J_T=−DS_Tc_midΔT/L=-0.0000113091329443 mol/(m²s)，与J_F正好相消，J总量为零。

11. 给定导热率κ=0.6000 W/(m K)，Fourier热流q=−κΔT/L=-24000.0000000 W/m²，热由高温端流向低温端。

12. 中点传热熵产生率σ=κ(∇T)²/T_mid²=9375.00000000 W/(m³K)，为正；物种无净流不代表热过程可逆。

13. 以局部理想渗透压π=cRT求冷、热端分别42833.1675768与14621.2491056 Pa，温度必须取开尔文。

14. 该常系数稀溶液Soret模型忽略溶剂密度、热-物质流的Onsager反作用、温度依赖输运系数和盐的电扩散；若有对流不能继续采用纯指数稳态。

### 答案向量
- dimensionless_Soret_exponent = 1.2 dimensionless
- hot_over_cold_ratio = 0.30119421191220214 ratio
- cold_concentration_mol_m3 = 17.17215312832 mol/m3
- hot_concentration_mol_m3 = 5.17215312832 mol/m3
- midpoint_concentration_mol_m3 = 9.424277453610456 mol/m3
- cold_hot_concentration_enrichment = 3.320116922736547 ratio
- midpoint_concentration_gradient_mol_m4 = -11309.132944332547 mol/m4
- midpoint_Fick_flux = 0.000011309132944332548 mol/(m2s)
- midpoint_Soret_flux = -0.000011309132944332548 mol/(m2s)
- midpoint_net_molar_flux = 0 mol/(m2s)
- conduction_heat_flux_W_m2 = -24000 W/m2
- midpoint_entropy_production_W_m3K = 9375 W/(m3K)
- given_inventory_mol_m2 = 0.01 mol/m2
- reconstructed_inventory_mol_m2 = 0.010000000000000002 mol/m2
- diffusive_time_s = 999.9999999999999 s
- cold_osmotic_pressure_Pa = 42833.16757679652 Pa
- hot_osmotic_pressure_Pa = 14621.249105596055 Pa

审查状态：awaiting_expert_review，pending_cross_series_model_review，publishable=false。

