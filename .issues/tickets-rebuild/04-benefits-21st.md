# Ticket 04: Benefits Cards via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-23)
**Blocked by:** 02-impeccable-critique.md
**Note:** Sequential after 03 per ONE-TICKET rule, but technically independent.

## Question

Rebuild Benefits (5 cards) using a 21st component.

## Tasks — WITH APPROVAL GATE

1. `21st search "feature card bento playful" --type c --limit 10 --json` (+ alternative: "benefits grid", "feature grid kids")
2. Present top results with links `https://21st.dev/c/<id>`, wait for user `ok` on id.
3. After `ok`: `21st get <approved-id>` (consumes 2/2 free quota Day1), adapt 5 cards (Real teachers / Learning through play / Track every step / Schedule / Small groups) with Phosphor icons (`@phosphor-icons/react` — check if 21st component uses lucide, swap to Phosphor).
4. Respect `DESIGN.md` or `MASTER.md` tokens: radius-lg 16px, shadow-soft, hover lift.

## Acceptance Criteria

- Approval gate followed
- 5 cards match content from `02-landing-page-content-copy.md:28`
- Responsive: 1-col mobile, 2-col tablet, 3-col desktop (or bento variant if user approved)

---

## Resolution

**CLOSED 2026-09-23.** Workflow: **DIRECT EDIT** у `src/components/sections/Benefits.tsx` (прототип/page-SWITCH відхилено користувачем — прецедент для 05+).

### Історія
1. Спочатку 21st Feature Grid `8377` забрано (approval gate ✓) і адаптовано; далі серія ітерацій за зауваженнями користувача.
2. Користувач запропонував 21st **gradient-card** (`https://21st.dev/@ravikatiyar162/components/gradient-card`, id 5514) → **відхилено get**: license порожній (`"license":""`), implementation source приватний (`r2://components-code-private/...`), залежності lucide/cva (не в стеку), картинки з thiings.co. **Рішення: hand-replicate патерну** (див. нижче). Аналогічно відхилено Thiings.co раніше (license).

### Фінальна реалізація (gradient-card hand-replicate)
- **Layout:** `grid-cols-1 → md:grid-cols-2 → lg:grid-cols-6` + кожна картка `lg:col-span-2` → ≈389px при 1280 (цільові 384×264 з оригіналу); картка 4 → `lg:col-start-2`, картка 5 → `lg:col-start-4` (другий ряд із 2 карток центрований); `min-h-[264px]`, `p-6 md:p-8` (32px desktop), `rounded-xl`, `border-gray-200` (залишено), без badge, dotted-фон видалений після фідбеку.
- **Gradient per-image** `bg-gradient-to-br from-white via-X-50 to-X-200` (біле зверху-ліворуч → затемнення донизу-праворуч): school→`accent`, video_game→`violet`, bar_chart→`primary`, alarm_clock→`pink`, people_hugging→`violet` (дубль).
- **Декоративна 3D-іконка:** Microsoft Fluent Emoji PNG (MIT) локально `public/benefits/*_3d.png`, absolute bottom-right з bleed (`-bottom-5 -right-5`), `h-36 → sm:h-44` (144→176px), `next/image`.
- **CTA:** "Learn more" + `ArrowRightIcon` bottom-left; ховер: `primary-600` + `translate-x-1` (CSS group-hover).
- **Анімації — Framer Motion (не GSAP):** картка `whileHover scale: 1.03` (300ms ease-out-expo, плавно, **без lift** — `hover:-translate-y-1` прибрано); іконка variants-propagation spring (`stiffness 400, damping 10`) → `scale: 1.1 + rotate: 6°` з баунсом на вході/виході; `useReducedMotion()` guard. Entrance animation (IntersectionObserver+stagger) **прибрано «поки»** — за бажанням користувача повернути пізніше.
- **`tokens.css`:** +`--color-accent-200: #FED7AA` (попутно лікує мертвий `via-accent-200` у `HowItWorks.tsx:67`), +`violet-50/100/200`, +`pink-50/100/200`.
- **Контент:** 5 карток дослівно з `02-landing-page-content-copy.md:28` (без переписування — окреме рішення користувача «подивимось без зміни тексту»).

### Verification
- lint ✓, build ✓
- Temp Playwright-спеки (1280/768/375 + hover) → run → **спека і скріни видалені**; `tests/baseline.spec.ts` не чіпався (Ticket 09)
- Transform-assertions: картка `matrix(1.03,0,0,1.03,0,0)`; іконка `scale≈1.094, rotate=6.00°`
- Acceptance: approval gate дотримано (get №2 свідомо не робився — license); 1/2/3-col responsive ✓; Phosphor canonical icons ✓
