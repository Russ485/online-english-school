# Ticket 05: Pricing + HowItWorks via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-26) — Pricing DONE + HowItWorks DONE + анімація ітерація-3 + **REOPEN закрито (2026-09-26): статичне зображення в HowItWorks — варіант A (clip-path mask), верифіковано** (див. `## REOPEN` у кінці)
**Blocked by:** 03-hero-parallax-21st.md, 04-benefits-21st.md

## Question

Rebuild Pricing (3 tiers $29/$79/$149) and HowItWorks (3 steps) via 21st — Day2 quota.

## Tasks — WITH APPROVAL GATE (two searches, two gets)

1. Pricing: `21st search "pricing table 3 tiers popular badge" --type c --limit 10 --json` → present links → wait ok → `21st get <id>` (Day2 quota 1/2)
2. HowItWorks: `21st search "how it works steps timeline" --type c --limit 10 --json` → present links → wait ok → `21st get <id>` (Day2 quota 2/2)
3. Adapt: keep 3 pricing tiers + 3 steps copy, tokens from `DESIGN.md`/`MASTER.md`, no hard-coded colors.
4. If user rejects a search result, re-search with narrower query (`--tag`, `--color`) and re-present.

## Acceptance Criteria

- Both components approved before get
- Pricing popular card highlighted (primary blue), FAQ? not here.

---

## Resolution

**CLOSED (2026-09-25, фінал 2026-09-26) — Pricing DONE + HowItWorks DONE + анімація ітерація-3.**

### Pricing (DONE)

- Workflow: DIRECT EDIT `src/components/sections/Pricing.tsx` (прецедент 04).
- 21st: quota 2/2 **не витрачено** (0 get). Ід 6247 (uilayout.contact/pricing-section, який сподобався користувачу) — **license unknown → get заборонений** → затверджено **hand-replicate** концепції. REJECTED для 05 (не пропонувати): 25362 (no-license), 6247/7260/7091/5115 (unknown), 28540 (AGPL). ⚠️ `21st.dev/c/<id>` = 404, робочі лінки — поле `url` з search. Auth: `russ485` (login збережено).
- Чернетка старих карток: `Pricing.legacy.tsx` (не імпортується, повернення = 1 імпорт).
- Фінал: radial glow (primary-200), highlight `accent-200`, popular = border-2 + gradient white→primary-100 + badge; кнопки rounded-full default `gray-900 shadow-lg` / popular `gradient primary-500→600 shadow-lg shadow-primary-500/30`, hover `shadow-xl`; CheckCircle icons; toggle/річні ціни прибрано; frozen copy; без GSAP.
- Анімації (ключові прецеденти framer-motion v13): (1) **parent-stagger без explicit `initial`/`whileInView` на дітях НЕ працює** — `whileHover`-label робить дитину variant-controller і блокує наслідування `initial` (`use-visual-state.mjs:24-32`) → фікс: явний initial+whileInView per card + `custom={index}` dynamic variant `shown(i)`; (2) **two-element structure**: зовнішній = entrance (0.75s, delay 0.1+i×0.18, viewport amount 0.5), внутрішній = hover (rest↔hover y:-4, 0.15s expo) — бо hover-revert до повільного `shown` давав delay 0.1-0.4s + 0.6s «падіння».
- Verify: lint✓ build✓; тимчасові Playwright-спеки (stagger proof, hover speed) — видалені.
- Рішення: flip-card REJECTED; scale-on-hover REJECTED (lift досить); monthly/yearly toggle REJECTED; додаткові design-skills не потрібні.

### HowItWorks (DONE)

- Workflow: DIRECT EDIT `src/components/sections/HowItWorks.tsx`; чернетка старої версії — `HowItWorks.legacy.tsx` (GSAP-варіант, не імпортується, повернення = 1 імпорт).
- 21st: quota 2/2 **не витрачено (0 get усього по 05)**. 1 search → затверджено **hand-replicate концепції id 9906** (Connoisseur Stack Interactor, license `unknown` → get заборонений). REJECTED (не пропонувати): 19863/26902 (MIT, але вертикальні), 26916/26891/19861 (no-license) + попередній список (gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540).
- **Затверджені рішення (користувач):** Variant A — ліворуч 3 step-`<button>` (icon + Step NN + title + description завжди видимі; активний: `border-primary-500 bg-white shadow-soft` + title `gray-900` + номер `accent-500`; неактивний: `border-gray-200 bg-gray-50` + title `gray-500` + номер `gray-400`; `border-2` константа — без layout shift); справа **tile-grid 4×4 (8 merged tiles), `gap-1.5`, `rounded-lg` (16px — перевірено по відео оригіналу, було `rounded-xl`), БЕЗ тексту поверх картинки**. Loop lifecycle: статика до **першого hover/tap** → `loopStarted` → нескінченний луп, **без зупинки на leave**; `useReducedMotion` → луп повністю вимкнений. Active **sticky** (останній наведений; default — крок 1); mobile — **tap на крок**; `aria-pressed`.
- **Анімація (друга ітерація після рев'ю, затверджено користувачем):** Framer Motion, cycle `CYCLE=6.2s`: поява tile 0.68s + stagger `0.065×i` (opacity/scale keyframes `times [0, wait, wait+0.11, 0.83, 1]`, eases linear/easeIn `[0.16,1,0.3,1]`/linear/fade `[0.4,0,0.2,1]`) → **hold до `HOLD_END=0.83` (≈4.0s повністю видима, синхронно всіма — хвости циклів спільні, stagger лише у вікні появи)** → синхронне зникання ≈1.05s. Пульс контейнера `1.008` + **контр-масштаб `1/1.008` на `motion.img`** → картинка в пікселях нерухома; масштаб тайлів ≤1 завжди → геп 6px недоторканий (без overlap за побудовою). Пульс лише під час hold (`times [0,0.19,0.26,0.79,0.83]`). Ключ `${active}-${loopStarted}` → перший hover/tap робить remount (кросфейд 0.3s + pop-in). **REJECTED (перша ітерація):** рівномірні keyframes 2.6s (hold 0.65s), `delay i×0.16` (дрейф фаз), `scale 1.06` (overlap + деформація картинки).
- Відео-верифікація оригіналу id 9906 (`videoUrl` з `npx @21st-dev/cli search "stack interactor"` → cdn.21st.dev/.../video.1787571259662.mp4, 6.2s): стан спокою статичний (diff ≈0 → пульс дрібний 0.8%), автoloop немає (перемикання ~0.5s на інтеракцію), радіус ≈16px ✓, геп ≈8–10px. ⚠️ Playwright Chromium seek зламаний для цього mp4 (`currentTime` скидається в 0, `fastSeek`/media-фрагменти не працюють) → тільки real-time відтворення + таймовані скріншоти (`animations: 'allow'`; element-скріншоти зависають на нескінченних анімаціях). Скріншоти hold/fade переглянуті вручну ✓.
- Інші прецеденти: **Framer Motion** (GSAP імпорти/`registerPlugin`/`useEffect` прибрано); входи секції за прецедентом Pricing (two-element, ease `[0.16,1,0.3,1]`, `duration 0.75`, `delay 0.1+i×0.18`); кроки перемикаються `AnimatePresence` crossfade 0.3s; плитки-контейнери = кліпи `overflow-hidden` з inner-`<img>` у % -позиціях (`width: COLS/cs*100%` тощо) — одна картинка розрізана по тайлах. Прибрано: gradient-лінію (`via-accent-200`), CTA (нема у frozen copy). `motion.img` НЕ триггерить `@next/next/no-img-element` → eslint-disable-директиви прибрано (unused directive).
- Картинки: **локально** `public/howitworks/step-01.jpg` (Google Calendar), `step-02.jpg` (відеодзвінок), `step-03.jpg` (дівчинка в навушниках) — Unsplash free, усі 3 візуально верифіковані; прелоад через `new Image()` в `useEffect`.
- Copy: frozen дослівно з `.issues/tickets-legacy/02-landing-page-content-copy.md:89-95` (**без trailing periods** — канонічний copy-файл, старий компонент мав крапки).
- HTML/ARIA: весь контент картки в `<button>` з `aria-pressed` (спан-типографіка, **без `h3`** — `button` не може містити heading), зображення `alt=""` + контейнер `role="img" aria-label`.
- Verify: lint ✓ build ✓; тимчасова Playwright-спека (друга ітерація) **3/3**: radius=16px; статика до hover; hold ≥3.5s усі opacity≥0.99 (timestamp-driven, 11+ семплів); pulse: container scale 1.004–1.012, img 0.988–0.996, product 1±0.003; no-overlap (max intersection <1px²); fade на 5.7s (усі <0.9); repeat (2-й hold на 7.7s усі ≥0.99); sticky; reduce-статика; mobile tap ✓. ⚠️ `test.use({ reducedMotion: "reduce" })` у цій версії Playwright **ігнорується** → працює `page.emulateMedia({ reducedMotion: "reduce" })` перед `goto`. Спека/test-results/temp-папки **видалені**; `tests/baseline.spec.ts` не чіпали.

### HowItWorks — анімація, ітерація 3 (2026-09-26, CLOSED)

- **Діагноз ітерації-2 (рев'ю користувача):** пульс був накладений на КОНТЕЙНЕР (`pulseLoop` grid 1→1.008) + контр-масштаб картинки `counterLoop` (1/1.008) → (1) рамки тайлів на піку виходили за межі колонки ~2.5px (у ланцюжку ніде немає `overflow-hidden`); (2) пікселі фото лишались статичними, а рамки роз'їжджались назовні → по зовнішньому периметру просвічувала `bg-gray-100` смуга до ~5px («не налаштований оверлей»); (3) поява закінчувалась на scale 1 = одразу максимум, а пульс ішов ВИЩЕ максимуму → «з'являється вже збільшена».
- **Затверджено (question tool):** форма пульсу **туди-назад** (0.96 → 1.0 → 0.96 у межах холду, зникання в малому стані), амплітуда **rest scale 0.96 → геп ~12px**. Зникання **синхронне** ✓ і стагерований вхід ✓ — схвалено, без змін (реверс-лічильник оригіналу — «забагато», REJECTED).
- **Специфікація (cycle 6.2s / HOLD_END 0.83 / STAGGER 0.065 незмінні):** tile keyframes-6 — opacity `[0,0,1,1,1,0]`, scale `[APPEAR 0.93, 0.93, REST 0.96, 1, 0.96, 0.96]`, times `[0, wait, wait+0.11, PEAK_AT 0.5, 0.83, 1]`, eases `[linear, expo-out, easeInOut, easeInOut, linear]`. Прибрано `pulseLoop`/`counterLoop`/`PULSE`/`pulseTimes`/`pulseEases` — **пульс лише на тайлах** (transform), картинка масштабується разом з рамкою → сірих смуг не існує за побудовою, переповнення = 0 (scale ≤1 завжди), на піку мозаїка безшовна й рівно в контейнері.
- Verify: lint ✓ build ✓; тимчасова Playwright-спека **3/3**: rest (t=1.46s) усі scale ∈[0.94,0.995] + opacity ≥0.99, peak (t=3.16s) ∈[0.99,1.001], повернення (t=5.06s) ≤0.975, width-ratio rest/peak ∈(0.93,0.985), bounding boxes тайлів ⊆ колонка на всіх фазах, fade (t=5.76s) усі <0.9 зі spread <0.15 (синхронно), повтор циклу (2-й peak t=9.36s), статика до loop, sticky, reduce → статика, mobile 375 → loop. Скріншоти rest/peak переглянуті вручну ✓. Спека/скріншоти/test-results/логи **видалені**; сервер :3000 зупинено; `tests/baseline.spec.ts` не чіпали. ⚠️ Спека: `getByRole("img")` матчить svg-іконки (Phosphor) → скоупити `{ name: /illustration/ }`; `.tap()` потребує `hasTouch` → `click()`.
- **Статус: підтверджено користувачем («так, зараз гарно») → тікет CLOSED (2026-09-26).** Зникання синхронне ✓, стагерований вхід ✓ — без змін.

---

## REOPEN (2026-09-26) — одна задача: картинка в HowItWorks має бути статичною

**Проблема (рев'ю користувача після закриття 05):** у гріді кожна «частинка» (тайл) має **окремий шматочок зображення, і цей шматочок збільшується/зменшується разом з тайлом** → картинка виглядає **розрізаною і руханою**, не цілою.

**Референс 9906 (оригінальна поведінка):** сама **картинка статична** — з'явилась і весь час у тому самому положенні під сіткою. Сітка грає роль **маски**, яка перекриває частинку зображення в місцях гепу; за рахунок анімації (тайлів) закрита частинка **відкривається** → видно більше зображення. Рухається маска, не пікселі.

**Діагноз по коду:**
- `src/components/sections/HowItWorks.tsx:189-214` — тайл = `overflow-hidden` вікно, inner-`motion.img` у %-геометрії **відносно тайла** (`width: COLS/cs*100%`, `left: -(c/cs)*100%`, `object-cover`). На `scale=1` шматочки склеюються безшовно ✓.
- `HowItWorks.tsx:74-87` (`tileLoop`) — `scale [0.93, 0.93, 0.96, 1, 0.96, 0.96]` масштабує **і вікно, і його вміст** → кожен шматочок «дихає» навколо свого центру; між rest і peak вміст зсувається до ±2% ширини сітки → шви роз'їжджаються, мозаїка виглядає розрізаною.
- Конфлікт з прийнятим tradeoff ітерації-3 (`Resolution` вище: «картинка масштабується разом з рамкою → сірих смуг не існує») — сірих смуг нема, але ціна — руханий розрізаний контент. Новий пріоритет: **статична картинка**.

**Варіанти фіксу (hand-replicate, 0 × 21st get; обрати на сесії, показати обидва користувачу):**
- **A) `clip-path: inset(... round 16px)`** — кожен тайл = повнорозмірний шар (`inset-0`) з `background-image` у геометрії **сітки** (статичний), анімується лише `inset` = клітка, зменшена навколо центру на `s` (геп маска відкриває/закриває). Картинка в пікселях нерухома **за побудовою**; радіус у clip. Animate keyframes clip-path (framer вміє percentage→percentage).
- **B) counter-scale `1/s` на `motion.img`** — `transform-origin` = центр тайла у координатах img: `originX% = (2c+cs/2)/COLS`, `originY% = (2r+rs/2)/ROWS`. Ризик: `s` та `1/s` інтерполюються окремо з тим самим ease → дрібний дрейф швів під час руху (амплітуда 0.04 → може бути непомітно, потребує скрін-верифікації).
- **REJECTED з історії (не повторювати):** пульс на контейнері + контр-масштаб img (ітерація-2: переповнення за колонку + `bg-gray-100` смуга до 5px).

**Acceptance criteria (REOPEN):**
- На **будь-якій фазі** циклу пікселі зображення співпадають із rest-фазою (скрін елемента → diff ≈ 0) — картинка не рухається і не масштабується.
- Мозаїка безшовна на всіх фазах; `scale`/геометрія ≤ контейнера (переповнення = 0).
- Цикл `CYCLE=6.2s` / stagger `0.065` / hold 4.0s синхронно / синхронний fade ≈1.05s / rest 0.96↔peak 1.0 / зникання на 0.96 / reduce → статика / sticky / loop після першого hover — **БЕЗ змін**.
- Frozen copy, кнопки, `rounded-lg`, прелоад, `role="img"` — без змін. `public/howitworks/` — без змін.
- Workflow: DIRECT EDIT `HowItWorks.tsx` (чернетка `HowItWorks.legacy.tsx` не чіпати); lint + build; тимчасова Playwright-спека (той самий підхід, що в 05) → видалити; `tests/baseline.spec.ts` не чіпати.

**Prompt для сесії:** див. `HANDOFF.md` (блок «Prompt для сесії: Ticket 05 REOPEN»).

---

### Resolution REOPEN (2026-09-26): варіант A (clip-path mask) — DONE

Обрано користувачем напряму («варіант А go») — демо B не робилось.

**Реалізація в `src/components/sections/HowItWorks.tsx`:**
- `scale`-ключі тайлів прибрано; клітинка анімує **`clipPath: inset(k% round 16px)`**, `k = (1-v)/2·100` для того самого профілю `v = [APPEAR, APPEAR, REST, 1, REST, REST]` → `k = [3.5, 3.5, 2, 0, 2, 2]` (opacity/times/eases — без змін, `tileRest`/`tileHidden` теж через `clipInset()`).
- Контент (`motion.img`, %-геометрія) **ніколи не трансформується** (без animate) → пікселі незмінні **за побудовою**; `clip ⊆ клітка ⊆ контейнер` → переповнення = 0 за побудовою; радіус 16px — у clip.
- rest 0.96 → геп ~12px (6px + 2% клітки з боку), peak 1 → геп 6px, мозаїка безшовна.
- Уточнення до варіанта A з тікета: clip на **самому grid-cell** (не повнорозмірні шари з `background-image`) — `inset` у % від клітки, геп- і responsive-незалежний; візуально рівноцінно.

**Verification:** lint ✓ build ✓; тимчасова Playwright-спека **2/2**:
- `transform` усіх 8 img === `none` на всіх семплах (static / t=1.46s / 3.16s / 5.06s / 5.76s / 9.36s);
- clip: static ≈0%, rest (1.46s) ∈(0, 2.7], peak (3.16s) ≤0.15%, повернення (5.06s) ∈[1.4, 2.7], 2-й цикл (9.36s) ≤0.15%;
- opacity: rest ≥0.99, fade <0.9 зі spread <0.15, повтор циклу ✓; sticky `aria-pressed` ✓; reduce → статика (clip 0%) ✓; 375px ✓; bbox тайлів ⊆ контейнер ✓;
- скріншоти rest/peak/fade переглянуті: геометрія вмісту ідентична на всіх фазах, мозаїка безшовна, сірих смуг нема.
- Спека/скріншоти/test-results видалені, сервер :3000 зупинено; `baseline.spec.ts`/`HowItWorks.legacy.tsx` не чіпали; 0 × 21st get.
