import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const experience=readFileSync(new URL('../app/experience/page.tsx',import.meta.url),'utf8');
const product=readFileSync(new URL('../app/product/page.tsx',import.meta.url),'utf8');
const client=readFileSync(new URL('../lib/supabase.ts',import.meta.url),'utf8');

test('Stage A exposes an optional Google account entry within the anonymous route',()=>{
 assert.match(experience,/aria-labelledby="experience-account-heading"/);
 assert.match(experience,/Sign in with Google/);
 assert.match(experience,/Iniciar sesión con Google/);
 assert.match(experience,/accountOptional/);
 assert.match(experience,/getSupabase\(\)/);
 assert.match(experience,/sb\.auth\.getUser\(\)/);
 assert.match(experience,/sb\.auth\.onAuthStateChange/);
 assert.match(experience,/sb\.auth\.signOut\(\)/);
});
test('OAuth returns to experience, never forces the financial exercise',()=>{
 assert.match(experience,/sb\.auth\.signInWithOAuth\(\{/);
 assert.match(experience,/provider:'google'/);
 assert.match(experience,/redirectTo:window\.location\.origin\+'\/experience'/);
 assert.doesNotMatch(experience,/redirectTo:window\.location\.origin\+'\/product'/);
 assert.match(product,/redirectTo:window\.location\.origin\+'\/product'/);
});
test('anonymous text entry and copying/exporting remain accessible',()=>{
 for(const token of ['buildExperienceSummary(form)','navigator.clipboard.writeText','application','text/plain;charset=utf-8','suggestTransferableSkills(form,targetJob,lang)']){
  if(token==='application')continue;
  assert(experience.includes(token),token);
 }
 assert.match(experience,/No account required/);
 assert.match(experience,/No necesitas iniciar sesión/);
});
test('no false Save to Account promise or new experience DB write',()=>{
 assert.match(experience,/Experience descriptions are NOT saved to your account/);
 assert.match(experience,/Las descripciones de experiencia NO se guardan en tu cuenta/);
 assert.match(experience,/Save .txt to my device/);
 assert.doesNotMatch(experience,/Save Experience to Account|Guardar experiencia en mi cuenta/);
 assert.doesNotMatch(experience,/\.from\(['"]submissions['"]\)/);
 assert.doesNotMatch(experience,/\.insert\(/);
 assert.match(product,/\.from\('submissions'\)\.insert\(record\)/);
});
test('draft storage requires explicit user choice and is limited to session tab',()=>{
 assert.match(experience,/hasDraft\?setAuthPrompt\(true\):void login\(false\)/);
 assert.match(experience,/authKeepDraft/);
 assert.match(experience,/authWithoutDraft/);
 assert.match(experience,/writeTemporaryDraft\(window\.sessionStorage/);
 assert.match(experience,/consumeTemporaryDraft\(window\.sessionStorage/);
 assert.match(experience,/clearTemporaryDraft\(window\.sessionStorage/);
 assert.doesNotMatch(experience,/window\.localStorage/);
});
test('existing finance OAuth and owner-only save/retrieval are untouched',()=>{
 assert.match(product,/sb\.auth\.signInWithOAuth/);
 assert.match(product,/sb\.auth\.signOut/);
 assert.match(product,/\.from\('submissions'\)\.select\(/);
 assert.match(product,/\.from\('submissions'\)\.insert\(record\)/);
 assert.match(client,/NEXT_PUBLIC_SUPABASE_ANON_KEY/);
 assert.doesNotMatch(client,/service_role|SERVICE_ROLE/);
});
