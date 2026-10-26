# chemquiz 去重导入（隔离待审）

上游：https://github.com/bem130/chemquiz
固定版本：`10b81d4c1b02847e3d9b64e8d44a960d10559ea3`
许可证：MIT，原文见 `../licenses/chemquiz-MIT.txt`（原作者 © 2025 べむ）。

从两个顶层 catalog 的 `compounds.json` 共读取 **301** 条化合物；以 NFKC、小写、空白归一化后的 `iupac_name + molecular_formula` 为键保留最早记录、跳过 **28** 条，得到 **273** 条去重的“英文名→分子式”教学练习候选。**这里不按分子式单独去重，以免错误合并结构异构体。** 同名同式但不同溶液状态/注释的区分需要人工复核，元数据保留 `also_seen_at`。

另保存四个上游基础数据文件（多原子离子、金属离子与颜色、官能团、同系物）作为**参考资料**，它们不按题目数量计算，也没有自动转化为正式试题。

此处全部是 `external_quarantine`（待版权与科学事实复核），不通过 `scripts/export-manifest.mjs` 对外发布，不视作已通过中文化和化学审稿。保留来源文件、行号、上游 SHA、MIT 许可与原作者信息。不能将“软件 MIT”无条件推及上游嵌入的第三方图片或教材素材。

检查源目录：`catalog/Inorganic/compounds.json`、`catalog/Organic/compounds.json`。
