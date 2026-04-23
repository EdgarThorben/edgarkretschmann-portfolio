# Gemini 3.1 Design Analysis Request

## Context
I need to extract exact design specifications from Edgar Kretschmann's website (https://edgarkretschmann.com) to create a pixel-perfect clone.

## Available Data
1. **Complete HTML**: `docs/research/edgarkretschmann.com/raw-html.html`
2. **Screenshot**: Available via browser session (need to capture)
3. **Target**: Pixel-perfect Tailwind CSS implementation

## Analysis Requirements

### 1. Extract Exact Design Tokens
- **Colors**: Exact hex/rgb values for background, text, borders
- **Typography**: Font family, sizes (px), weights, line heights
- **Spacing**: Exact margins, padding, gaps in rem/px
- **Layout**: Container widths, column ratios, flex properties

### 2. Component-Specific Analysis
- **Home Section**: Two-column layout, image positioning, text hierarchy
- **Portfolio Section**: Alternating layouts, image effects, button styles
- **Navigation**: Section switching mechanism
- **Footer**: Social icons layout and spacing

### 3. Interactive Behaviors
- **Animations**: Fade-in timing, transform values, delays
- **Hover States**: Color transitions, scale effects
- **Responsive**: Breakpoints and layout changes

### 4. Output Format
Provide exact Tailwind classes and custom CSS values for:
- Container layouts
- Typography scales  
- Color schemes
- Spacing systems
- Animation keyframes
- Responsive breakpoints

## Instructions
1. Analyze the HTML structure and inline styles
2. Extract computed CSS values from the screenshot
3. Map to exact Tailwind utilities
4. Provide custom CSS for any non-Tailwind values
5. Create a comprehensive design system specification

Focus on precision - no approximations or "close enough" values.
