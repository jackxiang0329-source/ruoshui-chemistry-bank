import importlib.util
import pathlib
import unittest

PATH = pathlib.Path(__file__).parent.parent / 'scripts' / 'import-chemtrain-tmc.py'
spec = importlib.util.spec_from_file_location('tmc_import', PATH)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

FIXTURE = '''
def C(*args, **kwargs): pass
CORE = [C("Ferrocene", "Cp₂Fe", "Fe", 0, "Cp*2", 18, 2, "sand"),
        C("Linear nitrosyl", "Fe(NO)(CO)₃", "Fe", 0, "NO CO*3", 18, 0, "tet4", no_os=True)]
NO_NOTE = "A fixed source note."
CARBONYLS = [C("Nickel tetracarbonyl", "Ni(CO)₄", "Ni", 0, "CO*4", 18, 0, "tet4", NO_NOTE + " Second sentence.")]
PI = []
SQUARE = []
HYDRIDES = []
WERNER = []
'''

class ImportTests(unittest.TestCase):
    def test_literal_cards_and_classification(self):
        cards = mod.cards_from_source(FIXTURE)
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[0]['d_count'], 6)
        self.assertEqual(cards[2]['d_count'], 10)
        self.assertEqual(len(list(mod.questions_from_card(cards[0]))), 3)
        self.assertEqual(len(list(mod.questions_from_card(cards[1]))), 1)

    def test_safe_named_note_and_concatenation(self):
        self.assertEqual(mod.cards_from_source(FIXTURE)[2]['note'], 'A fixed source note. Second sentence.')

    def test_reject_executable_expression(self):
        malicious = FIXTURE.replace('"Cp₂Fe"', '__import__("os").system("touch /tmp/never")')
        with self.assertRaises((ValueError, TypeError)):
            mod.cards_from_source(malicious)

    def test_reject_missing_set(self):
        with self.assertRaises(ValueError):
            mod.cards_from_source(FIXTURE.replace('WERNER = []', ''))

    def test_normalized_id_stable(self):
        self.assertEqual(mod.question_id('Ａ  B'), mod.question_id('a b'))

    def test_git_blob_sha(self):
        self.assertEqual(mod.git_blob_sha(b'hello\n'), 'ce013625030ba8dba906f756967f9e9ca394464a')

if __name__ == '__main__':
    unittest.main()
