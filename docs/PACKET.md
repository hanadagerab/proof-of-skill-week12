# WEEK 12 · PROOF-OF-SKILL — PRE-CODE PLANNING PACKET

**Hana Dager Abascal · Team 5 · OPERATOR · 31 October 2026**

> This is the **planning baseline**, not an as-built report. The later build, test and deployment records belong in a separate post-build appendix. No real employer adoption, user interviews, 10× improvement, public deployment or successful save has yet been proven.

## 1. Executive overview and historical evolution
Week 4 Proof-of-Skill explored a bounded financial analyst work sample with two synthetic candidates, four evaluator options, and a *simulated* evaluator verification-time comparison of 49.2 versus 17.5 minutes (2.81×), not employer-observed success. Week 9 later developed explicit authorship/AI-assistance disclosures and a Verification Summary; it would be incorrect to attribute all these features to Week 4. Week 12's new falsifiable vertical slice is INPUT → deterministic classification → bounded summary → Supabase SAVED, with human evaluator authority preserved.

## 2. Problem, users, payer and evidence status
A capable candidate may have relevant analytical skill yet receive no substantive consideration because their CV lacks conventional credentials. Existing work samples may help, but are costly and can become another unpaid hurdle. Candidate = applicant with limited formal credentials; decision user = hiring evaluator; hypothesized payer = employer. A product that merely speeds rejection without improving genuine opportunity fails the intended Need-Gravity. Current demand and payment are **unverified**.

## 3. The five-step Method
1. Narrow the decision. 2. Separate observation from interpretation. 3. Expose the missing condition. 4. Encode the evidence boundary. 5. Test the boundary and correct contradictions. Step 4 transforms each rubric criterion into explicit OBSERVED, INFERRED, MISSING or UNVERIFIED states, without silently turning uncertainty into certainty. These are a retrospective extraction from the user's AI-assisted work, not an independently original scientifically validated methodology.

**Exact Blueprint engine:** “Step 4 of my Method becomes the function that converts task submissions into claim-bounded evidence summaries, distinguishing what the submitted work supports, what remains unresolved about authorship or performance, and which judgments belong to human evaluators.”

## 4. Charter and North Star
See [CHARTER.md](CHARTER.md). Vision: meaningful candidate consideration from bounded task evidence. Principles: clear claim limits, unknowns, human decisions, proportional candidate work, privacy. Non-goals: automated hiring, ranking, authorship detection, blanket skill certification and added mandatory screening. North Star: documented meaningful human evaluation for previously overlooked candidates without duplicated mandatory effort, to be measured in a real pilot.

## 5. Personas
See [PERSONAS.md](PERSONAS.md). C1 Daniela (23), candidate using a shared laptop; E1 Martín (39), time-limited hiring evaluator. Both are deliberately synthetic and do not establish demand.

## 6. Team 5 blueprint: obligations and risks
| Condition | Product trace | Planned test / dependency |
|---|---|---|
| 1 Real person | No demand claims in website | Five real employer interviews, pending |
| 2 Evidence boundary | Pure classifier and summary | Missing, inference, unknown authorship tests |
| 3 Existing comparison | Benchmark protocol and Week 4 baseline | Full-task paired comparison pending |
| 4 Responsibility | Candidate/system/evaluator roles | Assignment and escalation check |
| 5 Human authority | No automated hiring status | Forbidden-conclusion test |
| 6 Shadow Clause | All samples and claims labeled | Copy/UI audit of simulated metrics |

Four reviewer risks: Nicolás (efficiency without access), Isabella (duplicate unpaid screening), Inés (time/equipment inequity), Ana María (false authorship confidence). Concession: no mandatory extra screening or employability claims. Failure test: at least one employer could meaningfully use work-sample evidence; five hiring interviews to test whether existing screens could be replaced or shortened. Team-level proposed ventures are separate from Hana's individual Proof-of-Skill venture.

## 7. Full Week 12 slice and boundaries
In: responsive home/product/about; user Google sign-in; fixed analyst task; structured data inputs; explicit assistance disclosure; deterministic evidence categories; bounded summary; owner-specific Supabase save/read; synthetic demo examples. Out: spreadsheet parsing, AI scoring, ATS integration, hiring automation, identity verification, independent-work verification, candidate ranking, payment, live employer marketplace.

Success gate: a signed-in candidate can submit valid evidence, see correct bounded categories, save it to live Supabase, then retrieve it after refresh; another user cannot read it. A reviewer-only action must never be falsely executed by the classifier. The criterion for substantive employer adoption remains external and unresolved.

## 8. User flow, swimlane and mockup
The PDF version embeds a separately rendered feature flowchart, a responsibility swimlane and a conceptual visual mockup. The mockup is an *illustration*, not a deployed screenshot. Candidate enters answers and disclosures; system validates and classifies; reviewer inspects supported/unsupported conclusions; data layer permits only owner-authorized records.

## 9. Evidence classification rules and adversarial cases
**OBSERVED:** Candidate provided a formula such as `=(Revenue-Cost)/Revenue`; this is direct evidence that a formula string was submitted, *not proof the calculation is correct or self-authored*. **INFERRED:** When numeric inputs and computation agree, the stated margin follows under those inputs, not from independently audited books. **MISSING:** No source for a requested assumption or empty numerical value. **UNVERIFIED:** Candidate claims independent authorship or undisclosed AI assistance status; self-report cannot validate provenance.

Edge cases: conflicting submitted numbers require clarification and must not silently resolve; mathematically well-formed answers still lack source verification; nonresponse cannot be rebranded as an incorrect skill; valid disclosed AI use does not establish independent performance; no criterion result can be transformed into a hiring recommendation. Never state “verified candidate,” “hire,” “reject,” “employable,” or “10× proven.”

## 10. Comparable alternatives and verification protocol
Competitor categories: employer's current manual Excel work sample and established testing vendors such as TestGorilla and HackerRank. These vendors provide structured assessments, but their precise capabilities, fees and efficacy require checking against live documentation before publication. Compare the **complete task**: candidate assignment time, evaluator review time, read quality, follow-up burden, accessibility, and whether Proof-of-Skill replaces a current assessment instead of adding one. The prior 49.2→17.5 figure is a simulation, not a head-to-head real-employer result.

## 11. Architecture and trust boundaries
Browser (untrusted structured fields) → schema validation → deterministic pure rules → claim-bounded summary → Supabase Auth + owner-RLS storage. Next.js App Router + React + TypeScript + Tailwind; @supabase/supabase-js with browser publishable key; Supabase Postgres and RLS; Git history; Vercel target. An OAuth sign-in identity does not itself verify claimed authorship of a submitted work sample. No secret service role key is exposed. Public pages never display personal submissions.

## 12. Database and access control
`submissions(id uuid PK, user_id uuid REFERENCES auth.users, task_slug text, answers jsonb, disclosure jsonb, summary jsonb, created_at timestamptz)`. RLS enabled. Policies select/insert restrict `auth.uid() = user_id`; update/delete are not granted by default. Production rollout also needs Google OAuth redirect configuration, retention/deletion process, privacy notice and user-rights handling. Evaluator access intentionally not implemented until explicit assignments and legal basis are established.

## 13. Security and privacy
TLS in transit; OAuth and Supabase session; no public RLS bypass; limited string lengths and numeric bounds; no arbitrary uploads in MVP; no secrets in Git; synthetic seed data only; purposeful minimal data; no high-stakes autonomous hiring decision. Audit browser errors, prevent leakage across users, and define retention/deletion before involving real candidates.

## 14. Acceptance and failure tests
| ID | Case | Expected result |
|---|---|---|
| T01 | Complete valid values | Explicit bounded observed/inferred summary |
| T02 | Missing figures | MISSING, no fabricated result |
| T03 | Unknown authorship | UNVERIFIED, no identity claim |
| T04 | Disclosed assistance | Disclosure shown, independence unresolved |
| T05 | Conflicting margin | Flags mismatch, requests review |
| T06 | Malformed/oversized input | Schema rejects request |
| T07 | Auto-hire assertion | No such system output or action |
| T08 | Same-user saved refresh | Record survives, when Supabase configured |
| T09 | Different-user read | RLS denies access |
| T10 | Shadow Clause audit | Sample and 2.8× marked simulated |
| T11 | No environment | Clear unavailable save state, no fake success |
| T12 | Accessibility/mobile | Keyboard navigation and readable layout |

Only checks actually run later should be recorded in the post-build log. No synthetic persona test substitutes for a real employer study.

## 15. Genuine development and deployment plan
C1 project/doc foundation; C2 pages and visual system; C3 deterministic engine and unit tests; C4 OAuth/Supabase/RLS; C5 end-to-end workflow and security review; C6 actual bug fix if discovered; C7 screenshot-driven persona correction and documentation. At least 5 meaningful commits with real hashes; first Vercel deployment after a working milestone; second after a real improvement. A domain is purchased only with user authorization. Record decision log and next action at each session close; never backdate remote work.

## 16. Risks and assumptions
Real willingness-to-pay unknown; reviewers might refuse to replace tests; candidates might incur unpaid effort or device barriers; structured input may not capture spreadsheet skill; false confidence from clean summaries; self-reported disclosures may be inaccurate; privacy and RLS misconfiguration; cloud accounts required for deployment; actual complete-task improvement could be <1×. Stop, cut scope or redesign if evidence shows an added burden without candidate benefit.

## 17. Source provenance and references
Primary project sources: BLUEPRINT_w12.pdf (Team 5); THE_METHOD_Hana_Dager_Abascal_FINAL.pdf; THE_VERDICT_Hana_Dager_Abascal_FINAL.pdf; user-supplied Week 12 full build instructions; reported original Week 4 and Week 9 project details. External resources for architecture/reference: Supabase Auth and RLS documentation (https://supabase.com/docs/guides/auth ; https://supabase.com/docs/guides/database/postgres/row-level-security), Next.js App Router (https://nextjs.org/docs/app), Vercel deployment (https://vercel.com/docs), TestGorilla (https://www.testgorilla.com/), HackerRank (https://www.hackerrank.com/). These reference links are not proof of product adoption or vendor efficacy; verification is a separate step.

## 18. Pre-code versus post-build provenance
**Historical:** Week 4 simulation; Week 9 disclosure and verification lessons. **Pre-code:** this scope, charter, diagrams, schema, success gates and comparison plan. **Post-build only:** actual source, test output, Git hashes, Supabase connection evidence, deployments, persona BEFORE/AFTER screenshots, bug fix and measured results. No post-build outcomes should be silently backfilled into this planning document.
