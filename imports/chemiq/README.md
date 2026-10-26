# ChemIQ 去重的评测题导入 — 仅隔离保留

原项目：https://github.com/oxpig/ChemIQ
固定版本：`63826f64990802e87f1b11b9192606a20838d522`
来源文件：`questions/chemiq.jsonl`，Git blob `d76aed68bea83d69dae86f98f5251e2cbd220023`
许可证：BSD-3-Clause，版权 University of Oxford（见 `../licenses/ChemIQ-BSD-3-Clause.txt`）。

816 条原始评测题按 `question_category + NFKC/大小写/空白归一化 prompt` 去重，2 条重复 reaction 提示语及答案相同，保留最早出现题，**共 814 条**。分类计数：
- `nmr_elucidation`: 96
- `counting_carbon`: 50
- `counting_ring`: 48
- `shortest_path`: 108
- `atom_mapping`: 184
- `smiles_to_iupac`: 200
- `sar`: 40
- `reaction`: 88

**重要：本目录为 benchmark_quarantine，不是中国本科四大化学正式题库，也未翻译或复核。**
- 不通过公开题目发布清单或 Cloudflare API 对外提供。
- 本项目之前将 ChemIQ 推荐为独立评测集，此处因主动请求而同步至隔离区；如后续将其用作模型训练/出题参考，则会污染基准测试，不应再用它作独立盲测。
- 原仓库中的波谱任务可能利用 ZINC 等第三方数据。即使上游附有 BSD-3-Clause，针对第三方来源、图表等仍应额外核权；当前不将导入状态当成全面再出版许可核验完成。
- NMR 部分及任务涉及的科学结论未经本项目化学审稿。
- `additional_smiles_to_iupac.jsonl` 是上游另设错误分析补充集（260 行），未作为主基准批次导入，也未计入 814。

本次是原始英文题目与答案同步、去重复及溯源，不是四科逐题中文出版质量验收。
