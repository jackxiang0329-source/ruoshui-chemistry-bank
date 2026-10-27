# ChemTrain Radical Learn 开源有机化学题卡增量与质检（2026-10-27）

## 实际许可与来源

- 上游：https://github.com/ChemTrain/radical-learn ，作者 Quentin Bindschaedler。固定 Git SHA `a1c6d4cb567db370fec10a2f258048f7e89f466c`，源 HTML Git Blob `7a81ac8756d00a0bd2f759f08b5c217e136e7937`，内容许可证 Blob `dcc63233d386b460db6aefe60c1086fc15c865e9`。
- `LICENSE-CONTENT.md` 明确说明原作者的题目、解析采用 CC BY 4.0；代码另按 MIT。12 道文字伙伴选择题出自 `radicals[]` 的 `match` deck，`type=partner`，有题目名称、两个独立文字选项及说明。
- 上游作者依据 Parsaee 等（Nat. Rev. Chem. 2021）解释自由基极性；本次**没有复制第三方论文全文、结构 SVG 或原始实验数据**，而是保留作者许可的说明与正确项及引用链接。
- 固定 source 文件由此前已验证的 `third_party/ChemTrain_radical_learn/` 加载，执行前强制核对 Git Blob 和 LICENSE-CONTENT，发现任何许可或数据布局变化即报错停止。

## 增量与完整性

- 原始 Radical Learn 29 张自由基亲/亲电性分类卡，其中 26 张此前已经导入并保留原有来源记录；本轮**只从另一个 deck 新增 12 道匹配题**，没有对旧有 26 道分类题再次计数。
- 新题采用简洁中文题干，保留英文试剂/自由基名称以保持可检索性，解释采用原作者文字；两个选项、作者规定的最佳伙伴与源数组编号均有固定版本校验。
- [导入器](../../scripts/import-chemtrain-radical-matching.mjs)、[来源答案键测试](../../tests/chemtrain-radical-matching.test.mjs)。历史 12 个伙伴从源版本确定性解析，ID 为规范化 SHA-256，重复执行不会再次写题；发现答案或来源冲突不覆盖旧题。
- 本轮 GitHub Action 成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40475652869
- 实际数据写入提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/605f56de38abe492d3521024be7d49d7f139a646
- 此提交确实**新增 12 个 `data/candidates/*.json`**，并新增 `harvest/import_reports/chemtrain_radical_partner_matching.json`，`first_run_added=12`。专家通过 0，发布 0。
- 本轮同时发生**独立并行提交** https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/d47765ebe631e70ba32f6ef04be0c4bc901e77ed 及其导入器写入的 **12 道** DFT Course 物理化学参数计算练习。该 12 道不属于本导入器，原来源表属于 Nathan Lui 的 `thisisntnathan/dftCourse`，根据作者 CC BY 授权表格演算而非转载官方题。
- 全库此前 1558 → 当前 **1582**，净增 24 = ChemTrain +12（organic 455→467）+ DFT Course +12（physical 125→137），其余无机 849、分析 129 不变。全库练习候选 1304、学习卡 278，完全同题干 0 组；同题型模板 50 组，跨语言语义去重仍需人工审查。

## 新增审计覆盖及临时文件清理

- 同时把 `licensed_radical_matching_mcq` 列入 `scripts/audit-mcq-integrity.mjs` 的明确题型白名单，检查选项独立、答案正确项、原作者内容许可证、上游源行索引、同一源行被重复导入，以及尚未审核不允许发布。
- 增加 2 个专用审计单元测试，避免 12 道新选择题被忽略。上一版本只检查 `licensed_text_only_multiple_choice`，这一质量覆盖缺口已消除。
- 两次一次性来源探测工作流及相应脚本（用于判断 32 类题型是否依赖图像、伙伴名是否完整）在结论确定后清理，不再积累临时任务文件。
- MyOpenMath 虽有公开逐题社区许可证页，但其题目生成源程序需经教师账户申请，未绕过访问限制。ChemCollective 页面采用 CC BY-NC-ND，不能以仅供教学使用的权利直接转载/改编为可再分发题库。<https://chemcollective.org/help/copyright> 。

## 状态与待复审

本轮 12 道有原作者题文许可证且机器结构校验通过，但仍是 `awaiting_expert_review`、`publishable=false` 的候选试题，不可将题目来源授权误说成化学答案已获专家保证。物理化学 DFT Course 12 道同样只用于候选池，其他 NVIDIA AI 研究暂存材料仍隔离在 `data/research_quarantine`。
