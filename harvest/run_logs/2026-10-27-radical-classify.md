# 2026-10-27 大学化学题库采集：Radical Learn

## 已核验成果
- 起点 640 道待审候选；本轮成功新增 **26 道有机化学**自由基分类题；实际核对 `main/data/candidates/` 有 **666 个 JSON**。无机 0、分析 0、物化 0；专家终审通过 0。
- GitHub 搜索 21 次、626 条原始命中，新增独立发现仓库 **0**，目录维持 **568**；本轮新增已核权题源 **1**。
- 来源：`ChemTrain/radical-learn`，作者 Quentin Bindschaedler，固定 SHA `a1c6d4cb567db370fec10a2f258048f7e89f466c`；内容 **CC BY 4.0**（明确涵盖题目和解释），代码 MIT。证据：https://github.com/ChemTrain/radical-learn/blob/a1c6d4cb567db370fec10a2f258048f7e89f466c/LICENSE-CONTENT.md 。
- 题源 HTML Git Blob SHA `7a81ac8756d00a0bd2f759f08b5c217e136e7937`；四份镜像原始文件均逐字节哈希核验。只读取内嵌 JSON，不执行外部 JS。
- 上游 50 张卡：29 classify、12 partner、9 regio。**仅将 26 张文本自洽的 classify 卡转成 26 道中文改编候选题**；排除 3 张双亲性卡（Methyl、Trifluoromethyl、Phenyl radical）和 21 张依赖结构图的卡，不把来源卡片数虚算为入库题数。
- 逐题保留来源、固定 SHA、CC BY 4.0 署名、原英文解释、原卡号和中文改写说明；题干 SHA-256 精确去重，已有文件不覆盖；`awaiting_expert_review`、`publishable=false`。
- 其他导入器本轮新增 0：Muza 跳过 5、TMC 跳过 593、chemquiz 跳过 42；本轮 26 道重复跳过 0。
- CI 及导入脚本提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/4760514e45372a90e30099622ad70cf8a980c4cd
- 真实新增 26 道题提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/1866574a2a400558283779eb89940dcc9c0d5f06
- Actions 成功运行：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40375620764
- 稳定来源和统计报告：`docs/SOURCE_CHEMTRAIN_RADICAL_LICENSE_REVIEW.md`、`harvest/import_reports/chemtrain_radical_classify.json`。

## 未导入候选、风险与错误
- `microsoft/chemistry-qa` 收集自 Socratic，缺乏对原题的明确再分发授权；`PaulWAyers/IntroQChem` 明示第三方改编材料仍有原版权；`pranav11722/ChemQuiz-Pro-` 的 MIT 描述只明确软件代码；`echemdb/electrochemistry-data` 为实验文献数据，不是完整问答。本轮均未转存为试题。
- Draft PR #7–#9 的 ChemTrain 原始题对象可能与本轮重叠，仍待独立核权、化学质检及语义去重，未计入主分支。
- 待专家审定 26 道自由基极性题在不同反应条件下的适用性。物理、分析、无机化学仍需明确内容许可且带答案的大学习题。
- 本轮 GitHub Actions 各测试、导入、提交步骤 **全部成功，无导入错误**；每 30 分钟采集计划保留。
