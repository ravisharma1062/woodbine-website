# Woodbine Preparatory School Website

Next.js + Tailwind CSS, in English and Hindi (/en and /hi).

## Run on your computer
```
npm install
npm run dev      # open http://localhost:3000
npm run build    # production build
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
