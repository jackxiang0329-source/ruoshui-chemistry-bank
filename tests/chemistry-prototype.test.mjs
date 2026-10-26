import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBank } from '../scripts/validate.mjs';

test('chemistry prototype has exactly 4 separately sourced draft questions', () => {
  const r = validateBank();
  assert.equal(r.total, 4);
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.ids, ['CHEM-ANAL-0001','CHEM-INORG-0001','CHEM-ORG-0001','CHEM-PHYS-0001']);
});

test('analytical EDTA numerical check via stable quadratic solution', () => {
  const K = 0.35 * 10 ** 10.65;
  const C = 1e-3;
  const x = 2*C/(1+Math.sqrt(1+4*K*C));
  assert.ok(Math.abs((K*x*x+x)/C-1)<1e-12);
  assert.ok(x>2.52e-7 && x<2.54e-7);
});

test('physical chemistry van Hoff check: exothermic dimerization decreases K on heating', () => {
  const R = 8.314462618, dH=-57200, dS=-175.8;
  const K1 = Math.exp(-(dH-298*dS)/(R*298));
  const K2 = K1 * Math.exp(-dH/R*(1/350-1/298));
  assert.ok(K1>6.96 && K1<7.00);
  assert.ok(K2>0.22 && K2<0.23);
  assert.ok(K2<K1);
});
