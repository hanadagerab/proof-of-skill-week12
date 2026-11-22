import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const root='app/week15/';
const content=JSON.parse(read(root+'distribution-content.json')),ui=read(root+'distribution-ui.tsx');
test('one existing Week 15 provider persists language and defaults to Spanish',()=>{
 const l=read(root+'language.tsx'),layout=read(root+'layout.tsx');
 assert.match(l,/useState<Week15Lang>\('es'\)/);
 assert.match(l,/proof-of-skill-week15-language/);
 assert.match(l,/localStorage/);assert.match(l,/saved==='en'\?'en':'es'/);
 assert.match(layout,/Week15LanguageProvider/);assert.match(layout,/Week15LanguageSwitch/);
});
test('the integrated four routes consume the same shared language context',()=>{
 for(const p of ['page.tsx','carousel/page.tsx','evidence/page.tsx'])assert.match(read(root+p),/Week15(Landing|Carousel|Evidence)/);
 assert.match(read(root+'rights/page.tsx'),/useWeek15Language/);
 assert.match(ui,/useWeek15Language/);
});
test('four English and Spanish original carousel SVG files remain present',()=>{
 for(const name of ['01-cv','02-contexto','03-limites','04-pregunta'])
  for(const suffix of ['','-en'])assert.ok(existsSync(new URL('../public/week15/carousel/'+name+suffix+'.svg',import.meta.url)));
});
test('the candidate rights infographics remain separately bilingual',()=>{
 const es=read('public/week15/human-standard.svg'),en=read('public/week15/human-standard-en.svg');
 assert.match(es,/Evidencia opcional/);assert.match(en,/Optional evidence/);
 assert.match(en,/enforcement has not been verified/);
});
test('all six walkthrough steps have translations and preserve limitations',()=>{
 for(const l of ['en','es']){
  assert.equal(content[l].steps.length,6);
  for(const [i,s] of content[l].steps.entries())assert.equal(s.length,5, l+' '+i);
  assert.match(content[l].steps[5][2],/verified|verificado/);
 }
});
test('downloadable art labels follow selected language',()=>{
 assert.match(ui,/lang==='en'\?'-en':''/);
 assert.match(ui,/c\.download/);assert.match(ui,/alt=\{c\.panelNames\[i\]\}/);
});
test('bilingual disclosures include optional evidence and transparent limitations',()=>{
 for(const l of ['es','en']){
  assert.match(content[l].claimCopy,/equivalent|equivalente/);
  assert.match(content[l].privacyCopy,/asistencia de IA|AI assistance/);
  assert.match(content[l].comparisonCopy,/candidate|candidato/);
 }
});
test('canonical headlines match reviewed audience-driven source',()=>{
 assert.equal(content.es.headingB,'De 12 pedidos ficticios a una pregunta para la entrevista');
 assert.equal(content.en.headingB,'From 12 fictional orders to a human interview question');
 assert.match(content.en.introB,/does not automatically generate/);
});
test('Excel-screening value claim is visibly accessible before stage one',()=>{
 assert.match(ui,/aria-labelledby="w15-excel-question"/);
 assert.match(ui,/id="w15-excel-question"/);
 assert.ok(ui.indexOf('w15-excel-question', ui.indexOf('export function Week15Evidence')) < ui.indexOf('aria-label={lang===', ui.indexOf('export function Week15Evidence')));
 for(const l of ['en','es']){
  assert.match(content[l].answer,/no time savings|no se han medido/);
  assert.match(content[l].answer,/same criterion|mismo criterio/);
 }
});
