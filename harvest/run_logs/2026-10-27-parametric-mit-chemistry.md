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

## 已执行结果（GitHub Actions 实际核验）

- 导入程序与 7 个 MIT 上游源文件提交：[b0d4b7d](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/b0d4b7d3de2e63af3d5f23e5a262cbe577105d70)。已对照上游固定提交和 Git Blob SHA；本仓库保留了原版 MIT 版权文件。
- 真实候选题新增提交：[0d81597](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0d81597202b186e1c25c114d0097e4a6b5329b9e)。差异 **30 个新增 JSON 题目文件 + 1 个导入报告**，`data/candidates/*.json` **755 → 785**。不包含任何未审题目的正式发布。
- [GitHub Actions 成功运行](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40417752308)：全部测试、搜索、旧源去重、30 题生成和 Git 提交均成功；程序日志 `generated=30, new=30, already_present=0`。
- 本轮实际学科增量：无机 **6**、分析 **6**、物理 **18**、有机 **0**。这 30 道是新核权 MIT 生成程序产生的练习变体，**不是 30 道独立第三方考试原题**；题目均为 `awaiting_expert_review`、`publishable=false`。
- GitHub 搜索执行 **21** 次，原始命中 **626**（含重复）；搜索来源候选目录 **568 → 568**，没有新增独立来源发现记录。此次独立审查并固定的 MIT 程序来源为 **1 个**，不能把程序来源数误当作题目原题数。
- 旧题去重：已存在 755 道候选题未被再次写入；新增题目规范化 SHA-256 无冲突。对本轮 30 个 JSON 的提交差异复核：五类各 6 道、选项各 5 个且唯一、答案与正确选项对应、许可与待审标记一致。

## 排除与风险

- [angiorda/Physical_chemistry_oral_exam_questions](https://github.com/angiorda/Physical_chemistry_oral_exam_questions)：无正式 LICENSE，README 声明部分题目改编自 POGIL-PCL 教学活动；课堂使用说明不等于开放再分发许可，**0 道导入**。
- [amir-prod/chem-mcq](https://github.com/amir-prod/chem-mcq)：虽然源码仓库有 MIT，但含多份外部考试、教学文献与 PDF 转录，无法凭仓库许可证推断每份试题权利，**0 道导入**。
- [nwabuezeeminence-cell/chemistry-102-CBT-exam-simulator](https://github.com/nwabuezeeminence-cell/chemistry-102-CBT-exam-simulator)：虽然有 MIT LICENSE，但 README 未明确交代试题题文来源与再分发权，暂不复制题目，**0 道导入**。
- 本轮采用的上游参数化程序另有高难度电化学、弱酸近似、化学计量等题型，未纳入此次白名单；对电子转移数、近似有效范围及部分解释文字需继续人工复核。
- 目前仍缺少跨来源**语义级**去重、正式答案审稿和真实难度标定；所有 **785** 道为候选题，不代表专家审核通过。

## 错误与兼容性

- **导入错误：0；失败测试：0；提交失败：0。**
- 非阻断兼容性提示：Node `punycode` 弃用警告；`actions/checkout@v4`、`actions/setup-node@v4` 的 Node 20 兼容提示。后续可单独升级 Actions 版本。
- GitHub 每 30 分钟定时发现仍保留，`17,47 * * * *`（UTC）；实际触发时间受 GitHub 调度影响。
