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
