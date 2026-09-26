# HANDOFF — AnnaBer Rebuild (2026-09-26, Ticket 05 REOPENED — HowItWorks анімація ітерація-3 DONE, чекаємо решту коментарів → NEXT: Ticket 06 Testimonials+Faq+Footer)

> **Живе в репо** (`HANDOFF.md:1`), не в `Temp` — щоб не зникав. Оновлюється після кожного тікета/сесії.

## Поточний стан

- **Ticket 00** `00-product-init` — **CLOSED** (PRODUCT.md + DESIGN.md via OD `ba33a560-5e9c-4520-a6ef-ca19c36b798e` + `tokens.css` + `layout.tsx` Fredoka/DM Sans)
- **Ticket 01** `01-playwright-baseline` — **CLOSED** (`tests/baseline.spec.ts`, `screenshots/baseline/` 375/768/1280, `FINDINGS.md`)
- **Ticket 02** `02-impeccable-critique` — **CLOSED** (`02-impeccable-critique.md:30` DONE 2026-09-01, health 18/32, P0/P1/P2, `impeccable/critique/annaber-baseline-02.md`)
- **Ticket 03** `03-hero-parallax-21st` — **PARTIAL (web/desktop done, mobile/tablet follow-up)** — canonical `src/components/sections/Hero.tsx:1`. **НЕ чіпати** (включно з formatting-only uncommitted правками — підтверджено користувачем як канонічні). 03 adaptive → окрема гриль-сесія пізніше.
- **Ticket 04** `04-benefits-21st` — **CLOSED (2026-09-23)**, повний Resolution у `.issues/tickets-rebuild/04-benefits-21st.md:30` (gradient-card hand-replicate, DIRECT EDIT, Framer Motion hover, entrance прибрано «поки»).
- **Ticket 05** `05-pricing-howitworks-21st` — **REOPENED (2026-09-26)**: Pricing DONE; HowItWorks DONE + анімація ітерація-3 DONE, але користувач «не поспішав би з закриттям» — чекаємо решту коментарів (**тікет НЕ закривати без явного ок**). Повні Resolutions — у `.issues/tickets-rebuild/05-pricing-howitworks-21st.md:26`.
- **Далі:** спершу — решта коментарів користувача по 05 (анімація HowItWorks); після явного ок → Ticket 06 `06-testimonials-faq-footer-21st` (search → approval gate → get/hand-replicate). У 06 входить fix `text-primary-400` у Footer (токена немає).

## Resolution 05 / Pricing (2026-09-25) — що зроблено

- **Workflow:** DIRECT EDIT у `src/components/sections/Pricing.tsx` (прецедент 04). Прототипи/switch — не використовувались.
- **21st:** login виконано (як `russ485`, auth зберігається між сесіями), quota **2/2 get — НЕ витрачено (0 used)**. Зроблено 2 пошуки (pricing): якісних MIT 3-tier секцій нема. Знайдений користувачем **id 6247** (uilayout.contact/pricing-section) — **license unknown → get заборонений**, вирішено **hand-replicate** концепції (затверджено користувачем). REJECTED (не пропонувати знову в 05): 25362 (no-license), 6247 (unknown license), 7260/7091/5115 (unknown license), 28540 (AGPL-3.0). Saved ref Feature Bento `https://21st.dev/c/18898` — досі unused. **⚠️ Формат `https://21st.dev/c/<id>` — 404; робочі лінки = поле `url` з search (`https://21st.dev/@author/components/slug`).**
- **Чернетка:** `src/components/sections/Pricing.legacy.tsx` — старі картки, **НЕ імпортується** (повернення = 1 імпорт у `page.tsx`).
- **Pricing.tsx (фінал):** hand-replicate 6247 під токени: radial blue glow (`var(--color-primary-200)`), highlight `bg-accent-200` під «honest prices», popular Growth = `border-2 primary-500` + `from-white to-primary-100` + badge top-right, кнопки rounded-full (наш contract): default `bg-gray-900 shadow-lg shadow-gray-900/20`, popular `gradient primary-500→600 shadow-lg shadow-primary-500/30`, hover `shadow-xl` + token-opacity; CheckCircle icons (`text-success` / `text-primary-500` на popular); **toggle/річні ціни — прибрано** (не входили в макет); frozen copy дослівно; **без GSAP**.
- **Анімації (важливі прецеденти):**
  - **Entrance bug root cause (framer-motion v13):** дочірній елемент з `whileHover="hover"` (variant label) = `isControllingVariants` → **не наслідує `initial` від батька** (`use-visual-state.mjs:24-32`) → картки рендерились `opacity:1`, `whileInView` був no-op. Фікс: **явний `initial`+`whileInView` на кожній картці** + динамічний variant `shown(i)` через `custom={index}`. parent-stagger без explicit initial на дітей — НЕ працює в v13.
  - **Двоелементна структура:** зовнішній `motion.div` = entrance (`duration 0.75`, `delay 0.1 + i×0.18`, `viewport once amount 0.5`), внутрішній = hover (`rest↔hover`, `y:-4`, `duration 0.15`, expo `[0.16,1,0.3,1]`). Раніше hover-revert йшов до `shown` (delay 0.1-0.4s + 0.6s) → повільне «впадіння»; тепер revert до `rest` = 0.15s. CSS shadow `duration-200` (синхрон).
  - `useReducedMotion` на всіх станах; entrance → `initial="shown"` при reduce.
- **Verify:** lint ✓ build ✓; тимчасові Playwright-спеки (stagger-proof: до скролу `[0,0,0]`+`y40`, каскад `0.51→0.78→0.90`, hover <400мс, release <350мс) — **усі спеки/скріни/test-results видалені**. `tests/baseline.spec.ts` не чіпали.
- **Прийняті рішення (05 Pricing):** flip-card (perspective/rotateY) — **REJECTED** (ховає контент, mobile немає hover, gimmick); scale on hover — **REJECTED** (lift -4px досить, scale вже в Benefits); monthly/yearly toggle — **REJECTED** (frozen copy без річних ціней); додаткові design-skills — не потрібні (OD достатньо).

## Resolution 05 / HowItWorks (2026-09-25) — що зроблено

- **Workflow:** DIRECT EDIT `src/components/sections/HowItWorks.tsx`; чернетка старої GSAP-версії — `HowItWorks.legacy.tsx` (**НЕ імпортується**, повернення = 1 імпорт).
- **21st:** **0 get по всьому 05 (quota 2/2 не витрачено)**. 1 search → затверджено **hand-replicate концепції id 9906** (Connoisseur Stack Interactor; license `unknown` → get заборонений). REJECTED — не пропонувати: 9906 (unknown), 26916/26891/19861 (no-license), 19863/26902 (MIT, але вертикальні), + попередній список (gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540).
- **Дизайн (Variant A, затверджено):** ліворуч 3 step-`<button>` — icon (Phosphor, `h-11 w-11 bg-primary-500`) + `Step NN` + title + description **всі завжди видимі**; активний: `border-2 border-primary-500 bg-white shadow-soft` + title `text-gray-900` + номер `text-accent-500`; неактивний: `border-2 border-gray-200 bg-gray-50` + title `text-gray-500` + номер `text-gray-400` (`border-2` константа → без layout shift); hover-lift `y:-4` (Pricing-прецедент). Справа **tile-grid 4×4 = 8 merged tiles** (`gap-1.5`, **`rounded-lg` = 16px** — затверджено користувачем після відео-перевірки оригіналу; було `rounded-xl`), **одна картинка** нарізана по тайлах через inner-`<img>` з % -геометрією (`width: COLS/cs*100%`, `left: -(c/cs)*100}%` тощо, `object-cover`), **без тексту поверх зображення** (текст у 21st-референсі взагалі не лягав поверх — не вигадуємо).
- **Взаємодія:** hover/focus/tap перемикає `active` (**sticky** на останній наведений, default — крок 1), `aria-pressed`; кроки крутяться через `AnimatePresence` crossfade 0.3s. **Loop lifecycle:** статика до **першого hover/tap** → `loopStarted` → нескінченний луп, **без зупинки на leave**; `useReducedMotion` → луп повністю вимкнений (лише static). Ключ `${active}-${loopStarted}` → перший hover/tap робить remount (кросфейд + pop-in).
- **Анімація (ітерація 3, 2026-09-26, затверджена користувачем через question tool):** cycle `CYCLE=6.2s` — поява tile 0.68s + stagger `0.065×i` → **hold до `HOLD_END=0.83` (≈4.0s повністю видима, СИНХРОННО всіма — хвости циклів спільні, stagger лише у вікні появи)** → синхронне зникання ≈1.05s. **Пульс туди-назад ЛИШЕ на тайлах:** scale `[0.93, 0.93, 0.96, 1, 0.96, 0.96]`, times `[0, wait, wait+0.11, 0.5, 0.83, 1]`, eases `[linear, expo-out, easeInOut, easeInOut, linear]` → rest 0.96 (клітки менші, геп ~12px) → пік 1.0 (поточна розкладка = максимум, рівно в контейнері) → назад 0.96 → зникання в малому стані. **scale ≤1 завжди → переповнення = 0**; картинка масштабується разом з рамкою (transform тайла) → сірих смуг за побудовою нема. **Діагноз ітерації-2 (REJECTED):** пульс на контейнері (grid 1→1.008) + контр-масштаб img (1/1.008) → рамки виходили за колонку ~2.5px + `bg-gray-100` смуга до ~5px по периметру + поява одразу на максимумі («вже збільшена»). **REJECTED (перша ітерація):** рівномірні keyframes 2.6s (hold 0.65s), `delay i×0.16` (дрейф фаз), `scale 1.06` (наїзд клітинок). Реверс-лічильник зникання оригіналу — «забагато» → синхронне зникання ✓, стагерований вхід ✓ (схвалено, без змін).
- **Відео-верифікація референсу 9906:** `videoUrl` з search `stack interactor` (cdn.21st.dev/.../video.1787571259662.mp4, 6.2s) — стан спокою статичний (diff ≈0 → дрібний пульс 0.8%), автoloop немає (перемикання ~0.5s на інтеракцію), радіус ≈16px ✓. ⚠️ Playwright Chromium **seek зламаний** для цього mp4 (`currentTime` скидається в 0; `fastSeek`/media-фрагменти не працюють) → тільки real-time відтворення + таймовані скріншоти (`animations: 'allow'`; element-скріншоти зависають на нескінченних анімаціях).
- **Прибрано:** GSAP (`gsap`/`ScrollTrigger`/`registerPlugin`/`useEffect` entrance), gradient-лінію `via-accent-200`, CTA (у frozen copy HowItWorks CTA нема).
- **Картинки локально:** `public/howitworks/step-01.jpg` (Google Calendar — бронювання), `step-02.jpg` (відеодзвінок — знайомство), `step-03.jpg` (дівчинка в навушниках — навчання). Unsplash free (без `plus.unsplash.com` = платні), усі 3 **візуально верифіковані** через Read; прелоад — `new Image()` в `useEffect`; `alt=""` + контейнер `role="img" aria-label`. ⚠️ `motion.img` НЕ триггерить `@next/next/no-img-element` → eslint-disable-директиви немає (прибрана як unused).
- **Copy:** frozen дослівно з `.issues/tickets-legacy/02-landing-page-content-copy.md:89-95` — **без trailing periods** (канонічний copy-файл; старий компонент мав крапки — прибрані).
- **HTML/ARIA:** контент картки = один `<button>` + spans (**без `h3`** — `button` не може містити heading за content model; весь текст усе одно доступний через accessible name).
- **Verify:** lint ✓ build ✓; тимчасова Playwright-спека (ітерація 3) **3/3**: rest (t=1.46s) scale ∈[0.94,0.995] + opacity ≥0.99, peak (t=3.16s) ∈[0.99,1.001], повернення ≤0.975, width-ratio rest/peak ∈(0.93,0.985), bounding boxes тайлів ⊆ колонка на всіх фазах, fade усі <0.9 зі spread <0.15, повтор циклу (2-й peak), статика/sticky/reduce/mobile ✓. Скріншоти rest/peak переглянуті вручну ✓. Спека/test-results/скріншоти/логи **видалені**, сервер :3000 зупинено; `tests/baseline.spec.ts` не чіпали. ⚠️ **`test.use({ reducedMotion })` у Playwright 1.62 ігнорується** → `page.emulateMedia({ reducedMotion: "reduce" })` перед `goto`; `getByRole("img")` матчить svg-іконки → `{ name: /illustration/ }`; `.tap()` потребує `hasTouch` → `click()`.

## Відомі незакриті місця (мимо поточного тікета)

1. `text-primary-400` у Footer (токена немає) → **Ticket 06**.
2. **LCP dev-hint:** браузер пише «Image `/benefits/video_game_3d.png` detected as LCP → add `loading="eager"`». Benefits поза fold (Hero 180vh), вплив мінімальний → **Ticket 08 (polish):** визначити реальний LCP (скоріш засе Hero-зображення → йому `priority`), не чіпати зараз (04 закритий, 03 не чіпати).
3. 03 adaptive (mobile/tablet Hero) → окрема гриль-сесія.
4. Hero.tsx uncommitted formatting (Prettier) — закомічити разом з docs.

## Що побудовано (2026-09-04, не змінилось)

- **Stack:** Next.js 16 + TypeScript + Tailwind v4 + GSAP + Phosphor + Framer Motion (Build ✓ Turbopack)
- **Open Design:** `id: ba33a560-5e9c-4520-a6ef-ca19c36b798e` — `DESIGN.md` + `tokens.css` + `manifest.json`. Via MCP `open-design_*`, never shell `od`.
- **Tokens:** `src/app/tokens.css:1` → `globals.css` `@import` + `layout.tsx` Fredoka/DM Sans. Fallback `design-system/annaber/MASTER.md` — архів.
- **Wayfinder:** `.issues/map-annaber-rebuild.md:1` ACTIVE, порядок `00→…→10`.

## Constraints (заморожено)

- ONE TICKET AT A TIME, NO AUTO-ADVANCE (`go / давай / ок`)
- RE-READ `tickets-rebuild/<ticket>.md:1` перед стартом + питай чи міняти Question
- BEFORE START: (a) grilling? (b) extra skills? (c) workflow?
- 21st APPROVAL GATE: `search --json → лінки (робочий format url з search) → ok → get` (05-06); quota перед стартом `npx @21st-dev/cli usage`; ліцензія компонента МАЄ бути явною (MIT/Apache) перед `get`
- OD read-only via MCP, light only, CTA "Start learning"
- DIRECT EDIT у канонічних файлах; прототип/page-SWITCH відхилено (прецедент 04)
- Playwright — тільки тимчасові verify-спеки (писати → run → видалити); `tests/baseline.spec.ts` НЕ чіпати (09)
- Контент секцій — frozen copy з `.issues/tickets-legacy/02-landing-page-content-copy.md` (без переписування без ок)
- Мікроанімації секцій — Framer Motion; GSAP — лише Hero scrub + Ticket 07

## Prompt для нової сесії (Ticket 06: Testimonials + Faq + Footer)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 06 (Testimonials + Faq + Footer via 21st). НЕ авансимось на 07.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — 05 REOPENED 2026-09-26: Pricing+HowItWorks DONE + анімація ітерація-3, закривати тільки після явного ок)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/06-testimonials-faq-footer-21st.md (Question + Tasks + Resolution)
4. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени в src/app/tokens.css)
5. src/components/sections/Pricing.tsx + HowItWorks.tsx (ГОТОВІ reference-и: Framer Motion entrance/hover/AnimatePresence-прецеденти) + чинні файли секцій 06 (Testimonials/Faq/Footer)

⚠️ MANDATORY CONSTRAINTS:
1. ONE TICKET AT A TIME — STOP після кожного пункту, чекай go. NO AUTO-ADVANCE.
2. НЕ чіпати 03 (Hero), 04 (Benefits), 05 (REOPENED: Pricing + HowItWorks — не чіпати, поки не дав явного ок на закриття), 07-10 — тільки секції 06.
3. BEFORE START питай: (a) grilling? (b) extra skills? (c) workflow?
4. Workflow: DIRECT EDIT у канонічних файлах (прототип/page-SWITCH відхилено прецедентом по Benefits).
5. 21st APPROVAL GATE: search --json → робочі лінки (поле url, формат https://21st.dev/c/<id> = 404!) → мій ok → get. Спершу npx @21st-dev/cli usage (очікується 2/2 get — по 05 витрачено 0; auth вже зроблений як russ485). Перевіряй ліцензію (MIT/Apache) через webfetch ДО get. Saved ref: Feature Bento https://21st.dev/c/18898. REJECTED — не пропонувати: gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540, 9906 (unknown), 26916/26891/19861 (no-license), 19863/26902 (вертикальні).
6. Playwright — тільки тимчасові verify-спеки (писати → run → видалити). НЕ чіпати tests/baseline.spec.ts. ⚠️ test.use({ reducedMotion }) ігнорується у цій версії → page.emulateMedia({ reducedMotion: "reduce" }) перед goto.
7. Hero.tsx/03 — НЕ редагувати (незакомічені formatting-правки = канонічні).

Стан на початок сесії:
- 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04 CLOSED; 05 **REOPENED** — Pricing + HowItWorks DONE, анімація HowItWorks ітерація-3 DONE (діагноз iter-2: пульс на контейнері → переповнення + сіра смуга; iter-3: пульс туди-назад лише на тайлах 0.96↔1.0). Закрити 05 тільки після явного ок користувача. Усі прецеденти та rejected-списки — див. Resolution в HANDOFF.
- HowItWorks тепер: Variant A — ліворуч 3 step-button (активний border-primary-500/bg-white, sticky active, tap на mobile), справа tile-grid 4×4 (8 merged тайлів, одна картинка нарізана, `rounded-lg` 16px, без тексту), infinity-loop після першого hover/tap: cycle 6.2s (поява 0.68s+stagger → **hold 4.0s повністю видима, синхронно** → синхронний fade ≈1.05s), **пульс туди-назад лише на тайлах scale 0.96→1.0→0.96** (rest: клітки менші, геп ~12px; пік 1.0 = рівно в контейнері, ≤1 без переповнення; картинка масштабується з рамкою — без сірих смуг), зникання на 0.96, reduce → статика; локальні картинки public/howitworks/, frozen copy без крапок, без GSAP/gradient/CTA.
- Known backlog: text-primary-400 у Footer (токена немає) → ВХОДИТЬ у 06 (Footer); LCP dev-hint (benefits image eager/priority) → 08; 03 adaptive → окрема гриль-сесія.
- Контент: frozen copy з .issues/tickets-legacy/02-landing-page-content-copy.md — без переписування без мого ок.

Після прочитання:
- Проговори 3-5 пунктів що бачиш у коді (перевірка HANDOFF).
- Потім запитай: "Що робимо в 06?" і ЧЕКАЙ мої зауваження — без мого go не правити.
- Далі за прецедентом: search → approval gate → get/hand-replicate → direct edit → lint+build → temp verify → STOP.

Працюй українською, техтерміни English. Build+lint після змін, temp-спеки видаляти, STOP після кожного пункту.
```

## User Preferences (frozen)

- Українська, техтерміни English, SaaS-leaning playful but professional, light only, CTA "Start learning", kids 7-16 + parents
- DIRECT EDIT у канонічних файлах; прототип/page SWITCH — відхилено (прецедент 04); gap/hover/циклічність без авто-анімації; scrub тільки на скрол
- Мікроанімації секцій — Framer Motion (spring для bounce); GSAP — Hero scrub + Ticket 07; контент секцій — frozen copy
- Послідовність усередині тікета: STOP між підпунктами (05: Pricing → HowItWorks, обидва DONE 2026-09-25)
- 21st: ліцензія обов'язова перед get; flip/scale/toggle у Pricing — rejected (див. Resolution)
- 03 adaptive — окремий тікет після грилю, зараз web/desktop enough
