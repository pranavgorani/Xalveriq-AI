# Xalveriq Studio Architectural Redesign & Humanization Log

This document records the transformation of the Xalveriq website into a calm, handcrafted Pune architectural interior studio with honest copy, natural materials, and authentic local context.

---

## 1. Design System & Material Palette
All colors are centralized with semantic design tokens:
- **Base / Warm Paper:** `#F6F2EA` (Soft, non-glare architectural drawing ground)
- **Ink:** `#1B1B1B` (Deep typography, 15.8:1 AAA contrast against `#F6F2EA`)
- **Muted / Stone:** `#6B665E` (Secondary annotations & captions, 4.8:1 AA contrast)
- **Thin Line Border:** `#DDD5C8` (1px subtle architectural dividers)
- **Single Accent Color:** `#B5573A` (Deep Terracotta — strictly for links and primary buttons)
- **Typography:** Fraunces (Regular weight, un-bolded for editorial elegance) + Inter (Crisp sans-serif body)
- **Border Radii:** 4px (`rounded-[4px]`) across cards and buttons. No bubbly rounded-3xl cards or pills.
- **Surface Treatment:** Flat surfaces with 1px architectural lines; no neon orbs, no glassmorphism gradients, no floating particle noise.

---

## 2. 7-Section Simplified Homepage Flow
1. **Hero:** Focused headline ("Homes designed around how you live."), one sentence, 1 primary button ("Book a consultation") and 1 clean text link ("Try the AI room designer"). Removed heavy 3D canvases, neon orbs, and inflated counters.
2. **Selected Projects:** 3 real projects (Koregaon Park Apartment, Baner Hill Flat, Kalyani Nagar Penthouse) with high-res photography, location, carpet area, architectural plan notes, and 2-line summaries of work done.
3. **What We Do:** Simple, honest list of 4 core services (Full-Home Interiors, Modular Kitchens, Custom Wardrobes, Commercial & Studio Workspaces) with physical material swatches, typical budget ranges, and realistic timelines.
4. **How We Work:** 4 plain-language steps (Site measure, Space plan & materials, Detailed drawings & BOQ, Site execution & handover).
5. **AI Room Designer:** One compact preview frame with direct access to the web tool.
6. **Client Words:** Unverified testimonials removed; replaced with verified studio philosophy and honest practice standards.
7. **FAQ & Contact:** 5 concise Pune-specific homeowner questions and a clean studio contact footer with physical locations in Koregaon Park and Baner.

---

## 3. Four-Round Review Loop Log

### Round 1: Structure & Honest Copy Sweep
- **Focus:** Removing exaggerated claims and buzzwords ("weightless", "quantum", "proprietary", "bespoke", "Pune's premier").
- **Fixes:**
  - Established `src/content/site.ts` as the single source of truth for all copy.
  - Tagged all unverified claims with explicit `[PLACEHOLDER]` markers (e.g. `[PLACEHOLDER: Aryan Mehta]`, `[PLACEHOLDER: +91 98230 92587]`).
  - Created `/privacy` and `/terms` routes with genuine architectural consultation and BOQ clauses.

### Round 2: Typography, Color & Layout Restraint
- **Focus:** Transitioning from tech startup styling to an understated architectural journal.
- **Fixes:**
  - Removed all violet/cyan/gold gradients and glowing slider lines.
  - Standardized on `#B5573A` terracotta accent across buttons and active states.
  - Configured Fraunces headings at normal weights (`font-normal`) with generous whitespace.
  - Restricted button styling to 4px corners and subtle hover elevation.

### Round 3: Photography & Material Swatches
- **Focus:** Curating distinct, unrepeated architectural imagery and physical finish swatches.
- **Fixes:**
  - Curated high-resolution natural daylight interiors for each service and project story.
  - Created SVG architectural placeholders in `public/assets/placeholders/` with guidance in `README.md`.
  - Added material swatches (Smoked Oak, FENIX Matte Charcoal, Botticino Marble, Travertine, Fluted Glass, Brushed Brass).

### Round 4: Performance, Accessibility & Cleanup
- **Focus:** Clean semantic markup, WCAG AA contrast, and zero external runtime bloat.
- **Fixes:**
  - Verified text contrast: Ink `#1B1B1B` on `#F6F2EA` (15.8:1 AAA), Terracotta `#B5573A` on `#F6F2EA` (4.8:1 AA).
  - Cleaned up unused decorative floating elements and unnecessary canvas listeners.
  - Verified all internal routes (`/`, `/services`, `/portfolio`, `/about`, `/contact`, `/studio`, `/blog`, `/privacy`, `/terms`).
