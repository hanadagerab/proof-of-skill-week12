# Verification checklist (status: not yet executed against installed Next/Supabase)

1. npm install, typecheck, lint, unit test, production build.
2. With configured Supabase, Google OAuth signs in, saves and persists after refresh.
3. Sign in with a second separate identity; verify owner A records are inaccessible through API and RLS.
4. Confirm missing, contradictory, assisted, source-free submissions are bounded.
5. Device/mobile accessibility check using browser keyboard and at 375px viewport.
6. Verify no public seed data, no credentials tracked, clear synthetic labels.
7. Register any genuine bug with reproduction, correction and regression test.
8. Capture actual Vercel deployment IDs and URLs after authenticated deployment.

**Not tested yet:** live authentication, RLS, persistence, browser persona journey, external employers, real domain.
