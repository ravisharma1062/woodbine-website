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
| Notices | `src/content/notices.ts` (PDFs go in `public/notices/`) |
| Photo albums | `src/content/gallery.ts` (photos go in `public/gallery/<album>/`) |
| Videos | `src/content/videos.ts` (paste the YouTube video ID) |
| Page text (English / Hindi) | `messages/en.json`, `messages/hi.json` |
| Logo | replace `public/logo.svg` and `src/app/icon.svg` |
| Colours | `src/app/globals.css` (`--color-brand-*`, `--color-gold-*`) |

## Next step
Add a CMS (Sanity or Payload) so the school can post notices, photos and videos from a simple admin screen.
