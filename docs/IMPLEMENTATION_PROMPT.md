# WEEK 13 — IMPLEMENTATION PROMPT (PREPARED; NOT AUTHORIZED)

Student: Hana Dager Abascal · Role: USER · Venture: Proof-of-Skill

## Boundary
Read the approved `docs/PACKET.md`, final Week 13 Brain Bending Brief and Team 5 Blueprint. This document is a conditional technical plan, not consent to modify code or deploy. The Blueprint is explicitly a simulated draft pending actual team approval. Do not change the central vacuum: a Mexico-based early-career candidate with practical analytical experience, without a polished portfolio, needs to represent genuine work honestly without a new unnecessary assessment.

## Gate 0 — Research before implementation
1. Confirm explicit approval of the Packet; distinguish individual Packet approval from Team Blueprint approval.
2. Record current `main` SHA, live Vercel production SHA, baseline screenshots, existing tests and Supabase owner-only RLS. No changes yet.
3. Observe five consenting real candidates, at least three strangers, starting with their actual CV/application method. Capture completion, time, errors, hesitations, independent action, refusals, exact quotes and de-identified artifacts. Do not upload private participant data to a public repository.
4. Compare the **same real task** against a credible résumé-help or well-prompted general AI alternative and against existing Proof-of-Skill. Record output truthfulness, effort, clarity, safety and candidate agency.
5. Document at least one recent real hiring case, separating firsthand recall from corroborated job requirements, dates, decisions and actual employer feedback. Never call Week 4's simulated 49.2→17.5-minute (~2.8×) result validated.
6. Rank the three most serious pains using the Packet's harm, threat, evidence, frequency and feasibility criteria. Propose **one** smallest safe change only if justified. If competitors work as well, present a no-build conclusion.

## Gate 1 — Approved narrow build only
Use a new isolated branch `week13/<approved-fix>`. Preserve the Week 12 application, Google OAuth and Supabase persistence. If observations support it, explore an optional genuine-experience entry route with plain-language activity, context, action, output, source limits and assistance disclosure. The fixed financial exercise must not quietly become an extra mandatory assessment. The optional pathway remains UNIMPLEMENTED until separately approved.

Reuse Next.js, TypeScript, React, Tailwind, Zod, deterministic evidence rules and existing Supabase owner-RLS architecture. Do not introduce an LLM API, new database, external screening provider, marketplace, verified-skill score, hiring recommendation, private-record upload, or automatic employer transmission. Candidate review and correction must precede voluntary save. Do not claim authorship verification. Stop before any migration for a privacy/backup approval.

## Gate 2 — Mechanical and user tests
Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`. Add genuinely relevant tests for blanks, inconsistent values, disclosure, edits invalidating stale outputs, permitted save/retrieval and prohibited hiring verdicts. Synthetic personas are fixture tests and NEVER substitute for the five real sessions. Check Spanish comprehension, keyboard navigation, focus, error announcements, contrast, mobile width, slow connections and 200% zoom. With two test accounts verify RLS isolation; do not falsely promise deletion or retention until those controls exist.

## Gate 3 — Commits, deployments and retest
Preserve a minimum of five meaningful, distinct build commits and two actually verified deployments if the build is authorized. Each needs a real SHA, URL and observed result; do not manufacture no-op commits or deploy when research rejects a change. Retest the same task with an original participant if feasible; preserve before/after times, errors, outputs, screenshots, unresolved issues and learning effects. Preview before production and get explicit approval; verify proofofskill.app, Google OAuth, save/reload, privacy and rollback to last known-good Vercel deployment.

## Gate 4 — Session Close
After each session append a dated `docs/DECISIONS.md` entry stating evidence, decisions, rejected options, actual modifications, command results, commit/deployment identifiers, unresolved risks and precise next step. Final handoff includes approved Packet, five research records, real hiring case, comparison and pain ranking, before/after proof, return *intent* versus actual return, live URL, demo and limitations.

**Stop rules:** Confidential data request, insufficient consent, access leakage, unsupported verification or employment claim, unwanted assessment burden, or no advantage versus accessible existing tools. When a stop rule is met, pause rather than force a build.

## Next coding-agent instruction — only after explicit approval
“Read docs/PACKET.md and docs/DECISIONS.md; inspect the current repository and deployed SHA; summarize the research-proven highest priority pain, approved minimal change, excluded scope and regression risk. Do not edit until approval and privacy gates are met. Implement on a branch, run checks, compare before/after with real users, and report real commits, deployments and outstanding uncertainty.”