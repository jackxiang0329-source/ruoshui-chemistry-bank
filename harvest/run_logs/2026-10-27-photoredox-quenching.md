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
