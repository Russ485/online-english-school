# Ticket 08: Impeccable Polish

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-29)
**Blocked by:** 07-gsap-motion-pass.md

## Question

Polish pass fixing P0/P1/P2 from Ticket 02 critique.

## Tasks

- Fix all findings from `02-impeccable-critique.md` resolution
- If `impeccable` polish script exists, run it; else manual fix using `ui-ux-pro-max` + `MASTER.md`/`DESIGN.md` tokens
- Verify: hierarchy, contrast WCAG AA, spacing rhythm, focus-visible, responsive 375/768/1280
- `npm run build` clean, no TS errors

## Acceptance Criteria

- All P0 fixed, P1 attempted, build passes

---

## Resolution

**Статус роботи:** DONE 2026-09-29. Skills: `impeccable` + `playwright-core`. Workflow: DIRECT EDIT. **0 × 21st get.** 6 етапів зі STOP-гейтами, усі 5 групових рішень користувача застосовані. lint+build ✓ на кожному етапі + фінальний.

**Етап 1 — діагностика** (`tests/tmp-polish-08.spec.ts`, 4/4): contrast 14 fails (усі вьюпорти ідентичні), overflow sw=iw ✓ на всіх, console 0 ✓, focus walk 59/59 ✓, LCP = Hero preview Unsplash img. **Скан-баг:** Tailwind v4.1 накриває gray-200/400/600/800 у `@supports (color:lab(...))` → Chromium повертає `lab(...)`; тимчасова спека конвертує lab→sRGB. Benign unparsed: `lab(100…/0.95)` (bg-white/95 чіпи ×30) + `success/10` — обидва на світлому.

**Етап 2:** `layout.tsx` Fredoka `weight: ["500","600","700"]` (P1-4, без візуальних змін); `Faq.tsx` `aria-controls="faq-panel-N"` + `id="faq-panel-N"` (P1-5).

**Етап 3 — contrast/focus (усі рішення користувача A/B/C/D/E/F):**
- `tokens.css`: + `--color-accent-700: #C2410C`, + `--color-success-700: #15803D`
- `Hero.tsx` CTA → `bg-primary-600`/`hover:bg-primary-700`/`ring-primary-500` (біле на 600 = 5.17 AA); preview `<Link>` → focus ring `primary-500`
- `Pricing.tsx` badge → primary-600, градієнт → `from-primary-600 to-primary-700`, checks → `success-700`
- `HowItWorks.tsx` → `accent-700`/`gray-500`; `Benefits.tsx` стрілка → `gray-500`
- `Testimonials.tsx` SM→`primary-700`, DK→`accent-700`, ML→`success-700`, зірки→`accent-600`
- `Footer.tsx` копірайт→`gray-400`, усі anchors + `focus-visible:outline-2 offset-2 primary-500`
- `Faq.tsx` button → `rounded-xl`, `outline-offset-2` (замість `-2px`)
- Верифікація: **14 → 2 fails (обидва = FP градієнта)**; focus live: ring = white offset + `rgb(59,130,246)`, лінки = `solid 2px primary-500 off:2px` ✓

**Етап 4 — radius-ритм:** `Pricing.tsx` `rounded-2xl→rounded-xl`, `md:p-7→md:p-8` (24px-шкала); `Benefits.tsx` `rounded-xl→rounded-lg` (05-скриншот → `rounded-lg`).

**Етап 5 — LCP (backlog HANDOFF):** реальний LCP = Hero preview Unsplash img (не benefits-підказка). Виміряно позиції: у первому viewport на всіх брейкпойнтах — лише оригінали (дублікати-півциклі ніколи). `ProductCard` → `priority`-проп: `loading="eager"` + `fetchPriority="high"` для 10 оригіналів (перший ряд idx<4, другий idx<3, третій idx<3); дублікати + дальні — `lazy`. **LCP: 375 → 200ms (було 3040), 768 → 192ms (512), 1280 → 188ms (360)** (CDN теплий — частина покращення від кешу; механізм підтверджено: усі LCP-img `eager complete=true`).

**Етап 6 — фінал:**
- `impeccable detect.mjs` по 9 змінених файлах → **1 finding** (bounce-easing на `--ease-spring-soft`) → inline-ignore з обґрунтуванням (канонічний DESIGN.md motion-токен, у розмітці не використовується) → **re-run: 0 findings, exit 0**
- Скріншоти 375/768/1280 top + 375-full переглянуті вручну ✓ (CTA глибокий синій, зображення eager, без overflow)
- Фінальний прогін: fails=2 (FP), overflow ✓, console 0 ✓, focus 59/59 ✓
- Прибрано: `tests/tmp-polish-08.spec.ts`, `screenshots/tmp-polish-08/`, temp-скрипти, :3000 зупинено; `tests/baseline.spec.ts` не чіпаний

**Прийняті рішення (питання групи, усі «так»):** A — CTA→primary-600; D+E — 4 прості заміни; B+C — токени accent-700/success-700 + зірки accent-600; F — усі 3 focus-пункти; HowItWorks `p-4` — лишити. Лінійна контрастність gray-400/500 на дрібному тексті — **REJECTED** (544 заміна по всьому проєкту заради неіснуючої вимоги). Pricing residual drift (badge accent / border-2) — лишити 05-затверджено; Benefits bento 3+2 — лишити; «Learn more» — лишити декором.

**FP-документація:** `contrast.fails` використовує computed style першого stop'а градієнта → white on primary-700 = 1.05; реальний мінімум по стопах = 5.17 (600) / 6.70 (700) — PASS.

**Gotcha (нові):** (14) `next start` кілька збірок поспіль → змішаний стан ассетів (каламутні rects/hydration) → вбивати :3000 перед кожним rebuild+measure; (15) `fetchPriority` (camelCase) у React 19 → `fetchpriority` ✓; (16) lab()-конверсія у temp-спеці ±3 ΔE — прийнятно для діагностики.
