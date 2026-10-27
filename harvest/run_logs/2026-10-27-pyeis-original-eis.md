# 大学四大化学续采集记录：PyEIS 电化学阻抗原创练习（2026-10-27）

## 本轮来源和版权依据

- 项目：Kristian B. Knudsen, [PyEIS](https://github.com/kbknudsen/PyEIS)，电化学阻抗谱模拟与分析程序。
- 固定上游 Git SHA：`14724e978a089d9184285cec1b72cb57941d58a1`。
- 根目录许可证 **Apache License 2.0**，Git Blob `261eeb9e9f8b2b4b0d119366dda99c6fd7d35c64`。
- 公式参考文件 `PyEIS/PyEIS.py` Git Blob `78b4832687a56ff1c47ead7befb301d89f8c478f`。
- README 第一方说明仓库代码及素材按 Apache-2.0 发布。**没有导入上游原题、原始实验数据、论文文字、反应结构图片或其他第三方材料。**
- 本仓库独立编写 **8 道中文大学物理化学计算练习**：角频率、理想电容阻抗、串联 RC、并联 RC、Nyquist 半圆顶点、简化 Randles 电路、恒相位元件 CPE 和半无限 Warburg 阻抗。题目中的参数为教学自选数值，不得视作上游采集的八道试卷原题。

## 导入、去重和质检

- 目录 `harvest/pinned_pyeis_original_eis.json` 固定 8 种模型、参数、题干及单独计算的预期答案。
- `scripts/import-original-eis-pyeis.mjs` 对来源版本/许可证字段严格校验；按独立公式复算复数阻抗及相位，拒绝不合理输入、非有限值、题目哈希碰撞及已有题目/答案冲突。未执行上游 Python 代码。
- `tests/original-eis-pyeis.test.mjs` 包含 8 项模型的数值回归及版权边界、防误改测试。
- 规范化题干 SHA-256 去重，全部设置 `awaiting_expert_review` 和 `publishable=false`；完整的跨来源化学语义去重与专家终审仍未完成。
- 机器质检只保证公式数值与数据结构等条件，不对复杂双电层行为、真实有限扩散、电荷传递动力学及实验电极系统作超出题干模型的验证。

## GitHub 实际提交与自动化

- 固定题目参数数据：[commit 517820a](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/517820a09985e09f2a957a2453562fb305bd2bb9)。
- 生成器、回归测试和既有 30 分钟工作流：[commit 18f824f](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/18f824f5af79e2bdd7caf8bacc0ed2f2cbf3adbe)。
- **Actions success**：[40444042154](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40444042154)。
- 实际增量提交：[commit 956eef1](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/956eef198ed2ad44d5430b41dfbcf3b3ac59cc2f)。提交差异：8 个 `data/candidates/` 新 JSON 文件，1 个新增导入报告，以及来源目录和质量审计更新。
- 初次实际新增 **8**，已存在 **0**，上游原题复制 **0**；总候选 **1114 -> 1122**。
- 当前分布：无机 622、有机 414、分析 33、物理 53。练习候选 844、学习卡 278；全部待专家审核，正式通过 0。
- 自动来源搜索 27 次成功请求，未报告搜索中断；来源目录唯一条目 **568 -> 569**。这 569 项是**发现索引，不是已核版权的可导入题源数量**。
- 本轮无失败测试或导入步骤。再运行后的本次新增数量应从 GitHub Actions 日志获取，不应重复计数首次导入的 8 道。

## 全网另行发现与未导入

- [MatSciEd/Thermodynamics](https://github.com/MatSciEd/Thermodynamics)：MIT Notebook，包含化学反应热力学。已检查其中化学反应文件 70 个 Notebook cell，引用 DeHoff 教材；不复制第三方教材内容，也没有独立核权的完整题目答案可直接导入。
- [jcumby/interactive_impedance](https://github.com/jcumby/interactive_impedance)：电化学阻抗交互教学；项目网站发布 CC BY 声明，但仓库具体资产/源码和问答版权需要进一步逐项核验，本轮未导入。
- 继续保留 OpenStax 许可证冲突造成的导入阻止，不重复引入旧版撤回材料。

## 后续待办

1. 真实实验体系的等效电路假设、负虚部惯例、Warburg 系数单位，进行化学专家复核。
2. 对 36 组同模板题及其他可能的跨语言语义相似题执行人工或更强语义去重。
3. 将新题的答案和推导统一为可出版的 LaTeX 格式，但不得绕过 `publishable=false`。
4. 对明确拥有教学题文再分发许可并含可靠答案的外部题源继续核权；对只有源码的资源，必须明确区分原创新编题和上游原题。

