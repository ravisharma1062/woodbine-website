# Woodbine Preparatory School Website

Next.js + Tailwind CSS, in English and Hindi (/en and /hi).

## Run on your computer
```
npm install
npm run dev      # open http://localhost:3000
npm run build    # creates the static site in the `out/` folder
```

## Where to change things (no coding skills needed)
| What | File |
|---|---|
| Phone, WhatsApp, email, address, numbers | `src/content/site.ts` |
| Notices, photo albums, videos | the admin screen (see `studio/README.md`), no code needed |
| Page text (English / Hindi) | `messages/en.json`, `messages/hi.json` |
| Logo | replace `public/logo.svg` and `src/app/icon.svg` |
| Colours | `src/app/globals.css` (`--color-brand-*`, `--color-gold-*`) |

## Admin screen (Sanity)
Notices, photo albums and videos are managed in a separate admin screen, built with Sanity (the `studio/` folder).
Setup steps and the daily-use guide are in `studio/README.md`.
Until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, the website shows the sample content in `src/content/`.

## Deploy on Cloudflare Pages
The site is built as plain static files (`out/` folder), hosted free on Cloudflare Pages.

1. Push this project to GitHub (already done: `ravisharma1062/woodbine-website`).
2. Cloudflare dashboard > Workers & Pages > Create > **Pages** > Connect to Git > pick the repo.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version is read from `.node-version` (22)
4. Save and Deploy. The site opens at `https://<project-name>.pages.dev`.
5. Custom domain: the Pages project > Custom domains > Set up a domain.
6. Auto-update when the school publishes in Sanity: see "Auto-update" in `studio/README.md`.

Notes
- `.env.production` holds the public settings (`STATIC_EXPORT`, Sanity project ID). There are no secrets in it.
- `npm run dev` still works normally on your computer.
- `_to_delete/proxy.ts` is the old language redirect. It cannot run on a static host, so it was moved out of `src/`. You may delete the folder.
- `.github/workflows/deploy-github-pages.yml.disabled` is the old GitHub Pages workflow, kept switched off.
