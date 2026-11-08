# Week 13 — Genuine defects and fixes
Maintain a distinction between reproduced mechanical failures and UX hypotheses.

## Known build defect corrected in baseline (already completed)
Next.js 15 ESLint preset was imported as an iterable when it was not one. Vercel log recorded `ESLint: nextVitals is not iterable`. The Week 13 branch corrected configuration via `FlatCompat` in commit `47a51623fd79fa74e8241c70a8400faafbe58b15`. Subsequent GitHub Actions independent ESLint and Vercel builds succeeded. This was a genuine engineering defect, not evidence of user friction.

## Candidate-facing iteration test defects
Record test failures *only* after actual CI or preview output. Do not invent discovered browser defects or claim a persona's dissatisfaction was observed. Verify the fixed finance route, unchanged OAuth/save behavior, EN/ES forms, empty action validation, correction invalidation, summary reuse, confidentiality warnings, mobile layout, and wrong-user access in a safe test environment.

## Pending behavior limitations, not repaired in this iteration
New experience route is currently local-only and does not save to Supabase; this is deliberate to avoid changing the shared production schema and permissions. There is no employer-side workflow, skills verification, or live candidate return analytics. Account delete/update is not granted by the existing Supabase policies. No privacy promises beyond the implemented mechanism.


## Verified Week 13 implementation defects (actual CI/Vercel failures and repairs)
| Failure recorded | How it was detected | Correction commit | Verification |
|---|---|---|---|
| Homepage JSX apostrophe violates `react/no-unescaped-entities` | GitHub Actions CI at commit `c2e4626a`: ESLint error | `70cbaa7b` | GitHub Actions CI at `8cd86db0` — SUCCESS (includes ESLint and build) |
| Experience route imports types not exported from `.mjs`; field key union too wide | GitHub Actions CI at `41caf55d`: TypeScript TS2305, TS2724, TS7006, TS18048, TS2322, TS7053, TS2469 | `36a34196`, `8cd86db0` | GitHub Actions CI at `8cd86db0` — SUCCESS (typecheck, unit tests, ESLint, build) |
| About-page JSX apostrophe blocks Vercel compilation | Vercel `dpl_9WV3hGiC7tTFSVkGpZoLy6PWVY4V` on `e8d4f418`: ERROR `react/no-unescaped-entities` | `ac7e36fc` | GitHub Actions at `ac7e36fc` — SUCCESS; Vercel `dpl_2VjWi9fJAtApwGmuP75gF6NojVYp` — READY |

All fixes are tool/test failures, not inferred from candidate interviews. They do not establish improved application outcomes for real users. The candidate-facing experience route persists *only* to the user's device when downloaded; there was no shared Supabase database schema change.
