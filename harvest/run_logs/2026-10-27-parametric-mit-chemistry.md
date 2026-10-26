# MIT 参数化大学基础化学习题：固定版本核验记录（2026-10-27）

## 本轮新来源

- 项目：arya51-ai/parametric-question-engine（首次接入此仓库的独立 MIT 程序来源）。
- 固定 Git SHA：`cbe7d952443ff88ef89b514dd4fb1641a69c2950`。
- 许可证：MIT；Copyright (c) 2026 Arya Mehta。许可证原件：https://github.com/arya51-ai/parametric-question-engine/blob/cbe7d952443ff88ef89b514dd4fb1641a69c2950/LICENSE
- 上游 README 明确声明无外部依赖、通用化学参数化生成及 solver self-test。项目自身声称输出是生成题，不是独立考试原题；不以「600 道上游原题」计入本仓库。
- 只保存 7 个源文件到 `third_party/parametric-question-engine/`；`LICENSE` 与上游源文件保留原样，导入程序按 Git Blob SHA 逐项复验，固定版本避免漂移。此处不包含第三方考试 PDF、图片、题库抓取或未知授权内容。
- 自动化仅使用 5 个经人工检查且具备独立数值复算规则的 easy 难度题型：摩尔质量、溶液摩尔浓度、量热、平衡常数、标准电池电势；每类目标 6 道。难度是本科基础/普通化学入门。
- 分类：无机 6、分析 6、物理 18、有机 0（**目标值；以 Actions 实际导入结果为准**）。本轮不应宣称新增任何上游独立考试原题。
- 排除上游 `electrochem` 的 hard 难度（电子转移数采用阴极半反应电子数，可能不等于电池总反应最小电子数），以及酸碱近似等其他尚未独立验证的题型。
- 质量门禁：来源许可证/Blob SHA、题干规范化 SHA-256、同 ID 答案冲突拒绝、五选项唯一性、答案字母核对、独立数值复算。全部题默认 `awaiting_expert_review`、`publishable=false`，尚未完成专家审稿或跨来源语义去重。
- 如导入程序出现异常，禁止将生成结果当作已提交成果；检查 Actions 日志后修复。
