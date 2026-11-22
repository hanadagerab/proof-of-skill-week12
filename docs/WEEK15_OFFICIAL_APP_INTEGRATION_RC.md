# Week 15 — Official application integration release candidate
**Prepared:** 2026-11-22. **Release authorization:** NOT GRANTED for merge or official production.

## Intent and scope
Prepare the audience-revised Week 15 materials for the **existing** Proof-of-Skill Next.js application on branch `week15/distribution-evidence`; do **not** touch the `main` branch, Vercel production domain, Supabase, Auth, RLS, account records, Google OAuth, candidate workflows, employer logic or pricing.

## Canonical content and public distribution snapshot
- **Canonical content for future in-app release:** `app/week15/distribution-content.json`, a direct extraction of the final reviewed bilingual `WORDS` from `docs/week15-public-distribution/source/assets/site.js`, the **isolated public distribution** snapshot. Headline, messages, six-stage walkthrough, claims, privacy and AI disclosures, effort caveats and pilot measurement boundaries come from this one JSON record.
- **Canonical in-app renderer:** `app/week15/distribution-ui.tsx`, used by `/week15`, `/week15/carousel` and `/week15/evidence` with the existing Week 15 scoped selector. Assets A/C reuse the original English and Spanish SVGs in `public/week15`. Rights route C keeps the original images and supplements them with the same canonical privacy/claim text and visible plain text at desktop/mobile sizes.
- Historical `docs/week15-public-distribution/source/` documents the live independent static distribution project's source at the last audience-revised checkpoint. It is an **immutable evidence snapshot**, not a second current source of application copy. The public static distribution service is **not** automatically synchronized with repository changes; any future content revision requires coordinated review and explicit distribution deployment, never a silent update.
- **Spanish-first** applies ONLY to Week 15-scoped pages and their persistent `proof-of-skill-week15-language` preference, with English selectable and `?lang=en`/ `?lang=es` recognized. It does not alter the English default or auth state on unrelated candidate or employer routes.

## Exact production change if PR #3 is eventually approved
1. The existing global navigation gains a `/week15` link; the pre-existing research-preview header/footer text in this PR is altered. Existing candidate and employer navigation destinations remain intact.
2. New `/week15` Spanish-first landing with links to three materials, no lead capture.
3. `/week15/carousel`: four original slides in EN/ES with downloadable SVG files; **accessible explanatory HTML text first**, preserving the original visuals and standalone route.
4. `/week15/evidence`: concrete audience-driven headline **“De 12 pedidos ficticios a una pregunta para la entrevista”** / **“From 12 fictional orders to a human interview question”**; six manually navigable fictional steps, a prominent *conditional* Excel screening comparison, AI/privacy disclosure, explicit unmeasured candidate effort, candidate-rights caveats, and prospective parallel-pilot measures. **No automated question generation, scoring, rejection, certification or measured savings claims**.
5. `/week15/rights`: original The Human Standard infographics remain downloadable in both languages; privacy/AI disclosures and plain text candidate rights visibly accompany them.
6. No database schema, API, OAuth, RLS, payment, Supabase, or candidate/employer workflow implementation changed.

## Exact technical checkpoint
- Code and test commit exercised: **`81a119602229de24e2370201a1bb95d2c0caf198`** (subsequent documentation commits do not alter runtime behavior).
- From fresh source at that SHA: `npm ci` succeeded; `npm test` **105 passed / 0 failed**; `npm run typecheck` exit 0; `npm run lint` exit 0 (existing configuration warnings only); `npm run build` exit 0 with Week 15 and preexisting routes included.
- Independent build on the Vercel sandbox was started in **production-mode Next.js** at `127.0.0.1:3095`, tested through real Chromium at **1366×900 desktop and 390×844 mobile**.
- **8/8** Week 15 route×device observations (landing, A, B, C, each desktop/mobile) were Spanish on new local preference, switchable to English with language persistence; no horizontal document overflow. Asset A: **4/4 images present** with no broken images, original English slide SVG downloaded successfully, ordinary HTML explanations present before art. Asset B: **all 6 Spanish steps traversed** on each device, Previous returned correctly, English headline and interactive continuation checked, fictional/AI/privacy/candidate-effort/conditional-benefit disclosures present. C: infographic and text/canonical disclosures present in both languages. Landing: all three routes and employer pilot CTA rendered.
- **10/10** existing route×device HTTP 200 anonymous smoke checks: `/`, `/experience`, `/product`, `/employer-pilot`, `/about` on desktop and mobile.
- Browser run recorded **zero page JavaScript exceptions**. This was application behavior on a sandboxed production-mode build; a READY Vercel preview is not proof of further authenticated or cross-account acceptance.

## Security and unresolved blockers
- No new API, database client in public educational components, authorization bypass, candidate uploads, account state or data mutation. All original Auth/Supabase paths are preserved **in source**; this does not prove ordinary-user authentication still works.
- **BLOCKED**, not PASS: real Google OAuth sign-in/return and two authorized ordinary-user Supabase cross-account RLS isolation checks; no user test credentials/session were available.
- **NOT VERIFIED:** employer enforcement of voluntary/equivalent consideration; true candidate effort; employer labor savings or validated Excel-step substitution; market WTP. Laura and Diego remain only two **user-reported audience responses**, with no fabricated conversions, verified credentials or signed pilots.
- Existing static A/B site remains publicly reachable and technically separate; the full official production application on `proofofskill.app` must stay unchanged until explicit further release authorization.

## Release gates / recommendation
**Technical readiness: GO for preview review only. Production: NO-GO at this checkpoint.** The repository PR is currently draft; next manual gates:
1. Review integrated protected Vercel preview in EN/ES at desktop/mobile, including graphics/accessibility and current employer route.
2. Perform authorized OAuth sign-in/return and two-account candidate isolation/RLS tests (or accept and document any unresolved risk under an explicit release decision).
3. Review source diff/security scope and verify latest branch head/build status and PR mergeability; confirm no merge conflicts.
4. **Ask for a separate explicit production merge/deploy authorization.** Do not merge PR #3 or promote a preview deployment under this integration request.
5. Once authorized, merge reviewed SHA to `main`, deploy with production environment, smoke-test `proofofskill.app` and its original candidate/employer routes and Week 15 routes; rollback if auth/data regressions arise.

**Evidence note:** This integration did **not** regenerate the Business Packet PDF or Persona Test PDF.

### Official-app integration release candidate — final verified checkpoint, 2026-11-22
- **Separate from public distribution:** The independent no-login A/B site continues to serve the two already-audited static educational assets. The official Next.js application **has not been deployed** with this integration.
- **Canonical in-app content:** `app/week15/distribution-content.json`, extracted from the final Spanish/English audience-revised public copy; `app/week15/distribution-ui.tsx` renders the new landing, A HTML-first carousel and B six-step interaction from the same data. C retains its original artwork and rights text and adds canonical disclosures. The archived static public distribution source under `docs/week15-public-distribution/source/` is historical evidence, not another live-editable app copy. The in-app privacy copy clarifies that these *educational routes* have no intake/new auth, while **other existing authenticated Proof-of-Skill routes continue unchanged**.
- **Source implementation/test SHA:** `5a588bab5861cb78e7c7a0b4459dde66c01cfc7f`. Fresh `npm ci`, `npm test` **105/105 PASS** (no failures), `npm run typecheck` PASS, `npm run lint` PASS (only existing config warnings), `npm run build` PASS. This supersedes prior automated numbers **for the integration candidate only**.
- **Actual local production-mode Chromium:** 1366×900 desktop and 390×844 mobile, **8/8** integrated Week 15 route×device observations (landing, carousel, six-step evidence, rights) successful with new-visitor Spanish, English switching and persistence; no horizontal overflow or captured page errors. Four original A panels displayed with zero broken images and a tested English SVG download. B retained six Spanish interaction stages, Previous return, and natural English headline; fictional, AI/privacy, conditional Excel and unmeasured-effort disclosures were visibly present. C retained bilingual infographic, accessible rights and privacy text. All **10/10** pre-existing route×device anonymous HTTP 200 smokes passed for `/`, `/experience`, `/product`, `/employer-pilot`, and `/about`. Additional SPA check navigated from the Week 15 English selection to `/experience` and restored the English document root language.
- **Scope:** No tables, migrations, RLS policies, OAuth configuration, candidate-record writes, automatic candidate scores, pricing or payments modified by the integration. The existing project maintains its Vercel protection; no change to `main` or `proofofskill.app`.
- **Outstanding:** Ordinary-user Google OAuth and cross-account Supabase RLS tests **BLOCKED**, not PASS; real candidate rights/equivalent consideration operational safeguards and employer benefit remain unverified. PR #3 **not merged** and integration **not released**; a production decision requires separate explicit approval. Full audit: `docs/WEEK15_OFFICIAL_APP_INTEGRATION_RC.md`.
