# Proof-of-Skill · Week 12 Core Build

Hana Dager Abascal · Team 5 · OPERATOR · Week 4 venture evolution.

Status: local source produced; a public GitHub repo, Supabase credentials, actual deployment, real domain, and external user testing are **not yet verified**.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Supply `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase publishable key) and configure Google authentication in Supabase. Apply `supabase/migrations/001_initial.sql` using the Supabase SQL editor or CLI before testing persistence. Never share secrets in the chat. Without configuration, the product shows a clear setup status and cannot claim to save data.

## Evidence scope

The deterministic classifier evaluates structured candidate answers; it does not ingest/verify a spreadsheet file, establish identity, judge overall skill or automatically screen candidates. Reviewers retain authority. This is a bounded MVP and its assessment usefulness remains a hypothesis.

## Checks

`npm run typecheck && npm run lint && npm test && npm run build` when dependencies are installed. Tests and deployment must be verified separately. See `docs/DECISIONS.md` and `docs/PACKET.md`.
