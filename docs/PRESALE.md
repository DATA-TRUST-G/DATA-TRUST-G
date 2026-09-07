# DataTrust Presale — Canonical Configuration Contract

The Phase I presale interface must consume presale terms from centralized configuration. No price, round, accepted asset, network, receiving address or allocation constant may be duplicated in UI components.

## Current configuration status

The repository currently has no source-supported presale price, round, accepted assets, supported networks, or receiving routes encoded as operational values.

Therefore the presale surface must remain explicit about `CONFIGURATION_REQUIRED` until canonical values are supplied and legally/operationally cleared.

## Required values before live funds

- round identifier
- price and unit
- accepted assets
- supported networks
- receiving route/address per asset/network
- allocation formula
- eligibility/restrictions
- payment window/expiry
- applicable disclosures

## Non-negotiable workflow

CREATED → AWAITING_PAYMENT → PAYMENT_SUBMITTED → UNDER_REVIEW → CONFIRMED → DTR_ALLOCATED

Alternative terminal/exception states: EXPIRED, REJECTED, FLAGGED, CANCELLED.

A transaction hash submitted by an investor is never treated as payment confirmation by itself.
