# Ticket 07: GSAP Motion Pass (Parallax Scrub + Stagger)

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-28) — гібрид (GSAP = Hero + Benefits reveal, FM entrances лишились), verify 4/4, 0 get
**Blocked by:** 06-testimonials-faq-footer-21st.md

## Question

Unify motion: parallax scrub Hero + ScrollTrigger stagger reveals.

## Tasks

- `gsap.registerPlugin(ScrollTrigger)` scoped via `gsap.context`
- Hero: scrub parallax on bg shapes/illustration (`scrub: 1`, `yPercent` / `scale`), check `ui-ux-pro-max --domain gsap` for `--motion 8` snippet
- Benefits/Pricing/HowItWorks: ScrollTrigger staggered reveal (0.1-0.2s), only transform/opacity
- Respect `prefers-reduced-motion` (`useReducedMotion()` from `framer-motion`), disable ScrollTrigger if reduced
- Verify at 375/768/1280, no layout shift, no pin overflow

## Acceptance Criteria

- Motion consistent, performance clean (no layout/reflow), reduced-motion respected

---

## Resolution

### DONE (2026-09-28) — гібрид: GSAP = Hero + Benefits reveal

- **Рішення користувача (question tool, BEFORE START):** **гібрид** — FM entrances у Pricing/HowItWorks **залишаються** (hover теж FM), секції 06 не чіпали; GSAP = Hero уніфікація + ScrollTrigger reveal на Benefits (де входу не було). Grilling — ні; skills — `gsap-scrolltrigger` + `gsap-react` + `gsap-performance` + `playwright-core`; workflow — **DIRECT EDIT**; 21st — **0 get** (gate лише 03-06).
- **Hero (`src/components/sections/Hero.tsx`):** `useEffect` + ручний `gsap.context` → **`useGSAP({ scope: sectionRef })`** (auto-revert, `useLayoutEffect` до paint → без flash entrance); module-level **`gsap.registerPlugin(ScrollTrigger, useGSAP)`** (SSR-safe — prerender ✓). **Єдиний reduce-guard = `matchMedia("(prefers-reduced-motion: reduce)")`** (прибрано дублювання `useReducedMotion()` + matchMedia; заодно зник подвійний запуск entrance: старий `useEffect [reduce]` перестворював timeline при null→boolean переході хука після гідратизації). Scrub `hero-blur-1/2` (`scrub:1`, `yPercent`/`scale`) + entrance timeline + FM preview (`translateY [-370,70]`) — **без змін**; GSAP-скраб на `.hero-preview` (DESIGN 7.1) **НЕ додано** — битиметься з FM-перекладом, 03-поведінка затверджена. Третій блоб без класу — лишився (DESIGN 7.1 визначає лише blur-1/2).
- **Benefits (`src/components/sections/Benefits.tsx`):** ScrollTrigger reveal за **DESIGN 7.2**: `y:14`, `opacity 0→1`, `duration 0.5`, `stagger 0.1`, `ease "expo.out"`, trigger `[data-reveal]`, **`start "top 72%"`** — історія: `82%` (DESIGN 7.2) → `40%` (мій фікс за зауваженням «нижній ряд не видно під час каскаду») → **`72%` самостійно встановив власник** (візуально перевірено, влаштовує — фінальне значення), guard `matchMedia`, лише `transform/opacity`. **Wrapper-div `data-reveal-item`** навколо кожної картки: grid-класи (`lg:col-span-2`, `${benefit.place}`) перенесені на wrapper, картка отримала `h-full` → GSAP-анімує transform вузла-wrapper, FM `whileHover` scale — внутрішнього (різні вузли → без конфлікту в одному inline `transform`); рівні висоти рядів збережені. Початковий стан ставиться **з JS** (без SSR-атрибутів) → прецедент гідратизація × reduce ✓; при `reduce` гілка не створюється → картки visible, entrance прибрано з Benefits у 04 «поки» тепер закритий через 07.
- **Pricing/HowItWorks/Testimonials/Faq/Footer** — **не редагувались** (гібрид: FM entrances лишились).
- **ui-ux-pro-max `--domain gsap`:** Python 3 не встановлено (лише WindowsApps alias) → за рішенням користувача **пропущено**, використано канонічний snippet DESIGN 7.2 + gsap-skills.
- **Verify:** lint ✓ build ✓; тимчасова спека `tests/tmp-07-motion.spec.ts` **4/4**: (1) **desktop 1280×800** — стартовий стан: усі wrapper opacity `<0.01` (нижче fold) → після скролу на trigger **нижній ряд (4-та картка) `top < innerHeight`** → rAF-самплер: усі 5 → `opacity ≥0.99` за 1.4s, stagger (card1 перетинає 0.1 раніше за card5; на t1 `opacity(card5) <0.05`), `y1 >0.5` при вході → фінальний `|y| <0.5`; **no layout shift** (`offsetTop/offsetHeight` до = після); **no pin** (`.pin-spacer` = null, `scrollHeight` stable); `scrollWidth ≤1281`; (2) **reduce** (`emulateMedia({reducedMotion:"reduce"})` перед goto): `.hero-blur-1` `transform/translate = none`, badge `opacity 1` без inline style; усі wrapper `opacity 1` + inline `transform ""`; (3-4) **smoke 768/375** — reveal до 1.0, `scrollWidth ≤ w+1`. Скріншоти mid/final переглянуті вручну ✓ (mid: ряд1 повністю + ряд2 каскадом — видно появу нижнього ряду; final: без зсувів). **Примітка:** прогін спеки — при `start "top 40%"`; фінальне `72%` встановив власник після прогону → позиційна асерція «нижній ряд < innerHeight» чинна лише для 40%, механіка reveal (stagger/shift/reduce/pin) від позиції тригера не залежить. Спека/скріншоти/test-results **видалені**, сервер :3000 зупинено, `tests/baseline.spec.ts` не чіпаний.
- **⚠️ Gotcha (нові):** (11) `start "top 82%"` для сітки у 2+ ряди → каскад закінчується поки нижній ряд ще за межами екрана («видно лише край першого ряду») → значення підбирається візуально: запропоновано 40% (нижній ряд у кадрі на старті), **фінал — `72%` (вибір власника)**; (12) stagger-асерції міряти «opacity іншого елемента на t(N)», не на власному перетині (на t5 оптимістична card5 вже ≈0.2 — хибна помилка спеки); (13) `playwright.config` має `reuseExistingServer` → **застарілий :3000 із попередньої сесії переиспользовується** (стара збірка!) → перед запуском перевіряти/вбивати порт (`Get-NetTCPConnection -LocalPort 3000`).
