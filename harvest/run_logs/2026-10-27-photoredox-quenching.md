# 2026-10-27：Photoredox Learn 光氧化还原循环题源核验

- 上游：ChemTrain/photoredox-learn，固定提交 `260cf0553b42fc510de655d68bad902af7f94e38`，原始 HTML Git Blob SHA `5351d56c165fd581edbc66e71f80c3a42bcdb738`。
- 内容许可证：**CC BY 4.0**，固定 `LICENSE-CONTENT.md` Blob SHA `03a3851d5f826d709b5e31f0718e102363fa6860`。上游明确覆盖 Cycles 题目与解释，作者 Quentin Bindschaedler。代码 MIT，固定 `LICENSE` Blob SHA `f12f837df6513709d7d6e8234f9d9427d81d1627`。
- 核验路径：`https://github.com/ChemTrain/photoredox-learn/blob/260cf0553b42fc510de655d68bad902af7f94e38/LICENSE-CONTENT.md`；原始题目 `https://github.com/ChemTrain/photoredox-learn/blob/260cf0553b42fc510de655d68bad902af7f94e38/photoredox_learn.html`。
- 实际从 `RL_DATA.redox` 的 `quench` 组检出 **18 条题目对象**。核验上游应用判分逻辑：`c.order[j] === 0` 表示正确，`labels[0]` 是正确答案；`fixed` 控制显示顺序而非答案编号。
- 仅固定保留反应名称、条件、正确选项和文献书目信息，**未复制**上游注释中的氧化还原电位（第三方实验测量值）、图像、论文正文及其他两组共 36 道题。转换为 18 道中文有机光化学候选题，按题干 SHA-256 去重。
- 每道题保留原始题序、固定 Git SHA、Blob SHA、CC BY 署名、变更说明与文献引用；标记 `awaiting_expert_review` 且 `publishable=false`。机理答案来自原项目，尚未由化学专家独立复核。
- 本批独立上游仓库 **1 个**、可生成题目 **18 道**，不等于新增 18 个来源；实际增量由首次成功 Actions 导入和 Git 树差异核定，重复运行只跳过已有 ID。
- 可复验：`node --test tests/chemtrain-photoredox.test.mjs`，`node scripts/import-chemtrain-photoredox.mjs`。`harvest/pinned_photoredox_quenching.json` 为从固定上游实际提取的脱敏小型快照。
- 仍待完成：专家验证每个光化学反应的淬灭类型、文献条件适用范围、与其他仓库的语义级重复检查；未纳入正式组卷。

## GitHub Actions 实测结果（本轮已核验）

- 首次脚本及测试提交：`cd7b74916230d39e1ae9825a3bcbb986751e7956`，https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/cd7b74916230d39e1ae9825a3bcbb986751e7956
- 题目实际入库提交：`a6a43eac63911acf62c2e1f61e5019faa5d1b058`，https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/a6a43eac63911acf62c2e1f61e5019faa5d1b058
- 成功 Actions 运行：`40384937433`，https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40384937433
- **本轮新增有机化学候选题 18 道**；原有候选题 666 道，提交后 Git 树实际包含 **684 个** `data/candidates/*.json` 文件（非正式审核题目）。
- 首次运行新来源题组：eligible=18、new=18、already_present=0；新增 18 道全部来自同一 `quench` 题组（氧化淬灭 6、还原淬灭 10、能量转移 2）。
- 已有题目自动跳过：Muza 5、TMC Learn 593、chemquiz 42、Radical Learn 26，合计 **666 道已存在题目**，无重复写入。
- GitHub 仓库发现：21 次成功搜索请求，626 条原始命中（包含重复），本轮新增来源候选 **0**，来源目录保持 **568**。
- 质量控制：Node.js 新导入器测试通过，原有采集、TMC、chemquiz、Radical Learn 测试通过；本轮 Actions 所有步骤成功。专业化学专家审核通过 **0 道**，`publishable=false`。
- 错误记录：本次提交及 CI **无失败步骤**；搜索 API 未报告中断。本轮没有宣称已核实 18 道题的全部上游原始论文实验结论。

## 额外来源检索与拒绝理由

- `sergeqzin/pcivmr`：GitHub 元数据为 CC0-1.0，但仓库实际只有 `LICENSE` 和 `README.md`，描述为物理化学排版 LaTeX 包，**没有可直接导入的问答数据**。
- `arturguedees/LabQuantico`：物理化学交互平台，当前仓库元数据未显示许可证；未验证可再分发的题目正文授权，**不导入**。
- `skatzeducation/organic-chemistry-quiz`：含结构图片的有机化学测验，当前仓库元数据未显示许可证；未核权图片和题干，**不导入**。
- `AbhinavMachavolu/QuizDatabank-`：有机化学测验项目，当前仓库元数据未显示许可证；未核权，**不导入**。
- 对无机化学、分析化学、物理化学的其他 GitHub 检索，本轮未找到同时满足**明确题文再分发许可、完整题目与答案、可固定版本并可去重**的新来源，因此这三个学科本轮新增 **0 道**。

## 后续未完成

1. 化学专家复核 18 道光催化机理题，尤其原论文反应条件、淬灭机制和机理争议。
2. 检查跨 ChemTrain、chemquiz、ChemIQ 及未合并 PR 的**语义重复**（当前自动化主要按标准化题干哈希去重）。
3. 优先寻找有明确内容许可证、含完整答案的**物理化学与分析化学**本科题库；仅 GitHub 仓库公开不构成题目可再分发许可。
4. PR #7、#8、#9 仍需逐项处理堆叠分支、第三方实验数值和大量图像版权，不直接整批合并。
