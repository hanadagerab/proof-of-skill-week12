# Proof-of-Skill

**Week 13 · Candidate-first evidence organizer**  
**Official site:** https://proofofskill.app  
**Venture:** Proof-of-Skill · Hana Dager Abascal

Proof-of-Skill helps candidates describe **analytical experience they already have** without forcing them to complete an unrelated assessment. The candidate keeps control of their own words, uncertainty, assistance disclosures, and optional transferable-skill themes. The platform **does not verify employment, certify skills, rank candidates, or guarantee hiring**.

## Choose your pathway

### 1. Describe my existing experience — `/experience`
- Choose job, internship, academic project, informal work, or family business.
- Describe **what you personally did**, your analysis/decisions, any evidence you can safely describe, and what cannot independently be verified. Documents and confidential information are **not required**.
- Optionally choose a target job category (administration, operations, analysis, other, or none).
- The bounded deterministic engine may suggest **up to three possible activity themes** only when a relevant reported **action and object** appear in the candidate's own words. Each theme cites that wording, begins **unchecked**, and remains an **unverified candidate statement**.
- Candidate-selected themes appear **after** the editable résumé-ready sentence in copied/downloaded text. One optional **interview practice question** may appear in the review screen, grounded in a selected theme; the tool does **not** generate an answer or invent outcomes.
- Switch between English and Spanish; edit the statement and copy or download a local `.txt` file.
- The experience workflow requires **no Google login**. Google Sign-In is visible as an **optional** account action, but **experience summaries are currently NOT saved to Supabase or to an account**. A candidate who opts in before leaving for Google may use a ten-minute, single-tab temporary browser draft, which is removed after restoration; it is not encrypted, cloud-backed, or suitable for confidential content.

### 2. Try a financial skills exercise — `/product`
The original Week 12 bounded financial work sample remains available. Its deterministic evidence classifications are not proof of prior employment. The existing optional Google authentication and **private owner-only** Supabase saving and retrieval remain part of **this financial pathway**, not the new experience route.

## Research and evidence boundaries

- Week 13 direction was informed by five **qualitative response records** and **synthetic** persona exercises. Do not mistake fictional persona statements for genuine user quotations.
- The records do **not** establish independently verified five observed sessions with at least three strangers, before/after stopwatch timings, actual voluntary returns, recruiter review, employer adoption, or hiring impact.
- Week 4's historical ~2.8× simulated time comparison was **not** a validated real-user improvement.
- The system does not upload experience documents, infer credentials, use paid generative AI, transmit candidate descriptions to employers, or automatically make hiring decisions.
- The finite phrase-matching rules may miss legitimate synonyms or complex grammatical negation. Suggested themes must be reviewed by the candidate and are **never verification**.
- The financial evidence database uses authenticated owner-only RLS policies. Experience data is **local-only** unless a separate secure persistence design is approved and implemented.

## Technology

Next.js (App Router), React, TypeScript, bounded JavaScript evidence engines, Supabase Auth and database (original finance route), GitHub Actions, and Vercel. See [architecture and limitations](docs/WEEK13_TECHNICAL_BASELINE.md).

## Run & validate locally (optional for maintainers)

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm run dev
```

For Google sign-in and finance persistence, maintainers configure the public `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` through Vercel environment settings or local environment files **not committed to GitHub**. Never expose service-role credentials. A configured Supabase Auth redirect allowlist is necessary for each approved domain. The application does **not** require these variables for anonymous experience generation.

## Week 13 project evidence

- [Pre-code Packet](docs/PACKET.md) and [implementation decisions](docs/DECISIONS.md)
- [Final synthetic María review](research/WEEK13_FINAL_MARIA_RELEASE_REVIEW.md) and [five-record qualitative synthesis](research/WEEK13_FIVE_RESPONSE_SYNTHESIS.md)
- [Feature before/after](docs/WEEK13_BEFORE_AFTER.md), [genuine bug fixes](docs/WEEK13_BUG_FIXES.md), and [build evidence](docs/WEEK13_BUILD_EVIDENCE.md)
- [Authentication & privacy QA](docs/WEEK13_STAGE_A_AUTH_QA.md), [demo script](docs/WEEK13_DEMO_SCRIPT.md), and [fieldwork kit](research/FIVE_USER_FACILITATOR_GUIDE.md)
- [Week 13 release notes / outstanding course evidence](docs/WEEK13_RELEASE_NOTES.md)

**Do not publish private consent forms, raw research recordings, confidential company evidence or participant identifiers to this public repository.**
