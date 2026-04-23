# Gap Report - edgarkretschmann.com Clone
_Last updated: 2026-04-19_

## Summary
All four subdomain routes are implemented and the production build passes cleanly (Next.js 16 / Turbopack, TypeScript check: ✓, 11 static routes: ✓).

---

## Home Page (`/` ← edgarkretschmann.com)
**Status: ✅ Complete**
- All four content sections match source verbatim: Hero, Portfolio Preview, "Actually not a Mac Fan", "Done. Remotely"
- Note: "Actually not a Mac Fan" body text is `x` in the original source — this is genuine, not a bug
- All images present: `public/images/home/image01–04.jpg`
- Design tokens match: `--brand-accent: oklch(0.916 0.088 163.53)`, `--brand-accent-foreground: oklch(0.443 0.024 233.15)` ✓
- Social/contact footer links correct

---

## Bio Page (`/bio` ← bio.edgarkretschmann.com)
**Status: ✅ Complete (1 fix applied)**
- All 7 experience entries match CONTENT.md verbatim
- All images present: `public/images/bio/image01–08.jpg`
- **Fixed:** "More Details" button was an external link to `https://projects.edgarkretschmann.com` — changed to internal `/projects`

---

## Portfolio Page (`/portfolio` ← portfolio.edgarkretschmann.com)
**Status: ✅ Complete (2 fixes applied)**
- All 6 project cards present with correct descriptions
- All images present: `public/images/portfolio/container02/04/07/10/13/16.jpg`
- **Fixed:** Cards were missing company titles (Innate, Pflegeplace, etc.) — added `title` field to all 6 entries and rendered prominently above category label
- **Fixed:** "Brick and Mortar German School (abroad)" → "Brick and Mortar German School" to match source
- "Get in touch!" button links to `/projects#touch` — anchor now resolves correctly (see Projects fix below)

---

## Projects Page (`/projects` ← projects.edgarkretschmann.com)
**Status: ✅ Complete (1 fix applied)**
- All 6 project detail sections present (Innate, Pflegeplace, IcanSpeak, DeutschAcademy, Nomavillage, Narangyoga)
- All project images present: `public/images/projects/container03/08/09/10/11/12/14/16/20/22/26/28/32.jpg`
- **Fixed:** Contact section missing `id="touch"` — added so `/projects#touch` anchor from portfolio resolves correctly
- Note: Projects mirror HTML is a fully JS-rendered Carrd site — static mirror contains only skeleton; project content was sourced from CONTENT.md research files

---

## Individual Project Pages (`/project1`–`/project6`)
**Status: ✅ Complete (no changes needed)**
- All 6 pages exist and use `ProjectDetail` component
- Mapping: project1=Innate, project2=Pflegeplace, project3=IcanSpeak, project4=DeutschAcademy, project5=Nomavillage, project6=Narangyoga

---

## Design Tokens (`globals.css`)
**Status: ✅ Verified**
- `--brand-accent: oklch(0.916 0.088 163.53)` = `#BFF2DA` ✓
- `--brand-accent-foreground: oklch(0.443 0.024 233.15)` = `#596269` ✓
- Dark card background: `#302D36` ✓
- Fonts: Geist (body), Lexend Deca (headings on bio page) ✓

---

## Known Remaining Gaps
- **Home / "Mac Fan" body**: The original source literally contains `x` as the body text for "Actually not a Mac Fan" — content was never filled in on the original site. Left as-is to match source faithfully.
- **Contact form**: The projects Carrd site had a contact form (fields: Email, Message, Post Url, Site Url). The current implementation uses a mailto link instead. Full form would require a backend (e.g. Formspree, Resend).
- **Live localhost visual check**: Chrome extension was unavailable during this session. Visual comparison against live localhost:3010–3013 mirrors was not performed. Recommend a manual spot-check after running `node scripts/serve-local.mjs`.
