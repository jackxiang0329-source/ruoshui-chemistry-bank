# 2026-10-27 Reactivity Learn 区域选择性（首次核权与待导入审查）

## 固定来源和许可
- 上游：https://github.com/ChemTrain/reactivity-learn
- 作者：Quentin Bindschaedler；固定提交：`be6505465d92fc983aabc40bd9863de791b0d2cf`。
- `reactivity_learn.html` Git Blob SHA：`9779b9167ff4af2445a1efe845db3119928f6d12`；`LICENSE-CONTENT.md` Git Blob SHA：`b1392cba296c88644742175533500dcd2ffd106a`；`LICENSE` Git Blob SHA：`f12f837df6513709d7d6e8234f9d9427d81d1627`。
- 作者原创题目、区域选择性解释和选项：**CC BY 4.0**（https://github.com/ChemTrain/reactivity-learn/blob/be6505465d92fc983aabc40bd9863de791b0d2cf/LICENSE-CONTENT.md）；程序 MIT。
- 署名：Reactivity Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/reactivity-learn, licensed under CC BY 4.0.
- **排除边界**：Mayr 数据库的实验 N、sN、E 数值不属于作者 CC BY 授权；所有分子结构图、Logo、外部论文和链接正文均未复制。
- 来源 `window.RL_DATA.regio` 中 5 组共 **61** 条；人工筛选 **20** 条可仅用化合物名称、试剂、反应位置选项表达的题卡，排除 **41** 条（含需要结构图识别的产物选择题、可能有多结果或不适合文字表述的题目）。20 条并非独立考试原题。
- 按原始分组：芳香取代 15、羰基/烯醇盐 1、环氧开环 3、醇选择性氧化 1，均归有机化学。原题首个选项为正确答案，中文版本按题号循环调整选项顺序；保留英文来源解释等待化学审校。
- 固定精选快照 `harvest/pinned_reactivity_regioselectivity.json`，导入程序 `scripts/import-chemtrain-reactivity.mjs`，测试 `tests/chemtrain-reactivity.test.mjs`。每题 SHA-256 规范化 ID，冲突拒绝覆盖，`awaiting_expert_review` / `publishable=false`。
- 运行结果：**提交本审查时尚待 GitHub Actions 执行**，不预先声称题目已导入。真实新增数、运行错误和最终提交链接应以 GitHub Actions 及 `data/candidates/` 的提交差异为准。
- 待办：跨来源语义去重；核对位点编号与真实反应条件；化学专家复核；继续寻找无机、分析、物化完整且明确可再分发的题目。
