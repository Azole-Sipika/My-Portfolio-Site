# Azole Sipika — Creative Studio Portfolio

A responsive **single-page scrolling portfolio** built with React, TypeScript, Vite, and Lucide icons. Inspired by the supplied purple Creative Studio prototype.

## Sections (in exact scroll order)
1. Home `#home`
2. About `#about`
3. Projects `#projects` — expandable case studies
4. Education & Certificates `#education`
5. Skills & Technologies `#skills`
6. Contact `#contact`

All sections appear on the **same page**. Navigation scrolls to anchors; no page navigation is required. Includes mobile navigation, dark/light theme saved locally, subtle entrance animations, and reduced-motion support.

## Run locally
```powershell
npm install
npm run dev
npm run build
```
Open the URL shown by Vite, usually http://localhost:5173.

## Before publishing
- Open `src/App.tsx` and set the `profile` object's verified GitHub, LinkedIn, email and CV URLs. Blank URLs deliberately show inactive placeholder text rather than broken links.
- Update `src/data/projects.ts` with verified repository/demo URLs and status.
- Add real certificate details in the Education section in `src/App.tsx`. The existing certificate card is a placeholder, not a claimed qualification.
- The project UI images are CSS-generated **illustrations**, not screenshots. Replace them with actual application screenshots when available.
- The contact section uses direct links, not a fake form.
- Netlify SPA redirect configuration is included.

## Build
`npm run build` produces the `dist` directory for Netlify.


## Latest requested adjustments
- Removed the two hero fact labels (Full-stack projects and Cape Town, South Africa).
- Removed the Scroll to Explore prompt.
- Removed the entire bottom footer (brand, slogan, repeated navigation and copyright).
- Added a **Download Resume** button in the hero. **IMPORTANT:** Before deploying, copy your real resume PDF to `public/resume.pdf`. The link will not work until you add that PDF. Do not put private information in a publicly accessible resume that you do not want shared.
- Preserved the six-section continuous scrolling layout and header navigation.
