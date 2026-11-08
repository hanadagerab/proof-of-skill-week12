# Week 13 — Final synthetic María feedback and release-candidate decision
**Date:** 2026-11-08 · **Product:** Proof-of-Skill · **Role:** USER · **Status:** Preview-only

## Provenance
Hana supplied the final **synthetic** María persona findings in the conversation. No separate complete new Persona Test Report is present in the accessible materials for this particular review; conclusions below are limited to the three stated concerns, the verified GitHub implementation and earlier five-response synthesis at [WEEK13_FIVE_RESPONSE_SYNTHESIS.md](../research/WEEK13_FIVE_RESPONSE_SYNTHESIS.md). María is fictional; no statements are presented as authentic interview quotations, timings, observed behavior, demand or hiring validation.

## The three concerns vs. the deployed baseline
| Concern | Existing deployed implementation before this iteration | Verified source gap | Narrow release-candidate response |
|---|---|---|---|
| Isolated keywords ≠ transferable skill | Existing `lib/transferable-skills.mjs` required some preceding action in a clause, but a broad action could be borrowed for an unrelated object in the same clause | Positive risk: “I compared suppliers and mentioned inventory” could imply *organizing inventory*. Some outputs displayed only an isolated matched word | Every suggested theme now requires a **category-appropriate activity verb paired with its relevant object in the same short clause**. Evidence displays a candidate-authored *action + object* span. Conservative negation and no-match handling remain |
| Skill selection purpose and relevance | Suggestions unchecked by default; candidate-selected themes appended to copy/TXT output with selected job label, but candidate-facing text did not clearly describe what checking meant | A checkbox appeared with limited explanation; no interview preparation | EN/ES copy explains that checking appends optional candidate-reported themes **after** the editable résumé statement in copied/TXT output; the job selection is context, not eligibility. One optional evidence-anchored interview question appears only after an approved theme is checked, with **no answer** |
| Transparent but not overwhelming verification | Multiple visible caveats; one banner repeated a separate warning paragraph, while the export already carries source limitations | Repetition without additional protective meaning | Review keeps the prominent candidate-reported/not independently verified label, optional evidence/document warning and full limitations in copied output; removes duplicate warning paragraph from the review banner only |

## Scope that did NOT change
No new claims, job-fit score, hiring recommendation, resume rewrite, numerical achievements, inferred credentials, AI provider, extra assessment, Supabase migration, stored experience, RLS edit, Google OAuth configuration change or production promotion. The original finance exercise remains independently available. Existing local-only copy and TXT export, optional Google Sign-In and 10-minute explicit opt-in same-tab draft handling remain unchanged.

## Technical mechanism and bounded claims
- Categories are finite, predeclared and bilingual: inventory, invoices, comparison, follow-up, spreadsheet usage, shifts, budget and checklist/handover.
- A relevant action **must precede** the associated object within 55 characters of one clause. The visible evidence includes the action and object exactly as entered. A name-only reference to Excel or inventory does not suffice.
- Each clause with a clear negation is conservatively excluded. Matching is heuristic and may miss valid phrasing, mixed-language expressions or sophisticated negation; **no match means no suggestion, never a negative skill judgment**.
- Target role affects suggestion order only; it does not certify suitability. The candidate checks 0–3 suggestions. Unchecked themes are not exported, and **none** is embedded in or rewrites the editable résumé sentence.
- Exactly one interview practice question (not an answer) can be derived from the **first approved theme and its candidate-authored action phrase**, optionally mentioning the **candidate-selected** role. It stays in the review UI, not an employer-facing document by default.
- The candidate's source words remain unverified self-report. No hidden employer access or automatic sharing.

## Before/after claims: DO NOT overstate
This iteration is a testable product behavior change, **not** measured improvement in human outcomes. The latest synthetic feedback does not document real candidate completion, understanding, timing, return rate, verified 3-stranger study, recent hiring case or employer recognition. Compare genuine uncoached sessions using the existing baseline protocol to determine whether the added context actually helps or creates extra work. Preserve the earlier approximately 2.8× simulated comparison as *simulated* only.

## Tests and final manual acceptance
- Regression: isolated nouns, action-context anchoring, Spanish accented verbs, no invented outcomes, negations, no-match, candidate approval, output provenance, one interview question only for approved content, bilingual purpose text.
- Mechanical gates: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build` through branch GitHub Actions; verify exact run and SHA.
- Vercel: branch-scoped Preview only, verify deployed SHA and READY. Supabase public variables remain Preview-branch-scoped; Production unchanged.
- Browser (team-authenticated preview): (1) English/Spanish toggle; (2) enter “Organicé facturas y di seguimiento a pagos pendientes” / “Comparé precios de proveedores”; (3) choose optional Administración role; (4) confirm supporting **action phrase**, unchecked suggestions; (5) select one, see exactly one grounded question; (6) copy and TXT contain selected theme and role **after** unchanged editable résumé statement, but no interview answer; (7) deselect and see question disappear; (8) try “I mentioned inventory but did not organize it” and confirm no inventory-organization theme; (9) verify optional Google Sign-In, original finance route and local-only experience explanation; (10) repeat on phone width with clipboard and downloaded file. Record any actual failures.
