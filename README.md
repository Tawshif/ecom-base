# Ecommerce Base Template

> Multi-page ecommerce UX template · Mindscraft · 2026

## Quick Start

```bash
npm install
npm run dev       # → http://localhost:3000
```

## Build for Production

```bash
npm run build     # → outputs to /dist
npm run preview   # → preview production build locally
```

## Project Structure

```
├── index.html                 ← Homepage (entry)
├── pages/                     ← All page templates
│   ├── catalog/               ← Category, subcategory, search
│   ├── product/               ← Product detail (PDP)
│   ├── cart/                  ← Cart page
│   ├── checkout/              ← Checkout + confirmation
│   ├── content/               ← Blog, guides
│   ├── static/                ← About, contact, FAQ, policies
│   ├── account/               ← Dashboard, orders, wishlist, settings
│   └── auth/                  ← Login, signup, forgot password
├── components/                ← Reusable HTML partials
├── layouts/                   ← Page wrapper layouts
├── assets/
│   ├── css/                   ← Modular CSS design system
│   ├── js/                    ← Feature-isolated JavaScript
│   ├── images/                ← Image assets (served via Vite publicDir)
│   └── fonts/                 ← Self-hosted fonts
└── data/                      ← Mock JSON data
```

## Design System

Design tokens are defined in `assets/css/tokens.css`. Swap brand values per client:

- `--brand-primary` — Primary brand color
- `--brand-accent` — Accent / CTA color
- `--font-display` — Display / heading font
- `--font-body` — Body text font

## Reference Files

- `ecommerce-base-template.html` — Original single-file UI reference (all sections)
- `ecommerce-ux-ia-strategy.md` — Full IA strategy & UX blueprint

## Tech Stack

- **Dev Server:** Vite 6
- **Styling:** Vanilla CSS (modular, token-based)
- **JS:** Vanilla ES modules
- **No frameworks** — pure HTML/CSS/JS for maximum portability

---

*Mindscraft · mindscraft.dev · 2026*
