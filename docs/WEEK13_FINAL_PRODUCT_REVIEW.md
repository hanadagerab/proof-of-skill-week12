# Week 13 — Final pre-promotion product review
**Hana Dager Abascal · Proof-of-Skill · Review: 8 November 2026**  
**Scope:** Preview and source inspection only. **No production promotion, Supabase schema edit or Google OAuth changes.**

## Versions: exact provenance
- Initial Week 13 candidate-first preview: [proof-of-skill-week12-ppwzirm6o-hana-builds.vercel.app](https://proof-of-skill-week12-ppwzirm6o-hana-builds.vercel.app) — deployment `dpl_AxTzdwL32bZ9u2tH9rHydB2XMh4N`, source SHA `592764c47adbf5182e0879eccf2c3ce06c759902`, Vercel READY. This immutable URL documents the **original implementation before QA fixes**, and remains an actual deployment.
- Final corrected preview: use the **exact immutable URL and SHA returned by Vercel on the last reviewed commit**. The preview link on the Git branch may change on each docs update; do not substitute it for a verified immutable deployment.
- Production: [proofofskill.app](https://proofofskill.app), `main` commit `9479c75ab9cb11bdf607740c2bbc499761728fc0`, deployment `dpl_DEQEFzyA7jXVJ532e6vybtV1KbDq`, READY on the prior check. Keep unchanged until explicit promotion approval.
- **Preview access restriction:** Vercel project SSO protection applies to non-custom domains. Tool inspection and build logs can verify deploy provenance without showing a private-browser session. If the preview asks the founder to log in to Vercel, follow normal team login. Do not share team credentials with test candidates.

## Detailed status matrix
The word "verified" below identifies the verification method; source availability and automated build are **not** browser usability proof.

| Journey/requirement | What code / connected tools establish | Remaining manual browser verification |
|---|---|---|
| Homepage & starting choices | `app/page.tsx` has distinct links to `/experience` and `/product` with explanatory copy; Next.js build yields both routes | Open homepage; click both choices and Back; verify no dead link, proper contrast |
| Existing-experience form | `app/experience/page.tsx` offers types job, internship, academic project, informal, family business; activity and decisions required; optional sources, limits and assistance | Type and clear fields; generate incomplete vs complete; check that sensitive text isn't encouraged |
| Examples | EN and ES source include academic, **internship**, operations and family business guidance; added previously missing internship-specific example during QA | Check all four appear on desktop and mobile without truncation |
| Language | EN/ES toggle changes visible form labels/instructions, supported by new translated export labels | Toggle EN→ES→EN; review generated summary and downloaded TXT in selected language |
| Summary generation | `lib/experience.mjs` deterministically constructs an output from candidate-entered words, with explicit candidate-reported/not independently verified marker; no AI generation or invented metrics | Enter a truthful synthetic fixture, generate; inspect label, omissions and original wording |
| Candidate edit/review | `generated` state, editable `bullet`; changing form invalidates old output; QA added review-heading focus so keyboard/screen reader user reaches result | Change form after generating; verify prior review goes away; generate again and edit bullet; observe focus |
| Copy | Client calls `navigator.clipboard.writeText`; on permission failure shows fallback guidance; unit tests cover text generation, **not clipboard permission** | Copy, paste into Notes/Docs; verify wording and disclaimer; deny clipboard permission to test fallback |
| Download | Client builds `text/plain;charset=utf-8` Blob and anchors local `proof-of-skill-my-experience.txt`; no external submission | Download on Mac/Windows/mobile; open file, inspect UTF-8 accents and disclaimers; check actual file |
| Mobile | Responsive Tailwind classes `lg:grid-cols`, `md:grid-cols`, `sm:flex-row`, form width `w-full` are present | Visually inspect on actual narrow screen (e.g. 375px); verify no horizontal overflow, hidden CTA or blocked download |
| Original finance exercise | `/product` source and financial engine are unchanged from original branch; existing unit tests still included | Generate finance result; optionally sign in with your own test account; verify save and read without sensitive records |
| Auth/data/privacy | New route uses state and local clipboard/file APIs only; **no Supabase client or API request** in new experience route. Original finance screen remains connected to Google OAuth and owner-only Supabase table. | Network/DevTools if available: verify experience route does not POST candidate text; with safe test account verify old sign-in/restore. No actual cross-account test conducted in this review |
| Usability/accessibility | Semantic headings and `<label>` fields, live `role=alert`/ `role=status`, translated content-region lang, focus-visible styling. Review now receives focus after generation. | Test keyboard only (Tab, Shift+Tab, Enter), screen-reader annunciation, 200% zoom, color contrast and actual device layout |

## Findings and safe corrections
1. **Real source-level functional inconsistency:** Initial English/Spanish toggle localized visible UI but `summaryForCopy()` always emitted **English** metadata/disclaimers in copied/TXT text. Added a failing locale-focused unit test before fixing; localized the export headings, self-reported boundary, assistance disclosure and missing-source/limits fallbacks, while preserving the candidate's own words verbatim. English readable AI-assistance disclosure remains intact. This is an actual source/test reproducible discrepancy; not a claim of observed customer failure.
2. **Missing example:** The form offered **internship** in its dropdown but displayed no concrete internship example in the help panel. Added internship example in EN and ES, and a source-level guardrail test. The test is not a visual proof.
3. **Accessibility enhancement:** After generating a summary, the newly displayed review was not explicitly focused. Added a focusable review heading and React effect to move keyboard/screen-reader focus into the result; added source-level regression assertion. This is a code inspection/assistive-navigation improvement; needs browser/screen-reader confirmation.
4. **QA regression tests:** An intermediate CI run failed when tests expected raw assistance code `ai` and an overly narrow translated-label exact string. Updated tests to verify the actual *human-readable* assistance wording and clear Spanish provenance label; retained the confidentiality and self-report protections. Do not represent those transient runs as successes. All final checks must be read from an actual successful Actions run on the final commit.

## Data integrity & privacy: specific acceptable limitation
**Decision: leave experience saving local-only for this Week 13 release candidate.** The new route supports composing, reviewing, copying and downloading text **without Google sign-in**; it does not write candidate experience to Supabase. This is an **intentional, defensible narrow-scope decision**, not a missing implementation secretly described as cloud save. Current `public.submissions` has owner-only SELECT/INSERT RLS and a task slug constrained to `financial-analyst-v1`. Silently writing experience records to that schema would mislabel their provenance; adding a new `experience-v1` table or slug would require separate consent, retention/deletion controls, migrations, policy tests, and auth QA. Candidate evidence may contain sensitive workplace information; avoid increasing data collection absent demonstrated need. If users report losing work as a significant actual problem, prioritize safe local draft recovery first or propose an explicitly authorized privacy-first schema and lifecycle.

## Verification cannot conclude these outcomes
- Browser-level clipboard permission, actual downloaded file, responsive mobile visual rendering, VoiceOver accessibility, Google OAuth callback, real-user completion, voluntary return, or two-account access isolation are **not verified by GitHub unit tests or Vercel READY status**.
- The attached five-response compilation is qualitative; session timestamps, consent permission, three independent strangers, actual observed step counts/timing and employer uptake are unverified.
- No claimed Week 13 time savings, hiring outcomes, achieved consent, or self-reported evidence as verified employment.

## Short manual review (Hana; private test only)
- [ ] Open the exact corrected Vercel preview while signed into team `hana-builds`; confirm two homepage choices.
- [ ] Open **Describe my existing experience**. Check academic, internship, operations, family-business examples and privacy warning. Switch **Español**.
- [ ] Select *Negocio familiar*, type a **fictional and nonconfidential** contribution and approach (at least 12 chars each); leave optional evidence empty. Generate. Confirm the candidate-reported/not independently verified label and no invented achievements.
- [ ] Edit the résumé sentence. Click **Copy**, paste into Notes; verify **Spanish** labels, original wording and disclaimer. Click **Guardar .txt**, open the actual downloaded file.
- [ ] Edit original form; confirm the old generated result disappears; generate again. Try submitting a blank required answer: validation feedback should appear.
- [ ] On a phone or 375px viewport, repeat language toggle and copy/download; use keyboard to navigate controls and make sure review heading receives focus.
- [ ] Use **Finance exercise**: generate old margin evidence; with your own safe test account only, verify OAuth and private save/reload. Do not use participant records.
- [ ] Confirm production `proofofskill.app` still shows the unchanged Week 12 candidate experience; do not promote.

## Follow-up gate
Fix any newly observed browser defect on the Week 13 branch, rerun all checks and verify a new preview. Do not promote before Hana's explicit authorization. Then carry out genuine before/after human testing with actual permissions and at least three verified strangers if required by the course.
