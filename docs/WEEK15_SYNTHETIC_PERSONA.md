# Week 15 — Synthetic employer persona evaluation (simulation, not a real interview)
**Method:** Text-grounded cognitive walkthrough of committed screen source, not an independently observed browser session. Conducted as a separate, written simulation artifact because a separate ChatGPT conversation cannot be created automatically. No claim of browser use, physical viewport screenshots, recruiter participation, or external approval.

## Persona
**Mariana Salgado**, fictional, 41, operations and hiring manager at a 65-person manufacturing SME in Querétaro recruiting a junior operations analyst. Assumed manual process: CV review, an Excel exercise, supervisor questions, short interviews. Limited hiring time, sensitive to redundant candidate assessments and invalid AI claims. These are plausible simulation assumptions, not observed interviews.

## Tasks and recorded simulation
| Task | Outcome | Trace / reason | Follow-up |
|---|---|---|---|
| Identify intended employer audience on /week15 | PASS (source-visible) | First paragraph explicitly names Mexican SMEs and analysts junior | Test with actual manager |
| Understand proof limitations | PASS (source-visible) | Hero warning and /week15/evidence stage 4 explicitly deny authorship and competence verification | Real comprehension unverified |
| Find shareable education | PASS (source-visible) | /week15/carousel has four original SVG panels and per-panel links | Download interaction unverified |
| Explore supported/unsupported inference | PARTIAL (source-visible) | Six stage controlled component exists; no actual click/browser event captured | Browser interaction check pending |
| Understand voluntary participation | PASS (source-visible) | /week15/rights image and copy clarify principles vs incomplete compliance checks | Test candidate interpretation |
| Understand what action might be replaced | PARTIAL | Copy says before another task but doesn't establish whether it replaces any specific test | Ask actual employer about screening workflow |
| Find employer next step | PARTIAL | Existing /employer-pilot allows anonymous pricing model; no actual inquiry/lead capture is implemented | Product CTA is exploratory only |
| Mobile readability | BLOCKED | Responsive classes present; no real 360 px browser screenshot or visual check | Browser inspection required |
| Candidate routes unaffected | BLOCKED | New files isolated, existing routes fetched HTTP 200 in prior live preview; behavioral regressions not completed | OAuth and owner RLS checks required |

## Synthetic confusion and recommendations
1. **Potential misunderstanding:** “Proof-of-Skill” could sound like skill certification. **Present mitigation:** prominent non-certification notice and explicit fictional label; no real interpretation study.
2. **Potential misunderstanding:** equivalent consideration sounds already guaranteed. **Present mitigation:** infographic explicitly identifies employer audit/alternative as unverified; no evidence of operational compliance.
3. **Potential usability problem:** new assets were embedded on same page in the initial version. **Confirmed from source, not persona inference.** Correction: three independent routes plus downloadable SVGs implemented.
4. **Unresolved:** action is exploratory, not a formal pilot inquiry. No proof of lead conversion or revenue.
5. **Unresolved:** carousel download accessibility and six-step interactive control behavior have only source tests, not captured browser interactions.

## Before / after / retest evidence
**Before (commit 78a695b...)**: three sections on one page; no independent shareable links; static 12-order analysis.
**After (branch commits for assets)**: /week15/carousel, /week15/evidence, /week15/rights and links from launch page; branded SVG files.
**Retest layer:** New `tests/week15-assets.test.mjs` checks source structure. True browser retest, applicant interpretation, employer validation and visual screenshots remain unverified.

## Ethical boundaries
This is a simulated review by an invented persona authored in the development workflow. It does not represent a real person, a separate original ChatGPT persona conversation, five user sessions, real comprehension feedback, real willingness to pay, or verified customer demand. No persona conversation transcript was manufactured.

## Technical retest addendum (not persona testimony)
Following creation of the synthetic walkthrough, the actual application was run in a separate Vercel sandbox. Chromium checked all seven routes at 1366px and 375px: 14 HTTP 200, no page exceptions or document overflow; visual A SVGs and C infographic loaded, B stage controls moved 1→2→1. The four homepage links navigated successfully when tested with an actual wait for URL. These are **technical observations** supporting interaction and responsiveness checks, not statements spoken by fictional Mariana and not real audience validation.
The promised separate original ChatGPT persona conversation still does not exist; this document is an honest synthetic narrative, not a substituted transcript. Do not fabricate a transcript.
