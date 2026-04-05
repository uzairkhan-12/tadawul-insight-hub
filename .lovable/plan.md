

# Plan: Add STG Products Tab with Data from Word Document

## What We're Building

A new "Products" tab alongside the existing "Competitor Landscape" tab, structured as a multi-level drill-down dashboard using the 17 non-trading products from the uploaded Word document, organized by 3 subsidiaries (Saudi Exchange, Edaa, Wamid).

## Data Extracted

**17 products across 3 subsidiaries:**

- **Saudi Exchange (5):** Non-Display License, Index Weightages Report, Web Ticker License, Sukuk & Bonds Listing, REITs Listing
- **Edaa (5):** Employees Compliance, Equity Registry (Unlisted), Paying Agent, EdaaConnect, Tawasul
- **Wamid (7):** Liqaa, Corporate Actions & Events, Investor Profile Activity Report, Company Fundamentals, Historical Order Book, Issuer Pack, Buy-Side Pack

**Final Call ratings:** Not Required (6), Keep an Eye (10), Need an Action (1 - Company Fundamentals)

## Architecture

### 1. Tab Navigation (Header level)
- Add tabs to the main Index page: "Competitor Landscape" (existing) and "Products Review"
- Use Radix Tabs component already in the project

### 2. Landing Page (Products tab default view)
- Summary section with context, objectives, and scope from the document
- Quick snapshot: 17 products, 3 subsidiaries, RAG distribution (pie/bar)
- Key opportunities callout (the 1 "Need an Action" + 10 "Keep an Eye" items)
- Subsidiary cards (Saudi Exchange, Edaa, Wamid) -- clickable
- Product grid (17 clickable cards showing product name, subsidiary, and Final Call badge)

### 3. Subsidiary Page (click a subsidiary card)
- Subsidiary overview with team info
- List of products under that subsidiary as clickable cards

### 4. Product Detail Page (click a product)
- Full template with all fields from the document:
  - Product name, subsidiary, related team
  - Product description and key features
  - Competitors (direct & indirect)
  - Main competition component
  - Summary analysis
  - Final Call (RAG badge: green=Not Required, amber=Keep an Eye, red=Need an Action)

## Technical Approach

### New Files
1. **`src/data/productsData.ts`** -- All 17 products as structured data objects
2. **`src/components/products/ProductsLanding.tsx`** -- Landing page with summary + grids
3. **`src/components/products/SubsidiaryView.tsx`** -- Subsidiary detail with product list
4. **`src/components/products/ProductDetail.tsx`** -- Full product template
5. **`src/components/products/ProductCard.tsx`** -- Reusable clickable product card
6. **`src/components/products/SubsidiaryCard.tsx`** -- Clickable subsidiary card

### Modified Files
1. **`src/pages/Index.tsx`** -- Add tab navigation wrapping existing dashboard + new Products tab
2. **`src/components/dashboard/Header.tsx`** -- Minor subtitle update if needed

### Navigation
- Uses internal state (not React Router) to handle: Landing > Subsidiary > Product drill-down
- Breadcrumb navigation for back-tracking
- All within the Products tab context

### RAG Badge Colors
- **Not Required** (green) -- no action needed
- **Keep an Eye** (amber) -- monitor
- **Need an Action** (red) -- requires action

