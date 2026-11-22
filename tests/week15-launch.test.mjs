import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/week15/page.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');

test('Week 15 contains all three distinct content-series labels', () => {
  for (const label of ['Beyond the CV', 'Evidence in Action', 'The Human Standard']) {
    assert.ok(page.includes(label), `Missing series: ${label}`);
  }
});

test('synthetic sample is explicitly labeled and identifies an unsupported inference', () => {
  assert.match(page, /fictici[oa]/i);
  assert.match(page, /Inferencia no sustentada/);
  assert.match(page, /Información pendiente/);
});

test('fictional calculation and human follow-up are visible', () => {
  assert.match(page, /12 pedidos/);
  assert.match(page, /10 \/ 12 = 83\.3 %/);
  assert.match(page, /Pregunta humana/);
});

test('candidate and employer safeguards are disclosed', () => {
  for (const label of ['Participación voluntaria', 'Sin cobro al candidato', 'Alternativa equivalente', 'Decisión humana', 'Derecho a corregir']) {
    assert.ok(page.includes(label), `Missing safeguard: ${label}`);
  }
});

test('candidate safeguards do not falsely claim operational compliance', () => {
  assert.match(page, /auditoría siguen pendientes/);
  assert.match(page, /supervisión de esa obligación aún no está implementada/);
});

test('week15 accessible from navigation and CTA uses existing employer route', () => {
  assert.match(layout, /href="\/week15"/);
  assert.match(page, /href="\/employer-pilot"/);
});

test('marketing page does not create authentication or direct database dependencies', () => {
  assert.doesNotMatch(page, /supabase|createClient|signInWithOAuth|useEffect|localStorage/i);
});
