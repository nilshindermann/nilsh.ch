# Project Context

When working with this codebase, prioritize readability over cleverness. Ask clarifying questions before making architectural changes.

## About This Project

This is the personal website of Nils Hindermann.

## Key Directories

| Path          | Purpose                              |
|---------------|--------------------------------------|
| `/app`        | Next.js App Router pages and layouts |
| `/components` | UI components                        |
| `/data`       | Static data for pages                |
| `/models`     | TypeScript types/interfaces          |
| `/lib`        | Utilities (Date logic, etc.)         |
| `/public`     | Static files and pages               |


## Architecture

**Next.js 15 / React 19 app (App Router)** for discovering the personal life of Nils Hindermann.  
The style is applied via prettier & ESLint

### UI

- **daisyUI** (forest style) + **Tailwind CSS v4** with CSS variables for theming.
- Dark mode is set via daisyUI's default `forest` theme (no `next-themes` or provider layer in place).
- Path alias: `@/` maps to the repository root.
- Route groups `app/(default)` and `app/(special)` organize pages; `app/robots.ts` and `app/sitemap.ts` handle SEO.

### Deployment

- Deployed to **Cloudflare** via **OpenNext** (`@opennextjs/cloudflare`) and **Wrangler**.
- Config: `open-next.config.ts`, `wrangler.toml`.
- Scripts: `cf-build`, `cf-preview`, `cf-deploy`, `cf-deploy-preview`, `cf-typegen`.

## Common Commands
```bash
npm run dev              # Start Next.js dev server
npm run lint             # ESLint with auto-fix
npm run prettier-write   # Format all files
npm run cf-build         # Build for Cloudflare via OpenNext
npm run cf-deploy        # Deploy to Cloudflare
```
