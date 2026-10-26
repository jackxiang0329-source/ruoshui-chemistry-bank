# 四大化学题库 · 外部题目导入与去重报告

日期：2026-10-26

已将确有题目或练习数据、且上游 GitHub 具有可核实的 BSD-3-Clause / MIT 声明的两类来源同步到隔离的 `imports/`。**没有把任何外部内容自动纳入正式题库、没有合并主分支、没有修改 Cloudflare/D1。**

| 数据源 | 上游原记录 | 精确键去重 | 隔离记录 | 内容属性 |
|---|---:|---:|---:|---|
| ChemIQ（主集） | 816 | 2 | 814 | 英文专业化学评测题，含答案；可能含第三方来源任务 |
| chemquiz（顶层化合物目录） | 301 | 28 | 273 | 衍生英文名→分子式练习候选，不等于高难本科考试题 |
| **合计** | **1117** | **30** | **1087** | **全部暂缓正式发布** |

另外 chemquiz 的 4 个结构化参考 JSON 只作数据字典，没有算入题目计数。ChemIQ 的 260 条额外 IUPAC 错误分析题也未计入主集或导入。

## 去重依据

- ChemIQ：归一化后的 `question_category + prompt`，先到先保留；两条重复题的答案一致；记录被删 UUID 与来源行号。
- chemquiz：归一化后的 `iupac_name + molecular_formula`，先到先保留；同名同式重复保留 `also_seen_at`。
- 明确**没有**将“同分子式不同结构”的化合物合并；也没有声称完成 RDKit 规范 SMILES 去重、中文翻译语义去重、跨平台等价题识别。

## 合规与质量边界

源码许可和试题数据的第三方权利可能不同；仅在原始许可证条件下保留当前副本、原作者署名与固定 Git SHA。上游 NMR 数据、考试题图和来源于第三方的材料必须逐项核权，发生冲突时删除受影响的记录。现阶段题目全是 `external_quarantine` 或 `benchmark_quarantine`，前者待科学事实/授权人工核查，后者保留为非生产评测候选。外部数据不能绕过 `scripts/export-manifest.mjs` 的发布门禁。

## 复核命令

```bash
node scripts/audit-imports.mjs
npm test
node scripts/export-manifest.mjs
```

预期 1087 条隔离数据，30 条记录级重复已合并，正式发布仍为 **0**。

详见 [许可登记](registry.json)、[chemquiz 溯源](chemquiz/README.md) 及 [ChemIQ 溯源](chemiq/README.md)。其他推荐开源项目未直接复制题文，原因记录于 [registry.json](registry.json)。
