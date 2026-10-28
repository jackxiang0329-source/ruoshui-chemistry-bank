#!/usr/bin/env python3
"""Read-only persisted replay for 593 ChemTrain TMC questions from 199 pinned cards.
The pinned remote source is downloaded and validated by the existing AST-only importer.
Passing means persisted content agrees with that pinned source, NOT expert chemistry
approval or license clearance for unrelated third-party materials.
"""
from __future__ import annotations
import argparse
import hashlib
import importlib.util
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODPATH = ROOT / "scripts" / "import-chemtrain-tmc.py"
CONFIG = ROOT / "harvest" / "approved_generators.json"
OUT = ROOT / "data" / "candidates"
REPORT = ROOT / "harvest" / "main_tmc_stored_replay.json"

def source_module():
    spec = importlib.util.spec_from_file_location("pinned_tmc_importer_audit", MODPATH)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module

def build_expected(cards, s, module):
    result = {}
    for card in cards:
        for kind, question, answer in module.questions_from_card(card):
            id_ = module.question_id(question)
            if id_ in result:
                continue  # The existing importer deduplicates normalized question IDs.
            result[id_] = {
                "schema_version": 1, "id": id_, "subject": "inorganic",
                "topic": "transition_metal_electron_counting",
                "question_type": kind, "question": question, "answer": answer,
                "quality_status": "awaiting_expert_review", "publishable": False,
                "source": {
                    "repository": s["repository"], "commit": s["commit"],
                    "file": s["path"], "git_blob_sha": s["blob_sha"],
                    "original_id": card["name"], "original_set": card["set_name"],
                    "formula": card["formula"], "license": s["license"],
                    "attribution": s["attribution"], "content_rights_verified": True,
                    "license_evidence": s["license_evidence"],
                    "url": "https://github.com/" + s["repository"] + "/blob/" + s["commit"] + "/" + s["path"],
                    "changes": "Generated Chinese question prompts from licensed source card fields; no structure drawings or textbook passages copied."
                }
            }
    return result

def audit_saved(expected, rows, s, expected_cards=199):
    if len(expected) != 593 or s.get("expected_unique_complexes") != expected_cards:
        raise ValueError("Pinned TMC source card/question cardinality changed")
    if s.get("id") != "chemtrain-tmc-electron-counts" or \
            s.get("content_rights_verified") is not True or \
            s.get("license") != "CC-BY-4.0":
        raise ValueError("Upstream author rights or approved generator modified")
    ids = set()
    for qid, original in expected.items():
        if qid in ids:
            raise ValueError("Duplicate source question")
        ids.add(qid)
        saved = rows.get(qid)
        if saved is None:
            raise ValueError("Missing TMC saved candidate " + qid)
        if saved != original:
            differs = sorted(k for k in (saved.keys() | original.keys())
                             if saved.get(k) != original.get(k))
            raise ValueError("Persisted TMC source/answer/provenance drift: "
                             + qid + " fields=" + ",".join(differs))
    owned = {qid for qid, value in rows.items()
             if value.get("source", {}).get("repository") == s["repository"]}
    if owned != ids:
        raise ValueError("TMC saved source has orphan, duplicate or unverified records")
    types = dict(sorted(Counter(q["question_type"] for q in expected.values()).items()))
    if sum(types.values()) != 593 or types.get("valence_electrons") != 199:
        raise ValueError("TMC calculated method category mismatch")
    dig = hashlib.sha256("\n".join(sorted(ids)).encode("utf-8")).hexdigest()
    return {
        "schema_version": 1,
        "source_repository": s["repository"],
        "source_commit": s["commit"],
        "source_git_blob_sha": s["blob_sha"],
        "source_license": s["license"],
        "unique_source_complexes": expected_cards,
        "persisted_question_candidates_replayed": 593,
        "distinct_question_ids": 593,
        "question_types": types,
        "source_id_set_sha256": dig,
        "source_formula_and_model_check": "AST-only parsed 199 author source cards; every stored valence/oxidation/d count and displayed formula/answer matched pinned source",
        "scientific_scope": "Valence and oxidation source assertions were compared with the authored source. Computed d count was checked as periodic group minus source oxidation state. No independent electron-count expert adjudication.",
        "subject": "inorganic",
        "item_content_license_or_persona_newly_approved": 0,
        "expert_chemistry_approved": 0,
        "formally_exam_ready": 0,
        "included_in_prior_386_replay": 0,
        "note": "These 593 existing candidates are variants of 199 source complexes, not 593 independently collected exam questions. Includes generated variants and possible semantic overlap."
    }

def run(local_source=None):
    module = source_module()
    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    if config.get("schema_version") != 1 or len(config.get("approved_generators", [])) != 1:
        raise ValueError("Unexpected approved TMC import registry")
    source = config["approved_generators"][0]
    raw = module.fetch_pinned(source, local_source)
    cards = module.cards_from_source(raw.decode("utf-8"))
    if len(cards) != 199:
        raise ValueError("Pinned TMC source complex count changed")
    expected = build_expected(cards, source, module)
    rows = {}
    for path in sorted(OUT.glob("*.json")):
        q = json.loads(path.read_text(encoding="utf-8"))
        if q["id"] != path.stem or q["id"] in rows:
            raise ValueError("Candidate filename/id mismatch or duplicate")
        rows[q["id"]] = q
    report = audit_saved(expected, rows, source)
    serialized = json.dumps(report, ensure_ascii=False, indent=2) + "\n"
    if not REPORT.exists() or REPORT.read_text(encoding="utf-8") != serialized:
        REPORT.write_text(serialized, encoding="utf-8")
    print("Pinned TMC persisted replay: 199 source complexes -> 593 stored candidates; experts approved=0")
    return report

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-file", help="Optional offline pinned source, Git blob verified")
    args = parser.parse_args()
    try:
        run(args.source_file)
    except (OSError, ValueError, KeyError, UnicodeError, SyntaxError) as e:
        parser.exit(1, "TMC saved replay failed: " + str(e) + "\n")
