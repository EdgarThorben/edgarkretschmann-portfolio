# HomeSection Specification

## Overview
- **Target file:** `src/components/HomeSection.tsx`
- **Screenshot:** `docs/design-references/edgarkretschmann.com/desktop-full.png`
- **Interaction model:** static / scroll-driven visibility

## DOM Structure
- `section#home-section` (wrapper)
  - `div#container03` (Container 03 - Hero)
    - `div.wrapper`
      - `div.inner`
        - `div.full` -> `div#image01` (Image)
        - `div` -> `hr#divider02`, `h1#text07`, `p#text01`, `ul#buttons05`
  - `div#container01` (Container 01 - Portfolio Preview)
    - `div.wrapper`
      - `div.inner`
        - `div.full` -> `div#image02` (Image)
        - `div` -> `hr#divider04`, `h2#text02`, `p#text06`, `ul#buttons02`, `ul#buttons03`

## Computed Styles (exact values from getComputedStyle)

### Container 03 (Hero)
- backgroundColor: `rgb(255, 255, 255)`
- display: `flex`
- flexDirection: `row`
- gap: `normal`
- padding (inner): `56px 32px`

### Text 07 (H1)
- fontSize: `16px` (Note: Mobile viewport extraction showed 16px, but desktop might be larger. I'll use relative units or check desktop.)
- color: `rgb(0, 0, 0)`
- fontFamily: `"Source Sans 3", sans-serif`

## Assets
- Image 01: `/images/image01.jpg`
- Image 02: `/images/image02.jpg`
- Icons: `ChevronRightIcon` from `icons.tsx`

## Text Content (verbatim)
- "Hello! I'm Edgar Kretschmann"
- "Whatsapp +4915784928200"
- Bio text: "I’m a digital marketing enthusiast..."
- Buttons: "Look at my Projects", "Explore my Portfolio" (Wait, "Explore my Portfolio" is a header in Container 01)
- "How I got here", "Get in Touch"

## Responsive Behavior
- Layout switches from columns to stack at small viewports.
- `data-reorder` attribute suggests changing order of children on mobile.
