# 2026-10-27：MIT chemquiz 有机参考表导入复验

## 已核实增量

- 上一版主分支候选题 684 道；本轮实际新增有机化学 **25 道**，提交后 `data/candidates/*.json` 文件 **709** 个。其他三学科新增均为 **0**。
- 25 道中官能团识别 15 道、同系物分子式 10 道；仅是已有 2 份参考表衍生的中文练习，不是独立上游考试原题。新增来源仓库 **0** 个（复用现有 MIT 许可来源）。
- 脚本与测试提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/9cc5ec6e503b2e6e9070a04f2df2ca827cae93c2
- 实际题目和报告提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/14f2e5d79a222acfdf779a33fb9f6b100401b3ce
- 全部测试及自动提交成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40393386729

## 固定来源与许可

上游 `bem130/chemquiz`，固定提交 `10b81d4c1b02847e3d9b64e8d44a960d10559ea3`，MIT，Copyright (c) 2025 べむ。原许可证：https://github.com/bem130/chemquiz/blob/10b81d4c1b02847e3d9b64e8d44a960d10559ea3/LICENSE

- `dataset/organic_functional_groups.json`：Git Blob SHA `472a029b37ff7a61b559a42bf93872d41b8f5ac3`（17 类中筛选 15 类）。
- `dataset/organic_homologous_series.json`：Git Blob SHA `be553206c8b47c11f63ab12750c97388a0d47149`（14 类中筛选 10 类）。
- `LICENSE`：Git Blob SHA `dcec41b508bd5bfbd0d44f3111a41bdee9a73c75`。

脚本核验锁文件、固定 commit、3 个 Blob SHA、MIT 版权声明，按人工核对的官能团/通式白名单生成中文题。排除烷烃、芳烃官能团歧义及范围不清的通式；不复制图片、长段原文和第三方实测值。题干 NFKC 规范化后 SHA-256 去重，若已有同 ID 但答案冲突则报错。

全部新增题目保留来源文件、版本、许可及改编说明，`quality_status=awaiting_expert_review`，`publishable=false`。专家终审通过数量本轮 **0**。

## GitHub Actions 实测日志

- GitHub 搜索成功 21 次，原始命中 626（含重复）；来源目录 **568 -> 568**，新来源候选 **0**，非致命搜索错误 **0**。
- 已有来源导入去重：Muza 5、TMC 593、chemquiz 无机/分析 42、Radical 26、Photoredox 18，合计 **684** 条已存在题目全部跳过。
- 新脚本报告：`eligible=25`、`new=25`、`already_present=0`。GitHub commit 新增 25 个候选 JSON 和 1 个确定性导入报告。
- CI 测试、搜索、导入、提交全部成功。非阻断警告：Node `punycode` 弃用、checkout/setup-node 的 Node 20 兼容性提示。

## 未完成

1. 所有候选题仍需专家核验化学事实、题干条件、答案准确性及难度；尚无正式可发布题目。
2. 跨来源语义级重复检测仍需加强，当前主要按规范化题干哈希去重。
3. 继续寻找有明确题文再分发权、答案完整的物理化学与分析化学资源；无明确许可的公开仓库不得擅自导入。
4. PR #1、#6–#9 仍含待核权数据、图片或第三方测量值，不整批合并。
