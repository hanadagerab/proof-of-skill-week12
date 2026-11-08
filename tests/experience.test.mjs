import test from 'node:test';
import assert from 'node:assert/strict';
import {buildExperienceSummary,summaryForCopy,validateExperience} from '../lib/experience.mjs';
const base={type:'family',activity:'I organized supplier invoices and tracked payments',decisions:'I compared purchasing options and flagged overdue items',support:'I can describe a redacted spreadsheet',limits:'I do not have permission to share supplier pricing',assistance:'unspecified'};
test('candidate words retained exactly, with no fabricated impact',()=>{
 const r=buildExperienceSummary(base);assert.equal(r.ok,true);
 assert.equal(r.summary.resumeBullet,base.activity+'.');
 assert.equal(r.summary.verification,'Candidate-reported, not independently verified');
 assert(!JSON.stringify(r.summary).includes('saved 20%'));
});
test('family-business work is allowed without formal title',()=>{
 const r=buildExperienceSummary(base);assert.equal(r.ok,true);assert.equal(r.summary.type,'family');
});
test('academic and informal experience accepted',()=>{
 for(const type of ['academic','informal','job','internship'])assert.equal(buildExperienceSummary({...base,type}).ok,true);
});
test('missing real action or method blocks output',()=>{
 assert.equal(validateExperience({...base,activity:''}).valid,false);
 assert.equal(validateExperience({...base,decisions:'  '}).valid,false);
});
test('invalid enum and oversized text rejected',()=>{
 assert.equal(buildExperienceSummary({...base,type:'verified-job'}).ok,false);
 assert.equal(buildExperienceSummary({...base,activity:'x'.repeat(421)}).ok,false);
});
test('missing optional source is labelled unknown, never verified',()=>{
 const r=buildExperienceSummary({...base,support:'',limits:''});assert.equal(r.ok,true);
 assert.match(r.summary.support,/No supporting/);
 assert.match(r.summary.limits,/not been independently verified/i);
});
test('AI assistance is disclosed without an authorship verdict',()=>{
 const r=buildExperienceSummary({...base,assistance:'ai'});assert.equal(r.ok,true);
 assert.match(summaryForCopy(r.summary),/Assistance disclosure: ai/);
 assert.doesNotMatch(summaryForCopy(r.summary),/AI-authored verified/i);
});
test('candidate-edited bullet remains labelled self-reported',()=>{
 const r=buildExperienceSummary(base);assert.equal(r.ok,true);
 const s=summaryForCopy(r.summary,'I organized recurring purchases.');
 assert.match(s,/I organized recurring purchases/);
 assert.match(s,/Not independently verified/);
});

test('Spanish locale yields Spanish labels in exported experience text',()=>{
 const r=buildExperienceSummary(base);assert.equal(r.ok,true);
 const exported=summaryForCopy(r.summary, r.summary.resumeBullet, 'es');
 assert.match(exported,/Experiencia descrita por la persona/i);
 assert.match(exported,/Sin verificación independiente/i);
 assert.match(exported,/Análisis y decisiones:/);
 assert.match(exported,/Evidencia disponible:/);
 assert.doesNotMatch(exported,/Approach and decisions:/);
});
