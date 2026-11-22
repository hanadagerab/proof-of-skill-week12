# Week 15 — Unauthenticated public distribution access

**Date:** November 22, 2026. **Status:** independently browser-tested public educational assets; **no change to the original production application**.

## Barrier and mitigation
An external evaluator was sent the existing protected Vercel PR preview and redirected to `vercel.com/login`. That URL is **not** a usable no-login distribution link.

Created a **separate Vercel static-only project**, `proof-of-skill-week15-public-assets` (`prj_8ur49QNlLOuXWuu4gxdXLhqH4vWW`), with Vercel Authentication disabled **on that isolated distribution project only**, no Supabase/Google OAuth configuration, no environment variables, no authenticated workflows, no user-data API, and no analytics, cookies, submissions or cross-origin browser requests. Original application `proof-of-skill-week12` (`prj_5KbimU1Xzuc3ueGnVfJawG3orwvk`) remains protected and unaffected. PR #3 is not merged.

The isolated project uses static assets copied from Week 15's original eight SVG carousel slides (four English / four Spanish) plus a faithful bilingual six-step educational Asset B with its same conditional Excel screening panel, unsupported-inference warning and human-next-step safeguards. The web-only demo is **not** a replacement for private candidate/employer routes. The deployment is hosted under the new project's domain, not `proofofskill.app`.

**Separate static deployment:** `dpl_46M87ruzAPeyZyctyDS2Kzh1VVwj`, READY, assigned to the isolated project only. Vercel reports target `production` **for the separate public distribution project**, not the original venture application or domain.

## Direct tested public URLs (NO token, login, UTM or tracking)
- **Asset A:** https://proof-of-skill-week15-public-assets.vercel.app/week15/carousel
- **Asset B:** https://proof-of-skill-week15-public-assets.vercel.app/week15/evidence

Both provide English/Español switching and retain the browser language preference between these two public pages. Original four Spanish visuals remain unchanged; English downloads point to their corresponding genuine English original SVGs.

## True anonymous checks
Using a **fresh, unauthenticated Playwright Chromium context for each device**, desktop 1366×900 and mobile 390×844, with `storageState={cookies:[],origins:[]}`, and no Vercel team credentials, cookies, share tokens or login:
- Asset A: 200 on desktop and mobile; no redirect to `vercel.com/login`; four original images loaded, zero broken; four downloads, exercised an actual SVG download; selecting Español changes embedded artwork to the Spanish originals.
- Asset B: 200 on desktop and mobile; no login redirect; English conditional Excel panel displayed above step one, all six English stages navigated, reset visible, Spanish switch and Previous stage 6→5 work, Spanish choice persists after reload.
- **4/4** direct anonymous route/device combinations passed. **0** browser errors, **0** document overflow, **0** cross-origin requests and **0** cookies in test contexts. No authentication or session preconditions.
- Public project API confirms SSO and password protection disabled; the **original** venture project still has SSO protection enabled.

## Offline backup
A small WhatsApp ZIP was generated containing four original Spanish 1080×1080 PNG cards plus a high-contrast, selectable-text, link-enabled **five-page bilingual PDF** of Asset B, with the original fictional 12-order example, criterion, supported/unsupported assertions, unresolved question, human follow-up, candidate safeguards and conditional Excel clarification. Formal PDF/UA accessibility certification was not established.

## Known limitations and release boundary
- This is **public educational content**. Anyone with either link may view it; do not place candidate records or secrets in this static project.
- No real Mexican SME feedback has yet been recorded; **outreach 0, responses 0** as of this verification.
- Equivalent consideration remains a required but not operationally audited safeguard; employer time savings, conversion and hiring outcomes are unmeasured.
- Authenticated Google OAuth, candidate workflows and cross-account Supabase RLS were **not tested using this public copy**. Existing venture application retains its production security and data.
- No PR #3 merge, no new data table, no promotion to the existing `proofofskill.app` production environment.

**Decision:** Distribute only these two tested isolated-public URLs or the offline ZIP. Do not use an SSO-protected temporary PR preview as a public evaluator link.
