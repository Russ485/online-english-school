# Ticket 01: Playwright Baseline (Diagnostic)

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 00-product-init.md

## Question

Take diagnostic screenshots of the CURRENT build ("скучненько" state) at 3 breakpoints to provide evidence for critique.

## Tasks

- `npm run build` must pass before screenshots
- Run `npx playwright install` if needed, use `playwright-core` skill patterns
- Screenshots via Playwright at:
  - Mobile 375×800
  - Tablet 768×1024
  - Desktop 1280×800
- Capture each of 7 sections: Hero, Benefits, Pricing, HowItWorks, Testimonials, FAQ, Footer
- Save to `screenshots/baseline/` (create dir)
- Document findings: what looks "скучненько" (generic gradient, no parallax, static cards)

## Acceptance Criteria

- Screenshots exist at 3 breakpoints
- Build passes
- Findings listed for Ticket 02 critique input

## 21st Approval Gate

- N/A for this ticket.

---

## Resolution

(TODO)
