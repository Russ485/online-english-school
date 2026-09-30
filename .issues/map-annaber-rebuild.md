# Map: AnnaBer Rebuild — Full Landing Redo with 21st + Open Design

**Label:** wayfinder:map
**Status:** DONE — **усі тікети 00-10 CLOSED (2026-09-30, включно з 03 adaptive follow-up: F1 + adaptive DONE, F2 REJECTED)**. Нових тікетів не відкривається. Backlog: коміт docs+src (окремий go).
**Previous map:** map-annaber-landing.md (all 7 CLOSED, but implementation unsatisfactory — polished incorrectly, "скучненько")

## Destination

Rebuild the AnnaBer landing page from scratch on the same product concept, but with production-grade UI:
- Same product truth: AnnaBer, kids 7-16 + parents, SaaS-leaning playful but not childish, CTA "Start learning", competitor Novakid/Baamboozle
- Same stack: Next.js 16 + TypeScript + Tailwind v4 + GSAP + Phosphor + Framer Motion
- 7 sections rebuilt: Hero (parallax scrub), Benefits, Pricing, HowItWorks, Testimonials, FAQ, Footer
- Design contract: `DESIGN.md` via Open Design MCP is canonical when present; fallback is `design-system/annaber/MASTER.md`
- Daily cadence: **2× `21st get` per day (free tier)** — approval gate before each `get`
- Final quality: Impeccable polish + Playwright verification at 375/768/1280 + Code Review two-axis

## Workflow Order (approved 2026-08-31)

```
00 PRODUCT.md + DESIGN.md discovery (od)
→ 01 Playwright baseline (diagnostic screenshots of current "скучненько" build)
→ 02 Impeccable critique (P0/P1/P2 on baseline)
→ [LOOP] 03-06 21st rebuild (2/day, search → link → user ok → get → adapt)
→ 07 GSAP motion pass (parallax scrub)
→ 08 Impeccable polish
→ 09 Playwright verification (diff vs baseline)
→ 10 Code Review (Standards vs Spec)
```

**Constraint:** ONE TICKET AT A TIME, NO AUTO-ADVANCE without explicit `go / давай / ок`.

## Open Design Integration

- Open Design is **local-first AI workspace**, not Figma. Exposed via MCP/CLI.
- Canonical file: `DESIGN.md` (may also have `manifest.json`, `tokens.css`, components/assets).
- Discovery commands (preferred, do NOT hard-code paths):
  - `od project list --json`
  - `od files list <project-id> --json`
  - `od files read <project-id> DESIGN.md`
- Until MCP is connected (`opencode mcp list` shows 0 now), fallback to `design-system/annaber/MASTER.md`.
- When `DESIGN.md` attached, it overrides MASTER.md; page overrides go to `design-system/annaber/pages/<page>.md` only if needed.

## 21st Integration (free tier)

- Search is **free** (`21st search "<query>" --json --limit 10`). Always search before hand-writing.
- `21st get <id>` is **metered: 2/day** (`21st usage` = 2/2). `21st generate/iterate` also metered.
- **Approval gate (user request):** Before ANY `21st get`, present: `21st search` results + direct links `https://21st.dev/c/<id>` + preview, wait for user `ok` on specific id, then `get`.
- Daily slicing: Tickets 03-06 each consume max 2× `get`.

## Decisions (frozen from previous grill)

- Brand: AnnaBer, ages 7-16, light mode only, CTA "Start learning"
- Typography: Fredoka (display) + DM Sans (body) — confirmed in `MASTER.md`
- Colors: #3B82F6 primary, #F97316 accent, radius 8/12/16/24/full, 4-tier shadows
- Hero headline: "Where kids actually enjoy learning English" (from `02-landing-page-content-copy.md`)
- Visuals: abstract geometric, Phosphor icons, no stock photos

## Out of Scope (same as before)

- Auth / Supabase, dashboards, learning platform (tests/games/flashcards), admin panel

## Tickets

| # | File | Status | Depends on |
|---|------|--------|------------|
| 00 | `tickets-rebuild/00-product-init.md` | CLOSED | - |
| 01 | `tickets-rebuild/01-playwright-baseline.md` | CLOSED | 00 |
| 02 | `tickets-rebuild/02-impeccable-critique.md` | CLOSED | 01 |
| 03 | `tickets-rebuild/03-hero-parallax-21st.md` | **CLOSED (2026-09-30)** — web/desktop (2026-09-04) + F1 reduce-freeze + adaptive кнопки (grid max-w-md, verify 3/3 diff 0.00px); **F2 height-runway REJECTED** власником (відкочено, статус-кво) | 02 |
| 04 | `tickets-rebuild/04-benefits-21st.md` | CLOSED (2026-09-23, DIRECT EDIT, gradient-card hand-replicate) | 02 |
| 05 | `tickets-rebuild/05-pricing-howitworks-21st.md` | **CLOSED (2026-09-26)** — Pricing + HowItWorks DONE, анімація ітерація-3; REOPEN закрито: статичне зображення (варіант A clip-path mask), verify 2/2 (див. `## REOPEN` у тікеті) | 03,04 |
| 06 | `tickets-rebuild/06-testimonials-faq-footer-21st.md` | **CLOSED (2026-09-28)** — Testimonials DONE (get 822 MIT) + FAQ DONE (get 25011 intentui MIT) + Footer DONE **v3** (гігантський outline ANNABER, 0 get; прозорий stroke 30%, text-left, 16.5vw, layout-based позиціонування, verify 4/4) | 05 |
| 07 | `tickets-rebuild/07-gsap-motion-pass.md` | **CLOSED (2026-09-28)** — гібрид: Hero `useGSAP`-уніфікація (matchMedia-guard) + Benefits ScrollTrigger reveal DESIGN 7.2 (`start top 72%` власний вибір); FM entrances у Pricing/HowItWorks лишились; verify 4/4, 0 get | 06 |
| 08 | `tickets-rebuild/08-impeccable-polish.md` | **CLOSED (2026-09-29)** — contrast 14→2 (FP), focus-visible повний, токени accent-700/success-700, radius-ритм, Fredoka 500-700, FAQ aria, **LCP 375: 3040→200ms**, detect 0 findings; 0 get | 07 |
| 09 | `tickets-rebuild/09-playwright-verification.md` | **CLOSED (2026-09-30)** — регенерація baseline 3/3 (спека не чіпана; 21/24 blank = лімітація spec) + `verification/` 24/24 повні temp-спекою; текстовий diff vs 02-critique (baseline01/FINDINGS.md втрачені); К4 5/6 PASS; **F1 reduce-freeze `.hero-preview` + F2 hero row overflow (1280×800 → 161px) → defer 03-adaptive grill**; 0 get | 08 |
| 10 | `tickets-rebuild/10-code-review.md` | **CLOSED (2026-09-30)** — two-axis review (Standards/Spec parallel sub-agents) за fixed point `f6d95ea...HEAD` (29 файлів); 4/4 фікси: reduce-hydration Pricing/HowItWorks, Benefits frozen copy (periods), FAQ aria-controls conditional, checks → success-700; lint+build+temp-verify 5/5; Duplicated Code — accepted; 0 get | 09 |

> **03 adaptive (CLOSED 2026-09-30):** `Hero.tsx:1` web/desktop done (`h-[180vh] 12° [-370,70]`); F1 reduce-freeze DONE; adaptive = лише кнопки (grid `max-w-md` 1-col/2-col, кнопки `w-full justify-center`); **F2 (height 220/240vh) → REJECTED** власником — «завеликий відступ знизу», відкочено повністю. Деталі — Resolution у тікеті + HANDOFF `Resolution 03 / adaptive closing`.

## Workflow — як домовились (Hero → Benefits — один і той самий)

**Взірець не чіпати → прототип окремо → консолідація → видалити зайве → Build → STOP**

1. Взірець `Benefits.tsx:1` не чіпаємо → `BenefitsPrototype.tsx` (+ `BenefitsFinal.tsx` якщо треба), `page.tsx` SWITCH `Hero/BenefitsPrototype/Final` для ітерацій.
2. 21st `search --json → links https://21st.dev/c/<id> → ok → get` (tickets 03-06, 2/day, gate) або ручний дизайн.
3. Playwright `baseline.spec.ts` + scroll-скріни **за потреби** (на Hero — 4 папки `hero-*` видалено, baseline to be regenerated at 09).
4. Консолідація прототипу в основний (`Prototype → Benefits.tsx`), видалити зайві файли/скріни, `page.tsx` чистий, Build ✓ → STOP → чекай `go`.
5. **Skills порядок:** `impeccable` (00 init + 02 critique → 08 polish) → `21st-cli-use` (03-06) → `gsap*` (03+07 scrub) → `playwright-core` (01+09 + діагностика) → `ui-ux-pro-max/high-end-visual-design` (опційно на BEFORE START) → `code-review` (10).

Notes:
- 04 can run parallel to 03 after 02, but per ONE-TICKET rule will be sequential (03 → 04).
- `opencode mcp add` for Open Design should be done during 00 if user provides MCP endpoint.
- **04 outcome (2026-09-23):** CLOSED via **DIRECT EDIT** — prototype/page-SWITCH workflow відхилено користувачем; прецедент для 05+. Framer Motion для hover-мікроанімацій у секціях (GSAP лише Hero scrub + 07). 21st gradient-card id 5514 REJECTED (license empty) — не пропонувати знову.
