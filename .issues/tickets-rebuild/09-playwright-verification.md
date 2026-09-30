# Ticket 09: Playwright Verification

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-30)
**Blocked by:** 08-impeccable-polish.md

## Question

Final visual verification vs baseline.

## Tasks

- Screenshots at 375/768/1280 after polish, save to `screenshots/verification/`
- Diff vs `screenshots/baseline/` from Ticket 01 (manual or `playwright` expect)
- Check: no cut-off text, no wrong spacing, animations don't break layout, Hero parallax intact
- Report pass/fail

## Acceptance Criteria

- Screenshots at 3 breakpoints, diff documented

---

## Resolution

**Status: CLOSED 2026-09-30** (go користувача). Skills: `playwright-core`. Workflow: run spec + temp-спеки (писати → run → видалити) + docs, **без правок src**. **0 × 21st get.** Grilling — ні. `tests/baseline.spec.ts` **не редагувався**.

**⚠️ Стан на старт:** стартові `screenshots/baseline/` (24 PNG, Ticket 01) + `FINDINGS.md` **втрачені** (`screenshots/` gitignored `.gitignore:44`, у git їх ніколи не було; перший реальний коміт `f6d95ea` 2026-09-04 уже містить перебудований Hero → «скучненько» стан не реконструюється). Затверджено користувачем: **diff = текстовий** («старт» = `.impeccable/critique/annaber-baseline-02.md` + Resolutions 03-08).

**Кроки:**
1. **Regeneration:** kill :3000 (stale PID 35552 — gotcha 13 підтвердився) → lint ✓ build ✓ → `npx playwright test tests/baseline.spec.ts` → **3/3 PASS** → 24 PNG у `screenshots/baseline/`.
2. **Лімітація spec (задокументована, не фіксилась):** 21/24 секційних знімків blank/mid-fade — spec робить `scrollIntoViewIfNeeded → screenshot` без очікувань entrance (FM/GSAP 0.5-1.6s) + `fullPage` у Chromium не скролить (lazy-img + входи нижче fold не фірять). Редакт spec заборонений (він не падає) → за ok користувача: temp-спека відтворила ті самі знімки **з scroll-through + `document.fonts.ready` + settle 1.9s** → **`screenshots/verification/` 24/24 повні** (AC тікета), верифіковано pixel-аналізом (System.Drawing: distinct 125-12300 vs 1-2 у blank) + crop-перевіркою. `baseline/` лишився «як є».
3. **Temp-verify (К4), 6 тестів → 5 PASS / 1 PARTIAL:** no horizontal overflow (`scrollWidth == iw` @375/768/1280) ✓; cut-off-text candidates — всі by-design ✓; layout stability `scrollHeight 5430→5430`, no `.pin-spacer` ✓; Hero parallax scrub + preview transform change/return ✓; console errors 0 ✓; reduced motion **PARTIAL → F1**.
4. **Diff-звіт (текстовий):** усі P0/P1/P2 з критики 02 зіставлені з Resolutions 04-08 — P0-1/P0-3/P1-1/P1-3/P1-4/P1-5/P2-1/P2-3/P2-4 FIXED, P1-2/P2-2/P2-5 SUPERSEDED/MOOT (redesign), P0-2 → eliminated by redesign + 03-adaptive, **P1-6 НЕ закритий повністю → F1**.

**Findings (defer → 03-adaptive grill):**
- **F1 (P1, a11y):** `.hero-preview` під `prefers-reduced-motion` **заморожений у SSR-стані** — `opacity 0.2` + `matrix3d(translateY -370, tilt 12°)`, `dynamic=false` при скролі (MotionValues не прив'язані; React ignored style-mismatch — **рецидив прецедента гідратизація × reduce, Resolution 06**; reduce-бранч `{opacity:1}` у `Hero.tsx:287-296`). Наслідок: для reduce-користувачів картки-hero назавжди на 20% opacity. Guard blur/benefits/marquee ✓. Це і є невиконаний P1-6 з критики 02.
- **F2 (geometry):** ряди hero обрізаються `overflow-hidden` (`Hero.tsx:240 h-[180vh]` vs px/рем-контент `h-56/72/80`), settled-стан (scroll 0.4vh): **1280×800 → 161px (r3 частк.)**, 1280×700 → 341 (r3 всь), 600 → 521, 500 → 701; 768 → 38/218/398/578; 375×800 → **0 (єдиний чистий)**, 375×700/600/500 → 85/265/445. Далі зі скролом обрізка зростає (до release sticky).

**Caveats:** drift `01-playwright-baseline.md` (`Status OPEN` + `Resolution (TODO)` vs CLOSED у map/HANDOFF); 3 Unsplash-hero thumbnails повільні на повторних прогонах (CDN throttle; візуально контент є).

**Acceptance Criteria:** 3 breakpoints ✓, diff documented ✓ (текстовий, причина вище), no cut-off/layout-break ✓, Hero parallax ✓.

**Next:** Ticket 10 (Code Review). NO AUTO-ADVANCE — старт 10 лише окремим go.
