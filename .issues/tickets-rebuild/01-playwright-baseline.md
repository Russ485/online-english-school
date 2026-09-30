# Ticket 01: Playwright Baseline (Diagnostic)

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** CLOSED (2026-09-01; doc-fix статусу 2026-09-30 — дата закриття за DONE критики 02)
**Blocked by:** 00-product-init.md

## Question

Take diagnostic screenshots of the CURRENT build ("скучненько" state) at 3 breakpoints to provide evidence for critique.

## Tasks

- `npm run build` must pass before screenshots
- Run `npx playwright install` if needed, use `playwright-core` skill patterns
- Screenshots via Playwright at:
  - Mobile 375×800
  - Tablet 768×1024
  - Desktop 1280×800
- Capture each of 7 sections: Hero, Benefits, Pricing, HowItWorks, Testimonials, FAQ, Footer
- Save to `screenshots/baseline/` (create dir)
- Document findings: what looks "скучненько" (generic gradient, no parallax, static cards)

## Acceptance Criteria

- Screenshots exist at 3 breakpoints
- Build passes
- Findings listed for Ticket 02 critique input

## 21st Approval Gate

- N/A for this ticket.

---

## Resolution

**Status: CLOSED (2026-09-01)** — виконано за AC; статус у файлі лишався OPEN (drift) до doc-fix 2026-09-30.

- `npm run build` ✓ → створено **`tests/baseline.spec.ts`** (з тих пір НЕ редагувався — недоторканний; запускався у 09).
- Скріншоти «скучненького» стану 375/768/1280 × 7 секцій → `screenshots/baseline/` (у 09 той самий spec відтворив 24 PNG).
- **`FINDINGS.md`** — діагностика (generic gradient, no parallax, static cards) як input для критики 02.
- **⚠️ Артефакти втрачені** (`screenshots/` у `.gitignore:44`, у git ніколи не комітились; `f6d95ea` 2026-09-04 уже з перебудованим Hero → реконструкція з git неможлива). Задокументовано у Resolution 09; diff-«старт» = `.impeccable/critique/annaber-baseline-02.md` + Resolutions 03-08. Відновити можна лише з бекапів користувача, якщо знайдуться.
