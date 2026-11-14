-- Applied and verified 2026-11-14. Preserve ensure_rls and SECURITY DEFINER implementation.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
-- Rollback to previous default ACL behavior if required (reopens advisor warnings):
-- grant execute on function public.rls_auto_enable() to public;
