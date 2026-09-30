# Ticket 03: Hero Parallax Rebuild via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-30) — web/desktop (2026-09-04) + F1 reduce-freeze (2026-09-30) + adaptive кнопки (2026-09-30); F2 height → REJECTED власником (відкочено)
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

## Resolution — web/desktop (2026-09-04; тоді статус PARTIAL)

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

**Follow-up (adaptive):** Web/desktop done and kept as `Hero.tsx`. Mobile 375 / tablet 768 — sizes (`lg:h-80` etc), `top/mt`, row visibility not fully tuned. Requires dedicated grill session to define mobile layout, then separate ticket (e.g. `03a-hero-adaptive`). Ticket 03 kept `IN_PROGRESS — PARTIAL` per user choice #3 (second variant: partially resolved). **→ Закрито 2026-09-30 — див. наступну секцію `Resolution — 03 adaptive closing`.**

---

## Resolution — 03 adaptive closing (2026-09-30) — CLOSED

**Workflow:** DIRECT EDIT `src/components/sections/Hero.tsx` (єдиний src-файл), грил-рішення затверджені наперед (сесія 1), 2 сесії: F1+грил (сесія 1), F2+adaptive+closing (сесія 2). Skills: `playwright-core`. **0 × 21st get.** `tests/baseline.spec.ts` не чіпаний.

### F1 — reduce-freeze `.hero-preview` (DONE, верифіковано 2/2, сесія 1)

- `Hero.tsx:287` прибрано reduce-ternary → завжди `style={{ rotateX, rotateZ, translateY, opacity }}`; `.hero-preview` + `motion-reduce:opacity-100! motion-reduce:transform-none!` (CSS media → SSR=клієнт, прецедент 06/gotcha 20).
- ProductCard ternary (`Hero.tsx:131` `style={reduce ? undefined : {x: translate}}`) **лишився** — рішення A-мінімум (див. gotcha 21 нижче / HANDOFF).
- Verify (сесія 1): lint ✓ build ✓; temp-спека 2/2 — reduce: opacity 1 / transform none / статично після скролу / картки статичні / 0 console errors; normal: паралакс живий 0.2→>0.9→0.2.

### F2 — height runway (REJECTED власником, повністю відкочено)

- **Виконано (варіант A):** `h-[180vh]` → `h-[220vh] lg:h-[240vh]` + тайттенінг ряди `mb-6 md:mb-8` → `mb-6`, preview `md:mt-10` → прибрано. Верифіковано **13/13**: 12 гео-комбо `rowsBottom(document) ≤ sectionBottom` на 375/768/1280 × {667,700,800,1024} чисті; **модель підтверджена точно**: contentBottom = layout + settled translateY 70 → **1345 / 1454.6 / 1577** → пороги чистоти **612 / 661 / 657** (найгірші запаси 768×667 = −12.8px, 1280×667 = −23.8px); no `.pin-spacer`, `scrollHeight 5910→5910`.
- **Відкат (рішення власника):** «дуже завеликий відступ знизу, так було краще і в цілому все було видно — себе не виправдало». Hero повернуто до `h-[180vh]` + `mb-6 md:mb-8` + `mt-8 md:mt-10`; git diff Hero містить лише F1 + adaptive. **Обрізка рядів на малих vh (таблиця Resolution 09) лишається статус-кво.**
- REJECTED (не пропонувати знову): зміна translateY [-370,70]; bottom-fade маска (суперечить рішенню 03 «gradient прибрано»); лише-tighten без height; height-runway взагалі («завеликий відступ»).

### Adaptive — лише кнопки (DONE, верифіковано 3/3, сесія 2)

- `.hero-cta`: `flex flex-wrap items-center justify-center gap-4` → **`mx-auto grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2`**; обидві кнопки + **`w-full justify-center`** (копірайт/стилі кнопок frozen без змін). sizes/top/mt/3 ряди карток — не чіпались.
- Verify: lint ✓ build ✓; temp-спека **3/3**: ширина обох кнопок **diff = 0.00px** (±0.5 субпіксель) — 375 → **343/343** stacked full-width, 768 → **216/216**, 1280 → **216/216** (було нерівні 175/202); `scrollWidth ≤ w+1` ✓. Скріни before/after 375/768 показані власнику.
- REJECTED (з грилу, не пропонувати): `flex-1` у max-w-2xl (завеликі); `min-w-[210px]`; fixed `w-[210px]`.

### Gotcha (додані при closing)

- **(21) ProductCard ternary = dev-only hydration badge:** reduce-клієнт `style={{}}` (ternary → undefined) ≠ сервер `style={{transform:"none"}}` (reduce=null → FM identity) → Next devtools показує червоний «1 Issue» у **dev**; **prod React мовчки ігнорує** attribute-mismatch (gotcha 06/20) → 0 console errors. Відомий F1-residual (A-мінімум) — не чіпати без ок.
- **(22) `reuseExistingServer` переиспользує ЗОВНІШНІЙ dev-сервер** на :3000 (доказ сесії: `.next/dev` mtime під час роботи) → перед прогоном перевіряти не лише вільність порта, а ЩО за процес його тримає (`node … next dev` → вбити).
- **(23) Sticky у Hero інертний:** `overflow-hidden` на секції = scrollport що не скролиться → `sticky top-0` ніколи не піниться (`stickyTop@mid = −scrollY`). Pre-existing (не регресія F2); затверджена модель F2 `cut = contentBottom − sectionBottom` саме для статичного скролу. Міняти — тільки з ок (змінює поведінку всього hero).
