# 大学化学题库：十分钟快速采集与许可证预核验（2026-10-27）

## 用户目标及瓶颈

此前 GitHub + Hugging Face + Zenodo 共有 988 条跨平台来源目录记录，但四科学习题仍只有 1122 份候选（包括 278 份学习卡、844 份习题候选），全部尚待专家审核。54 组 GitHub 查询在单个 30 分钟流水线中顺次运行，约 59 次 API 请求；整个集成工作流还重复运行二十余个测试和已有导入器，导致**来源发现频次**及**合法内容审核效率**均偏低。

## 实施的架构改变

- 新增 [chemistry-discovery-fast.yml](../../.github/workflows/chemistry-discovery-fast.yml)，UTC 每小时第 **4、14、24、34、44、54 分钟**（10 分钟一次）自动运行。Github Actions 的 cron 有调度延迟，不保证准确时刻。
- 原有 [chemistry-harvest.yml](../../.github/workflows/chemistry-harvest.yml) 每小时第 **17、47 分钟**（每 30 分钟一次）仍做严格自动单元测试、固定版本许可证检查、经批准的导入和候选题质量审计，**但不再重复执行整轮全平台来源发现**。与快速采集共享 GitHub concurrency group，且使用 `queue: max` 保留待运行任务，避免新的 pending run 覆盖先前的 pending run。
- [GitHub 采集器](../../scripts/harvest-chemistry-sources.mjs) 引入 `CHEMISTRY_QUERY_SHARD=auto`：每个快速轮次按 10 分钟时段选取总计 54 条查询的不同 18 条，在三个轮次（名义 30 分钟）覆盖全部 54 条；继续每半小时轮换 `updated`、`stars`、`best_match` 排序。直接手动运行若不指定 shard 仍会搜索所有查询。
- [外部元数据采集器](../../scripts/harvest-public-chemistry.mjs) 引入 `CHEMISTRY_EXTERNAL_SHARD=auto`：22 条 Hugging Face/Zenodo 查询分为 3 批，每 10 分钟抓取 7—8 条。两个平台与 GitHub 请求可并行；保留已有单次超时、速率和 Zenodo 每页 25 条限制。
- 增加 [许可证证据预筛选](../../scripts/preflight-chemistry-sources.mjs)，每 10 分钟按优先级检查最多 **20 个新仓库**的 GitHub LICENSE 和 README，仅保存其 Git blob SHA 和版权风险线索，**不拉取题目、解答、图片，不自动批准任何题文转载**。已检查来源存入 [license_preflight.json](../license_preflight.json)，幂等去重，不重复审核同一来源。
- 自动来源优先队列仍位于 [source_review_queue.json](../source_review_queue.json)，最多 160 项，优先无机/有机/分析/物理化学具体教学资源。队列是人工审查计划，不是开放许可的题目清单。
- 数据仍采用 64 个 GitHub 分片和 16 个外部平台分片，以减少不必要的仓库文件修改；每次只 commit 真实变化。

## GitHub 已核对的测试/运行

1. 10 分钟自动查询分片（18/54、19 次成功 API 搜索）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40454478845
2. 首次版权预筛选（12/12 成功、累计 12 个，许可证文件 11 个）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40454661802
3. 二次快速采集（12/12 成功、累计 24 个，许可证文件 22 个）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40454809933
4. 原 30 分钟严格测试及导入工作流（拆分后 success）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40454809928
5. 首次提高至 20 个来源的版权检查（**20/20 成功、累计检查 44 个，许可证文件 41 个、错误 0**）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40454901480

每次快速轮次 GitHub 搜索约 19 个请求，比以前的约 59 个请求减少约 **68%**，GitHub 来源发现的名义执行频率从每 30 分钟一次提升为 **每 10 分钟一次**。**注意**：查询总覆盖仍按 30 分钟循环分片，因此并没有虚称每小时请求吞吐量增加 3 倍，也不能保证合法题目新增速度提高三倍。

## 版权与净增量

- 初始源索引 GitHub 756，其他平台 232；本轮最新核验 GitHub **756**，其他平台 **233**（相对初始多 1 条 Zenodo 元数据）。来源目录记录合计 989，不代表 989 个互不重复或可再分发的实体。
- 已检查 44 个来源，41 个有 GitHub LICENSE 文件，**每个仓库仍是 `question_content_rights: NOT_VERIFIED`，自动可转载题文获批准 0**。
- 未新增从第三方题库合法复制的试题：**0 道**；已有候选题仍 **1122**：无机 622、有机 414、分析 33、物理 53；其中 844 份习题候选、278 份学习卡。全部 `publishable=false`，专家审核通过 0。
- 经过许可和质量验证的未来独立题目或自编计算题可以通过既有批准导入器接入，但仓库/数据集的 SPDX 标签本身不足以授予教学题正文、答案和图的版权。

## 已知问题及下一步

1. 10 分钟和 30 分钟工作流分开后，快速查询的某轮次可能因 GitHub 调度延迟跳过；`queue: max` 使待运行任务不会再被无声替换，但大量排队仍可能造成延迟。
2. 精确题干去重及模板复用检查保留；跨语言、跨格式的真正语义去重和化学专家终审仍是待办。
3. 检查 README 提及第三方教材只是风险检测，不是所有权的确定结论。对已有许可证的 41 个来源仍须核验**题文本身**是否由相应作者原创、可再分发及其具体允许条件，尤其是 MIT 软件仓库内的考试真题、学校作业和出版社材料。
4. Hugging Face 和 Zenodo 的授权元数据仅作为候选线索；任何自动入库必须经过逐来源固定 SHA、内容权利链、独立答案检查、题型分类和去重。
5. 下一步以 160 项高优先队列为基础开展内容级许可审核，优先大学分析化学、物理化学，再安排学科专家对答案和难度复核。

**错误记录**：旧的并发组默认只有一个 pending 位置，快速连续更新时出现几次被新 pending 替换的取消记录；已根据 GitHub Actions 2026 年的新 `queue: max` 机制修复。首次新工作流完整运行以及 20 个来源批次均 success。没有声称所有来源已通过版权审核，也没有将许可证文件数量计作题目新增数量。
