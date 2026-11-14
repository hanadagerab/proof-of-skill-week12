# Week 14 — Mechanical verification
Tested source SHA: 5c54f4f1d5082727378685d3ec9a6307d3c1e36b. First preview 17768394380c5383e87de8eb1fc10f17e806793b / dpl_EhJHWhy9MVL8BEeGbhjfzLqQJw7h: HTTP 200. Corrected preview dpl_GuBQepUUmLZ57iTsPoRh4mnXVuAk READY, https://proof-of-skill-week12-hozxr82n1-hana-builds.vercel.app/employer-pilot HTTP 200; fixed offer and Google control present. Vercel build logs: Next 15.5.28 compiled, lint/type validity phase completed, 8/8 static pages, build completed 22s. Separate npm test/typecheck/lint commands not independently verified. Three committed persistence regex assertion groups executed against exact GitHub source in JS isolate, 3/3 true; not Node runner or behavioral browser tests. Financial Node test suite not executed in this checkpoint.

| ID | Status | Observed evidence / remaining check |
|---|---|---|
| T01 | NOT RUN | Financial default calculation test not executed |
| T02 | NOT RUN | Historical model test not executed |
| T03 | NOT RUN | Buyer expenditure test pending |
| T04 | NOT RUN | 3x threshold test pending |
| T05 | NOT RUN | 10x threshold test pending |
| T06 | NOT RUN | Ratio and ROI test pending |
| T07 | NOT RUN | Zero denominator test pending |
| T08 | BLOCKED | SQL validator accepts defaults, rejects empty object and array; full malformed client/DB write tests pending |
| T09 | BLOCKED | Source assertion passes; interactive independent edits/reset pending |
| T10 | NOT RUN | Candidate effort test pending |
| T11 | BLOCKED | HTTP 200 and anonymous calculator markup; interactive editing pending |
| T12 | BLOCKED | Google control present; anon CRUD grants absent per earlier catalog check; ordinary anonymous API attempt pending |
| T13 | BLOCKED | Google roundtrip and reload require browser |
| T14 | BLOCKED | Source assertions pass; actual CRUD pending |
| T15 | BLOCKED | Four owner RLS policies verified; ordinary two-account tests pending |
| T16 | BLOCKED | Validator rejects empty object/array; direct ordinary-role writes pending |
| T17 | PASS | Source contains voluntary, free, correctable, nonexclusive evidence, non-digital route, no automatic rejection, human judgment, equal criteria and material error notification; source review only |
| T18 | PASS | HTTP 200 fixed proposed offer; source reviewed for no checkout or validated ROI claim |
| T19 | BLOCKED | Interactive language toggle pending |
| T20 | BLOCKED | No browser viewport/keyboard test |
| T21 | BLOCKED | Build lists original routes; actual candidate and finance workflows pending |
| T22 | PASS | Corrected commit, Vercel ID, preview target and route verified; no production promotion |
| T23 | BLOCKED | Fixed offer literal independent of inputs in source; interactive edit pending |
| T24 | NOT RUN | Capacity/unknown model test pending |
| T25 | FAIL | Direct costs and per-interview calculation implemented, alternative direct/derived modes missing in UI |
| T26 | BLOCKED | Source displays pause when safeguard unchecked; interactive 10x case pending |
| T27 | FAIL | Stopping thresholds disclosed, no interactive paid-count/time/spend evaluation |
| T28 | FAIL | OAuth draft preservation and explicit cancellation/storage handling incomplete |
| T29 | NOT RUN | Blank versus zero test pending |
| T30 | BLOCKED | Across-session compare and no-leak test pending |

## Defects
BUG-001: original page used one shared id and cleared it on scenario switch; reproduce open saved A, switch B, back A, save would insert rather than update. BUG-002: original auth callback cleared saved list/id on every event, including same-user refresh. Both source-confirmed; not interactively reproduced. Fix 74dcfab7f96f0fdd74e56da4546fa684eced5b87 stores per-side links, preserves same-user state, clears on owner changes, guards asynchronous responses by generation, explicit duplication and bilingual save errors. Regression commit 5c54f4f1d5082727378685d3ec9a6307d3c1e36b. Three exact regex groups passed against corrected source; actual CRUD and browser refresh not yet verified.

## Security disposition
Earlier catalog verified RLS and no anon CRUD privileges. Current SQL validator defaults true, empty object/array false. Advisor review: existing public.rls_auto_enable() SECURITY DEFINER returns event_trigger and is bound to ensure_rls; anon/authenticated EXECUTE warnings remain. No revocation performed without validating dependency behavior. Leaked-password protection disabled; no auth configuration changed. No candidate records retrieved. Ordinary two-account isolation remains blocked pending browser/accounts. No visual comparison or screenshots produced. Gate B not ready for approval; browser evaluation may begin but these gaps remain. Gate C closed.
