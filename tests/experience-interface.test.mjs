/** Source-level guardrails. These assert required interface text and path choices;
 * they are NOT a browser interaction, accessibility audit or real-user test. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const home=readFileSync(new URL('../app/page.tsx',import.meta.url),'utf8');
const page=readFileSync(new URL('../app/experience/page.tsx',import.meta.url),'utf8');
const finance=readFileSync(new URL('../app/product/page.tsx',import.meta.url),'utf8');
test('homepage presents both independent choices',()=>{
 assert.match(home,/href="\/experience"/);
 assert.match(home,/href="\/product"/);
 assert.match(home,/Describe my existing experience/);
 assert.match(home,/Try a financial skills exercise/);
});
test('experience form includes four inclusive contexts in both languages',()=>{
 for(const example of ['University project:','Internship:','Operations:','Family business:','Proyecto universitario:','Prácticas:','Operaciones:','Negocio familiar:'])assert(page.includes(example),example);
 for(const kind of ["job:'","internship:'","academic:'","informal:'","family:'"])assert(page.includes(kind),kind);
});
test('privacy and candidate control promises are present in the candidate route',()=>{
 for(const field of ['No account required','does not save to Supabase','not independently verified','send evidence to an employer','navigator.clipboard.writeText','text/plain;charset=utf-8'])assert.match(page,new RegExp(field,'i'),field);
 assert.match(page,/summaryForCopy\(generated,bullet,lang\)/);
});
test('finance task still exposes its original evidence and Google sign-in route',()=>{
 assert.match(finance,/signInWithOAuth/);
 assert.match(finance,/Generate my evidence summary/);
 assert.match(finance,/submissions/);
});

test('new review receives programmatic focus for keyboard navigation',()=>{
 assert.match(page,/reviewRef\.current\?\.focus\(\)/);
 assert.match(page,/tabIndex=\{-1\}/);
});

test('optional job context and candidate-controlled skill choices remain clearly bounded',()=>{
 assert.match(page,/What kind of job are you exploring\? \(optional\)/);
 assert.match(page,/¿Qué tipo de puesto te interesa\? \(opcional\)/);
 assert.match(page,/selectedSkillIds/);
 assert.match(page,/toggleSkill/);
 assert.match(page,/suggestTransferableSkills\(form,targetJob,lang\)/);
 assert.match(page,/approvedSkillLines\(suggestions,selectedSkillIds,lang,targetJob\)/);
 assert.match(page,/No necesitas presentar documentos ni pruebas/);
 assert.match(page,/You do not need supporting documents or proof/);
});
