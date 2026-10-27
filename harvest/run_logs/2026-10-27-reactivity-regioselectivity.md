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
- 运行结果：见下方已核验的 GitHub Actions、提交差异与错误记录。
- 待办：跨来源语义去重；核对位点编号与真实反应条件；化学专家复核；继续寻找无机、分析、物化完整且明确可再分发的题目。


## 本轮 GitHub 实际执行与差异复核（2026-10-27 09:08 北京时间）
- [代码、固定快照、许可门禁和测试提交](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/661078043cef17a5e572c783ddc723a22e0004db)：五个文件，包括自动导入工作流。
- [实际导入提交](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/5424909edd884d738c606f603b1defec1d6427dc)：经 GitHub Commit API 差异复核，**21 个新增文件 = 20 个 `data/candidates/*.json` + 1 个 `harvest/import_reports/chemtrain_reactivity_regioselectivity.json`**；旧题无覆盖。候选题文件总数 **805 → 825**。
- [GitHub Actions 成功运行](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40430660822)：全部测试、搜索、导入、推送步骤成功；实际日志 `Reactivity Learn: source=61; curated=20; added=20; already_present=0; excluded=41; expert_approved=0`。
- 本轮学科增量：无机 **0**、有机 **20**、分析 **0**、物理 **0**。新核权独立来源 **1 个**，但仅导入作者 CC BY 4.0 的文字区域选择性题卡，**不等于 20 道独立考试原题**。候选题全部待专家审校，不发布。
- 自动搜索：21 次 GitHub API 请求成功，626 条原始命中（含重复），16 条被过滤，新增发现来源 0，来源目录 **568 → 568**；非致命搜索中断 0。
- 既有来源导入器重跑无新增，未重复导入已有 805 道。新来源的 20 道均有来源固定版本、原始卡片编号、署名、许可、选项唯一性和 SHA-256 ID；语义级跨来源去重仍待开展。
- 错误：本轮**无失败测试、无导入异常、无提交失败**。GitHub Actions 正常结束。
- 其他检索：`ChemTrain/reaction-learn` 的原创卡片采用 CC BY 4.0、代码 MIT，但本轮未完成从其反应图到可自足文字题的无歧义转换，新增 0；`ChemTrain/chemtrain-daily` 混合了已经导入的多个 ChemTrain 来源，可能重复且含第三方测量值，本轮新增 0；`magnusgp/nernyx` MIT 是电化学有限元求解器，不是可直接导入的完整问答数据，新增 0。无机、分析、物化其他检索结果未通过本轮题文许可证及完整答案双重门禁，均不计入新增。
- 待完成：逐题复核芳香取代位点、环氧开环的酸碱条件、烯醇盐选择性与醇氧化；跨来源语义去重；PR #1、#5–#9 的版权/答案审核；继续寻找大学分析化学、物理化学和无机化学的合法完整问答题源。
