#!/usr/bin/env python3
"""Validate molecular parsing and expected CIP centers; this does not predict reactions."""
import json
from pathlib import Path
from rdkit import Chem

ROOT = Path(__file__).resolve().parent.parent
def centers(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError("Unparseable SMILES")
    Chem.AssignStereochemistry(mol, cleanIt=True, force=True)
    return [a.GetProp("_CIPCode") for a in mol.GetAtoms() if a.HasProp("_CIPCode")]

def run():
    checked = 0
    for path in sorted((ROOT / "questions").glob("CHEM-ORG-*/metadata.json")):
        meta = json.loads(path.read_text(encoding="utf8"))
        st = meta.get("structures", {})
        if not st.get("reactant_smiles") or not st.get("product_smiles"):
            raise ValueError(f"{meta['id']}: missing SMILES")
        for kind in ("reactant", "product"):
            actual = centers(st[kind + "_smiles"])
            expected = st.get("expected_" + kind + "_cip")
            if expected is not None and actual != [expected]:
                raise AssertionError(f"{meta['id']} {kind}: expected {expected}; got {actual}")
        checked += 1
    print(json.dumps({"checked_organic_questions": checked, "model": "RDKit CIP/SMILES only", "chemical_correctness_certified": False}))

if __name__ == "__main__":
    run()
