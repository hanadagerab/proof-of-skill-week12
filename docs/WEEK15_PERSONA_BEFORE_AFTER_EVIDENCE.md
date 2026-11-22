# Week 15 — Authentic PERSONA BEFORE/AFTER evidence handoff
**Date:** 2026-11-22. **Prepared by BuildChat for the independent Persona Test conversation.** This is implementation and mechanical evidence, **NOT a final Persona Test PDF**, a new evaluation, or Mariana's acceptance.

## 1. Findings supplied by the independent synthetic evaluator
Persona: **Mariana Salgado**, fictional 41-year-old Mexican SME hiring/operations manager. User-reported independent evaluation based on **nine screenshots supplied by a human**; independent live browsing was **BLOCKED by Vercel Authentication**.

| Reported metric | Result |
|---|---|
| Classified tasks | 3 PASS · 4 PARTIAL · 0 FAIL · 1 BLOCKED |
| Synthetic usability | 7.8 / 10 |
| Synthetic return likelihood | 6.5 / 10 |
| Independently observed app interactions by Mariana | BLOCKED |
| Real Mexican SME responses | 0 |

Concerns: (1) comparison to an existing Excel screen is conceptual rather than measured, (2) equivalent consideration is not operationally audited, and (3) the independent persona could not click through the full bilingual journey. These user-reported findings are distinct from the earlier *source-based* synthetic walkthrough at `docs/WEEK15_SYNTHETIC_PERSONA.md`. We did not receive the nine original screenshots or the complete independent conversation in this handoff; preserve that transcript in the original persona conversation.

## 2. Exact historical Git comparison
**BEFORE**: `082247391826c8271a7989794367c9b11c7b8e59`, **direct parent of Spanish change** `5a225073c7486d3c13c332d745710230686e5069`.

**AFTER**: `a19a38e0d5961a00f2574c45f2956723a93a4119` (after both bilingual copy commits and new assertion); same affected app copy at documentation/screenshot head `4f8faaa74af6b40620cc6da78b666be9e696a169`.

| Commit | Actual change |
|---|---|
| `5a225073` | Spanish Asset B clarification |
| `a7a25fc` | English equivalent clarification |
| `a19a38e` | Regression assertion for both versions |
| `4f8faaa` | Archived genuine Chromium screenshots; no new app functionality |

**BEFORE English:** “A six-step interactive walk-through of a completely fictional junior operations analyst example. It is not an assessment of a real person or a skills credential.”

**AFTER English:** “A six-step interactive walk-through of a completely fictional junior operations analyst example. It might replace part of an extra Excel screening exercise if an employer confirms that it covers the same criterion; no time savings or operational benefit have been measured. It is not an assessment of a real person or a skills credential.”

**BEFORE Spanish:** “Recorrido interactivo por seis etapas de una revisión ficticia para analistas operativos junior. No es una evaluación de una persona real ni una certificación.”

**AFTER Spanish:** “Recorrido interactivo por seis etapas de una revisión ficticia para analistas operativos junior. Podría sustituir parte de un ejercicio adicional de filtro en Excel, si el empleador demuestra que cubre el mismo criterio; no se han medido ahorros de tiempo ni utilidad operativa. No es una evaluación de una persona real ni una certificación.”

## 3. Real reproduced application captures (not reconstructed)
All eight screenshots came from **actual builds** of the matching Git commits in two separate isolated production-mode Next.js servers, at the **same route** `/week15/evidence` and matched viewport sizes. Chromium was driven through the real English/Español selector and the six stages before returning to stage 1 for the image. The original full-page images were taken by the browser; the GitHub JPEGs are compressed **first-viewport crops** to make the changed text readable without distortion. They were not image-generated or redrawn.

| Language | Viewport | BEFORE (historical commit) | AFTER (current application) |
|---|---|---|---|
| English | Desktop 1280 × 820 | [BEFORE screenshot](assets/week15-persona-before-after/desktop_en_BEFORE.jpg) | [AFTER screenshot](assets/week15-persona-before-after/desktop_en_AFTER.jpg) |
| Español | Desktop 1280 × 820 | [BEFORE screenshot](assets/week15-persona-before-after/desktop_es_BEFORE.jpg) | [AFTER screenshot](assets/week15-persona-before-after/desktop_es_AFTER.jpg) |
| English | Mobile 390 × 844 | [BEFORE screenshot](assets/week15-persona-before-after/mobile_en_BEFORE.jpg) | [AFTER screenshot](assets/week15-persona-before-after/mobile_en_AFTER.jpg) |
| Español | Mobile 390 × 844 | [BEFORE screenshot](assets/week15-persona-before-after/mobile_es_BEFORE.jpg) | [AFTER screenshot](assets/week15-persona-before-after/mobile_es_AFTER.jpg) |

The AFTER screenshot server used branch head `3f2aef0`, which contains documentation-only commits following `a19a38e`; no additional modification to Asset B occurred between those SHAs. All images are permanent Git blobs committed to the same PR branch at `4f8faaa`. Direct download from the GitHub image page or its raw-file link.

## 4. Actual mechanical retest
Two independent production builds: exact historical BEFORE `0822473` and AFTER branch `3f2aef0` both compiled and served `/week15/evidence` with HTTP 200.

Browser matching-pair capture (eight observations; four desktop and four mobile) showed:
- English and Spanish selectors changed the application-language intro appropriately.
- BEFORE omitted any assertion of a replaced Excel screening step.
- AFTER clearly introduces **potential** partial replacement *only if criteria match*, with **no measured savings or operational benefit**.
- Six interactive stages were traversed in **both languages and both viewport sizes** at both versions; the Previous control returned from step 6 to step 5.
- No page exceptions were captured during these runs; the changed layout and explanatory copy remained visible in first-viewport screenshots.

Latest separately executed regression at `4f8faaa74af6b40620cc6da78b666be9e696a169`: `npm test` **104/104 passing**, `npm run typecheck` exit 0, `npm run lint` exit 0 (two pre-existing config-only warnings), `npm run build` exit 0. The prior bilingual **103/103** was before the new persona-specific regression assertion; these totals are for different commits, not conflicting results.

This is developer-controlled browser/automation evidence. **It does not change the independent persona's BLOCKED status** or demonstrate that Mariana now understands the product better.

## 5. Reviewer directions and release boundaries
In the **existing original independent persona conversation**, present this evidence package, let Mariana review the actual before/after photos and potentially conduct an independently authorized screen retest. Ask her to state whether the Excel-screening ambiguity improved; keep any newly assigned grades distinct from the original 3/4/0/1. If she cannot access the secure preview, retain **BLOCKED** rather than turning technical automation into persona evidence.

Open PR: https://github.com/hanadagerab/proof-of-skill-week12/pull/3

Relevant app route: `/week15/evidence` on the current **protected** Vercel preview; use the preview-only evaluator entry URL available through Vercel, not production. Access might require an authorized Vercel account or time-limited share link.

**Still unresolved:** real employer comparison and comprehension, candidate equivalent-consideration audit, ordinary-user OAuth, cross-account RLS, independent persona confirmation, final editorial approval. Actual outreach 0 and real responses 0. No extra features, DB changes, production merge or new Persona PDF were created for this handoff.
