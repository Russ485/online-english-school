# Ticket 06: Testimonials + FAQ + Footer via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** PARTIAL (2026-09-27) — Testimonials DONE (2026-09-26) + FAQ DONE (2026-09-27), quota 1/2 get; Footer → наступна сесія
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

### NEXT — Footer (наступна сесія, останній підпункт 06)

- Fix `text-primary-400` (`Footer.tsx:44` — токена немає в tokens.css).
- Дрейф copy: frozen (`02-copy:145-151`) = About us, Pricing, For parents, For teachers, Blog, **Contact** → прибрати «Learning platform» (`Footer.tsx:21`), додати Contact.
- Опційно: entrance/hover Framer Motion за прецедентом. Після Footer → 06 CLOSED.
- Prompt — див. `HANDOFF.md` (блок «Prompt для наступної сесії (Ticket 06, підпункт 3: Footer)»).
