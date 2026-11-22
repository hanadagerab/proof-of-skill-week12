# Week 15 — Two user-supplied audience responses and distribution revision
**Date recorded:** November 22, 2026. **Provenance:** user-reported summaries supplied to BuildChat. The actual interviews, screenshots, transcripts, employment credentials, clicks and session analytics were not independently inspected or verified. The following are faithful *paraphrase-level records*, not fabricated verbatim quotations.

## Participant 1 — Laura
- Reported role: Talent Acquisition Coordinator, financial-services company, approximately **1,200 employees**.
- **Target-fit distinction:** Outside our first Mexican SME target segment. Her feedback helps with comprehensibility and distribution but does **not** validate initial SME demand.
- Reported preference: Asset A.
- Reported problems: Asset B title unclear; privacy concerns; AI transparency concerns; English-first presentation; unsupported suggestion of screening replacement.
- Reported next action: **no current pilot interest**. Do not infer clicks, completion times, or future meetings.
- Verification: identity/employment and interview details not independently verified.

## Participant 2 — Diego
- Reported role: Head of People, data-consulting company of approximately **70 people**.
- **Target-fit distinction:** Much closer to initial SME audience; one response is not representative market validation.
- Reported preference: more potential in Asset B.
- Reported problems: abstract headline; SVG-only presentation; download-first interface; no measured information about candidate effort.
- Reported next action: **conditional interest in exploring** a *one-vacancy, parallel, unpaid pilot*, **not** a purchase commitment, signed pilot, completed interview or confirmed future meeting.
- Verification: identity/employment and interview details not independently verified.

## Actionable problem ranking (interpretive prioritization, not a quantified survey)
| Priority | Evidence in feedback | Response | Claims we do NOT make |
|---|---|---|---|
| 1 — Comprehension | Both raised the abstract/unhelpful B headline; Laura concerned about unsubstantiated Excel replacement | B headline now names the fictional 12 orders and *a human interview question*; preserve conditional Excel caveat | No automated generation of verified interview questions; no replaced screening proven |
| 2 — Trust | Laura raised privacy and AI transparency | Text disclosures on A/B describe AI-assisted drafting/production, fictional material, and the isolated static site's lack of personal-data inputs, analytics and forms | No assertion of AI-free creation or independently verified authorship |
| 3 — Mexico-facing language | Laura criticized English-first presentation | Spanish first when there is **no existing saved choice**, while English switch and local preference persist | No claims of language preference from a representative market sample |
| 4 — Accessible readability | Diego criticized SVG-only/download-first | Core messages in semantic web paragraphs and headings before optional original SVG slide downloads | No claim of WCAG certification or screen-reader audit |
| 5 — Candidate effort | Diego asked for it | Explain it is **unmeasured**, then list what must be measured during a consented parallel pilot | No invented candidate minutes, employer time savings, cost/benefit or retention |
| 6 — Evidence of economic value | Laura questioned screening replacement; Diego raised a hypothetical parallel pilot | Specify conditions for a **single-vacancy unpaid parallel discovery experiment**, criteria and comparison measures | No purchase, lead, signed pilot or verified demand |

## Before / after (actual distribution content, not new product functionality)
- BEFORE public landing: English first, headline “From a work sample to the next question”; visual SVG carousel primary; privacy/AI disclosure and candidate effort not prominently shown in HTML; downloads visually central.
- AFTER public distribution: Spanish default for new browsers; B “**De 12 pedidos ficticios a una pregunta para la entrevista**” / “**From 12 fictional orders to a human interview question**”; explicit **human-authored/human-reviewed** interviewer follow-up, not an automated feature; A four text-readable message cards first and original eight SVG files still available; A/B public disclosures for fictional evidence, AI-assisted content creation, privacy and candidate safeguards; B prospectively explains candidate effort and parallel-pilot measurement.
- All revision work is isolated in Vercel project **proof-of-skill-week15-public-assets**, project `prj_8ur49QNlLOuXWuu4gxdXLhqH4vWW`, deployment `dpl_HVYmhmp8ZMscnkefzqPwZHA9as2q`. The private venture, Google OAuth, Supabase, authenticated candidate/employer workflows and `proofofskill.app` were not modified. PR #3 remains a draft, unmerged.
- Source for the **isolated public revision** (not merged into main Next.js application): `docs/week15-public-distribution/source/carousel.html`, `evidence.html`, `assets/site.js`, `assets/site.css` on this branch. Original Week 15 SVGs are sourced from `public/week15/carousel`.
- No account, Vercel login, analytics, cross-origin browser requests, cookies or candidate-data intake is necessary on the isolated public project. The material is genuinely public, therefore **do not** include private examples or personally identifying data.

## Anonymous technical acceptance
Retested from fresh Playwright Chromium contexts on **desktop 1366 × 900** and **mobile 390 × 844**, with empty browser cookies/storage:
- A and B direct URL loading: **4/4 HTTP 200**, no `vercel.com/login` redirect.
- Default language on fresh contexts: **Spanish**, 4/4 route/device checks. Existing user preference remains persistent; switching to English changes text and graphics, switching to Spanish persists across reloads.
- A: four normal-text information cards rendered before the graphics; four SVG visuals and downloads remain available, Spanish originals intact; English SVG download exercised.
- B: concrete title, conditional Excel note, six English and six Spanish stages, Previous navigation, privacy/AI disclaimer, unmeasured effort and potential pilot measurements checked. The example is **fictional**, questions are not auto-generated and no operational benefit is measured.
- No horizontal document overflow, no JS page errors, no cross-origin requests and no cookies in tests.
- CSP restricts requests to self and `connect-src 'none'`; protected routes are not deployed here.
- **Initial automated test script** misinterpreted persisted English preference after the first page and used an overly strict English wording substring for effort; this was a test-sequencing/assertion error. The corrected script explicitly cleared storage before each language-default test and exercised English separately. **Final retest: 4/4 browser route/device checks passed with zero recorded assertion failures.**
- Previous no-login distribution deployed at `dpl_46M87ruzAPeyZyctyDS2Kzh1VVwj`. Revised, independent distribution deployment `dpl_HVYmhmp8ZMscnkefzqPwZHA9as2q` reports **READY** on the **separate public-assets project**, not the original venture production.

## Direct links
- Asset A: https://proof-of-skill-week15-public-assets.vercel.app/week15/carousel
- Asset B: https://proof-of-skill-week15-public-assets.vercel.app/week15/evidence

## Subsequent pilot measurement — not performed
Consent and disclosure before testing. For one real vacancy, define **the same criterion** for the existing Excel task and sample review in advance. Run the methods **in parallel**, with a stopping rule and no automatic candidate rejection. Collect:
- Candidate active minutes, number of clicks/actions, extra requests, opt-outs and equivalent alternative usage.
- Employer active review minutes, duplicated tests, questions posed, corrections needed, feasibility of evaluating the same criterion.
- Candidate-reported clarity, privacy objections and perceived workload; employer-reported relevance.
- Confirm no impact on selection fairness, particularly for candidates who decline evidence. Compare actual observations without assuming positive cost savings.
Only then decide whether any Excel step might reasonably be removed. **No such measurement, employer adoption or candidate outcome has yet occurred.**

## Honest release boundary
- **Two user-reported audience responses**, **zero independently verified engagement metrics**, **no known paid commitments**. Number of initial invitations and nonresponses **not supplied**, therefore do not infer outreach denominator, reach or conversion.
- No real-world candidate-safeguard compliance audit or authorized ordinary-user Google OAuth / Supabase cross-account RLS verification was performed by the public static content tests.
- No authorization to merge PR #3, change the original production product, or publish a final Persona PDF.
