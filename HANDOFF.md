# HANDOFF — AnnaBer Rebuild (2026-09-26, Ticket 06 PARTIAL: Testimonials DONE → NEXT: FAQ + Footer; 05 REOPEN закрито — варіант A)

> **Живе в репо** (`HANDOFF.md:1`), не в `Temp` — щоб не зникав. Оновлюється після кожного тікета/сесії.

## Поточний стан

- **Ticket 00** `00-product-init` — **CLOSED** (PRODUCT.md + DESIGN.md via OD `ba33a560-5e9c-4520-a6ef-ca19c36b798e` + `tokens.css` + `layout.tsx` Fredoka/DM Sans)
- **Ticket 01** `01-playwright-baseline` — **CLOSED** (`tests/baseline.spec.ts`, `screenshots/baseline/` 375/768/1280, `FINDINGS.md`)
- **Ticket 02** `02-impeccable-critique` — **CLOSED** (`02-impeccable-critique.md:30` DONE 2026-09-01, health 18/32, P0/P1/P2, `impeccable/critique/annaber-baseline-02.md`)
- **Ticket 03** `03-hero-parallax-21st` — **PARTIAL (web/desktop done, mobile/tablet follow-up)** — canonical `src/components/sections/Hero.tsx:1`. **НЕ чіпати** (включно з formatting-only uncommitted правками — підтверджено користувачем як канонічні). 03 adaptive → окрема гриль-сесія пізніше.
- **Ticket 04** `04-benefits-21st` — **CLOSED (2026-09-23)**, повний Resolution у `.issues/tickets-rebuild/04-benefits-21st.md:30` (gradient-card hand-replicate, DIRECT EDIT, Framer Motion hover, entrance прибрано «поки»).
- **Ticket 05** `05-pricing-howitworks-21st` — **CLOSED (2026-09-26)**: Pricing + HowItWorks DONE + анімація HowItWorks ітерація-3 + **REOPEN закрито (2026-09-26): статичне зображення — варіант A (clip-path mask на grid-cell, контент без трансформацій), верифіковано 2/2**. Повні Resolutions — у `.issues/tickets-rebuild/05-pricing-howitworks-21st.md:26` (REOPEN — секція `## REOPEN` наприкінці).
- **Ticket 06** `06-testimonials-faq-footer-21st` — **PARTIAL (2026-09-26)**: **Testimonials DONE** (get 822 serafim MIT → quota **1/2**, маркі, DIRECT EDIT, verify 3/3). Resolution — секція `Resolution 06 / Testimonials` нижче.
- **Далі:** Ticket 06, підпункт 2 — **FAQ** (search → approval gate → get/hand-replicate → DIRECT EDIT `Faq.tsx`), потім STOP → Footer (за ок). У 06 входить fix `text-primary-400` у Footer (токена немає) + дрейф copy (frozen: лінк **Contact**, без «Learning platform»).

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

## Resolution 06 / Testimonials (2026-09-26) — що зроблено

- **21st:** quota 2/2 → **get 822** (serafimcloud `testimonials-with-marquee`, **MIT** перевірено webfetch ДО get) → **1/2 лишився на FAQ**. Робочий лінк: `https://21st.dev/@serafimcloud/components/testimonials-with-marquee`. GATE-рішення: вибір користувача (question tool) між 22106 efferd (grid, **no-license** → hand-replicate) і 822 — обрано **822** (ліцензія, mobile-first, 3 цитати краще лягають у горизонтальний ряд). Режим руху: **auto одразу + pause on hover** (question tool). REJECTED (додати до списків): **19874, 22087 (no-license)**, 22106 (no-license), 19099/1434/926/26920 (MIT, але відхилені на користь 822).
- **Workflow:** DIRECT EDIT `src/components/sections/Testimonials.tsx`; стара версія → `Testimonials.legacy.tsx` (не імпортується, повернення = 1 імпорт).
- **Дизайн:** горизонтальна infinite-маркі 4 sets × 3 квоти = 12 карток (дублікати `aria-hidden` → SR читає кожну квоту один раз); seamless: `translate3d(0 → -50%)` + **`mr-6` на flex-child** (а не gap) — тоді ширина = 12×(320+24), половина = рівно 6 карток ✓; картки `w-[320px] rounded-2xl border-gray-200 bg-white shadow-soft`, зірки `text-accent-400`, initials SM/DK/ML (кольори класами з літералів — Tailwind сканує ✓), hover-lift `y:-4`; fade-edges `from-gray-50 to-gray-50/0` (w-10 mobile / `sm:w-1/3`); секція `overflow-hidden bg-gray-50`. Ключі marquee — **`src/app/globals.css:15`**: `@keyframes marquee` (`-50%`, **60s** linear), `.group:hover/:active .marquee-track` → `animation-play-state: paused`, `@media (prefers-reduced-motion: reduce)` → `animation: none`. Входи — Framer Motion `hidden→shown` + `custom` (прецедент Pricing), без lucide/Radix/`cn` (у проєкті `src/lib/utils` немає). Frozen copy дослівно.
- **⚠️ НОВИЙ ПРЕЦЕДЕНТ (гідратизація × reduce):** framer-motion v13 `useReducedMotion()` на клієнті повертає `true`, але **reduce-залежні атрибути НЕ застосовуються після гідратизації** — сервер (SSR/prerender) рендерив `reduce=null` → className/style відрізняються → **React ігнорує attribute-mismatch** (лише текстові mismatch'и кидають) → DOM лишається серверним. Діагностика: `matchMedia` ✓ true, хук ✓ true, а клас на місці. **Правило:** reduce-класи НЕ давати в атрибути — глушити через **CSS media query** (перевірено: `animationName: none`); entrance при reduce — `initial="hidden"` (однаковий з SSR) + `transition: { duration: 0 }`.
- **Verify:** lint ✓ build ✓; тимчасова Playwright-спека **3/3**: рух (transform міняється за 800мс), hover → `paused` → leave → `running`, reduce → `animationName: none` + heading visible + `opacity 1`, mobile 375 → `scrollWidth ≤ 376`, ширина картки 320, 12 карток. Скріншоти desktop/mobile переглянуті вручну ✓. Спека/скріншоти/test-results **видалені**, сервер :3000 зупинено, `tests/baseline.spec.ts` не чіпали. ⚠️ Playwright: `boundingBox().width` = 319.99999 (subpixel) → assert з tolerance.

## Відомі незакриті місця (мимо поточного тікета)

1. `text-primary-400` у Footer (токена немає) → **Ticket 06 (Footer, після FAQ)**.
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

## Prompt для наступної сесії (Ticket 06, підпункт 2: FAQ)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 06, підпункт 2: FAQ (Footer — після мого ок, окремий STOP). НЕ авансимось на 07. Testimonials уже DONE.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — 06 PARTIAL: Testimonials DONE 2026-09-26, quota 1/2; новий прецедент «гідратизація × reduce»)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/06-testimonials-faq-footer-21st.md (Status PARTIAL + Resolution: Testimonials DONE → NEXT FAQ)
4. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени в src/app/tokens.css)
5. src/components/sections/Testimonials.tsx + Pricing.tsx (ГОТОВІ reference-и: Framer Motion entrance/hover + маркі-прецедент) + чинні файли Faq.tsx / Footer.tsx

⚠️ MANDATORY CONSTRAINTS:
1. ONE TICKET AT A TIME — STOP після FAQ, чекай go на Footer. NO AUTO-ADVANCE.
2. НЕ чіпати 03 (Hero), 04 (Benefits), 05 (закрито), 07-10 — тільки секція 06.
3. BEFORE START питай: (a) grilling? (b) extra skills? (c) workflow? (очікувано: ні / ні / DIRECT EDIT).
4. Workflow: DIRECT EDIT у канонічних файлах (прототип/page-SWITCH відхилено прецедентом по Benefits).
5. 21st APPROVAL GATE: спершу `npx @21st-dev/cli usage` (очікується **1/2 get** — по 06 витрачено 1: get 822 Testimonials; auth як russ485). search --json → робочі лінки (поле url, формат https://21st.dev/c/<id> = 404!) → мій ok → webfetch ліцензія (MIT/Apache) ДО get. Saved ref: Feature Bento https://21st.dev/c/18898. REJECTED — не пропонувати: gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540, 9906 (unknown), 26916/26891/19861 (no-license), 19863/26902 (вертикальні), 19874/22087/22106 (no-license), 19099/1434/926/26920 (відхилені на користь 822).
6. Playwright — тільки тимчасові verify-спеки (писати → run → видалити). НЕ чіпати tests/baseline.spec.ts. ⚠️ test.use({ reducedMotion }) ігнорується у цій версії → page.emulateMedia({ reducedMotion: "reduce" }) перед goto.
7. Hero.tsx/03 — НЕ редагувати (незакомічені formatting-правки = канонічні).
8. Контент FAQ — frozen copy 6 питань (`.issues/tickets-legacy/02-landing-page-content-copy.md:117-137`) без переписування без мого ок.
9. Прецедент Testimonials (гідратизація × reduce): framer `useReducedMotion()` НЕ оновлює reduce-залежні атрибути після гідратизації (React ігнорує attribute-mismatch) → **reduce-класи НЕ давати в атрибути** (глушити через CSS media query); entrance при reduce = `initial="hidden"` + `transition { duration: 0 }`.

Стан на початок сесії:
- 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04 CLOSED; 05 CLOSED (REOPEN закрито 2026-09-26: статичне зображення, варіант A); 06 **PARTIAL** — Testimonials DONE (get 822 MIT, маркі 60s auto + pause on hover, `Testimonials.legacy.tsx`, ключі в `globals.css`, verify 3/3).
- У 06 лишається: **FAQ** (підпункт 2) → STOP → **Footer** (за ок): fix `text-primary-400` (токена немає) + дрейф copy (frozen: лінк **Contact**, без «Learning platform» — `Footer.tsx:21,26` навпаки).
- Known backlog: LCP dev-hint (benefits image eager/priority) → 08; 03 adaptive → окрема гриль-сесія.
- Контент: frozen copy з .issues/tickets-legacy/02-landing-page-content-copy.md — без переписування без мого ок.

Після прочитання:
- Проговори 3-5 пунктів що бачиш у коді (перевірка HANDOFF).
- Потім запитай: "Що робимо в FAQ?" і ЧЕКАЙ мої зауваження — без мого go не правити.
- Далі за прецедентом: search → approval gate → get/hand-replicate → direct edit → lint+build → temp verify → STOP.

Працюй українською, техтерміни English. Build+lint після змін, temp-спеки видаляти, STOP після кожного пункту.
```

## Prompt для сесії: Ticket 05 REOPEN (ВИКОРИСТАНО — закрито 2026-09-26, варіант A)

Скопіюй (у стару сесію 05 або в нову — промпт самодостатній):

```
Тікет 05 перевідкрито (2026-09-26) — одна задача: у HowItWorks сама картинка має бути СТАТИЧНОЮ (під сіткою), анімується лише маска/геп. НЕ авансимось далі; НЕ чіпати 03/04/06/07-10.

Спочатку прочитай:
1. HANDOFF.md (пункт «05 REOPEN» у «Відомі незакриті місця» + Resolution 05/HowItWorks + Resolution 06/Testimonials)
2. .issues/tickets-rebuild/05-pricing-howitworks-21st.md → секція `## REOPEN (2026-09-26)` — проблема, діагноз (HowItWorks.tsx:189-214 scale тайла масштабує вміст; HowItWorks.tsx:74-87 tileLoop), варіанти A/B, REJECTED, acceptance criteria
3. src/components/sections/HowItWorks.tsx (чинний код)

Проблема (моє рев'ю після закриття 05): кожен тайл має окремий шматочок зображення, і шматочок масштабується разом з тайлом → картинка виглядає розрізаною/руханою. Референс 9906: картинка з'явилась і весь час у одному положенні (статична під сіткою), маска в місцях гепу перекривала картинку, анімація відкривала/закривала закриту частинку.

Варіанти фіксу (hand-replicate, 0 × 21st get):
A) clip-path: inset(... round 16px) на повнорозмірних шарах з background-image у геометрії сітки — картинка в пікселях статична за побудовою;
B) counter-scale 1/s на motion.img, transform-origin = центр тайла у координатах img (originX% = (2c+cs/2)/COLS, originY% = (2r+rs/2)/ROWS) — ризик дрейфу швів (окрема ease-інтерполяція s та 1/s);
REJECTED (з історії): пульс на контейнері + контр-масштаб img (ітерація-2: переповнення за колонку + сіра смуга до 5px).

Порядок: покажи мені обидва підходи на живому коді/скріншотах → мій ok → DIRECT EDIT HowItWorks.tsx (HowItWorks.legacy.tsx не чіпати).

БЕЗ змін (незмінно): цикл CYCLE=6.2s / stagger 0.065 / hold 4.0s синхронно / синхронний fade ≈1.05s / rest 0.96 ↔ peak 1.0 / зникання на 0.96 / reduce → статика / loop після першого hover/tap / sticky active / frozen copy без крапок / rounded-lg / локальні картинки public/howitworks/ / без GSAP/gradient/CTA.

Acceptance: пікселі зображення на будь-якій фазі ≈ rest-фаза (скрін елемента → diff ≈ 0), мозаїка безшовна, геометрія ≤ контейнера (переповнення = 0), повтор циклу.
Verify: lint + build → тимчасова Playwright-спека (підхід 05: таймовані скріншоти, animations: 'allow'; ⚠️ test.use({reducedMotion}) ігнорується → page.emulateMedia({ reducedMotion: "reduce" }) перед goto) → спеку/скріншоти/test-results видалити → STOP. tests/baseline.spec.ts не чіпати.

Працюй українською, техтерміни English.
```

## User Preferences (frozen)

- Українська, техтерміни English, SaaS-leaning playful but professional, light only, CTA "Start learning", kids 7-16 + parents
- DIRECT EDIT у канонічних файлах; прототип/page SWITCH — відхилено (прецедент 04); gap/hover/циклічність без авто-анімації (**виняток, затверджено 2026-09-26:** маркі Testimonials — auto-рух одразу + pause on hover); scrub тільки на скрол
- Мікроанімації секцій — Framer Motion (spring для bounce); GSAP — Hero scrub + Ticket 07; контент секцій — frozen copy
- Послідовність усередині тікета: STOP між підпунктами (05: Pricing → HowItWorks, обидва DONE 2026-09-25)
- 21st: ліцензія обов'язова перед get; flip/scale/toggle у Pricing — rejected (див. Resolution)
- 03 adaptive — окремий тікет після грилю, зараз web/desktop enough
