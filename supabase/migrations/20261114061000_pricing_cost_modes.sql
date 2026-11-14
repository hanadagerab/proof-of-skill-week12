create or replace function public.pricing_inputs_valid(x jsonb) returns boolean language plpgsql immutable security invoker set search_path='' as $$
declare k text; n numeric; v jsonb; keys text[]:=array['price','acquisition','onboarding','review','delivery','support','corrections','exceptions','interviews','interviewCost','other','benefit','cohort','participants','cvMinutes','pilotMinutes','extraMinutes','baselineEffort','pilotEffort','baselineConsidered','pilotConsidered','rate']; lim numeric; extra_keys text[]:=array['reviewMode','reviewHours','reviewRate','interviewMode','interviewDirect'];
begin
 if jsonb_typeof(x) is distinct from 'object' then return false; end if;
 if not (x ?| extra_keys) then x:=x||'{"reviewMode":0,"reviewHours":0,"reviewRate":0,"interviewMode":1,"interviewDirect":0}'::jsonb; end if;
 keys:=keys||extra_keys;
 if not (x ?& keys) or (select count(*) from jsonb_object_keys(x))<>cardinality(keys) then return false; end if;
 foreach k in array keys loop
 v:=x->k;
 if v='null'::jsonb and k=any(array['benefit','baselineEffort','pilotEffort','baselineConsidered','pilotConsidered','rate']) then continue; end if;
 if jsonb_typeof(v) is distinct from 'number' then return false; end if;
 n:=(v::text)::numeric;
 lim:=case when k=any(array['reviewMode','interviewMode']) then 1 when k='reviewHours' then 1440 when k=any(array['cohort','participants','interviews','baselineConsidered','pilotConsidered']) then 20 when k=any(array['cvMinutes','pilotMinutes','extraMinutes','baselineEffort','pilotEffort']) then 1440 else 10000000 end;
 if n<0 or n>lim or n<>round(n,case when lim in (1,20) then 0 else 2 end) then return false; end if;
 end loop;
 if ((x->>'reviewMode')::numeric=0 and ((x->>'reviewHours')::numeric<>0 or (x->>'reviewRate')::numeric<>0)) or ((x->>'reviewMode')::numeric=1 and (x->>'review')::numeric<>0) then return false; end if;
 if ((x->>'interviewMode')::numeric=0 and ((x->>'interviews')::numeric<>0 or (x->>'interviewCost')::numeric<>0)) or ((x->>'interviewMode')::numeric=1 and (x->>'interviewDirect')::numeric<>0) then return false; end if;
 if (x->>'reviewMode')::numeric=1 and (x->>'reviewHours')::numeric*(x->>'reviewRate')::numeric>10000000 or (x->>'interviewMode')::numeric=1 and (x->>'interviews')::numeric*(x->>'interviewCost')::numeric>10000000 then return false; end if;
 return (x->>'participants')::numeric<=(x->>'cohort')::numeric and coalesce((x->>'baselineConsidered')::numeric,0)<=(x->>'cohort')::numeric and coalesce((x->>'pilotConsidered')::numeric,0)<=(x->>'cohort')::numeric;
end $$;
