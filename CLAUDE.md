# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EasyNet organization homepage — a static single-page site showcasing open-source projects (Batata, eNote). Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build` (runs `vue-tsc --noEmit && vite build`, output in `dist/`)
- **Preview production build:** `pnpm preview`
- **Install dependencies:** `pnpm install`

## Architecture

Vue 3 + TypeScript + Vite SPA with Tailwind CSS v4 (via `@tailwindcss/vite` plugin). No router — single page with anchor navigation.

- `src/main.ts` — app entry, mounts root component
- `src/App.vue` — entire page layout (nav, hero, stats, projects, tech stack, footer)
- `src/components/ProjectCard.vue` — project showcase card; fetches latest commits from GitHub API at mount time
- `src/style.css` — only imports Tailwind (`@import "tailwindcss"`)
- `index.html` — SPA shell
- `public/` — static assets (favicon, logos)

Icons come from `lucide-vue-next`. All styling uses Tailwind utility classes. Path alias `@/*` maps to `src/*`.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. Uses pnpm with Node 22.
