# AnnaBer Design System — MASTER

## Design Direction

**Style family:** Claymorphism + Soft UI Evolution (hybrid)
**Reasoning:** Educational app for kids 7-16, SaaS-leaning, light mode. Claymorphism brings playfulness; Soft UI Evolution adds professional polish. Blend = "fun but not childish."

**Mode:** Light only
**Target:** Kids 7-16 + parents choosing for them
**Vibe:** Modern, friendly, confident, slightly unconventional

---

## Typography

**Display/Headings:** Fredoka (rounded, friendly, distinctive)
**Body:** DM Sans (clean, geometric, highly readable)

**Why this pairing:** Fredoka's rounded terminals bring warmth and approachability — perfect for a kids' education brand. DM Sans is neutral and modern, keeping body text professional and readable. The contrast between playful headings and clean body creates the "fun but not childish" balance.

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
```

### Tailwind Config

```js
fontFamily: {
  display: ['Fredoka', 'sans-serif'],
  sans: ['DM Sans', 'sans-serif'],
}
```

### Type Scale

| Token | Size | Line Height | Weight | Use |
|-------|------|-------------|--------|-----|
| `hero` | `text-5xl md:text-6xl lg:text-7xl` (48-72px) | `leading-[1.1]` | 600 | Hero headline |
| `h1` | `text-4xl md:text-5xl` (36-48px) | `leading-[1.15]` | 600 | Section headlines |
| `h2` | `text-3xl md:text-4xl` (30-36px) | `leading-[1.2]` | 500 | Sub-section headlines |
| `h3` | `text-xl md:text-2xl` (20-24px) | `leading-[1.3]` | 500 | Card titles, feature titles |
| `body-lg` | `text-lg` (18px) | `leading-relaxed` (1.6) | 400 | Intro paragraphs, hero subtext |
| `body` | `text-base` (16px) | `leading-relaxed` (1.6) | 400 | Body text |
| `body-sm` | `text-sm` (14px) | `leading-normal` (1.5) | 400 | Captions, helper text |
| `label` | `text-xs` (12px) | `leading-normal` (1.5) | 500 | Eyebrows, badges, labels |

**Fredoka rules:**
- Use weights 500-700 for headings (never 400 for display)
- `tracking-tight` on hero headlines
- Never use Fredoka for body text (too decorative at small sizes)

**DM Sans rules:**
- Use weights 400-700
- Body text always weight 400
- Labels/badges use weight 500

---

## Color Palette

### Primary

| Token | Hex | Use |
|-------|-----|-----|
| `primary-50` | `#EFF6FF` | Light tints, subtle backgrounds |
| `primary-100` | `#DBEAFE` | Card hover backgrounds |
| `primary-200` | `#BFDBFE` | Borders, dividers |
| `primary-500` | `#3B82F6` | Primary buttons, links, active states |
| `primary-600` | `#2563EB` | Primary button hover |
| `primary-700` | `#1D4ED8` | Primary button active |

**Usage:** Trust, main CTA, navigation active states, interactive elements.

### Accent (Warm)

| Token | Hex | Use |
|-------|-----|-----|
| `accent-50` | `#FFF7ED` | Light accent backgrounds |
| `accent-100` | `#FFEDD5` | Accent card backgrounds |
| `accent-400` | `#FB923C` | Secondary CTA, highlights |
| `accent-500` | `#F97316` | Secondary CTA hover, badges |
| `accent-600` | `#EA580C` | Active accent states |

**Usage:** Energy, warmth, secondary CTA, pricing highlights, "new" badges, progress indicators.

### Success / Warning / Error

| Token | Hex | Use |
|-------|-----|-----|
| `success` | `#22C55E` | Success states, completed |
| `warning` | `#F59E0B` | Warnings, pending |
| `error` | `#EF4444` | Errors, destructive actions |

### Neutrals

| Token | Hex | Use |
|-------|-----|-----|
| `gray-900` | `#111827` | Headlines, primary text |
| `gray-700` | `#374151` | Body text |
| `gray-500` | `#6B7280` | Secondary text, captions |
| `gray-300` | `#D1D5DB` | Borders, dividers |
| `gray-100` | `#F3F4F6` | Subtle backgrounds |
| `gray-50` | `#F9FAFB` | Page background |
| `white` | `#FFFFFF` | Cards, elevated surfaces |

### Background Strategy

- **Page:** `bg-gray-50` (soft warm white)
- **Cards/surfaces:** `bg-white` with soft shadow
- **Hero:** gradient or solid with accent tint
- **Alternating sections:** `bg-white` / `bg-gray-50` / `bg-primary-50`

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | `8px` | Inputs, small elements |
| `radius-md` | `12px` | Cards, containers |
| `radius-lg` | `16px` | Feature cards, pricing cards |
| `radius-xl` | `24px` | Hero sections, large containers |
| `radius-full` | `9999px` | Pills, badges, avatar circles |

**Rule:** One radius scale. Interactive elements (buttons) use `radius-full` (pill shape). Containers use `radius-lg` or `radius-xl`. No mixing square corners with round on the same page.

### Tailwind Config

```js
borderRadius: {
  'sm': '8px',
  'md': '12px',
  'lg': '16px',
  'xl': '24px',
  'full': '9999px',
}
```

---

## Shadows

| Token | CSS | Use |
|-------|-----|-----|
| `shadow-soft` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Default cards |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)` | Elevated cards, hover |
| `shadow-lg` | `0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)` | Popovers, modals |
| `shadow-xl` | `0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)` | Hero elements |

**Rule:** No pure-black shadows. All shadows tinted to background hue. Light mode only = soft shadows work well.

### Tailwind Config

```js
boxShadow: {
  'soft': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  'md': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)',
  'lg': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
  'xl': '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)',
}
```

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `space-1` | `4px` |
| `space-2` | `8px` |
| `space-3` | `12px` |
| `space-4` | `16px` |
| `space-5` | `20px` |
| `space-6` | `24px` |
| `space-8` | `32px` |
| `space-10` | `40px` |
| `space-12` | `48px` |
| `space-16` | `64px` |
| `space-20` | `80px` |
| `space-24` | `96px` |

**Section spacing:** `py-16 md:py-24` (64-96px vertical padding per section)
**Card padding:** `p-6 md:p-8` (24-32px)
**Grid gaps:** `gap-6 md:gap-8` (24-32px)

---

## Breakpoints

| Name | Width | Use |
|------|-------|-----|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

**Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## Interactive States

### Buttons

| State | Style |
|-------|-------|
| Default | `bg-primary-500 text-white rounded-full px-6 py-3 font-medium` |
| Hover | `bg-primary-600 shadow-md -translate-y-0.5` |
| Active | `bg-primary-700 shadow-soft translate-y-0` |
| Focus | `ring-2 ring-primary-200 ring-offset-2` |
| Disabled | `bg-gray-200 text-gray-400 cursor-not-allowed` |

**Secondary button:**
| State | Style |
|-------|-------|
| Default | `bg-white text-primary-600 border-2 border-primary-200 rounded-full` |
| Hover | `border-primary-500 bg-primary-50` |

### Cards

| State | Style |
|-------|-------|
| Default | `bg-white rounded-lg shadow-soft` |
| Hover | `shadow-md -translate-y-1` (lift effect) |

### Transitions

```css
transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
```

All interactive elements: 200ms ease-out transition. Hover = slight lift + shadow increase. Active = slight press down.

---

## Anti-Patterns to Avoid

1. **No AI purple/blue glow** — use our blue primary with warm accent
2. **No generic glassmorphism** — keep surfaces solid white
3. **No centered hero with generic gradient** — use split layout or left-aligned content
4. **No Inter font** — we use Fredoka + DM Sans
5. **No pure black** — use `gray-900` (#111827)
6. **No pure white backgrounds on colored sections** — use `gray-50` or `primary-50`
7. **No thick borders** — use shadows for depth, not borders
8. **No emoji as icons** — use Phosphor or Heroicons
9. **No more than 1 eyebrow per 3 sections**
10. **No duplicate CTA intent** — one "Start learning" label everywhere

---

## Icon Library

**Primary:** Phosphor Icons (`@phosphor-icons/react`)
- Weight: `regular` (2px stroke) for most icons
- Weight: `fill` for active/selected states only
- Size: 24px default, 20px for inline, 32px for feature icons

**Backup:** Heroicons (`@heroicons/react`) for any missing glyphs

---

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Stack all grid content
- Full-width cards
- Hero: stack text + image vertically
- Navigation: hamburger menu
- Pricing: stack cards vertically
- Font sizes: cap hero at `text-4xl`

### Tablet (768px - 1024px)
- 2-column grids where applicable
- Side-by-side hero
- Pricing: 2+1 layout
- FAQ: full width accordion

### Desktop (> 1024px)
- 3-column grids
- Side-by-side hero (50/50 or 60/40)
- Pricing: 3 columns
- Full layout as designed

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;

  --color-accent-50: #FFF7ED;
  --color-accent-100: #FFEDD5;
  --color-accent-400: #FB923C;
  --color-accent-500: #F97316;
  --color-accent-600: #EA580C;

  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-300: #D1D5DB;
  --color-gray-500: #6B7280;
  --color-gray-700: #374151;
  --color-gray-900: #111827;

  /* Typography */
  --font-display: 'Fredoka', sans-serif;
  --font-body: 'DM Sans', sans-serif;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-soft: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04);
  --shadow-xl: 0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06);

  /* Spacing */
  --space-section: 64px;
  --space-section-lg: 96px;
  --space-card: 24px;
  --space-card-lg: 32px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-base: 200ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
```
