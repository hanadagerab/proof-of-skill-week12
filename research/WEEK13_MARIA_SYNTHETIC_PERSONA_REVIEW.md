# Week 13 — María synthetic persona review and narrow iteration
**Date:** 2026-11-08 · **Venture:** Proof-of-Skill · **Role:** USER
**Evidence provenance:** User's message states the independent synthetic Persona Test concerns a fictional María González, 43, Spanish-speaking, family-business administrator applying for administrative or operations positions in Mexico City. **The separate "complete Persona Test Report" is not available among the accessible conversation attachments at this review.** Therefore this record analyzes only the three findings and synthetic example quotation supplied in the user's message, cross-checked against the existing five-response compilation and actual GitHub source. It does not represent independent reading of the full Persona Test Report.

## 1. Separate evidence categories
| Type | Evidence supported | What it cannot establish |
|---|---|---|
| Synthetic persona feedback | Persona statement: wants to understand how existing work matters to a target role, not simply repeat a familiar experience; concern about Spanish/technical jargon and intimidating evidence documentation | Not a real participant quote, observed navigation, measured comprehension, independent adoption or actual return |
| Supplied five response records (U01–U05) | U01 asks to describe an academic project, U02 distinguishes exercise from prior job, U03 needs operations relevance without more work, U04 values simple Spanish and family-business recognition and fears sharing private supplier details, U05 asks whether employers will actually use the output | Not validated five uncoached usability sessions; no dates, consent to publish direct quotations, stopwatch times, three verified strangers, recruiter approval or retention |
| Code-confirmed pre-iteration gaps | No target-job input; export lists activity/approach but does not surface candidate-approved skill themes; evidence field marked optional but language could still imply a proof burden; examples and export localized EN/ES at earlier QA step | No evidence those exact code gaps caused real participant failures or that a new checkbox will solve job search difficulties |
| Implemented mechanical checks | Deterministic, bounded phrase matching against candidate input; reviewed source; CI/Vercel once completed | Not a browser accessibility audit, job fit decision, validated soft skills, hiring or human impact |

**Synthetic persona quotation** (from user-provided summary only): “I don't need another website to tell me that I have inventory experience. I need help understanding how my experience matters to the job I want.” Never attribute it to a real participant.

## 2. Narrow decision and rationale
Implement **one optional target-job selector** (administration, operations, analysis, other, or none) within the existing experience form, plus up to **three candidate-approvable skill themes** based **only** on matched words within the candidate's actual activity/decisions fields. For instance, if a person literally writes that they organized invoices or followed up on pending items, the screen may suggest “Invoice organization” or “Following up pending items,” with the exact matched phrase shown as evidence. The suggested themes are **candidate-reported, not independently verified**, and are excluded from the copied/downloaded output unless selected by the candidate. Role selection affects display order, **not eligibility or matching**. No default checked skills and no fabricated outcomes, metrics, credentials, endorsements or qualifications. For unmatched descriptions, show no suggestion rather than guess.

Clarify in both languages that supporting documents are **not required**. Preserve the optional free-text evidence field for candidates who want to describe nonconfidential sources, but never require uploads or replace the words of the candidate. Export only chosen labels and candidate wording, with provenance and voluntary job context; keep the old financial exercise fully separate.

## 3. Comparative connection and limits
- Supports U01's academic project use case and U03's operations-specific relevance as an exploratory convenience; it does **not** demonstrate a new job was gained.
- Supports U04's informal family-business scenario with familiar labels and no-document requirement. Spanish phrasing and accents require a real Spanish-first usability check.
- Supports U02/U05's insistence that skill themes are **not verification of previous employment** and recruiter acceptance remains unknown.
- Does **not** solve U05's central recruiter adoption question, ranking/applicant filtering, or requests for authenticated cloud storage.

## 4. Expected benefit, implementation scope, risk and testing
| Change | Plausible benefit | Engineering cost/risk | Checks |
|---|---|---|---|
| Optional target role | More relevant starting context | Low; no new backend, risk of implying candidate-job match | No-role default; role selection alone yields zero invented skills; visible "not eligibility" wording |
| Conservative transferable themes | Makes implicit tasks understandable while preserving agency | Low-to-moderate; finite phrase rules miss synonyms and can mistake keyword mentions for performed skills | Unit tests for Spanish/English, real phrase anchors, negative/no-match, candidate opt-in, max 3, excluded unselected |
| Clarify evidence/document status | Less pressure to disclose private business records | Low; instructional copy only, risk warning still feels imposing | Bilingual source check; real candidate comprehension and privacy interview |

The phrases/regexes are limited, imperfect heuristics—not skill assessments or semantic job matching. Specific suggestions can be false positives if input negates an activity (“I did **not** organize invoices”). A safe candidate decision and evidence citation are critical. Test negated wording and reject unsupported output before production. No employer claims or deterministic hire/reject judgments.

## 5. Release gates
- Preview-only GitHub change; no changes to Supabase, OAuth, Vercel production or `proofofskill.app`.
- `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`; compare SHA and new preview status.
- Test synthetic Spanish María scenario, English operations and an input without matched skills; do not count them as real human observations.
- Manual browser: optional job selector, unchecked default, selecting one/two themes, bilingual export with candidate wording, absence of invented skills for irrelevant text, mobile readability and finance-workflow regression.
- Final course still needs authenticated human consent/observations, at least 3 qualifying strangers and a recent actual hiring case; leave claimed time savings/return/employer outcomes blank.
