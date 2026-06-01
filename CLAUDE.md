# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Shahen (شاحن) is a static marketing/onboarding website for an Arabic logistics
platform, built with **Next.js 14 (App Router) + Tailwind CSS** and rendered
**right-to-left (RTL) in Arabic**. All UI copy is in Arabic. The site is purely
presentational — pages render static markup and form inputs are not yet wired to
any backend or submit handlers.

## Commands

```bash
npm i            # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (next build)
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite in this repo.

## Architecture & conventions

- **App Router only.** Pages live in `app/<route>/page.tsx`. Routes mirror the
  directory structure: `/login`, `/verify`, `/success`, `/signup/company`,
  `/signup/establishment`, `/providers`, `/privacy`, `/terms`, `/refund`, and `/`
  (home). To add a page, create `app/<route>/page.tsx` exporting a default
  component.
- **Shared layout** is `app/layout.tsx`: it sets `<html lang="ar" dir="rtl">`,
  imports `./globals.css`, and wraps every page with `<Header/>` … `<main className="container py-8">{children}</main>` … `<Footer/>`. Page components
  should render only the page body — header/footer come from the layout.
- **Components** live in `components/` (just `Header.tsx` and `Footer.tsx`).
  `Header` is a client component (`'use client'`) because of its mobile menu
  `useState`; most pages are server components with no client directive.
- **Path alias:** `@/` maps to the repo root (e.g. `@/components/Header`).
- **Styling is utility-first Tailwind** plus a few shared component classes
  defined with `@apply` in `app/globals.css`: `.container`, `.btn`,
  `.btn-primary`, `.btn-outline`, `.card`. Reuse these instead of re-creating
  button/card styles.
- **Brand colors** are defined in `tailwind.config.js` under `theme.extend.colors.brand`
  (`brand` = `#E5662D` orange, `brand-dark` = `#0C1E3A` navy, `brand-light` =
  `#F7F7F8`). Use `bg-brand`, `text-brand`, `bg-brand-dark`, etc. Change the hex
  values there to re-skin the whole site.
- **Images are unoptimized** (`next.config.js` sets `images.unoptimized: true`),
  so static export / any host works. Store assets (logo, app-store badges) live
  in `public/` as SVGs. `Header` uses `next/image`; `Footer` uses plain `<img>`.
- **TypeScript is loose** here: `tsconfig.json` has `strict: false`. Match the
  existing terse style of the page components (default export named `Page`, no
  prop types where none are needed).

## Important repo-specific gotchas

- **Duplicate nested project.** The directory `shahen-website-nextjs/` is a stale,
  near-identical copy of the entire project (same `package.json`, `README.md`,
  `app/`, `components/`, etc.). The **active project is the repository root** — make
  all changes there. Do not edit the nested copy unless explicitly asked; ideally
  it should be deleted to avoid confusion.
- **Two copies of the global stylesheet.** `app/globals.css` is the one actually
  imported by `app/layout.tsx`. `styles/globals.css` is an unused duplicate with
  identical content — edit `app/globals.css` and keep `styles/globals.css` in sync
  (or remove it) to avoid drift.
- **Forms are non-functional.** Inputs/buttons on `/login`, `/verify`, `/signup/*`
  etc. have no handlers or backend. Wiring them up is net-new work, not a fix to
  existing behavior.

## Deployment

Designed for zero-config deploy on **Vercel** (connect repo → Deploy). On
**Netlify**, build with `next build` and run with `next start`. See `README.md`
(Arabic) for details on customizing brand colors and replacing store-badge links.
