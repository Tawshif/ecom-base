# Ecommerce UX & Information Architecture Strategy
### A Universal Design System for Any Vertical · Mindscraft · May 2026

> **How to use this document:** This is a living strategy brief. Every section maps directly to a design decision, a development task, or a business constraint. Designed to be readable by humans, parseable by AI, and executable by any design/dev team.

---

## 01. Executive Summary

Modern ecommerce in 2026 is won or lost in three places: the first 5 seconds (trust + clarity), the product page (decision moment), and checkout (friction elimination). Mobile now accounts for 60–65% of all ecommerce traffic and sales. AI personalization, AR previews, and agentic commerce are no longer differentiators — they are table stakes for competitive stores. The average cart abandonment rate sits at 65–70%. A 1-second load time delay reduces conversion by 7%.

This strategy document defines the universal information architecture, UX principles, page hierarchy, component system, and content strategy for an ecommerce platform template that works across verticals: fashion, electronics, furniture, beauty, food, services, and B2B.

---

## 02. Core Design Principles (Non-Negotiable)

| # | Principle | Why It Matters |
|---|-----------|----------------|
| 1 | **Mobile-First, Always** | 60%+ of sales happen on mobile. Design for 390px first. |
| 2 | **Speed is a Feature** | Sub-3s load time is the baseline. Every ms counts. |
| 3 | **Clarity Over Cleverness** | The value prop must be clear in the first 5 seconds. |
| 4 | **Trust Before Transaction** | Security signals, social proof, and reviews convert. |
| 5 | **Zero Forced Friction** | Guest checkout is non-negotiable. No forced registration. |
| 6 | **Progressive Disclosure** | Show what's needed. Reveal complexity only when requested. |
| 7 | **AI-Readable Structure** | Clean semantic HTML, schema markup, structured data for AI discovery. |
| 8 | **Accessibility (WCAG 2.1 AA)** | EU Accessibility Act enforceable since June 2025. Non-compliance = fines. |

---

## 03. Information Architecture (IA) Map

### 3.1 Global Site Structure

```
ECOMMERCE PLATFORM
│
├── [PUBLIC ZONE] — No login required
│   ├── HOME
│   │   ├── Hero / Value Proposition
│   │   ├── Featured Collections / Categories
│   │   ├── Trending / Bestsellers
│   │   ├── Social Proof Strip (ratings, reviews count, press)
│   │   ├── Promotional Banner / Offers
│   │   ├── Brand Story / Trust Block
│   │   └── Newsletter / Community CTA
│   │
│   ├── CATALOG
│   │   ├── Category Landing Page
│   │   │   ├── Category Hero
│   │   │   ├── Filter & Sort Panel (sidebar/drawer)
│   │   │   ├── Product Grid (4-col desktop / 2-col mobile)
│   │   │   ├── Pagination / Infinite Scroll Toggle
│   │   │   └── Recently Viewed
│   │   │
│   │   ├── Sub-Category Page (same structure)
│   │   │
│   │   └── Search Results Page
│   │       ├── Search Bar (persistent, prominent)
│   │       ├── Filter Panel
│   │       ├── Product Grid
│   │       └── "No Results" State with Recommendations
│   │
│   ├── PRODUCT DETAIL PAGE (PDP)
│   │   ├── Breadcrumb
│   │   ├── Media Gallery (images, video, 360°, AR viewer)
│   │   ├── Product Identity Block
│   │   │   ├── Brand / SKU
│   │   │   ├── Title (H1)
│   │   │   ├── Rating Summary + Review Count (anchor link)
│   │   │   ├── Price (sale, original, savings %)
│   │   │   └── Stock Status
│   │   ├── Variant Selector (color / size / style)
│   │   ├── Quantity Selector
│   │   ├── Primary CTA: Add to Cart
│   │   ├── Secondary CTA: Add to Wishlist / Save
│   │   ├── Tertiary CTA: Buy Now (express checkout)
│   │   ├── Trust Signals (free shipping threshold, returns, secure payment)
│   │   ├── Product Description (expandable)
│   │   ├── Specifications / Details (accordion)
│   │   ├── Shipping & Returns (accordion)
│   │   ├── Reviews & Q&A Section
│   │   └── Related / Recommended Products
│   │
│   ├── CART
│   │   ├── Cart Drawer (slide-in, persistent)
│   │   └── Cart Page (full)
│   │       ├── Item List with Edit/Remove
│   │       ├── Upsell / Cross-sell Block
│   │       ├── Promo Code Field
│   │       ├── Order Summary
│   │       └── Proceed to Checkout CTA
│   │
│   ├── CHECKOUT (Funnel — minimize page count)
│   │   ├── Step 1: Contact + Delivery
│   │   │   ├── Email / Phone
│   │   │   ├── Shipping Address (autofill-ready)
│   │   │   └── Delivery Method Selection
│   │   ├── Step 2: Payment
│   │   │   ├── Card / Digital Wallet / BNPL
│   │   │   ├── Billing Address (toggle: same as shipping)
│   │   │   └── Order Summary (sticky on desktop)
│   │   └── Step 3: Confirmation
│   │       ├── Order Number
│   │       ├── Estimated Delivery
│   │       ├── Email Confirmation Message
│   │       └── Account Creation Prompt (optional, post-purchase)
│   │
│   ├── CONTENT HUB
│   │   ├── Blog / Editorial
│   │   ├── Buying Guides
│   │   ├── How-It-Works
│   │   └── Brand Story / About
│   │
│   └── STATIC PAGES
│       ├── About Us
│       ├── Contact
│       ├── FAQ
│       ├── Shipping Policy
│       ├── Return & Refund Policy
│       ├── Privacy Policy
│       └── Terms of Service
│
└── [AUTHENTICATED ZONE] — Login required
    ├── ACCOUNT DASHBOARD
    │   ├── Order History + Tracking
    │   ├── Wishlist / Saved Items
    │   ├── Address Book
    │   ├── Payment Methods
    │   ├── Profile Settings
    │   ├── Notifications Preferences
    │   └── Loyalty / Points (if applicable)
    │
    └── AUTH FLOWS
        ├── Sign Up
        ├── Login (email, social, magic link)
        ├── Forgot Password
        └── OTP / 2FA
```

---

### 3.2 Navigation Architecture

#### Global Header (Desktop)
```
[Logo]  [Primary Nav: Categories]  [Search Bar]  [Account]  [Wishlist]  [Cart (count)]
```

#### Global Header (Mobile)
```
[Hamburger]  [Logo]  [Search Icon]  [Cart (count)]
→ Bottom Nav Bar: Home | Explore | Search | Wishlist | Account
```

#### Mega Menu Structure (Category Nav)
```
Category Label
├── Featured Image/Banner (promotional)
├── Sub-categories (2–3 columns)
├── Trending / New Arrivals
└── Quick Links (Sale, Bestsellers, New)
```

#### Footer Structure
```
Column 1: Brand (logo, tagline, social links)
Column 2: Shop (category quick links)
Column 3: Help (FAQ, returns, contact, track order)
Column 4: Company (about, blog, careers, press)
Bottom Bar: Payment icons | Security badges | Legal links | Language/Currency switcher
```

---

## 04. Page-Level UX Blueprints

### 4.1 Homepage

**Purpose:** Convert cold traffic. Communicate value in 5 seconds.

**Above the Fold (non-negotiable):**
- Hero with clear value proposition (not just "Shop Now")
- Primary CTA visible without scrolling
- Brand credibility signal (e.g., "10,000+ happy customers" or press logos)

**Conversion Sequence (scroll order):**
1. Hero → Primary CTA
2. Category navigation / quick shop tiles
3. Social proof strip (star ratings, review count, customer photos)
4. Featured / bestselling products
5. Trust block (free shipping, returns, secure checkout)
6. Brand story / differentiator (2–3 sentences max)
7. Email capture / loyalty program
8. Footer

---

### 4.2 Category / Listing Page (PLP)

**Filter System (critical for UX):**
- Persistent sidebar on desktop
- Bottom drawer on mobile (thumb-accessible)
- Filters: Price range, Brand, Size, Color, Rating, Availability, New/Sale
- Active filter pills visible above the grid
- Filter count badge on mobile toggle

**Sort Options:** Relevance, Newest, Price Low–High, Price High–Low, Best Rated, Bestselling

**Product Card Components:**
- Product image (hover = secondary image on desktop)
- Brand name (if multi-brand)
- Product title (2 lines max)
- Star rating + review count
- Price (sale price prominent, original struck through)
- Quick-add to cart (hover/tap reveal)
- Wishlist icon (top-right of card)
- Badge system: NEW, SALE, LOW STOCK, BESTSELLER

---

### 4.3 Product Detail Page (PDP)

**The Money Page. Highest UX investment.**

**Media Section:**
- Primary image hero (zoomable)
- Thumbnail strip (images + video + 360°)
- Sticky on desktop during scroll
- Fullscreen gallery on mobile swipe

**Conversion Block (above fold on desktop):**
- Title, rating, price — all visible
- Variant selectors (visual swatches for color, text/button for size)
- Size guide link (opens modal, not new page)
- Add to Cart button (full width on mobile)
- "Only X left" urgency signal (when genuinely low stock)
- Free shipping threshold indicator ("Add $12 more for free shipping")

**Trust & Reassurance (below Add to Cart):**
- 30-day returns badge
- Secure payment icons
- Estimated delivery range
- "Ships from [location]" (for international stores)

**Content Tabs / Accordions:**
- Description
- Specifications
- Shipping & Returns
- Reviews (with filters: Most Recent, Most Helpful, By Star Rating)

---

### 4.4 Cart

**Cart Drawer (preferred for non-mobile):**
- Slides in from right, overlay background
- Item image, title, variant, quantity stepper, price, remove
- Upsell: "You might also like" (1–2 items max, non-intrusive)
- Promo code field (collapsed by default, click to expand)
- Subtotal (excl. shipping + tax — be transparent)
- "Proceed to Checkout" CTA (full width, prominent)

**Cart Page (for users who want full view):**
- Same as drawer but full page layout
- Cross-sell block
- Trust reminder strip

---

### 4.5 Checkout

**Rule: Every additional field = lost revenue.**

**Accepted Best Practices 2026:**
- Single-page or 2-step checkout (not 5 steps)
- Guest checkout as the default option
- Social login option (Google, Apple)
- Address autocomplete (Google Places API)
- Express checkout row: Apple Pay | Google Pay | Shop Pay (above the form)
- Order summary sticky on desktop right column
- Real-time form validation (not on-submit errors)
- Clear error states with fix suggestions
- Progress indicator (Step 1 of 2, or breadcrumb)
- No distractions: remove header nav, minimal footer

---

## 05. Component Design System

### 5.1 Design Tokens

```css
/* Colors — adapt per brand */
--color-primary: [brand-specific]
--color-primary-dark: [brand-specific]
--color-accent: [brand-specific]
--color-bg: #FFFFFF
--color-bg-subtle: #F7F7F7
--color-text-primary: #111111
--color-text-secondary: #666666
--color-text-muted: #999999
--color-border: #E5E5E5
--color-success: #22C55E
--color-warning: #F59E0B
--color-error: #EF4444
--color-overlay: rgba(0,0,0,0.5)

/* Typography */
--font-display: [brand heading font] — bold, distinctive
--font-body: [brand body font] — legible at small sizes
--font-mono: [for SKUs, prices, codes]

/* Spacing Scale (8pt grid) */
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px

/* Radii */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 16px
--radius-xl: 24px
--radius-pill: 999px

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08)
--shadow-md: 0 4px 12px rgba(0,0,0,0.10)
--shadow-lg: 0 8px 32px rgba(0,0,0,0.12)
--shadow-xl: 0 16px 48px rgba(0,0,0,0.16)

/* Motion */
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 400ms ease
```

### 5.2 Core Component Library

| Component | Variants | Notes |
|-----------|----------|-------|
| Button | Primary, Secondary, Ghost, Destructive, Icon | Min 44×44px tap target |
| Product Card | Standard, Compact, Featured, Horizontal | Responsive across breakpoints |
| Badge | NEW, SALE, HOT, LOW STOCK, SOLD OUT | Color-coded system |
| Rating Stars | Display, Interactive, Compact | Accessible |
| Price Display | Regular, Sale (struck through), Bundle | Clear visual hierarchy |
| Input Field | Text, Email, Phone, Password, Search | With validation states |
| Form Error | Inline, Toast, Banner | Consistent messaging |
| Modal | Centered, Drawer (L/R/Bottom) | Focus trap, escape to close |
| Skeleton Loader | Card, Text, Image | Prevent layout shift |
| Toast / Notification | Success, Error, Info, Warning | Auto-dismiss 4s |
| Breadcrumb | Standard, Compact | Schema.org markup |
| Pagination | Numbered, Load More, Infinite Scroll | Config toggle |
| Accordion | Single-open, Multi-open | For PDP specs/FAQs |
| Tabs | Underline, Pill, Card | For PDP content sections |
| Tooltip | Hover, Click | For info icons |
| Progress | Bar, Step indicator | Checkout, loading |

---

## 06. Mobile UX Specifics

**Thumb Zones (critical layout constraint):**
- Primary CTAs (Add to Cart, Checkout): bottom 70% of screen
- Navigation: bottom bar preferred over hamburger-only
- Minimum tap target: 44×44px (Apple HIG / WCAG)
- Text minimum size: 16px (no zoom-triggering on iOS)
- Spacing between tappable elements: 8px minimum

**Mobile-Specific Patterns:**
- Sticky bottom Add-to-Cart bar on PDP
- Swipeable image gallery (native feel)
- Filter drawer from bottom (not sidebar)
- Pull-to-refresh on catalog pages
- Sticky checkout summary bar with total
- One-thumb checkout flow from cart to confirmation
- Save progress: auto-save cart, return to checkout

**Performance Targets (Mobile):**
- LCP (Largest Contentful Paint): < 2.5s
- FID / INP: < 200ms
- CLS: < 0.1
- Total page weight homepage: < 1MB (compressed)
- Total page weight PDP: < 1.5MB

---

## 07. Trust Architecture

**Trust is the #1 conversion lever. It must be woven throughout — not just on a "trust badges" section.**

### Trust Signals by Page

| Page | Trust Elements |
|------|---------------|
| Homepage | Press logos, review aggregate, customer count, security badges in footer |
| PLP | Review stars on cards, "X sold this week" social proof |
| PDP | Full review section, return policy, payment icons, secure checkout badge, real delivery estimates |
| Cart | Payment icons, "Checkout is SSL-secured", easy returns reminder |
| Checkout | SSL padlock visible, PCI compliance badge, trusted payment logos, clear return policy link |
| Post-purchase | Order confirmation email within 2 min, order tracking link, support contact |

### Review System Requirements
- Aggregate star rating (schema.org/Review for SEO)
- Filter by: Most Recent, Most Helpful, Star Rating
- Verified purchase badge
- Photo reviews (highest trust signal)
- Merchant response capability
- Review count displayed (not hidden if low — honesty builds trust)

---

## 08. SEO & AI-Discovery Architecture

**In 2026, AI platforms (Gemini, ChatGPT, Perplexity) are product recommendation engines. Your structure must be AI-readable.**

### Technical SEO
- Semantic HTML5 structure (header, nav, main, article, aside, footer)
- Schema.org structured data: Product, BreadcrumbList, Review, Organization, FAQPage
- Canonical tags on all variant/filter URLs
- Sitemap: products, categories, blog posts
- hreflang for multi-language stores
- Open Graph + Twitter Card meta for social sharing

### URL Architecture
```
/                           → Homepage
/[category]/               → Category page
/[category]/[subcategory]/ → Sub-category
/products/[product-slug]/  → Product detail
/cart/                     → Cart
/checkout/                 → Checkout
/account/                  → Account dashboard
/pages/[page-slug]/        → Static pages
/blog/[post-slug]/         → Blog posts
/search?q=[query]          → Search results
```

### Content Strategy for SEO + AI
- Every category page needs a 150–250 word description
- Every product needs unique, benefit-led description (not specs-only)
- FAQ schema on PDP (common questions)
- Buying guides in blog = long-tail SEO + AI citation targets
- Internal linking: every PDP links to category + 3 related products

---

## 09. Personalization Framework

**Progressive personalization: start with zero data, improve with every interaction.**

### Tier 1 (Anonymous — zero data)
- Bestsellers as default sort
- Geographic defaults (currency, language, local shipping)
- Device-appropriate layout (mobile vs desktop)

### Tier 2 (Behavioral — session data)
- Recently viewed products (persistent via localStorage)
- Category affinity → prioritize in homepage
- Cart-based recommendations ("Frequently bought together")
- Browse abandonment prompt (sticky banner, not popup)

### Tier 3 (Identified — account data)
- Personalized homepage (preferred categories front)
- Reorder suggestions
- Size/preference memory
- Loyalty-aware pricing
- Wishlist-based "Back in Stock" / "Price Drop" alerts

---

## 10. Vertical Adaptation Guide

**This IA works for any vertical with these configuration switches:**

| Vertical | Key Modifications |
|----------|------------------|
| **Fashion** | Size guide modal, color swatch priority, outfit builder, fit notes |
| **Electronics** | Spec comparison table, warranty info prominent, compatibility checker |
| **Furniture / Home** | Room visualizer / AR, dimension callouts, swatches, lead time display |
| **Beauty / Skincare** | Ingredient highlights, skin type filter, before/after photos, routine builder |
| **Food / Grocery** | Subscription toggle, nutritional info, allergen filter, freshness badge |
| **B2B / Wholesale** | Bulk pricing tiers, quote request, account credit, CSV order upload |
| **Services / Digital** | No cart/shipping, booking calendar, license options, download delivery |

---

## 11. Analytics & KPI Framework

### Core Conversion Metrics
- Conversion Rate (CVR): target 2–4% (industry avg 1.65%)
- Add-to-Cart Rate: target > 8%
- Cart Abandonment Rate: target < 65%
- Checkout Completion Rate: target > 55%
- Average Order Value (AOV): track with upsell impact

### UX Health Metrics
- LCP / INP / CLS (Core Web Vitals)
- Bounce Rate by page type
- Time on PDP
- Search usage rate (if > 30%, invest in better navigation)
- Mobile vs desktop CVR gap (should be < 50% difference)

### Experimentation Roadmap
- Month 1–3: Baseline all metrics. Heatmaps on PDP and checkout.
- Month 3–6: A/B test CTA copy, hero messaging, checkout flow.
- Month 6+: Personalization A/B, recommendation engine, loyalty program.

---

## 12. Technology Stack Recommendations

### Frontend
- **React / Next.js** — SSR + ISR for performance + SEO
- **Tailwind CSS** — rapid styling with design tokens
- **Framer Motion** — animations
- **Radix UI / shadcn** — accessible component primitives

### Ecommerce Platforms (by scale)
| Scale | Platform |
|-------|----------|
| Startup–SMB | Shopify (fastest to market) |
| Mid-market | WooCommerce (flexibility) or Shopify Plus |
| Enterprise | Commercetools, Medusa.js, or custom headless |

### Key Integrations
- **Search:** Algolia or Elasticsearch (20–35% conversion lift)
- **Reviews:** Yotpo, Stamped, or Judge.me
- **Payments:** Stripe, PayPal, Apple/Google Pay, Tabby/Tamara (BNPL)
- **Email/SMS:** Klaviyo
- **Analytics:** GA4 + Hotjar/Microsoft Clarity
- **CDN:** Cloudflare or Fastly
- **AI Personalization:** Nosto, Dynamic Yield, or custom

---

## 13. Accessibility Checklist (WCAG 2.1 AA)

- [ ] All images have descriptive alt text
- [ ] Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] All interactive elements keyboard navigable (Tab order logical)
- [ ] Focus states visible (not removed)
- [ ] Modals have focus trap + Escape to close
- [ ] Forms have associated labels (not just placeholder text)
- [ ] Error messages are descriptive and linked to the field
- [ ] Videos have captions
- [ ] No content conveyed by color alone
- [ ] Touch targets ≥ 44×44px
- [ ] Skip to main content link
- [ ] ARIA roles on dynamic components (cart, modals, tabs)

---

## 14. Design Handoff Spec

### File Organization (Figma)
```
📁 00_Foundations
   ├── Colors, Typography, Spacing, Shadows, Icons
📁 01_Components
   ├── Atoms (Button, Input, Badge, etc.)
   ├── Molecules (Product Card, Form Group, etc.)
   └── Organisms (Header, Footer, PDP Block, etc.)
📁 02_Pages
   ├── Homepage
   ├── Category Page
   ├── Product Detail Page
   ├── Cart + Checkout
   └── Account
📁 03_Flows
   ├── Guest Purchase Flow
   ├── Account Purchase Flow
   └── Return Flow
📁 04_Mobile
   └── [All pages at 390px]
📁 05_States
   └── Empty, Error, Loading, Success states for all pages
```

---

## 15. Implementation Priority Matrix

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| P0 | Mobile-first responsive layout | Very High | Medium |
| P0 | Fast-loading PDP (< 2.5s LCP) | Very High | High |
| P0 | Guest checkout | Very High | Low |
| P1 | Search with autocomplete | High | Medium |
| P1 | Filter/sort on PLP | High | Medium |
| P1 | Review system with schema | High | Medium |
| P2 | Recently viewed, recommendations | Medium | Medium |
| P2 | Wishlist | Medium | Low |
| P2 | Express checkout (Apple/Google Pay) | High | Low |
| P3 | AR product viewer | Medium | High |
| P3 | Loyalty program | Medium | High |
| P3 | AI personalization engine | High | Very High |

---

*Document authored by Mindscraft · mindscraft.dev · Version 1.0 · May 2026*
*Strategy partner: Claude (Anthropic) · Research grounded in 2026 industry data*
