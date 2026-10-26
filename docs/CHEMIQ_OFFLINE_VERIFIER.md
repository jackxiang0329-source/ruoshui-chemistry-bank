# ChemIQ 原版答案校验器：离线封装

本目录保留 oxpig/ChemIQ 的 `third_party/ChemIQ/utils/answer_verifier.py`，该脚本 BSD-3-Clause 协议，原代码**未被修改**。封装 `scripts/verify-chemiq-offline.py` 是真正调用上游 Python 的 `AnswerVerifier` 类，而不只是引用其项目名称。

```bash
pip install rdkit requests pytest
python scripts/verify-chemiq-offline.py --questions=benchmark.jsonl --answers=responses.json
pytest -q tests/test_chemiq_offline.py
```

其中 `responses.json` 是 UUID→作答文本的 JSON 对象，`benchmark.jsonl` 是 ChemIQ 格式题目文件。上游真实题目文件存于另一条未合并的隔离导入分支（Draft PR #1）；主分支本脚本不包含完整 ChemIQ 数据。

为保证可复现且不向第三方 API 外发学生作答：支持 `exact_match`、`range`、`list_of_tuples`、`canonical_smi_match`；需要线上 OPSIN 的 `opsin` 方法**显式跳过**，不会联网获取答案。上游 `canonical_smi_match` 在规范化时移除立体化学，所以它**不适合**检验 R/S / E/Z 题目；仍需独立 RDKit 保留手性验证。

它只用于本地题目研究和基准评分，不能绕过中文专业审稿、第三方内容授权及版本化发布门禁。
