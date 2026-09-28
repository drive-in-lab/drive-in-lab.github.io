# Drive-In Lab

A static website for Drive-In Lab at the University of Jyväskylä. The site
uses JYU's primary blue, typography, logo, and editorial layout conventions.

## Stack

- **React + Vite** — pages and layout
- **react-router-dom** (hash routing) — client-side navigation that works as
  plain static files with no server rewrite rules
- **GitHub Actions** — builds and deploys to GitHub Pages on every push to
  `main`

## Getting started

```
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Editing content

See [CONTENT.md](./CONTENT.md) — no React knowledge required for routine
updates.

## Project structure

```
src/
  components/
    layout/   Navbar, Footer, page shell, route-loading indicator
    ui/       Reusable page pieces (PageHero, SectionHeading)
  content/    Editable data: team.js, research.js, projects.js, facilities.js
  pages/      One file per route
```

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, under **Pages**, set the source to **GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and publishes the site automatically.

The build uses a relative base path and hash-based routing, so it works
regardless of whether the repo is a user/org site or a project site.
