# Vercel Deployment Configuration

## Web project

Repository: `DATA-TRUST-G/DATA-TRUST-G`

Root Directory:

`apps/web`

Framework: Next.js

Install Command:

`cd ../.. && pnpm install --no-frozen-lockfile`

Build Command:

`cd ../.. && pnpm --filter @datatrust/web build`

Output Directory: `.next`

Production Branch: `main`

## Required web environment variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Never add Supabase secret/service-role keys to `NEXT_PUBLIC_*` variables.

## Deployment topology

`feature branch → Vercel Preview → QA → pull request → main → Production`

The repository also contains `apps/app` and `apps/admin`. They should be deployed as separate Vercel projects using the same Git repository, with root directories `apps/app` and `apps/admin` respectively, once the Vercel account/project connection is available.

## Current integration status

The connected Vercel account currently exposes no teams/projects to the deployment connector. No production deployment is claimed until the Vercel project is actually created/imported and its build succeeds.
