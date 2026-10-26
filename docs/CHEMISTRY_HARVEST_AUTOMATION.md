# 大学化学题库：每 30 分钟自动检索与增量采集

## 调度
GitHub Actions 每小时的 UTC :17 和 :47 执行（cron: 17,47 * * * *），也可以在 Actions 界面手动 Run workflow。GitHub 可能延迟或遗漏部分计划任务。定时工作流必须在仓库默认分支 main。

## 执行内容
- GitHub API 每次查询 8 组中文、英文大学化学来源关键字，每组最多 10 个仓库；将候选仓库元数据（仓库名、上游更新、许可证标识、学科）去重后写入 harvest/source_candidates.json。最多保存 2000 个来源。没有实际变化则不提交。
- 第三方代码的 SPDX 许可证不必然覆盖题目、图片、论文或第三方实验数据。所有自动发现结果均标记 unreviewed_not_importable，不会直接导入题干。
- 真正的题目增量采集必须先在 harvest/approved_imports.json 中加入人工完成内容转载许可、图片/数据例外审查的固定 Git SHA 白名单。只支持 JSON/JSONL，映射题干和答案字段；自动按规范化题干 SHA-256 去重，单来源每次最多导入 250 道、每个文件最多 2MB。
- 白名单源的题目和答案写到 data/candidates/<sha256>.json，带来源、许可、署名、固定版本和 awaiting_expert_review 标识。它们不是已审题库，不直接参与组卷。默认白名单为空，故起步阶段仅发现和记录来源。
- 有实际变化时由 github-actions[bot] 提交 main；失败不强推，并在 Actions 中保留日志。

## 人工核权放行示例（仅演示格式，不应直接启用）
在 approved_sources 数组中插入：
    {
      "id": "reviewed-demo",
      "repository": "publisher/project",
      "commit": "0123456789abcdef0123456789abcdef01234567",
      "content_rights_verified": true,
      "license": "CC-BY-4.0",
      "attribution": "题目作者与原始来源署名",
      "subject": "inorganic",
      "files": [{"path":"questions.jsonl","format":"jsonl",
                 "question_field":"question","answer_field":"answer"}]
    }
必须保存核权依据，不能只因为仓库有 MIT/Apache 许可证就认定题目可自由转载。

## 运维
- GitHub Actions 必须启用；workflow 声明 contents: write。如果组织或仓库策略仍限制写入，需在 Settings → Actions → General 检查权限。
- 不依赖额外个人 PAT，也不在日志中输出访问令牌。
- 计划任务发现仓库元数据不等于成功下载、审核或发布大量试题。复杂 HTML、图像、论文数据库需要另外编写各自的合法导入器。
- Draft PR #8 中的第三方源代码和题目未合并 main，仍需独立核验；该工作流不修改现有 PR，也不会声称它们已成为可出卷正式题库。
