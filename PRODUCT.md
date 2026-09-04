# PRODUCT.md — AnnaBer

**This is the Impeccable `init` product truth. Frozen from grill, curated for rebuild.**

## Product

- **Name:** AnnaBer
- **What:** Online English school for kids 7–16 (parents choose/pay, kids learn)
- **Tagline:** English that clicks for kids.
- **Hero headline (canonical copy):** Where kids actually enjoy learning English
- **Hero subheadline:** Fun, interactive lessons with real teachers that build confidence and fluency — from first words to full conversations.
- **CTA (universal):** Start learning (secondary: See how it works)

## Audience

- **Primary:** Parents of kids 7-16 (decision makers, see dashboard, progress, pricing)
- **Secondary:** Kids 7-16 (end users, need playful, game-like, low-pressure)
- **Implication:** SaaS-leaning polish for parents + playful bento/geometric joy for kids = "fun but not childish"

## Positioning & Competitors

- **Primary ref:** Novakid — polish, trust, lesson UX
- **Game feel:** Baamboozle — interaction, challenges
- **Content structure:** Test-English — drills, levels
- **Differentiator:** Real teachers + play + small groups (max 4) + parent dashboard

## Aesthetic (from `design-system/annaber/MASTER.md`)

- **Style family:** Claymorphism + Soft UI Evolution hybrid (rounded, soft shadows)
- **Mode:** Light only (`bg-gray-50` #F9FAFB page, `bg-white` cards)
- **Display font:** Fredoka 500-700, `tracking-tight` on hero, never for body
- **Body font:** DM Sans 400/500/700
- **Primary:** #3B82F6 (buttons, links), #2563EB hover, #1D4ED8 active
- **Accent:** #F97316 / #FB923C (warm highlights, secondary CTA)
- **Radius:** 8 / 12 / 16 / 24 / full (buttons = full, cards = lg/xl)
- **Shadows:** soft → md → lg → xl (no pure-black, tinted)
- **Transitions:** 200ms cubic-bezier(0.16, 1, 0.3, 1)
- **Icons:** Phosphor `@phosphor-icons/react` regular (fill only for active), Heroicons fallback

## Content Map (source: `.issues/tickets/02-landing-page-content-copy.md`)

1. **Hero** — badge "Online English for kids 7–16", dual CTA, right-side preview/illustration (to be replaced by 21st + parallax scrub)
2. **Benefits** — 5 cards: Real teachers / Learning through play / Track every step / Schedule that fits you / Small groups, big confidence (Phosphor icons)
3. **Pricing** — 3 tiers: Starter $29, Growth $79, Mastery $149 (placeholders, honest copy)
4. **How it works** — 3 steps: Book free trial → Meet teacher → Start learning + connecting gradient line
5. **Testimonials** — 3 parent quotes (Sarah 9, David 11, Maria 14) + star ratings + initials avatars
6. **FAQ** — 6 questions (ages, duration, cancel, teacher switch, BE/AE, free trial) accordion with aria-expanded
7. **Footer** — 4-col, tagline, links, hello@annaber.com, +1 (555) 123-4567, social IG/FB/YT/TikTok

## Stack & Constraints

- **Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 (`@theme inline` in `src/app/globals.css:3`) + GSAP + @gsap/react + Framer Motion + Phosphor
- **Fonts loaded:** `next/font/google` Fredoka + DM_Sans (`src/app/layout.tsx:5`)
- **Design contract precedence:** `DESIGN.md` via Open Design MCP > `design-system/annaber/MASTER.md` (fallback). Until OD MCP connected, MASTER.md is canonical.
- **No:** Auth/Supabase, dashboards, platform games/flashcards — landing only

## What "good" looks like (for critique/polish)

- Hero has parallax scrub (gsap ScrollTrigger `scrub: 1`, only transform/opacity), not static gradient
- Cards lift on hover (`shadow-md -translate-y-1`, `shadow-soft`), focus-visible rings, WCAG AA contrast
- Responsive: 375 single-col, 768 2-col, 1280 3-col, hero stacks on mobile
- Animations respect `prefers-reduced-motion` (`useReducedMotion()`)
- 21st components adapted to tokens, not pasted verbatim
