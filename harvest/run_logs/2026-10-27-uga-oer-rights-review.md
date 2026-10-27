# 开放大学化学习题 OER 官方许可预审（2026-10-27）

## 仓库核查基线
- 本轮核查的正式候选数据：**1390**（无机 849、有机 455、分析 33、物理 53）；练习候选 1112、学习卡 278；专家批准发布 0。
- 来源目录为元数据，不是可复制题量。机器报告：`harvest/quality_audit.json`；同模板提示 36 组，完全相同题干 0 组；尚未人工语义去重。
- 本轮从外部来源新导入的可再分发题目：**0**；新增待审 AI 研究问答不计入正式候选。
- 已核查旧版 `scripts/import-approved-chemistry.mjs` 的未来风险：缺少显式 `publishable=false`，存在跳过哈希冲突而不核对内容、批处理中途失败留下部分文件等问题。修复提交在本轮历史中，待 GitHub Actions 完整执行结果确认。

## 机构原始许可声明（工作层次，不是逐题审查）
以下均为 GALILEO / University System of Georgia 官方页面声明 **CC BY 4.0**，可依法按其许可条件再分发**权利确属该作品作者的部分**，但外部教材截图、结构图、答案来源仍需逐文件核对：

| 资源 | 学科初筛 | 官方来源及作者 | 当前处理 |
|---|---|---|---|
| General Chemistry II Recitations and Worksheets (2024) | 无机/分析/物化基础 | [GALILEO 19](https://oer.galileo.usg.edu/chemistry-ancillary/19/), Eman Abdelrahman / Matthew Seivert | 只登记，不复制 |
| General Chemistry I Recitations and Worksheets (2024) | 无机/分析/物化基础 | [GALILEO 20](https://oer.galileo.usg.edu/chemistry-ancillary/20/), Matthew Seivert / Eman Abdelrahman | 只登记，不复制 |
| Modern Organic Chemistry I Videos and Recitation Worksheets (2025) | 有机 | [GALILEO 22](https://oer.galileo.usg.edu/chemistry-ancillary/22/), Shelby Dickerson 等 | 只登记，不复制 |
| General Chemistry for Scientists and Engineers I / Honors I Case Studies (2025) | 无机/分析/物化基础 | [GALILEO 23](https://oer.galileo.usg.edu/chemistry-ancillary/23/), Jessica Jensen 等 | 只登记，不复制 |
| General Chemistry for Scientists and Engineers II / Honors II Case Studies (2025) | 无机/分析/物化基础 | [GALILEO 24](https://oer.galileo.usg.edu/chemistry-ancillary/24/), Jessica Jensen 等 | 只登记，不复制 |
| Survey of Chemistry I Solved Problems Set (2021) | 普化计算与基础 | [GALILEO 10](https://oer.galileo.usg.edu/chemistry-ancillary/10/), Anne Gaquere-Parker / Farooq Khan | 只登记，不复制 |

- 其中 19 号在旧日志中已发现，不能算本轮“首次发现”；其他页面也可能存在于全网来源索引中，不将重新登记算成新题。
- 机构页面能核实作品层次 CC BY 4.0，但 Manifold 正文附件（含 .docx/.pdf、讲师答案、图示）尚未逐件取得并确认第三方例外，故**逐题权利批准 0**。
- 每题后续必须保存官方作品 URL、附件版本/哈希、原作者署名、题目与答案出处、修改说明、学科/章节、逐题质量验证及跨来源去重记录；在专家审定前必须 `publishable=false`。

## 本轮实际代码与质量工作
- 修复通用授权导入器：许可证据必填、禁止符号链接越界、整批预检后再写入、同 ID 必须核对题文/答案/来源/发布状态、全部显式待审；对原有 Muza MIT 来源保持兼容。
- 增加 `harvest/oer_work_license_review.json` 的 6 项可审计来源台账、`scripts/validate-oer-work-license.mjs` 和回归测试；台账不能作为自动导入白名单。
- 此轮新增正式候选 **0**；重复导入 **0**；未复制第三方图像、教材题干或未经审查的答案。

## 未完成、风险和错误
1. 尚未完成上述 Manifold 正文附件逐文件版权、题干、答案、图片及完整性审查；不得将作品级 CC BY 声明扩大为第三方素材授权。
2. 部分候选来源仅有 MIT 软件许可证而没有题文来源证明；继续排除。
3. 36 组相同数值模板和跨语言语义近重复需人工复核；来源元数据中的 MIT/GPL/CC0 不能自动认定为本科题库。
4. GitHub Actions 调度可能延迟；提交成功与工作流成功必须分开报告。新预审测试不依赖网络，避免每次运行触发对 GALILEO 的高频请求。
5. 研究暂存区 NVIDIA 数据为 LLM 生成、未核验答案，绝不与本轮正式候选增量混淆。

## 可核对的本轮提交与工作流状态

- [授权导入器安全修复及测试](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/7c42c0721590ec30f632b3b2c00c45d0fb304692)。
- [六项机构 OER 许可证台账、验证器、回归测试与 README 修订](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0ad02b88f5eca58bdd950a59e9a7b8afe17c3e67)。
- 修复提交触发的 [30 分钟采集工作流 #40465639978](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40465639978) 已完成 **success**；共 49 个步骤，无失败步骤，说明现有 Muza 5 题重复检测及全部导入器未因新安全门槛受阻。
- OER 台账测试触发的 [工作流 #40465737562](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40465737562) 在本条记录撰写时仍为 **pending**；不能称该测试已经通过。
- 最新实读来源元数据：GitHub 来源目录 **757** 条、HF/Zenodo 外部目录 **233** 条；许可证文件预筛选 **124** 个仓库、自动确认题文授权 **0**。此三项均为元数据与许可预筛，不是新增习题。
- 外部附件读取尝试：Manifold “Survey of Chemistry I Solved Problems Set” 的原始 zip 下载返回 HTTP 404；Organic Chemistry I 的附件由网页工具返回不支持的 DOCX Content-Type。**这两个失败均未导致题目误导入**，需通过可重复下载并核验文件哈希的方式继续处理。
