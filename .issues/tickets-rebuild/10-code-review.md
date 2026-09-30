# Ticket 10: Code Review (Standards vs Spec)

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-30)
**Blocked by:** 09-playwright-verification.md

## Question

Two-axis review of the rebuild diff.

## Tasks

- Pin fixed point: `git diff main...HEAD` (or `46aeec4...HEAD` — first commit)
- Standards axis: repo standards + smell baseline (Mysterious Name, Duplicated Code, Feature Envy, etc. from `code-review` skill)
- Spec axis: `map-annaber-rebuild.md` + `.issues/tickets/02-landing-page-content-copy.md` + `DESIGN.md`/`MASTER.md` tokens
- Run parallel sub-agents per `code-review` skill, aggregate under ## Standards / ## Spec
- Fix worst findings

## Acceptance Criteria

- Review report written, worst issues fixed, build passes

---

## Resolution

**Status: CLOSED (2026-09-30)** (go користувача). Skills: `code-review` + `playwright-core`. Grilling — ні. **0 × 21st get.** `tests/baseline.spec.ts` не чіпався; 03/Hero не редагувався.

**Кроки:**
- **Fixed point:** `f6d95ea...HEAD` (затверджено користувачем; `main...HEAD` = порожньо — ми на main; `46aeec4` = лише README) → 29 файлів, +1675/−350, 9 комітів (3946637…9ca8d54). Working tree (4 docs: map, ticket 08/09, HANDOFF) — **не комітився**, рев'ю по working tree без коміту (затверджено).
- **Sources:** Standards = `AGENTS.md` + `HANDOFF.md` (documented decisions) + smell baseline зі skill; Spec = map + frozen copy `.issues/tickets-legacy/02-landing-page-content-copy.md` + `PRODUCT.md` + токени `src/app/tokens.css`/`MASTER.md` (OD MCP недоступний у сесії саб-агента) + тікети 03-08.
- **Parallel sub-agents** (2 × `general`, один message) → агрегація `## Standards` / `## Spec` без rerank.

## Standards

### Documented-standard violations

**1. Hard — reduce-hydration rule (`HANDOFF.md:51`, generalized by gotcha 20, `HANDOFF.md:103`):** "reduce-класи НЕ давати в атрибути … entrance при reduce — `initial="hidden"` (однаковий з SSR) + `transition { duration: 0 }`."
- `Pricing.tsx:92` and `HowItWorks.tsx:125,175`: `initial={reduce ? "shown" : "hidden"}` — reduce state leaks into SSR-rendered attributes; server renders `"hidden"` (opacity 0), React ignores the style mismatch, and neither file's `shown` variant has the required `duration: 0` reduce branch (e.g. Pricing `transition: { duration: 0.75, ease, delay: … }`), so reduce users get a full 0.75s animation. Same failure mode as F1/gotcha 20. `Faq/Testimonials/Footer.tsx` follow the rule correctly (`initial="hidden"` always + `duration: 0`). Counter-note: `HANDOFF.md:28` (Resolution 05, older) endorses Pricing's pattern — the later 06 rule supersedes.

**2. Suppressed by repo override — AGENTS.md Stack Notes "animate only `transform`/`opacity`":** `HowItWorks.tsx` `clipPath` keyframe arrays (`tileLoop`), `Faq.tsx` `height: 0→auto`, `Footer.tsx` `width: 0→"auto"` all breach it literally, but each is explicitly endorsed in `HANDOFF.md` Resolutions 05/06 → suppressed. Same for `useGSAP({scope})` replacing `gsap.context` and the `matchMedia`-only reduce guard (`HANDOFF.md:79`) — AGENTS.md names `gsap.context`, HANDOFF documents the unification.

**3. No breach:** Next.js 16 deprecations checked against `node_modules/next/dist/docs/.../image.md:293` — `next/image priority`→`preload` deprecated, but Benefits' `<Image>` carries no `priority`; Hero's `priority` is a local prop on a raw `<img>`. `*.legacy.tsx` files are non-imported (verified vs `page.tsx`) → HANDOFF's intentional-rollback standard suppresses the dead-code reading.

### Baseline smells (judgement calls)

- **Duplicated Code (strongest):** `const ease = [0.16, 1, 0.3, 1] as [number,number,number,number]` + `entranceVariants`/`hoverVariants` are copy-pasted across **5 files** — Pricing.tsx, HowItWorks.tsx (identical, incl. `delay: 0.1 + i * 0.18`), Faq.tsx, Testimonials.tsx, Footer.tsx (0.08 stagger, and redefined *inside* each render). → extract one shared motion module.
- **Duplicated Code (minor):** `gsap.registerPlugin(ScrollTrigger, useGSAP)` + identical `matchMedia` guard + `{ scope: sectionRef }` in both `Hero.tsx` and `Benefits.tsx`; two `Array.from(BRAND).map(...)` letter loops in `Footer.tsx`.
- **Mysterious Name (minor):** `Benefits.tsx` `place: ""` (×3 defaults) holds ad-hoc grid classes (`"md:col-span-2 md:mx-auto…"`) — name doesn't reveal that; `HowItWorks.tsx` `APPEAR`/`REST`/`PEAK_AT` are unlabelled unitless clip fractions.

## Spec

### (a) Missing / partial

- **Ticket 03 Hero adaptive** — map:69 *"`03` … PARTIAL — web/desktop done, mobile/tablet adaptive → follow-up"*. Diff touches Hero only via 07/08 (useGSAP, CTA contrast, focus ring, `priority`); F1 reduce-freeze + F2 row overflow remain deferred to the 03-adaptive grill (known).
- **Ticket 09 AC *"Screenshots at 3 breakpoints, save to `screenshots/verification/`"*** — artifacts are gitignored, so the only reviewable evidence in the diff is the doc claim (baseline01/FINDINGS loss known).
- **Ticket 07 shipped past its own verification** — Resolution: *"прогін спеки — при `start "top 40%"`; фінальне `72%` встановив власник після прогону"* → the final `start "top 72%"` in `Benefits.tsx:96` was never re-run.

### (b) Scope creep

- **Phosphor import renames across 5 components** (`ArrowRight→ArrowRightIcon`, `Star→StarIcon`, `CaretDown` removed, `InstagramLogo→InstagramLogoIcon`, …) — no ticket/resolution asks for it; mechanical churn in `9ca8d54`.
- **Hero cosmetic edits** — subtitle line reflow + `section` className reformat (`Hero.tsx:235`), while HANDOFF:10 says Hero is *"НЕ чіпати"* except for the 07/08 change list.
- **`Pricing.tsx` `min-h-[2.5rem]`** spacer on plan description — not in Resolution 05/08.

### (c) Implemented but looks wrong

- **Frozen copy violated in Benefits** — AC *"5 cards match content from `02-landing-page-content-copy.md:28`"* / Resolution *"5 карток дослівно"*, but all 5 descriptions end with a period (`Benefits.tsx:19,28,37,46,55`) which copy lines 31-35 don't have. Pre-existing at `f6d95ea`; HowItWorks was corrected to *"без trailing periods"*, Benefits wasn't — yet the verbatim claim was added in this diff.
- **Ticket 08 *"checks → `success-700`"*** — only the non-popular check got `success-700`; popular stays `text-primary-500` (`Pricing.tsx`), so the spec line reads as only half applied.
- **Ticket 08 *"FAQ `aria-controls`"*** (`P1-5`) — button references `faq-panel-N`, but the panel (and its `id`) unmounts whenever collapsed (`AnimatePresence`), leaving a dangling `aria-controls` in the default closed state.

---

**Summary (per axis):** Standards — 4 findings, worst = hard documented violation (reduce-hydration `initial={reduce ? ...}` у Pricing/HowItWorks — рецидив gotcha 20). Spec — 9 findings, worst = frozen copy violated (Benefits trailing periods vs verbatim AC).

**Фікси (4/4, затверджено question tool 2026-09-30):**
1. **Standards hard (reduce-hydration):** `Pricing.tsx` + `HowItWorks.tsx` — `initial={reduce ? "shown" : "hidden"}` → `initial="hidden"` завжди; `entranceVariants` перенесено з module-level у компонент з `transition: reduce ? { duration: 0 } : {...}` (канонічний прецедент Faq/Testimonials, правило `HANDOFF.md:51` + gotcha 20).
2. **Frozen copy:** `Benefits.tsx` — прибрано 5 trailing periods, описи дослівно з `02-landing-page-content-copy.md:31-35`.
3. **08 aria (P1-5):** `Faq.tsx` — `aria-controls={isOpen ? \`faq-panel-${index}\` : undefined}` — без dangling id при закритті.
4. **08 checks:** `Pricing.tsx:143` — popular `text-primary-500` → `text-success-700` (спека тікета 08:36 без винятків; візуально ✓ — зелені checks на синій картці).

**Accepted (не фікси):** Duplicated Code (`ease`+variants ×5 файлів) — задокументовано як accepted; Phosphor renames (`3946637`), Hero formatting (санкціоновані 07/08), `min-h-[2.5rem]` (`b17b52e`) — revert = зайвий churn; 07 `start 72%` не переганявся (відомо з Resolution 07); 09 screenshots gitignored (gotcha 18); F1/F2/01-drift/втрата baseline — backlog.

**Verify:** lint ✓ (`eslint . --max-warnings=0`); build ✓ (`next build` Turbopack + TS + prerender); temp-спека `tests/tmp-fix10.spec.ts` **5/5 PASS**: (1) reduce — Pricing card + HowItWorks steps/illustration `opacity ≥0.99` за 300мс після входу в viewport (замість 0.75s-анімації) + pre-scroll `opacity <0.5` + **0 console errors** (гідратація чиста); (2) normal motion — entrance завершується (opacity 1 за 2s); (3) FAQ `aria-controls` лише на mounted panel (6 кнопок, single-open, рівно 1 panel у DOM, відкритий видимий); (4) Benefits 5/5 без крапок, хвости match frozen copy; (5) popular check = `rgb(21,128,61)` (success-700) + element-скріншот переглянуто вручну ✓. Спека/скріншот/test-results **видалені**, :3000 вбито (лишився після прогону — **gotcha 19** знову підтверджено). Локаторний нюанс спеки: `ancestor::div[contains(@class,'h-full')]` захоплює card (class-list) замість entrance-wrapper → exact `@class='h-full'`.

**Acceptance Criteria:** review report ✓ (`## Standards` / `## Spec` у цьому тікеті), worst issues fixed ✓ (4/4), build passes ✓.

**Next:** **map виконано (00-10).** Backlog: 03 adaptive grill (input: F1+F2); drift тікета 01 (doc-fix); втрата baseline01/FINDINGS.md; коміт docs+src фіксів (після closing go). NO AUTO-ADVANCE.
