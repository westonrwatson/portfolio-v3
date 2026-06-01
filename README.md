# CodeMoldova portfolio template

A minimal portfolio hub inspired by [Lars Tornøe](https://www.larstornoe.com/) — built with **Next.js**, **React**, and **Tailwind CSS**.

This repo links to your **project sites** (each in its own GitHub repo). It does not contain those projects.

## Setup

1. Create a GitHub repo, e.g. `yourname-portfolio`.
2. Clone or copy this folder into that repo.
3. Install and run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push to GitHub.
2. Import the repo on [Vercel](https://vercel.com) — framework preset **Next.js**.
3. Deploy. No extra settings needed.

## Customize

| File | What to change |
|------|----------------|
| [`data/site.ts`](data/site.ts) | Your name, work subtitle, about bio, contact links |
| [`data/projects.ts`](data/projects.ts) | Project cards — title, URLs, thumbnail, background color |
| [`public/`](public/) | Screenshots (e.g. `public/projects/cafe.jpg`) |

### After each Week 4 session

Update the matching entry in `data/projects.ts`:

| Session | Entry |
|---------|--------|
| Monday | First project (`monday-site`) |
| Wednesday | Second project (`wednesday-v2`) |
| Thursday | Third project (`thursday-site`) |

Each field:

- `liveUrl` — Vercel HTTPS URL for that project
- `repoUrl` — GitHub repo for that project (not this portfolio repo)
- `thumbnail` — path under `public/`, e.g. `/projects/monday.jpg` (use **1920×1080** screenshots for best fit)
- `bgColor` — hex color behind the image (like Lars Tornøe tiles)

Cards without a `liveUrl` stay dimmed and are not clickable.

## Live preview (iframe)

Clicking a card opens an embedded preview. Some sites block iframes. If the preview is blank:

1. Use **Open live site**.
2. Add a screenshot in `public/` and set `thumbnail`.

## Tech stack

- Next.js App Router
- React 19
- Tailwind CSS 3
