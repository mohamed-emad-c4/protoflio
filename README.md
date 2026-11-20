# Mohamed Emad — Portfolio

Single-page portfolio built with Next.js (static export).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Add your CV

Put your CV at `public/cv.pdf`. Both "Download CV" buttons (hero and contact section) download it as `Mohamed-Emad-CV.pdf`.

## Edit content

All text (projects, skills, experience, links) lives in `lib/data.ts`.
On each project, `layers` controls which slabs of the mini stack diagram light up (db, api, web, mobile).

## Deploy

```bash
npm run build      # static site in ./out
```

Upload `out/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
