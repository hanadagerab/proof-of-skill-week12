# Persona test — BEFORE inspection / source boundary

**Date of source material:** October 31, 2026. **Review recorded:** Week 12 follow-up. **Persona:** Alex Rivera, 24, entry-level financial analyst; limited conventional credentials and time. **Method:** synthetic screenshot-based inspection; not a real participant interview, behavioral study, or live automated browser test.

## What the available screenshot evidence establishes
The conversation contains screenshots of the existing product and task output captured at **localhost**. They used revenue 100,000, cost 65,000 and a **35%** claimed margin. The displayed mathematical mismatch case of **42% claimed vs 35% computed was NOT demonstrated** by these original screenshots. Do not relabel them as screenshots from public Vercel.

The original UI used infrastructure-oriented labels (notably “Save to Supabase”), did not clearly explain employer visibility or the next human step, and offered terse explanations of evidence labels. The field copy did not provide accessible examples for source notes and assistance. The code generated a summary from the form and saved disclosure separately from the current form state; this was a potential drift path, **not a reproduced mismatch bug**. Existing onChange handlers already invalidated the summary when those fields changed.

## Prioritized candidate barriers (synthetic interpretation; not observed behavior)
1. **High — uncertain next action / recipient:** a candidate may mistake database saving for employer submission. The MVP has no employer-sharing feature.
2. **High — ambiguous labels:** OBSERVED / INFERRED / MISSING / UNVERIFIED may be mistaken for grades, wrongdoing flags, or hiring conclusions.
3. **Medium — task and conflict clarity:** the submitted gross-margin percentage needs an explicit formula and non-accusatory correction guidance; source notes and AI assistance need examples.

## Changes implemented in this revision (not yet production verified)
- “Save my evidence summary,” separate generated/saved status, account-owned next steps, no sharing or employer access assertion.
- Plain-language evidence legend; disclosure messaging emphasizes self-report instead of misconduct.
- Formula and explanation for 100,000 revenue / 65,000 cost / 42% claimed margin; 35% computed; request correction or clarification without hiring verdict.
- Persist from a captured *generated* input snapshot, so answers and disclosure saved are the same inputs used for the summary. Form changes invalidate the generated summary.

## Required AFTER evidence — pending
Screenshots of live deployed revision: task guidance, classifications, 42%-versus-35% summary, disclosure self-report, private save confirmation and post-refresh retrieval. Record deployment SHA/URL, actual sign-in and save/reload observations, and any unresolved UI barriers. No BEFORE/AFTER verdict has been issued.
