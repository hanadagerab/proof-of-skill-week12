/**
 * SYNTHETIC PERSONA TESTS — fictional fixtures, not actual participants.
 * These cases check deterministic data handling, not navigation, demand or hiring outcomes.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {buildExperienceSummary,summaryForCopy} from '../lib/experience.mjs';

const cases=[
 {label:'Synthetic university inventory project',type:'academic',activity:'I organized inventory observations and flagged recurring differences',decisions:'I compared expected counts with recorded counts',support:'I can describe a non-confidential spreadsheet',limits:'The underlying warehouse records were not independently verified',assistance:'ai'},
 {label:'Synthetic operations coordinator',type:'job',activity:'I organized shift handovers and proposed a checklist',decisions:'I tracked delayed tasks and identified missing steps',support:'I can describe the checklist without internal counts',limits:'I cannot disclose customer details or claim company-wide outcomes',assistance:'unspecified'},
 {label:'Synthetic informal family-business role',type:'family',activity:'I organized supplier invoices and monitored pending purchases',decisions:'I compared options and checked recurring payment needs',support:'I can describe the method without sharing supplier prices',limits:'I do not have a formal job title or verified savings',assistance:'other'}
];

for(const c of cases){
 test(c.label+' → usable, bounded output',()=>{
  const x=buildExperienceSummary(c);
  assert.equal(x.ok,true);
  assert.equal(x.summary.kind,'candidate-described-experience');
  assert.equal(x.summary.resumeBullet,c.activity+'.');
  const copy=summaryForCopy(x.summary);
  assert.match(copy,/Not independently verified/);
  assert.match(copy,/not a platform skill assessment/i);
  assert(!copy.includes('increased revenue by'));
  assert(!copy.includes('verified employment'));
 });
}
test('synthetic fixture rejects missing actual action',()=>{
 const x=buildExperienceSummary({...cases[0],activity:' '});
 assert.equal(x.ok,false);
 assert(x.errors.activity);
});
