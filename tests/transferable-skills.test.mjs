import test from 'node:test';
import assert from 'node:assert/strict';
import {suggestTransferableSkills,approvedSkillLines,interviewPreparationQuestion} from '../lib/transferable-skills.mjs';

const maria={activity:'Organicé facturas de proveedores y di seguimiento a pagos pendientes.',decisions:'Comparé precios y organicé un inventario sin compartir registros privados.'};
test('synthetic Spanish family-business entry generates only evidence-anchored themes',()=>{
 const suggestions=suggestTransferableSkills(maria,'administration','es');
 assert(suggestions.length>0&&suggestions.length<=3);
 assert(suggestions.some(s=>s.id==='invoices'), 'explicitly organized invoices should be recognized');
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

test('negated activity is not offered as a transferable skill',()=>{
 const en=suggestTransferableSkills({activity:'I did not organize invoices.',decisions:'I did not manage inventory.'},'administration','en');
 assert.equal(en.length,0);
 const es=suggestTransferableSkills({activity:'No organicé facturas.',decisions:'Nunca comparé precios.'},'administration','es');
 assert.equal(es.length,0);
});

test('a topic mention alone does not turn into an activity claim',()=>{
 const x=suggestTransferableSkills({activity:'I saw a spreadsheet with invoices.',decisions:'I only observed the inventory display.'},'administration','en');
 assert.equal(x.length,0);
});

test('isolated inventory words cannot imply organizing inventory',()=>{
 const s=suggestTransferableSkills({activity:'I compared suppliers and mentioned inventory.',decisions:'I compared delivery options.'},'operations','en');
 assert(!s.some(x=>x.id==='inventory'));
});
test('supported suggestions contain candidate-authored action and contextual object, not just an isolated keyword',()=>{
 const s=suggestTransferableSkills({activity:'I organized supplier invoices and tracked pending payments.',decisions:'I reviewed the records weekly.'},'administration','en');
 const invoice=s.find(x=>x.id==='invoices');
 assert(invoice);
 assert.match(invoice.evidence,/organized supplier invoices/i);
 assert(invoice.evidence.length> 'invoices'.length);
});
test('passing mention of Excel without actual spreadsheet use is not a skill',()=>{
 const s=suggestTransferableSkills({activity:'I organized paper invoices and mentioned Excel.',decisions:'I checked supplier information.'},'analyst','en');
 assert(!s.some(x=>x.id==='spreadsheets'));
});
test('negated action cannot be supported by a later keyword in the same clause',()=>{
 const s=suggestTransferableSkills({activity:'I did not organize invoices, but I reviewed meeting notes.',decisions:'I never tracked pending payments.'},'administration','en');
 assert(!s.some(x=>x.id==='invoices'||x.id==='followup'));
});
test('interview question exists only with an approved, grounded theme and does not supply an answer',()=>{
 const s=suggestTransferableSkills({activity:'Organicé facturas de proveedores.',decisions:'Comparé precios de compra.'},'administration','es');
 const q=interviewPreparationQuestion(s,[s[0].id],'es','administration');
 assert(q);
 assert.match(q,/entrevista/i);
 assert(q.includes(s[0].evidence));
 assert.doesNotMatch(q,/ahorré|aumenté|verificado/i);
 assert.equal(interviewPreparationQuestion(s,[],'es','administration'),null);
});
