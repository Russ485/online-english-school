# Ticket 06: Testimonials + FAQ + Footer via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** PARTIAL (2026-09-26) — Testimonials DONE (get 822 MIT, quota 1/2), FAQ + Footer → наступна сесія
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

### NEXT — FAQ → Footer (наступна сесія)

- FAQ: search → approval gate → get (1/2 quota) або hand-replicate → DIRECT EDIT `Faq.tsx` (AnimatePresence height, aria-expanded вже є, focus-visible, entrance-прецедент, reduce → статика) → STOP.
- Footer: fix `text-primary-400` (токена немає), дрейф copy (frozen має лінк **Contact**, немає «Learning platform» — `Footer.tsx:21,26` навпаки).
- Prompt — див. `HANDOFF.md` (блок «Prompt для наступної сесії (Ticket 06, підпункт 2: FAQ)»).
