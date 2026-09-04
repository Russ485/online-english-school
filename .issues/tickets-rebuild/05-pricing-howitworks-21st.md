# Ticket 05: Pricing + HowItWorks via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 03-hero-parallax-21st.md, 04-benefits-21st.md

## Question

Rebuild Pricing (3 tiers $29/$79/$149) and HowItWorks (3 steps) via 21st — Day2 quota.

## Tasks — WITH APPROVAL GATE (two searches, two gets)

1. Pricing: `21st search "pricing table 3 tiers popular badge" --type c --limit 10 --json` → present links → wait ok → `21st get <id>` (Day2 quota 1/2)
2. HowItWorks: `21st search "how it works steps timeline" --type c --limit 10 --json` → present links → wait ok → `21st get <id>` (Day2 quota 2/2)
3. Adapt: keep 3 pricing tiers + 3 steps copy, tokens from `DESIGN.md`/`MASTER.md`, no hard-coded colors.
4. If user rejects a search result, re-search with narrower query (`--tag`, `--color`) and re-present.

## Acceptance Criteria

- Both components approved before get
- Pricing popular card highlighted (primary blue), FAQ? not here.

---

## Resolution

(TODO)
