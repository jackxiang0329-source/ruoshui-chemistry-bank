# chemquiz MIT 有机官能团与同系物参考数据审核（2026-10-27）

## 来源及再分发范围

上游：bem130/chemquiz，固定提交 `10b81d4c1b02847e3d9b64e8d44a960d10559ea3`。许可证：MIT，Copyright (c) 2025 べむ，原始声明在 `third_party/chemquiz/LICENSE`，保留完整原件。两份 JSON 为仓库内直接提供的参考数据，当前未发现独立第三方题目版权声明；不复制原仓库图像、文献正文或外部测量值。仅从有限、可独立核对的化学事实生成中文入门习题。

固定文件 Git Blob SHA：

- `dataset/organic_functional_groups.json` — `472a029b37ff7a61b559a42bf93872d41b8f5ac3`（17 类参考）
- `dataset/organic_homologous_series.json` — `be553206c8b47c11f63ab12750c97388a0d47149`（14 类参考）
- `LICENSE` — `dcec41b508bd5bfbd0d44f3111a41bdee9a73c75`

上游许可： https://github.com/bem130/chemquiz/blob/10b81d4c1b02847e3d9b64e8d44a960d10559ea3/LICENSE

## 严格筛选和数量口径

- 官能团参考 17 类中，白名单保留 15 类各 1 道，排除烷烃（无特定官能团）和芳烃（以芳香性结构特征为主，避免官能团定义歧义）。
- 同系物参考 14 类中，选用 10 类经人工校核的总分子式，排除卤代烷烃、酯、酰胺、腈系列中不便直接用于统一碳数公式或范围易歧义的记录。
- 合计最多生成 **25 道中文衍生候选练习题**（并非 25 道上游独立考试原题），来源仓库 **0 个新增**（已存在的 MIT 来源复用）。实际新增以 GitHub Actions 成功运行及 Git 树增量为准，不能仅凭脚本期望值宣称入库。
- 固定 commit、锁文件、Git Blob SHA、MIT 版权声明、结构简式和通式白名单全部核验；题干 SHA-256 去重，发现已有同 ID 不覆盖，已有答案冲突直接失败。
- 标记 `subject=organic`、`level=introductory_undergraduate`、`quality_status=awaiting_expert_review`、`publishable=false`。跨来源语义去重、化学专家审阅与正式发布均未完成。

复现：`node --test tests/chemquiz-organic.test.mjs`；`node scripts/import-chemquiz-organic.mjs`；统计见 `harvest/import_reports/chemquiz_organic_reference.json`。

## 其他学科与未完成

无机、分析、物理化学本次尚未核验到新的可导入题文；公开 GitHub 仓库不等于内容许可。原有未合并 PR #1、#6–#9 的材料需逐条审查版权、题文、答案和跨源重复，不可直接整体合并。
