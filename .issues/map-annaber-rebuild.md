# Map: AnnaBer Rebuild — Full Landing Redo with 21st + Open Design

**Label:** wayfinder:map
**Status:** ACTIVE
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
| 01 | `tickets-rebuild/01-playwright-baseline.md` | OPEN | 00 |
| 02 | `tickets-rebuild/02-impeccable-critique.md` | OPEN | 01 |
| 03 | `tickets-rebuild/03-hero-parallax-21st.md` | OPEN | 02 |
| 04 | `tickets-rebuild/04-benefits-21st.md` | OPEN | 02 |
| 05 | `tickets-rebuild/05-pricing-howitworks-21st.md` | OPEN | 03,04 |
| 06 | `tickets-rebuild/06-testimonials-faq-footer-21st.md` | OPEN | 05 |
| 07 | `tickets-rebuild/07-gsap-motion-pass.md` | OPEN | 06 |
| 08 | `tickets-rebuild/08-impeccable-polish.md` | OPEN | 07 |
| 09 | `tickets-rebuild/09-playwright-verification.md` | OPEN | 08 |
| 10 | `tickets-rebuild/10-code-review.md` | OPEN | 09 |

Notes:
- 04 can run parallel to 03 after 02, but per ONE-TICKET rule will be sequential (03 → 04).
- `opencode mcp add` for Open Design should be done during 00 if user provides MCP endpoint.
