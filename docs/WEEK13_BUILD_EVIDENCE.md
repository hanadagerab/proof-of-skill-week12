# Week 13 — Verified build & deployment evidence register
**Project:** Proof-of-Skill · **Role:** USER · **Only branch:** `week13/pre-code-packet-final` · **Source evidence:** actual GitHub SHA, Actions and Vercel metadata; user response compilation analyzed separately.

## Production must remain untouched
| Environment | Deployment | Commit | Domain/status |
|---|---|---|---|
| Week 12 production (BEFORE) | `dpl_DEQEFzyA7jXVJ532e6vybtV1KbDq` | `9479c75ab9cb11bdf607740c2bbc499761728fc0` (`main`) | `https://proofofskill.app` — READY on 2026-11-08 check |
| Fixed Week 13 technical BEFORE preview | `dpl_8RQ1VkCJapSbQHxouoRzWVcPAD93` | `b53a43be91be61af71f66e47903d12bc32967d1a` | `https://proof-of-skill-week12-j7wkj9z0j-hana-builds.vercel.app` — READY |
| New experience-first preview | See the final Vercel deployment event and attached SHA in [DECISIONS](DECISIONS.md) | Exact deployed commit required | This table is not evidence of production promotion |

Vercel preview protection requires team authentication. An authenticated READY deployment proves Vercel built the code; it does **not** prove independently observed browser UI interactions, Google sign-in, user value or hiring impact.

## Actual meaningful implementation changes on the Week 13 branch
| Commit (short SHA) | Scope | Meaning |
|---|---|---|
| `c113dd8f` | `lib/experience.mjs` | Bounded deterministic input checks and honest self-reported summary; no generated metrics or LLM |
| `baa9073e` | `lib/experience.mjs.d.ts` | Initial engine typing |
| `043a4de4` | `tests/experience.test.mjs` | Unit tests for supported types, missing input, disclosures and no unsupported achievements |
| `c2e4626a` | `app/page.tsx` | Two starting choices and preview of practical output |
| `82606c83` | `app/experience/page.tsx` | Entire new candidate workflow: typed experiences, EN/ES, edit/review, copy and local `.txt` |
| `70cbaa7b` | `app/page.tsx` | Genuine ESLint homepage apostrophe fix |
| `41caf55d` | `tests/experience-persona.test.mjs` | Three **synthetic** personas and rejected invalid case; NOT human testing |
| `36a34196` / `8cd86db0` | `lib/experience.ts`, `app/experience/page.tsx` | Correct actual TypeScript import/type inference failures |
| `a5c7c5a0` | `app/layout.tsx` | Candidate route visible in primary navigation |
| `e8d4f418` / `ac7e36fc` | `app/about/page.tsx` | Candidate-first About, privacy and evidence boundaries, plus actual JSX apostrophe build fix |
| `c06d6d7d` | `app/experience/page.tsx` | Correct language semantics for bilingual route |

These represent distinct, meaningful code and regression-test modifications. Earlier research-only commits must not be mischaracterized as application fixes.

## Reproduced defects and correction evidence
1. **ESLint homepage:** GitHub Actions earlier run at `c2e4626a` reported `react/no-unescaped-entities` on `app/page.tsx`. Fixed `70cbaa7b`.
2. **TypeScript experience path:** GitHub Actions on `41caf55d` failed with TS2305/TS2724 missing exports from `.mjs`, implicit any, and overly broad form key type. Fixed using typed `lib/experience.ts` and strict field key union (`36a34196`, `8cd86db0`); CI at `8cd86db0` completed SUCCESS, including typecheck, lint, tests and build.
3. **About-page Vercel failure:** Vercel build of `e8d4f418` returned ERROR, with a `react/no-unescaped-entities` apostrophe. Fixed in `ac7e36fc`, which produced READY Vercel preview. No errors should be called corrected without subsequent READY/build checks.

## Test inventory
- GitHub Actions workflow: `.github/workflows/week13-baseline.yml`: `npm ci --ignore-scripts`, `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`. Check a run's exact commit SHA and conclusion; do not assume every push passed.
- `tests/experience.test.mjs`: deterministic candidate input, omissions, source uncertainty, self-reported boundary, assistance, copy.
- `tests/experience-persona.test.mjs`: fictional student inventory, operations coordinator, family-business worker, plus missing action; **synthetic fixtures only**, not three people.
- Existing `tests/engine.test.mjs` and `tests/submission.test.mjs` remain for Week 12 finance.
- Manual browser retest **not yet evidenced**: test home links, EN/ES, mobile viewport, clipboard, download, input edit invalidation, finance flow, OAuth and owner-only saving on a verified preview. If inaccessible due SSO, record that separately rather than claim it succeeded.

## Unvalidated outcomes after the code change
The five input response records do not establish observed before/after timings, login friction, observed abandonment, three strangers, actual return, employer consideration or recruitment demand. Any impact claim requires dated consented independent tests and fair competition against candidates' own résumé/AI methods. Week 4's ~2.8× finding is simulated.
