# 言葉 Kotoba

An anime quote generator with a dark editorial design. Built with vanilla HTML, CSS, and JavaScript, deployed on Vercel.

Live site: [kotoba-vert.vercel.app](https://kotoba-vert.vercel.app)

---

## What it does

Fetches random anime quotes from the AnimeChan API through a serverless proxy. Falls back to a local set of quotes if the API is unreachable. Saves favorites to localStorage so they persist between visits.

**Keyboard shortcuts**

| Key | Action |
|-----|--------|
| `Space` or `→` | Next quote |
| `S` | Save / unsave current quote |
| `D` | Quote of the Day |
| `Esc` | Close favorites drawer |

---

## Project structure

```
/
├── index.html
├── api/
│   └── quote.js
└── vercel.json
```

The `api/` folder is what Vercel picks up as serverless functions. If these files are in the root they won't work — they have to be inside `api/`.

---

## Running locally

You need the Vercel CLI to run the API functions locally. Without it, the site loads but falls back to hardcoded quotes since there's no server handling `/api/quote`.

```bash
npm install -g vercel
vercel dev
```

Opens at `http://localhost:3000` with everything working the same as production.

---

## Deploying

Push to GitHub and connect the repo in [vercel.com](https://vercel.com). It deploys automatically on every push. No environment variables needed — AnimeChan is a free public API.

To deploy from the terminal:

```bash
vercel --prod
```

---

## Checking if the API works

Click the **⚡ button** in the header. It pings `/api/quote` and shows a toast with the response time if it's up, or an error message if it's down.

---

## Switching to a different API

1. Add your key in Vercel dashboard → Settings → Environment Variables
2. Reference it in `api/quote.js` with `process.env.YOUR_KEY`
3. Update the fetch URL in `quote.js` to point at the new endpoint

The frontend never changes — it always just hits `/api/quote`.

---

## Tech

- No frameworks, no build step
- Fonts: Playfair Display + Syne via Google Fonts
- API: [AnimeChan](https://animechan.io) (free tier, 5 req/hour)
- Hosting: Vercel
