-- Production schema: user-owned submissions, no public access to saved records.
create table if not exists public.submissions (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 task_slug text not null default 'financial-analyst-v1' check (task_slug='financial-analyst-v1'),
 answers jsonb not null, disclosure jsonb not null, summary jsonb not null,
 created_at timestamptz not null default now()
);
create index if not exists submissions_user_date_idx on public.submissions (user_id,created_at desc);
alter table public.submissions enable row level security;
revoke all on public.submissions from anon, authenticated;
grant select, insert on public.submissions to authenticated;
create policy "Owner can read" on public.submissions for select to authenticated using ((select auth.uid())=user_id);
create policy "Owner can create" on public.submissions for insert to authenticated with check ((select auth.uid())=user_id);
-- No update/delete/reviewer access policy: explicit future authorization model required.
