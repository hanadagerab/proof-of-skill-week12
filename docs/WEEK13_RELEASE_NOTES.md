# Week 13 — Production release notes and evidence boundary
**Proof-of-Skill** · Hana Dager Abascal · 8 November 2026  
**Approved application baseline:** `835c475ebb395f8ef5057cb55ab0f8d1626441b0` on `week13/pre-code-packet-final`  
**Production destination:** https://proofofskill.app · GitHub `main` · Vercel project `proof-of-skill-week12` / `hana-builds`

## Product and technical changelog
1. **Candidate-first choice:** main screen offers *Describe my existing experience* or the preserved optional Week 12 financial exercise.
2. **Work already done:** candidates enter job, internship, academic, informal or family-business activity; their own decisions; optional non-confidential evidence and limitations; optional assistance disclosure. No additional test or login required.
3. **Truthful output:** deterministic, bounded review; an editable résumé statement based on the candidate's words; copy and local `.txt` download. Clear candidate-reported, not independently verified distinction; no invented figures, credentials, employer endorsements or hiring outcomes.
4. **Target-role context:** optional administrative, operations, analyst, other or no target; action-and-context grounded themes only; maximum three suggestions, none preselected. Candidate-approved themes are appended **after** the résumé sentence in copied/downloaded text and never replace that sentence. One optional interview practice **question**, without a generated answer.
5. **Access and inclusion:** English/Spanish guidance and examples for real projects; optional Google Sign-In on experience route with correct return to `/experience`, signed-in status and sign-out. Anonymous use remains unrestricted. An optional, bounded 10-minute single-tab temporary draft is available only with explicit choice; not encrypted or cloud-stored.
6. **Persistence boundary:** existing Google-authenticated Supabase financial submission saving/retrieval preserved with owner-only RLS. **New experience summaries are local-only**; signing in does not save them to the account. No database migration, paid AI, recruiter marketplace, or automatic candidate ranking.
7. **Engineering quality:** deterministic regression tests, clearly synthetic test fixtures, bilingual output and validation safeguards, preview-only configuration of required public Supabase variables, safe lint/build fixes, GitHub Actions checks and immutable Vercel preview provenance.

## Research: evidence vs. unverified claims
- Five supplied qualitative response records supported concerns about additional finance work, candidate experience relevance, truthful verification and portable output. They do **not** establish timestamped uncoached sessions, three independently confirmed strangers, publication consent for direct quotations, observed before/after times, actual return behavior or recruiter endorsement.
- María persona findings and sample statements are **synthetic**, not genuine participant interviews. Do not use as proof of demand or candidate improvement.
- Prior Week 4 approximately 2.8× time comparison was **simulated**, not a measured Week 13 result.
- Retesting the public final interface must compare the same genuine work episode against a participant's usual résumé or general-purpose AI method without coaching; one recent actual hiring case still needs provenance. Any negative result is preserved.

## Security and rollout constraints
- Current public `submissions` table uses enabled RLS and authenticated `auth.uid()=user_id` SELECT/INSERT conditions. No new table or weakened policy is part of this release.
- Supabase security advisor reports an existing `SECURITY DEFINER` function `public.rls_auto_enable()` as executable by anonymous and authenticated roles. Inspected definition returns `event_trigger`, is used to enable RLS after schema DDL, and does not return candidate records. It is a **pre-existing advisory warning**, not a newly introduced application pathway. It should be addressed in a separate least-privilege security review (e.g. revoke inappropriate EXECUTE after assessing event-trigger requirements); no unapproved database change in this release. Password leak detection is separately reported disabled by the advisor; Google OAuth path remains the user-facing sign-in.
- Do not claim Auth redirect allowlist or end-to-end Google sign-in has been independently verified by CI. Verify actual `https://proofofskill.app/experience` redirect and `/product` finance save after release with the user's authorized account.
- Rollback baseline (pre-release production): Vercel deployment `dpl_DEQEFzyA7jXVJ532e6vybtV1KbDq`, commit `9479c75ab9cb11bdf607740c2bbc499761728fc0`. Preserve this deployment and its Git history; if regression occurs, use Vercel's production rollback/promotion procedure rather than delete evidence or force-push.

## Evidence references
- [Pre-code Packet](PACKET.md)
- [Decision trail and Session Close](DECISIONS.md)
- [Before/after feature comparison](WEEK13_BEFORE_AFTER.md)
- [Bug and regression history](WEEK13_BUG_FIXES.md)
- [Synthetic María review](../research/WEEK13_FINAL_MARIA_RELEASE_REVIEW.md)
- [Five-response qualitative synthesis](../research/WEEK13_FIVE_RESPONSE_SYNTHESIS.md)
- [Demo script](WEEK13_DEMO_SCRIPT.md)
- [Five-user fieldwork guide](../research/FIVE_USER_FACILITATOR_GUIDE.md)

## Course submission — outstanding authentic evidence
- [ ] Five individually documented, genuinely consenting real-user sessions, with independently confirmed **at least three strangers**, dated observation notes and permission to publish any verbatim quotations.
- [ ] Normal résumé/AI workflow observed *before* Proof-of-Skill and a credible same-experience alternative comparison.
- [ ] At least one **recent real hiring experience** recorded with provenance; no inferred hiring effect.
- [ ] Top three pains grounded in actual observed behaviors, timed and independent before/after retest, and any voluntary return only if genuinely observed.
- [ ] Instructor-requested demo video, working public URL and accessible submission links.
- [ ] Genuine Team 5 Blueprint approval remains pending documentary proof if required.
