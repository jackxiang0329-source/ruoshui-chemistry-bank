# 大学化学开放问答提速：压缩批处理、上游 502 恢复与审核队列

日期：2026-10-27。仓库：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank

## 已核实的基准与增量

- 本轮前官方候选：**1390**（无机 849、有机 455、分析 33、物理 53），全为 `publishable=false`，专家批准 0。
- 本轮前 NVIDIA AI 研究待审记录：**1922** 条，扫描源数据前 2000 条。
- 来源 NVIDIA Nemotron-Science-v1：<https://huggingface.co/datasets/nvidia/Nemotron-Science-v1>，固定 revision `82e1af468197076b4f0f392c239274eac032adc7`，授权卡和逐行元数据 `cc-by-4.0`；只取 `default/RQA` 化学推理问答，模型生成答案均未核实。
- 实际运行 40465105272：扫描源 1600 条，合规格式新暂存 **1536**，不符长度 **64**；累计研究暂存 **3458**。
- 实际运行 40465616713：扫描源 1600 条，再暂存 **1536**，不符长度 **64**；累计研究暂存 **4994**。
- 实际运行 40465886580：尝试扫描 3200 条时，Hugging Face `/rows` 返回 HTTP **502**，程序在提交前停止，**新增 0**，没有中间不完整归档。
- 修复请求重试（限定最多 3 次，支持 408、429、500、502、503、504，尊重 Retry-After 并限制上限）；不跳过内容许可、固定来源 SHA、行号、唯一指纹或端到端完整性校验。
- 修复后的实际运行 40466094585：扫描 **3200** 条，再暂存 **3062**，不符长度 **138**；累计研究暂存 **8056**，源数据游标 **8400**。
- 本轮新增研究待审数据合计 **6134** (=8056−1922)，新增可正式出版或专家审定题 **0**；和合法题库 `data/candidates/` 完全隔离。 `publishable=false`、`exclude_from_official_bank=true`。
- 压缩归档 `.jsonl.gz` 支持旧版 `.jsonl` 可读，单轮 3200 扫描的新增 3062 条压缩 Git 文件约 **2.67 MB**，避免逐题数千个文件；当前暂存上限 **20000** 条，达到上限后停止，不会无限增长。
- 自动调度：NVIDIA 研究问答每 5 分钟最多 **32 页×100 = 3200** 条源数据；全网 GitHub/Hugging Face/Zenodo 来源发现每 10 分钟；依法核权正式题目导入及质量审计每 30 分钟。GitHub Actions 调度及上游 429/502/503 可导致延迟，不保证每轮达到峰值。

## 实际工作流证据

- 1600 行首轮 success：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40465105272
- 人工审核队列与第二个 1600 行 success：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40465616713
- 上游 502 的失败： https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40465886580
- 修复后 3200 行完整 success：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40466094585
- 批量 gzip/旧档支持：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/2510102c8464451758eed6560f29c7d8aac8ea46
- 专家审核优先队列生成器：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/df9d912d800a2a013231926bd1eb2d1ef5f47155
- 扩大预核验到 40 来源/轮：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/1a1f8b7a3f4625c96de792c62550824c28a6d217
- 3200 行上限扩容：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/6f2bd634b6b143bad42df04d9c3923189767dc34
- 429/502/503 有界重试修复：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/42320f3fc65a8b97a947cd8661534f01af963962

## 来源核验与人工审核效率

- GitHub 发现来源索引 **757** 条、外部 Hugging Face/Zenodo 来源元数据 **233** 条，总计 **990 条平台记录**；跨平台镜像未做内容级去重，不能视为 990 个独立合法题库。
- GitHub 仓库 LICENSE/README 首层预核验已完成 **160** 条，有 **91** 条找到 LICENSE 文件。仓库级开放许可不保证上传的卷子、课本题、图片、数据库第三方版权，**自动批准重分发的题集为 0**。
- 新建 [人工专家优先审核队列](../nvidia_rqa_review_queue.json)，从 **8056** 个尚未核验的 AI 研究问答中产生 **125** 个审查任务，按分析、物理、无机、有机和未分类候选排序。学科启发式分布：分析 435、物理 1263、无机 125、有机 180、需人工分类 **6053**。
- 质量队列只包含少量题文和答案预览、源 UUID、源行号、题文哈希、审查任务清单。检查与 `data/candidates/` 正规化题干完全重复条数 **0**，但**没有**宣称跨语言、相近知识点或变式语义重复已经清零。
- 审核队列是待工作清单，不是答案或权限验证。严禁自动转移到可发布题库。

## 待办和风险

1. 外部 API 高负载仍可能偶发 502；有限次重试后继续失败会停下当前批次，不会虚报成功。下一轮从旧安全游标继续。
2. 对 6053 个无法唯一分类的 AI 问答，需要可靠的四科分类与专家抽查，防止泛化标签错误；AI 解答特别是计算值、单位、公式需要独立复算。
3. 已获得仓库层许可证的 91 条来源仍要核验 **题文/答案/图像逐项版权和第三方内容来源**；不得将元数据来源数等同于合规原题增量。
4. 到达研究区容量上限 20000 后，应集中整理低质量题、迁移到合适的对象存储或经人工复审清单之后再扩容，避免 Git 仓库无限累积未核验材料。
5. 正式题库仍为 **1390 候选、0 已批准**；没有把 6134 条研究问答误计入本科正式习题。

