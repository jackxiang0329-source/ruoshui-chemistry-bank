import importlib.util
from pathlib import Path
spec=importlib.util.spec_from_file_location('qa',Path(__file__).resolve().parents[1]/'scripts'/'rdkit_audit.py')
mod=importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
def test_rdkit_smiles_formula_and_chirality():
    assert mod.parse_smiles('C')['formula']=='CH4'
    assert mod.atom_counts('C')!=mod.atom_counts('CH4')
    assert mod.parse_smiles('CCO')['canonical']==mod.parse_smiles('OCC')['canonical']
    assert mod.parse_smiles('N[C@H](C)C(=O)O')['canonical'] != mod.parse_smiles('N[C@@H](C)C(=O)O')['canonical']
    assert mod.atom_counts('Ca(OH)2') is None
