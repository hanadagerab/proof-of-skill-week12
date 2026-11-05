# Week 13 — Technical baseline (read-only audit)
**Date:** 2026-11-05 · **Author:** Hana Dager Abascal / assisted inspection · **Venture:** Proof-of-Skill · **Role:** USER

## Evidence provenance and status
- Source branch: `week13/pre-code-packet-final`; starting head `51fd53f063130de009cf0c68ae0e77b4e6aa4551`. Documentation-only research commits follow.
- Current `docs/PACKET.md` and `docs/IMPLEMENTATION_PROMPT.md` were verified by GitHub API. Both Mermaid fences present in Packet. Mockup PNG **missing from GitHub branch**, although a local version exists; this must be resolved before treating embedded GitHub image as verified.
- Vercel project `proof-of-skill-week12` was discovered with project ID `prj_5KbimU1Xzuc3ueGnVfJawG3orwvk` under team `hana-builds`. Vercel detailed project/deployment calls returned **403 team authorization required**. Therefore the production deployment SHA, build status and preview URL are **NOT VERIFIED** and no preview deployment is claimed. Team consent URL was issued separately. Do not deploy or imply a successful build until access is granted.
- Supabase project `proof-of-skill-week12` (project ID `tufiqtncsbgrvytnkfbu`) ACTIVE_HEALTHY. Read-only SQL and advisors run; no user data read or revealed.

## Source architecture (directly inspected GitHub files)
| Layer | Source | Observed |
|---|---|---|
| UI | `app/page.tsx`, `app/product/page.tsx`, `app/about/page.tsx` | Homepage, bounded finance task, evidence review, sign-in, save and saved-list UI |
| Framework | `package.json` | Next.js ^15.3, React ^19, TypeScript ^5.8, Tailwind 4; version numbers are declared semver ranges, not deployed versions |
| Classification | `lib/engine.mjs` | Deterministic OBSERVED/INFERRED/MISSING/UNVERIFIED classification; computed financial margin; no automated hiring |
| Validation | `lib/schema.ts` | Zod numeric bounds, bounded notes, assistance enum |
| Auth/client | `lib/supabase.ts`, `app/product/page.tsx` | Supabase client with NEXT_PUBLIC URL/publishable key; Google OAuth sign-in is invoked |
| Persistence | `lib/submission.mjs` | Summary snapshot and disclosure saved to `submissions`, recent 10 read by authenticated user |
| Database | `supabase/migrations/001_initial.sql` and live Supabase schema | Single owner-associated `public.submissions` table, RLS enabled, insert/select owner rules |

## Live Supabase access control (read-only)
- `public.submissions` has RLS enabled. `Owner can read`: SELECT to authenticated with `auth.uid() = user_id`. `Owner can create`: INSERT with `auth.uid() = user_id`. Only INSERT and SELECT were granted to authenticated; no anon table grants, no authenticated UPDATE or DELETE grants found. The live schema has user foreign key, `financial-analyst-v1` task slug check, JSONB evidence/disclosure/summary.
- Auth schema contains `auth.users`, `auth.identities`, `auth.sessions` with RLS. Actual OAuth provider configuration, Google callback behavior, session refresh and cross-account isolation are **not** established by this metadata check. Never inspect user rows in public evidence.
- Supabase security advisors returned two WARNs concerning publicly executable `SECURITY DEFINER` event-trigger function `public.rls_auto_enable()` for anon and authenticated roles (see [Supabase linter 0028](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable) and [0029](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable)). The read-only function definition confirms it is an event trigger designed to enable RLS on new public tables. Whether direct invocation is exploitable has **not** been established. **Request a separate reviewed permissions remediation**, no mutation during this baseline.
- Additional advisor WARN: leaked-password protection disabled ([Supabase password security](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection)); confirm whether password-based authentication is offered before rating impact for the current Google-only UI.
- Supabase migration history API returns empty even though repository contains `001_initial.sql`; investigate provenance before any schema migrations. No schema mutation authorized.
- User deletion/retention, export sharing controls, accessibility, Google OAuth real flow and same-user save/reload have not been end-to-end retested. The current DB has no authenticated DELETE/UPDATE access; candidates cannot assume they can delete or correct saved records inside the UI.

## Genuine mechanical baseline
- **Node unit tests:** reproduced directly from the GitHub source `lib/engine.mjs`, `lib/submission.mjs` and both corresponding GitHub test files in an isolated local scratch directory; `node --test tests/*.test.mjs` resulted **11/11 PASS, 0 fail** on Node v22.16.0. This checks only the pure source and does **not** prove a full repository checkout, Vercel deployment, Supabase persistence, browser UI or release build.
- **TypeScript, ESLint, `next build`: NOT RUN**. The isolated environment lacks a full repository checkout and required node_modules/network access. GitHub does contain a `package-lock.json`, but source and dependencies cannot be installed automatically in this audit environment. Run when a safe Vercel build or complete controlled checkout is available.
- No **new Week 13 application bug** has been independently reproduced yet. Potential pains (financial-task mismatch, lack of deletion, privacy copy) are audit observations/hypotheses; evaluate with real candidates before choosing a product fix.

## Baseline and safety gates
1. Obtain Vercel team access for existing project; inspect production deployment commit and domain, compare actual GitHub SHA before preview.
2. Confirm preview deploy targets the exact Week 13 documentation branch and `target=preview`; never promote or attach custom domain.
3. Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run build` on the exact source; record outputs, build SHA, deployment ID, environment and URL. Re-run Google OAuth and cross-user isolation in a safe test setup, not real users' data.
4. Conduct five real candidate sessions (three strangers) and one recent real hiring-case investigation, then rank three harms. **No candidate workflow edit** until evidence and explicit user approval.
5. Treat the Team 5 Blueprint as simulated pending genuine team approval. Keep team collective project distinct from Proof-of-Skill.

## Baseline declaration
This is read-only inspection plus documentation. Production unchanged; no preview verified as of this entry. Week 4's ~2.8× gain remains **simulated**. Technical completion, user liking, voluntary usage and real hiring impact are separate outcomes.
