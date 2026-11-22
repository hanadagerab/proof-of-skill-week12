import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const ui=read('app/week15/distribution-ui.tsx'),data=JSON.parse(read('app/week15/distribution-content.json'));
const layout=read('app/layout.tsx');
test('Week 15 presents three distinct content series',()=>{
 for(const name of ['Beyond the CV','Evidence in Action','The Human Standard'])assert.ok(ui.includes(name),name);
});
test('final B headline is concrete and truthful in both languages',()=>{
 assert.equal(data.es.headingB,'De 12 pedidos ficticios a una pregunta para la entrevista');
 assert.equal(data.en.headingB,'From 12 fictional orders to a human interview question');
 for(const l of ['en','es'])assert.match(data[l].introB,/automatically generate|automáticamente/i);
});
test('the fictional metric and human next step are preserved',()=>{
 for(const l of ['es','en']){
  assert.equal(data[l].steps.length,6);
  assert.match(data[l].steps[2][2],/10 \/ 12 = 83\.3/);
  assert.match(data[l].steps[5][2],/equivalent|equivalente/);
  assert.match(data[l].steps[5][4],/No automated rejection|Sin rechazo automático/);
 }
});
test('candidate protections and missing evidence are clearly stated',()=>{
 for(const l of ['en','es']){
  assert.match(data[l].claimCopy,/autoría|authorship/);
  assert.match(data[l].effortCopy,/not.*measured|no se ha hecho/i);
  assert.match(data[l].limit,/No automated|no automatic|no hay|No existe|rechazo|automátic/i);
 }
});
test('Week 15 remains linked from existing root navigation',()=>{
 assert.match(layout,/href="\/week15"/);
 assert.match(ui,/href="\/employer-pilot"/);
});
test('public editorial pages contain no direct Auth, Supabase or database dependency',()=>{
 assert.doesNotMatch(ui,/createClient|service_role|signInWithOAuth|supabase\.from|insert\(/i);
});
test('canonical source contains explicit AI and privacy disclosure in both languages',()=>{
 assert.match(data.es.privacyCopy,/asistencia de IA/);
 assert.match(data.en.privacyCopy,/AI assistance/);
 for(const l of ['es','en'])assert.match(data[l].privacyCopy,/datos personales|personal information/);
});
