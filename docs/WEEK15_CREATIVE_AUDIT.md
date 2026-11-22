# Week 15 — Asset B creative audit trail (actual staged revisions)
**Date:** 21 November 2026. **Status:** final candidate draft; NOT human-approved; no external participants used.

| Stage | Responsible role | Actual input | Actual output | Quality gate / result |
|---|---|---|---|---|
| 1 Research | Product analyst + AI assistance | Week 15 Advisory Blueprint: evidence validity unverified; no duplicate assessment; equivalent consideration needed; earlier product context and existing CV/experience route | Narrow problem statement: an employer needs to decide which question to ask after screening, not certify the candidate | PASS: audience and decision moment match approved positioning; no real employer claim |
| 2 Writing | AI writing draft, human approval pending | Fictional 12-order table: 10 on time, 2 late | Initial working copy in `app/week15/page.tsx`: 83.3% on-time rate; criterion, supported/unsupported assertions, missing information, follow-up | PARTIAL: accurate arithmetic and bounded inference, but the example was static |
| 3 Visual production | AI-assisted implementation | Working copy and brand palette #132A47 / #197A84 / #F3F1EB | `app/week15/evidence/page.tsx`: six step-by-step screens with progress indicator, previous/next/reset and no sign-in | PASS at source level; runtime interaction and visual review not yet independently verified |
| 4 Claim audit | Model audit; user sign-off pending | Draft asserts candidate may have worked with a spreadsheet | Revised to explicitly note that table belongs to a fictional case; demonstrates calculation only, not authorship, competence, job performance or validated outcomes | PASS for text; real user interpretation remains untested |
| 5 Style review | Model editorial check; user approval pending | Long dense static section and existing brand | Short stage titles, Spanish labels, reading-friendly hierarchy, contrast-aware teal/navy cards, mobile stack | Needs actual viewport / screen-reader checks |
| 6 Revision | AI-assisted developer; owner approval pending | First version: static B section only, no independent share link and no progression | Added `/week15/evidence` route, explicit six-step navigation, synthetic labels, limitations and CTA to unchanged `/employer-pilot` | Source change committed, awaiting actual browser, synthetic persona and Hana approval |

## Version history
- Initial static version: `7dc1915c889a9786911f2459de586ccf268d46b9` (page route originally added).
- First source regression suite: `68c2ab2bd8e43b0a2159786466443dad0177fdce` (89 passing tests on Vercel).
- Revised independent interactive Asset B: `fb31a90577fa68f268bcaee767808ab64308085b`.
- Changed behavior: static reading → explicit next/previous, six distinct verification boundaries; no new candidate assessment, personal data, or automated recommendation.

## Output and approval boundary
The latest work product is a **candidate asset**, not an approved or empirically validated campaign. Human review is an actual required gate, not an automatic step; no Hana approval was fabricated. Real recruitment outcomes, employer comprehension, candidate fairness, and cost savings remain unknown.

## Asset index
- A: `/week15/carousel` — independent four-panel SVG visual series, four separately downloadable files.
- B: `/week15/evidence` — interactive six-step application walkthrough, fictional example only.
- C: `/week15/rights` — independent vertical SVG infographic.
- Unimplemented concepts: A2 “Cuando la experiencia cuesta explicarla”; B2 “Qué incluye una revisión de evidencia”; C2 “Lo que nunca afirmaremos saber”.

## Bilingual extension — November 22, 2026
- English was already an existing candidate-workflow language; the published Week 15 content was mainly Spanish. To preserve the original assets rather than overwrite them, the revision created: `app/week15/english-landing.tsx`, `app/week15/carousel/english-carousel.tsx`, `app/week15/evidence/english-evidence.tsx`, `app/week15/rights/english-rights.tsx`, the four separate English SVG carousel slides, and the original English rights infographic SVG.
- Review method: translate **claims and limits**, not just headers. Examples: Spanish “Una evidencia no certifica” maps to English “A file is not a credential”; Spanish “equivalente” maps to “equivalent route to consideration.” Both versions retain voluntary participation, no authorship verification, no skill certification, no automatic rejection, and no evidence of actual hiring outcomes.
- Layout: same navy/teal/ivory identity, same square and vertical SVG formats, and same responsive mobile text. The Spanish SVG artwork remains unchanged; English originals contain independently embedded English text, not English captions surrounding Spanish-only visuals.
- Flow: the existing candidate page’s `en/es` terminology guided the selector, while Week 15 has a new scoped shared preference to keep its four pages in sync. This does not claim a global app language provider existed. An English or Spanish choice is preserved when navigating Week 15 routes and reloading the browser; authentication and Supabase were untouched.
- Validation: headless Chromium tested all four Week 15 routes in two languages at 1366×900 and 375×812. Assets and downloads mapped to the correct language, all six steps were traversed, no browser exceptions/overflow were captured. **103 automated tests passed.** Screenshots: `docs/assets/week15-bilingual-en-chromium.jpg` and `docs/assets/week15-bilingual-es-chromium.jpg` (captured browser, not generated stock concepts).
- Why Spanish-first distribution remains appropriate: initial consent-first outreach is to Mexican SME hiring managers using Spanish-language materials. English availability ensures continuity with the pre-existing candidate product and reduces language friction for broader evaluators; this **does not imply tested international demand**.
- Human editorial approval, real SME content comprehension and candidate-rights enforcement remain pending.
