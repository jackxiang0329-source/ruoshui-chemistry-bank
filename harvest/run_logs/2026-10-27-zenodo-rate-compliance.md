# Zenodo 检索修复｜2026-10-27

Zenodo 于 2025-11-25 公告：**匿名 Search API 每页最多 25 条**，而先前外部采集器使用了 `size=30`，因此连续 6 个 Zenodo 请求均被 HTTP 400 拒绝。其余 Hugging Face 的 16 个请求成功，首轮新增 126 条去重的公开数据集**元数据目录记录**。

官方来源：https://blog.zenodo.org/2025/11/25/2025-11-14-search-api-updates/

本修复将 `harvest/public_dataset_queries.json` 中 `zenodo_limit` 从 30 降到 25，并让采集程序拒绝配置超过 25。Zenodo 仍坚持每分钟不超过 30 次，现有工作流只请求 6 个检索词、不下载文件。

注意：截至本修复提交，**尚未验证修改后的 Zenodo 搜索成功与否**，必须以 GitHub Actions 最新日志核验，不能声称新增多少条 Zenodo 记录。
