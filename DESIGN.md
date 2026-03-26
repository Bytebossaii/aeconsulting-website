```markdown
# Design System Specification: The Architectural Authority

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Architectural Authority."** Much like a high-end architectural firm or an elite global consultancy, the visual language prioritizes structure, intentionality, and the luxury of space. We are moving away from the "app-like" density of standard SaaS products and toward a "Digital Editorial" experience.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Offsetting typography and imagery to create a sense of bespoke curation.
*   **High-Contrast Scale:** Pairing massive `display-lg` serif headings with minimalist `label-sm` sans-serifs to create a rhythm of authority.
*   **Tonal Depth:** Replacing harsh lines with sophisticated shifts in surface color to define boundaries.

The vibe is elite, reliable, and corporate—designed to instill immediate trust in high-stakes consulting environments.

---

## 2. Colors & Surface Philosophy

The palette is anchored in deep, authoritative Navies (`primary`) and punctuated by sophisticated Gold accents (`secondary`). 

### The "No-Line" Rule
Standard UI relies on 1px borders to separate content. In this design system, **solid 1px borders for sectioning are prohibited.** Boundaries must be defined through background color shifts.
*   **Example:** A `surface-container-low` (#f3f4f5) section sitting directly against a `surface` (#f8f9fa) background creates a sophisticated, soft-edge transition that feels premium rather than "boxed in."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-weight paper.
*   **Base:** `surface` (#f8f9fa)
*   **Recessed Sections:** `surface-container-high` (#e7e8e9) for sidebars or secondary content.
*   **Elevated Elements:** `surface-container-lowest` (#ffffff) for primary cards or white-papers.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance:
*   **Signature Gradients:** For hero sections or high-impact CTAs, use a subtle linear gradient from `primary` (#000a1e) to `primary-container` (#002147). This provides "visual soul" and depth.
*   **Glassmorphism:** For floating navigation bars or modal overlays, use a semi-transparent `surface` color with a `20px` backdrop-blur. This softens the interface and makes it feel integrated into the environment.

---

## 3. Typography: The Voice of Authority

Typography is our primary tool for conveying "Elite Reliability." 

*   **Display & Headlines (notoSerif):** The Serif is the "Voice of Experience." Use `display-lg` (3.5rem) with tighter tracking for a bold, editorial look. In hero sections, intentional overlapping of Serif text over imagery is encouraged to break the grid.
*   **Body & Titles (Inter):** The Sans-Serif is the "Voice of Clarity." It provides a modern, functional counterpoint to the Serif.
*   **Editorial Labels:** For `label-md` and `label-sm`, increase letter-spacing (tracking) by 5-8%. This mimics high-end print production and improves legibility in professional contexts.

---

## 4. Elevation & Depth

Hierarchy is achieved through **Tonal Layering** rather than traditional structural shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` (pure white) card on a `surface-container-low` background. This creates a natural "lift" that is felt rather than seen.
*   **Ambient Shadows:** If an element must float (e.g., a primary dropdown), use an extra-diffused shadow:
    *   *Blur:* 30px - 50px
    *   *Opacity:* 4% - 6%
    *   *Color:* Use a tint of `on-surface` (#191c1d) to ensure the shadow feels like natural light, not a gray smudge.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#c4c6cf) at **15% opacity**. A 100% opaque border is a failure of the system's minimalist goals.

---

## 5. Components

### Buttons: The "Architectural" CTA
*   **Primary:** `primary` background with `on-primary` (white) text. Sharp, `0.25rem` (DEFAULT) roundedness. Avoid fully rounded "pill" buttons to maintain a corporate, structural feel.
*   **Secondary (Gold):** Use the Gold (`secondary`) only for high-conversion actions. This ensures the accent remains "sophisticated" and not overused.
*   **Tertiary:** No background. Use `label-md` with `0.1rem` letter spacing and an underline that only appears on hover.

### Inputs: Minimalist Clarity
*   **Text Fields:** Forbid the four-sided box. Use a "Ghost Border" bottom line only, or a `surface-container-high` background with no border.
*   **Focus State:** Transition the bottom border to `secondary` (Gold) to signal professional attention to detail.

### Cards & Lists: Grid-Based Breathing Room
*   **Dividers:** Forbid the use of divider lines. Separate list items using the spacing scale (e.g., `spacing-4` or `spacing-6`).
*   **Asymmetric Cards:** Experiment with placing text on the left of a card and a subtle, small icon or metric on the bottom right, leaving the center "empty" to emphasize the premium nature of the layout.

### Specialized Component: The "Executive Summary" Chip
*   A selection chip using `secondary-container` (#fed488) with `on-secondary-container` text. These should be used for categorizing high-level consulting sectors (e.g., "M&A," "Strategic Planning").

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Grid:** Use the `spacing-24` and `spacing-20` tokens to create massive gutters between sections. Space = Luxury.
*   **Use Surgical Gold:** The gold (#C5A059) is a scalpel, not a brush. Use it for icons, text links, or a single border-top on a featured card.
*   **Mix Scales:** Place a `body-sm` description immediately under a `display-md` headline to create a sophisticated typographic hierarchy.

### Don't:
*   **Don't use 1px solid borders:** If you feel the need to "box" something, use a background color shift instead.
*   **Don't use standard "Blue":** Always lean into the `primary` Navy (#000a1e). Avoid bright, "techy" blues that undermine the consultancy vibe.
*   **Don't crowd the content:** If a page feels full, it is likely over-designed. Remove elements until only the essential "Architectural" pillars remain.
*   **Don't use heavy rounded corners:** Stay within the `DEFAULT` (0.25rem) or `sm` scale to keep the interface feeling sharp and professional. Avoid `full` roundedness except for specific utility icons.

---

**Final Note to Designers:** Your goal is to make the user feel like they are reading a bespoke report from a top-three global firm. If it looks like a standard dashboard, you have failed the "Elite" requirement. Use the Navy for gravity, the Gold for prestige, and the white space for clarity.```