# ChemTrain 开源题库源码：8 个项目的固定版本拉取

项目入口：https://github.com/ChemTrain/chemtrain-daily

## 实际接入方法

已通过 **Git 子模块** 在 `third_party/ChemTrain/` 锁定 8 个完整上游仓库的 Git 提交。子模块是完整源码的可复现 Git 引用，**不是把源文件复制进主仓库的普通 Git Blob**：GitHub 网页点击子模块目录时会跳到上游固定版本，只有运行子模块初始化命令才会把源码及题目下载到工作目录。

```bash
git clone --recurse-submodules https://github.com/jackxiang0329-source/ruoshui-chemistry-bank.git
cd ruoshui-chemistry-bank
git switch feat/import-chemtrain-open-sources-20261026
git submodule update --init --recursive
git submodule status
```

如已克隆且切换分支，直接运行：

```bash
git submodule sync --recursive
git submodule update --init --recursive
```

**重要**：当新的开发分支尚未合并 main 时，初次 `git clone --recurse-submodules` 不会包含开发分支的子模块。切换到该分支后运行 `git submodule update` 才会拉取它们。

## 逐项收录

| 上游 | 本科化学关联主题 | 程序许可 | 题文许可 |
|---|---|---|---|
| chemtrain-daily | 跨主题试题聚合、随机出题、约 2900 题（上游 README 自述） | MIT | CC BY 4.0 |
| pka-learn | 有机酸碱性、pKa、最酸性质子 | MIT | CC BY 4.0 |
| reaction-learn | 反应名称、反应试剂及产物 | MIT | CC BY 4.0 |
| pg-learn | 保护基、脱保护条件 | MIT | CC BY 4.0 |
| tmc-learn | 无机配位/有机金属、电子计数 | MIT | CC BY 4.0 |
| reactivity-learn | Mayr 反应性、亲核/亲电、区域选择性 | MIT | CC BY 4.0 |
| photoredox-learn | 光氧化还原、光催化剂循环 | MIT | CC BY 4.0 |
| radical-learn | 自由基极性、加成与氢原子转移 | MIT | CC BY 4.0 |

**不能将 Daily 的约 2900 道与七个子项目题量相加！** Daily 将子项目内容改造成多选题，大量知识/题目天然重叠。题目的真实唯一数量还须先从每个 HTML/脚本中抽取题目、归一化结构和答案后确认。当前完成的是**全源码固定版本接入**，还没有完整抽取 2900 道、跨库去重、中文翻译和 LaTeX 出版。

## 许可与署名

上游代码为 MIT，题目/结构图/描述由每个 `LICENSE-CONTENT.md` 明确授权 CC BY 4.0，需注明作者、来源和修改。pKa 表、Mayr 数据及电位测量值等部分源自第三方研究文献，**不属于上游 CC BY 4.0 授权范围**，不可不加核权地整体转载数据库。上游 ChemTrain logo 含 Twemoji 二次创作，另需保留相应署名。

作者署名（依上游 README）：
- ChemTrain Daily、pKa Learn、Reaction Learn、PG Learn、Reactivity Learn、Photoredox Learn、Radical Learn：Quentin Bindschaedler
- TMC Learn：Francesco Sala

独立论文与第三方实测数据还需按照每个题目的原始引用文献核对。题目数据在本仓库仍只能进入 `external_quarantine`，不得直接提升为正式公开出版题目。

## 机器检查

固定 SHA 清单：`CHEMTRAIN_LOCK.json`

检验子模块检出版本和原始许可证：

```bash
node scripts/audit-chemtrain-submodules.mjs
```

若 Git 子模块尚未初始化，脚本明确失败并提醒运行 `git submodule update --init --recursive`。禁止凭空声明验证通过。


## 其他新增独立源码

同时另行锁定 ChemLit-QA（1025 条文献 QA 的原项目，论文原文内容需要核权）和 chemie-eroberung（55 道德语/俄语八年级练习，非本科题库）。详见 [其他源码许可说明](../ADDITIONAL_SOURCES.md)，均不计入本仓库正式发布题库。
