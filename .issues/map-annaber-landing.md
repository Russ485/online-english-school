# Map: AnnaBer Landing Page

**Label:** wayfinder:map

## Destination

A fully designed and implemented responsive landing page for AnnaBer — an online English school for kids 7–16. Light mode, modern SaaS-leaning aesthetic with playful elements. 7 sections (Hero, Benefits, Pricing, How it works, Testimonials, FAQ, Footer). Design system → visual implementation → polish. Stack: Next.js + Tailwind CSS.

## Notes

- **Brand:** AnnaBer
- **Target:** kids 7–16, parents choosing for them
- **Aesthetic:** modern SaaS-leaning, light mode, playful but professional
- **CTA:** "Start learning"
- **Competitor references:** Novakid (primary), Baamboozle (game feel), Test-English (content structure)
- **Skills to use:** ui-ux-pro-max (design system), design-taste-frontend (implementation), gsap (animations), impeccable (polish)
- **Stack:** Next.js, Tailwind CSS, GSAP
- **Hero headline direction:** benefit-driven ("Where kids actually enjoy learning English" style)

> **ARCHIVED — tickets moved to `tickets-legacy/` (2026-08-31). Active map is `map-annaber-rebuild.md`.**

## Decisions so far

- [Design System Generation](tickets-legacy/01-design-system-generation.md) — Fredoka (display) + DM Sans (body), blue primary (#3B82F6) + coral accent (#F97316), Claymorphism + Soft UI Evolution hybrid, radius scale 8-24px + full, 4-tier shadow system, 200ms transitions
- [Landing Page Content Copy](tickets-legacy/02-landing-page-content-copy.md) — All 7 sections written: hero ("Where kids actually enjoy learning English"), 5 benefits, 3 pricing tiers ($29/$79/$149), 3-step how it works, 3 testimonials, 6 FAQ, footer with contacts
- [Visual Assets Strategy](tickets-legacy/03-visual-assets-strategy.md) — Abstract geometric illustration for hero, Phosphor icons for benefits/steps, no stock photos, placeholder avatars for testimonials
- [Next.js Project Setup](tickets-legacy/04-nextjs-project-setup.md) — Next.js 16 + Tailwind v4, Fredoka + DM Sans, Phosphor/GSAP/Framer Motion installed, component structure ready
- [Landing Page Implementation](tickets-legacy/05-landing-page-implementation.md) — All 7 sections built: Hero, Benefits (5 cards), Pricing (3 tiers), How it works (3 steps), Testimonials (3 quotes), FAQ (6 accordion), Footer. Build passes.
- [GSAP Animations & Motion](tickets-legacy/06-gsap-animations.md) — Hero entrance timeline, ScrollTrigger staggered reveals on Benefits/Pricing/HowItWorks, reduced-motion respected, hover states on all interactive elements
- [Impeccable Polish Pass](tickets-legacy/07-impeccable-polish.md) — Focus-visible rings on all buttons, aria-expanded on FAQ, WCAG AA contrast verified, responsive confirmed, build clean

## Not yet specified

<!-- All decisions resolved — map complete -->

## Out of scope

- Authentication / Supabase integration
- Student/teacher dashboards
- Online learning platform (tests, games, flashcards)
- Admin panel
