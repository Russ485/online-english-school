# Ticket: Design System Generation

**Label:** wayfinder:research
**Map:** map-annaber-landing.md
**Status:** CLOSED

## Question

Generate a complete design system for AnnaBer landing page using ui-ux-pro-max skill. The system must cover:

- **Typography:** font family (display + body), sizes, line heights, font weights
- **Colors:** primary, secondary, accent, neutrals, backgrounds — all for light mode
- **Border radii:** consistent radius scale for cards, buttons, inputs, badges
- **Spacing:** padding/margin scale
- **Shadows:** elevation system
- **Effects:** hover states, transitions

**Constraints:**
- Light mode only
- Target audience: kids 7–16 (and their parents)
- Aesthetic: modern SaaS-leaning with playful elements — NOT childish
- Competitor vibe: Novakid-level polish
- Must work well on mobile, tablet, desktop

Run: `python scripts/search.py "kids education english school modern playful" --design-system -p "AnnaBer"`

Save the output to `design-system/annaber/MASTER.md` using `--persist`.

Return the full design system output and any additional domain searches you ran.
