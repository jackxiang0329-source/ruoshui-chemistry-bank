# 两套新发现的化学源码 / 开放题目项目

此次通过 Git 子模块锁定完整上游版本（Git SHA 见 `ADDITIONAL_LOCK.json`）。这是**完整源码的 Git 引用和可复现克隆入口**，不是把所有题目正文复制到了主仓库 `questions/`。

### ChemLit-QA · 文献化学问答

- https://github.com/geemi725/ChemLit-QA
- 固定 SHA：`c50a9330c67e9cf8579edf55f0f1ecdb60e6f7d6`
- 上游 `ChemLit-QA-Main/chemlit_qa_full_dataset_1025_entries.csv` **1025 条**；其 `814 train + 211 test` 是相同题目的拆分，不能重复计数。另有 `ChemLit-QA-neg` 与 `ChemLit-QA-multi` 不同用途的子集，未核实源内/跨库重复量。
- GitHub 项目许可证 MIT，但题目 `chunk`、`Context` 等字段包含来自论文的原文片段，论文版权与上游 MIT 并不必然一致。**只接入上游源仓库 Git 引用，不将研究论文段落自动转成出版题干**。
- 项目说明它是用于 RAG/LLM 研究的数据集，非直接用于中国本科化学期末考试。

### chemie-eroberung · 德俄双语中学化学

- https://github.com/gluonMaster/chemie-eroberung
- 固定 SHA：`93149a58f9e73d059f087eff0b15a053ec1743b1`
- MIT 代码，原作者 Dr. Konstantin S. Shakun，包含 55 道八年级空气/水主题习题、完整 JavaScript 题目引擎及地图游戏界面。
- **中学难度**，主要借鉴多题型判分与互动系统；README 只明确提及程序源码许可，待独立确认题干等内容的再发布条款。

### 获取与校验

```bash
git switch feat/import-chemlit-chemie-source-20261026
git submodule sync --recursive
git submodule update --init --recursive
node scripts/audit-extra-submodules.mjs
```

源文件总和约 32 MB 左右，会在初始化子模块时下载。子模块固定 SHA 已存入本仓库，离线审计脚本在检出完整文件并保留 `LICENSE` 后核验实际版本。

**限制**：这两个项目是独立评测/程序源码快照，尚无经合法授权、化学审稿与中文 LaTeX 转换的可公开题目；不接入发布清单、Cloudflare 或数学组卷系统。

### 本轮无法拉取的开放数据

ChemQuests（Bocklitz-Lab）数据集卡为 CC BY 4.0、952 个研究问答，但 Hugging Face 明示需账号登录并接受共享联系信息的准入条件。未取得访问批准，不能直接拉取其数据或声称已获得完整数据文件。其源论文片段等附带内容也需逐项核权。

另外 EnvCommons/Nemotron-Science-v1 声称 CC BY 4.0 的 52,179 道化学推理题，但 GitHub 仓库主要是下载和运行环境，真实数据需要从独立数据托管站下载；未验证实际数据集的许可及可访问性，暂只记索引。


### GPQA · 高阶化学与理工科盲测题

- 源：https://github.com/idavidrein/gpqa，固定 commit `56686c06f5e19865c153de0fdb11be3890014df7`。
- README 提供专家设计的 GPQA 数据（约 448 道，涵盖化学、生物、物理），包含加密码保护的压缩包、模型基线和分析脚本。GitHub 源码为 MIT，Hugging Face 数据集卡称 CC BY 4.0，但发布方要求不要公开展示具体例题，以避免评测污染。
- 仅作为 `third_party/benchmarks/GPQA` **隔离基准源码引用**；**不在本仓库将题目解压、翻译、出卷或用于出题模型训练**。不计入四大化学正式题数。
