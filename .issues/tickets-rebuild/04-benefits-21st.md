# Ticket 04: Benefits Cards via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 02-impeccable-critique.md
**Note:** Sequential after 03 per ONE-TICKET rule, but technically independent.

## Question

Rebuild Benefits (5 cards) using a 21st component.

## Tasks — WITH APPROVAL GATE

1. `21st search "feature card bento playful" --type c --limit 10 --json` (+ alternative: "benefits grid", "feature grid kids")
2. Present top results with links `https://21st.dev/c/<id>`, wait for user `ok` on id.
3. After `ok`: `21st get <approved-id>` (consumes 2/2 free quota Day1), adapt 5 cards (Real teachers / Learning through play / Track every step / Schedule / Small groups) with Phosphor icons (`@phosphor-icons/react` — check if 21st component uses lucide, swap to Phosphor).
4. Respect `DESIGN.md` or `MASTER.md` tokens: radius-lg 16px, shadow-soft, hover lift.

## Acceptance Criteria

- Approval gate followed
- 5 cards match content from `02-landing-page-content-copy.md:28`
- Responsive: 1-col mobile, 2-col tablet, 3-col desktop (or bento variant if user approved)

---

## Resolution

(TODO)
