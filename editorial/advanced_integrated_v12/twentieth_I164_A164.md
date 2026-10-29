# 第十二辑 I164 / A164 中文解答

本辑全部题目仍为专家待审编辑草稿，未完成独创性审查。

## UC-ADV12-I164 B2合金Bragg–Williams有序–无序相变和超结构XRD反演

### 中文题目
某假想等化学计量AB合金形成B2两个等量子晶格，定义η使α位点A占位率(1+η)/2、β位点A占位率(1−η)/2。采用Bragg–Williams平均场自由能ΔG(η,T)=−Jη²/2+(RT/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]（每摩尔AB式量），J=5000.0 J/mol、R=8.314462618 J/(mol K)，η∈[0,1]。求临界温度并说明无序解的稳定性，计算400、550、700 K平衡有序参量、正确/错误子晶格占位概率，400 K的排序内能、熵和自由能与曲率，550 K自由能及曲率。对散射因子f_A=26、f_B=28，已校正所有反射的其它因子的理想超结构与基本衍射比I_100/I_110=[η(f_A−f_B)/(f_A+f_B)]²，求两低温的强度比及温度比；验证原子数守恒、熵号和相变极限。

### 逐步解析
1. 假定等原子A/B合金形成两个相等B2子晶格α和β。定义有序度η∈[0,1]，α的A占据率(1+η)/2、β的A占据率(1−η)/2，因此整体仍是1:1化学计量。

2. 题设每摩尔AB式量的Bragg–Williams相对自由能ΔG=−Jη²/2+(RT/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]，J=5000 J/mol，零有序态G(0)=0。

3. 对η求导得到G′=−Jη+RT atanhη，非零平衡参量满足η=tanh(Jη/RT)；二阶导数为G″=−J+RT/(1−η²)。

4. 无序态附近泰勒展开ΔG≈(RT−J)η²/2+RTη⁴/12，故平均场临界温度T_c=J/R；700 K超过临界点，唯一稳定对称解η=0。

5. 求T_c=601.361775225 K；400和550 K低于T_c，η=0在这两温度下不稳定，需取唯一正的非零极小根。

6. 使用区间二分求得η(400 K)=0.859821443020、η(550 K)=0.488637617313，有序度随温度升高降低且两值均严格在(0,1)中。

7. 400 K的正确占位概率0.929910721510、反位概率0.0700892784900；每AB式量含两个子晶格位，平均反位原子数1−η=0.140178556980。

8. 定义排序能量ΔU=−Jη²/2及配置熵差ΔS=−(R/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]，400 K分别得-1848.23228469 J/mol和-3.65235518129 J/(mol K)。

9. 平衡有序自由能在400 K为-387.290212178 J/mol、550 K为-26.8694529279 J/mol，均小于无序态的0。

10. 二阶曲率分别7756.78807453与1007.29706172 J/mol，均正，表明计算根是稳定有序态。

11. 理想XRD超结构(100)反射强度∝η²(f_A−f_B)²，而基本(110)反射∝(f_A+f_B)²；题设已校正几何、消光、温度和角度因子。

12. 给f_A=26、f_B=28，则400 K强度比I_100/I_110=0.00101411922343、550 K为0.000327526366329，高温较弱；计算二比之比=0.322966332521。

13. 有序与无序相化学式仍为AB，变化只是子晶格占位和自由能。真实合金的局部短程有序、畴结构、声子及反射几何条件会改变平均场相变和实际衍射强度。

### 主要数值答案
- mean_field_critical_temperature_K: 601.3617752247136 K
- reduced_coupling_400K: 1.5034044380617841 dimensionless
- order_parameter_400K: 0.8598214430199647 fraction
- order_parameter_550K: 0.4886376173134186 fraction
- order_parameter_700K: 0 fraction
- correct_sublattice_fraction_400K: 0.9299107215099823 fraction
- antisite_fraction_400K: 0.07008927849001767 fraction
- correct_sublattice_fraction_550K: 0.7443188086567093 fraction
- antisite_fraction_550K: 0.2556811913432907 fraction
- ordering_internal_energy_400K_J_mol: -1848.232284692336 J/mol
- ordering_entropy_400K_J_molK: -3.6523551812864246 J/(mol K)
- ordering_G_400K_J_mol: -387.2902121777661 J/mol
- ordering_G_550K_J_mol: -26.869452927929274 J/mol
- free_energy_curvature_400K_J_mol: 7756.788074529271 J/mol
- free_energy_curvature_550K_J_mol: 1007.2970617234441 J/mol
- B2_superlattice_ratio_400K: 0.0010141192234251499 ratio
- B2_superlattice_ratio_550K: 0.0003275263663288544 ratio
- ratio_of_peak_ratios_550_400: 0.32296633252118656 ratio
- wrong_site_atom_count_per_formula_400K: 0.14017855698003534 atoms/formula
- AB_stoichiometry_residual: 0 atoms

待审：publishable=false, exclude_from_official_bank=true, awaiting_expert_review, pending_cross_series_model_review。

## UC-ADV12-A164 氟离子选择电极双pH测量的HF解离与氯选择性系数反演

### 中文题目
某假想氟离子选择电极在298.15 K下满足同价阴离子响应E=E₀−(RT/F)ln(a_F−+K_sel a_Cl−)，其中E₀=0.2000 V，F=96485.33212 C/mol，R=8.314462618 J/(mol K)，a_i=γ_i c_i/(1 mol/L)。氟以HF⇌H⁺+F⁻平衡存在，条件浓度K_a=6.800×10⁻⁴，游离F⁻分数f=K_a/(K_a+[H⁺])。两次将同一样品缓冲在pH=2.500和4.500，总氟不变，Cl⁻浓度0.01000 mol/L不变，F与Cl活度系数均为0.8000；测得电势E_low=0.475355073617360 V、E_high=0.440981238050443 V。求由两电位同时唯一反演的总氟浓度C_T与氯离子选择系数K_sel，并计算两pH下自由氟、HF、氯干扰贡献分数及氯干扰等效总氟浓度。检查电极电位负斜率、酸碱与总氟原子守恒、有效活度正性以及真实样品的选择性限制。

### 逐步解析
1. 把电极对同价负离子F⁻与Cl⁻的Nikolsky–Eisenman近似写成E=E₀−(RT/F)ln(a_F+K_sel a_Cl)，活度均以1 mol/L标准浓度无量纲化。

2. 由于HF⇌H⁺+F⁻且题设条件酸常数K_a=6.800×10⁻⁴，固定pH下自由F⁻占总氟分数f=K_a/(K_a+10^(−pH))。

3. 样品两次缓冲pH分别2.500、4.500，总氟浓度C_T相同，氯分析浓度固定0.01000 mol/L，γ_F=γ_Cl=0.8000，且E₀=0.2000 V。

4. 写成对两条件共同成立的z=γ_F(C_T/c°)f(pH)+K_selγ_Cl(C_Cl/c°)，由阴离子的Nernst负斜率E=E₀−V_Tlnz给出有效响应。

5. 得到两个自由氟分数f₁=0.176978360270、f₂=0.955562444540，高pH端游离F⁻显著增多。

6. T=298.15 K时V_T=RT/F=0.0256925791215 V；两次测得电位E₁=0.475355073617 V、E₂=0.440981238050 V，E₂低于E₁。

7. 用z_i=exp[(E₀−E_i)/V_T]逐点反算，得z₁=0.0000221582688216、z₂=0.0000844449955632，它们均为正的无量纲活度响应。

8. 用两电位差消除同一个氯干扰项，得到C_T=(z₂−z₁)/(γ_F(f₂−f₁))（浓度以mol/L输入）；f₂≠f₁使反问题唯一。

9. 求得C_T=0.000100000000000 mol/L，再由K_sel=[z₁−γ_F C_T f₁]/(γ_Cl C_Cl)=0.00100000000000，系数为无量纲。

10. 两次自由F⁻浓度分别0.0000176978360270、0.0000955562444540 mol/L，HF分别0.0000823021639730、0.00000444375554598 mol/L，各自相加为C_T。

11. 氯干扰的有效响应为z_Cl=0.00000800000000000，占低、高pH总响应的比例0.361039035333、0.0947362238182，酸端影响更明显。

12. 把氯的有效响应等同于游离F信号，得到两个pH下等效总氟浓度分别0.0000565040832378、0.0000104650408324 mol/L。

13. 验证：若忽略HF而直接把总氟代入电极方程，会误判氟浓度和K_sel。若出现HF₂⁻、AlF络合、液接电位变动、活度系数或氯活度变化，双条件方程不能直接使用。

### 主要数值答案
- Nernst_voltage_V: 0.025692579121493725 V
- fluoride_ionized_fraction_pH2p5: 0.17697836027035083 fraction
- fluoride_ionized_fraction_pH4p5: 0.9555624445402146 fraction
- effective_activity_pH2p5: 0.00002215826882162807 activity
- effective_activity_pH4p5: 0.00008444499556321717 activity
- electrode_E_pH2p5_V: 0.47535507361736046 V
- electrode_E_pH4p5_V: 0.44098123805044287 V
- potential_shift_V: 0.03437383556691759 V
- reconstructed_total_fluoride_M: 0.00010000000000000013 mol/L
- reconstructed_chloride_selectivity: 0.0009999999999999994 ratio
- free_fluoride_pH2p5_M: 0.000017697836027035107 mol/L
- free_fluoride_pH4p5_M: 0.00009555624445402158 mol/L
- HF_pH2p5_M: 0.00008230216397296502 mol/L
- HF_pH4p5_M: 0.000004443755545978551 mol/L
- chloride_interference_activity: 0.000007999999999999995 activity
- interference_fraction_pH2p5: 0.36103903533255344 fraction
- interference_fraction_pH4p5: 0.09473622381815437 fraction
- equivalent_fluoride_interference_pH2p5_M: 0.00005650408323777024 mol/L
- equivalent_fluoride_interference_pH4p5_M: 0.000010465040832377697 mol/L
- inverted_activity_pH2p5: 0.000022158268821628078 activity
- inverted_activity_pH4p5: 0.00008444499556321727 activity
- fluoride_ionization_ratio: 5.399317990518753 ratio

待审：publishable=false, exclude_from_official_bank=true, awaiting_expert_review, pending_cross_series_model_review。

