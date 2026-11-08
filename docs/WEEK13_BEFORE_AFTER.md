# Week 13 — Product before/after (functional comparison, not an impact study)
Baseline candidate-facing production **BEFORE**: `https://proofofskill.app` on immutable commit `9479c75ab9cb11bdf607740c2bbc499761728fc0`. Technical Week 13 baseline preview: `dpl_8RQ1VkCJapSbQHxouoRzWVcPAD93` at `b53a43be91be61af71f66e47903d12bc32967d1a`. The baseline source is the existing Week 12 candidate flow.

## Functional differences in the Week 13 branch
| Workflow | Week 12 baseline | Week 13 candidate-first preview |
|---|---|---|
| Starting choice | Home CTA only to finance work sample | Explicit existing-experience route **or** unchanged finance work sample |
| Actual prior projects | No typed candidate experience route | Job, internship, university project, informal work and family business |
| Candidate contributions | Revenue/cost/margin inputs | Self-reported real activity; approach, source description, uncertainty and assistance |
| Verification | Bounded finance labels OBSERVED/INFERRED/MISSING/UNVERIFIED | Explicit candidate-described experience, **not independently verified**; no employment endorsement |
| Résumé reuse | Financial evidence paragraph, no explicit copy/export | Candidate-editable résumé statement + copy + local `.txt` export |
| Login burden | Google required for account save, not for generating finance summary | No login to create, review, copy or download existing-experience statement |
| Private account storage | Finance summaries saved via existing Supabase owner-only INSERT/SELECT policies | **Unchanged for finance only**; new experience route **does not save to Supabase** and uses no new cloud schema; local download instead |
| Language | Mostly English | English/Spanish toggle, plus university, operations and family-business examples |
| Privacy | General limits and storage explanation | Explicit no confidential records, no auto employer sharing, plain-language provenance |

## Candidate-controlled process
1. Choose existing experience. 2. Enter truthful words (real project, analysis, available non-confidential evidence, uncertainty). 3. Generate deterministic summary. 4. Inspect/edit final résumé statement before reuse. 5. Copy or download a text file locally. The optional financial exercise remains at `/product` with existing Google OAuth and saved history.
No LLM, fabricated achievements, new database, credentials, recruiter access, or verification badge.

## Actual testing and outstanding proof
- Added deterministic checks for validations, unsupported claims, optional evidence, permitted experience types, disclosed assistance and synthetic persona fixtures. CI verifies source correctness but **cannot prove reduced candidate effort**.
- The uploaded document consists of **qualitative response records**, not measured usability sessions. No recorded navigation/timing, stranger eligibility, permissioned quotes, retest or recruiter adoption exists yet.
- Before/after user outcomes MUST remain blank until genuine uncoached fieldwork:
  - Prior method time ____; Week 12 time ____; Week 13 time ____.
  - Independent completion ____; candidate-selected output ____; extra steps ____; errors ____.
  - Candidate comprehension of self-reported versus verified ____.
  - Voluntary return intent ____; independently observed actual return ____.
  - Recruiter consideration and hiring impact: **UNKNOWN / NOT TESTED**.
- Week 4's ~2.8× efficiency finding was **simulated** and must not be used as a Week 13 measured result.
