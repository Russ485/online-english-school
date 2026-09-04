<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Product

See `PRODUCT.md:1` — AnnaBer, kids 7-16 + parents, SaaS-leaning playful but professional, light only, CTA "Start learning". Competitors: Novakid/Baamboozle/Test-English. Content source: `.issues/tickets/02-landing-page-content-copy.md:1`.

## Design Contract (Open Design) — INTEGRATED 2026-08-31

- **Canonical:** `DESIGN.md` via Open Design MCP — **connected** (`id: ba33a560-5e9c-4520-a6ef-ca19c36b798e`, name: `AnnaBer Design System`, workspace: `jffhe3b1nf0c9gn75wzk45qm`, linkedDir: `D:\programming\NextJs projects\online_school`). Verified via `open-design_list_projects` + `open-design_list_files` + `open-design_get_file`. Overrides `design-system/annaber/MASTER.md:1`.
- **Fallback:** `design-system/annaber/MASTER.md` — keep as archive, not deleted (user decision 2026-08-31). Do NOT edit MASTER.md unless DESIGN.md explicitly changes tokens.
- **Files in OD (read-only via MCP):** `DESIGN.md` (25130 bytes, 9 sections, motion 7.1/7.2), `tokens.css` (4038 bytes, @theme inline), `manifest.json` (components: Button/Card/Input/Badge, lightOnly:true). Source: `C:\Users\russd\AppData\Roaming\Open Design\namespaces\release-stable-win\data\projects\ba33a560-...`
- **Tokens live in** `src/app/tokens.css:1` (copied from OD) + imported in `src/app/globals.css:2` via `@import "./tokens.css"` + `src/app/layout.tsx:5` (`next/font` Fredoka/DM Sans). Build verified 2026-08-31 (`npm run build` ✓ 8.2s).
- **Discovery:** Use `open-design_list_projects` / `open-design_list_files(project="<id>")` / `open-design_get_file(project="<id>", path="DESIGN.md")` — MCP is connected (open-design server exposes `od://design-systems/*`). Shell `od` binary is Unix `od` (Git Bash conflict) — do NOT use `od` in bash.

## Workflow — map-annaber-rebuild.md

**Order (approved 2026-08-31, ONE TICKET AT A TIME, NO AUTO-ADVANCE):**
`00 PRODUCT.md + DESIGN.md discovery → 01 Playwright baseline (375/768/1280) → 02 Impeccable critique (P0/P1/P2) → 03-06 21st rebuild (2/day, see below) → 07 GSAP motion (parallax scrub) → 08 Impeccable polish → 09 Playwright verification → 10 Code Review`

Previous map `.issues/map-annaber-landing.md:1` is CLOSED (implementation unsatisfactory); active map is `.issues/map-annaber-rebuild.md:1`.

## 21st Integration (free 2/day)

- **Auth:** `21st login` or `21st_sk_` via `TWENTYFIRST_TOKEN`. Check `npx @21st-dev/cli usage` (free: 2/2 today).
- **Search is free:** `npx @21st-dev/cli search "<query>" --type c --limit 10 --json` — ALWAYS search before hand-writing.
- **Get is metered:** `npx @21st-dev/cli get <id> --json` consumes quota. `generate`/`iterate` also metered.
- **⚠️ Approval gate (user mandate):** Before ANY `21st get`, present search results + links `https://21st.dev/c/<id>` (or `https://21st.dev/<user>/<slug>`) and WAIT for explicit `ok` on that id. Never `get` without ok. Applies to tickets 03-06.

## Commands

- `npm run dev` / `npm run build` / `npm start`
- `npx @21st-dev/cli search "<query>" --type c --limit 10 --json`
- `npx @21st-dev/cli get <id> --json` (after ok)
- `npx @21st-dev/cli usage` (quota)

## Stack Notes

- Next.js 16 App Router, Tailwind v4 (`@import "tailwindcss"`), GSAP 3.15 + @gsap/react 2.1, Phosphor 2.1, Framer Motion 13.
- Animate only `transform`/`opacity`; respect `useReducedMotion()`; `gsap.context` scoping.
