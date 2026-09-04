# Ticket: GSAP Animations & Motion

**Label:** wayfinder:task
**Map:** map-annaber-landing.md
**Blocked by:** 05-landing-page-implementation.md
**Status:** CLOSED

## Resolution

Animations implemented:
- Hero: GSAP timeline entrance (badge → title → subtitle → CTA → card, staggered)
- Benefits: ScrollTrigger staggered reveal (5 cards, 0.1s stagger)
- Pricing: ScrollTrigger staggered reveal (3 cards, 0.15s stagger)
- How it works: ScrollTrigger sequential reveal (3 steps, 0.2s stagger)
- All sections respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()`
- Hover states: button lift/shadow, card lift on all interactive elements
- FAQ: CSS transition accordion (no GSAP needed)
- Performance: only transform/opacity animated, ScrollTrigger scoped to section containers
