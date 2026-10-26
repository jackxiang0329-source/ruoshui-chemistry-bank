# ChemTrain PG Learn 保护基兼容性表来源核验（2026-10-27）

## 上游与许可
- 仓库：https://github.com/ChemTrain/pg-learn
- 作者：Quentin Bindschaedler；固定 Git commit：`b232355d130198e4f6519388201c65e7359238e0`。
- 原始数据：`pg_learn.html`，Git Blob SHA `7763f186d6453ec9b65b5f9e7aefb06a100a5279`；`window.PG_DATA` JSON 含 **44** 种保护基、**22** 组条件、兼容性表及备注。
- 题文及兼容性表：**CC BY 4.0**，上游 `LICENSE-CONTENT.md`（Git Blob `12cc62b715826eec57a9830d8a5bfaaf952218f4`）明确包括 chart、notes、questions and answer choices。代码：**MIT**，上游 `LICENSE` Git Blob `f12f837df6513709d7d6e8234f9d9427d81d1627`。
- 来源署名：PG Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/pg-learn, licensed under CC BY 4.0.
- 本仓库修改：仅把 22 条符合筛选标准的保护基兼容性记录改编成中文四选一教学题。未复制结构图、Logo、外部论文或第三方实测数据；不改变原作者署名及 CC BY 4.0 条件。

## 精确筛选与去重
- 从固定版本的原始 HTML 的 `window.PG_DATA` JSON 直接提取，未执行 HTML 内的 JavaScript；仅使用原始 `groups`、`conds`、`chart`、`notes`。
- 每道题选择来源 `std` 推荐且标为 **X（脱除）** 的一项 `core` 条件，另选 3 项标为 **.（保留）** 的 `core` 条件。4 项均不得附带特殊备注。
- 对 `~`（可能/条件相关）、`s`、`x`、`x|s` 等含糊或底物依赖格一律排除。44 种保护基中符合筛选的 **22** 种，各生成 **1** 道四选一题；其余 **22** 种不入库。
- 每题保留上游组 ID、标准条件 ID、四个源表格单元格的原始标记、版本、Git Blob SHA、CC BY 4.0 署名、中文改编说明；题干经 NFKC、空白归一和 SHA-256 去重；同 ID 已存在时校验核心字段并拒绝覆盖冲突。
- 所有题均为 **候选题**：`quality_status=awaiting_expert_review`、`publishable=false`。兼容性表是教学归纳，**不能替代具体实验方案**；需要专家复核底物依赖性、条件浓度及安全性。
- 固定抽取快照：`harvest/pinned_pg_learn_deprotection.json`；导入脚本：`scripts/import-chemtrain-pg-learn.mjs`；测试：`tests/chemtrain-pg-learn.test.mjs`。
- 实际新增文件数须以 GitHub Actions 运行结果和主分支树差异核定，不能把 44 条源记录冒充 44 道已入库题。

## 尚未解决
- 跨来源语义重复仍待专家/算法联合复核；`PG Learn` 的兼容性表未逐一用独立化学文献验证。
- 物理化学、分析化学缺乏新的经过内容再分发权利核验的题源；PR #1、#5–#9 仍待逐项版权、来源和质量审查。
- 若 CI 失败，查看运行日志，不得将未提交的候选题计入新增数量。
