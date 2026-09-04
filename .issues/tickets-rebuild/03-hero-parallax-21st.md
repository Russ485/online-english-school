# Ticket 03: Hero Parallax Rebuild via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** IN_PROGRESS — PARTIAL (web/desktop done, mobile/tablet adaptive follow-up)
**Blocked by:** 02-impeccable-critique.md

## Question

Rebuild Hero with parallax scrub using a 21st component.

## Tasks — WITH APPROVAL GATE (mandatory per user)

1. **Search (free):**
   - `21st search "playful hero kids parallax scrub" --type c --limit 10 --json > /tmp/21st-hero.json` (also try queries: "hero parallax", "landing hero playful", "hero with illustration")
   - Print top 3-5 results: name, author/slug, description, link `https://21st.dev/c/<id>`.

2. **Present & WAIT:**
   - Send user: search results + links (`https://21st.dev/<user>/<slug>` or `https://21st.dev/c/<id>`) + `21st get <id> --json` is NOT run yet.
   - Explicitly ask: "Обрав X, Y, Z — дай ok на id для `21st get`".

3. **After user `ok` on specific id:**
   - `21st get <approved-id> --json` (consumes 1/2 free quota Day1)
   - Adapt to project: Tailwind v4, Fredoka/DM Sans, #3B82F6/#F97316, keep CTA "Start learning" + "See how it works", `DESIGN.md` tokens if present else `MASTER.md`
   - Add GSAP ScrollTrigger scrub: `gsap.registerPlugin(ScrollTrigger)`, parallax on bg shapes (`yPercent`, `scrub: 1`), respect `useReducedMotion()`

4. **Discovery:** Before search, read canonical design contract: `od files read <id> DESIGN.md` if OD connected, else `design-system/annaber/MASTER.md:1`.

## Acceptance Criteria

- Search results presented with links, user ok received before get
- Hero rebuilt, parallax scrub works at 1280, not broken at 375, reduced-motion respected
- Build passes

---

## Resolution — PARTIAL (web/desktop) — 2026-09-04

**21st 1503 Hero Parallax (`1/2` quota):** `npx @21st-dev/cli search` → links `https://21st.dev/c/<id>` → user `ok` → `npx @21st-dev/cli get 1503 --json` → adapted to AnnaBer (15 Unsplash placeholders, Tailwind v4, Fredoka/DM Sans, #3B82F6/#F97316, CTA "Start learning").

**HeroFinal → Hero (`src/components/sections/Hero.tsx:1`, canonical, `src/app/page.tsx:1` clean):**

*   21st tilt: `rotateX/Z 12° [0,0.2]` + `translateY [-370,70]` `h-[180vh]` `perspective:1000` (`Hero.tsx:182-186`) — швидко вирівнюється, всі 3 ряди в кадрі з gap до `Benefits` (~80px up fix).
*   Text: `z-20` `pt-16 md:pt-20` + `translate-y-8` (`Hero.tsx:257-259`) — трохи нижче центру, картки не чіпає.
*   No blur over grid: `Hero.tsx:300` gradient removed (was `h-16 bg-gradient-to-b from-gray-50`).
*   Light hover: `Hero.tsx:128` `from-gray-900/35` `bg-black/30` + `transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl` (was `from-gray-900/60 opacity-80` `bg-black opacity-80` + `hover:-translate-y-1 shadow-2xl` causing x-slide).
*   Scroll-only rows: `translateX [0,1000]` row1+3 праворуч, `translateXReverse` row2 ліворуч (`Hero.tsx:163-167`) — без hover-auto.
*   Cyclic: `[...row,...row]` duplication 2× (`Hero.tsx:242`) — немає порожніх полів.
*   GSAP blobs: `hero-blur-1/2` `yPercent -18/-10 scale 1.06/1.04 scrub:1` (`Hero.tsx:208-224`), `useReducedMotion()` guard, DESIGN.md 7.1.
*   Image fix: `Conversations — 14-16` `1489710437720... 404 → 1522202176988...` verified 200 (`Hero.tsx:88`).

**Build:** `npm run build` ✓ (Next.js 16.3.3 Turbopack).

**Evidence:** Screenshots `screenshots/hero-*` cleaned (user request #2). Baseline `screenshots/baseline/` to be regenerated at Ticket 09 verification.

**Follow-up (adaptive):** Web/desktop done and kept as `Hero.tsx`. Mobile 375 / tablet 768 — sizes (`lg:h-80` etc), `top/mt`, row visibility not fully tuned. Requires dedicated grill session to define mobile layout, then separate ticket (e.g. `03a-hero-adaptive`). Ticket 03 kept `IN_PROGRESS — PARTIAL` per user choice #3 (second variant: partially resolved).
