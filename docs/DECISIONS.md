# Genuine decision log

## Session 1 — local source construction (2026-10-31 project date)
- **Planning boundary:** original Week 4 baseline and Week 9 lessons are historical claims from provided materials; new Week 12 behaviors are implementation proposals until tested.
- **Scope:** single structured financial analyst task; deterministic evidence classification; no automatic hiring/AI-authorship detection.
- **Architecture:** Next.js, TypeScript, Supabase OAuth and RLS; single-user saved records. Reviewer visibility requires an explicit future authorization model.
- **Deployment:** GitHub/Vercel/domain require external account authorization and actual confirmation.
- **Commit history:** local milestone commits are genuine snapshots of locally produced artifacts, not evidence of earlier historical development or remote deployments.
- **Session close / next action:** install dependencies, run checks, configure live Supabase and Google OAuth, verify saves and access, deploy first real milestone, capture screenshots for persona test.

## Session 1 — genuine classifier regression
- **Observed failure:** First `node --test` execution failed with `SyntaxError: Illegal return statement` at `lib/engine.mjs:18`; an extra closing brace at line 14 placed the return outside the function.
- **Correction:** Deleted the redundant closing brace and added a TypeScript declaration for the JavaScript module.
- **Next action:** Re-run unit tests and then install dependencies for the full Next.js build; retain command output in testing log.

## Session 2 — persona-informed implementation (2026-10-31 source inspection; packaged in follow-up session)
- **Evidence audit:** Earlier supplied screenshots show localhost and consistent 35% margin, not a public deployment or a 42% mismatch. Source SHA-256 register: `docs/persona-evidence/BEFORE_MANIFEST.md`.
- **Product decision:** Replace infrastructure-facing save copy with candidate-facing language; make private storage, lack of employer sharing and human decision boundaries explicit.
- **Classifier correction:** Explain the 42%-versus-35% inconsistency via arithmetic rather than as misconduct or hiring failure; retain deterministic evidence categories and Shadow Clause.
- **Disclosure investigation:** Existing handlers invalidate generated summaries on disclosure changes; no actual disclosure inconsistency was reproduced in the supplied screenshots. Add a snapshot-based save record to prevent draft/summary drift, with automated tests.
- **Testing:** 11/11 Node engine and record-shaping tests passed after adjusting the earlier wording assertion. Dependency install stalled in this isolated runtime, so typecheck/lint/build and browser-level persistence checks are NOT verified here.
- **Git/deployment boundary:** Follow-up change commit is local to the packaged source; no claim of a GitHub push, Vercel redeploy, or live AFTER screenshots.
- **Session close / next action:** Sync revised source to existing live checkout, run npm test/typecheck/lint/build locally, push real commit, verify Vercel deployment, perform AFTER screenshots and persistence checks.
