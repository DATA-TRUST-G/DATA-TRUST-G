# DataTrust Phase I Architecture

## Status model

- CURRENT: implemented or operational in this repository/project.
- PLANNED: Phase I capability intended for implementation but not yet operational.
- PROPOSED: longer-term architecture or future roadmap concept.
- CONFLICTING SOURCE / REQUIRES DECISION: canonical values are not silently selected when source materials disagree.

## Surfaces

```text
apps/web    public investor narrative, docs, presale entry
apps/app    authenticated investor portal
apps/admin  protected operations console
packages/ui shared interface primitives
auth/config/types/validation shared contracts
supabase/   database migrations and edge functions
docs/       canonical product and investor source material
```

## Trust boundaries

Browser input is untrusted. Presale pricing, eligibility, order state, payment verification and allocation are server/database concerns. Admin UI visibility is not authorization.

Confirmed allocation is derived from immutable-style ledger records rather than an editable balance. A unique constraint on confirmed allocation per order prevents duplicate administrator confirmation from creating duplicate allocations.

## Phase I data flow

Visitor → public presale → authenticated account → order snapshot → payment instructions → transaction evidence → admin verification → allocation ledger → investor dashboard.

An order preserves the commercial terms applicable at creation time. A submitted transaction hash is evidence, not proof of payment.

## External services

- Supabase: Auth + PostgreSQL + protected server operations.
- Vercel: intended preview/production hosting once a Vercel project is connected.
- GitHub: technical source of truth.
- Figma: design source for the experience direction.

## Security invariants

1. No service-role secret reaches a browser.
2. No investor can execute admin operations through client-side role claims.
3. No user can write an arbitrary DTR balance.
4. No payment submission can itself transition an order to CONFIRMED.
5. No allocation can be created twice for the same order.
6. Critical admin actions write an audit event.
7. Real-money acceptance remains gated by legal and operational readiness.
