# 三千弱水四大化学题库 · 架构与质检

核心目标是每题独立 TeX、学科统一 Schema、严格来源许可、离线化学验证和低成本 Cloudflare 组卷服务。

本仓库仅管理四科题目源文件：inorganic、analytical、physical、organic。每题目录含 metadata.json、problem.tex、solution.tex。统一平台未来读取经过人工复核的版本化发布索引，不得直接把 GitHub 草稿作为正式试题。

发布门禁：来源许可核对 → 化学理论与守恒复核 → 数值计算/SMILES 等机器辅助校验 → 两位人工专业审稿人校对 → XeLaTeX 编译 → 逐页视觉验收 → 发布清单及版本摘要。程序本身不能证明实验事实和版权合法性。

未来与 Cloudflare Workers/D1/R2 集成仅处理经审核的题目元数据、轻量组卷和已缓存附件。正式 XeLaTeX 放在离线编译流程。

当前仅四科各一道未审定演示题，已完成基本文件与数值静态检查；未部署 Cloudflare，未接入数学题库。每科一万题仅作为后期规模规划。
