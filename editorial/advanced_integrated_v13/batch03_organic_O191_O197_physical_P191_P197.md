# 第十三辑最后14道：有机 O191—O197 / 物化 P191—P197

## UC-ADV13-O191 串联不可逆一级反应A→B→C的中间体峰值与质量守恒

初始有机底物A0=0.02000 mol/L，单分子串联反应A→B→C由两步不可逆一级反应控制，k1=0.1000 s⁻¹、k2=0.02500 s⁻¹。假定温度恒定、B与C无其它消耗。求t=10.00 s时三物种浓度，B峰值出现时间、峰值浓度、最终C产率、t=10 s时各物种分率及总骨架守恒；证明B在峰值时生成速率k1A和损耗速率k2B相等。

**模型：** A=A0e^(−k1t)，B=A0k1/(k2−k1)[e^(−k1t)−e^(−k2t)]，C=A0−A−B；tmax=ln(k1/k2)/(k1−k2)。

1. 原始题目与物理限制：初始有机底物A0=0.02000 mol/L，单分子串联反应A→B→C由两步不可逆一级反应控制，k1=0.1000 s⁻¹、k2=0.02500 s⁻¹。假定温度恒定、B与C无其它消耗。求t=10.00 s时三物种浓度，B峰值出现时间、峰值浓度、最终C产率、t=10 s时各物种分率及总骨架守恒；证明B在峰值时生成速率k1A和损耗速率k2B相等。

2. 建立物理化学模型与完整解析式：A=A0e^(−k1t)，B=A0k1/(k2−k1)[e^(−k1t)−e^(−k2t)]，C=A0−A−B；tmax=ln(k1/k2)/(k1−k2)。

3. 数学推导与问题核心辨析：由积分因子法解B'=k1A−k2B并求dB/dt=0，B最大值不等于A的半衰期，守恒检查需要三组分相加。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：concentration_A_t10=0.007357588823429 mol/L；concentration_B_t10=0.01095790245067 mol/L；concentration_C_t10=0.001684508725905 mol/L；intermediate_peak_time_s=18.48392481493 s。

6. 由状态公式求出中间体或分支：intermediate_peak_concentration_M=0.01259921049895 mol/L；fraction_A_t10=0.3678794411714 fraction；fraction_B_t10=0.5478951225333 fraction。

7. 其余全部答案及验证量：fraction_C_t10=0.08422543629527 fraction；skeleton_inventory_M=0.02000000000000 mol/L；intermediate_generation_at_peak_M_s=0.0003149802624737 mol/(L s)。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- concentration_A_t10=0.007357588823429 mol/L
- concentration_B_t10=0.01095790245067 mol/L
- concentration_C_t10=0.001684508725905 mol/L
- intermediate_peak_time_s=18.48392481493 s
- intermediate_peak_concentration_M=0.01259921049895 mol/L
- fraction_A_t10=0.3678794411714 fraction
- fraction_B_t10=0.5478951225333 fraction
- fraction_C_t10=0.08422543629527 fraction
- skeleton_inventory_M=0.02000000000000 mol/L
- intermediate_generation_at_peak_M_s=0.0003149802624737 mol/(L s)

## UC-ADV13-O192 分子内内酯化与二分子酯化竞争的有效摩尔浓度

某ω-羟基酸的分子内内酯化单分子速率kc=0.02000 s⁻¹，另一分子提供醇基的分子间酯化速率常数k2=5.000 L/(mol s)。假设外部醇基浓度始终保持L=0.002000或0.02000 mol/L（由大储库补给），仅有单分子内酯P与外部酯Q两稳定产物，初始底物C0=0.01000 mol/L，反应60.00 s。计算有效摩尔浓度EM=kc/k2、两条件分支比、60 s残余底物和内酯量、分子间酯量以及L与EM相等时两路径分支。

**模型：** kobs=kc+k2L，EM=kc/k2，fcycl=kc/kobs，C(t)=C0exp(−kobst)。

1. 原始题目与物理限制：某ω-羟基酸的分子内内酯化单分子速率kc=0.02000 s⁻¹，另一分子提供醇基的分子间酯化速率常数k2=5.000 L/(mol s)。假设外部醇基浓度始终保持L=0.002000或0.02000 mol/L（由大储库补给），仅有单分子内酯P与外部酯Q两稳定产物，初始底物C0=0.01000 mol/L，反应60.00 s。计算有效摩尔浓度EM=kc/k2、两条件分支比、60 s残余底物和内酯量、分子间酯量以及L与EM相等时两路径分支。

2. 建立物理化学模型与完整解析式：kobs=kc+k2L，EM=kc/k2，fcycl=kc/kobs，C(t)=C0exp(−kobst)。

3. 数学推导与问题核心辨析：分子内与分子间通道同属一级有效速率，但外部醇基浓度由储库维持；EM是使两速率相等的等效浓度，而非实际局部浓度测量。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：effective_molarity_M=0.004000000000000 mol/L；kobs_low_s=0.03000000000000 s^-1；kobs_high_s=0.1200000000000 s^-1；cyclization_fraction_low=0.6666666666667 fraction。

6. 由状态公式求出中间体或分支：cyclization_fraction_high=0.1666666666667 fraction；lactone_t60_low_M=0.005564674078523 mol/L；lactone_t60_high_M=0.001665422356986 mol/L；intermolecular_ester_t60_low_M=0.002782337039261 mol/L。

7. 其余全部答案及验证量：intermolecular_ester_t60_high_M=0.008327111784930 mol/L；remaining_start_low_M=0.001652988882216 mol/L；remaining_start_high_M=0.000007465858083767 mol/L；cyclization_fraction_at_EM=0.5000000000000 fraction。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- effective_molarity_M=0.004000000000000 mol/L
- kobs_low_s=0.03000000000000 s^-1
- kobs_high_s=0.1200000000000 s^-1
- cyclization_fraction_low=0.6666666666667 fraction
- cyclization_fraction_high=0.1666666666667 fraction
- lactone_t60_low_M=0.005564674078523 mol/L
- lactone_t60_high_M=0.001665422356986 mol/L
- intermolecular_ester_t60_low_M=0.002782337039261 mol/L
- intermolecular_ester_t60_high_M=0.008327111784930 mol/L
- remaining_start_low_M=0.001652988882216 mol/L
- remaining_start_high_M=0.000007465858083767 mol/L
- cyclization_fraction_at_EM=0.5000000000000 fraction

## UC-ADV13-O193 丙烯腈与丙烯酸酯的同位素动力学分流效应

某亲核试剂Nu与等浓度的乙烯基受体XH和其同位素标记XD发生并行不可逆Michael加成；两受体自由浓度由外部恒定库维持cH=cD=0.05000 mol/L。kH=4.000、kD=2.500 L/(mol s)，Nu初始0.01000 mol/L，t=15.00 s。求总拟一级速率、两个产物分支、t=15 s时两产物量、剩余Nu、通道动力学同位素效应比、初始反应通量以及两产物同位素标记分数。假设同位素标记不参与后续交换。

**模型：** kobs=kH cH+kD cD，yH=kHcH/kobs，yD=kDcD/kobs，Pi=C0(1−e^(−kobs t))yi。

1. 原始题目与物理限制：某亲核试剂Nu与等浓度的乙烯基受体XH和其同位素标记XD发生并行不可逆Michael加成；两受体自由浓度由外部恒定库维持cH=cD=0.05000 mol/L。kH=4.000、kD=2.500 L/(mol s)，Nu初始0.01000 mol/L，t=15.00 s。求总拟一级速率、两个产物分支、t=15 s时两产物量、剩余Nu、通道动力学同位素效应比、初始反应通量以及两产物同位素标记分数。假设同位素标记不参与后续交换。

2. 建立物理化学模型与完整解析式：kobs=kH cH+kD cD，yH=kHcH/kobs，yD=kDcD/kobs，Pi=C0(1−e^(−kobs t))yi。

3. 数学推导与问题核心辨析：动力学同位素效应是本征速度比kH/kD；实际产物比还要乘反应物浓度比，此题两受体相等才相同。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：rate_total_s=0.3250000000000 s^-1；intrinsic_KIE=1.600000000000 ratio；branch_H=0.6153846153846 fraction；branch_D=0.3846153846154 fraction。

6. 由状态公式求出中间体或分支：product_H_t15_M=0.006106860958653 mol/L；product_D_t15_M=0.003816788099158 mol/L；remaining_Nu_M=0.00007635094218860 mol/L。

7. 其余全部答案及验证量：converted_Nu_fraction=0.9923649057811 fraction；H_product_over_D_product=1.600000000000 ratio；initial_H_flux_M_s=0.002000000000000 mol/(L s)。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- rate_total_s=0.3250000000000 s^-1
- intrinsic_KIE=1.600000000000 ratio
- branch_H=0.6153846153846 fraction
- branch_D=0.3846153846154 fraction
- product_H_t15_M=0.006106860958653 mol/L
- product_D_t15_M=0.003816788099158 mol/L
- remaining_Nu_M=0.00007635094218860 mol/L
- converted_Nu_fraction=0.9923649057811 fraction
- H_product_over_D_product=1.600000000000 ratio
- initial_H_flux_M_s=0.002000000000000 mol/(L s)

## UC-ADV13-O194 两级保护基脱保护的串联转化率与中间体库存

双保护基有机中间体A先以一级k1=0.01500 s⁻¹去掉Boc形成仍带另一保护基的中间体B，再以一级k2=0.06000 s⁻¹脱去另一保护基产生游离产物C，过程不可逆且无并行副反应，初始A=0.02000 mol/L，B=C=0。计算t=30.00 s与100.0 s下A、B、C浓度与最终C分率，并求中间体B最高浓度出现时间；核对保护基转化不是简单把两步转化分率相乘。

**模型：** A(t)=A0e^(−k1t)，B=A0 k1/(k2−k1)(e^(−k1t)−e^(−k2t))，C=A0−A−B。

1. 原始题目与物理限制：双保护基有机中间体A先以一级k1=0.01500 s⁻¹去掉Boc形成仍带另一保护基的中间体B，再以一级k2=0.06000 s⁻¹脱去另一保护基产生游离产物C，过程不可逆且无并行副反应，初始A=0.02000 mol/L，B=C=0。计算t=30.00 s与100.0 s下A、B、C浓度与最终C分率，并求中间体B最高浓度出现时间；核对保护基转化不是简单把两步转化分率相乘。

2. 建立物理化学模型与完整解析式：A(t)=A0e^(−k1t)，B=A0 k1/(k2−k1)(e^(−k1t)−e^(−k2t))，C=A0−A−B。

3. 数学推导与问题核心辨析：反应B(t)同时有A的生成和向C的损耗，最大B时k1[A]=k2[B]，每时刻只有一个底物骨架的三种保护程度。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：A_t30_M=0.01275256303244 mol/L；B_t30_M=0.003148861756001 mol/L；C_t30_M=0.004098575211563 mol/L；A_t100_M=0.004462603202969 mol/L。

6. 由状态公式求出中间体或分支：B_t100_M=0.001471009386478 mol/L；C_t100_M=0.01406638741055 mol/L；B_peak_time_s=30.80654135822 s。

7. 其余全部答案及验证量：B_peak_concentration_M=0.003149802624737 mol/L；fully_deprotected_fraction_t100=0.7033193705276 fraction；skeleton_total_t100_M=0.02000000000000 mol/L。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- A_t30_M=0.01275256303244 mol/L
- B_t30_M=0.003148861756001 mol/L
- C_t30_M=0.004098575211563 mol/L
- A_t100_M=0.004462603202969 mol/L
- B_t100_M=0.001471009386478 mol/L
- C_t100_M=0.01406638741055 mol/L
- B_peak_time_s=30.80654135822 s
- B_peak_concentration_M=0.003149802624737 mol/L
- fully_deprotected_fraction_t100=0.7033193705276 fraction
- skeleton_total_t100_M=0.02000000000000 mol/L

## UC-ADV13-O195 E1cB消除的碳负离子酸碱预平衡与条件一级速率

某β-卤代羰基底物S通过快速可逆去质子化形成共轭碱C⁻，并由C⁻以一级kelim=0.08000 s⁻¹不可逆消除为烯酮P。酸性底物pKa=9.000，外部大容量缓冲保持pH=8.000或10.000，并假定去质子化与复质子化远快于消除。底物总(S+C)=0.01000 mol/L初始，在t=20.00 s考察。求两个pH下活性C⁻分率、有效一级kobs、总底物余量、P生成量、半衰期及有效速率比。无其它分解与共轭碱双聚反应。

**模型：** fC=10^(pH−pKa)/[1+10^(pH−pKa)]，kobs=kelim fC，P=C0(1−e^(−kobs t))。

1. 原始题目与物理限制：某β-卤代羰基底物S通过快速可逆去质子化形成共轭碱C⁻，并由C⁻以一级kelim=0.08000 s⁻¹不可逆消除为烯酮P。酸性底物pKa=9.000，外部大容量缓冲保持pH=8.000或10.000，并假定去质子化与复质子化远快于消除。底物总(S+C)=0.01000 mol/L初始，在t=20.00 s考察。求两个pH下活性C⁻分率、有效一级kobs、总底物余量、P生成量、半衰期及有效速率比。无其它分解与共轭碱双聚反应。

2. 建立物理化学模型与完整解析式：fC=10^(pH−pKa)/[1+10^(pH−pKa)]，kobs=kelim fC，P=C0(1−e^(−kobs t))。

3. 数学推导与问题核心辨析：平衡离子分布随pH剧变，只有活性碳负离子进入化学消除通道；消除速率常数和预平衡分数不可混作同一量。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：anion_fraction_pH8=0.09090909090909 fraction；anion_fraction_pH10=0.9090909090909 fraction；kobs_pH8_s=0.007272727272727 s^-1；kobs_pH10_s=0.07272727272727 s^-1。

6. 由状态公式求出中间体或分支：product_t20_pH8_M=0.001353708094924 mol/L；product_t20_pH10_M=0.007664935209091 mol/L；remaining_t20_pH8_M=0.008646291905076 mol/L；remaining_t20_pH10_M=0.002335064790909 mol/L。

7. 其余全部答案及验证量：half_life_pH8_s=95.30773732699 s；half_life_pH10_s=9.530773732699 s；rate_ratio=10.00000000000 ratio。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- anion_fraction_pH8=0.09090909090909 fraction
- anion_fraction_pH10=0.9090909090909 fraction
- kobs_pH8_s=0.007272727272727 s^-1
- kobs_pH10_s=0.07272727272727 s^-1
- product_t20_pH8_M=0.001353708094924 mol/L
- product_t20_pH10_M=0.007664935209091 mol/L
- remaining_t20_pH8_M=0.008646291905076 mol/L
- remaining_t20_pH10_M=0.002335064790909 mol/L
- half_life_pH8_s=95.30773732699 s
- half_life_pH10_s=9.530773732699 s
- rate_ratio=10.00000000000 ratio

## UC-ADV13-O196 双波长光异构稳态的交叉吸收–量子产率比

某假想有机E/Z光异构体系在恒定单色光下的有效单分子正向E→Z光速率kEZ=0.02000 s⁻¹、反向Z→E光速率kZE=0.005000 s⁻¹，热互变另增加E→Z速率0.002000 s⁻¹和Z→E速率0.008000 s⁻¹。四过程独立且均一级，总初始E=0.01000 mol/L、Z=0。求受光条件下总正逆率、光稳态Z分率、达到稳态的松弛时间、t=100.0 s时E与Z浓度、Z/E比及关闭光照后纯热稳态Z分率。不要把光稳态误当热力学平衡的必然值。

**模型：** kforward=kEZ+kthermal,EZ；kreverse=kZE+kthermal,ZE；fZ,ss=kforward/(kforward+kreverse)，Z(t)=C fZ,ss(1−e^(−(kforward+kreverse)t))。

1. 原始题目与物理限制：某假想有机E/Z光异构体系在恒定单色光下的有效单分子正向E→Z光速率kEZ=0.02000 s⁻¹、反向Z→E光速率kZE=0.005000 s⁻¹，热互变另增加E→Z速率0.002000 s⁻¹和Z→E速率0.008000 s⁻¹。四过程独立且均一级，总初始E=0.01000 mol/L、Z=0。求受光条件下总正逆率、光稳态Z分率、达到稳态的松弛时间、t=100.0 s时E与Z浓度、Z/E比及关闭光照后纯热稳态Z分率。不要把光稳态误当热力学平衡的必然值。

2. 建立物理化学模型与完整解析式：kforward=kEZ+kthermal,EZ；kreverse=kZE+kthermal,ZE；fZ,ss=kforward/(kforward+kreverse)，Z(t)=C fZ,ss(1−e^(−(kforward+kreverse)t))。

3. 数学推导与问题核心辨析：竞争光化学与热通道的稳态由所有通道速率之和控制，停止光照会使稳态改变；若有光漂白或波长依赖吸收系数变动则模型需扩展。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：total_forward_s=0.02200000000000 s^-1；total_reverse_s=0.01300000000000 s^-1；steady_Z_fraction_illum=0.6285714285714 fraction；relaxation_time_s=28.57142857143 s。

6. 由状态公式求出中间体或分支：Z_fraction_t100=0.6095902161345 fraction；Z_concentration_t100_M=0.006095902161345 mol/L；E_concentration_t100_M=0.003904097838655 mol/L。

7. 其余全部答案及验证量：photostationary_Z_over_E=1.692307692308 ratio；thermal_only_Z_fraction=0.2000000000000 fraction；steady_light_over_thermal_fraction=3.142857142857 ratio。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- total_forward_s=0.02200000000000 s^-1
- total_reverse_s=0.01300000000000 s^-1
- steady_Z_fraction_illum=0.6285714285714 fraction
- relaxation_time_s=28.57142857143 s
- Z_fraction_t100=0.6095902161345 fraction
- Z_concentration_t100_M=0.006095902161345 mol/L
- E_concentration_t100_M=0.003904097838655 mol/L
- photostationary_Z_over_E=1.692307692308 ratio
- thermal_only_Z_fraction=0.2000000000000 fraction
- steady_light_over_thermal_fraction=3.142857142857 ratio

## UC-ADV13-O197 区域选择性环氧开环双路径与产物碳骨架分配

一个不对称环氧化物E在一假想路易斯酸/亲核试剂环境下通过两个不可逆竞争通道开环，末端碳受攻生成P1的拟一级k1=0.03000 s⁻¹，较取代碳受攻生成P2的拟一级k2=0.01500 s⁻¹。底物初始C0=0.02500 mol/L，时间t=40.00 s，产物稳定且没有再成环与聚合。求瞬时与终态产物区域选择性、反应进度、两产物浓度、底物剩余量、半衰期以及高取代位进攻产物的分率；解释此处速度常数已包含亲核体浓度而不能直接比较本征SN1/SN2机制。

**模型：** f1=k1/(k1+k2)，f2=k2/(k1+k2)，Pi=C0(1−e^(−kt))fi，E=C0e^(−kt)。

1. 原始题目与物理限制：一个不对称环氧化物E在一假想路易斯酸/亲核试剂环境下通过两个不可逆竞争通道开环，末端碳受攻生成P1的拟一级k1=0.03000 s⁻¹，较取代碳受攻生成P2的拟一级k2=0.01500 s⁻¹。底物初始C0=0.02500 mol/L，时间t=40.00 s，产物稳定且没有再成环与聚合。求瞬时与终态产物区域选择性、反应进度、两产物浓度、底物剩余量、半衰期以及高取代位进攻产物的分率；解释此处速度常数已包含亲核体浓度而不能直接比较本征SN1/SN2机制。

2. 建立物理化学模型与完整解析式：f1=k1/(k1+k2)，f2=k2/(k1+k2)，Pi=C0(1−e^(−kt))fi，E=C0e^(−kt)。

3. 数学推导与问题核心辨析：两个通道消耗同一个底物骨架，合并损耗率k=k1+k2，后续产物不会互变，最终P1:P2与速率比一致。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：observed_rate_s=0.04500000000000 s^-1；regioselectivity_P1_fraction=0.6666666666667 fraction；regioselectivity_P2_fraction=0.3333333333333 fraction；product_P1_t40_M=0.01391168519631 mol/L。

6. 由状态公式求出中间体或分支：product_P2_t40_M=0.006955842598153 mol/L；remaining_epoxide_t40_M=0.004132472205540 mol/L；conversion_t40=0.8347011117784 fraction。

7. 其余全部答案及验证量：half_life_s=15.40327067911 s；product_P1_over_P2=2.000000000000 ratio；carbon_skeleton_inventory_M=0.02500000000000 mol/L。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- observed_rate_s=0.04500000000000 s^-1
- regioselectivity_P1_fraction=0.6666666666667 fraction
- regioselectivity_P2_fraction=0.3333333333333 fraction
- product_P1_t40_M=0.01391168519631 mol/L
- product_P2_t40_M=0.006955842598153 mol/L
- remaining_epoxide_t40_M=0.004132472205540 mol/L
- conversion_t40=0.8347011117784 fraction
- half_life_s=15.40327067911 s
- product_P1_over_P2=2.000000000000 ratio
- carbon_skeleton_inventory_M=0.02500000000000 mol/L

## UC-ADV13-P191 Gibbs界面吸附等温式由表面张力斜率求表面过量

298.15 K一种假想非离子表面活性剂在稀溶液中遵循γ=γ0−a ln(c/c0)，其中γ0=0.07200 N/m、a=0.006000 N/m，浓度c0=0.001000 mol/L，c分别为0.002000和0.01000 mol/L，假定溶液活度=相对浓度、液体表面平衡且溶剂表面过量基准取0。Gibbs吸附式Γ=−(1/RT)(dγ/dln a_s)=a/(RT)（mol/m²），R=8.314462618 J/(mol K)。求两表面张力、表面过量、每摩尔界面活性剂对应的有效面积1/(NA Γ)、表面张力降幅及将c倍增时的张力变化，说明非离子无电离因子修正。

**模型：** Γ=−(1/RT)dγ/dln(c/c0)=a/(RT)，γ(c)=γ0−a ln(c/c0)。

1. 原始题目与物理限制：298.15 K一种假想非离子表面活性剂在稀溶液中遵循γ=γ0−a ln(c/c0)，其中γ0=0.07200 N/m、a=0.006000 N/m，浓度c0=0.001000 mol/L，c分别为0.002000和0.01000 mol/L，假定溶液活度=相对浓度、液体表面平衡且溶剂表面过量基准取0。Gibbs吸附式Γ=−(1/RT)(dγ/dln a_s)=a/(RT)（mol/m²），R=8.314462618 J/(mol K)。求两表面张力、表面过量、每摩尔界面活性剂对应的有效面积1/(NA Γ)、表面张力降幅及将c倍增时的张力变化，说明非离子无电离因子修正。

2. 建立物理化学模型与完整解析式：Γ=−(1/RT)dγ/dln(c/c0)=a/(RT)，γ(c)=γ0−a ln(c/c0)。

3. 数学推导与问题核心辨析：γ的斜率为能量每面积，RT按J/mol因此Γ单位mol/m²，分子面积从NAΓ求倒数。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：surface_tension_c0p002_N_m=0.06784111691664 N/m；surface_tension_c0p01_N_m=0.05818448944204 N/m；surface_excess_mol_m2=0.000002420372732751 mol/m2；area_per_molecule_m2=6.860674989040e-19 m2。

6. 由状态公式求出中间体或分支：area_per_molecule_nm2=0.6860674989040 nm2；tension_drop_at_high_N_m=0.01381551055796 N/m；tension_drop_between_states_N_m=0.009656627474605 N/m。

7. 其余全部答案及验证量：tension_change_per_doubling_N_m=0.004158883083360 N/m；adsorbed_molecules_per_m2=1.457582528829e+18 molecules/m2；tension_ratio_high_to_low=0.8576581885220 ratio。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- surface_tension_c0p002_N_m=0.06784111691664 N/m
- surface_tension_c0p01_N_m=0.05818448944204 N/m
- surface_excess_mol_m2=0.000002420372732751 mol/m2
- area_per_molecule_m2=6.860674989040e-19 m2
- area_per_molecule_nm2=0.6860674989040 nm2
- tension_drop_at_high_N_m=0.01381551055796 N/m
- tension_drop_between_states_N_m=0.009656627474605 N/m
- tension_change_per_doubling_N_m=0.004158883083360 N/m
- adsorbed_molecules_per_m2=1.457582528829e+18 molecules/m2
- tension_ratio_high_to_low=0.8576581885220 ratio

## UC-ADV13-P192 理想非电解质凝固点降低与低温化学势近似

某理想非电解质溶于水时凝固点降低近似ΔTf=Kf m，不发生电离，水的凝固点下降常数Kf=1.860 K kg/mol。比较尿素0.2000 mol/kg和甘油0.5000 mol/kg两种互不混合的水溶液，以纯水基准Tf0=273.15 K。计算两溶液的降温、凝固点(K与°C)、两个降温比、冰点的相对Kelvin变化量和对应的溶剂质量1.000 kg下需要加入的溶质物质的量。指出冰开始析出时本题只是低浓度理想近似，不代表整个冻结过程降温保持不变。

**模型：** ΔTf=Kf m，Tf=Tf0−ΔTf，m=nsolute/(kg solvent)。

1. 原始题目与物理限制：某理想非电解质溶于水时凝固点降低近似ΔTf=Kf m，不发生电离，水的凝固点下降常数Kf=1.860 K kg/mol。比较尿素0.2000 mol/kg和甘油0.5000 mol/kg两种互不混合的水溶液，以纯水基准Tf0=273.15 K。计算两溶液的降温、凝固点(K与°C)、两个降温比、冰点的相对Kelvin变化量和对应的溶剂质量1.000 kg下需要加入的溶质物质的量。指出冰开始析出时本题只是低浓度理想近似，不代表整个冻结过程降温保持不变。

2. 建立物理化学模型与完整解析式：ΔTf=Kf m，Tf=Tf0−ΔTf，m=nsolute/(kg solvent)。

3. 数学推导与问题核心辨析：非电解质的van't Hoff因子取1，ΔTf和Kelvin温差数值相同；浓度以每kg溶剂为基准，不是每kg溶液。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：depression_urea_K=0.3720000000000 K；depression_glycerol_K=0.9300000000000 K；Tf_urea_K=272.7780000000 K；Tf_glycerol_K=272.2200000000 K。

6. 由状态公式求出中间体或分支：Tf_urea_C=-0.3720000000000 degC；Tf_glycerol_C=-0.9300000000000 degC；depression_ratio_glycerol_urea=2.500000000000 ratio。

7. 其余全部答案及验证量：difference_freezing_T_K=0.5580000000000 K；moles_urea_per_1kg_solvent=0.2000000000000 mol；moles_glycerol_per_1kg_solvent=0.5000000000000 mol。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- depression_urea_K=0.3720000000000 K
- depression_glycerol_K=0.9300000000000 K
- Tf_urea_K=272.7780000000 K
- Tf_glycerol_K=272.2200000000 K
- Tf_urea_C=-0.3720000000000 degC
- Tf_glycerol_C=-0.9300000000000 degC
- depression_ratio_glycerol_urea=2.500000000000 ratio
- difference_freezing_T_K=0.5580000000000 K
- moles_urea_per_1kg_solvent=0.2000000000000 mol
- moles_glycerol_per_1kg_solvent=0.5000000000000 mol

## UC-ADV13-P193 Joule–Thomson等焓节流冷却的两压力状态与线性近似

一种非理想气体在规定温度和压强区间内Joule–Thomson系数保持μJT=(∂T/∂P)H=+0.2500 K/bar。初态T1=300.0 K、P1=100.0 bar，在节流阀上压强降至P2=10.00 bar，忽略动能、位能变化并按等焓、无外界做功、不可逆节流。另比较只降至P3=50.00 bar。求两终态温度、温降、压强差、冷却率（K/MPa）、若μJT换为−0.1000 K/bar时的反转加热终态及在P2时的温度差；解释节流过程中H守恒不代表S守恒。

**模型：** T2=T1+μJT(P2−P1)，ΔT=μJT ΔP；1 MPa=10 bar。

1. 原始题目与物理限制：一种非理想气体在规定温度和压强区间内Joule–Thomson系数保持μJT=(∂T/∂P)H=+0.2500 K/bar。初态T1=300.0 K、P1=100.0 bar，在节流阀上压强降至P2=10.00 bar，忽略动能、位能变化并按等焓、无外界做功、不可逆节流。另比较只降至P3=50.00 bar。求两终态温度、温降、压强差、冷却率（K/MPa）、若μJT换为−0.1000 K/bar时的反转加热终态及在P2时的温度差；解释节流过程中H守恒不代表S守恒。

2. 建立物理化学模型与完整解析式：T2=T1+μJT(P2−P1)，ΔT=μJT ΔP；1 MPa=10 bar。

3. 数学推导与问题核心辨析：μJT的单位是K/bar，压强差负时正μJT产生冷却；阀的熵增需独立不可逆热力学分析。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：final_T_P10_K=277.5000000000 K；final_T_P50_K=287.5000000000 K；drop_100to10_K=22.50000000000 K；drop_100to50_K=12.50000000000 K。

6. 由状态公式求出中间体或分支：pressure_drop_100to10_bar=90.00000000000 bar；pressure_drop_100to50_bar=50.00000000000 bar；JT_K_per_MPa=2.500000000000 K/MPa。

7. 其余全部答案及验证量：negative_mu_heating_final_T10_K=309.0000000000 K；negative_mu_final_minus_positive_K=31.50000000000 K；slope_sign_cooling=1.000000000000 ratio。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- final_T_P10_K=277.5000000000 K
- final_T_P50_K=287.5000000000 K
- drop_100to10_K=22.50000000000 K
- drop_100to50_K=12.50000000000 K
- pressure_drop_100to10_bar=90.00000000000 bar
- pressure_drop_100to50_bar=50.00000000000 bar
- JT_K_per_MPa=2.500000000000 K/MPa
- negative_mu_heating_final_T10_K=309.0000000000 K
- negative_mu_final_minus_positive_K=31.50000000000 K
- slope_sign_cooling=1.000000000000 ratio

## UC-ADV13-P194 Graham逸出流的同位素质量选择性和收集组成

298.15 K假想气体混合物由质量数近似28.000 g/mol的N₂(A)与30.000 g/mol的15N₂(B)组成，源气室A/B摩尔分数分别0.6000和0.4000。理想小孔分子自由逸出，两个同位素分子的逸出摩尔通量与x_i/√Mi成正比，无分子碰撞和逆流。求两同位素单位分率逸出速率之比、逸出气流中A/B分数、逸出流同位素质量比与源气差异、两总气组分的分子通量份额以及相对于源气的同位素富集倍数。说明该单级分离是动理学而非化学反应平衡。

**模型：** J_A/J_B=(x_A/x_B)√(M_B/M_A)，y_A=J_A/(J_A+J_B)。

1. 原始题目与物理限制：298.15 K假想气体混合物由质量数近似28.000 g/mol的N₂(A)与30.000 g/mol的15N₂(B)组成，源气室A/B摩尔分数分别0.6000和0.4000。理想小孔分子自由逸出，两个同位素分子的逸出摩尔通量与x_i/√Mi成正比，无分子碰撞和逆流。求两同位素单位分率逸出速率之比、逸出气流中A/B分数、逸出流同位素质量比与源气差异、两总气组分的分子通量份额以及相对于源气的同位素富集倍数。说明该单级分离是动理学而非化学反应平衡。

2. 建立物理化学模型与完整解析式：J_A/J_B=(x_A/x_B)√(M_B/M_A)，y_A=J_A/(J_A+J_B)。

3. 数学推导与问题核心辨析：质量较轻的A分子平均法向热速率更大；通量中质量的平方根权重不能写成简单Mi倒数。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：per_mole_fraction_rate_ratio_A_to_B=1.035098339014 ratio；effusion_flow_A_fraction=0.6082498673780 fraction；effusion_flow_B_fraction=0.3917501326220 fraction；effusion_A_to_B_ratio=1.552647508520 ratio。

6. 由状态公式求出中间体或分支：feed_A_to_B_ratio=1.500000000000 ratio；ratio_enrichment_factor=1.035098339014 ratio；A_fraction_increase=0.008249867378017 fraction。

7. 其余全部答案及验证量：B_fraction_decrease=0.008249867378017 fraction；molecular_mass_square_root_ratio=1.035098339014 ratio；normalization=1.000000000000 ratio。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- per_mole_fraction_rate_ratio_A_to_B=1.035098339014 ratio
- effusion_flow_A_fraction=0.6082498673780 fraction
- effusion_flow_B_fraction=0.3917501326220 fraction
- effusion_A_to_B_ratio=1.552647508520 ratio
- feed_A_to_B_ratio=1.500000000000 ratio
- ratio_enrichment_factor=1.035098339014 ratio
- A_fraction_increase=0.008249867378017 fraction
- B_fraction_decrease=0.008249867378017 fraction
- molecular_mass_square_root_ratio=1.035098339014 ratio
- normalization=1.000000000000 ratio

## UC-ADV13-P195 Flory–Huggins二元液体的混合自由能曲率与自发分相阈值

假想等分子大小A/B两组分的Flory–Huggins无量纲混合自由能f(φ)=φlnφ+(1−φ)ln(1−φ)+χφ(1−φ)，χ分别为1.500与2.500。比较φ=0.5000处的自由能、二阶曲率d²f/dφ²=1/φ+1/(1−φ)−2χ、以及φ=0.2000处曲率。求临界χc、两种χ在φ=0.5的稳定性以及在χ=2.5下的两个spinodal分界组成φ±=[1±√(1−2/χ)]/2。模型为平均场，仅判断局域曲率，不以自旋线包络当作binodal共存组成。

**模型：** f''=1/φ+1/(1−φ)−2χ，χc=2，φ±=[1±√(1−2/χ)]/2。

1. 原始题目与物理限制：假想等分子大小A/B两组分的Flory–Huggins无量纲混合自由能f(φ)=φlnφ+(1−φ)ln(1−φ)+χφ(1−φ)，χ分别为1.500与2.500。比较φ=0.5000处的自由能、二阶曲率d²f/dφ²=1/φ+1/(1−φ)−2χ、以及φ=0.2000处曲率。求临界χc、两种χ在φ=0.5的稳定性以及在χ=2.5下的两个spinodal分界组成φ±=[1±√(1−2/χ)]/2。模型为平均场，仅判断局域曲率，不以自旋线包络当作binodal共存组成。

2. 建立物理化学模型与完整解析式：f''=1/φ+1/(1−φ)−2χ，χc=2，φ±=[1±√(1−2/χ)]/2。

3. 数学推导与问题核心辨析：f''<0代表均匀态对微小组成涨落不稳定，f''>0仅代表局域稳定而不是全局最低自由能。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：free_energy_chi1p5_mid=-0.3181471805599 RT_units；free_energy_chi2p5_mid=-0.06814718055995 RT_units；curvature_chi1p5_mid=1.000000000000 ratio；curvature_chi2p5_mid=-1.000000000000 ratio。

6. 由状态公式求出中间体或分支：curvature_chi1p5_phi0p2=3.250000000000 ratio；curvature_chi2p5_phi0p2=1.250000000000 ratio；critical_chi=2.000000000000 ratio。

7. 其余全部答案及验证量：spinodal_left_chi2p5=0.2763932022500 fraction；spinodal_right_chi2p5=0.7236067977500 fraction；unstable_indicator_chi2p5_mid=1.000000000000 bool。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- free_energy_chi1p5_mid=-0.3181471805599 RT_units
- free_energy_chi2p5_mid=-0.06814718055995 RT_units
- curvature_chi1p5_mid=1.000000000000 ratio
- curvature_chi2p5_mid=-1.000000000000 ratio
- curvature_chi1p5_phi0p2=3.250000000000 ratio
- curvature_chi2p5_phi0p2=1.250000000000 ratio
- critical_chi=2.000000000000 ratio
- spinodal_left_chi2p5=0.2763932022500 fraction
- spinodal_right_chi2p5=0.7236067977500 fraction
- unstable_indicator_chi2p5_mid=1.000000000000 bool

## UC-ADV13-P196 Nernst–Planck一维扩散电迁移的阴阳离子零总流电场

25°C一维稀溶液中一价阳离子A⁺、阴离子B⁻浓度均为c=0.01000 mol/L，总浓度梯度dc/dx=−2.000 mol/(m⁴)，离子扩散系数D+=1.000×10⁻⁹、D−=2.000×10⁻⁹ m²/s。Nernst–Planck通量J_i=−D_i dc/dx−z_i D_i(F/RT)c dφ/dx，假定稳态局部电中性且无外加电流J+−J−=0。求电势梯度dφ/dx、电场E=−dφ/dx、阴阳离子共同物质流、两种扩散项、净电流及跨1.000 mm长度的电势差，忽略溶液非理想活度与反应。注意梯度dc/dx的浓度单位是mol/m³，给定数值单位mol/m⁴。

**模型：** 令g=dc/dx，α=(F/RT)c；J+−J−=(D−−D+)g−(D++D−)α dφ/dx=0，故dφ/dx=(D−−D+)g/[(D++D−)α]。

1. 原始题目与物理限制：25°C一维稀溶液中一价阳离子A⁺、阴离子B⁻浓度均为c=0.01000 mol/L，总浓度梯度dc/dx=−2.000 mol/(m⁴)，离子扩散系数D+=1.000×10⁻⁹、D−=2.000×10⁻⁹ m²/s。Nernst–Planck通量J_i=−D_i dc/dx−z_i D_i(F/RT)c dφ/dx，假定稳态局部电中性且无外加电流J+−J−=0。求电势梯度dφ/dx、电场E=−dφ/dx、阴阳离子共同物质流、两种扩散项、净电流及跨1.000 mm长度的电势差，忽略溶液非理想活度与反应。注意梯度dc/dx的浓度单位是mol/m³，给定数值单位mol/m⁴。

2. 建立物理化学模型与完整解析式：令g=dc/dx，α=(F/RT)c；J+−J−=(D−−D+)g−(D++D−)α dφ/dx=0，故dφ/dx=(D−−D+)g/[(D++D−)α]。

3. 数学推导与问题核心辨析：局部零电流并不要求两个离子各自通量为零，允许两个离子共同扩散；电势梯度由扩散系数不对称性建立。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：potential_gradient_V_m=-0.001712838608100 V/m；electric_field_V_m=0.001712838608100 V/m；cation_flux_mol_m2_s=2.666666666667e-9 mol/(m2s)；anion_flux_mol_m2_s=2.666666666667e-9 mol/(m2s)。

6. 由状态公式求出中间体或分支：cation_diffusion_flux=2.000000000000e-9 mol/(m2s)；anion_diffusion_flux=4.000000000000e-9 mol/(m2s)；migration_flux_cation=6.666666666667e-10 mol/(m2s)。

7. 其余全部答案及验证量：migration_flux_anion=-1.333333333333e-9 mol/(m2s)；total_current_density_A_m2=-3.990539806270e-20 A/m2；potential_difference_1mm_V=-0.000001712838608100 V。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- potential_gradient_V_m=-0.001712838608100 V/m
- electric_field_V_m=0.001712838608100 V/m
- cation_flux_mol_m2_s=2.666666666667e-9 mol/(m2s)
- anion_flux_mol_m2_s=2.666666666667e-9 mol/(m2s)
- cation_diffusion_flux=2.000000000000e-9 mol/(m2s)
- anion_diffusion_flux=4.000000000000e-9 mol/(m2s)
- migration_flux_cation=6.666666666667e-10 mol/(m2s)
- migration_flux_anion=-1.333333333333e-9 mol/(m2s)
- total_current_density_A_m2=-3.990539806270e-20 A/m2
- potential_difference_1mm_V=-0.000001712838608100 V

## UC-ADV13-P197 热电Seebeck系数线性温度依赖的热端开路电势

一条假想p型半导体温差电腿在300–400 K的Seebeck系数S(T)=S0+a(T−300 K)，S0=+200.0 μV/K、a=+0.5000 μV/K²，冷端300.0 K、热端400.0 K。开路电压定义Vhot−Vcold=−∫Tc^Th S(T)dT。求开路电压和其mV表示、平均S、热端和冷端S、按常系数S0近似的电势与误差、若将同样温差反向（热端300冷端400）开路电压符号翻转及按SI换算的S斜率。说明该符号约定与电极接线相关，不涉及器件输出电功率。

**模型：** V=−[S0ΔT+(a/2)(ΔT)²]，Savg=(S(Tc)+S(Th))/2。

1. 原始题目与物理限制：一条假想p型半导体温差电腿在300–400 K的Seebeck系数S(T)=S0+a(T−300 K)，S0=+200.0 μV/K、a=+0.5000 μV/K²，冷端300.0 K、热端400.0 K。开路电压定义Vhot−Vcold=−∫Tc^Th S(T)dT。求开路电压和其mV表示、平均S、热端和冷端S、按常系数S0近似的电势与误差、若将同样温差反向（热端300冷端400）开路电压符号翻转及按SI换算的S斜率。说明该符号约定与电极接线相关，不涉及器件输出电功率。

2. 建立物理化学模型与完整解析式：V=−[S0ΔT+(a/2)(ΔT)²]，Savg=(S(Tc)+S(Th))/2。

3. 数学推导与问题核心辨析：对线性温度依赖的Seebeck系数积分而非取热端S乘ΔT，电压符号依赖报告的两端顺序。

4. 将问题中的温度、体积、浓度与速率统一为核心公式所需的单位，特别确保指数项无量纲。

5. 首先求出状态参数：Seebeck_cold_microV_K=200.0000000000 microV/K；Seebeck_hot_microV_K=250.0000000000 microV/K；average_Seebeck_microV_K=225.0000000000 microV/K；open_circuit_voltage_V=-0.02250000000000 V。

6. 由状态公式求出中间体或分支：open_circuit_voltage_mV=-22.50000000000 mV；constant_S0_voltage_V=-0.02000000000000 V；constant_approx_error_mV=2.500000000000 mV。

7. 其余全部答案及验证量：reversed_ends_voltage_V=0.02250000000000 V；relative_constant_approx_error=-0.1111111111111 fraction；S_slope_V_K2=5.000000000000e-7 V/K2。

8. 对于反应网络、质量作用关系和输运稳态，独立核对物料守恒、分率归一或对称条件。

9. 核查边界行为：不论t→0与t→∞、温度接近平衡、压差趋零或组成变动，均须保持物理上可行的符号。

10. 真实实验机制、同构去重和题目文字质量仍须经人工专家审阅，不因数值程序通过而获得出版批准。

**答案（含单位）：**

- Seebeck_cold_microV_K=200.0000000000 microV/K
- Seebeck_hot_microV_K=250.0000000000 microV/K
- average_Seebeck_microV_K=225.0000000000 microV/K
- open_circuit_voltage_V=-0.02250000000000 V
- open_circuit_voltage_mV=-22.50000000000 mV
- constant_S0_voltage_V=-0.02000000000000 V
- constant_approx_error_mV=2.500000000000 mV
- reversed_ends_voltage_V=0.02250000000000 V
- relative_constant_approx_error=-0.1111111111111 fraction
- S_slope_V_K2=5.000000000000e-7 V/K2
