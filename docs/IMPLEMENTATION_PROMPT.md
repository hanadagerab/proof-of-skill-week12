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

## Week 13 documentation and research index (verified GitHub paths)

The following are live Markdown files on this working branch, not completed user research. Read them and the [technical baseline](WEEK13_TECHNICAL_BASELINE.md) before changing source code.

| Deliverable | Canonical file | Use |
|---|---|---|
| Recruitment | [RECRUITMENT.md](../research/RECRUITMENT.md) | Five candidates, at least three strangers, recruitment/refusal log |
| Informed consent | [CONSENT.md](../research/CONSENT.md) | Voluntary research, separate quote/screen-recording opt-ins |
| Session procedure | [SESSION_TEMPLATE.md](../research/SESSION_TEMPLATE.md) | Observe existing workaround before demonstrating Proof-of-Skill |
| Fair comparisons | [BASELINE_COMPARISON.md](../research/BASELINE_COMPARISON.md) | Time, effort, errors, truthful representation and general AI/résumé alternative |
| Priority decisions | [PAIN_RANKING.md](../research/PAIN_RANKING.md) | Rank three observed pains by harm, value threat and evidence, not ease |
| Hiring context | [HIRING_CASE_TEMPLATE.md](../research/HIRING_CASE_TEMPLATE.md) | One recent real hiring experience; confirmed facts versus participant recollection |
| Retest evidence | [BEFORE_AFTER.md](../research/BEFORE_AFTER.md) | Original failure, minimal fix, measurements, retest and true return behavior |
| Audited baseline | [WEEK13_TECHNICAL_BASELINE.md](WEEK13_TECHNICAL_BASELINE.md) | GitHub source and Supabase RLS findings, security advisories, Vercel blockers |
| Build decisions | [DECISIONS.md](DECISIONS.md) | Session-close log, actual tests, SHA, deployment ID and next action |
| Governing Packet | [PACKET.md](PACKET.md) | Approved research-first baseline; team Blueprint approval still independently unverified |

**Preview gate:** Inspect the exact production commit and existing domain before creating any Vercel preview; deploy only the Week 13 branch with preview target and verify its returned ID, SHA, URL, status, and non-production aliases. Neither a successful build nor a preview can be claimed from GitHub documentation commits alone.

**Asset gate:** The generated `docs/assets/week13-mockup.png` exists in the downloadable Packet source, but its binary has not yet been verified as present in this repository branch. Do not treat the Markdown image path as functioning until an actual PNG blob is committed and the GitHub file page loads.

## Week 13 candidate-first fieldwork and conditional improvement (2026-11-05)
- [Facilitator's exact five-user script](../research/FIVE_USER_FACILITATOR_GUIDE.md): recruit at least three strangers, consent, observe ordinary job-application behavior *first*, then compare the current application with a credible normal résumé or general-purpose AI alternative using de-identified work episodes.
- [Source-confirmed candidate limitations and prioritized **hypotheses**](../research/CANDIDATE_CHANGE_OPTIONS.md): fixed finance exercise, absence of general practical-experience entry, minimal saved-history rendering, and inconsistent candidate-vs-hiring focus in About. These are **not proven pain** until genuine sessions.
- **Baseline safety:** immutable protected preview `dpl_8RQ1VkCJapSbQHxouoRzWVcPAD93` / `b53a43be91be61af71f66e47903d12bc32967d1a`. Team SSO means strangers must not use Vercel team credentials. GitHub comparison to public production `9479c75ab9cb11bdf607740c2bbc499761728fc0` confirms no app/lib source differences, so participants may use `https://proofofskill.app` as the same unchanged BEFORE candidate interface while recording its actual URL/SHA. Never claim the version tested was the protected preview when the participant actually used production.
- After all five real sessions and the recent hiring case, rank three observed harms, secure explicit approval for one change and only then edit candidate-facing source on a controlled branch. No production promotion without final authorization.
