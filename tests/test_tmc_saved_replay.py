import importlib.util
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parent.parent
SPEC = importlib.util.spec_from_file_location("audit_tmc", ROOT / "scripts" / "audit-chemtrain-tmc-stored.py")
audit = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(audit)
importer = audit.source_module()

FIXTURE = '''
def C(*args, **kwargs): pass
NO_NOTE = "This is a text note."
CORE = [C("Ferrocene", "Cp₂Fe", "Fe", 0, "Cp*2", 18, 2, "sand"),
        C("Nickel tetracarbonyl", "Ni(CO)₄", "Ni", 0, "CO*4", 18, 0, "tet4")]
CARBONYLS = []
PI = []
SQUARE = []
HYDRIDES = []
WERNER = []
'''

class SavedReplayTests(unittest.TestCase):
    def setUp(self):
        self.s = {
            "id": "chemtrain-tmc-electron-counts",
            "expected_unique_complexes": 199,
            "repository": "ChemTrain/tmc-learn", "commit": "3ccdefe51d6754cb59cc19c847d76b7044da1414",
            "path": "src/tmc_sets.py", "blob_sha": "a97ab868052f6f5ca568c132a3df3851d8cb89b2",
            "license": "CC-BY-4.0", "content_rights_verified": True,
            "attribution": "TMC Learn, CC BY 4.0", "license_evidence": {"content_license":"author"}
        }
        cards = importer.cards_from_source(FIXTURE)
        self.partial = audit.build_expected(cards, self.s, importer)
        self.assertEqual(len(self.partial), 6)
        # Synthetic 593-card equivalent with unique IDs, preserving exact metadata.
        self.expected = {}
        by_type = {row["question_type"]: row for row in self.partial.values()}
        # The real corpus has 199 valence, 197 oxidation and 197 d-count entries.
        for kind, count in [("valence_electrons",199),
                            ("oxidation_state",197),("d_electrons",197)]:
            for n in range(count):
                row = dict(by_type[kind])
                row["id"] = (kind + str(n)).encode("utf-8").hex()[:64].ljust(64, "0")
                row["question"] = str(n) + row["question"]
                self.expected[row["id"]] = row
        self.assertEqual(len(self.expected),593)
        self.rows = dict(self.expected)
    def test_replays_all_persisted_source_records(self):
        # Different synthetic card data but same audited logic.
        source = dict(self.s)
        report = audit.audit_saved(self.expected,self.rows,source)
        self.assertEqual(report["persisted_question_candidates_replayed"],593)
        self.assertEqual(report["formally_exam_ready"],0)
    def test_detects_wrong_answer_and_wrong_source(self):
        rowid = next(iter(self.rows))
        corrupt = dict(self.rows)
        corrupt[rowid] = {**corrupt[rowid], "answer": "wrong"}
        with self.assertRaisesRegex(ValueError, "answer"):
            audit.audit_saved(self.expected,corrupt,self.s)
        corrupt[rowid] = {**corrupt[rowid], "source": {"repository":"attacker"}}
        with self.assertRaisesRegex(ValueError, "source"):
            audit.audit_saved(self.expected,corrupt,self.s)
    def test_detects_missing_candidate_and_unsafe_license(self):
        short = dict(self.rows)
        short.pop(next(iter(short)))
        with self.assertRaisesRegex(ValueError, "Missing TMC"):
            audit.audit_saved(self.expected,short,self.s)
        with self.assertRaisesRegex(ValueError, "rights"):
            audit.audit_saved(self.expected,self.rows,{**self.s, "content_rights_verified":False})

if __name__ == "__main__":
    unittest.main()
