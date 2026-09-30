# HANDOFF — AnnaBer Rebuild (2026-09-30, MAP DONE — 00-10 + 03 adaptive follow-up CLOSED; наступне лише за ок: коміт docs+src)

> **Живе в репо** (`HANDOFF.md:1`), не в `Temp` — щоб не зникав. Оновлюється після кожного тікета/сесії.

## Поточний стан

- **Ticket 00** `00-product-init` — **CLOSED** (PRODUCT.md + DESIGN.md via OD `ba33a560-5e9c-4520-a6ef-ca19c36b798e` + `tokens.css` + `layout.tsx` Fredoka/DM Sans)
- **Ticket 01** `01-playwright-baseline` — **CLOSED** (`tests/baseline.spec.ts`, `screenshots/baseline/` 375/768/1280, `FINDINGS.md`)
- **Ticket 02** `02-impeccable-critique` — **CLOSED** (`02-impeccable-critique.md:30` DONE 2026-09-01, health 18/32, P0/P1/P2, `impeccable/critique/annaber-baseline-02.md`)
- **Ticket 03** `03-hero-parallax-21st` — **CLOSED (2026-09-30)**: web/desktop (2026-09-04) + **F1** reduce-freeze `.hero-preview` (сесія 1) + **adaptive кнопки** (grid max-w-md, verify 3/3); **F2 height-runway → REJECTED власником** (відкочено повністю). Canonical `src/components/sections/Hero.tsx:1`. Resolution — секція `Resolution 03 / adaptive closing` нижче.
- **Ticket 04** `04-benefits-21st` — **CLOSED (2026-09-23)**, повний Resolution у `.issues/tickets-rebuild/04-benefits-21st.md:30` (gradient-card hand-replicate, DIRECT EDIT, Framer Motion hover, entrance прибрано «поки»).
- **Ticket 05** `05-pricing-howitworks-21st` — **CLOSED (2026-09-26)**: Pricing + HowItWorks DONE + анімація HowItWorks ітерація-3 + **REOPEN закрито (2026-09-26): статичне зображення — варіант A (clip-path mask на grid-cell, контент без трансформацій), верифіковано 2/2**. Повні Resolutions — у `.issues/tickets-rebuild/05-pricing-howitworks-21st.md:26` (REOPEN — секція `## REOPEN` наприкінці).
- **Ticket 06** `06-testimonials-faq-footer-21st` — **CLOSED (2026-09-28)**: **Testimonials DONE** (2026-09-26, get 822 serafim MIT) + **FAQ DONE** (2026-09-27, get 25011 intentui MIT) + **Footer DONE** (2026-09-28, **0 get** — typewriter-назва hand-replicate + **v2 гігантський outline ANNABER + v3 правки користувача (прозорий stroke 30%, text-left, 16.5vw/12.5rem, bottom-based позиціонування), verify 4/4**, квота 2/2 не витрачена). Resolutions — секції `Resolution 06 / Testimonials`, `Resolution 06 / FAQ`, `Resolution 06 / Footer` нижче.
- **Ticket 07** `07-gsap-motion-pass.md` — **CLOSED (2026-09-28)**: рішення **гібрид** (FM entrances у Pricing/HowItWorks лишились; GSAP = Hero + Benefits reveal), Hero `useGSAP`-уніфікація + matchMedia-guard, Benefits ScrollTrigger reveal (DESIGN 7.2, **`start "top 72%"` — власний підбір власника**), verify 4/4, **0 get**. Resolution — секція `Resolution 07` нижче.
- **Ticket 08** `08-impeccable-polish.md` — **CLOSED (2026-09-29)**: contrast 14→2 (FP), Fredoka 500-700, FAQ aria, токени accent-700/success-700, focus-visible повний, radius-ритм, **LCP 375: 3040→200ms**, detect 0 findings, 0 get. Resolution — секція `Resolution 08` нижче.
- **Ticket 09** `09-playwright-verification.md` — **CLOSED (2026-09-30)**: регенерація baseline 3/3 (спека не чіпана) + `screenshots/verification/` 24/24 повні, текстовий diff vs 02-critique, К4 5/6 PASS, **F1 reduce-freeze + F2 hero overflow → defer 03-adaptive grill**, 0 get. Resolution — секція `Resolution 09` нижче.
- **Ticket 10** `10-code-review.md` — **CLOSED (2026-09-30)**: two-axis review (Standards/Spec parallel sub-agents) за fixed point `f6d95ea...HEAD`; findings: Standards 4 / Spec 9; **фікси 4/4** (reduce-hydration Pricing/HowItWorks, Benefits frozen-copy periods, FAQ aria-controls conditional, popular checks → success-700); lint ✓ build ✓ temp-verify 5/5; Duplicated Code accepted. Resolution — секція `Resolution 10` нижче.
- **Далі:** **МАПА ВИКОНАНА (2026-09-30)** — 00-10 CLOSED + 03 adaptive follow-up закрито. Відкритий лише **коміт docs+src** (окремий go). Backlog-факт: втрата baseline01/FINDINGS.md (без дій). NO AUTO-ADVANCE — будь-яка нова робота лише за ок.

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

## Resolution 06 / FAQ (2026-09-27) — що зроблено

- **21st:** quota на старт сесії **2/2** (денний reset — get 822 був у попередній день, очікування «1/2» у промпті було застарілим) → **get 25011** intentui `disclosure-group` (**MIT**, webfetch ліцензії ДО get) → **1/2 лишився** (reset 2026-09-28). Робочий лінк: `https://21st.dev/@intentui/components/disclosure-group`. GATE: користувач дав 3 лінки → мій став-лення → обрано **#3 intentui** («найбільше подобається з точки зору анімації/логіки»), get схвалений. Власний search теж зроблено (free) — додаткові accordion-кандидати не знадобились.
- **REJECTED (не пропонувати):** prebuiltui `faq-sections` (**license unknown** → get заборонений; плюс консенсус: зображення в FAQ зайве — frozen content map без картинки, «no stock photos»), scrollxui `frequently-asked-questions-with-accordion` (MIT, але word-by-word blur-in headline over-the-top — «більш-менш» від користувача).
- **Workflow:** DIRECT EDIT `src/components/sections/Faq.tsx`; стара версія → `Faq.legacy.tsx` (не імпортується, повернення = 1 імпорт). Залежності intentui **всі викинуті**: react-aria-components (Disclosure/Button/Heading/composeRenderProps), tailwind-merge (`twMerge`/`twJoin`), `cx` — замінені на наш `useState` + `aria-expanded` (він уже був) + Framer Motion.
- **Дизайн:** single-open accordion, **default — перший рядок розкритий** (як demo intentui). Рядки `flex flex-col gap-2`, `rounded-xl border transition-colors duration-200`; відкритий: `border-primary-200 bg-primary-50` + питання `text-primary-600` + індикатор `text-primary-500`; закритий: `border-gray-200 bg-white hover:border-primary-200`. **Індикатор plus/minus** (intentui-прецедент): два spans `h-[1.5px] w-2.5`, поворотний `rotate-90→rotate-0` + постійний горизонтальний = «+» закритий / «−» відкритий (CSS `transition-transform duration-300`). Рядок: `<h3><button type="button">` — heading зовні button (valid content model, прецедент HowItWorks). Focus-visible ring `outline-2 outline-offset-[-2px] primary-500` (без змін).
- **Анімації:** панель — `AnimatePresence initial={false}` + `height: 0 → auto` **0.2s** ease `[0.16,1,0.3,1]` (прецедент HowItWorks; reduce → `duration: 0`); entrance — `hidden→shown` + `custom` stagger `0.1 + i×0.08` (прецедент Testimonials: `initial="hidden"` завжди, reduce → `transition { duration: 0 }`, reduce-класи НЕ в атрибути). Copy — frozen 6 питань дослівно ✓ (`02-copy:117-137`).
- **Verify:** lint ✓ build ✓; тимчасова Playwright-спека **4/4**: default-open + single-toggle (aria-expanded, другий клік — close) + індикатор `rotate` 0°/90°; **height growth** (in-page rAF-самплер: ріст від ~0, `min < max−10`, max >30); **reduce** (`emulateMedia` перед goto: entrance миттєвий, відповідь visible <300мс, висота стабільна, `transitionDuration <0.01s` від tokens.css guard); mobile 375 `scrollWidth ≤376` + toggle ✓. Скріншоти open-state desktop/mobile переглянуті вручну ✓ (tint/синій/«−» на місці). Спеки/скріншоти/test-results **видалені**, сервер :3000 зупинено, `tests/baseline.spec.ts` не чіпали.
- **⚠️ Нові gotcha (Playwright/Tailwind v4):** (1) **`rotate-0` компілюється в `rotate: none`** (індивідуальна CSS-властивість, не `transform`) → у спеках читати `getComputedStyle().rotate` і радити `none → 0` (`parseFloat("none")` = NaN); (2) `AnimatePresence` анімує **parent-панель** (`overflow-hidden`), тому `boundingBox()` на внутрішньому `<p>` постійний → висоту міряти на батькові, найкраще in-page rAF-самплер (без CDP-roundtrip затримок).

## Resolution 06 / Footer (2026-09-28) — що зроблено

- **21st:** **0 get** (квота 2/2 після reset 2026-09-28 — не витрачена). GATE: 2 референси від користувача → `animated-wave-footer` arihantcodes (**MIT**) + `hover-footer` mdafsarx (**unknown license → get заборонений**). **Hand-replicate без get** (затверджено): newsletter **REJECTED** (поза frozen copy), фон-SVG/хвиля **REJECTED** (фічою стає анімація назви; без автоцикл-винятку). REJECTED (додати до списків): `hover-footer` mdafsarx (unknown license).
- **Workflow:** DIRECT EDIT `src/components/sections/Footer.tsx`, legacy-файл не створювався (зміни адитивні). Extra skills — не потрібні (підтверджено).
- **Дизайн:** `text-primary-400 → text-primary-500` (#3B82F6, AA 4.9:1 на gray-900); copy: − «Learning platform», + «Contact» у **Company** (About us, Pricing, Blog, Contact / For parents, For teachers), frozen дослівно; **typewriter-назва**: 7 letter-span `inline-block overflow-hidden`, framer `width 0 → "auto"` (`duration 0.14`, `delay 0.35+i×0.1`), тригер `useInView(brand-column, once, amount 0.5)` (НЕ на літерах — zero-width IO), reduce → `duration 0 + delay 0`; **hover**: CSS `group-hover:-translate-y-1` per-letter, `transitionDelay i×30ms` (reduce-guard авто від tokens.css); entrance колонок Faq-прецедент + `transition-colors duration-200` на лінках.
- **Verify:** lint ✓ build ✓; тимчасова спека **4/4** (typewriter rAF growth + Ber `rgb(59,130,246)` + copy 4/2 + hover −4px/revert + reduce миттєво/`transitionDuration <0.01s` + mobile 375 `scrollWidth ≤376` + усі колонки opacity 1). Скріншоти desktop/mobile top+bottom переглянуті вручну ✓. Спека/debug/скріншоти/test-results видалені, :3000 зупинено, `baseline.spec.ts` не чіпали.
- **⚠️ Gotcha (нові):** (1) Tailwind v4 `-translate-y-1` → у спеках читати `getComputedStyle().translate` **поряд із** `transform`; (2) Playwright `toBeVisible` **ігнорує `opacity`** → entrance перевіряти computed opacity на motion-батьках; (3) element-скріншот footer (904px > viewport) кліпиться Playwright → viewport-скріншоти top/bottom.
- **Ітерація Footer v2 (2026-09-28) — гігантський outline-напис, verify 3/3 + lint/build ✓:** вибір користувача — outline + fill на hover кожної літери + ANNABER uppercase + typewriter на гігантському (малий wordmark → статичний + hover-lift). `text-[min(20vw,16rem)]` transparent + `[-webkit-text-stroke:2px_primary-500]` + hover fill; typewriter `width 0→auto` 0.16s delay 0.35+i×0.1 на `useInView(giantRef)`; `translate-y-[0.12em] lg:translate-y-[0.35em]` (lg — без перекриття лінок); grid/bar `pointer-events-none` + лінки `pointer-events-auto`; bar entrance custom 4 поверх літер (стиль hover-footer, свідомо). Піксель-діагностика: штрихи від y644(1280)/y894(768)/y603(375), 0 синіх у зоні Contact. Спеки/скріншоти/test-results видалені, :3000 зупинено.
- **⚠️ Gotcha v2:** (4) reduce/typewriter тести — `waitForTimeout(600)` після `goto` перед скролом (інакше гідратація scrollHeight неточний → useInView не спрацьовує); (5) footer < viewport → scroll clamp (top/bottom скріншоти ідентичні); (6) Read-інструмент повертав застаріле зображення перечитаних PNG → верифікувати піксельним аналізом (System.Drawing) або crop у новий файл.
- **Ітерація Footer v3 (2026-09-28) — зауваження користувача, verify 4/4 + lint/build ✓:** (1) літери обрізані знизу; (2) центрування → **ліворуч** (`text-left` + `pl-4 sm:pl-6 lg:pl-8`); (3) нав'язливість/перекриття соцмереж → база **прозора** `[-webkit-text-stroke:2px_rgb(59,130,246,0.3)]`, hover-fill = повний `--color-primary-500` (question tool: база 30%, fill 100%). Кегль `min(20vw,16rem) → min(16.5vw,12.5rem)`. **Позиціонування layout-based:** translate прибрано (`-webkit-text-stroke` ink ігнорує CSS `translate` — див. gotcha 7), натомість гігант-div `bottom-0 lg:bottom-[-36px]` → фінальний піксель-замір (з `document.fonts.ready`): **ink 564..707**, прогалина до Contact 12.5px, запас знизу 12.5px, 0 синіх у зоні Contact / y≥712; без fonts.ready — 554..697 (теж без накладання/обрізки). Спеки/скріншоти/test-results видалені, :3000 зупинено, `baseline.spec.ts` не чіпали.
- **⚠️ Gotcha v3:** (7) **CSS `translate` на батьківському span пересуває бокси/фон, але `-webkit-text-stroke` ink малюється без трансформа** → `translate-y-*` для гіганта неефективний, позиціонувати через `bottom-[-Npx]` (layout); (8) `test-results` очищається кожним запуском Playwright — старі піксельні заміри не перечитувати; (9) метрики ink залежать від `document.fonts.ready` — у спеках чекати перед мірянням/скріншотом (інакше ~10px drift); (10) `IsBlue`-фільтр ловить і gray-800 border + AA-текст (false positive) → повносмугові лінки окремим кольором, текстова зона — поріг ≥30 і x≥140 поза бренд-колонкою.

## Resolution 07 / GSAP motion pass (2026-09-28) — що зроблено

- **Рішення (question tool BEFORE START):** **гібрид** — FM entrances у Pricing/HowItWorks **лишились** (hover теж FM), секції 06 не чіпали; GSAP = Hero уніфікація + Benefits reveal. Grilling — ні; skills — gsap-scrolltrigger/react/performance + playwright-core; workflow — DIRECT EDIT; **0 × 21st get** (gate лише 03-06). `ui-ux-pro-max --domain gsap` CLI — **пропущено** (Python 3 не встановлено, лише WindowsApps alias — за рішенням власника), натомість snippet DESIGN 7.2 + gsap-skills.
- **Hero (`Hero.tsx`):** `useGSAP({ scope: sectionRef })` замість `useEffect` + ручного `gsap.context` (auto-revert, `useLayoutEffect` до paint → без flash); module-level `gsap.registerPlugin(ScrollTrigger, useGSAP)` (SSR-safe, prerender ✓); **єдиний reduce-guard = `matchMedia`** (прибрано дублювання reduce-hook + matchMedia; зник подвійний запуск entrance при null→boolean переході хука після гідратизації — старий `useEffect [reduce]` перестворював timeline). Scrub `hero-blur-1/2` + entrance timeline + FM preview — **без змін**; GSAP-скраб `.hero-preview` (DESIGN 7.1) НЕ додано (битиметься з FM `translateY [-370,70]`, 03-затверджено); третій блоб без класу — лишився (DESIGN визначає лише blur-1/2).
- **Benefits (`Benefits.tsx`):** ScrollTrigger reveal DESIGN 7.2 — `y:14`, `opacity 0→1`, `duration 0.5`, `stagger 0.1`, `ease "expo.out"`, trigger `[data-reveal]`, **`start "top 72%"`**: історія `82%` (DESIGN) → `40%` (мій фікс за «нижній ряд не видно під час каскаду») → **`72%` самостійно встановив власник** (візуально перевірено — фінальне). Guard `matchMedia`; лише `transform/opacity`. **Wrapper-div `data-reveal-item`** навколо кожної картки: grid-класи (`lg:col-span-2`, `${benefit.place}`) → wrapper, картка `h-full` → GSAP-анімує transform wrapper'а, FM `whileHover` scale — внутрішнього вузла (без конфлікту в одному inline `transform`; рівні висоти рядів збережені). Початковий стан — **з JS, без SSR-атрибутів** → прецедент гідратизація × reduce ✓; при `reduce` гілка не створюється (контент visible) → «entrance прибрано в 04 «поки»» тепер закритий через 07.
- **Verify:** lint ✓ build ✓; тимчасова спека **4/4 при `start 40%`**: (1) desktop 1280×800 — стартовий стан wrapper `opacity <0.01` (нижче fold) → trigger: нижній ряд (4-та картка) `top < innerHeight` → rAF-самплер: усі 5 `≥0.99` за 1.4s, stagger (t1 < t5, на t1 `opacity(card5) <0.05`), `y1 >0.5` при вході → фінальний `|y| <0.5`; **no layout shift** (`offsetTop/offsetHeight` до = після); **no pin** (`.pin-spacer` null, `scrollHeight` stable); `scrollWidth ≤1281`; (2) **reduce** (`emulateMedia` перед goto): `.hero-blur-1` `transform/translate = none`, badge `opacity 1` без inline; усі wrapper `opacity 1` + inline `transform ""`; (3-4) smoke 768/375 — reveal до 1.0, `scrollWidth ≤ w+1`. Скріншоти mid/final вручну ✓. **Примітка:** прогін при `40%`; фінальне `72%` — після прогону (власник) → позиційна асерція «нижній ряд < innerHeight» чинна лише для 40%, механіка reveal від позиції тригера не залежить. Спека/скріншоти/test-results видалені, :3000 зупинено, `baseline.spec.ts` не чіпаний.
- **⚠️ Gotcha (нові):** (11) `start "top 82%"` для сітки у 2+ ряди → каскад закінчується поки нижній ряд поза екраном → значення підбирається візуально (40% vs фінальні **72% власника**); (12) stagger-асерції міряти «стан іншого елемента на t(N)», не на власному перетині (на t5 opacity(card5) вже ≈0.2 — хибна помилка спеки); (13) `playwright.config` `reuseExistingServer` → **застарілий :3000 попередньої сесії переиспользується** (стара збірка!) → перед запуском вбивати порт (`Get-NetTCPConnection -LocalPort 3000`).

## Resolution 08 / Impeccable polish (2026-09-29) — що зроблено

- **Рішення групи (усі «так», 5 питань):** A — CTA→`primary-600`; D+E — 4 прості заміни; B+C — токени `accent-700`/`success-700` + зірки→`accent-600`; F — усі 3 focus-пункти (ring-primary-500, FAQ `rounded-xl`+`outline-offset-2`, брендовані лінки); HowItWorks `p-4` — лишити. REJECTED: лінійна контрастність gray-400/500 (544 заміни заради неіснуючої вимоги), Pricing residual drift, Benefits bento 3+2, «Learn more». Skills: impeccable + playwright-core; DIRECT EDIT; **0 × 21st get**.
- **Етап 2:** `layout.tsx` Fredoka `weight:["500","600","700"]` (P1-4); `Faq.tsx` `aria-controls`/`id="faq-panel-N"` (P1-5).
- **Етап 3 contrast/focus:** `tokens.css` +accent-700 `#C2410C` +success-700 `#15803D`; `Hero.tsx` CTA 600/700 + ring-primary-500 + preview-Link focus; `Pricing.tsx` badge/градієнт 600-700, checks success-700; `HowItWorks` accent-700/gray-500; `Benefits` стрілка gray-500; `Testimonials` SM→primary-700, DK→accent-700, ML→success-700, зірки→accent-600; `Footer` копірайт gray-400 + усі anchors `focus-visible:outline-2 offset-2 primary-500`; `Faq` button `rounded-xl`+`outline-offset-2`. **Contrast 14→2 (обидва FP: спека бере computed style першого stop'а градієнта; реальний мінімум 5.17/6.70 PASS)**. Focus live: ring white+offset+`rgb(59,130,246)`, лінки `solid 2px primary-500 off:2px` ✓.
- **Етап 4 radius:** `Pricing` `rounded-2xl→rounded-xl` + `md:p-7→md:p-8`; `Benefits` `rounded-xl→rounded-lg` (24/16-шкала DESIGN).
- **Етап 5 LCP (backlog закрито):** реальний LCP = Hero preview Unsplash img (не benefits-підказка). Вимірювання rects: у первому viewport лише оригінали (дублікати-півциклі ніколи). `ProductCard` `priority`-проп → `loading="eager"` + `fetchPriority="high"` на 10 оригіналів (ряд0 idx<4, ряд1 idx<3, ряд2 idx<3), решта lazy. **LCP: 375 3040→200ms, 768 512→192ms, 1280 360→188ms** (CDN теплий — частину дає кеш; eager+priority підтверджено `complete=true`).
- **Етап 6:** `detect.mjs` 9 файлів → 1 finding (bounce `--ease-spring-soft` — канонічний DESIGN.md токен, unused) → inline-ignore → **0 findings exit 0**; скріни 375/768/1280 top+375-full вручну ✓; фінальний прогін fails=2(FP)/overflow ✓/console 0/focus 59/59; lint+build ✓. Прибрано temp-спеку/скріни/скрипти, :3000 зупинено, `baseline.spec.ts` не чіпаний.
- **⚠️ Gotcha (нові):** (14) **декілька `next start`+rebuild поспіль → змішаний стан ассетів** (каламутні rects, хибні 0-visible) → вбивати :3000 перед rebuild+measure; (15) `fetchPriority` camelCase у React 19 ✓; (16) lab()→sRGB у temp-спеці ±3 ΔE — ок для діагностики; без конверсії діагностика контрасту хибить на Tailwind v4.1 `@supports lab()` gray-токенах.

## Resolution 09 / Playwright verification (2026-09-30) — що зроблено

- **Рішення BEFORE START:** grilling — ні; skills — `playwright-core`; workflow — run spec + temp-спеки + docs (**без правок src**); **diff = текстовий** (питання через втрату даних, див. нижче); 0 × 21st get. `tests/baseline.spec.ts` **не редагувався**.
- **⚠️ Втрата стартових baseline:** `screenshots/baseline/` (01) + `FINDINGS.md` зникли (`screenshots/` gitignored, у git ніколи не комітились; `f6d95ea` 2026-09-04 уже з перебудованим Hero → реконструкція «скучненько» з git неможлива). Diff-«старт» = `.impeccable/critique/annaber-baseline-02.md` + Resolutions 03-08.
- **Regeneration:** kill :3000 (stale PID 35552) → lint ✓ build ✓ → спека **3/3 PASS** → 24 PNG `screenshots/baseline/`. **Лімітація spec: 21/24 blank/mid-fade** (scrollIntoView→screenshot без очікувань входів; `fullPage` не скролить → lazy-img + нижні входи не фірять). За ok: temp-спека (scroll-through → images/fonts ready → settle 1.9s) → **`screenshots/verification/` 24/24 повні**, verified pixel-аналізом (distinct 125-12300 vs 1-2) + crop'ами. `baseline/` лишився «як є».
- **К4 temp-verify 6 тестів:** overflow `scrollWidth==iw` ✓; cut-off candidates by-design ✓; `scrollHeight 5430→5430`, no pin ✓; Hero parallax change/return ✓; console 0 ✓; **reduce PARTIAL → F1**. Спеки/скріни/test-results видалені, :3000 вбито (після прогону лишався PID 32764 — див. gotcha 19).
- **Diff-звіт:** P0-1/P0-3/P1-1/P1-3/P1-4/P1-5/P2-1/P2-3/P2-4 FIXED; P1-2/P2-2/P2-5 SUPERSEDED/MOOT (redesign); P0-2 → redesign + 03-adaptive; **P1-6 (2026-09-01) не закритий → F1**. Повний текст — `.issues/tickets-rebuild/09-playwright-verification.md:25`.
- **F1 (defer 03-adaptive grill):** `.hero-preview` під reduce = SSR-стан назавжди (`opacity 0.2` + `translateY -370` + tilt 12°, `dynamic=false`; React ignored style-mismatch — рецидив прецедента 06; бранч `Hero.tsx:287-296`). Blur/benefits/marquee guard-и ✓.
- **F2 (defer 03-adaptive grill):** обрізка рядів hero на settled-стані (`h-[180vh]` vs px/рем-контент): 1280×800 → **161px (r3)**, 700→341, 600→521, 500→701; 768 → 38/218/398/578; 375×800 → **0** (єдиний чистий), 375×700/600/500 → 85/265/445.
- **⚠️ Gotcha (нові):** (17) **спека-скріншоти без settle → blank** (entrance 0.5-1.6s + `fullPage` без скролу) → знімки з поведінкою робити окремою temp-спекою з scroll-through + settle; сам `baseline.spec.ts` не чіпати; (18) **втрата `screenshots/` = втрата усього**, що в gitignore (baseline01, FINDINGS.md) — цінні артефакти в 09+ дублювати в docs; (19) `webServer` Playwright іноді **лишає `next start` живим після прогону** (PID 32764) → перевіряти :3000 після кожного запуску, не лише перед; (20) **reduce × hydration рецидив**: FM-бранч reduce в attributes знову загубився після гідратизації (F1) — правило 06 «reduce-класи не в атрибути» поширюється і на inline style з MotionValue-станом.

## Resolution 10 / Code Review (2026-09-30) — що зроблено

- **Рішення BEFORE START (question tool):** grilling — ні; skills — **`code-review`** (за map-порядком) + **`playwright-core`** (verify фіксів); fixed point — **`f6d95ea...HEAD`** (`main...HEAD` = порожньо — ми на main == `origin/main` == `9ca8d54`; `46aeec4` = лише README); **working tree (4 docs) — рев'ю без коміту**. Workflow за skill: pin fixed point → 2 parallel sub-agents (`general`) в одному повідомленні → агрегація `## Standards` / `## Spec` (без rerank між осями) → фікси. **0 × 21st get.**
- **Sources:** Standards = `AGENTS.md` + `HANDOFF.md` (documented decisions, repo overrides) + smell baseline (Fowler ×12); Spec = map + frozen copy `.issues/tickets-legacy/02-landing-page-content-copy.md` + `PRODUCT.md` + токени `src/app/tokens.css`/`MASTER.md` + тікети 03-08 (OD MCP недоступний у сесії саб-агента → fallback локальний ✓).
- **Findings (повністю у `.issues/tickets-rebuild/10-code-review.md` Resolution):** **Standards 4** — worst = hard: reduce-hydration `initial={reduce ? "shown" : "hidden"}` у `Pricing.tsx:92` + `HowItWorks.tsx:125,175` (рецидив gotcha 20; Faq/Testimonials дотримувались правила); smells: **Duplicated Code** `ease`+entrance/hover variants ×5 файлів → **accepted** (refactor 5 верифікованих секцій = ризик), Duplicated Code minor (GSAP register+guard ×2, Footer letter-loop ×2), Mysterious Name minor (`place`, `APPEAR/REST/PEAK_AT`). Suppressed by repo override: clipPath/height/width-анімації, `useGSAP({scope})`, legacy-файли. **Spec 9** — worst = frozen copy Benefits (5 trailing periods); + checks наполовину (`success-700` лише non-popular), FAQ dangling `aria-controls`; (a) 03 adaptive PARTIAL/09 gitignored/07 `72%` не переганявся; (b) scope-creep = Phosphor renames (`3946637`), Hero formatting (07/08), `min-h` (`b17b52e`) → усі в санкціонованих комітах → accepted.
- **Фікси 4/4:** (1) `Pricing`/`HowItWorks`: `initial="hidden"` завжди + `entranceVariants` перенесено з module-level у компонент, `transition: reduce ? { duration: 0 } : {...}` (канонічний прецедент Faq:50-52); (2) `Benefits.tsx` — прибрано 5 крапок (copy дослівно `02:31-35`); (3) `Faq.tsx` — `aria-controls={isOpen ? \`faq-panel-N\` : undefined}`; (4) `Pricing.tsx:143` — усі checks `text-success-700`.
- **Verify:** lint ✓ build ✓; temp-спека **5/5**: reduce-entrance instant (opacity ≥0.99 за 300мс, pre-scroll <0.5, **0 console errors**), normal entrance завершується, FAQ single-panel aria (рівно 1 `faq-panel-*` у DOM), Benefits 5/5 verbatim, popular check `rgb(21,128,61)` + скріншот вручну ✓. Спека/скріншот/test-results видалені, :3000 вбито (**gotcha 19** знову — лишився після прогону), `baseline.spec.ts` не чіпаний. ⚠️ Спека-нюанс: `ancestor::div[contains(@class,'h-full')]` ловить card (class-list) замість entrance-wrapper → exact `@class='h-full'`.

## Resolution 03 / adaptive closing (2026-09-30) — F1 + F2 + adaptive; MAP DONE

- **Рішення BEFORE START (обидві сесії):** grilling — грил проведено у сесії 1, рішення виконувались без повторного; skills — `playwright-core`; workflow — **DIRECT EDIT** `src/components/sections/Hero.tsx` (єдиний src-файл); **0 × 21st get**. `tests/baseline.spec.ts` не чіпаний.
- **F1 (сесія 1, DONE, верифіковано 2/2):** `Hero.tsx:287` reduce-ternary прибрано → завжди `style={{ rotateX, rotateZ, translateY, opacity }}`; `.hero-preview` + `motion-reduce:opacity-100! motion-reduce:transform-none!` (CSS media → SSR=клієнт, прецедент 06). **ProductCard ternary (`Hero.tsx:131`) лишився — рішення A-мінімум** (див. gotcha 21). Normal: паралакс 0.2→>0.9→0.2; reduce: opacity 1 / transform none / статично / картки статичні / 0 console errors.
- **F2 (сесія 2, виконано → REJECTED власником):** варіант A `h-[220vh] lg:h-[240vh]` + тайттенінг (`mb-6 md:mb-8`→`mb-6`, `md:mt-10`→`mt-8`) верифіковано **13/13** (12 гео-комбо чисті; **модель підтверджена точно**: contentBottom = layout + settled translateY 70 → **1345 / 1454.6 / 1577**, пороги **612 / 661 / 657**, найгірший запас −12.8px @768×667; no `.pin-spacer`, scrollHeight 5910→5910), але **повністю відкочено**: «дуже завеликий відступ знизу, так було краще і все було видно — себе не виправдало». Hero = `h-[180vh]` + `mb-6 md:mb-8` + `mt-8 md:mt-10`; git diff Hero містить **лише F1 + adaptive**. Обрізка рядів на малих vh (таблиця Resolution 09) = **статус-кво**. REJECTED (не пропонувати): зміна translateY [-370,70], bottom-fade маска, лише-tighten без height, будь-який height-runway («завеликий відступ»).
- **Adaptive (сесія 2, DONE, verify 3/3):** `.hero-cta` `flex flex-wrap items-center justify-center gap-4` → `mx-auto grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2`; обидві кнопки + `w-full justify-center` (копірайт/стилі frozen без змін; sizes/top/mt/3 ряди карток — не чіпались). Ширина обох кнопок **diff = 0.00px** (±0.5): 375 → **343/343**, 768/1280 → **216/216** (було 175/202); `scrollWidth ≤ w+1`; скріни before/after 375/768 показані власнику. REJECTED: `flex-1` у max-w-2xl, `min-w-[210px]`, fixed `w-[210px]`.
- **Verify:** lint ✓ build ✓ (після кожної сесії); temp-спеки/скріни/test-results видалені, :3000 вбитий. Коміт docs+src — **окремий go** (backlog).
- **⚠️ Gotcha (нові):** (21) **ProductCard ternary = dev-only hydration badge:** reduce-клієнт `style={{}}` ≠ сервер `style={{transform:"none"}}` (reduce=null → FM identity) → Next devtools червоний «1 Issue» у **dev**; **prod мовчки ігнорує** attribute-mismatch (0 console errors). F1-residual (A-мінімум) — не чіпати без ок; (22) **`reuseExistingServer` переиспользує ЗОВНІШНІЙ dev-сервер** на :3000 (доказ: `.next/dev` mtime під час сесії) → перевіряти не лише порт, а ЩО за процес його тримає; (23) **sticky у Hero інертний:** `overflow-hidden` на секції = нерухомий scrollport → `stickyTop@mid = −scrollY` (pre-existing, не регресія; модель F2 `cut = contentBottom − sectionBottom` саме для статичного скролу) — міняти тільки з ок.

## Відомі незакриті місця (мимо поточного тікета)

1. **LCP dev-hint — ВИРІШЕНО в 08** (2026-09-29): реальний LCP = Hero preview img → eager+fetchPriority, 375: 3040→200ms. Benefits-підказка була хибною.
2. ~~03 adaptive~~ → **ЗАКРИТО 2026-09-30** (F1 + adaptive DONE, F2 REJECTED — див. `Resolution 03 / adaptive closing`).
3. Незакомічені правки: docs (map, тікети 00/01/02/03/08/09/10, HANDOFF) + **src** (`Hero.tsx` F1+adaptive, фікси 10: `Benefits.tsx`, `Faq.tsx`, `HowItWorks.tsx`, `Pricing.tsx`) — src-частини 06/07/08 уже закомічені у `9ca8d54` (2026-09-29) → закомічити docs+src разом (після closing go).
4. Втрата `screenshots/baseline/` (01) + `FINDINGS.md` — факт, задокументовано у Resolution 09; піксельний diff vs 01 неможливий (відновити можна лише з бекапів користувача, якщо знайдуться).
5. ~~Drift `01-playwright-baseline.md`~~ → **ВИправлено 2026-09-30** (ok «приведи у відповідність»): статуси тікетів **00/01/02 → CLOSED** (00 — 2026-08-31, 01/02 — 2026-09-01), Resolution 01 дописано (artifact loss documented), 03 Status wording → PARTIAL як у map, map `Status` → **ACTIVE (00-10 done, лише 03 follow-up відкритий)**.

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
- Playwright — тільки тимчасові verify-спеки (писати → run → видалити); `tests/baseline.spec.ts` НЕ чіпати (09 завершено — спека лишається недоторканою; знімки з поведінкою через окремі temp-спеки)
- Контент секцій — frozen copy з `.issues/tickets-legacy/02-landing-page-content-copy.md` (без переписування без ок)
- Мікроанімації секцій — Framer Motion; GSAP — лише Hero scrub + Ticket 07

## Prompt для наступної сесії (Ticket 06, підпункт 3: Footer) — ВИКОРИСТАНО (2026-09-28, Footer DONE)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 06, підпункт 3: Footer (останній у 06; після нього 06 CLOSED). НЕ авансимось на 07. Testimonials + FAQ DONE.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — 06 PARTIAL: Testimonials DONE 2026-09-26 + FAQ DONE 2026-09-27; quota 1/2 get, reset 2026-09-28; секції Resolution 06 / Testimonials та Resolution 06 / FAQ)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/06-testimonials-faq-footer-21st.md (Status PARTIAL + Resolution: FAQ DONE → NEXT Footer)
4. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени в src/app/tokens.css)
5. src/components/sections/Footer.tsx (чинний) + reference-и Testimonials.tsx / Faq.tsx (entrance-прецеденти)

⚠️ MANDATORY CONSTRAINTS:
1. ONE TICKET AT A TIME — STOP після Footer, чекай go на 06 CLOSED / 07. NO AUTO-ADVANCE.
2. НЕ чіпати 03 (Hero), 04 (Benefits), 05 (закрито), 07-10 — тільки секція 06.
3. BEFORE START питай: (a) grilling? (b) extra skills? (c) workflow? (очікувано: ні / ні / DIRECT EDIT).
4. Workflow: DIRECT EDIT у канонічних файлах (прототип/page-SWITCH відхилено прецедентом по Benefits).
5. 21st APPROVAL GATE: спершу `npx @21st-dev/cli usage` (очікується **1/2 get**, reset 2026-09-28 — по 06 витрачено get 822 + get 25011). Footer, скоріш за все, — фікси/hand-replicate без get. Якщо get: search --json → робочі лінки (поле url, формат https://21st.dev/c/<id> = 404!) → мій ok → webfetch ліцензія (MIT/Apache) ДО get. Saved ref: Feature Bento https://21st.dev/c/18898. REJECTED — не пропонувати: gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540, 9906 (unknown), 26916/26891/19861 (no-license), 19863/26902 (вертикальні), 19874/22087/22106 (no-license), 19099/1434/926/26920 (відхилені на користь 822), prebuiltui faq-sections (unknown), scrollxui faq-accordion (blur-in over-the-top).
6. Playwright — тільки тимчасові verify-спеки (писати → run → видалити). НЕ чіпати tests/baseline.spec.ts. ⚠️ test.use({ reducedMotion }) ігнорується → page.emulateMedia({ reducedMotion: "reduce" }) перед goto. ⚠️ Tailwind v4: rotate-0 = rotate: none → читати getComputedStyle().rotate.
7. Hero.tsx/03 — НЕ редагувати (незакомічені formatting-правки = канонічні).
8. Контент Footer — frozen copy (`.issues/tickets-legacy/02-landing-page-content-copy.md:141-168`) без переписування без мого ок.
9. Прецедент гідратизація × reduce: reduce-класи НЕ давати в атрибути (глушити через CSS media query); entrance при reduce = `initial="hidden"` + `transition { duration: 0 }`.

Scope Footer (з Resolution 06 / FAQ — NEXT):
- fix `text-primary-400` (Footer.tsx:44 — токена немає в tokens.css → заміна на існуючий токен, на твій розсуд/питання)
- дрейф copy: frozen links (02-copy:145-151) = About us, Pricing, For parents, For teachers, Blog, **Contact** → прибрати «Learning platform» (Footer.tsx:21), додати Contact
- опційно: entrance/hover Framer Motion за прецедентом (reduce: initial="hidden" + duration 0)

Стан на початок сесії:
- 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04 CLOSED; 05 CLOSED; 06 **PARTIAL** — Testimonials DONE + FAQ DONE (get 25011 intentui MIT, single-open accordion, default перший рядок, plus/minus, AnimatePresence height 0.2s, `Faq.legacy.tsx`, verify 4/4).
- У 06 лишається тільки **Footer** (підпункт 3) → після нього 06 CLOSED.
- Known backlog: LCP dev-hint (benefits image) → 08; 03 adaptive → окрема гриль-сесія.
- Контент: frozen copy з .issues/tickets-legacy/02-landing-page-content-copy.md — без переписування без мого ок.

Після прочитання:
- Проговори 3-5 пунктів що бачиш у коді (перевірка HANDOFF).
- Потім запитай: "Що робимо в Footer?" і ЧЕКАЙ мої зауваження — без мого go не правити.
- Далі за прецедентом: (за потреби search → approval gate) → direct edit → lint+build → temp verify → STOP.

Працюй українською, техтерміни English. Build+lint після змін, temp-спеки видаляти, STOP після кожного пункту.
```

## Prompt для наступної сесії (go: 06 CLOSED → Ticket 07) — ВИКОРИСТАНО (2026-09-28, 07 CLOSED)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — це мій go на закриття 06 (усі DONE: Testimonials + FAQ + Footer v3, 2026-09-28), далі Ticket 07 (GSAP motion pass). НЕ авансимось на 08.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (Resolutions 05/06 включно з Footer v2/v3 + gotcha 1-10; квота 2/2 get недоторкана)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/06-testimonials-faq-footer-21st.md → Status → CLOSED (цей промпт = мій go); map рядок 06 → CLOSED
4. .issues/tickets-rebuild/07-gsap-motion-pass.md + PRODUCT.md + AGENTS.md (DESIGN.md 7.1/7.2 motion — через Open Design MCP)

Крок 1: закрий 06 (тікет Status CLOSED + map рядок 06 CLOSED) → покажи diff і STOP, чекай мій «go» на старт 07.

Крок 2 (Ticket 07) BEFORE START обов'язково питай: (a) grilling? (b) extra skills? (передбачаю gsap-scrolltrigger/gsap-react/gsap-performance + playwright-core; 21st для 07 не потрібен — gate стосується 03-06) (c) workflow? (за прецедентом: DIRECT EDIT у канонічних файлах).

Scope 07 (з тікета):
- gsap.registerPlugin(ScrollTrigger) scoped через gsap.context
- Hero: scrub parallax на bg shapes/illustration (scrub: 1, yPercent/scale) — з 03 частково вже є (hero-blur/1/2, useReducedMotion guard) → уніфікувати, НЕ переписувати Hero з нуля
- Benefits/Pricing/HowItWorks: ScrollTrigger staggered reveal (0.1-0.2s), лише transform/opacity
- ⚠️ КОНФЛІКТ-ПИТАННЯ (обговорити ПЕРЕД правками): ці секції вже мають Framer Motion entrances (custom stagger, initial="hidden") — замінити їх на ScrollTrigger чи залишити FM, а GSAP лишити тільки Hero? Мій прецедент: мікроанімації секцій — Framer Motion, GSAP — Hero scrub + Ticket 07 → запропонуй варіанти, чекай рішення.
- Respect prefers-reduced-motion (useReducedMotion з framer-motion), disable ScrollTrigger при reduce
- Verify 375/768/1280, no layout shift, no pin overflow; опційно ui-ux-pro-max --domain gsap (--motion 8 snippet)

⚠️ MANDATORY: ONE TICKET AT A TIME, NO AUTO-ADVANCE. НЕ чіпати 03/04/05/06 (редагувати їхні секції тільки як частину 07 stagger і з мого ок). Frozen content без переписування. Playwright тільки temp-спеки (писати → run → видалити; page.emulateMedia({ reducedMotion: "reduce" }) перед goto; читати getComputedStyle().translate/.rotate; чекати document.fonts.ready перед піксель-замірами; test-results очищається щозапуску). Build+lint після змін. STOP після кожного підпункту.

Стан: 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04/05 CLOSED; 06 → CLOSED (цей промпт); 07-10 OPEN. Known backlog: LCP dev-hint → 08; 03 adaptive → окрема гриль-сесія. Квота 21st: 2/2 get (денний reset).

Працюй українською, техтерміни English.
```

## Prompt для наступної сесії (Ticket 08: Impeccable Polish) — ВИКОРИСТАНО (2026-09-29, 08 DONE)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 08: Impeccable Polish (07 закрито). НЕ авансимось на 09.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (Resolutions 05/06/07 + gotcha 1-13; «Відомі незакриті місця» — LCP dev-hint = кандидат саме в 08; квота 21st get 2/2 недоторкана)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/08-impeccable-polish.md (Status OPEN → ведемо Resolution)
4. .issues/tickets-rebuild/02-impeccable-critique.md:30 (DONE 2026-09-01, health 18/32, P0/P1/P2) + повний звіт impeccable/critique/annaber-baseline-02.md
5. PRODUCT.md + AGENTS.md (DESIGN.md через Open Design MCP id ba33a560-5e9c-4520-a6ef-ca19c36b798e; токени src/app/tokens.css)

⚠️ Ключове: звіт 02 — по СТАРТОМУ білду; секції 03-07 з тих пір перебудовані → спершу звір кожен P0/P1/P2 з поточним кодом (частина могла зникнути сама), потім фікси. Не фіксити те, що вже не відтворюється.

BEFORE START обов'язково питай: (a) grilling? (b) extra skills? (передбачаю: impeccable — обов'язковий за map-воркфлоу (00 init + 02 critique → 08 polish); playwright-core для temp-verify; ui-ux-pro-max CLI недоступний — Python 3 не встановлено, ще раз не питай по ньому, якщо не скажу) (c) workflow? (за прецедентом: DIRECT EDIT). 21st — НЕ потрібен (gate стосувався 03-06); якщо виникне потреба — спершу approval gate.

Scope 08 (з тікета):
- Fix P0 → всі, P1 → спробувати, P2 → за часом: hierarchy, contrast WCAG AA, spacing rhythm, focus-visible, responsive 375/768/1280
- LCP dev-hint (backlog HANDOFF): визначити реальний LCP (скоріш за все Hero-зображення → йому loading="priority"), Benefits-підказку не «лікувати» навмання
- Verify: `npm run build` clean + temp-спеки 375/768/1280 (писати → run → видалити)

⚠️ MANDATORY: ONE TICKET AT A TIME, NO AUTO-ADVANCE. НЕ чіпати 03 (Hero адаптив — окрема гриль-сесія), секції 04-07 — лише як частини явних фіксів з мого ок. Frozen content без переписування. `tests/baseline.spec.ts` НЕ чіпати (він для 09). Playwright: page.emulateMedia({reducedMotion:"reduce"}) перед goto; читати getComputedStyle().translate/.rotate; document.fonts.ready перед піксель-замірами; test-results очищається щозапуску; перед запуском вбивати застарілий :3000 (gotcha 13 — reuseExistingServer переиспользує стару збірку). Build+lint після змін. STOP після кожного підпункту.

Стан: 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04/05/06/07 CLOSED; 08-10 OPEN. Known backlog: LCP dev-hint → 08 (ця сесія); 03 adaptive → окрема гриль-сесія. Квота 21st: 2/2 get (денний reset).

Після прочитання: проговори 3-5 пунктів що бачиш у поточному стані (перевірка HANDOFF + звірка 02-критики з кодом), потім запитай "Що робимо в 08?" і ЧЕКАЙ мій go — без нього не правити.

Працюй українською, техтерміни English.
```

## Prompt для наступної сесії (Ticket 09: Playwright verification) — ВИКОРИСТАНО (2026-09-30, 09 DONE)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 09: Playwright verification (08 закрито 2026-09-29). НЕ авансимось на 10.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — Resolutions 05-08, gotcha 1-16; LCP-backlog закритий)
2. .issues/map-annaber-rebuild.md (active wayfinder — 08 CLOSED)
3. .issues/tickets-rebuild/09-playwright-verification.md (Status OPEN → ведемо Resolution)
4. .issues/tickets-rebuild/01-playwright-baseline.md + FINDINGS.md (стартові baseline-знімки/знахідки — з ними diff)
5. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени src/app/tokens.css)

Крок 1 (Ticket 09) BEFORE START обов'язково питай: (a) grilling? (b) extra skills? (передбачаю playwright-core; ui-ux-pro-max CLI недоступний — Python 3 не встановлено, ще раз не питай) (c) workflow?

Scope 09 (з тікета/map): регенерація `screenshots/baseline/` (375/768/1280) через `tests/baseline.spec.ts` (він НЕ редагується — лише запускається), diff vs стартових baseline 01, звіт що змінилось по секціях 03-08. Якщо в спеці є contrast-перевірки: Tailwind v4.1 накриває gray-токени у `@supports lab()` → конвертувати lab→sRGB (±3 ΔE, див. Resolution 08).

⚠️ MANDATORY: ONE TICKET AT A TIME, NO AUTO-ADVANCE. `tests/baseline.spec.ts` НЕ чіпати (редактувати — тільки якщо він сам падає, з мого ок). Playwright: перед запуском вбивати застарілий :3000 (gotcha 13/14), test-results очищається щозапуску; temp-спеки — тільки якщо треба (писати → run → видалити). Build+lint після змін. STOP після кожного підпункту.

Стан: 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04/05/06/07/08 CLOSED; 09-10 OPEN. Known backlog: 03 adaptive → окрема гриль-сесія. Квота 21st: 2/2 get (gate стосується 03-06; для 09 не потрібен).

Працюй українською, техтерміни English.
```

## Prompt для наступної сесії (Ticket 10: Code Review) — ВИКОРИСТАНО (2026-09-30, 10 CLOSED)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — це мій go на старт Ticket 10: Code Review (09 закрито 2026-09-30). НЕ авансимось за межі 10.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — Resolutions 05-09, gotcha 1-20; «Відомі незакриті місця»; F1/F2 defer в 03-adaptive grill)
2. .issues/map-annaber-rebuild.md (active wayfinder — 09 CLOSED, 10 останній)
3. .issues/tickets-rebuild/09-playwright-verification.md (CLOSED — контекст diff + F1/F2)
4. .issues/tickets-rebuild/10-code-review.md + skill `code-review` (Standard vs Spec, parallel sub-agents)
5. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени src/app/tokens.css)

Крок 1 (Ticket 10) BEFORE START обов'язково питай: (a) grilling? (b) extra skills? (передбачаю: `code-review` — за map workflow (skills порядок: … → code-review (10)) + playwright-core для verify фіксів; ui-ux-pro-max CLI недоступний — Python 3 не встановлено, ще раз не питай) (c) workflow? (та з чого робити фіксовану точку diff — див. нюанс нижче).

Scope 10 (з тікета):
- Фіксована точка: `git diff main...HEAD` або `46aeec4...HEAD` (first commit) — ⚠️ НЮАНС: `46aeec4` = лише README, перший реальний коміт = `f6d95ea` (2026-09-04); плюс у дереві є незакомічені правки 06/07/08/09 (HANDOFF/map/тікети/секції) → спитати: комітити docs+src перед рев'ю чи рев'ювати working tree?
- Standards axis: repo standards + smell baseline (Mysterious Name, Duplicated Code, Feature Envy …) через `code-review` skill
- Spec axis: map-annaber-rebuild + frozen copy (⚠️ у тікеті шлях `.issues/tickets/02-...` — правильний: `.issues/tickets-legacy/02-landing-page-content-copy.md`) + DESIGN.md/tokens (OD MCP у сесії може не підвестись — fallback: локальна копія OD або src/app/tokens.css)
- Parallel sub-agents за skill → агрегація у ## Standards / ## Spec
- Fix worst findings → build passes

⚠️ MANDATORY: ONE TICKET AT A TIME, NO AUTO-ADVANCE (після 10 — STOP, map виконано). `tests/baseline.spec.ts` НЕ чіпати. 03 НЕ чіпати (F1 reduce-freeze + F2 hero overflow → окрема гриль-сесія 03 adaptive, НЕ виправляти в 10). Frozen content без переписування. Playwright — лише temp-спеки (писати → run → видалити; перед/після запуску перевіряти :3000 — gotcha 19). Build+lint після фіксів. STOP після кожного підпункту.

Стан: 00-09 CLOSED; 10 OPEN (останній). Known backlog: 03 adaptive grill (input: F1+F2); втрата baseline01/FINDINGS.md; drift тікета 01 (Status OPEN). Квота 21st: 2/2 get (gate стосується 03-06; для 10 не потрібен).

Після прочитання: проговори 3-5 пунктів що бачиш (перевірка HANDOFF), потім питання Кроку 1 (BEFORE START для Ticket 10) і ЧЕКАЙ.

Працюй українською, техтерміни English.
```

## Prompt для наступної сесії (03 adaptive grill — ЄДИНИЙ відкритий пункт мапи) — ВИКОРИСТАНО (2026-09-30, закрито: F1 + adaptive DONE, F2 REJECTED)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — 03 adaptive grill (окрема запланована гриль-сесія; основний цикл 00-10 закрито 2026-09-30). НЕ авансимось за межі 03.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — Resolution 09 (F1/F2 + таблиця обрізки рядів) + Resolution 10 (фікси reduce-hydration); gotcha 1-20+; «Відомі незакриті місця»)
2. .issues/map-annaber-rebuild.md (рядок 03 = PARTIAL + note про adaptive; Status = ACTIVE, лише 03 follow-up)
3. .issues/tickets-rebuild/03-hero-parallax-21st.md (Status PARTIAL + Resolution web/desktop)
4. src/components/sections/Hero.tsx (канонічний; ЄДИНИЙ src-файл для правок у цій сесії)
5. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени src/app/tokens.css)

Крок 1 BEFORE START обов'язково питай: (a) grilling? (очікувано: ТАК — це гриль-сесія: спершу рішення/варіанти/REJECTED → мій ок → фікси) (b) extra skills? (передбачаю: playwright-core для verify; gsap-react/gsap-scrolltrigger якщо чіпатимемо scrub; ui-ux-pro-max CLI недоступний — Python 3 не встановлено, ще раз не питай) (c) workflow? (очікувано: DIRECT EDIT Hero.tsx з ок; прототип/page-SWITCH відхилено прецедентом 04).

Scope 03 adaptive (усе з Resolution 09/HANDOFF, більше НІЧОГО):
- **F1 (P1, a11y):** `.hero-preview` під reduce = SSR-стан назавжди (opacity 0.2 + translateY -370 + tilt 12°, dynamic=false; React ignored style-mismatch — рецидив gotcha 20; гілка Hero.tsx близько рядків 287-296). Правило 06/10: reduce-бранчі НЕ в атрибути; reduce-стан має бути однаковим з SSR + `duration: 0` (канонічні прецеденти Faq/Testimonials + фікси 10 у Pricing/HowItWorks).
- **F2 (geometry):** обрізка рядів hero `overflow-hidden` (`h-[180vh]` vs px/рем-контент), settled-стан: таблиця у Resolution 09 (1280×800 → 161px r3, 700→341, 600→521, 500→701; 768 → 38/218/398/578; 375×800 → 0 — єдиний чистий; 375 нижче → 85/265/445).
- **Mobile/tablet adaptive Hero** (map note: sizes/top/mt; PRODUCT: hero stacks on mobile). Web/desktop рішення (h-[180vh], tilt 12°, translateY [-370,70], sticky) НЕ переписувати без потреби і без ок.

⚠️ MANDATORY: ONE TICKET AT A TIME, NO AUTO-ADVANCE. `tests/baseline.spec.ts` НЕ чіпати. Frozen content без переписування. Playwright — лише temp-спеки (писати → run → видалити; перед/після запуску перевіряти :3000 — gotcha 13/19; `page.emulateMedia({ reducedMotion: "reduce" })` перед goto; exact-class локатори замість contains(@class) — нюанс Resolution 10). Build+lint після фіксів. STOP після кожного підпункту (F1 → STOP → F2 → STOP → adaptive → STOP). Після 03 CLOSED: тікет + map (03 → CLOSED, Status → DONE) + HANDOFF → STOP (map закрито).

Стан: 00-10 CLOSED/виконано; 03 = PARTIAL (web/desktop done; ця сесія = mobile/tablet + F1+F2). Інший backlog: коміт docs+src фіксів/правок (після closing go), втрата baseline01/FINDINGS.md (факт, без дій). Квота 21st: gate стосувався 03-06 rebuild — get більше НЕ потрібен (get 1503 витрачено у 03; для адаптиву 21st не залучається).

Після прочитання: проговори 3-5 пунктів що бачиш (перевірка HANDOFF + стан Hero/F1/F2 у коді), потім питання Кроку 1 і ЧЕКАЙ.

Працюй українською, техтерміни English.
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
- Мікроанімації секцій — Framer Motion (spring для bounce); GSAP — Hero scrub + Benefits reveal (`start "top 72%"`, власний підбір); контент секцій — frozen copy
- Послідовність усередині тікета: STOP між підпунктами (05: Pricing → HowItWorks, обидва DONE 2026-09-25)
- 21st: ліцензія обов'язова перед get; flip/scale/toggle у Pricing — rejected (див. Resolution)
- ~~03 adaptive — окремий тікет після грилю~~ → **закрито 2026-09-30**: адаптив = лише кнопки; **height-runway у hero → REJECTED («завеликий відступ») — не пропонувати знову**
