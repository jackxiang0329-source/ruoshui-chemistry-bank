# ChemTrain 四个子项目的题目对象提取（2026-10-26）

已从 ChemTrain/pka-learn、radical-learn、reactivity-learn、photoredox-learn 的固定 SHA 原始 HTML `window.PKA_DATA/window.RL_DATA` 中提取所有 `*.questions[]` 的原始字段作为**隔离候选**，共 **232 条原题对象**，经 NFKC + 大小写/空白归一化的“类型、题名、配对试剂、问句”键精确去重后仍 **232 条**。

- pKa Learn：29 条位点问题
- Radical Learn：50 条自由基与区域选择问题
- Reactivity Learn：99 条亲核/亲电位点与区域选择问题
- Photoredox Learn：54 条光催化循环相关问题

**这些记录并不等于 232 道可以直接印刷成卷的题目。** 许多题目依赖化学结构图、程序交互或多分子图对比；答案字段、选项及基于三维坐标的点击位置等须进一步解析。原题未翻译、未经过独立验证、未有专家终审，禁止发布。

版权：项目源码 MIT，说明文字、题干等内容按上游内容许可 CC BY 4.0 标注，需保留作者、链接及修改记录。pKa、Mayr 反应性、电化学标准数据来自第三方研究文献，上游特别提示这些**不属于**其 CC BY 的授权范围：故数据提取对 pKa `sites[].p` 数值实施遮蔽，仍需逐条复核原始来源。记录中的 `original_molecule_ref` 指向固定版本 HTML 的结构图编号，SVG 大文件不在此处复制。图片须按原项目版权标识独立提取审核。

去重签名为文本键而非分子图或语义等价；与 Daily 聚合后的 2,900 道内容可能大量重叠，暂不相加。其他四个 ChemTrain 应用（Daily、Reaction、PG、TMC）目前源码已通过固定 GitLink 引入但其 HTML 题干**尚未抽取**。

离线重复提取：`node scripts/export-chemtrain-questions.mjs`（要求初始化子模块，写到标准输出；不覆盖该隔离文件）；报告可通过 `node scripts/check-chemtrain-staging.mjs` 对现有文件重新核验。

## 原版源码本地镜像（无需重新下载子模块即可提取）

除固定 SHA 的 8 套 ChemTrain Git 子模块外，pka-learn、radical-learn、reactivity-learn、photoredox-learn 四个直接抽题的完整原始 HTML 也已以普通文件保存于 `third_party/ChemTrain_mirrors/`。每项还附原始 README、MIT `LICENSE` 与 CC BY 4.0 `LICENSE-CONTENT.md`。这 **16 个源文件**已按 Git Blob SHA 核验；抽取脚本优先使用本地镜像并在读取时重新计算源 Blob SHA，不必联网或初始化子模块。

```bash
node scripts/export-chemtrain-questions.mjs > /tmp/chemtrain-rebuilt.jsonl
cmp /tmp/chemtrain-rebuilt.jsonl imports/chemtrain/question_objects_4apps.jsonl
node scripts/check-chemtrain-staging.mjs
```

其余四个子项目（Daily、Reaction、PG、TMC）仍以完整上游 Git 子模块引用保存，尚未把大型 HTML 作为普通文件再次复制到 `ChemTrain_mirrors/`，也未完成各自的题目数据抽取。
