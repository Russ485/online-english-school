# Ticket 06: Testimonials + FAQ + Footer via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 05-pricing-howitworks-21st.md

## Question

Rebuild remaining sections via 21st — Day3 quota.

## Tasks — WITH APPROVAL GATE

1. `21st search "testimonial carousel quotes" --type c --limit 10 --json` + `21st search "faq accordion" --type c --limit 10 --json` + `21st search "footer 4 column" --type c --limit 10 --json`
2. Present links, wait for user `ok` per component. On free tier, pick max 2 gets for this ticket: prioritize Testimonials + FAQ (Footer can be adapted from existing `src/components/sections/Footer.tsx:1` if quota tight — ask user).
3. After ok: `21st get <id>` ×2, adapt: 3 quotes with star ratings, 6 FAQ accordion (aria-expanded), 4-col footer.

## Acceptance Criteria

- Approval gate followed, quota respected
- FAQ aria-expanded, focus-visible rings

---

## Resolution

(TODO)
