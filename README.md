# Daivik S Gokhale — Portfolio

Production Next.js recreation of the design handoff (`Portfolio.html` / `Blog.html`), configured for static export to GitHub Pages.

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules — no UI framework/Tailwind, matching the hand-tuned `clamp()`-based spec
- `next/font/google` for Archivo Black, Space Grotesk, IBM Plex Mono
- No backend — contact is a `mailto:` link, blog content is a placeholder page pending MDX

## Project structure

```
app/
  layout.tsx         fonts + metadata
  page.tsx            home page (Hero, Projects, Experience, Skills, Contact)
  blog/page.tsx        blog listing — NOT linked from nav, visit directly at /blog
components/           Hero, ProjectRow, ExperienceRow, SkillsGrid, ContactSection,
                       StickyNav, SpecRail, Section (shared grid+reveal shell), Button
hooks/
  useScrollReveal.ts   IntersectionObserver-based reveal-on-scroll
  useStickyNav.ts       scroll-position-driven nav visibility + active section
lib/data.ts            all copy/content (projects, experience, skills, links)
public/resume_mesa.pdf  resume asset, linked with `download` from the RESUME button
```

## Local development

```bash
npm install
npm run dev
```

## Static export

```bash
npm run build
```

Output goes to `out/`. `next.config.js` sets `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` for static hosting.

### basePath

`next.config.js` auto-detects the GitHub Pages base path **only inside GitHub Actions** (via the `GITHUB_REPOSITORY` env var Actions provides automatically):

- Repo named `<username>.github.io` (a user/org page) → served at the domain root, no base path.
- Any other repo name (a project page) → served at `/<repo-name>/`, base path set automatically.

Locally (`npm run dev` / manual `npm run build`), no base path is applied, so the site always runs at `/`. You don't need to edit this file — just push and let the workflow build it.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository (any name works — see basePath note above).
2. In the repo: **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. (Do this once; you do *not* need to pick a branch/folder — the workflow handles building and publishing.)
3. Push to `main` (or run the workflow manually from the **Actions** tab — it also supports `workflow_dispatch`). The included `.github/workflows/deploy.yml` will:
   - install deps, run `npm run build` (static export to `out/`)
   - upload `out/` as the Pages artifact
   - deploy it to GitHub Pages
4. Your site will be live at:
   - `https://<username>.github.io/` if the repo is named `<username>.github.io`
   - `https://<username>.github.io/<repo-name>/` otherwise

No other settings are required — no custom domain, no manual `gh-pages` branch, nothing to configure in `next.config.js`.

## Blog

`/blog` is built and exported but intentionally **not** linked from `StickyNav`. Reach it via direct URL until you're ready to wire it into the nav. Blog content itself will be added later as MDX files — the listing page currently only renders placeholder cards.
