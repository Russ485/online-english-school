# Ticket 07: GSAP Motion Pass (Parallax Scrub + Stagger)

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 06-testimonials-faq-footer-21st.md

## Question

Unify motion: parallax scrub Hero + ScrollTrigger stagger reveals.

## Tasks

- `gsap.registerPlugin(ScrollTrigger)` scoped via `gsap.context`
- Hero: scrub parallax on bg shapes/illustration (`scrub: 1`, `yPercent` / `scale`), check `ui-ux-pro-max --domain gsap` for `--motion 8` snippet
- Benefits/Pricing/HowItWorks: ScrollTrigger staggered reveal (0.1-0.2s), only transform/opacity
- Respect `prefers-reduced-motion` (`useReducedMotion()` from `framer-motion`), disable ScrollTrigger if reduced
- Verify at 375/768/1280, no layout shift, no pin overflow

## Acceptance Criteria

- Motion consistent, performance clean (no layout/reflow), reduced-motion respected

---

## Resolution

(TODO)
