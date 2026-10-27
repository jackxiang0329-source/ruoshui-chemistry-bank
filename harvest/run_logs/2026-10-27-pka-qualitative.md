# 2026-10-27 大学化学题库采集：ChemTrain pKa Learn 定性酸性位点

## 已核实增量（北京时间 2026-10-27）
- 导入前 `main`：`8f599d27dae37654051689d5c4f7e926f995ebd9`，`data/candidates/` 785 个 JSON 文件。
- 代码、20 条精选固定快照、CI 测试：`278b11a81386a5c753ef89b31029ad3fe6d24b49`；修复选项轮换及测试：`719aa2477443d15f89d2b89beb3ea59392b29b6d`。
- **真实题目导入提交**：`31c15b4fd15609e961b8d2d9665b6af52a38daf0`，https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/31c15b4fd15609e961b8d2d9665b6af52a38daf0 。
- GitHub 提交 API 差异：**21 个新增文件 = 20 个 `data/candidates/*.json` + 1 个 `harvest/import_reports/chemtrain_pka_qualitative.json`**。提交后候选题总数 **805**。
- 按学科本轮增量：无机 0，有机 **20**，分析 0，物理 0。20 道是来自同一来源 20 张原始多位点题卡的**文字改编练习**，不是 20 道独立考试原题。
- 本轮新增已核权导入来源 1 个（`ChemTrain/pka-learn`）；GitHub 自动来源发现新增 **0**，发现目录总数 **568**；没有把原始题卡、题目变体和来源仓库混为一谈。

## 上游授权与数据边界
- 原作者 Quentin Bindschaedler；来源：https://github.com/ChemTrain/pka-learn 。
- 固定提交：`5250dce7a367be0e767b2e3e7a26aa50c27b12a0`。
- `pka_learn.html` Git Blob SHA：`de1e8441908198301a7e82da76fd5febd9de8900`。
- `LICENSE-CONTENT.md` Git Blob SHA：`bd1d90f0a381f9d0b0a903bf203828c1e2a05f91`，明确将作者的题卡选择、文字说明和多位点比较内容以 **CC BY 4.0** 许可，要求署名及注明修改：https://github.com/ChemTrain/pka-learn/blob/5250dce7a367be0e767b2e3e7a26aa50c27b12a0/LICENSE-CONTENT.md 。
- `LICENSE` Git Blob SHA：`f12f837df6513709d7d6e8234f9d9427d81d1627`，程序代码 **MIT**；本轮未复制或运行上游程序。
- **版权限制：** 上游明确声明引用的第三方实验/估算 pKa 数值不受该 CC BY 4.0 内容许可覆盖。因此只保留作者原创的定性比较与文字位点标签，不复制数值、分子图、Logo 或论文内容。核验时曾使用固定上游数值判断两选项是否有足够差异，但候选题与快照均**不含**这些数值。
- 每题保留上游提交、文件 Git Blob、原题分组及索引、作者署名、许可证证据链接、改编说明、待审状态。

## 质量、去重与执行
- 上游 29 道多位点原始题卡，选取 20 道具有明确优先酸性位点且固定版本差异充分的比较题；排除其余 9 道。每道只生成 1 道中文单选候选题，选择题位点以原英文标签展示。
- `tests/chemtrain-pka-qualitative.test.mjs` 验证来源固定元数据、20 个唯一 ID、单一正确答案、选项合法、禁用第三方数值和未审发布门禁；`scripts/import-chemtrain-pka-qualitative.mjs` 对已有 ID 进行题干、答案、来源及状态冲突检查，冲突时拒绝覆盖。
- 20 个新 ID 在 `data/candidates/` 之前不存在；CI 结果：`pKa Learn: upstream site questions=29; curated=20; added=20; already_present=0; excluded=9; expert_approved=0`。
- GitHub Actions 最终成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40424830776 。
- 同一轮旧来源复跑：Muza 5、TMC 593、chemquiz 参考 42、Radical 26、Photoredox 18、原创物化 24、PG Learn 22、MIT parametric 30，全部报告新增 0（其他既有来源仍由各自导入脚本去重）。
- GitHub 搜索 21 次成功，626 条原始命中（含重复），筛掉 16 条无关/fork/归档记录；新增独立来源候选 0，目录 568→568；搜索不完整响应 0，非致命搜索中断 0。
- 全部 20 道新题：`quality_status=awaiting_expert_review`、`publishable=false`，**专家终审通过 0 道**。尚未做完跨来源语义去重和人工专业化学复核。

## 其他检索及排除
- **物理化学：** `angiorda/Physical_chemistry_oral_exam_questions` 有动力学口试 Notebook，但未发现明确题文再分发许可证；`MauricePasternak/Chemsolver` 为解题程序且未确认题文授权，本轮均未复制。
- **无机化学：** `lenguyenhieustd/ChO-Inorganic-Chemistry` 标有 AGPL-3.0，但偏化学竞赛，未核实其中题文权利与大学层次适配；`er-ads/InorgChem` 包含第三方教材 PDF，版权风险较高，未导入。
- **有机化学：** `skatzeducation/organic-chemistry-quiz` 主要依赖图片，未确认可再分发的独立题文与图片权利；未复制。
- **分析化学：** 本轮未找到通过题文再分发授权、完整答案和大学层次筛选的独立新题源；新增 0。

## 错误与未完成事项
- **首次 CI 失败**：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40424799278 。新测试误将 2/3 选项题当作全部 4 选项，期望答案 A/B/C/D 均匀分布；失败发生在测试阶段，**没有导入或提交题目**。
- **已修复**：提交 `719aa2477443d15f89d2b89beb3ea59392b29b6d` 改为按真实选项数轮换，并调整测试期望。后续 CI 全部步骤成功，题目增量提交已核实。
- 待完成：对 20 道酸性位点题的溶剂条件、共振解释和潜在近似值进行专家审核；建立跨来源语义去重；审查 PR #1、#5–#9；继续寻找拥有明确题文再分发权利的分析/物理/无机化学完整问答。GitHub 每 30 分钟采集计划未更改。
