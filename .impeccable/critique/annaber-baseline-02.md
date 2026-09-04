# Ticket 02 — Impeccable Critique: baseline "скучненько" (375/768/1280)

Method: single-context (manual audit via DESIGN.md + screenshots baseline, detector skipped — not applicable to static next build)
Date: 2026-09-01
Evidence: `screenshots/baseline/*-full.png` + `screenshots/baseline/*.png` per section (24 files), `DESIGN.md` via OD `ba33a560...`, `PRODUCT.md:1`

## AC уточнення
**AC = Acceptance Criteria** — критерії приймання тікету. Для Ticket 02: список findings P0/P1/P2 з line refs + готовність для Ticket 08 polish.

---

## Design Health Score (Nielsen 10 heuristics, 0-4)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | немає scrub-індикації скролла, pricing popular неочевидний, FAQ aria-expanded є але без aria-controls |
| 2 | Match System / Real World | 3 | копі ок (PRODUCT.md), але hero preview не показує реальний урок на mobile |
| 3 | User Control and Freedom | 2 | немає відміни/назад, FAQ лише toggle без keyboard roving |
| 4 | Consistency and Standards | 2 | 2 різні стилі pricing карток (bg-white vs bg-primary-500), різні ease (power2 vs expo) |
| 5 | Error Prevention | 3 | немає destructive actions, але немає constraints для майбутніх форм |
| 6 | Recognition Rather Than Recall | 2 | hero CTA дублюються, benefits без eyebrow, немає sticky CTA на mobile |
| 7 | Flexibility and Efficiency | n/a | landing Persuade — shortcuts не очікуються |
| 8 | Aesthetic and Minimalist Design | 2 | generic градієнт hero + статичні blur, немає depth системи (4 tier shadows частково) |
| 9 | Error Recovery | n/a | немає форм/помилок на лендінгу |
| 10 | Help and Documentation | 2 | FAQ 6 питань є, але всі закриті за замовчуванням, немає search/context help |

**Total: 18/32 (56%) — Acceptable, but needs significant polish before 21st rebuild.** (2 heuristics n/a → max 32)

---

## Design Specificity Verdict
**Category-interchangeable.** Композиція — стандартний SaaS лендінг: centered hero + 3-col pricing + 3 steps. Немає AnnaBer характеру: відсутній parallax scrub (DESIGN.md 7.1), bento 2+3 для Benefits (DESIGN.md 5.1), accent-обмеження порушене. Виглядає як template з `from-primary-50 via-white to-accent-50` — саме те "скучненько" з handoff. Detector (CLI) не запускали — код статичний, audit ручний.

## What's Working (3)
1. **Контент відповідає PRODUCT.md** — 7 секцій у правильному порядку, CTA `Start learning` скрізь однаковий, копі чесний ($29/$79/$149, 25/45 хв), testimonials з віком дитини — довіра батьків збережена. (`src/components/sections/Pricing.tsx:12`, `Testimonials.tsx:6`)
2. **Responsive grid базово працює** — 375 single-col, 768 2-col Benefits, 1280 3-col Pricing/HowItWorks видно на `768-full.png` / `1280-full.png`. Контейнер `max-w-7xl px-4 sm:px-6 lg:px-8` дотриманий.
3. **Token імпорт коректний** — `src/app/tokens.css:5` (@theme inline) + `src/app/globals.css:2` + `layout.tsx:5` Fredoka/DM Sans — кольори #3B82F6/#F97316 доступні скрізь.

## Priority Issues

### P0 — Blocker (фіксити до 03-06)

**[P0-1] Hero без parallax scrub — головна причина "скучненько"**
- **What:** `src/components/sections/Hero.tsx:26` — `bg-gradient-to-br from-primary-50 via-white to-accent-50` на всю секцію + `absolute blur-3xl` плями. Немає `DESIGN.md 7.1` scrub: немає класів `.hero-blur-1/.hero-blur-2/.hero-preview`, немає `gsap.to({yPercent:-18, scrub:1})`, немає `prefers-reduced-motion` guard для scrub.
- **Evidence:** `1280-01-hero.png 301KB` — плаский градієнт, `375-01-hero.png 147KB` — те саме на mobile.
- **Fix:** Реалізувати DESIGN.md 7.1 точно: `hero` як trigger, `scrub:1` / `0.8` для preview, лише `transform/opacity`, guard `matchMedia('(prefers-reduced-motion: reduce)')`. Винести 21st preview (Ticket 03).
- **Command:** `/impeccable animate`

**[P0-2] Hero preview відсутній на mobile/tablet**
- **What:** `Hero.tsx:56` `hidden lg:block` — права картка "Live Session" не рендериться <1024px. На `375-01-hero.png` / `768-01-hero.png` — порожня нижня половина hero.
- **Why:** Ламає DESIGN.md 5.1 split 60/40 → stack на mobile (має бути stack, а не hide). Втрата trust-row для батьків.
- **Fix:** Замість hide — stack `grid lg:grid-cols-2` з preview під текстом на mobile, або 21st hero з адаптивним preview.
- **Command:** `/impeccable adapt`

**[P0-3] Pricing visual hierarchy зламана**
- **What:** `Pricing.tsx:92-94` popular = `bg-primary-500 text-white ring-2 ring-primary-500` + `shadow-xl`. DESIGN.md 5.1/6.2: popular має бути `bg-white ring-2 ring-primary-200` + accent badge `bg-accent-100 text-accent-600`, CTA `bg-accent-500`. Зараз accent з'являється лише як badge `bg-accent-500` (P0-3a), а сама картка інвертована — ламає light-only та правило одного акцента.
- **Evidence:** `1280-03-pricing.png 12KB` — синя картка посередині виглядає як інший продукт, CTA білий `bg-white text-primary-600` не по токенах.
- **Fix:** Повернути 21st pricing до білого + ring + accent CTA, як у DESIGN.md.
- **Command:** `/impeccable layout`

### P1 — Major (фіксити перед релізом)

**[P1-1] Benefits не bento 2+3, картки без системи тіней**
- **What:** `Benefits.tsx:86` `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` — 5 карток рівномірно, але DESIGN.md 5.1: desktop 2+3 bento, tablet 2+2+1. Картки `bg-gray-50` без `bg-white shadow-soft`, hover `shadow-md` є але default тіні немає. На `1280-02-benefits.png 46KB` — всі картки однакові, немає ритму.
- **Fix:** 21st Benefits (Ticket 04) з bento + `bg-white rounded-lg shadow-soft p-6 md:p-8`.

**[P1-2] HowItWorks лінія статична + stagger не по spec**
- **What:** `HowItWorks.tsx:67` `bg-gradient-to-r from-primary-200 via-accent-200` — статичний `div`, без `scaleX 0→1 0.6s` анімації. `HowItWorks.tsx:42` stagger `0.2 / power2.out / start top 80%` замість DESIGN.md 7.2 `0.12 / expo.out / top 82%`.
- **Evidence:** `1280-04-howitworks.png` — лінія просто є, не малюється.
- **Fix:** GSAP 7.2 reveal + лінія `scaleX`.

**[P1-3] CTA економіка порушена**
- **What:** `Hero.tsx:44,49` два CTA solid поряд: primary `bg-primary-500` + secondary `border-2 border-primary-200` — обидва виглядають primary. DESIGN.md 5.2: **один primary на viewport**, другий ghost/secondary muted. На `375-full.png` — два однаково важкі кнопки конкурують.
- **Fix:** Залишити один `Start learning` solid, другий `ghost` або `secondary` muted.

**[P1-4] Typography: Fredoka 400 та hero tracking**
- **What:** `src/app/layout.tsx:8` `weight: ["400","500","600","700"]` — DESIGN.md 3.3 забороняє 400 для display (тільки 500-700). Hero `Hero.tsx:36` `font-semibold tracking-tight` ок, але `Fredoka 400` вантажиться зайво та може потрапити в body.
- **Fix:** Прибрати 400 у 08 polish.

**[P1-5] FAQ закриті за замовчуванням + a11y**
- **What:** `Faq.tsx:40` `useState<number | null>(null)` — всі закриті. DESIGN.md 5.1: один відкритий за замовчуванням. `Faq.tsx:61` `aria-expanded` є, але немає `aria-controls`/`id`, контент `Faq.tsx:74` умовний `{openIndex===index && <div>}` замість `grid-template-rows 0fr→1fr` з DESIGN.md 7.3 — анімація різка. Focus `focus-visible:outline-offset-[-2px]` нестандартний.
- **Evidence:** `768-06-faq.png` — порожній блок, немає підказки.
- **Fix:** Відкрити 0-й за замовчуванням, додати `aria-controls`, анімація через grid.

**[P1-6] Motion guards неповні**
- **What:** `Benefits.tsx:60`, `Pricing.tsx:60`, `HowItWorks.tsx:40` є `useReducedMotion()` guard, але `Hero.tsx:13` (entrance timeline) теж має guard — ок. Проте DESIGN.md 7.4 вимагає **повне відключення** scrub/stagger при reduce — зараз stagger просто не ініціалізується, але контент вже `opacity 0` до JS? Потрібно CSS fallback `opacity:1` для reduce.

### P2 — Minor

**[P2-1] Radius/shadow не по токенах:** `Hero.tsx:59` `rounded-3xl` / `rounded-2xl` — DESIGN.md: hero/pricing `xl 24px`, cards `lg 16px`, buttons `full`. `Pricing.tsx:91` `rounded-2xl` ок, але `Benefits.tsx:90` `rounded-xl` vs токен `lg 16px` — minor.
**[P2-2] Icons 32px vs 20-24px:** DESIGN.md 5.1 Benefits іконка `40px circle + 20-24px icon`, зараз `h-12 w-12 rounded-xl` (`Benefits.tsx:93`) — трохи велико.
**[P2-3] Testimonials без reveal:** `Testimonials.tsx:32` немає GSAP reveal взагалі — додати stagger 0.1 у Ticket 06.
**[P2-4] Footer бренд `text-primary-400`** (`Footer.tsx:44`) — токен не існує (є -50/100/200/500/600/700). Випадковий відтінок.
**[P2-5] Spacing `py-20 md:py-28 lg:py-32` в Hero** (`Hero.tsx:28`) замість `py-16 md:py-24` по DESIGN.md 4.

## Persona Red Flags

**Jordan (First-Timer, батько 7-16):** Hero без preview на mobile — не розуміє що таке "Live Session", дві кнопки однаково важливі — котру тиснути? FAQ всі закриті — не знаходить відповідь про вік/скасування. Ризик abandon на 1-му екрані.

**Casey (Distracted Mobile):** `375-full.png` — hero без preview, CTA внизу? Thumb zone ок але другий CTA відволікає. State не зберігається (немає). Touch targets `44px` ок (`py-3.5` ≈44), але pricing картки тісні (`p-8 gap-6` на 375 — скролл довгий).

**Olena (Мама 9-річної, проєктна персона з PRODUCT.md):** Хоче SaaS-довіру + playful для дитини. Зараз бачить generic градієнт (не playful) + синю pricing картку (не довіра, а агресія). Немає "Max 4 students" візуального акценту.

## Minor Observations
- `Benefits.tsx:37` `bg-success/10` — ок, але токен `success` без alpha в DESIGN.md.
- `Pricing.tsx:24` `popular: false/true` — логіка ок, але `ring-2 ring-primary-500` без `ring-offset-2`.
- `Faq.tsx:55` `hover:border-primary-200` на закритому — зайвий.

## Questions skipped: <3 Priority Issues? Ні, 3+ є — питання нижче.

