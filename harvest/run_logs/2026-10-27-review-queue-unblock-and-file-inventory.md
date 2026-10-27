# 大学四大化学：发现队列空转修复与具体习题文件线索审计

日期 2026-10-27；来源仓库 https://github.com/jackxiang0329-source/ruoshui-chemistry-bank

## 问题诊断：一直固定检查头部 160 个仓库

原优先队列 `harvest/source_review_queue.json` 永远只输出评分前 160 个 GitHub 来源；`harvest/license_preflight.json` 已含恰好 160 个检查条目。因此下一轮即使全网发现目录已有 757 个仓库，原预核验阶段也可能检查 0 个新仓库。

## 已完成且 GitHub Actions 核验成功的修复

- `scripts/prioritize-chemistry-sources.mjs` 引入已有来源检查账本，`choose(rows,max,reviewed)` 过滤账本中已检查来源，优先队列**自动滚动到尚未核验的仓库**；仍按分析化学、物理化学等方向与明确习题线索评分。
- 新增单元测试包含 300 仓库情形：前 160 已检查时应给出余下 140、无重复、账本全部覆盖时输出空队列且不误造新来源。
- 首个成功的完整定向搜索/权利预核验运行：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40467034448 ，累计核验 160→200，新检查 40，无自动批准题目。
- 进一步成功运行：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40467384420 ，累计核验 200→**240**，其中确认仓库存在 LICENSE 文件的条目 **114**；本轮额外检查 40，未发生 API 或测试失败。
- 当前未核验待处理队列包含 **120** 个来源，之后仍可继续刷新，解决了因头部固定窗口造成的空转。
- 修复代码提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0edb95f2d721965362ed9f24431449522edd1d99

## 新增高价值内容线索排查，不复制未经许可的正文

- `scripts/inventory-chemistry-question-files.mjs` 在已有许可证线索及未触发第三方教材风险的仓库中，读取 GitHub **repository metadata 和 tree metadata**，只登记疑似题目、答案、Notebook 的**文件名和仓库版本**，不读取题干/答文/图片。
- 每个 10 分钟轮次最多检查 12 个仓库结构，3 个并发，记录于 `harvest/content_inventory.json`，本轮检查 **12/12 成功、失败 0**。
- 12 个中 **4 个**具备练习/测验/作业等文件名线索，但**0 个**同时具有独立命名的答案文件。样例包括 `virtual-labs/exp-estimation-of-phosphate-content-amrt` 和 `virtual-labs/exp-concentration-of-vitamin-c-amrt` 的实验 `assignment.md`，仅说明可能有题文，不代表已有正确解答或再分发许可。
- 上述 Virtual Labs 仓库上游标示 AGPL-3.0；即使软件代码许可有效，也不能跳过实验内容、图像和答案的版权及质量复核，未导入任何题文。
- 仓库文件结构检查代码提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/fecab582eee47b3e8f4a374952c6de24b68be2c6
- 文件结构检查 Actions 成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40467384420

## 当前有效数据量与合规边界

- GitHub 发现来源索引 **757**；Hugging Face+Zenodo 元数据索引 **233**；平台记录合计 **990**，可能有跨平台重复。
- NVIDIA 研究区在本轮开始时已经暂存 **8056** 条未核验模型生成问答，全部标记 `publishable=false`，不是正式大学习题。该研究区的数据另有 GitHub Actions 5 分钟分页拉取机制，容量上限 20,000；外部服务遇到 HTTP 429/502 后采用有限重试，不保证每轮新增。
- 本次队列及文件结构修复**没有新增已授权且答案经审核的正式题目**。正式候选仍为 **1390**：无机 849、分析 33、物理 53、有机 455。候选全部尚待专家审核，批准发布 0。
- GitHub Actions 的 `GITHUB_TOKEN` 每仓库主速率限制通常为 1000 API 请求/小时，搜索另有限制，因此不无限并行、轮换 Token 或绕过配额。参考：https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api

## 下一阶段优先处理

对文件结构索引中同时出现明确题目及解答并有原作者内容授权的来源，核验它们的题文、解析、公式与引用，排除第三方教材材料，再以固定 Git SHA、题干哈希、学科分类、答案复核和引用记录进入正式候选库。不能把有 LICENSE 的仓库数、元数据文件名数或 AI 暂存问答数说成可组卷题目净增量。
