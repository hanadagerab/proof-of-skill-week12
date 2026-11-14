create table public.pricing_scenarios (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
 name text not null check (name=trim(name) and char_length(name) between 1 and 80),
 model_version integer not null default 1 check(model_version=1),
 inputs jsonb not null check(jsonb_typeof(inputs)='object' and octet_length(inputs::text)<=16384),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create function public.pricing_inputs_valid(x jsonb) returns boolean language plpgsql immutable security invoker set search_path='' as $$
declare k text; n numeric; v jsonb; keys text[]:=array['price','acquisition','onboarding','review','delivery','support','corrections','exceptions','interviews','interviewCost','other','benefit','cohort','participants','cvMinutes','pilotMinutes','extraMinutes','baselineEffort','pilotEffort','baselineConsidered','pilotConsidered','rate']; lim numeric;
begin
 if jsonb_typeof(x) is distinct from 'object' then return false; end if;
 if not (x ?& keys) or (select count(*) from jsonb_object_keys(x))<>cardinality(keys) then return false; end if;
 foreach k in array keys loop
 v:=x->k;
 if v='null'::jsonb and k=any(array['benefit','baselineEffort','pilotEffort','baselineConsidered','pilotConsidered','rate']) then continue; end if;
 if jsonb_typeof(v) is distinct from 'number' then return false; end if;
 n:=(v::text)::numeric;
 lim:=case when k=any(array['cohort','participants','interviews','baselineConsidered','pilotConsidered']) then 20 when k=any(array['cvMinutes','pilotMinutes','extraMinutes','baselineEffort','pilotEffort']) then 1440 else 10000000 end;
 if n<0 or n>lim or n<>round(n,case when lim=20 then 0 else 2 end) then return false; end if;
 end loop;
 return (x->>'participants')::numeric<=(x->>'cohort')::numeric and coalesce((x->>'baselineConsidered')::numeric,0)<=(x->>'cohort')::numeric and coalesce((x->>'pilotConsidered')::numeric,0)<=(x->>'cohort')::numeric;
end $$;
alter table public.pricing_scenarios add constraint pricing_inputs_check check(public.pricing_inputs_valid(inputs));
create index pricing_owner_updated on public.pricing_scenarios(user_id,updated_at desc);
alter table public.pricing_scenarios enable row level security;
revoke all on public.pricing_scenarios from public,anon,authenticated;
grant select,delete on public.pricing_scenarios to authenticated;
grant insert(name,inputs,user_id),update(name,inputs) on public.pricing_scenarios to authenticated;
create policy pricing_select on public.pricing_scenarios for select to authenticated using ((select auth.uid())=user_id);
create policy pricing_insert on public.pricing_scenarios for insert to authenticated with check ((select auth.uid())=user_id);
create policy pricing_update on public.pricing_scenarios for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy pricing_delete on public.pricing_scenarios for delete to authenticated using ((select auth.uid())=user_id);
create function public.pricing_touch() returns trigger language plpgsql security invoker set search_path='' as $$ begin new.updated_at=now(); return new; end $$;
create trigger pricing_updated before update on public.pricing_scenarios for each row execute function public.pricing_touch();
