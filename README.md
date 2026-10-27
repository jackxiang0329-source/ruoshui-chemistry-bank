# 三千弱水 · 大学四大化学题库

独立构建面向本科化学专业的**无机化学、分析化学、物理化学、有机化学**题库、严格解答与 LaTeX 出版资源，并向三千弱水统一组卷平台提供版本化题目清单。

**当前状态：仓库初始化中；尚无已通过化学专家审核并发布的正式题库。**

## 当前候选内容快照（2026-10-27）

- 已验证 GitHub `main` 上共有 **1703** 份候选内容：无机 849、分析 193、物理 194、有机 467。
- 其中 **1425** 份练习候选、**278** 份学习卡；不是 1703 道独立可出卷考试真题。
- 全部 `awaiting_expert_review`、`publishable=false`；专家正式批准 **0** 道。
- 机器审计发现完全同题干 0 组、相同题型模板 66 组；并不表示跨语言或语义重复已解决。
- [本轮新增 EIS 原创习题和 Apache-2.0 来源审计](harvest/run_logs/2026-10-27-pyeis-original-eis.md)。
- [当前自动生成的实时审计数据](harvest/quality_audit.json)优先于本段日期快照；来源发现每 10 分钟采用 `4,14,24,34,44,54 * * * *`，严格入库每 30 分钟采用 `17,47 * * * *`，可能受 GitHub 调度延迟影响。

## 原则

- **独立题目文件**：当前候选题主要保存在 `data/candidates/<id>.json`，含题干、答案、来源与审核状态；正式组卷前再按经过审核的清单生成 `problem.tex`、`solution.tex`，以及需要的化学结构和图表。
- **原创优先，许可先行**：外部仓库与教材仅作为参考索引，禁止直接大批量转存未经逐题核验的题干、图片或解答。
- **双轨质检**：程序验证格式、数值计算、化学计量/电荷和部分有机结构；化学事实、推理与出版质量必须人工复核。
- **LaTeX 排版**：`ctex` + `mhchem` + `amsmath`，正式考试模板以后采用 Elegant 风格；不将高成本 XeLaTeX 编译放到免费 Cloudflare Workers。
- **多仓库接口**：本仓库保存可溯源原始素材，统一平台只读取经过审批、带版本与哈希的发布索引。

## 计划

第一期先建立可验证的四科样例、章节分类、题目 Schema、CI 和 TeX 构建规范。每科样例不等于正式题库；版本发布时另行声明审核与许可状态。

自动采集与质检已在 `main` 运行，新增候选始终标记为未审核；人工核权、科学复核和正式发布应分别把关。

## 开源题库程序源码（已迁入 main）

- [chemquiz 完整 Rust 组卷和 WASM 项目源码](third_party/chemquiz/)（99 个原始文件，MIT）
- [ChemIQ Python 核心校验、解析源码与 Notebook](third_party/ChemIQ/)（9 个原始文件，BSD-3-Clause）
- [上游版本、版权和复验说明](third_party/README.md)
- [源码逐文件 SHA 核验脚本](scripts/audit-upstream-vendor.mjs)

这些源码与待审外部题目数据不同，尚未作为本项目生产 API 的可运行模块。完整去重数据与题库质检工作保留在 Draft PR #1。


## 自动来源核权队列与内容线索

- [动态跳过已核验仓库的优先队列](harvest/source_review_queue.json)：修复固定 160 条永远占据队列头部的问题，后续来源可以持续预核验。
- [来源版权线索账本](harvest/license_preflight.json)与[疑似习题/答案文件结构索引](harvest/content_inventory.json)：均仅包含来源/许可证/文件路径元数据，**不表示具体题目获再分发授权**。
- 预核验每 10 分钟最多 40 个仓库、文件结构额外最多 12 个仓库，受 GitHub 搜索和 API 配额、调度延迟约束。
- [2026-10-27 修复与实际成功运行审计](harvest/run_logs/2026-10-27-review-queue-unblock-and-file-inventory.md)。

## 机器可读候选题与安全隔离

- [机器可读质量审计](harvest/quality_audit.json)：自动统计四科题量、复习卡与习题数量、许可证来源检查、完全同文题组、数字模板相似题和跨来源疑似重复对。此报告**只给人工复审提供线索，不进行自动语义合并**。
- [OpenStax 授权冲突与撤回记录](harvest/run_logs/2026-10-27-openstax-quality-audit.md)：官方当前标注 CC BY-NC-SA，原先 8 道改编题已从 main 撤回，未经额外核权禁止重新导入。
- 题库包含两种**不同资源类型**：命名反应/试剂「学习卡」和需要独立推理/计算的「习题候选」。两者均不能简单等同于考试真题。
- **强制出版保护**：尚未完成专家审核者必须明确标记 \`publishable=false\`；不允许仅凭许可证或自动计算结果自动发布。

## ChemTrain Daily 批量合规导入（2026-10-27）

- 固定 CC BY 4.0 原作者内容许可证与源 HTML Git Blob，仅转换无需分子结构图的文字 MCQ：**无机 227、有机 41，共 268**。
- 原始 2892 道不直接照单全收；排除第三方 pKa/Mayr 测量值、结构 SVG、所有依赖图示的题目。
- [可重复执行导入器](scripts/import-chemtrain-daily-text.mjs)、[回归测试](tests/chemtrain-daily-text.test.mjs)、[审计日志](harvest/run_logs/2026-10-27-chemtrain-daily-import.md)。
- `awaiting_expert_review` + `publishable=false`；结构构型题特别标记复审，不等于 268 道官方独立考试原题。

## NVIDIA 开放化学问答研究待审区（2026-10-27）

- [Nemotron-Science-v1](https://huggingface.co/datasets/nvidia/Nemotron-Science-v1) 的化学 RQA 分区共有 **52,179** 条模型生成问答，NVIDIA 原始内容声明 CC BY 4.0。
- [固定数据来源、许可证和容量限制](harvest/pinned_nvidia_science_rqa.json)；[可重复运行的采集器](scripts/stage-nvidia-rqa.mjs)。
- 每 **5 分钟** 的独立自动流程按页最多读取 **3,200 条**，只储存在 `data/research_quarantine/nvidia-rqa/` 的 JSONL（新批次为 `.jsonl.gz` 压缩）文件内，**最高 20,000 条后停止进一步暂存**。运行可能受 GitHub 排队、网络、API 服务影响而延迟。
- 这些是 **AI 生成、尚未独立验证答案的研究问答**，不能与 `data/candidates/` 的本科题库候选混为一谈。所有记录具有 `publishable=false`、`exclude_from_official_bank=true` 标记。
- 当前审计：2026-10-27 已核对 **8,056** 条未验证研究问答，按模型答案和学科启发式形成 [125 条专家优先复核队列](harvest/nvidia_rqa_review_queue.json)，但均不可自动发表；实际最新总量以 [游标状态](harvest/nvidia_rqa_state.json) 为准。
- [来源、抽取质量与错误记录](harvest/run_logs/2026-10-27-nvidia-research-rqa-intake.md)。
- [六项 GALILEO 官方 CC BY 4.0 化学 OER 作品级许可预审（本轮题目新增 0）](harvest/run_logs/2026-10-27-uga-oer-rights-review.md)。实际最新数量以 `harvest/nvidia_rqa_state.json` 为准；任何核准进入本科题库的转移都必须另外验算、分类、去重并记录专家审核。


## 原创参数化大学化学计算练习（2026-10-27）

- [分析化学原创题生成器](scripts/import-original-analytical-variants.mjs)及[96 题交叉复算测试](tests/original-analytical-variants.test.mjs)：在固定版本 MIT 许可计算方法基础上独立编写，共 **8 种方法×12 个变式=96 道**。
- [物理化学原创题生成器](scripts/import-original-physical-variants.mjs)及[72 题逆向公式校验](tests/original-physical-variants.test.mjs)：共 **6 种方法×12 个变式=72 道**。
- 只为原创题文声明 [CC0](LICENSE-ORIGINAL-QUESTIONS.md)，不将第三方软件/原题擅自重新授权。**全部 `publishable=false` 并待化学专家审核**。数字变式不是不同来源的考试原题。
- [本轮真实增量、成功 CI 与版权来源审计](harvest/run_logs/2026-10-27-new-solved-analytical-physical-variants.md)。

## 新增来源：Radical Learn 原作者授权题卡（2026-10-27）

- [ChemTrain/radical-learn](https://github.com/ChemTrain/radical-learn)：固定上游 Git SHA、源 HTML 和内容许可证 Blob，新增 **12 道文字自由基极性匹配 MCQ**；原仓库的 26 道自由基极性分类候选已存在，本次**没有重复导入**。
- [新导入器](scripts/import-chemtrain-radical-matching.mjs) 和 [原作者许可及答案键测试](tests/chemtrain-radical-matching.test.mjs)；[MCQ 选项与上游记录重复审计](harvest/mcq_integrity_audit.json) 已同时覆盖新题型。没有复制分子结构、论文全文或外部实测数据。
- 同期另有**独立任务**新增 12 道 [DFT Course 计算练习](harvest/import_reports/dft_course_isomers.json)；其数字不可算作 Radical Learn 导入器产量。
- [本轮完整授权、质量与增量审计](harvest/run_logs/2026-10-27-radical-matching-import.md)。所有候选仍 `publishable=false`、待专家审核；来源选择题作者给出的正确项不等于额外完成了独立化学专业审定。


## 本轮新增：仪器分析原创题与外部数据源筛选

- 新增 `scripts/import-original-instrumental-analytical.mjs`：**8 个独立方法 × 8 组参数 = 64** 道仪器分析原创计算练习，已由 CI 导入。覆盖吸收分光、标准加入、色谱分离度与塔板数、库仑分析、电导、AgCl 重量分析及 Stern–Volmer 荧光猝灭；每题数值结果做观测量反算。
- [科学与版权测试](tests/original-instrumental-analytical.test.mjs)；全部仍是专家待审的原创参数变式，并非转载真题或已批准出版内容。
- [Hugging Face / Zenodo 人工核权优先队列](harvest/external_review_queue.json)自动根据题目线索、大学学科、许可声明、研究论文/高中/模型生成风险排序；**元数据从不等于逐题复制授权**。

## 自动专家复核分层抽样（机器预审，并非专家批准）

- [专家复核代表题清单](harvest/expert_review_plan.json)：按四科、知识点、来源及数值模板进行代表题抽样，优先列出缺失答案、来源许可或待语义去重的内容，减少 12 道参数变式占据 12 个复核名额。
- [生成器](scripts/build-expert-review-plan.mjs)与[回归测试](tests/expert-review-plan.test.mjs)由每 30 分钟自动流程运行。**只推荐复核顺序**，不修改任何题目，不自动批准整组题目，更不会写入可发表题库。
- 每份候选仍需独立核验科学正确性、来源、解答、年级与排版。集群中代表题合格，不代表其余参数题自动合格。

## 2026-10-27 本轮真实入库及来源筛查更新

- [48 道原创物理化学计算题生成器](scripts/import-original-advanced-physical.mjs)已由成功的 GitHub Actions 自动导入：8 类方法各 6 组参数，涵盖理想二元气液平衡、阿伦尼乌斯活化能、理想气体熵变、稀溶液活度系数、朗缪尔吸附、分子振动能级、单光子能量以及 Eyring 过渡态理论。每题有中文推导提示与独立反向数值校验。测试：[original-advanced-physical.test.mjs](tests/original-advanced-physical.test.mjs)。
- 最新机器审计：**1694** 份候选，**1416** 份练习候选和 **278** 份学习卡；正式专家批准 **0**。计算题是原创数值变式，不等于 48 道不同官方来源考试真题。
- [专家审核代表题清单](harvest/expert_review_plan.json)：从 1694 份候选中生成 **127** 道代表题供优先核查，涉及 78 个“科目+主题”组合；统计 48 个多变式簇、共 356 份候选。代表题通过并不授权自动通过整个簇。
- [来源文件结构预核验](harvest/content_inventory.json)：已按新版规则过滤 `_meta.json`、答案目录和没有直接试题线索的论文文件。当前已扫描 44 个仓库结构，并标记 1 个带潜在第三方考试资料的来源；许可证标记与文件名从不等同于逐题再分发许可。

## 正式组卷发布闸门（默认拒绝）

- [已批准发布的机器清单](release/chemistry-approved-manifest.json)：最新 **1694** 份候选中通过完整人工签核的题目 **0**，清单当前为空。统一组卷平台只能读取该批准清单，不能把 `data/candidates/` 中的待审核数据直接视为正式发布题库。
- [人工批准登记表](harvest/publication_approvals.json)当前显式为空；[发布索引构建器](scripts/build-publication-index.mjs)与[发布安全测试](tests/publication-index.test.mjs)要求科学、版权、答案、LaTeX 排版复核人员记录，并对候选内容计算 SHA-256 版本哈希。**登记仅是仓库内人工证明材料，不构成加密签名或身份认证**。
- 题目来源许可与公式计算通过机器检查，只能降低审核工作量，不能取代逐题检查与正式出版许可。

## McMaster 大学量子化学真实课程练习（2026-10-27）

- 从 [CHEM 3PA3 来源仓库](https://github.com/PaulWAyers/IntroQChemProblems) 两份公开 Jupyter Notebook（题目与教师参考键）按固定版本整理了 **9 道不同课程练习题**，提供中文重新表述、解析和逐题原文件 cell 索引；不同于批量生成的数字变式。
- [固定来源与许可证据](harvest/pinned_introqchem_2021.json)、[固定题导入器](scripts/import-introqchem-2021.mjs)、[回归测试](tests/introqchem-2021.test.mjs)、[原参考键问题明细](harvest/import_reports/introqchem_2021_source_exercises.json)。
- 纠正了激光作用力单位（N）、复共轭薛定谔方程的 ℏ² 系数、以及原学生版双向本征函数命题与教师答案键只给单向命题的不一致。
- 课程主资料宣称 CC0，但原作者明确保留第三方材料版权。**新增九题全部 source.content_rights_verified=false 且 item_level_rights_review_pending=true**：逐题授权或作者身份确认未完成，不允许被正式组卷系统调用。
- [机器审计](harvest/quality_audit.json)现区分明确声明“内容权利已核验”与“明确待核权”。最新为前者 **1694**、后者 **9**、未标注 **0**；此为候选元数据状态，不代表化学专家对科学性、教学难度、版权链或出版许可的最终批准。
- 最新 **1703** 份候选中包括练习候选 **1425** 与学习卡 **278**，正式专家审核通过并可发布的仍为 **0**。
