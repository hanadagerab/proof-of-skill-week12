import test from 'node:test';
import assert from 'node:assert/strict';
import {suggestTransferableSkills,approvedSkillLines} from '../lib/transferable-skills.mjs';

const maria={activity:'Organicé facturas de proveedores y di seguimiento a pagos pendientes.',decisions:'Comparé precios y organicé un inventario sin compartir registros privados.'};
test('synthetic Spanish family-business entry generates only evidence-anchored themes',()=>{
 const suggestions=suggestTransferableSkills(maria,'administration','es');
 assert(suggestions.length>0&&suggestions.length<=3);
 for(const s of suggestions){
  assert((maria.activity+' '+maria.decisions).toLowerCase().includes(s.evidence.toLowerCase()));
  assert.equal(s.source,'candidate-reported');
  assert(!s.label.includes('verificado'));
 }
});
test('does not infer skills from job selection without user-entered evidence',()=>{
 assert.deepEqual(suggestTransferableSkills({activity:'',decisions:''},'analyst','es'),[]);
 assert.deepEqual(suggestTransferableSkills({activity:'I greeted visitors.',decisions:'I answered phones.'},'analyst','en'),[]);
});
test('does not invent quantified outcomes or certifications',()=>{
 const s=suggestTransferableSkills(maria,'operations','en');
 const out=approvedSkillLines(s,s.map(x=>x.id),'en','operations').join('\n');
 assert.match(out,/not verified/i);
 assert.doesNotMatch(out,/saved|certified|endorsed|qualified to/ig);
});
test('candidate must select themes; unselected suggestions stay out of export',()=>{
 const s=suggestTransferableSkills(maria,'administration','es');
 const none=approvedSkillLines(s,[],'es','administration').join('\n');
 assert.doesNotMatch(none,/palabras de la persona/i);
 const one=approvedSkillLines(s,[s[0].id],'es','administration').join('\n');
 assert.match(one,/sin verificar/i);
 assert.equal(one.split('\n').filter(x=>x.startsWith('- ')).length,1);
});
test('unrecognized role and unrecognized selected skill are safe',()=>{
 const s=suggestTransferableSkills(maria,'unknown','en');
 assert(s.length<=3);
 const lines=approvedSkillLines(s,['not-a-real-skill'],'en','unknown');
 assert.equal(lines.length,1);
 assert.match(lines[0],/Not specified/);
});
test('English and Spanish labels are consistent with language choice',()=>{
 const en=suggestTransferableSkills(maria,'administration','en');
 const es=suggestTransferableSkills(maria,'administration','es');
 assert(en.length>0&&es.length>0);
 assert.equal(en[0].id,es[0].id);
 assert.notEqual(en[0].label,es[0].label);
});

test('accented Spanish word comparé is recognized only when actually supplied',()=>{
 const result=suggestTransferableSkills({activity:'Comparé precios de proveedores.',decisions:'Comparé alternativas de compra.'},'administration','es');
 assert(result.some(s=>s.id==='comparison'));
 assert(result.some(s=>s.id==='comparison'&&s.evidence==='Comparé'));
});
