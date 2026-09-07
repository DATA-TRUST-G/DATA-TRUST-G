create extension if not exists pgcrypto;

create schema if not exists app_private;

create type public.presale_order_status as enum (
  'CREATED', 'AWAITING_PAYMENT', 'PAYMENT_SUBMITTED', 'UNDER_REVIEW',
  'CONFIRMED', 'DTR_ALLOCATED', 'EXPIRED', 'REJECTED', 'FLAGGED', 'CANCELLED'
);

create type public.payment_submission_status as enum ('SUBMITTED', 'VERIFIED', 'REJECTED', 'FLAGGED');
create type public.payment_verification_status as enum ('CONFIRMED', 'REJECTED', 'FLAGGED');
create type public.admin_action_type as enum ('CONFIRM', 'REJECT', 'FLAG', 'CANCEL', 'UPDATE_CONFIGURATION');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  country_code text,
  eligibility_status text not null default 'PENDING',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.admin_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('ADMIN', 'REVIEWER', 'SUPER_ADMIN')),
  created_at timestamptz not null default now()
);

create table public.presale_rounds (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status text not null default 'DRAFT' check (status in ('DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED')),
  token_symbol text not null default '$DTR',
  price_numeric numeric(30,12),
  price_currency text,
  allocation_cap_dtr numeric(30,0),
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.presale_orders (
  id uuid primary key default gen_random_uuid(),
  order_reference text not null unique,
  investor_id uuid not null references auth.users(id) on delete restrict,
  round_id uuid not null references public.presale_rounds(id) on delete restrict,
  purchase_value numeric(30,12) not null check (purchase_value > 0),
  purchase_currency text not null,
  locked_price_numeric numeric(30,12) not null check (locked_price_numeric > 0),
  locked_price_currency text not null,
  expected_dtr numeric(30,0) not null check (expected_dtr > 0),
  status public.presale_order_status not null default 'CREATED',
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.payment_routes (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references public.presale_rounds(id) on delete restrict,
  asset_code text not null,
  network_code text not null,
  destination text not null,
  active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (round_id, asset_code, network_code)
);

create table public.payment_submissions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.presale_orders(id) on delete restrict,
  payment_route_id uuid not null references public.payment_routes(id) on delete restrict,
  amount numeric(30,12) not null check (amount > 0),
  asset_code text not null,
  network_code text not null,
  transaction_hash text not null,
  status public.payment_submission_status not null default 'SUBMITTED',
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (network_code, transaction_hash)
);

create table public.payment_verifications (
  id uuid primary key default gen_random_uuid(),
  payment_submission_id uuid not null unique references public.payment_submissions(id) on delete restrict,
  order_id uuid not null references public.presale_orders(id) on delete restrict,
  reviewer_id uuid not null references auth.users(id) on delete restrict,
  status public.payment_verification_status not null,
  reason text,
  verified_at timestamptz not null default now()
);

create table public.dtr_allocations (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.presale_orders(id) on delete restrict,
  investor_id uuid not null references auth.users(id) on delete restrict,
  payment_submission_id uuid not null unique references public.payment_submissions(id) on delete restrict,
  dtr_amount numeric(30,0) not null check (dtr_amount > 0),
  allocation_reason text not null,
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table public.allocation_ledger (
  id uuid primary key default gen_random_uuid(),
  allocation_id uuid not null unique references public.dtr_allocations(id) on delete restrict,
  investor_id uuid not null references auth.users(id) on delete restrict,
  order_id uuid not null unique references public.presale_orders(id) on delete restrict,
  payment_submission_id uuid not null references public.payment_submissions(id) on delete restrict,
  dtr_amount numeric(30,0) not null check (dtr_amount > 0),
  reason text not null,
  administrator_id uuid not null references auth.users(id) on delete restrict,
  audit_reference text not null unique,
  created_at timestamptz not null default now()
);

create table public.admin_actions (
  id uuid primary key default gen_random_uuid(),
  administrator_id uuid not null references auth.users(id) on delete restrict,
  order_id uuid references public.presale_orders(id) on delete restrict,
  payment_submission_id uuid references public.payment_submissions(id) on delete restrict,
  action public.admin_action_type not null,
  reason text,
  created_at timestamptz not null default now()
);

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  order_id uuid references public.presale_orders(id) on delete set null,
  payment_submission_id uuid references public.payment_submissions(id) on delete set null,
  allocation_id uuid references public.dtr_allocations(id) on delete set null,
  audit_reference text not null unique,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.system_configuration (
  key text primary key,
  value jsonb not null,
  description text,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create index presale_orders_investor_idx on public.presale_orders (investor_id, created_at desc);
create index presale_orders_status_idx on public.presale_orders (status, created_at desc);
create index payment_submissions_order_idx on public.payment_submissions (order_id, submitted_at desc);
create index payment_verifications_order_idx on public.payment_verifications (order_id, verified_at desc);
create index allocation_ledger_investor_idx on public.allocation_ledger (investor_id, created_at desc);
create index audit_events_order_idx on public.audit_events (order_id, created_at desc);
create index audit_events_actor_idx on public.audit_events (actor_id, created_at desc);

create or replace function app_private.is_admin()
returns boolean
language sql
security definer
set search_path = public, app_private
stable
as $$
  select exists (
    select 1 from public.admin_roles
    where user_id = auth.uid()
      and role in ('ADMIN', 'SUPER_ADMIN', 'REVIEWER')
  );
$$;

revoke all on function app_private.is_admin() from public;
grant execute on function app_private.is_admin() to authenticated;

alter table public.profiles enable row level security;
alter table public.admin_roles enable row level security;
alter table public.presale_rounds enable row level security;
alter table public.presale_orders enable row level security;
alter table public.payment_routes enable row level security;
alter table public.payment_submissions enable row level security;
alter table public.payment_verifications enable row level security;
alter table public.dtr_allocations enable row level security;
alter table public.allocation_ledger enable row level security;
alter table public.admin_actions enable row level security;
alter table public.audit_events enable row level security;
alter table public.system_configuration enable row level security;

create policy profiles_self_select on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy profiles_self_insert on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy profiles_self_update on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy profiles_admin_select on public.profiles for select to authenticated using (app_private.is_admin());

create policy admin_roles_admin_select on public.admin_roles for select to authenticated using (app_private.is_admin());
create policy admin_roles_self_select on public.admin_roles for select to authenticated using ((select auth.uid()) = user_id);

create policy rounds_admin_all on public.presale_rounds for all to authenticated using (app_private.is_admin()) with check (app_private.is_admin());
create policy routes_admin_all on public.payment_routes for all to authenticated using (app_private.is_admin()) with check (app_private.is_admin());

create policy orders_self_select on public.presale_orders for select to authenticated using ((select auth.uid()) = investor_id);
create policy orders_self_insert on public.presale_orders for insert to authenticated with check ((select auth.uid()) = investor_id);
create policy orders_admin_select on public.presale_orders for select to authenticated using (app_private.is_admin());

create policy submissions_self_select on public.payment_submissions for select to authenticated using (
  exists (select 1 from public.presale_orders o where o.id = order_id and o.investor_id = (select auth.uid()))
);
create policy submissions_self_insert on public.payment_submissions for insert to authenticated with check (
  exists (select 1 from public.presale_orders o where o.id = order_id and o.investor_id = (select auth.uid()))
);
create policy submissions_admin_select on public.payment_submissions for select to authenticated using (app_private.is_admin());

create policy verifications_admin_all on public.payment_verifications for all to authenticated using (app_private.is_admin()) with check (app_private.is_admin());
create policy allocations_self_select on public.dtr_allocations for select to authenticated using ((select auth.uid()) = investor_id);
create policy allocations_admin_select on public.dtr_allocations for select to authenticated using (app_private.is_admin());
create policy ledger_self_select on public.allocation_ledger for select to authenticated using ((select auth.uid()) = investor_id);
create policy ledger_admin_select on public.allocation_ledger for select to authenticated using (app_private.is_admin());
create policy admin_actions_admin_all on public.admin_actions for all to authenticated using (app_private.is_admin()) with check (app_private.is_admin());
create policy audit_events_admin_select on public.audit_events for select to authenticated using (app_private.is_admin());
create policy config_admin_all on public.system_configuration for all to authenticated using (app_private.is_admin()) with check (app_private.is_admin());

-- Public clients do not receive service-role privileges. No table grants are added here.
