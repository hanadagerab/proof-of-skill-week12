# Week 13 — Genuine defects and fixes
Maintain a distinction between reproduced mechanical failures and UX hypotheses.

## Known build defect corrected in baseline (already completed)
Next.js 15 ESLint preset was imported as an iterable when it was not one. Vercel log recorded `ESLint: nextVitals is not iterable`. The Week 13 branch corrected configuration via `FlatCompat` in commit `47a51623fd79fa74e8241c70a8400faafbe58b15`. Subsequent GitHub Actions independent ESLint and Vercel builds succeeded. This was a genuine engineering defect, not evidence of user friction.

## Candidate-facing iteration test defects
Record test failures *only* after actual CI or preview output. Do not invent discovered browser defects or claim a persona's dissatisfaction was observed. Verify the fixed finance route, unchanged OAuth/save behavior, EN/ES forms, empty action validation, correction invalidation, summary reuse, confidentiality warnings, mobile layout, and wrong-user access in a safe test environment.

## Pending behavior limitations, not repaired in this iteration
New experience route is currently local-only and does not save to Supabase; this is deliberate to avoid changing the shared production schema and permissions. There is no employer-side workflow, skills verification, or live candidate return analytics. Account delete/update is not granted by the existing Supabase policies. No privacy promises beyond the implemented mechanism.
