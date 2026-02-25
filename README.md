# 言葉 Kotoba — Anime Quote Generator

A minimal, editorial-styled anime quote generator. Powered by the AnimeChan API, proxied through a Vercel serverless function.

## Project Structure

```
/
├── index.html          — Frontend
├── api/
│   └── quote.js        — Vercel serverless function (API proxy)
├── vercel.json         — Vercel configuration
└── README.md
```

## Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects the `api/` folder and deploys it as serverless functions
4. No environment variables are needed for AnimeChan (it's a free, public API)

### Adding a paid API key later

If you switch to a paid API (like Quotable, or a custom source):

1. Go to your Vercel project dashboard → **Settings → Environment Variables**
2. Add your key, e.g. `ANIME_API_KEY=your_secret_here`
3. Inside `api/quote.js`, access it with `process.env.ANIME_API_KEY`

That way the key never touches your frontend.

## Local Development

```bash
npm install -g vercel
vercel dev
```

This spins up both the static site and the `/api/quote` function locally on `http://localhost:3000`.

## Features

- Fetches random anime quotes from AnimeChan
- Graceful fallback to hardcoded quotes if the API is down
- Animated quote transitions (fade + slide)
- Top loading bar during fetch
- Copy-to-clipboard with formatted attribution
- Quote counter
- Fully responsive

## Known Limitations

- AnimeChan is a free community API — occasional downtime is possible. The fallback quotes handle this gracefully.
- No offline support (no service worker). Add one if you need PWA behavior.
