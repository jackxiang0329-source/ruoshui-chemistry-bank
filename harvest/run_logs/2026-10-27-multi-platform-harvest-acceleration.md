# 大学四大化学题库：跨平台采集提速与许可证隔离审计（2026-10-27）

## 背景与瓶颈

提速前：固定 24 组 GitHub 关键词，在 GitHub Search API 上每轮约 27 个搜索请求、627 个包含重复的原始命中，连续多轮 **唯一来源净增为 0**。原请求最小间隔 2550 ms，接近但仍低于 GitHub 已认证搜索约 30 次/分钟的限制。原因主要是搜索覆盖面不足、所有轮次固定「recently updated」排序导致反复命中，并不是仅靠更高请求频率就能解决。

## 已落地改造

1. **关键词扩大**：GitHub 从 24 组扩到 54 组，覆盖无机、有机、分析、物理化学，以及滴定、谱学、电化学、化学动力学和热力学的课程资料、测验与开源计算程序。
2. **速率优化**：GitHub 搜索最小间隔从 2550 ms 改为 2300 ms（名义约 26 请求/分钟，低于官方认证搜索上限）；保留对 HTTP 403/429、Retry-After、API 总预算、GitHub 1000 条/查询分页上限的退避与严格处理；不使用轮换账号、IP 等绕过措施。
3. **跨平台并发**：建立 `scripts/harvest-public-chemistry.mjs`，与 GitHub 搜索并行读取 Hugging Face 公开数据集目录和 Zenodo 已发布记录。仅采集元数据，不下载题目正文、图片、PDF、软件或第三方数据。
4. **Zenodo 400 修复**：首次配置请求匿名 `size=30`，造成 6 个 Zenodo 搜索请求 HTTP 400。根据 Zenodo 官方 2025-11-25 公告，匿名每页不得超过 25，修订为 `size=25` 并加入配置断言，随后 6 个 Zenodo 请求全部成功。
5. **版权人工审查队列**：根据课题相关性、四科覆盖、开放仓库元数据许可等因素，把 GitHub 发现的来源排序为最多 160 项人工许可复审任务：`harvest/source_review_queue.json`。仓库 SPDX 不等于原始习题文字或配图版权，队列所有项目仍标记 `not_verified_for_question_or_answer_redistribution`。
6. **多轮搜索排名**：`scripts/harvest-chemistry-sources.mjs` 增加 `updated`、`stars`、`best_match` 半小时轮换模式，避免每轮返回相同的更新排序结果。这一项的实际新来源成效仍须以后续完成的 GitHub Actions 日志为准。

## 已实测成果

| 指标 | 改造前 | 本轮已核验 |
|---|---:|---:|
| GitHub 搜索词 | 24 | 54 |
| GitHub 搜索 API 请求 | 约 27 | 59 |
| GitHub 搜索原始命中 | 627 | 1015 |
| GitHub 新来源唯一记录 | 0 | **187** |
| GitHub 目录总量 | 569 | **756** |
| Hugging Face 新数据集目录记录 | 0 | **126** |
| Zenodo 新记录 | 0 | **106** |
| 外部平台目录总量 | 0 | **232** |
| 当前各目录记录之和 | 569 | **988** |
| 本次新增跨平台来源标识 | 0 | **419** |
| GitHub 来源人工审核优先队列 | 无 | **160** |
| 本轮新导入且逐题核权的习题 | 0 | **0** |

说明：「419」是 **187 条 GitHub 仓库唯一记录 + 126 条 Hugging Face 数据集唯一记录 + 106 条 Zenodo 发布记录**，均是各平台按标识去重的元数据。跨平台可能存在同一题库的不同镜像，此指标不能等同于 419 个彼此内容完全不同、经法律审核通过的大学化学题源。没有把这 419 条转化为实际新增题目，也没有声称获得全部版权。

**题库仍为 1122 份待审内容**：无机 622、分析 33、物理 53、有机 414；其中练习候选 844、知识学习卡 278。全部 `awaiting_expert_review` 且 `publishable=false`，专家审核通过 0。

## 成功的 GitHub 自动化记录

- 第一次 GitHub 扩展成功（59 请求，+187）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40451649076
- GitHub + Hugging Face + Zenodo 并行成功（HF +126；Zenodo `size=30` 失败记录保留）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40452063976
- 自动化人工许可审查优先队列已成功生成：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40452392066
- Zenodo 限额修复成功（6/6 搜索；+102）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40452498725

- 排名轮换首次实际验证成功（本次 `stars` 排名，GitHub 新源 0、Zenodo 再增 4、全部测试通过）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40452975108

## 主要代码提交

- GitHub 关键词扩充和速率设置：`1d4169c9db90f9c5195d4c1408de523d8ed5bbe6`
- 外部平台只读元数据采集器：`249b98f9e991bb243d9fdb4ef5e83ee79de938d1`
- GitHub / 外部平台并发的工作流：`b4ea204d4d6dd46e3bb96c8e5ed2049b3859dd1d`
- 人工许可证审核队列：`850b3fda58cb2eb8b16da05314b7c23a5312dc3e`
- Zenodo 匿名页面大小修复：`6cf416c7e4fc12892b30bad753c131ea0896b0ff`
- 排名半小时轮换：`525e5261ce37b0d03829bda52c35a8ddd259e20a`

## 限额与后续

- GitHub 官方搜索限额：https://docs.github.com/en/rest/search/search
- Zenodo 2025 年匿名搜索每页 25 的公告：https://blog.zenodo.org/2025/11/25/2025-11-14-search-api-updates/
- Hugging Face 数据集搜索说明：https://huggingface.co/docs/huggingface_hub/main/guides/search

已保留原有半小时 cron `17,47 * * * *`。由于 GitHub Actions 调度可能延迟，不承诺绝对整点执行。

剩余重点：从 160 条优先候选中核验 **题文本身的版权**、版本、答案和本科难度；对独立且获授权的问答执行跨源语义去重，才允许新增 `data/candidates/` 题目。无许可或版权来自教材/第三方题库的内容不得自动搬运。Hugging Face 数据集卡的 `license` 标签和 Zenodo depositor 的许可证说明只是线索，不能代替逐条来源确认。 

## 最终复核（2026-10-27）

在轮换排序首次运行结束后，仓库 `harvest/source_candidates.json` 总计 **756**、`harvest/external_source_catalog.json` 总计 **232**（Hugging Face 126、Zenodo 106），两个平台目录中按平台标识去重后共 **988** 条来源记录。首轮 Zenodo 102 条以外，后续成功复跑又新增 4 条；故从旧基准 569 条增至总计 988 条，本轮合计净增 **419 条待审来源标识**。仓库候选题 JSON 总数继续是 **1122**，专家核准 **0**，本次新增已核权题目 **0**。

Github Star 排名的首个轮换运行并未发现新的独立 GitHub 来源（仍为 756），说明轮换虽可覆盖不同排序，但不能保证每轮产生新的合规题源。应优先把现有 160 条高优先级人工审查队列转化为实际已核权题目，而不是把元数据数量误当成题库质量。
