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


## Week 13 — Session Close 1 (2026-11-05): Research documentation and read-only baseline
- **Approval boundary:** Hana authorized the Week 13 planning baseline and research documentation, not a specific candidate workflow change. Team 5 Blueprint is a simulated draft pending actual team approval.
- **Evidence:** Fetched existing `docs/PACKET.md` (two fenced Mermaid diagrams) and `docs/IMPLEMENTATION_PROMPT.md` from branch `week13/pre-code-packet-final`. Image-generated PNG not found in GitHub branch; local asset remains to be uploaded.
- **Directly executed:** Committed all seven blank `research/` templates; investigated source, dependencies, existing tests, and Supabase schema/RLS using connected tools. See `docs/WEEK13_TECHNICAL_BASELINE.md`.
- **Security review:** Live Supabase `submissions` owner-only INSERT/SELECT policies and RLS confirmed. Security advisor warns of publicly executable `SECURITY DEFINER` event-trigger function `public.rls_auto_enable()`; separate permission review required. Password-breach protection disabled. No DB changes made; no user records read.
- **Mechanical check:** 11/11 pure JavaScript unit tests passed on Node v22.16.0 in an isolated reconstruction of exact fetched GitHub source and test files. The full Next.js build, TypeScript check, lint and browser tests remain unverified.
- **Vercel blocker:** Project ID discovered but detailed project/deployment inspection returned HTTP 403 for team `hana-builds`. A one-time Vercel team access authorization link was offered to Hana. Production SHA and preview URL remain unknown. No preview was created or claimed.
- **Rejected options:** No mandatory extra assessment, recruitment marketplace, employer screening, unverified hiring impact, fabricated user sessions, or speculative product fix. No production release.
- **Next action:** Complete Vercel team authorization and inspect existing production SHA; verify preview from the documentation branch with production untouched; complete five real user sessions (three strangers) and a recent hiring case before selecting one fix. Preserve negative evidence and separate return intention from actual use.
