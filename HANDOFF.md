# HANDOFF — AnnaBer Rebuild (2026-09-07, оновлено після Ticket 04 + фікси)

> **Живе в репо** (`HANDOFF.md:1`), не в `Temp` — щоб не зникав. Оновлюється після кожного тікета.

## Поточний стан

- **Ticket 00** `00-product-init` — **CLOSED** (PRODUCT.md + DESIGN.md via OD `ba33a560-5e9c-4520-a6ef-ca19c36b798e` + `tokens.css` + `layout.tsx` Fredoka/DM Sans)
- **Ticket 01** `01-playwright-baseline` — **CLOSED** (`tests/baseline.spec.ts`, `screenshots/baseline/` 375/768/1280, `FINDINGS.md`)
- **Ticket 02** `02-impeccable-critique` — **CLOSED** (`02-impeccable-critique.md:30` DONE 2026-09-01, health 18/32, P0/P1/P2, `impeccable/critique/annaber-baseline-02.md`)
- **Ticket 03** `03-hero-parallax-21st` — **PARTIAL (web/desktop done, mobile/tablet follow-up)** — `IN_PROGRESS — PARTIAL` (web/desktop done, adaptive → separate grill). Canonical `src/components/sections/Hero.tsx:1` (ex-HeroFinal v2.3: `h-[180vh] tilt 12° [0,0.2] translateY [-370,70]`, scroll-only `±1000`, cyclic 2×, no blur, hover `black/30 + translate 300ms shadow-xl`, image `1522202176988` fix, `z-20` текст + `translate-y-8`). `src/app/page.tsx:1` clean `<Hero />`. Prototypes `HeroPrototype.tsx` + `HeroFinal.tsx` видалено, screenshots `hero-*` видалено. Build ✓.
- **Далі:** продовження Ticket 04 `Benefits` (користувач має ще зауваження — промпт нижче, placeholder під його нотатки). Потім Ticket 05 `Pricing + HowItWorks` — OPEN. 03 adaptive — відкладено до окремої гриль-сесії (не чіпати 03 зараз).
- **Ticket 04** `Benefits` — **DONE + виправлення зауважень (2026-09-07)**, сесія продовжується (користувач має ще зауваження). 21st 8377 Feature Grid, quota `1/2` лишився (reset 08.09). DIRECT EDIT у `src/components/sections/Benefits.tsx:1` (прототипу не було — рішення користувача). Картки: горизонтальні, `min-h-[240px]`, `border-gray-200`, `rounded-xl`, `shadow-soft → hover:shadow-md`, `sm:items-start` (картинка+текст на верху), 5-та центрована `lg:col-span-2 w-[calc(50%-0.75rem)]`. 3D-картинки Microsoft Fluent Emoji (MIT, локально `public/benefits/`: school, video_game, bar_chart, alarm_clock, people_hugging). Анімація: IntersectionObserver per-card (threshold 0.25) + CSS, stagger via transitionDelay з очищенням після входу (hover миттєвий), `useReducedMotion` guard, state нема (були hydration mismatch + setState-in-effect — виправлено). Іконки Phosphor скрізь на канонічних `*Icon` (7 файлів, разовий виняток з one-ticket rule). Build ✓, lint ✓, Playwright-скрін Benefits 1280 перевірено.
- **Збережений реф для 05/06:** 21st Feature Bento `https://21st.dev/@uilayout.contact/components/feature-bento` (`https://21st.dev/c/18898`) — bento hero+tiles+CTA, розглянути для Pricing/HowItWorks. Thiings.co ВІДХИЛЕНО (free тільки personal/non-commercial, commercial від $49).

## Що побудовано (2026-09-04)

- **Stack:** Next.js 16 + TypeScript + Tailwind v4 + GSAP + Phosphor + Framer Motion (Build ✓ Turbopack)
- **Open Design:** `id: ba33a560-5e9c-4520-a6ef-ca19c36b798e` workspace `jffhe3b1nf0c9gn75wzk45qm` — `DESIGN.md` 25130 байт (9 секцій, motion 7.1/7.2) + `tokens.css` 4038 байт + `manifest.json` (Button/Card/Input/Badge, lightOnly). Via MCP `open-design_*`, never shell `od`.
- **Tokens:** `src/app/tokens.css:1` → `src/app/globals.css:2` `@import "./tokens.css"` + `src/app/layout.tsx:5` Fredoka 500-700 + DM Sans 400/500/700. Fallback `design-system/annaber/MASTER.md` — архів.
- **21st:** `1/2` quota використано — `1503 Hero Parallax` (search → links `https://21st.dev/c/<id>` → ok → get, approval gate). Лишився `2/2` для Ticket 04.
- **Wayfinder:** `.issues/map-annaber-rebuild.md:1` ACTIVE, порядок `00→01→02→03→04→05→06→07→08→09→10`.
- **Files:** `src/components/sections/Hero.tsx:1` canonical, 7 секцій (`Hero` + 6 інших), `screenshots/` cleaned (baseline to be regenerated at 09).

## Constraints (заморожено)

- ONE TICKET AT A TIME, NO AUTO-ADVANCE (`go / давай / ок`)
- RE-READ `tickets-rebuild/<ticket>.md:1` перед стартом + питай чи міняти Question
- BEFORE START: (a) grilling? (b) extra skills? (c) workflow?
- 21st APPROVAL GATE: `search --json → links → ok → get` (tickets 03-06)
- OD read-only via MCP, light only, CTA "Start learning"

## Workflow, що домовились (Hero → Benefits — той самий)

**Послідовність тікетів:** `00 → 01 → 02 → 03 (PARTIAL web) → 04 Benefits → 05 Pricing+HowItWorks → 06 Testimonials+Faq+Footer → 07 GSAP motion → 08 Impeccable polish → 09 Playwright verify → 10 Code Review`. 03 adaptive — окремо після гриль-сесії (пізніше).

**Workflow всередині тікета (як на Hero):**
1. Взірець **не чіпаємо** (`Benefits.tsx:1` як був) → ітерації в окремому `BenefitsPrototype.tsx` (у Hero було `HeroPrototype` + `HeroFinal`).
2. Пошук 21st (free) → лінки → `ok` → `get` → адаптація під токени.
3. Playwright-скріншоти за потреби (як на Hero: `baseline.spec.ts` + scroll-скріни) — прочитати після гриль-сесії, не обов'язково на кожній ітерації.
4. Консолідація в основний (`BenefitsPrototype → Benefits.tsx`) + видалити зайве, `page.tsx` SWITCH тимчасово, потім чистий.
5. Build ✓ → STOP → чекай `go`.

**Застосування скілів — порядок:**
- `impeccable` — `00 init` (done) + `02 critique` (done) → далі `08 polish` (не зараз)
- `21st-cli-use` — `03-06` search/get (2/day, gate)
- `gsap` + `gsap-scrolltrigger` + `gsap-react` — `03 Hero` + `07 motion` (Hero blobs `scrub:1`)
- `playwright-core` — `01 baseline` + `09 verify` + діагностичні скріни всередині тікета (Hero — 4 папки `hero-*` видалено)
- `ui-ux-pro-max` / `high-end-visual-design` / `design-taste-frontend` — чек дизайн-рев'ю перед ітерацією (опційно, питати на BEFORE START)
- `design-taste-*` / `redesign-existing-projects` — якщо треба bento/типографіка для Benefits
- `code-review` — `10` two-axis (пізніше)

## Prompt для нової сесії (продовження Ticket 04 Benefits)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — далі працюємо НАД Ticket 04 (Benefits), НЕ авансимось на 05.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (оновлено 07.09 — canonical resume стану на зараз)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/04-benefits-21st.md (Question + Resolution, status DONE але сесія відкрита для ітерацій)
4. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени в src/app/tokens.css)
5. src/components/sections/Benefits.tsx (canonical — єдиний файл, який ми правимо)

⚠️ MANDATORY CONSTRAINTS:
1. ONE TICKET AT A TIME — STOP після кожного пункту, чекай go. NO AUTO-ADVANCE.
2. НЕ чіпати Ticket 03 (Hero), 05-10 і будь-яку іншу секцію — тільки Benefits.
3. BEFORE START питай: (a) grilling? (b) extra skills? (c) workflow?
4. Workflow всередині тікета (це вже відхилено для 04 — не відновлювати прототип): DIRECT EDIT у Benefits.tsx. Взірець/прототип/page.tsx SWITCH більше НЕ використовуємо — Benefits.tsx вже canonical.
5. 21st APPROVAL GATE лишається для 05-06 (search --json → links https://21st.dev/c/<id> → ok → get, quota 1/2 reset 08.09). Для Benefits 21st 8377 вже забрано і адаптовано — НЕ шукати нові компоненти, якщо я прямо не попрошу.
6. Playwright — тільки тимчасові verify-спеки (писати → run → видалити). НЕ чіпати tests/baseline.spec.ts (він для Ticket 09).

Стан на початок сесії (факт 07.09, все звірено з кодом):
- 00/01/02 CLOSED; 03 PARTIAL (Hero web/desktop; mobile/tablet — окремо, НЕ чіпати); 04 Benefits DONE з подальшими фіксами.
- Що вже зроблено по Benefits:
  • Layout: 1-col → lg:2-col, 5-та картка центрована lg:col-span-2 w-[calc(50%-0.75rem)]; картки горизонтальні sm:flex-row, верхнє вирівнювання sm:items-start, min-h-[240px], border-gray-200, shadow-soft → hover:shadow-md.
  • Іконки: 5 × 3D Fluent Emoji PNG локально в public/benefits/ (school/video_game/bar_chart/alarm_clock/people_hugging), next/image, h-16/sm:h-20. MIT license, без CDN-залежностей.
  • Анімація: IntersectionObserver per-card (threshold 0.25) + CSS classes, stagger через transitionDelay (очищається через 650ms після входу — hover миттєвий), useReducedMotion guard. БЕЗ useState в ефекті, БЕЗ hydration mismatch, БЕЗ GSAP в Benefits.
  • Іконки Phosphor по всьому проєкту на канонічних *Icon (deprecated-аліаси видалені в 7 файлах).
  • Контент 5 карток дослівно з .issues/tickets-legacy/02-landing-page-content-copy.md:28. Заголовок секції: "Why kids love learning with AnnaBer".
  • Build ✓, lint ✓, скрін 1280 перевірено.
- Відомі незакриті місця (мимо Benefits): text-primary-400 у Footer (токена немає в tokens.css).
- Реф для 05: Feature Bento https://21st.dev/c/18898 (зберегли). Thiings.co відхилили (license).

Після прочитання:
- Спочатку проговори що саме з того переліку ти бачиш у коді (короткий 3-5 пунктів — для перевірки що HANDOFF не збрехав).
- Потім запитай мене: "Що покращуємо далі в Benefits?" і ЧЕКАЙ мої зауваження — не починай правити нічого без мого go по кожному пункту.

Мої наступні зауваження щодо Benefits (пишу сам нижче):
[TUT VSTAV SVOI ZAUVAZHENNYA]

Працюй українською, техтерміни English. Build+lint після змін, temp-спеки видаляти, STOP після кожного пункту.
```

## User Preferences (frozen)

- Українська, техтерміни English, SaaS-leaning playful but professional, light only, CTA "Start learning", kids 7-16 + parents
- Взірець не чіпати, прототип окремо, page SWITCH легко повернути, gap/hover/циклічність без авто-анімації, scrub тільки на скрол
- 03 adaptive — окремий тікет після грилю, зараз web/desktop enough
