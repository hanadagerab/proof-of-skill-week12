import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const root='app/week15/';
const routes=['page.tsx','carousel/page.tsx','evidence/page.tsx','rights/page.tsx'];
test('one shared language context and selector for every Week 15 route',()=>{
 const l=read(root+'language.tsx'), layout=read(root+'layout.tsx');
 assert.match(l,/proof-of-skill-week15-language/);assert.match(l,/localStorage/);assert.match(l,/English/);assert.match(l,/Español/);
 assert.match(layout,/Week15LanguageProvider/);assert.match(layout,/Week15LanguageSwitch/);
 assert.match(layout,/Week 15 navigation/);assert.match(layout,/Navegación de la semana 15/);
 for(const p of routes) assert.match(read(root+p),/useWeek15Language/);
});
test('all four English and Spanish carousel art files exist',()=>{
 for(const n of ['01-cv','02-contexto','03-limites','04-pregunta']){
  for(const suffix of ['', '-en']) assert.equal(existsSync(new URL('../public/week15/carousel/'+n+suffix+'.svg',import.meta.url)),true);
 }
});
test('both rights infographics are actual translated visuals',()=>{
 const es=read('public/week15/human-standard.svg'), en=read('public/week15/human-standard-en.svg');
 assert.match(es,/Evidencia opcional/);assert.match(en,/Optional evidence/);
 assert.match(en,/enforcement has not been verified/);
});
test('all six English walkthrough stages are written with limitations',()=>{
 const en=read(root+'evidence/english-evidence.tsx');
 for(const t of ['1 / Input','2 / Criterion','3 / Observation','4 / Limitation','5 / Question','6 / Human decision'])assert.ok(en.includes(t),t);
 assert.match(en,/not verified/);assert.match(en,/No automated rejection/);
});
test('two independent carousel downloads follow current language',()=>{
 const es=read(root+'carousel/page.tsx'),en=read(root+'carousel/english-carousel.tsx');
 assert.match(es,/Guardar SVG/);assert.match(en,/Download English SVG/);assert.match(en,/01-cv-en.svg/);
});
test('bilingual rights and captions include equivalent participation safeguards',()=>{
 const es=read(root+'rights/page.tsx'), en=read(root+'rights/english-rights.tsx');
 assert.match(es,/Alternativa equivalente/);assert.match(en,/Equivalent alternative/);
 assert.match(en,/human/gi);assert.match(en,/not been verified/);
});
test('English landing does not claim skill verification or employer adoption',()=>{
 const en=read(root+'english-landing.tsx');
 assert.match(en,/not been commercially validated/);
 assert.match(en,/do not certify skills/);
 assert.match(en,/enforcement.*not been implemented/);
});

test('persona feedback: Excel screening replacement remains conditional in both languages',()=>{
 const english=read(root+'evidence/english-evidence.tsx');
 const spanish=read(root+'evidence/page.tsx');
 assert.match(english,/might replace part of an extra Excel screening exercise/);
 assert.match(english,/no time savings or operational benefit have been measured/);
 assert.match(spanish,/Podría sustituir parte de un ejercicio adicional de filtro en Excel/);
 assert.match(spanish,/no se han medido ahorros de tiempo ni utilidad operativa/);
});

test('Excel-screening clarification is prominent, accessible and before Step 1 in both languages',()=>{
 for(const [filename,heading,id] of [
  ['english-evidence.tsx','Could this replace an additional Excel test?','week15-excel-value-en'],
  ['page.tsx','¿Podría sustituir una prueba adicional de Excel?','week15-excel-value-es']
 ]){
  const content=read(root+'evidence/'+filename);
  assert.ok(content.includes('<section aria-labelledby="'+id+'"'),filename+' needs accessible section');
  assert.ok(content.includes('id="'+id+'"'),filename+' needs heading ID');
  assert.ok(content.includes(heading),filename+' heading missing');
  assert.ok(content.indexOf(heading)<content.indexOf('aria-live="polite"'),filename+' section must precede Step 1');
  assert.match(content,/text-base leading-relaxed text-\[#132A47\]/);
 }
});
