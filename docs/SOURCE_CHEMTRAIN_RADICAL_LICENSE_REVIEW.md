# Radical Learn：有机自由基反应性（2026-10-27）

## 已核验来源与授权

- 上游：ChemTrain/radical-learn（Quentin Bindschaedler），固定 Git SHA `a1c6d4cb567db370fec10a2f258048f7e89f466c`。
- 内容明确授权 CC BY 4.0：`LICENSE-CONTENT.md`（Git Blob `dcc63233d386b460db6aefe60c1086fc15c865e9`），逐字明确覆盖 `radical_learn.html` 中的题目、解释和结构图。**代码**另按 MIT 许可（`LICENSE`）。原始四个文件镜像到 `third_party/ChemTrain_radical_learn/`，脚本逐文件校验 Git Blob SHA，绝不执行 HTML 内 JavaScript。
- 署名：Radical Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/radical-learn, licensed under CC BY 4.0.
- 原始文件及授权： https://github.com/ChemTrain/radical-learn/blob/a1c6d4cb567db370fec10a2f258048f7e89f466c/radical_learn.html 和 https://github.com/ChemTrain/radical-learn/blob/a1c6d4cb567db370fec10a2f258048f7e89f466c/LICENSE-CONTENT.md 。

## 范围与筛选

- 上游原始 `radicals` 题组含 **29 张 classify 卡 + 12 张 partner 卡**，另有 9 张 `regio` 卡，共 50 条。这里只导入 **26 张**文字足以自洽、具有明确 `nu` / `el` 标签的分类卡；未把结构图依赖的 partner/regio 题错误当成独立纯文字题。
- 将 `Methyl radical`、`Trifluoromethyl radical`、`Phenyl radical` 三张作者明确称为 ambiphilic（双亲性）的卡隔离，不将有条件的行为强行简化成绝对二元答案。
- 26 道属于有机化学（自由基反应性），按 NFKC、大小写与空白归一化后的题干 SHA-256 精确去重；已存在的候选 JSON 不覆盖。保留英文原解释和参考链接；中文问题及答案标签为改编。
- `quality_status=awaiting_expert_review`、`publishable=false`，不进入正式试卷。仍须专家审查亲核/亲电的适用条件及具体结构，不承诺答案终审正确。
- 不复制第三方论文正文、原始结构图、测量数据；镜像 HTML 中可能含 CC BY 原作者绘图，但没有提取进候选题。
- 稳定导入报告：`harvest/import_reports/chemtrain_radical_classify.json`。每轮真实新增和跳过数量以成功的 Actions 日志为准，不将来源对象数等同新增题目数。

## 复现

`node --test tests/chemtrain-radical.test.mjs`

`node scripts/import-chemtrain-radical.mjs`

`git status --short`

## 尚未完成

- 其余 24 张 partner/regio 卡需保留化学结构信息并人工核验；ChemTrain 其他 PR #7–#9 仍在 Draft/待审，不应直接并入主库。
- 物理化学、分析化学仍需进一步寻找许可明确、带答案且教学层次合适的来源；当前这次不声称有这些科目的新增。
