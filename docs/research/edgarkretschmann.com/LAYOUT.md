# Layout - edgarkretschmann.com

## Global
- **Background:** Fixed linear gradient (`linear-gradient(148deg, #D3E3D8 8%, #DEF1FF 100%)`) on `body:before`.
- **Font:** Source Sans Pro (Google Fonts).
- **Layout:** Flex column wrapper (`#wrapper`) centered content.

## Sections
1. **Home Section** (`#home-section`)
   - **Container 03:** Hero-like section with image and bio.
     - Image: `image01.jpg`
     - Title: "Hello! I'm Edgar Kretschmann"
     - Description: Bio text.
     - Button: "Look at my Projects" (External link).
   - **Container 01:** Portfolio preview section.
     - Image: `image02.jpg`
     - Title: "Explore my Portfolio".
     - Description: Project preview text.
     - Buttons: "How I got here" (External link), "Get in Touch" (Mailto).

2. **One Section** (`#one-section`)
   - **Container 02:** "Actually not a Mac Fan" section.
     - Image: `image04.jpg`
     - Button: "Get in Touch".
   - **Container 04:** "Done. Remotely" section.
     - Image: `image03.jpg`
     - Button: "Contact".
   - **Container 05:** Social Icons & Footer.
     - Icons: Twitter, Facebook, Instagram, Phone, Email.
     - Footer: "© Untitled. All rights reserved."

## Responsive Behavior
- **Desktop (1440px+):** Full two-column layout.
- **Tablet (~768px):** Maintains columns with adjusted spacing.
- **Mobile (~390px):** Expected to stack columns vertically.
- Centered content layout with large typography.

## Interaction Model
- **Single Page:** Content is split into containers within sections.
- **Scroll/Visibility:** Uses `onvisible` script to fade elements in.
- **Navigation:** Buttons lead to external subdomains or mailto.
