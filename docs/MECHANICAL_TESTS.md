# Week 14 — Final mechanical verification (2026-11-14)
## Immutable application and evidence
- Tested application commit: 153a21a6f17ee1d9596866e571ed77acabfcffae; branch week14/employer-pricing-lab.
- Final preview: https://proof-of-skill-week12-dtye16sol-hana-builds.vercel.app/employer-pilot ; dpl_A87TcG8D3sskqDyCbisdy2vLztGX READY; observed HTTP 200 and fixed offer, cost-mode selector, commercial panel and OAuth consent markup. Browser hydration/visual review not performed.
- Vercel logs: compilation 2.3s, lint/type validity phase completed, static pages 8/8, build output 22s, deployment completed. Standalone npm run lint and typecheck not separately executed.
- Earlier preview dpl_EhJHWhy9MVL8BEeGbhjfzLqQJw7h / 17768394380c5383e87de8eb1fc10f17e806793b HTTP 200; persistence-corrected dpl_GuBQepUUmLZ57iTsPoRh4mnXVuAk / 5c54f4f1d5082727378685d3ec9a6307d3c1e36b READY/HTTP 200. Accumulated implementation build failed at 7a7a96f2c92269bce8b0f0a321e510bade870400 (extra closing parenthesis in T25 JSX, actual compiler Expected '</', got ')'); fix 0ac8ad7fe0d408b2e1f82eabda5f44512254fbad restored READY/HTTP 200 at dpl_jEa5QA5SsnzT8M6oPrFXVrMwn4Gc.
- Actual standalone Node v22.16.0 command: `node --test tests/pricing-model.test.mjs tests/pricing-persistence.test.mjs tests/pricing-oauth-draft.test.mjs`. Exact committed files reconstructed in available runtime and blob hashes verified in prior test checkpoint. Initial 0ac8ad7: 22 tests, 21 pass, 1 fail, duration 101.811254 ms, exit 1. Test 21 expected immediate setA after owner transition; T28 added clear() first. Corrective test-only commit 153a21a strengthens assertion to check clear(), both resets, side and OAuth status; application unchanged. Final: 22 tests, 22 pass, 0 fail, 0 skipped, duration 65.077982 ms, exit 0. 19 behavioral model/helper tests and 3 executed source-regex persistence assertions, not full browser CRUD.
- Original logs retained as conversation attachments, not uploaded to public GitHub: week14-0ac8ad7-node-tests.txt SHA256 743f0192794f52dbfb0654ad88907d16b2d454cd10e9e90782d2c0ce8e418d62; week14-153a21a-node-tests.txt SHA256 9ac02c9227423d1871feaadcafe4b0146c5595936f7131e7546280d615a0f40a. File presence and hashes checked at final checkpoint.
- T25 migration applied; seven live validator cases: legacy/default/equivalent accepted, double labor/double interview/invalid mode/partial rejected. T27 additive validator migration applied successfully; post-migration validator cases not independently executed. RLS catalog previously verified true and anon SELECT/INSERT/UPDATE/DELETE grants false; four owner policies verified. No service-role substitution for normal client tests.

## Acceptance matrix
PASS means evidence supports the particular criterion at the stated layer, not certification of unrelated layers. BLOCKED means full acceptance awaits ordinary browser or role testing; NOT RUN means no relevant execution. No current observed FAIL in the automated suite. Historical failures retained below.
| ID | Status | Actual evidence and limitation |
|---|---|---|
| T01 | PASS | Behavioral model: cost 1700, contribution 800, margin 32% |
| T02 | PASS | Behavioral model: historical contribution -200, fixed OFFER 2500; -13.33% follows formula but not explicitly asserted |
| T03 | PASS | Behavioral model: expenditure 3400 |
| T04 | PASS | Behavioral model: 10200 |
| T05 | PASS | Behavioral model: 34000 |
| T06 | PASS | Behavioral model: 3x and 200% |
| T07 | PASS | Behavioral model: zero denominators null |
| T08 | BLOCKED | Behavioral invalid numeric/count/extra-key rejection and earlier SQL validator checks passed; browser and ordinary-role malformed writes not run |
| T09 | BLOCKED | Executed source assertions on independent saved links; model nonmutation test; actual A/B UI switching pending |
| T10 | PASS | Behavioral model: 20 x 15 minutes = 5 hours |
| T11 | BLOCKED | HTTP 200 and anonymous calculator markup; interactive calculations pending |
| T12 | BLOCKED | Auth control present and anon CRUD catalog denial; actual anonymous API attempt pending |
| T13 | BLOCKED | Google login, save, reload across sessions pending |
| T14 | BLOCKED | Three source persistence assertions passed overall; real CRUD pending |
| T15 | BLOCKED | Owner RLS policies verified; ordinary two-account forged ownership and cross-user CRUD tests pending |
| T16 | BLOCKED | Validator rejects malformed payloads in prior SQL tests; actual direct ordinary-role writes pending |
| T17 | PASS | Source/HTML-level safeguards and prohibitions; no automatic ranking/rejection; real compliance not validated |
| T18 | PASS | HTTP/source-level fixed hypothetical offer and no false ROI/payment claim |
| T19 | BLOCKED | EN/ES source controls; interactive equivalent labels and currency formatting pending |
| T20 | BLOCKED | 360px keyboard/mobile visual test not performed |
| T21 | BLOCKED | Original routes compiled; existing candidate and finance interactive flows pending |
| T22 | PASS | Final exact SHA, READY preview ID and HTTP 200 verified; no production promotion |
| T23 | BLOCKED | Behavioral fixed OFFER and historical calculation pass; interactive price edit and offer separation pending |
| T24 | PASS | Behavioral freed capacity 1h and unknown consideration; no imputed cash benefit in model |
| T25 | BLOCKED | 4/4 behavioral tests and 7/7 earlier database validator cases; browser mode selection and saved roundtrip pending |
| T26 | BLOCKED | Behavioral >10x safeguard override passed; interactive decision display pending |
| T27 | BLOCKED | 5/5 behavioral threshold/unknown/stop tests passed, migration applied; live panel and persisted evidence roundtrip pending |
| T28 | BLOCKED | 4/4 behavioral storage-helper tests passed; actual Google callback, expiry, cancellation, blocked storage, logout pending |
| T29 | PASS | Behavioral null benefit vs zero ROI -100%; zero ratio follows formula but not expressly asserted |
| T30 | BLOCKED | Source persistence assertions and JSON roundtrip pass; live two-version compare across sessions and isolation pending |

## Defect history
BUG-001 shared saved identifier lost on A/B switch; BUG-002 all auth events erased editing state. Source-confirmed original behaviors, not interactively reproduced. Fix 74dcfab7f96f0fdd74e56da4546fa684eced5b87 independent per-side links and same-user event guard plus ownership cleanup. Tests 5c54f4f; final 153a21a all three source-regression groups pass. Actual interactive before/after remains unverified. Historical T25/T27/T28 failed implementation gaps corrected in commits ac42487/3608d52/6d120d7/2e5a0f8, 2df222d/bf37e9b/136dce4/be4f4ba, 5e18f36/9636b26/7a7a96f respectively. Build syntax failure fixed 0ac8ad7. Historical stale regression assertion fixed 153a21a. No feature changes at final documentation checkpoint.

## Security disposition and remaining manual tests
- Prior advisor review identified anon and authenticated EXECUTE on SECURITY DEFINER public.rls_auto_enable(), an event-trigger helper bound to ensure_rls. Proposed: validate least-privilege revoke of PUBLIC/anon/authenticated in isolated staging, check DDL event trigger still enables RLS and candidate/auth regressions, then authorize shared-project change. Not performed. https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable and https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable
- Leaked-password protection disabled. Proposed: check enabled password methods and project entitlement, enable where supported and verify Google plus existing account flows; not changed. https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection
- No ordinary-user credentials or private candidate data accessed. Two-account and anonymous API ownership/invalid writes must use normal sessions; no privileged substitution.
- Manual browser: anonymous A/B edits and live displayed calculations, T25 equivalent modes (650 direct vs 5 x 130; 900 direct vs 3 x 300), T27 3 commitments/89 days/10000/30000/yes flags and benefit 40000 then safeguard No => STOP, 90 days and overcaps; language/360px/keyboard and candidate regression. T28 opt-in, both scenario restore via actual Google callback, decline, cancellation, expired and blocked storage, logout cleanup. Save A/B, switch, edit existing, explicit copy, reload, compare, delete; same-user refresh and second-account isolation. Ordinary-role API forged owner/cross-user and malformed writes require dedicated test harness using own test records only.
- Independent Persona Test may now begin on immutable final preview; separate from mechanical completion. Gate A approved; Gate B pending browser, authenticated security and independent persona evidence; Gate C closed. No production release.
