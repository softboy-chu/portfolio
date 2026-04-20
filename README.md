# Okeke Gabriel Chukwuma — Portfolio (React + Vite + Tailwind)

Personal portfolio site. Built with React + Vite + Tailwind CSS.

**Live:** [devchu.netlify.app](https://devchu.netlify.app)

---

## Stack

| Layer   | Choice                                |
|---------|---------------------------------------|
| UI      | React 18                              |
| Routing | React Router v6                       |
| Build   | Vite 4                                |
| Styles  | Tailwind CSS v3                       |
| Fonts   | Cormorant Garamond + DM Sans (Google) |
| Hosting | Netlify                               |

---

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

---

## Project Structure

```
chu-portfolio/
├── index.html                  ← Vite entry, Google Fonts, OG/Twitter meta tags
├── netlify.toml                ← SPA redirect rule (/* → /index.html)
├── vite.config.js
├── tailwind.config.js          ← custom CSS var-based colors + fonts
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                ← React root
    ├── App.jsx                 ← BrowserRouter + routes
    ├── index.css               ← Tailwind directives, light/dark CSS vars, scroll reveal
    ├── hooks/
    │   ├── useDarkMode.js      ← dark mode toggle, persists to localStorage
    │   └── useScrollReveal.js  ← IntersectionObserver scroll-in animation
    ├── components/
    │   ├── Nav.jsx             ← desktop nav, dark mode toggle, mobile hamburger drawer
    │   ├── Hero.jsx            ← availability badge, headline, tagline, CTA
    │   ├── Work.jsx            ← 7 project cards (4 main + 3 template-badged)
    │   ├── About.jsx           ← dark bg, bio, stats, tech stack
    │   ├── Pricing.jsx         ← ₦ pricing rows
    │   └── Contact.jsx         ← blue bg, email, socials, footer
    └── pages/
        └── NTRACaseStudy.jsx   ← full case study: overview, features, challenges, architecture
```

---

## Sections

- **Nav** — CHU logo, desktop links, dark mode toggle, mobile full-screen drawer with scroll lock
- **Hero** — availability badge (pulsing dot), headline, tagline, CTA button
- **Work** — 7 projects across one grid; Admin Dashboard + Haven E-commerce carry a "Template" badge; NTRA TaxGuide links to a full case study page
- **About** — dark bg, bio, 4+ yrs / 7+ projects / 12+ clients, React · TypeScript · Tailwind stack
- **Pricing** — ₦150,000 / ₦300,000 / Custom (Naira)
- **Contact** — blue bg, email, GitHub, LinkedIn, Twitter/X

---

## Case Study — NTRA TaxGuide (`/work/ntra-taxguide`)

Full breakdown of the platform including:
- Role + responsibilities
- Key stats (2 apps, 8+ modules, 401 auto-intercept, 100% DTO-aligned)
- Feature overview (auth flows, training engine, tax config CRUD, admin console)
- Technical challenges + solutions (session race condition, DTO drift, token expiry)
- Architecture decisions + project tree
- Lessons learned


---

## Deploying to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**
3. Select your GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy

> **Important:** The `netlify.toml` file at the project root includes a `/* → /index.html` redirect rule. This is required for React Router to work correctly on page refresh and direct URL access.

Auto-deploys on every push to `main`.

---

## Dark Mode

Toggled via the sun/moon icon in the nav. Preference is saved to `localStorage` and respects the user's OS setting on first visit. Implemented with CSS variables on `html.dark` — no flicker on load.

---

## Contact

**Email** — okekechukwuma88@gmail.com
**GitHub** — [softboy-chu](https://github.com/softboy-chu)
**LinkedIn** — [okeke-gabriel](https://www.linkedin.com/in/okeke-gabriel-871159249/)
**Twitter / X** — [@devchu_](https://x.com/devchu_)
