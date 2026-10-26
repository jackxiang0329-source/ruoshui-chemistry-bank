import importlib.util
import json
from pathlib import Path

def load_adapter():
    path=Path(__file__).resolve().parent.parent/"scripts"/"verify-chemiq-offline.py"
    spec=importlib.util.spec_from_file_location("chemiq_offline",path)
    mod=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

def test_offline_verifier_reuses_upstream_and_skips_network_methods(tmp_path):
    questions=[
       {"uuid":"carbon_count","verification_method":"exact_match","answer":3,"answer_range":None,"question_category":"counting_carbon","sub_category":None},
       {"uuid":"smiles","verification_method":"canonical_smi_match","answer":"CCO","answer_range":None,"question_category":"reaction","sub_category":None},
       {"uuid":"name","verification_method":"opsin","answer":"CCO","answer_range":None,"question_category":"smiles_to_iupac","sub_category":None}
    ]
    file=tmp_path/"benchmark.jsonl"
    file.write_text("\n".join(json.dumps(q) for q in questions)+"\n",encoding="utf8")
    results=load_adapter().assess(file,{"carbon_count":"3","smiles":"OCC","name":"ethanol"})
    assert results["evaluated"]==2
    assert results["correct"]==2
    assert results["skipped"]==1
    assert results["results"][2]["status"]=="skipped_offline"
