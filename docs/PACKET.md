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
Competitor categories: the employer's own manual Excel work sample, TestGorilla and HackerRank. According to TestGorilla's official assessments page (https://www.testgorilla.com/assessments/, accessed 31 October 2026), its offering includes configurable skills assessments, candidate scoring and ATS integration. According to HackerRank's official screening page (https://www.hackerrank.com/products/screen/, accessed 31 October 2026), its emphasis is coding and developer-screening assessments, including take-home exercises. Neither vendor documentation verifies that Proof-of-Skill is better, cheaper, or more effective; those are comparator features, not an independent outcome study. Compare the **complete task**: candidate assignment time, evaluator review time, read quality, follow-up burden, accessibility, and whether Proof-of-Skill replaces a current assessment instead of adding one. The prior 49.2→17.5 figure is a simulation, not a head-to-head real-employer result.

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


## 19. Detailed task design and rubric (pre-build)

The initial finance analyst exercise deliberately avoids a large take-home assignment. The task is to examine a synthetic company's revenue and costs, state a claimed gross margin, and describe the inputs or assumptions. The system can check whether a candidate-provided percentage is mathematically consistent with the candidate's own numeric inputs; it cannot audit the company's books or determine whether the candidate performed the calculation without assistance. The planned business interpretation is intentionally narrow: a mathematically consistent answer is not evidence of broad financial-modeling competency.

| Task field | Expected input | What it establishes | What it does not establish |
|---|---|---|---|
| Revenue | Numeric nonnegative value | A value was submitted | Accurate or audited sales |
| Costs | Numeric nonnegative value | A value was submitted | Correct cost accounting |
| Claimed gross margin | Percentage or empty | A self-reported computation | Complete analytical competence |
| Source notes | Narrative, limited length | Candidate provided a description | Truth or quality of records |
| Assistance disclosure | None/AI/other/unspecified | Candidate's chosen declaration | Independently proven authorship |

Worked example A: revenue 100,000, cost 65,000, claimed margin 35%. The arithmetic agrees under the submitted figures, so the system may say: “The claimed margin is consistent with the supplied inputs.” It must immediately add: “Underlying values and independent performance remain unverified.” Worked example B: same revenues and costs but claimed margin 55%; mark an inconsistency and offer targeted clarification. Worked example C: revenue missing; do not calculate a substitute margin or infer ability from a nonresponse. Worked example D: assistance set to AI; show the disclosure and still prohibit a claim about independent performance.

This design is not a psychometrically validated skills assessment. In a real employer study, the task must be judged for job relevance, disability accessibility, time requirements, fairness, and whether it could replace an existing work sample. The evaluator should be able to identify the precise criterion and its source rather than just trust an attractive overall badge.

## 20. Exact state transitions and error handling

A form starts in draft state. After schema validation, the pure classifier creates a provisional local summary. The user is shown the summary along with the statement that it has **not** been stored. Saving is separately requested and requires an active Google-authenticated session and a configured database. On server or database error, the system shows a failure and does not claim persistence. After a positive response from Supabase, the UI may say “Saved successfully”; the user can use a separate load action to confirm retrieval. An evaluator's recruitment decision is not a transition executed by this module.

| Event | Planned status | Next responsible person |
|---|---|---|
| Invalid numeric or length input | Block creation with validation guidance | Candidate corrects |
| Inputs numerically consistent | Bounded summary; assumptions shown | Reviewer interprets |
| Figures inconsistent | Flag discrepancy, not fail applicant | Candidate or reviewer clarifies |
| Missing source notes | Explicit missing-evidence state | Reviewer may request source |
| Unspecified/AI assistance | Unverified authorship, disclose status | Human evaluator examines context |
| Signed-out save | No saved success; sign-in guidance | Candidate authenticates |
| Supabase write denied | Visible error and no success claim | Owner/admin investigates |
| Authorized read | Display only owner-linked submissions | Owner controls next action |

Stop rules are explicit. The application stops short of certifying skill, proving identity, finding cheating, ranking candidates, or deciding employment. Escalation means an authorized evaluator requests missing evidence or a live discussion. If the evidence is insufficient, the correct product state is uncertainty, not an invented rejection.

## 21. External comparator experiment and measurement design

The proper comparison unit is the complete hiring assessment task for one entry-level analytical opening. Baseline A is the employer's existing spreadsheet exercise and ordinary reviewer notes. Baseline B, where applicable, is a commercial assessment. Intervention P is the Proof-of-Skill task plus its bounded summary. For each, record time preparing the task, candidate completion time, time reading submissions, follow-up minutes, decision quality by independent human rubric and total communication time. Record whether it replaces an assessment, because adding an extra screen can negate all evaluator savings.

The primary outcome is not raw summary speed; it is meaningful candidate consideration for people who otherwise would have been screened out. Secondary endpoints include net human minutes, percentage of missing evidence caught, number of unsupported claims in reviewer notes, candidate completion rate, accessibility problems, and willingness of hiring teams to substitute the current tool. Report distributions and observed sample size rather than isolated anecdotal examples.

The internal Week 4 49.2-to-17.5-minute simulation implies a ratio of approximately 2.81 to 1 for its modeled verification step. It does not specify full task creation and candidate cost, and therefore must not be presented as a real 2.8× total workflow outcome. Tenfold improvement remains an unvalidated target hypothesis. A fair failure condition is that the new step creates equal or more total work, or the employer refuses to replace an existing assessment.

## 22. Data architecture, storage lifecycle and threat model

Minimum viable production schema contains a submissions table linked to Supabase Auth users by UUID. Each row records task version, raw structured answers, assistance disclosure, generated summary and created timestamp. Task slug/version must be immutable enough to explain which rules produced each summary. The system should store a classifier version identifier before a real pilot so later changes do not silently rewrite historical interpretations. JSONB is acceptable for bounded early fields, but explicit database constraints and versioned schema should be added before higher-risk use.

A browser is an untrusted client. A candidate can manipulate local data or call Supabase directly. RLS protects ownership, not substantive validity of all JSON properties; production assurance requires server-side or database-side validation, especially when accepting real private records. Threats include misconfigured RLS, mistakenly public table grants, leaked service-role credentials, injection and excessive user input, stale OAuth sessions, accidental exposure in screenshots, and unnecessary retention of identifiable applicant data.

Before real users, implement a retention limit and self-service deletion or a documented administrator-managed process, a privacy notice, permitted-use policy, incident procedure, and consent mechanics appropriate to the jurisdiction. Minimize source material: no résumés, employer identities or unbounded file uploads in this milestone. Avoid keeping raw scores or implicit hiring recommendations. Candidate access to a summary must not be misrepresented as employer access; an evaluator assignment model is an explicit later dependency.

| Access actor | Can view task description | Can create private submission | Can read private submission | Can make hiring decision in application |
|---|---|---|---|---|
| Public visitor | Yes | No | No | No |
| Authenticated owner | Yes | Own only | Own only | No |
| Other authenticated user | Yes | Own only | Not another owner's | No |
| Employer evaluator | Yes | No assigned access in MVP | Not yet granted | No |
| Administrator with secure backend key | Administrative necessity only | Restricted; never browser key | Privileged operations require audit | No automatic decision |

## 23. User experience, accessibility and usability requirements

The intended journey is short: land on Home, understand the bounded claim, open Product, inspect the task, edit example data, disclose assistance, generate a summary, review categories and limitations, authenticate, save and retrieve. The user should never confuse generating with saving. The primary buttons must be descriptive and ordered by stage. Evidence cards should use both words and color: color alone cannot communicate “inferred” or “unverified.” The labels must remain legible on a phone without horizontal scrolling.

Accessibility evaluation should include tab order, visible focus, associated field labels, screen-reader status messages for errors/success, responsive widths at 375px and desktop, and understandable empty states. Examples should be marked synthetic visibly in the flow. For candidate inclusion, test shared-device use, limited internet connectivity, task duration and clear exit rules. A real candidate who cannot complete the task due to device constraints should not be silently labeled unskilled.

The synthetic persona exercise is a usability inspection, not evidence of customer demand. Use Daniela as candidate first, with Martín used for a second evaluator interpretation check if the evaluator-facing workflow is exposed. Record verbatim interpretations, blockers and where the user would stop, then modify actual code. Before and after screenshots must show the *same task and key conditions*; avoid presenting unrelated decorative redesign as proof of improvement.

## 24. Build gates, dependencies and authentic development record

Gate 0 is complete planning: Charter, two formal synthetic personas, a real pre-code Packet and traceability. Gate 1 is locally runnable website pages. Gate 2 is deterministic evidence classification with edge-case tests. Gate 3 is Supabase authentication and owner-only storage. Gate 4 is mobile usability and end-to-end persistence verified with two test identities. Gate 5 is a real Vercel deployment with recorded URL and version. Gate 6 is the first genuine synthetic persona screenshot session, documented issue, code correction, passing regression, second real deployment and new screenshots.

Seven meaningful local Git snapshots are planned, but an actual deployment is only a deployment when Vercel returns a verifiable URL. Do not rewrite commits to imitate historical work. Record commit hashes from `git log`, tests from command output, and deployment IDs from actual Vercel responses. Ownership of a purchased domain requires the owner's account and payment approval. No external action is complete merely because a config file exists. Each session should update DECISIONS.md and include the next action.

| Milestone | Artifact | Release/verification gate |
|---|---|---|
| M1 | Planning baseline | Source files and dated planning PDF preserved |
| M2 | Responsive pages | Browser checks on all three routes |
| M3 | Bounded engine | Unit cases pass; contradictions handled |
| M4 | Supabase/Auth/RLS | Two-identity owner isolation test |
| M5 | Functional saved workflow | Save and reload real row; deployment 1 |
| M6 | Genuine observed bug correction | Reproduction, regression and next deployment |
| M7 | Persona correction | BEFORE/AFTER screenshots; deployment 2 |
| M8 | Final dossier | Build log, persona PDF, demo, public URLs |

## 25. Failure modes and falsifiability register

**Risk A — fabricated confidence:** The UI's neat categories may lead evaluators to mistake self-report for measured capability. Control: every category must have an adjacent limitation, a prohibited conclusion list and an explicit human next action. Failure indicator: a reviewer repeats an unsupported authorship or employability conclusion after reading the summary.

**Risk B — burdens shifted to applicants:** Employer review may be shorter only because candidates perform new unpaid work. Control: track candidate minutes and replacement of an existing exercise; make a simple alternate route available in a real pilot. Failure indicator: candidate burden increases without added access.

**Risk C — weak job relevance:** Margin arithmetic may be too narrow to signal meaningful entry-level analyst performance. Control: ask hiring managers which criteria matter, develop a realistic rubric before real deployment, and permit a human live follow-up. Failure indicator: reviewer cannot use the summary to make a materially better next-step decision.

**Risk D — missing market demand:** No real employer has agreed to use the summary. Control: five interviews with recruitment decision-makers and a replacement-of-assessment question. Failure indicator: zero reviewers willing to seriously use it after seeing a task and summary.

**Risk E — misconfigured database security:** Owners may view another candidate's submission, or unvalidated JSON may be submitted directly. Control: database grants/RLS tests, server-side validation before collecting personal candidate data, and a second-account negative test. Failure indicator: one unauthorized read or false success statement; suspend further use immediately.

**Risk F — unproven scale or value:** A prototype demo may look finished but be economically inferior to a spreadsheet, TestGorilla or HackerRank. Control: paired task benchmarks, all-in costs, and stop/pivot conditions. Failure indicator: net negative operational value, no candidate impact, or no employer willingness to substitute existing practices.

## 26. Planned submission evidence inventory

Final submission should contain a working public product URL, public GitHub repository with authentic commits, at least two Vercel deployment records, a real domain once acquired and connected, source docs/CHARTER.md, docs/PERSONAS.md, the original pre-code Packet, DECISIONS.md, a post-build test log, reproducible SQL migration and RLS tests, screenshots of the full task journey, a complete persona before-and-after report, a three-minute demonstration plus reflection, and the verbatim development transcript where available. Missing source conversations are a limitation, not a license to invent messages.

The primary planning Packet is frozen as a design-time artifact; post-build evidence is separately titled and dated. Each final evidence item should identify author, environment, actual test conditions and whether it is observed, simulated, inferred or unverified. Course completion must never be inferred from a ZIP, source code or PDF alone.
