#!/usr/bin/env python3
"""Offline adapter for the original ChemIQ AnswerVerifier; never calls OPSIN network.

Example:
 python scripts/verify-chemiq-offline.py --questions=path/to/chemiq.jsonl --answers=responses.json

Only benchmark/evaluation usage. This does not publish any question or grant redistribution rights.
"""
import argparse
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERIFIER = ROOT / "third_party" / "ChemIQ" / "utils" / "answer_verifier.py"
ALLOWED = {"exact_match", "range", "list_of_tuples", "canonical_smi_match"}

def load_vendor_verifier():
    spec = importlib.util.spec_from_file_location("vendored_chemiq_answer_verifier", VERIFIER)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.AnswerVerifier

def assess(questions_file, model_answers):
    # The vendored module is intentionally loaded, not rewritten.
    vendor = load_vendor_verifier()
    grader = vendor(str(questions_file))
    output = []
    for uuid, question in grader.question_dict.items():
        method = question.get("verification_method")
        if method not in ALLOWED:
            output.append({"uuid":uuid, "status":"skipped_offline",
                           "reason":"method_requires_external_opsin_or_is_unknown"})
            continue
        answer = model_answers.get(uuid)
        if answer is None:
            output.append({"uuid":uuid, "status":"missing_response"})
            continue
        # Limit submitted answers as the original tool does.
        response = str(answer)
        if len(response)>200 or "\n" in response:
            output.append({"uuid":uuid, "status":"invalid_response"})
            continue
        checked = grader.check_answer(uuid,response)
        output.append({"uuid":uuid,"status":"evaluated",
                       "correct":bool(checked.get("is_correct"))})
    return {"status":"benchmark_only_not_publication_review",
            "source":"oxpig/ChemIQ core AnswerVerifier (BSD-3-Clause)",
            "evaluated":sum(x["status"]=="evaluated" for x in output),
            "correct":sum(x.get("correct",False) for x in output),
            "skipped":sum(x["status"]=="skipped_offline" for x in output),
            "warnings":["OPSIN name-to-structure verification deliberately disabled to avoid network calls.",
              "Upstream canonical_smi_match ignores stereochemistry; do not use as a stereochemical publication check.",
              "This adapter evaluates responses but does not validate source questions scientifically."],
            "results":output}

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--questions",required=True,type=Path)
    parser.add_argument("--answers",required=True,type=Path)
    args=parser.parse_args()
    replies=json.loads(args.answers.read_text(encoding="utf-8"))
    if not isinstance(replies,dict):
        raise ValueError("answers JSON must map ChemIQ UUID to response")
    print(json.dumps(assess(args.questions,replies),indent=2,ensure_ascii=False))

if __name__=="__main__":
    main()
