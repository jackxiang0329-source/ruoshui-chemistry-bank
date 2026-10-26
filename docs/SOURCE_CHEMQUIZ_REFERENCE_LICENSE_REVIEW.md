# chemquiz MIT 参考数据 → 基础化学候选习题（2026-10-27）

上游：bem130/chemquiz；固定提交：10b81d4c1b02847e3d9b64e8d44a960d10559ea3。原始源码和数据已保存于 third_party/chemquiz，锁文件 third_party/UPSTREAM_LOCK.json。

许可证：MIT，Copyright (c) 2025 べむ；原件 third_party/chemquiz/LICENSE。仓库 MIT 授权涵盖随仓库提供的软件及其关联文件；保留版权声明和许可证。对第三方独立测量值、图片、教科书摘录不作默认再分发授权。

固定文件及 Git Blob SHA：
- dataset/metal_ions_and_colors.json: 51116f705badf81a99c4e08acd184cc5731c538e
- dataset/inorganic_polyatomic_ions.json: 1bb52d9f9399f1d1e47bb81be2b8d39ac05353a2
- LICENSE: dcec41b508bd5bfbd0d44f3111a41bdee9a73c75

脚本 scripts/import-chemquiz-reference.mjs 只读取本地已固定的 JSON，核对 commit、锁文件、三项 Git Blob SHA、原始 MIT 版权声明；不执行第三方代码。独立化学白名单选择 19 个阳离子定性沉淀反应（分析化学）和 23 个多原子离子化学式与电荷（无机化学）。程序验证离子电荷与答案白名单；不生成原始颜色、复杂络合平衡、溶解度或外部实测值题。

**19+23 是从已有两个参考数据集派生的练习题型，并非 42 道独立上游考试原题。** 规范化题干 SHA-256 去重，已有同 ID 文件不覆盖。所有候选质量状态 awaiting_expert_review、publishable=false、level=introductory_undergraduate；尚须人工审阅条件、沉淀溶解度、学科难度。

与尚未合并 PR #1 的 273 条 name-to-formula 候选不同题型；未来合并仍须按题干与内容指纹去重。PR #7–#9 的交互式结构题及第三方实测数据仍隔离，不能自动进入正式题库。

复现：node --test tests/chemquiz-reference.test.mjs；node scripts/import-chemquiz-reference.mjs。稳定统计：harvest/import_reports/chemquiz_reference.json。
