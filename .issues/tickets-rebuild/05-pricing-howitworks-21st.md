# Ticket 05: Pricing + HowItWorks via 21st

**Label:** wayfinder:task
**Map:** map-annaber-rebuild.md
**Status:** PARTIAL — Pricing DONE (2026-09-25), HowItWorks NEXT
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

**PARTIAL (2026-09-25) — Pricing DONE, HowItWorks NEXT (окрема сесія).**

### Pricing (DONE)

- Workflow: DIRECT EDIT `src/components/sections/Pricing.tsx` (прецедент 04).
- 21st: quota 2/2 **не витрачено** (0 get). Ід 6247 (uilayout.contact/pricing-section, який сподобався користувачу) — **license unknown → get заборонений** → затверджено **hand-replicate** концепції. REJECTED для 05 (не пропонувати): 25362 (no-license), 6247/7260/7091/5115 (unknown), 28540 (AGPL). ⚠️ `21st.dev/c/<id>` = 404, робочі лінки — поле `url` з search. Auth: `russ485` (login збережено).
- Чернетка старих карток: `Pricing.legacy.tsx` (не імпортується, повернення = 1 імпорт).
- Фінал: radial glow (primary-200), highlight `accent-200`, popular = border-2 + gradient white→primary-100 + badge; кнопки rounded-full default `gray-900 shadow-lg` / popular `gradient primary-500→600 shadow-lg shadow-primary-500/30`, hover `shadow-xl`; CheckCircle icons; toggle/річні ціни прибрано; frozen copy; без GSAP.
- Анімації (ключові прецеденти framer-motion v13): (1) **parent-stagger без explicit `initial`/`whileInView` на дітях НЕ працює** — `whileHover`-label робить дитину variant-controller і блокує наслідування `initial` (`use-visual-state.mjs:24-32`) → фікс: явний initial+whileInView per card + `custom={index}` dynamic variant `shown(i)`; (2) **two-element structure**: зовнішній = entrance (0.75s, delay 0.1+i×0.18, viewport amount 0.5), внутрішній = hover (rest↔hover y:-4, 0.15s expo) — бо hover-revert до повільного `shown` давав delay 0.1-0.4s + 0.6s «падіння».
- Verify: lint✓ build✓; тимчасові Playwright-спеки (stagger proof, hover speed) — видалені.
- Рішення: flip-card REJECTED; scale-on-hover REJECTED (lift досить); monthly/yearly toggle REJECTED; додаткові design-skills не потрібні.

### HowItWorks (NEXT)

- Окрема сесія: 1 search → approval gate → get/hand-replicate → direct edit `HowItWorks.tsx`. GSAP entrance замінити на Framer Motion (прецедент вище). Prompt у `HANDOFF.md`.
