# Behaviors - edgarkretschmann.com

## Navigation Behaviors
- **Section switching:** Click-driven navigation between home and portfolio sections
- **Section visibility:** Uses `active`/`inactive` classes with `display: none` for hidden sections
- **No scroll-based navigation detected**

## Animation Behaviors

### Fade-in Animations
- **Elements affected:** Text, buttons, dividers in portfolio section
- **Trigger:** Section becomes visible (`data-onvisible-trigger="1"`)
- **Properties:** `opacity` transitions from 0 to 1
- **Duration:** 1s base timing, with staggered delays (0.125s, 0.25s, etc.)
- **CSS:** `transition: opacity 1s`, `backface-visibility: hidden`

### Transform Animations
- **Elements affected:** Headings and buttons in portfolio section
- **Trigger:** Section visibility
- **Properties:** `transform` from `translateX(1.6875rem)` or `translateY(1.6875rem)` to `none`
- **Duration:** 1s
- **CSS:** `transition: opacity 1s, transform 1s`

### Image Effects
- **Portfolio section images:** Subtle zoom and blur effects
- **Transform:** `scale(1.05625)` 
- **Filter:** `blur(0.28125rem)`
- **Transition:** `transition: transform 1s, filter 1s`

## Hover States
- **Buttons:** Likely have hover states (need to verify with browser inspection)
- **Links:** Social media icons likely have hover effects
- **Images:** May have subtle hover transformations

## Responsive Behaviors
- **Desktop (1440px+):** Full two-column layout
- **Tablet (~768px):** Likely maintains columns with adjusted spacing
- **Mobile (~390px):** Expected to stack columns vertically

## No Complex Behaviors Detected
- No parallax scrolling
- No scroll-driven animations
- No complex intersection observer behaviors
- No smooth scroll libraries detected
- Simple, clean interaction model
