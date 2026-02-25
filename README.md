# 言葉 Kotoba

An anime quote generator with a dark editorial design. No external API — 100+ quotes built in, works instantly every time.

Live: [kotoba-vert.vercel.app](https://kotoba-vert.vercel.app)

---

## How it works

Quotes are pulled from a local dataset of 100+ hand-picked anime quotes. No API calls, no rate limits, no downtime. Favorites are saved to localStorage and persist between visits.

**Keyboard shortcuts**

| Key | Action |
|-----|--------|
| `Space` or `→` | Next quote |
| `S` | Save / unsave |
| `D` | Quote of the Day |
| `Esc` | Close favorites |

The **⚡ button** in the header tells you how many quotes are loaded.

---

## Project structure

```
/
├── index.html       — everything lives here
├── api/
│   └── quote.js     — serverless proxy (kept for future use)
└── vercel.json
```

---

## Deploy

Push to GitHub, connect repo in [vercel.com](https://vercel.com). Deploys automatically. No environment variables needed.

```bash
vercel --prod
```

---

## Local dev

Just open `index.html` in a browser. No server needed since everything is self-contained.

Or use the Vercel CLI if you want to test the serverless function:

```bash
npm install -g vercel
vercel dev
```
