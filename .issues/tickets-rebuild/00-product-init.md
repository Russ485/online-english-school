# Ticket 00: Product Init + DESIGN.md Discovery

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** OPEN
**Blocked by:** -

## Question

Initialize the rebuild's product truth and design contract.

**This is the Impeccable `init` + Open Design discovery step.**

## Tasks

1. **OD discovery (preferred):**
   - Run `od project list --json` and `od files list <project-id> --json` via CLI or via Open Design MCP (if connected).
   - If MCP not connected (`opencode mcp list` = 0), record that and fallback to filesystem.
   - Try `od files read <project-id> DESIGN.md` (or read `DESIGN.md` if found via glob).
   - Record result in ticket resolution: is `DESIGN.md` canonical present or not?

2. **Fallback check:**
   - Check filesystem for `DESIGN.md` (`Glob **/DESIGN.md`) and `PRODUCT.md`.
   - Current state: `design-system/annaber/MASTER.md` exists, no `DESIGN.md`, no `PRODUCT.md` found (verified 2026-08-31).

3. **Create `PRODUCT.md` at project root:**
   - Product: AnnaBer — online English school for kids 7-16 (parents decide)
   - Aesthetic: SaaS-leaning, playful but not childish, light mode only, modern (Claymorphism + Soft UI hybrid from MASTER.md)
   - CTA: "Start learning" everywhere
   - Competitors: Novakid (primary polish ref), Baamboozle (game feel), Test-English (content structure)
   - Content source: `.issues/tickets/02-landing-page-content-copy.md` (7 sections copy)
   - Stack: Next.js 16 + Tailwind v4 + GSAP + Phosphor + Framer Motion
   - Why: Impeccable `init` requires HITL product truth — this file is that truth.

4. **Decide on `DESIGN.md` vs `MASTER.md`:**
   - If `DESIGN.md` found via `od` → it is canonical, keep `MASTER.md` as fallback, do NOT duplicate.
   - If not found → `MASTER.md` remains canonical, note that a `DESIGN.md` should be created via Open Design later (`od` project) or explicitly requested.
   - Do NOT create a duplicate `DESIGN.md` manually unless discovered path exists.

5. **Update `AGENTS.md` hands-off section** (if needed) with OD contract and workflow order.

## Skills

- `impeccable` (init) — `node .opencode/skills/impeccable/scripts/context.mjs` if exists (check — skill may be at `C:\Users\russd\.agents\skills\impeccable` or via opencode plugin)
- Open Design MCP/CLI (`od`) for discovery

## Acceptance Criteria

- `PRODUCT.md` exists at project root with AnnaBer truth (curated from grill answers, not placeholder)
- OD discovery result documented (MCP connected or not, DESIGN.md present or not, path noted)
- No hard-coded OD paths — discovery via `od` preferred
- Ticket resolution written, ticket marked CLOSED

## Notes for 21st Approval Gate (future tickets)

- For tickets 03-06, before `21st get <id>`: run `21st search "<query>" --json --limit 10`, present links `https://21st.dev/c/<id>` + `21st get <id> --json` preview is NOT run until user says `ok` for that id.
- This gate is enforced in 03-06, not here.

---

## Resolution

**Executed 2026-08-31 (Ticket 00 CLOSED):**

- **OD discovery:** Ran `od --help` → command not found (collides with Unix `od`), tried `npx @opencode/od` → E404, `opencode mcp list` → "No MCP servers configured" (see bash logs). Open Design MCP **not connected yet** — user installed OD locally but endpoint not added via `opencode mcp add`. Recorded as pending.
- **Filesystem check:** `Glob **/DESIGN.md` → no file; `Glob **/PRODUCT.md` → no file before; `design-system/annaber/MASTER.md:1` exists and is canonical fallback (verified via `node -e`).
- **Created `PRODUCT.md:1`** with full product truth: AnnaBer 7-16 + parents, CTA "Start learning", Fredoka/DM Sans, #3B82F6/#F97316, 7 sections copy refs, stack Next.js 16 + Tailwind v4 + GSAP, design precedence `DESIGN.md > MASTER.md`.
- **Decision `DESIGN.md` vs `MASTER.md`:** No `DESIGN.md` yet — do NOT create duplicate manually. `MASTER.md` remains canonical until `od project list --json` / `od files read <id> DESIGN.md` succeeds. When MCP connected, `DESIGN.md` will override MASTER.md.
- **Updated `AGENTS.md:10`** with Product, Design Contract (od discovery commands, no hard-coded paths), Workflow map-annaber-rebuild.md, 21st integration (2/day) + **approval gate** (search → link → ok → get), Commands, Stack Notes. Preserved `<!-- BEGIN:nextjs-agent-rules -->` block.

**Next:** Ticket 01 needs `od` endpoint from user (if wants to connect MCP now) or proceeds with MASTER.md fallback. User's existing MASTER.md left untouched — no fix needed now.
