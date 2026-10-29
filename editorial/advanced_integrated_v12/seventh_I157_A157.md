# 第十二辑 I157、A157 题干与解答（专家待审）

## UC-ADV12-I157 Fe(II)两态自旋交叉的配分简并、半人口温度及磁矩涨落

假想八面体Fe(II) d⁶配合物存在S=0低自旋(LS)和S=2高自旋(HS)两热平衡宏态。相对LS，高自旋态的非自旋简并焓差ΔH=+18.00 kJ/mol、振动等附加熵差ΔS=+65.00 J/(mol K)，自旋简并度g_HS/g_LS=5。按独立中心、两态平衡模型K=[HS]/[LS]=5 exp(ΔS/R−ΔH/(RT))，R=8.314462618 J/(mol K)。在T=300.0和350.0 K求高自旋分数；反演高低自旋各占一半的温度；求300 K相对激发能与Schottky涨落热容。若高自旋纯态有效磁矩4.900 μB、低自旋近零，求根均方磁矩、两态概率和并核对分配函数及物理正性、零/高温趋势、化学形式价Fe(II)始终不变的条件。

### 逐步解答
1. 假设八面体Fe(II) d⁶只存在低自旋S=0和高自旋S=2两宏态，低自旋能量及熵为参照零点。

2. 高自旋相对低自旋的非自旋简并焓差ΔH=18.00 kJ/mol，振动/其它熵差ΔS=65.00 J/(mol K)；高自旋自旋简并度2S+1=5。

3. 将自旋简并与ΔS分别记入，配分比K=5 exp(ΔS/R−ΔH/(RT))；不能再重复计算5倍简并。

4. 在300 K下K=9.12300903447，故高自旋分数p=K/(1+K)=0.901215142988，低自旋比例0.0987848570119。

5. 350 K下同一参数给p_HS=0.962373918177，升温促进高自旋态。

6. 半人口条件K(T½)=1，整理出T½=ΔH/[ΔS+R ln5]，该式物理正根唯一。

7. 计算T½=229.645699902 K，且低于300 K，和p_HS(300 K)>1/2一致。

8. 以两能级相对能量0、ΔH计算摩尔平均激发能U=16221.8725738 J/mol。

9. 温度无关能隙下能量涨落热容C=ΔH²p(1−p)/(RT²)=38.5466971539 J/(mol K)，非负。

10. 假设高自旋纯态有效磁矩4.900 μB、低自旋为0，则平均平方磁矩〈μ²〉=p(4.900)²。

11. 得到均方根磁矩4.65168524119 μB；对无序快速平衡体系，直接对磁矩算术平均不符合Curie磁化率加权。

12. 模型仅适用于无配体交换、固定宏态热力学参数及无磁交换相互作用的独立Fe(II)中心；真实自旋交叉可能有弹性协同、热滞后和多重振动谱。

### 数值结果
- high_spin_low_spin_partition_ratio: 9.123009034470115 ratio
- high_spin_fraction_300K: 0.9012151429881299 fraction
- low_spin_fraction_300K: 0.09878485701187012 fraction
- high_spin_fraction_350K: 0.9623739181766685 fraction
- half_population_temperature_K: 229.64569990242165 K
- spin_excitation_energy_J_mol: 16221.872573786337 J/mol
- Schottky_heat_capacity_J_molK: 38.54669715387397 J/(mol K)
- squared_effective_moment_muB2: 21.638175583145003 muB2
- root_mean_square_moment_muB: 4.651685241194314 muB
- state_mixing_entropy_J_molK: 73.31931773308598 J/(mol K)
- partition_probability_backcheck: 0.9012151429881299 fraction
- total_population: 1 fraction
- effective_spin_Gibbs_difference_J_mol: -5514.483407677584 J/mol

## UC-ADV12-A157 双点标准加入吸收定量的基线识别与浓度唯一反演

某假想无机微量分析物通过吸光度标准加入法测定，所有测量均已统一体积及稀释因子。已知独立空白测得背景吸光度A_blank=0.1000，另以同一原样依次加入标准使等效浓度分别增加0.5000及2.5000 mmol/L，实测吸光度分别为0.2500和0.5500。假设A=A_blank+m(C_x+C_spike)，其中m单位为吸光度/(mmol/L)，C_x为原样分析物浓度，标准加入不改变分析物形态，测量范围内线性且无时间漂移。求标定斜率、初始待测浓度（mol/L与μmol/L）、两点扣空白信号、原始吸光度比、未扣空白时的错误浓度估计、在4.000 mL中的分析物微摩尔量；用两点独立反解检验唯一性、质量单位和信号差，并说明为什么未知空白时两点不足以同时确定三个参数。

### 逐步解答
1. 将吸收信号视作两次标准加入的线性关系A_j=A_blank+εℓ(C_x+C_added,j)，其中εℓ及基线在两次测量中均保持不变。

2. 假设样品以固定体积进样，加入标准液后已进行等体积稀释校正；两次标准加入的等效浓度分别0.500与2.500 mmol/L。

3. 观测两次吸光度分别0.2500和0.5500，标准浓度间隔2.000 mmol/L，故斜率为ΔA/ΔC=0.1500 吸光度每mmol/L。

4. 本题仪器响应实际写成A=A_blank+m(C_spike+C_x)，且空白吸光度已由独立空白测量得A_blank=0.1000。

5. 以已知基线扣除，在第一点求初始待测浓度C_x=(0.25−0.10)/0.150000000000−0.5000=0.500000000000 mmol/L。

6. 第二点同样反算C_x=(0.55−0.10)/0.15−2.5000=0.5000 mmol/L，两次交叉检查一致。

7. 斜率由双点差值决定，已知空白则初始浓度唯一；仅有两次信号而无基线或独立标准条件时，不能同时识别全部三个自由参数。

8. 把0.5000 mmol/L转换为0.0005000 mol/L；总试样体积4.000 mL时待测物总量为2.000 μmol。

9. 吸光度是无量纲光学量，斜率单位L/mmol；不应把信号比值误当作组分浓度比。

10. 标准加入必须处于线性吸收区且不改变试样物种形态、pH和离子强度，否则标准斜率不代表内源待测组分。

11. 加入标定需显式处理稀释与体积差，本题已给等效浓度作为稀释校正后的输入。

12. 模型限制包括背景漂移、杂散光、矩阵化学效应、散射及标准纯度问题，单一双点标定并不能替代实验重复性统计。

### 数值结果
- standard_addition_slope_per_mM: 0.15 A/mM
- blank_absorbance: 0.1 dimensionless
- sample_concentration_M: 0.0005 mol/L
- sample_concentration_uM: 500 umol/L
- corrected_initial_absorbance: 0.15 dimensionless
- first_background_corrected_absorbance: 0.15 dimensionless
- second_background_corrected_absorbance: 0.45000000000000007 dimensionless
- raw_signal_ratio: 2.2 ratio
- sample_over_1mM_standard: 0.5 ratio
- auxiliary_diffusion_dimensionless: 0.00002 dimensionless
- uncorrected_signal_to_slope_low_mM: 1.6666666666666667 mM
- uncorrected_signal_to_slope_high_mM: 3.666666666666667 mM
- measured_signal_delta: 0.3 dimensionless
- sample_amount_umol: 2 umol

