# WEEK 13 — Candidate experience audit and research-gated change proposals
Hana Dager Abascal | USER role | 2026-11-05 | **No candidate-facing changes authorized or implemented by this document.**

## Governing documents and immutable BEFORE
[Approved Packet](../docs/PACKET.md) · [Implementation gates](../docs/IMPLEMENTATION_PROMPT.md) · [Five-user script](FIVE_USER_FACILITATOR_GUIDE.md) · [Baseline comparison](BASELINE_COMPARISON.md).
**Frozen before URL:** https://proof-of-skill-week12-j7wkj9z0j-hana-builds.vercel.app  
Deployment: `dpl_8RQ1VkCJapSbQHxouoRzWVcPAD93` · SHA: `b53a43be91be61af71f66e47903d12bc32967d1a` · READY (Vercel API). This SHA is fixed even as documentation changes generate other previews. Do not replace the baseline with the mutable branch alias. Vercel may impose team SSO on preview; never have strangers use team credentials. Test accessibility before a timed session and document a blocked attempt faithfully.

## What source code establishes (not user research)
Directly inspected `app/page.tsx`, `app/product/page.tsx`, `app/about/page.tsx`, `lib/engine.mjs`, `lib/schema.ts`, `lib/submission.mjs` and `lib/supabase.ts` from the Week 13 branch:
1. **Fixed task is the product's visible entry:** homepage “Explore the task” leads to a financial margin exercise. The product page has revenue, cost, margin, notes, help disclosure and synthetic label. There is no UI route for entering an internship, informal role or family-business analytical episode as a general experience.
2. **Generation is not evidence verification:** Zod validates bounded numeric fields and a deterministic engine classifies OBSERVED / INFERRED / MISSING / UNVERIFIED. Product text rightly avoids authorship or job guarantees.
3. **Review before save exists in a limited form:** changing any input invalidates the generated summary, and a user can regenerate; this is a useful safeguard. Save requires Google sign-in; generation does not.
4. **Saved history is limited:** the read query fetches the latest ten records, but the rendered list shows date and status only; no dedicated reopen/copy/edit/delete actions are implemented. The live Supabase table grants owner INSERT/SELECT, not UPDATE/DELETE. Avoid promising deletion or adding a client-only delete button.
5. **Copy/transfer is manual:** no dedicated export/copy of an application-ready personal-experience description is coded. The generated output is financial-evidence paragraphs, not a candidate's resume-ready narrative.
6. **About-page scope mismatch:** `app/about/page.tsx` frames the upcoming research as five hiring decision-makers and hypothesizes employers as buyers. This is inconsistent with the *candidate-first USER* Week 13 protocol. It has not been changed to preserve the before experience. Decide whether clarity copy is the justified top pain after research.
7. **Prior synthetic 2.8×:** homepage/About explicitly mark 49.2→17.5 minutes as a simulated comparison. It is not validated.

## What remains hypothetical until real sessions
- Whether the fixed exercise creates harmful duplicate effort, or whether some candidates value it.
- Whether candidates understand evidence labels and limitations.
- Whether a general AI tool already produces an equally clear and truthful result faster.
- Whether sign-in/storage is perceived as valuable or risky; whether anyone would willingly return.
- Whether an experience-first route improves accuracy, effort, agency or voluntary use.
Never convert a code-identified absence into a claimed participant pain without observed behavior.

## Decision matrix — proposals only (ordered by *plausible* relevance, NOT empirical pain rank)
| Candidate improvement | Minimum user-visible change if real evidence supports it | Expected observable gain | Risk / gate | Possible tests |
|---|---|---|---|---|
| 1. Optional **Use experience I already have** pathway | Keep current finance exercise; add separate plain-language entry for activity/context/actions/result, evidence basis, personal contribution, uncertainty and assistance disclosure; review before optional save | Candidate can describe existing work without unrelated finance assessment | Needs majority or high-harm corroborating evidence; avoid fabricated verification, scope creep and schema migration | Self-reported versus synthetic distinction, missing outcome, AI disclosure, edit invalidates stale summary, bounded truthful copy |
| 2. Clarify first choice and navigation | Candidate-first “describe existing experience” versus “try the finance work sample” choice, both clearly labeled; keep first route optional until justified | Fewer inappropriate task starts/abandonments | Must not misrepresent unbuilt pathway or turn into mandatory new task | Navigation labels, keyboard, language, abandoned paths |
| 3. Application-ready summary and correction | Plain-language statement + supported specifics + explicit unknowns, editable before save; user-controlled copy for CV/application; no employer access | Improved comprehension, less manual rewriting, no invented achievement | Preserve deterministic bounded labels; no LLM required | No invented numeric result, truthful provenance, copy only user-reviewed text |
| 4. Make saved evidence useful | Show saved record details and explain storage/retention; consider download and delete only after checking RLS, privacy and migration gate | Real retrieval value and candidate control | Supabase INSERT/SELECT only; delete requires separate explicit security/migration approval | Read same-user, block other-user, post-save record fidelity, consented deletion if later authorized |

**Select one primary change**, not the whole table. If top pain is simply confusing instructions, fix the words—not build a new engine. If the alternative wins, an honest narrowed product or no-build decision is acceptable. Feasibility cannot outrank human harm.

## Research-to-code gate
1. Complete five dated, consented real candidate sessions, at least three strangers; observe normal application workflow first. Log refusals and comparative alternative; record negative evidence.
2. Complete one recent real hiring case with provenance/uncertainty. No causal hiring inference.
3. Rank three pains using recorded participant evidence and severity; choose one justified fix and secure Hana's explicit scope approval.
4. Branch safely from exact source, inspect auth/Supabase RLS and schema constraints, design reversible minimal UI with candidate control and no unnecessary dependency. No mandatory duplicate assessment.
5. Run mechanical tests + synthetic persona fixture (NOT a real human) + mobile/accessibility/privacy regression. `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`.
6. Create preview deploy with real SHA/status/URL; check both new and existing workflow, Google OAuth, private save/reload, wrong-account access, then retest with actual participant. Preserve BEFORE and AFTER screenshots/metrics and limitations.
7. Update `docs/DECISIONS.md`; no production promotion without explicit review/approval.

## Week 13 success isn't more UI
The key test is whether the person has a **more truthful, clear and usable account of the real work they already did**, at reasonable cost, compared with their own approach and an informed AI/résumé alternative. Technical success, satisfaction, voluntary use and actual hiring impact remain separate outcomes.
