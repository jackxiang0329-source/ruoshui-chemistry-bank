# 已迁入的第三方化学题库源码

## chemquiz — 完整原始源码

- 原始 GitHub：https://github.com/bem130/chemquiz
- 固定 Git 提交：`10b81d4c1b02847e3d9b64e8d44a960d10559ea3`
- 源码许可证：MIT，许可证原件 [LICENSE](chemquiz/LICENSE)。
- 本目录保留**原始上游全部 99 个受版本控制文件**：Rust 后端/组卷、WASM 前端、层级目录数据、集成测试、Cargo 配置和原始构建说明。文件内容由 Git Blob SHA 逐个比对，99/99 与上游相符。
- 运行：`cd third_party/chemquiz && cargo test`；网页前端请按原项目 README 安装 Rust WASM/Trunk。编译前必须具备 Cargo 依赖与网络环境，此处尚未声称已成功执行其编译测试。

## ChemIQ — 核心源码镜像

- 原始 GitHub：https://github.com/oxpig/ChemIQ
- 固定 Git 提交：`63826f64990802e87f1b11b9192606a20838d522`
- 许可证：BSD-3-Clause，许可证原件 [LICENCE](ChemIQ/LICENCE)。
- 保留原始 9 个核心 Python 解析/评分源码与小型 Notebook；逐项 Git Blob SHA 检验，9/9 一致。
- **不是全部仓库的二进制/大文件镜像**。原项目包括超过 50 MB 的模型回答、3 MB 分析笔记和其他缓存；需要全部原文件时使用固定提交的拉取脚本，而不是把无关的大型模型输出混在正式题库中。
- ChemIQ 的去重 814 道题位于开发分支的 `imports/chemiq/`，并非本目录；正式题库须先审稿、译审和核权。

## 为什么分离？

`third_party/` 是**保留原版的可溯源上游程序源码**，而 `imports/` 是**去重后带审核状态的候选题目**。原始项目即使有重复数据，源码快照也要保留，因为否则可能无法复现其程序行为。二者不能同时记作正式题量。两套上游源码及题目的许可分别核验，不自动进入 Cloudflare 或三千弱水组卷 API。

核验全部镜像文件：

```bash
node scripts/audit-upstream-vendor.mjs
```

重新独立取得固定版本的两个原项目（不自动覆盖已有镜像）：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/fetch-upstream-sources.ps1
```

锁文件：`UPSTREAM_LOCK.json`，包括每个原始源文件的 Git Blob SHA，可复现比对。

## Parametric Question Engine — MIT 参数化化学源码（2026-10-27）

- 上游：https://github.com/arya51-ai/parametric-question-engine；固定提交 `cbe7d952443ff88ef89b514dd4fb1641a69c2950`。
- MIT，Copyright (c) 2026 Arya Mehta；保留原版 [LICENSE](parametric-question-engine/LICENSE)、README、package.json、`core/rng.js`、`core/options.js`、`chem/data.js`、`chem/archetypes.js`，共 **7 个文件**，导入前逐文件 Git Blob SHA 校验。
- 本仓库仅选择 5 个可独立复算的基础化学题型生成练习，其他难度与题型暂不启用；见 [导入脚本](../scripts/import-parametric-mit-chemistry.mjs) 和 [来源核验日志](../harvest/run_logs/2026-10-27-parametric-mit-chemistry.md)。
- 已生成 30 道新候选练习（不是第三方独立考试原题），仍全部待专家审核。
