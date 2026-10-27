# 四大化学题库：题源正文许可核查与检索排序质检（2026-10-27）

## 本轮基线与增量

- 核查分支：`main`，核查前最新提交 `94cf0cc9d4b6f6bba4125aaf42d46f792fcb919d`。
- 现有候选内容：**1122**（无机 622、有机 414、分析 33、物理 53）；练习候选 844、学习卡 278。
- 现有完全同题干重复组 0、数字模板相似组 36；均未进行跨语言人工语义复核。
- 已批准发布的题目 0，全部 `awaiting_expert_review` / `publishable=false`。
- 当前 GitHub 来源目录 756 条、HF/Zenodo 外部目录 232 条，合计 **988 条仅供核权的来源元数据**，绝非 988 份已获授权题库。
- **本次新增已核权题目 0；本次复制上游题文 0；重复导入 0。** 未以重新发现的元数据充当题量增量。

## 实际核查的来源（许可证只说明已核查的范围）

| 来源 | 学科方向 | 许可核验 | 题文与答案判断 / 处理 |
|---|---|---|---|
| [MolChem/chemistry-quiz-1](https://github.com/MolChem/chemistry-quiz-1) | 有机、分析、动力学 | `README.md` 描述 10 道 HTML 测验；根目录 `LICENSE` 请求 404；`index.html` blob `371e63597890dd4ac296ef73bceb5ce41cbf1fbb` | **有题但未证实题文再分发权**；不导入，待作者明确授权。 |
| [BDFD-Tutorial-Ground/UWO_CHEM1302B_Discovering-Chemical-Energetics](https://github.com/BDFD-Tutorial-Ground/UWO_CHEM1302B_Discovering-Chemical-Energetics) | 物化、无机基础 | 根目录 MIT LICENSE blob `caf65fc1b04c19d152d23e1023bff1fb363625fd`；README 同时有 “All Rights Reserved” 声明并指向收费的大学课程工作簿和实验手册 | **MIT 代码许可不能证明教材/课程习题版权**；禁止自动转存课程原题。 |
| [daferro/Notebooks_Chemical_Equilibrium](https://github.com/daferro/Notebooks_Chemical_Equilibrium) | 物理化学 | 作者 David Ferro Costas，MIT LICENSE blob `59fca9296e9f20287ac27a1fe21ab6864bf41b95`；固定上游提交 `03e569975355ca616bc81725c7c1b401cfc7cc2e` | 三份 notebook 可用于公式/计算参考；README 提及学生 PDF 练习，但未取得逐题可核验答案。Notebook 1 的热化学数据明确引用 Atkins 教材，**不得把其教材数据误当原创 CC/MIT 题文**；暂不复制。 |
| [chemdrv/python-for-pchem](https://github.com/chemdrv/python-for-pchem) | 物理化学 | GPL-3.0 LICENSE blob `f288702d2fa16d3cdf0035b15a9fcbc552cd88e7` | Jupyter 实验教程及示例数据；未核实可独立组卷的原题与答案，也需遵守 GPL 义务；不导入。 |
| [JuaoSea/Chemistry](https://github.com/JuaoSea/Chemistry) | 分析、有机/计算 | GPL-3.0 LICENSE blob `e72bfddabc15be5718a7cc061ac10e47741d8219` | README 为 Python 化学计算工具集合，并非已证实题库；不把软件条目算作习题。 |
| [pawelkwaczynski/electrolab-cv](https://github.com/pawelkwaczynski/electrolab-cv) | 分析、电化学 | MIT LICENSE blob `3e2411717c084ffa66cd449e484f679d538384f8` | PeakWise 是循环伏安数据分析程序，README 明言实验室原始数据不在仓库；未发现可核权的习题答案对，不导入。 |
| [hjelmj/nbmatphyschem](https://github.com/hjelmj/nbmatphyschem) | 物理化学 | 搜索元数据标 MIT；根目录 `LICENSE` 请求 404，README 仅说明 notebook 主题 | **许可文件和题文来源未核实**，不导入。 |
| [pranav11722/ChemQuiz-Pro-](https://github.com/pranav11722/ChemQuiz-Pro-) | 化工/热力学 | MIT LICENSE blob `50cd654ada224e77b6ef742d200ecabf6ee1e82e`；`index.html` blob `48399bed7b8123fecbfdd05109506a808a6728ee` | 页面实际仅 3 道示例（热传导、Raoult 定律、Schmidt 数）；README 仅明确代码复用，且多数偏化工；**没有作为新四大化学题源导入**。 |
| [PaulWAyers/IntroQChem](https://github.com/PaulWAyers/IntroQChem) | 量子/物理化学 | CC0 LICENSE blob `d6f0c9a0ae3f8013d6e1e6953983c811d705e867`；README 对转载改编内容明确保留原作者版权 | 旧版课程已迁移至 QC-Edu/IntroQM 系列，本仓库已有 QC-Edu 3 条；须逐题核查第三方例外和跨版本语义重复，不盲目再导。 |
| [University of Georgia General Chemistry II Recitations and Worksheets](https://oer.galileo.usg.edu/chemistry-ancillary/19/) | 无机/分析/物化基础 | 官方机构页面明确 **CC BY 4.0**，作者 Eman Abdelrahman 与 Matthew Seivert，2024-12-01 | **值得后续逐页抽取**，但全文跳转 Manifold，当前未核实每道题的解答、第三方配图和完整文本；本轮只保留索引，未复制。 |
| [Chemistry LibreTexts Worksheets](https://chem.libretexts.org/Ancillary_Materials/Worksheets) | 四科 | 页面标示 **CC BY-NC-SA 4.0** | 非商业/相同方式共享约束，与本库未来下游再分发方式未逐项核对，禁止无条件自动复制。 |
| [thewindsofwinter/usnco-problems](https://github.com/thewindsofwinter/usnco-problems) | 化学竞赛（非本科主库） | 虽有 GPL-3.0 代码，README 明确题目版权归 American Chemical Society | **明确第三方题文版权，排除题目复制**；GPL 不能覆盖 ACS 题目。 |

## 本轮代码改进

- `scripts/prioritize-chemistry-sources.mjs` 在原有学科优先级和 SPDX 元数据基础上新增 `question_presence_signal`，将明确自称 quiz/exercises/worksheet/problem set 的项目，与仅是计算器、分析软件、模拟器的项目区分；工具类降低排名，但仍不据此断言不存在题目。
- `tests/prioritize-chemistry-sources.test.mjs` 新增回归测试：MIT 电化学分析工具不得排在同等条件下真正的分析化学习题集合前；未知许可证的 quiz 也不得获得题文复制许可。
- **不改动** `harvest/approved_imports.json`，不自动批准任何新来源，不绕过 `publishable=false`。队列在下次 Actions 完成后重新生成，测试/执行结果应以该次 Actions 记录为准。

## 错误、限制与待办

1. `MolChem` 和 `hjelmj` 的根目录 `LICENSE` 返回 404；**不能**推断整个仓库绝无其他授权文件，保留待核。
2. `xavierprat/Physical-Chemistry-with-Jupyter` 虽有公开教育资料索引，但 GitHub 连接器本次仓库详情/文件读取失败，故未核实许可和题目。
3. 目前的队列是 **元数据排序**，不是逐题许可证证明；更高排名仅减少人工检索成本，不构成导入批准。
4. 后续优先逐页审核 UGA CC BY 4.0 习题、MIT 作者自编物化 notebook 及 CC0 量子化学课程；要求保留版本、原题/解答归属、完整署名、逐题 hash、同模板和语义重复检查。
5. 本轮无新题，现有 1122 的数字不应因为此日志或排序代码更新而增加；如 CI 未完成，不能声称 CI 已成功。
