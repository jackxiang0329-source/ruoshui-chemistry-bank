# Reaction Learn 版权与质量审查｜2026-10-27

## 来源固定
- 仓库： https://github.com/ChemTrain/reaction-learn
- 提交： `7563032ec79ed429336966fb42136d2815cd7e42`
- `reaction_learn.html` Git Blob SHA：`3bf4278bb72f625b5abee37da72300f4ba901187`
- `LICENSE-CONTENT.md` Git Blob SHA：`ab6bfb5c75085c6e2b05b5c2c9d2b936f611ba6a`
- `LICENSE` Git Blob SHA：`f12f837df6513709d7d6e8234f9d9427d81d1627`
- 原作者：Quentin Bindschaedler，Reaction Learn (ChemTrain) (2026)。
- 原项目明确声明原创卡片文字、说明及卡片编组为 **CC BY 4.0**，代码 **MIT**；关联 Wikipedia 文本、Twemoji/徽标不在导入范围。

## 本轮合规转换
- 原始：20 个主题共 278 张卡片，含 231 个命名反应与 47 种试剂。通过源 HTML 固定 Git Blob SHA 严格校验后解析作者自有 JSON 数据，不执行外部代码。
- 仅提取作者说明为其原创的卡片名、条件、短文本作用说明和可用的补充注释，生成中文问句 + 来源英文答案的**复习型学习卡**。
- 不导入 SVG 结构、分子表、反应示意图、完整 Wikipedia 文本、外部文章或软件代码。
- 自动拒绝空字段、HTML 内容、不合理字段长度以及同名重复卡；按规范化题干 SHA-256 检查已入库文件并核对原有答案/来源。新卡片标记 `awaiting_expert_review`、`publishable=false`。
- 版权许可通过验证不等于化学内容经专家审核；反应描述可能缺少具体底物和适用条件，不能直接作为原始考试真题使用，跨仓库语义相似题仍待人工判断。

## 结果登记
- 仓库流水线生成 `harvest/import_reports/chemtrain_reaction_learn.json`，记录实际采用、跳过、已存在及本轮新增数。
- 题目文件位于 `data/candidates/`；仓库既有原题不覆盖。
- 待完成：反应机理和试剂用法化学核对、中文翻译与 LaTeX 化、跨来源语义去重以及正式组卷分级。
