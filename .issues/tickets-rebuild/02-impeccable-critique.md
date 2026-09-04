# Ticket 02: Impeccable Critique (P0/P1/P2)

**Label:** wayfinder:grilling
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** 01-playwright-baseline.md

## Question

Heuristic critique of the baseline build at 375/768/1280.

Score: hierarchy, contrast, spacing (py-16 md:py-24, p-6 md:p-8), accessibility (focus-visible, aria-expanded), motion (ScrollTrigger), responsive.

## Tasks

- If `impeccable` skill has `critique` script, run it; otherwise manual audit using `ui-ux-pro-max` checklist + `MASTER.md` tokens
- Use baseline screenshots from Ticket 01 as evidence
- Produce P0 (blocker), P1 (important), P2 (nice-to-have) list with screenshots refs
- Specifically call out: Hero lack of parallax scrub, Benefits card rhythm, Pricing visual hierarchy

## Acceptance Criteria

- Finding list written (P0/P1/P2) with line refs (e.g., `src/components/sections/Hero.tsx:27`)
- Ready for Ticket 08 polish

---

## Resolution

**Status: DONE 2026-09-01 — manual audit vs DESIGN.md (OD ba33a560...) + baseline screenshots (Ticket 01)**

- **Report:** `.impeccable/critique/annaber-baseline-02.md` (full Nielsen 10 heuristics, specificity verdict, P0/P1/P2, persona red flags)
- **Screenshots:** `screenshots/baseline/*-full.png` + per-section (24 files), `FINDINGS.md`
- **Health Score:** 18/32 (56% Acceptable, 2 heuristics n/a) — see report for table
- **P0 blockers (3):** Hero без parallax scrub (`Hero.tsx:26`), Hero preview hidden на mobile (`Hero.tsx:56 hidden lg:block`), Pricing hierarchy зламана (`Pricing.tsx:92 ring-primary-500` vs spec `ring-primary-200` + accent CTA)
- **P1 majors (6):** Benefits не bento 2+3 (`Benefits.tsx:86`), HowItWorks лінія статична (`HowItWorks.tsx:67`), CTA економіка порушена (`Hero.tsx:44`), Fredoka 400 (`layout.tsx:8`), FAQ без default open (`Faq.tsx:40`), motion guards неповні
- **P2 minors (5):** radius/shadow, icons 32px, Testimonials без reveal, Footer `text-primary-400` missing token, Hero spacing `py-20`
- **Next:** інпут для Ticket 08 polish + Tickets 03-06 21st rebuild (Hero/Benefits/Pricing/HowItWorks+)
- **AC виконано:** finding list з line refs + screenshot refs готовий для Ticket 08
