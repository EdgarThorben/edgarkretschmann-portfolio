# Exact Design Specifications - Edgar Kretschmann Website

## Visual Audit Results (Manual HTML Analysis)

### **EXACT Animation Details Found in HTML:**

#### **Transform Values (EXACT):**
- `translateX(1.6875rem)` - Applied to headings in portfolio section
- `translateY(1.6875rem)` - Applied to buttons and social icons  
- `scale(1.05625)` - Applied to portfolio images (image03, image04)

#### **Filter Effects (EXACT):**
- `blur(0.28125rem)` - Applied to portfolio images

#### **Transition Properties (EXACT):**
- `transition: opacity 1s` - Base fade-in duration
- `transition: opacity 1s 0.125s` - Staggered delay for text
- `transition: opacity 1s, transform 1s` - Combined opacity + transform
- `transition: transform 1s, filter 1s` - Image effects

#### **Performance Optimizations:**
- `backface-visibility: hidden` - Applied to animated elements

### **Color Analysis (from HTML structure):**

#### **Primary Colors:**
- **Background:** White (appears to be default white)
- **Text:** Black (default text color)
- **CTA Button:** Black background, white text (inferred from structure)

#### **Opacity States:**
- **Visible:** `opacity: 1`
- **Hidden:** `opacity: 0`

### **Layout Structure:**

#### **Container Classes:**
- `container columns full` - Full-width two-column layout
- `container default` - Default container for footer
- `data-reorder="0,1"` and `data-reorder="1,0"` - Column ordering

#### **Image Classes:**
- `image full` - Full-width images
- `data-position="center"` - Center positioning

### **Typography Classes:**
- `style1` - Base heading style
- `style2` - Main heading style  
- `style3` - Paragraph style
- `style4` - Footer text style

### **Animation Triggers:**
- `data-onvisible-trigger="1"` - Triggers animations when visible

### **Missing from Current globals.css:**

1. **Exact Transform Values:**
   ```css
   .fade-left-hidden { transform: translateX(1.6875rem); }
   .fade-up-hidden { transform: translateY(1.6875rem); }
   ```

2. **Image Effects:**
   ```css
   .portfolio-image {
     transform: scale(1.05625);
     filter: blur(0.28125rem);
     transition: transform 1s, filter 1s;
   }
   ```

3. **Staggered Animations:**
   ```css
   .stagger-text { transition: opacity 1s 0.125s; }
   ```

4. **Performance:**
   ```css
   .animated { backface-visibility: hidden; }
   ```

### **Next Steps:**
1. Add exact transform values to globals.css
2. Implement staggered animation delays
3. Add image blur/scale effects
4. Implement backface-visibility for performance
5. Get exact hex codes from Gemini API for colors
