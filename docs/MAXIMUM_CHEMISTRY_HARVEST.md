# 半小时最大化化学来源采集（GitHub API 限额内）

- GitHub Actions UTC 每小时第 17 和 47 分钟运行（`17,47 * * * *`）。可手动触发；定时运行可能延迟。超时上限 25 分钟，脚本主动采集预算 18 分钟。
- 18 组针对无机、有机、分析、物理等方向的检索词，`per_page=100`，每个关键词最多 `10` 页 / `1000` 个 GitHub 搜索结果（平台本身的硬限制）；理论最多 18,000 条原始搜索命中（**不是独立仓库，也不是题目数**）。
- 单次上限 200 个 GitHub 搜索请求，约 2.55 秒间隔，自动处理 403、429、5xx 及速率限制。实际请求数依赖命中数量和时间预算，不会为了数字冲击平台限额。
- 以 `owner/repo` 大小写不敏感去重；排除 fork、归档及明显无关仓库。单次任务能在额度内尽可能检索；记录被过滤数量、去重后的新增来源以及 API 返回不完整的情况。
- 已发现仓库按 SHA-256 前 6 位分配到 64 个 JSONL 文件：`harvest/sources/00.jsonl` 至 `3f.jsonl`。主文件 `harvest/source_candidates.json` 是目录索引、总数与学科统计。旧版 178 条来源自动迁入分片并保留待审状态。上限扩大至 50,000 个**来源记录**，不是试题记录。
- **重要：资源检索不等于题目下载。** 只有 `harvest/approved_imports.json` 中明确核权、固定 Git SHA、标明许可证和署名的来源可进入 `data/candidates`；候选试题默认等待专家校核。
- 如果某次没有增量，不创建空提交；多个工作流禁止并发，推送前同步远端最新 `main`，不用强制推送。审阅失败记录见 Actions 页面。
- GitHub 官方限制：https://docs.github.com/en/rest/search/search 及 https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api
