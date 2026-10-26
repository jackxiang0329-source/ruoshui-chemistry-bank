# Muza Organic Chemistry Quiz — 候选数据源授权与提取说明

- 上游： https://github.com/MuzaPro/Organic-Chemistry-Quiz-JS
- 固定版本： `71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc`
- README 自述项目采用 MIT 许可证，并列明 `data/questions.json` 作为题目数据库；根目录 LICENSE 载明 Copyright (c) 2025 Muza Studio。
- 本次仅将该 JSON 中的反应题干、目标产物、可选试剂和正确试剂名称生成**自包含纯文字候选题**；不转载 SVG、图片、音频或带 HTML 的说明。
- 保留源版本、文件名、记录序号、许可证及原作者署名。所有候选题标记 `awaiting_expert_review`，不可直接作为考试题或计入已审核题量。
- 单元测试覆盖题目中目标产物与试剂列表的保留、答案映射。化学反应条件、正确性与大学本科适配度需后续专家审核。
- GitHub 项目级 MIT 许可不等于第三方嵌入素材均已逐一核权；一旦发现上游不拥有特定题文版权应停止分发并隔离相关记录。
