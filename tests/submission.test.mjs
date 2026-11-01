import test from 'node:test';
import assert from 'node:assert/strict';
import {classify} from '../lib/engine.mjs';
import {buildSubmissionRecord} from '../lib/submission.mjs';
const base={revenue:100000,cost:65000,claimedMargin:42,sourceNotes:'Synthetic',assistance:'ai',isSynthetic:true};
test('form disclosure and saved record are consistent with summary',()=>{
 const input={...base};const summary=classify(input);
 const record=buildSubmissionRecord('owner-123',input,summary);
 assert.equal(record.disclosure.assistance,'ai');
 assert.match(record.summary.items.find(i=>i.criterion==='Authorship and assistance').supports,/AI assistance/);
 assert.equal(record.answers.claimedMargin,42);
});
test('saved record comes from generated snapshot even if draft changes later',()=>{
 const snapshot={...base};const summary=classify(snapshot);
 const draft={...base,assistance:'none',claimedMargin:35};
 const record=buildSubmissionRecord('owner-123',snapshot,summary);
 assert.equal(draft.assistance,'none');
 assert.equal(record.disclosure.assistance,'ai');
 assert.equal(record.answers.claimedMargin,42);
});
test('all assistance options produce non-accusatory summary and matching disclosure',()=>{
 for(const assistance of ['none','ai','other','unspecified']){
  const input={...base,assistance};const summary=classify(input);
  assert.equal(buildSubmissionRecord('owner-123',input,summary).disclosure.assistance,assistance);
  assert.equal(summary.items.find(i=>i.criterion==='Authorship and assistance').category,'UNVERIFIED');
 }
});
