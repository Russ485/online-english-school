# HANDOFF — AnnaBer Rebuild (2026-09-25, Ticket 05 PARTIAL: Pricing DONE → NEXT: HowItWorks)

> **Живе в репо** (`HANDOFF.md:1`), не в `Temp` — щоб не зникав. Оновлюється після кожного тікета/сесії.

## Поточний стан

- **Ticket 00** `00-product-init` — **CLOSED** (PRODUCT.md + DESIGN.md via OD `ba33a560-5e9c-4520-a6ef-ca19c36b798e` + `tokens.css` + `layout.tsx` Fredoka/DM Sans)
- **Ticket 01** `01-playwright-baseline` — **CLOSED** (`tests/baseline.spec.ts`, `screenshots/baseline/` 375/768/1280, `FINDINGS.md`)
- **Ticket 02** `02-impeccable-critique` — **CLOSED** (`02-impeccable-critique.md:30` DONE 2026-09-01, health 18/32, P0/P1/P2, `impeccable/critique/annaber-baseline-02.md`)
- **Ticket 03** `03-hero-parallax-21st` — **PARTIAL (web/desktop done, mobile/tablet follow-up)** — canonical `src/components/sections/Hero.tsx:1`. **НЕ чіпати** (включно з formatting-only uncommitted правками — підтверджено користувачем як канонічні). 03 adaptive → окрема гриль-сесія пізніше.
- **Ticket 04** `04-benefits-21st` — **CLOSED (2026-09-23)**, повний Resolution у `.issues/tickets-rebuild/04-benefits-21st.md:30` (gradient-card hand-replicate, DIRECT EDIT, Framer Motion hover, entrance прибрано «поки»).
- **Ticket 05** `05-pricing-howitworks-21st` — **PARTIAL: Pricing DONE (2026-09-25), HowItWorks NEXT**. Деталі Resolution — у `.issues/tickets-rebuild/05-pricing-howitworks-21st.md:26`.
- **Далі:** HowItWorks (та ж сесійна послідовність: search → approval gate → get/hand-replicate). Після 05 → 06 Testimonials+Faq+Footer.

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

## Prompt для нової сесії (Ticket 05 → HowItWorks)

Скопіюй:

```
Продовжуємо AnnaBer Rebuild — Ticket 05 (Pricing DONE), далі НАД HowItWorks. НЕ авансимось на 06.

Спочатку прочитай (у такому порядку):
1. HANDOFF.md (canonical resume — 05 PARTIAL, Pricing DONE 2026-09-25)
2. .issues/map-annaber-rebuild.md (active wayfinder)
3. .issues/tickets-rebuild/05-pricing-howitworks-21st.md (Question + Tasks + Resolution PARTIAL)
4. PRODUCT.md + AGENTS.md (Design Contract, OD id: ba33a560-5e9c-4520-a6ef-ca19c36b798e, токени в src/app/tokens.css)
5. src/components/sections/HowItWorks.tsx (canonical — єдиний файл, який правимо) + src/components/sections/Pricing.tsx (ГОТОВИЙ reference прецедентів: two-element entrance/hover, явний initial+whileInView, custom dynamic variants)

⚠️ MANDATORY CONSTRAINTS:
1. ONE TICKET AT A TIME — STOP після кожного пункту, чекай go. NO AUTO-ADVANCE.
2. НЕ чіпати 03 (Hero), 04 (Benefits), 05-Pricing (закритий), 06-10 — тільки HowItWorks.tsx.
3. BEFORE START питай: (a) grilling? (b) extra skills? (c) workflow?
4. Workflow: DIRECT EDIT у канонічних файлах (прототип/page-SWITCH відхилено прецедентом по Benefits).
5. 21st APPROVAL GATE: search --json → робочі лінки (поле url, формат https://21st.dev/c/<id> = 404!) → мій ok → get. Спершу npx @21st-dev/cli usage (очікується 2/2 — на Pricing 0 не витрачено; auth вже зроблений як russ485). Перевіряй ліцензію (MIT/Apache) через webfetch ДО get. Тікет: 1 search HowItWorks + 1 get. Saved ref: Feature Bento https://21st.dev/c/18898. REJECTED — не пропонувати: gradient-card 5514, Thiings.co, 25362, 6247, 7260, 7091, 5115, 28540 (див. HANDOFF).
6. Playwright — тільки тимчасові verify-спеки (писати → run → видалити). НЕ чіпати tests/baseline.spec.ts.
7. Hero.tsx/03 — НЕ редагувати (незакомічені formatting-правки = канонічні).

Стан на початок сесії:
- 00/01/02 CLOSED; 03 PARTIAL (не чіпати); 04 CLOSED; 05 PARTIAL — Pricing CLOSED (hand-replicate 6247, legacy-чернетка Pricing.legacy.tsx, entrance/hover прецеденти вирішені — див. HANDOFF Resolution).
- HowItWorks.tsx зараз: 3 frozen steps (Book free trial / Meet teacher / Start learning), GSAP entrance (gsap.from stagger) + gradient-лінія via-accent-200 (токен існує) — GSAP entrance замінити на Framer Motion за прецедентом Pricing (framer-motion v13: parent-stagger без explicit initial на дітей НЕ працює; whileHover блокує inherited initial).
- Known backlog (мимо 05): text-primary-400 Footer → 06; LCP dev-hint (benefits image eager/priority) → 08; 03 adaptive → окрема гриль-сесія.
- Контент: 3 steps frozen copy з .issues/tickets-legacy/02-landing-page-content-copy.md — без переписування без мого ок.

Після прочитання:
- Проговори 3-5 пунктів що бачиш у коді (перевірка HANDOFF).
- Потім запитай: "Що покращуємо в HowItWorks?" і ЧЕКАЙ мої зауваження — без мого go не правити.
- Далі за прецедентом: search → approval gate → get/hand-replicate → direct edit → lint+build → temp verify → STOP.

Працюй українською, техтерміни English. Build+lint після змін, temp-спеки видаляти, STOP після кожного пункту.
```

## User Preferences (frozen)

- Українська, техтерміни English, SaaS-leaning playful but professional, light only, CTA "Start learning", kids 7-16 + parents
- DIRECT EDIT у канонічних файлах; прототип/page SWITCH — відхилено (прецедент 04); gap/hover/циклічність без авто-анімації; scrub тільки на скрол
- Мікроанімації секцій — Framer Motion (spring для bounce); GSAP — Hero scrub + Ticket 07; контент секцій — frozen copy
- Послідовність усередині тікета: спочатку Pricing (DONE), потім HowItWorks — зі STOP між ними
- 21st: ліцензія обов'язова перед get; flip/scale/toggle у Pricing — rejected (див. Resolution)
- 03 adaptive — окремий тікет після грилю, зараз web/desktop enough
