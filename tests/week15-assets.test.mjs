import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const ui=read('app/week15/distribution-ui.tsx'),content=JSON.parse(read('app/week15/distribution-content.json'));
const right=read('app/week15/rights/page.tsx');
test('the landing links to A, B and C',()=>{
 for(const path of ['/week15/carousel','/week15/evidence','/week15/rights'])assert.ok(ui.includes('href="'+path+'"'),path);
});
test('carousel maintains all four original SVG downloads and accessible HTML text first',()=>{
 for(const name of ['01-cv','02-contexto','03-limites','04-pregunta'])assert.ok(ui.includes(name),name);
 assert.match(ui,/download=\{asset\}/);assert.match(ui,/c\.panelNames\.map/);assert.match(ui,/c\.summaries\[i\]/);
 assert.ok(ui.indexOf('w15-text-first')<ui.indexOf('w15-original-art'));
});
test('B interactive stages and controls use canonical content',()=>{
 assert.match(ui,/c\.steps\[index\]/);assert.match(ui,/setIndex/);assert.match(ui,/c\.next/);assert.match(ui,/c\.prev/);
 assert.equal(content.es.steps.length,6);assert.equal(content.en.steps.length,6);
});
test('B contains fiction, supported observation and unverified operational boundaries',()=>{
 for(const l of ['es','en']){
  assert.match(content[l].steps[0].body,/inventada|invented/);
  assert.match(content[l].steps[3].body,/not.*established|No se ha comprobado/i);
  assert.match(content[l].answer,/no se han medido|no time savings/);
 }
});
test('C retains its original bilingual SVG artwork and download',()=>{
 assert.match(right,/human-standard\.svg/);assert.match(right,/download=/);
 assert.ok(existsSync(new URL('../public/week15/human-standard-en.svg',import.meta.url)));
});
test('all Week 15 pages link back and B links to the existing employer route',()=>{
 assert.match(ui,/href="\/week15"/);assert.match(ui,/href="\/employer-pilot"/);
 assert.match(right,/href="\/week15"/);
});
test('source content does not request private candidate data',()=>{
 assert.doesNotMatch(ui,/createClient|service_role|onAuthStateChange|supabase\.auth/i);
 for(const l of ['es','en'])assert.match(content[l].privacyCopy,/No solicitan|do not request/);
});
