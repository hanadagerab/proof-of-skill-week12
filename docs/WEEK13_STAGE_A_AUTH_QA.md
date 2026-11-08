# Week 13 Stage A — Optional Google Sign-In (preview-only)
**Status:** Implemented in Week 13 GitHub working branch; no Stage B changes authorized.  
**Source of truth:** `app/experience/page.tsx`, `lib/experience-oauth-draft.mjs`, `lib/experience-oauth-draft.ts`, and regression tests.

## Actual behavior in code
- `/experience` still works without authentication: type work, generate bounded summary and optional transferable-skill themes, edit, copy and download `.txt`.
- A visible bilingual **optional account** section uses the same client `getSupabase()` as the Week 12 finance route. It calls `sb.auth.getUser()`, subscribes to `onAuthStateChange()`, supports `signInWithOAuth({provider:'google',options:{redirectTo:window.location.origin+'/experience'}})` and `signOut()`.
- Account state shows **signed in** or **not signed in**, not private email, tokens or credentials. Original finance `/product` retains its separate OAuth redirect to `/product`, private account save and history retrieval.
- The new experience route does **NOT** call `.from('submissions').insert()` or any experience persistence API. There is **no Save Experience to Account button**. Account copy explicitly states in EN/ES that local TXT download is not cloud/account saving.
- Signing in with an unsaved experience prompts an explicit choice. Without consent, the draft is not persisted. An optional ten-minute `sessionStorage` snapshot is confined to the browser tab, bounded by input lengths, restored and removed once upon page load. It is **not cloud storage and not encrypted**; other scripts executing on this origin can potentially read it. Confidential data must not be entered. When storage is blocked the OAuth process does not proceed on a “keep draft” request; user must download first or choose to continue without keeping. The optional snapshot is removed on successful restoration and after a sign-in failure.
- In-progress form text can be lost if the user chooses not to keep the draft, if a redirect is interrupted, if the tab is replaced, or after the ten-minute expiry. Download a TXT file after generating a summary before leaving when permanence matters.

## Scope and privacy safeguards
**No database migration, new table, RLS modification, OAuth-provider configuration change or production promotion.** Existing `submissions.task_slug` remains `financial-analyst-v1`; storing experience in that table would require a separately approved migration and deletion/retrieval/privacy plan.
- The only account-specific persistence offered today remains the finance exercise.
- The new signed-in status does not imply the candidate's experience is saved.
- Security floor: Supabase public `submissions` has RLS enabled, existing authenticated owner-only SELECT/INSERT. No update/delete capability added. The RLS `SECURITY DEFINER` advisor notice remains an independent future security task.

## Automated verification
- New `tests/experience-oauth-draft.test.mjs`: opt-in one-use restore, expiry, malformed/oversized payload rejection, browser storage denial.
- New `tests/experience-auth-stage-a.test.mjs`: bilingual account UI, OAuth return route, sign-out, anonymous generation and copy/download preservation, no account-save claim, and unchanged financial OAuth/save.
- These are unit/source-level tests, **not a live Google login**. Read exact CI run conclusion and Vercel deployment SHA before claiming build or release success.

## Exact manual acceptance sequence (Hana)
Use the verified immutable Stage A Vercel preview (team SSO may apply) and **fictional nonconfidential text only**.

1. Open `/experience` while signed out. Verify an optional Google button and **Not signed in / No has iniciado sesión**. Generate, edit, copy and download an experience summary **without signing in**.
2. Before Google Sign-In, enter an unsaved fictional activity. Click **Sign in with Google**. Confirm the bilingual draft-loss dialog offers Cancel, Sign in without keeping, and an explicit 10-minute temporary tab save. Cancel once and confirm the text remains.
3. If comfortable, select **Temporarily keep my draft in this tab and sign in**. Authenticate with your own account; verify the browser returns to `/experience`, shows **Signed in with Google**, and restores the fictional text once. Refresh: it must **not** auto-restore a second time from sessionStorage.
4. Generate a new summary while signed in. Verify you can still edit/copy/download but **no experience account-save control** appears. Verify the EN/ES privacy copy explains this.
5. Click **Sign out**. Confirm status switches to not signed in. Existing experience input should remain on the page and not be silently uploaded.
6. Open **Finance exercise**. Confirm original Google sign-in, optional finance summary save and account-history retrieval with an authorized test account. Check no private data is leaked.
7. Try a narrow/mobile viewport. Check account section, draft buttons, status messages, language toggle and focus. Confirm OAuth URL allowlisting for this exact preview origin; if Google returns to a different domain or fails, record URL, safe screenshot and a timestamp—not tokens.
8. Sign in with no draft on a fresh session: should go straight to Google OAuth and return to `/experience`. If storage is disabled and you request to keep a draft, an explicit error should prevent false reassurance.

**Browser-only outcomes remain unverified until a real authenticated manual run.** A Vercel READY deployment and passing CI cannot prove Google provider allowlisting, redirect, sign-out, clipboard, TXT download or authenticated session behavior. If Supabase Auth does not permit the chosen Vercel preview origin/path, configure only narrowly authorized preview redirect URLs in a separate approved auth-settings change; never silently alter the project's OAuth settings.

## Known limits for future Stage B
To enable **experience cloud saving**, plan a separate `experience_submissions` table or clearly separated typed model, migration history, authenticated owner-only SELECT/INSERT/UPDATE/DELETE RLS with `USING` and `WITH CHECK`, privacy and retention policy, candidate-controlled delete and draft corrections, and cross-user isolation tests. Stage A does **none** of these.


## 8 November 2026 — Actual Preview environment fix and verification
**User-observed defect:** On the Vercel Week 13 preview `/experience`, the page displayed “Google Sign-In is not configured for this preview.” The page intentionally renders that message when `getSupabase()` returns null due to missing `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` at Next.js build time. This is a genuine user-reported configuration failure, not a simulated persona observation.

**Directly verified root cause:** Existing Vercel project `proof-of-skill-week12` (`prj_5KbimU1Xzuc3ueGnVfJawG3orwvk`, team `hana-builds`) had **both** variables scoped to **Production only**, and no Preview equivalent. Confirmed by Vercel `filter_project_envs` metadata. The existing Production URL and anon/public-key values were retrieved securely through the Vercel connection and matched against the Supabase project URL and an active Supabase publishable/anon key. Credential values were **never printed, included in documentation, or committed**.

**Change made:** Added **new encrypted Preview-only variables**, with `gitBranch='week13/pre-code-packet-final'`:
- `NEXT_PUBLIC_SUPABASE_URL` — Preview variable ID `BuxRe9esrhtV7aO8`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Preview variable ID `QB7yRzjEUnaOyA4q`

Read-back showed exactly four relevant entries: two new **Preview/branch-scoped** variables plus the original two **Production-only** variables (IDs `oTyXULiM4g5YsKTi`, `WWKC8MuGIpPzeiG0`). Original Production values/scopes were not edited. No application code, database migration, Supabase RLS policy, OAuth provider setting, table, or production domain changed.

**Fresh deployment after environment change:** Vercel Git-sourced preview `dpl_DG77zbxxK6ksZFcwfjmJpDH63Cit` at `https://proof-of-skill-week12-9c524pwag-hana-builds.vercel.app/experience`, from Week 13 SHA `7575fdc38e8a19f761ad04f8950229804030ab35`, returned **READY**. Build log: Next.js compiled successfully, type/lint checks executed, 7/7 static pages generated and deployment completed. GitHub Actions [run 42530647657](https://github.com/hanadagerab/proof-of-skill-week12/actions/runs/42530647657) at that SHA finished SUCCESS: **50/50 tests, TypeScript, ESLint and Next.js production build**. Later documentation-only commits may trigger more previews; verify their unique URL and SHA before use.

**Authorization and browser boundary:** The Supabase integration exposed project and public keys, but **does not expose an action to list or edit hosted Supabase Auth's URL Configuration / Redirect URLs allowlist**. A read-only database metadata inspection also found no accessible Auth config/redirect table. Therefore the existing allowlist for an immutable protected Vercel preview `https://proof-of-skill-week12-9c524pwag-hana-builds.vercel.app/experience` has **NOT been independently verified**. The tool did **not** attempt to relax authentication redirects or add wildcards. Supabase requires `redirectTo` to match an Auth Redirect URLs entry: [official documentation](https://supabase.com/docs/guides/auth/redirect-urls). If an OAuth attempt returns to production, fails with a disallowed redirect, or cannot pass Vercel SSO, check the Supabase Auth URL Configuration in a permissioned interface and authorize **the exact tested preview URL/path**; do not allow unrestricted domains or broad wildcards. No in-browser Google OAuth redirect, callback, or sign-out was performed by the tool. Env-variable presence and Vercel READY establish **configuration and build**, not end-to-end Google authentication.

**User-facing behavior expected but browser-check outstanding:** Given the newly configured public client variables, `getSupabase()` should return a client and allow the existing Sign In with Google action to render. Actual rendered visibility and successful third-party OAuth require an authenticated interactive browser test. The `/experience` route still makes it explicit in EN/ES that candidate experience summaries are local-only and cannot be saved to the account. Finance evidence saving under owner-only RLS remains a separate, unchanged path.

**Manual acceptance (fictional data, no credential screenshots):**
1. Open the exact latest READY branch preview and `/experience`, authenticate to the protected Vercel team if prompted. Confirm **Sign in with Google** replaces the earlier “not configured” warning.
2. Enter fictional nonconfidential text, click Sign in with Google. Confirm a draft warning and choose whether to discard or explicitly retain a 10-minute tab-only draft.
3. Complete Google OAuth using an authorized test account. Confirm return to the **same preview origin** at `/experience`; if disallowed, check the exact URL against the Supabase Auth Redirect URLs allowlist (never share codes/tokens). Confirm status changes to signed-in.
4. Confirm local experience can still be generated, edited, copied and downloaded, and the page explicitly states it is **not saved to Supabase or your account**.
5. Click Sign Out; confirm signed-out status. Switch to Spanish and repeat account copy verification.
6. Open `/product`; confirm unchanged finance Google account and owner-only storage features using authorized non-sensitive test data. Do not promote production.
