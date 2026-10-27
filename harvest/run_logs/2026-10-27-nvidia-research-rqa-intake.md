# NVIDIA Nemotron-Science-v1 大学化学 AI 问答开放资源批量暂存审计

审计日期：2026-10-27；工作仓库：[ruoshui-chemistry-bank](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank)

## 来源与授权

- 来源：https://huggingface.co/datasets/nvidia/Nemotron-Science-v1 ，发布者 NVIDIA Corporation。
- 固定数据集 revision：`82e1af468197076b4f0f392c239274eac032adc7`；源 `/api/datasets` 同时核验 revision 与 `cardData.license=cc-by-4.0`。
- 化学推理问答分区：`config=default, split=RQA`，共 **52,179** 条。另一分区 MCQ 有 174,155 条，但并非只含化学，不纳入本轮。
- CC BY 4.0 授权：https://creativecommons.org/licenses/by/4.0/ ；署名 NVIDIA Corporation。逐条还验证 `row.license=cc-by-4.0`。
- 数据是 **模型生成（LLM-generated）**，来源的回答未经本题库独立化学核验，可能包含错误，不视为正式教材题、官方真题或专家审核成果。

## 采集速度与存储结构

- GitHub Actions [5 分钟独立暂存工作流](../../.github/workflows/chemistry-rqa-intake.yml)；原有 10 分钟全网来源发现和 30 分钟固定授权来源正式候选入库仍然独立运行。
- 按 Hugging Face 公开 `/rows` API，每页最多 100 条；当前每轮最多 **8 页 / 800 条原始问答**。来源 SHA、总条数、行位置、UUID、结构、独立许可证与媒体依赖均采用严格校验；如元数据版本变更，自动停止而非继续复制。
- JSONL 紧凑归档：`data/research_quarantine/nvidia-rqa/000000-000399.jsonl` 等批次文件；避免为上千问答创建大量单题文件，只有真正有新增时才由 GitHub Actions 提交。
- 最多**5,000 条**暂存；新增硬上限校验，避免最后一页越过最大容量。状态文件：`harvest/nvidia_rqa_state.json`，保存游标、总数、拒绝原因。
- 校验内容：非空且合理长度的题干和答案、合法 UUID、source assistant/user 结构，拒绝图像媒体、相同标准化题干等。学科分类只是启发式建议，存在不确定时标为需要人工分类。

## 已完成的可核验增量

| 运行 | 源记录扫描 | 新入研究待审区 | 因长度筛除 | 结果 |
|---|---:|---:|---:|---|
| 首次成功，10 分钟发现工作流 | 400 | 386 | 14 | success |
| 随后 5 分钟独立工作流 | 800 | 774 | 26 | success |
| **已核实合计（前两轮）** | **1,200** | **1,160** | **40** | — |

- 初次成功运行：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40460035200
- 5 分钟独立采集成功运行：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40460342944
- 初次写入 commit：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/d527592608893e0420148897eb78f2c81da56e4b
- 第二次写入 commit：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/18150dbd9e53efebf68646508ef05fef86bfe580
- 源文件与流程按固定版本持续更新，后续累计数量以状态 JSON 和 GitHub 实际提交为准。

**注意：此处 1,160 条是未审核的 AI 研究问答，正式 `data/candidates/` 仍为 1,390 份**（无机 849、有机 455、分析 33、物理 53）。研究暂存库自动审核通过 0、正式新增通过质量审查题目 0。

## 错误记录与修复

1. 两次首次集成运行的停止原因：Hugging Face `/splits` 接口只返回分区名而不包含行数。错误读取 `num_rows` / `num_examples` 因此导致 fail-closed，不曾写入不完整数据。失败 Actions：
   - https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40459612655
   - https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40459777808
2. 使用独立探测程序证实 `/splits` 只列出 `default/MCQ`、`default/RQA`，将 **52,179 的总量核验移到每一页的 `/rows.num_rows_total`**，同时核验连续行索引。修复后成功。
3. 实际记录 14+26 条因题文或模型回答过短/超长未纳入。没有把自动请求成功当成全部内容可出版。
4. 一次性来源探测程序成功后已从 main 清理，保留此处源版本和审计证据。

## 尚未完成

- 根据四科学科标准对 AI 内容严格分类；数值题另行独立复算，理论题专家复核准确性。
- 和既有 1,390 份正式候选做跨来源语义去重。当前 SHA 去重只排除完全规范化题干，不代表同义变体已清除。
- 审核许可及第三方引用内容，部分题面若涉及第三方图表须排除。不可因为源平台 CC BY 标签就默认所有下游内容已核权。
- 到达 5,000 条暂存上限后需开展质量转化或按审批重新配置，而不能盲目无限增长 Git 历史。
