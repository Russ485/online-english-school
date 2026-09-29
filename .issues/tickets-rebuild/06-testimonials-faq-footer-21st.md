# Ticket 06: Testimonials + FAQ + Footer via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-28) — Testimonials + FAQ + Footer v3 DONE (go користувача)
**Blocked by:** 05-pricing-howitworks-21st.md

## Question

Rebuild remaining sections via 21st — Day3 quota.

## Tasks — WITH APPROVAL GATE

1. `21st search "testimonial carousel quotes" --type c --limit 10 --json` + `21st search "faq accordion" --type c --limit 10 --json` + `21st search "footer 4 column" --type c --limit 10 --json`
2. Present links, wait for user `ok` per component. On free tier, pick max 2 gets for this ticket: prioritize Testimonials + FAQ (Footer can be adapted from existing `src/components/sections/Footer.tsx:1` if quota tight — ask user).
3. After ok: `21st get <id>` ×2, adapt: 3 quotes with star ratings, 6 FAQ accordion (aria-expanded), 4-col footer.

## Acceptance Criteria

- Approval gate followed, quota respected
- FAQ aria-expanded, focus-visible rings

---

## Resolution

### Testimonials — DONE (2026-09-26)

- **21st:** quota перед стартом 2/2 → **get 822** (serafimcloud `testimonials-with-marquee`, **MIT**, перевірено webfetch ДО get) → **1/2 лишився на FAQ**. Робочий лінк: `https://21st.dev/@serafimcloud/components/testimonials-with-marquee`.
- **REJECTED (не пропонувати):** 22106 efferd `testimonials-6` (no-license → hand-replicate дозволений), 19874 (solaceui), 22087 (ziegfiroyt) — обидва no-license; 19099/1434/926/26920 — MIT, але відхилені користувачем на користь 822.
- **Workflow:** DIRECT EDIT `src/components/sections/Testimonials.tsx`; стара версія → `Testimonials.legacy.tsx` (не імпортується, повернення = 1 імпорт).
- **Дизайн (затверджено question tool):** горизонтальна infinite-маркі, **auto-рух одразу + pause on hover/touch** (`.group:hover/:active`), 4 sets × 3 цитати = 12 карток (дублікати `aria-hidden` — SR читає кожну квоту один раз), seamless loop: `translate3d(0 → -50%)` + `mr-6` на flex-child (ширина ділиться рівно навпіл), `w-[320px]` картки `rounded-2xl border-gray-200 bg-white shadow-soft`, зірки `text-accent-400`, initials SM/DK/ML, fade-edges `from-gray-50 to-gray-50/0` (w-10 mobile / 1/3 sm+), секція `overflow-hidden`. Ключі — `src/app/globals.css:15` (`@keyframes marquee` 60s linear, `.group:hover` pause, `@media (prefers-reduced-motion: reduce)` → `animation: none`). Frozen copy дослівно, входи — Framer Motion `hidden→shown` + `custom` (прецедент Pricing), без lucide/Radix/`cn`.
- **⚠️ Прецедент (гідратизація × reduce):** framer `useReducedMotion()` на клієнті повертає `true`, але **reduce-залежні атрибути (className/style) НЕ оновлюються після гідратизації** — сервер рендерив `reduce=null`, React ігнорує attribute-mismatch → DOM лишається серверним. Фікс: **reduce-класи не давати в атрибути** (marquee глушить CSS media-query, verified `animationName: none`), entrance — `initial="hidden"` + `transition: { duration: 0 }` при reduce.
- **Verify:** lint ✓ build ✓; тимчасова Playwright-спека **3/3** (рух transform, hover → paused → resume, reduce → `animationName: none` + heading visible, 375 без horizontal overflow, 12 карток). Скріншоти desktop/mobile переглянуті вручну ✓. Спека/скріншоти/test-results **видалені**, сервер :3000 зупинено, `tests/baseline.spec.ts` не чіпали.

### FAQ — DONE (2026-09-27)

- **21st:** quota на старт **2/2** (денний reset) → **get 25011** intentui `disclosure-group` (**MIT**, webfetch ДО get) → **1/2 лишився** (reset 2026-09-28). Робочий лінк: `https://21st.dev/@intentui/components/disclosure-group`. GATE: 3 лінки від користувача → обрано #3 intentui («найбільше подобається з точки зору анімації/логіки»), get схвалений.
- **REJECTED (не пропонувати):** prebuiltui `faq-sections` (**license unknown** → get заборонений; консенсус: зображення в FAQ зайве), scrollxui `frequently-asked-questions-with-accordion` (MIT, але blur-in headline over-the-top).
- **Workflow:** DIRECT EDIT `Faq.tsx` (+ `Faq.legacy.tsx`, не імпортується). Залежності intentui повністю викинуті (react-aria-components, tailwind-merge, `cx`) → наш `useState` + `aria-expanded` + Framer Motion.
- **Дизайн:** single-open, **default — перший рядок розкритий**; `gap-2` рядки `rounded-xl border`; відкритий `border-primary-200 bg-primary-50` + питання `text-primary-600` + індикатор `text-primary-500`; **plus/minus-індикатор** (два spans, `rotate-90↔rotate-0`); `<h3><button>` (valid content model). Панель — `AnimatePresence initial={false}` height `0→auto` 0.2s ease `[0.16,1,0.3,1]` (reduce → 0); entrance — `hidden→shown` + stagger `0.1+i×0.08`, `initial="hidden"` завжди (reduce → duration 0). Frozen copy 6 питань дослівно ✓.
- **Verify:** lint ✓ build ✓; тимчасова спека **4/4** (default-open + single-toggle + rotate 0°/90° + focus-visible; height growth in-page rAF; reduce — миттєвий відкриття + `transitionDuration <0.01s`; mobile 375 без overflow). Скріншоти open-state desktop/mobile переглянуті вручну ✓. Спеки/скріншоти/test-results видалені, :3000 зупинено, `baseline.spec.ts` не чіпали. **Gotcha:** Tailwind v4 `rotate-0` = `rotate: none` (читати `.rotate` у спеках); висота анімується на parent-панелі (внутрішній `<p>` кліпиться) → in-page rAF-самплер.

### Footer — DONE (2026-09-28)

- **21st:** **0 get** (квота 2/2 після reset 2026-09-28 не витрачена). GATE: користувач дав 2 референси → `animated-wave-footer` arihantcodes (**MIT**) + `hover-footer` mdafsarx (**license unknown → get заборонений**). Рішення: **hand-replicate ідей без get**; newsletter form **REJECTED** (поза frozen copy `02-copy:141-168`); фон-SVG/хвиля **REJECTED** (вирішено: фічою стає анімація назви, footer без SVG, без нового автоцикл-винятку). REJECTED до списків: `hover-footer` mdafsarx (unknown license).
- **Workflow:** DIRECT EDIT `src/components/sections/Footer.tsx`; legacy-файл не створювався (зміни адитивні, історія в git).
- **Рішення користувача:** (1) token/колонка Contact — «виріши сам»; (2) назва — варіант Б typewriter (fallback А дозволений); (3) hand-replicate; (4) extra skills — не потрібні; (5) workflow — DIRECT EDIT.
- **Дизайн:** token fix `text-primary-400 → text-primary-500` (#3B82F6, contrast vs gray-900 ≈ 4.9:1 → AA). Copy: − «Learning platform», + «Contact» у Company (**About us, Pricing, Blog, Contact** / For parents, For teachers / Legal 3) — frozen дослівно. **Typewriter-назва:** `AnnaBer` = 7 letter-span (`inline-block overflow-hidden`), framer `width: 0 → "auto"` послідовно (`duration 0.14`, `delay 0.35 + i×0.1`), тригер **`useInView(brand-column, once, amount 0.5)`** (на літерах НЕ — zero-width element = IO edge case), reduce → `duration 0 + delay 0` (transition-параметри, не атрибути → гідратизація ✓). **Hover після появи (CSS):** `group-hover:-translate-y-1` per-letter + `transitionDelay i×30ms` (reduce-guard авто від `tokens.css:99`). Entrance колонок — Faq-прецедент (`custom 0.1+i×0.08`, duration 0.75, viewport once, reduce duration 0); `transition-colors duration-200` на всіх лінках ( socials уже мали).
- **Verify:** lint ✓ build ✓; тимчасова Playwright-спека **4/4**: (1) typewriter in-page rAF (`min < final−20`, `final > 60px`, стабільність кінця) + Ber = `rgb(59,130,246)` + Anna = білий + copy (no «Learning platform», «Contact» видимий, Company 4 / Product 2 лінки); (2) hover — літера `translateY −4px` + revert; (3) reduce (`emulateMedia` перед goto) — width миттєво >60 за 300мс, opacity 1, `transitionDuration <0.01s`; (4) mobile 375 — `scrollWidth ≤376`, всі колонки/bottom-bar opacity 1 після скролу. Скріншоти desktop + mobile top/bottom переглянуті вручну ✓. Спека/debug-спека/скріншоти/test-results **видалені**, :3000 зупинено, `tests/baseline.spec.ts` не чіпали.
- **⚠️ Gotcha (нові):** (1) Tailwind v4 `-translate-y-1` → у спеках читати `getComputedStyle().translate` (поряд із `transform`; як `rotate-0 = rotate: none` у FAQ); (2) Playwright `toBeVisible` **ігнорує `opacity`** → entrance перевіряти через computed opacity саме motion-вузлів (батьків-колонок), не h4; (3) element-скріншот footer (904px > viewport, top -237) **кліпиться Playwright** → viewport-скріншоти top/bottom замість `locator(footer).screenshot()`.

### Footer v2 (гігантський outline-напис) — DONE (2026-09-28)

- **Вибір користувача (3 із recommended):** outline + **fill на hover КОЖНОЇ літери**, **ANNABER uppercase**, **typewriter на гігантському** (малий wordmark → статичний + hover-lift, typewriter з нього прибрано).
- **Дизайн:** гігант `absolute inset-x-0 bottom-0 z-0 aria-hidden select-none`, `text-[min(20vw,16rem)] font-extrabold uppercase` `text-transparent` + `[-webkit-text-stroke:2px_var(--color-primary-500)]` + `hover:[-webkit-text-fill-color:var(--color-primary-500)]` (`transition-[color,-webkit-text-fill-color] duration-200`); typewriter letterVariants `width 0→auto` (0.16s, delay 0.35+i×0.1) на `useInView(giantRef, once, 0.5)`; **`translate-y-[0.12em] lg:translate-y-[0.35em]`** (lg — щоб штрихи НЕ перекривали лінки колонок); grid/bar `pointer-events-none` + лінки/малий wordmark `pointer-events-auto`; bar — motion entrance (custom 4) поверх літер (стиль hover-footer: ©/socials поверх напису — свідомо).
- **Verify:** lint ✓ build ✓; тимчасова спека **3/3**: (1) typewriter rAF growth (final 1127/1280 = 88%), stroke/fill computed, hover fill `rgb(59,130,246)` + revert, малий wordmark статичний, copy/token/pointer-events; (2) reduce — миттєво >300 + opacity 1 + `transitionDuration <0.01s`; (3) mobile 375 — рядок 330 ≤ контейнер, `scrollWidth ≤376`, Contact hover-інтерактивний. Піксельна діагностика скріншотів 1280/768/375: штрихи від y644 (1280) / y894 (768) / y603 (375) — лінки скрізь вільні (0 синіх пікселів у зоні контактів). Спеки/скріншоти/test-results видалені, :3000 зупинено.
- **⚠️ Gotcha (нові):** (4) reduce-тест проголосив хибу, якщо скролити одразу після `goto` (гідратація не встигла → scrollHeight неточний → useInView не спрацьовує) → `waitForTimeout(600)` після goto перед скролом; (5) footer менший за viewport → `footer.offsetTop-40` клампиться в maxScroll (top/bottom скріншоти ідентичні); (6) Read-інструмент повертав застаріле зображення для перечитаних PNG → верифікація через піксельний аналіз (System.Drawing) або crop у новий файл.

### Footer v3 (зауваження користувача: обрізання, центрування, нав'язливість) — DONE (2026-09-28)

- **Зауваження користувача:** (1) літери обрізані знизу; (2) центрування → вирівняти ліворуч до першої колонки; (3) надто нав'язливі + перекривають іконки соцмереж → база має бути прозорою (фішка/easter egg, а не зірка). Затверджено question tool: база **primary-500 @ 30%** (`rgba(59,130,246,0.3)`), hover-fill = повний `rgb(59,130,246)`; кегль **16.5vw/12.5rem**; вирівнювання **ліворуч `pl-4 sm:pl-6 lg:pl-8`**.
- **Дизайн:** `text-center → text-left` + `pl-*`; `[-webkit-text-stroke:2px_var(--color-primary-500)] → [-webkit-text-stroke:2px_rgb(59,130,246,0.3)]`; кегль `min(20vw,16rem) → min(17vw,13rem) → min(16.5vw,12.5rem)`; позиціонування **layout-based**: прибрано `translate-y-[0.12em]/lg:translate-y-[0.4em]`, натомість гігант-div `bottom-0 lg:bottom-[-36px]`.
- **Verify:** lint ✓ build ✓; тимчасова спека **4/4** (giant desktop + reduce + mobile 375 + tablet 768: dim stroke/fill/hover, align=left, padL=32px, no-crop, clearance) + піксель-скани System.Drawing: **ink 564..707** (зі шрифтами; без `fonts.ready` — 554..697, обидва стани без накладання/обрізки), прогалина до Contact (551.5) 12.5px, запас знизу 12.5px, 0 синіх у зоні Contact, 0 синіх y≥712. Спеки/скріншоти/test-results видалені, :3000 зупинено (PID), `baseline.spec.ts` не чіпали.
- **⚠️ Gotcha (нові):** (7) **CSS `translate` на батьківському span пересуває бокси/фон (rect/red-probe ✓), але `-webkit-text-stroke` ink малюється БЕЗ трансформа (прив'язка до layout-позиції)** — різні правки `translate-y` не змінювали видиме положення штрихів (усі стріли в одному ряді), тож позиціонування гіганта зроблено через `bottom-[-Npx]` (layout), не через translate; (8) `test-results` **очищається кожним запуском Playwright** — старі піксельні заміри не перечитувати; (9) **метрики ink залежать від `document.fonts.ready`**: без нього шрифт ще не готовий → ink на ~10px вище/інша висота → у спеках чекати `document.fonts.ready` перед мірянням/скріншотом; (10) Read-інструмент для PNG може віддавати застаріле/чуже зображення (дубль gotcha 6) → лише піксельний аналіз; `IsBlue`-фільтр ловить і сірий `gray-800` (30,41,57) → повносмугові лінки шукати окремим кольором, AA-текст — false positive (обмежувати поріг ≥30 та зону x≥140 поза бренд-колонкою).
