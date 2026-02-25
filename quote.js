export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { anime } = req.query;

  const url = anime
    ? `https://api.animechan.io/v1/quotes/anime?title=${encodeURIComponent(anime)}&page=1`
    : "https://api.animechan.io/v1/quotes/random";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Upstream error ${response.status}`);
    }

    const data = await response.json();

    if (anime) {
      const quotes = data.data ?? [];
      if (quotes.length === 0) {
        return res.status(404).json({ error: "No quotes found for that anime" });
      }
      const picked = quotes[Math.floor(Math.random() * quotes.length)];
      return res.status(200).json({
        quote: picked.content ?? "No quote found",
        character: picked.character?.name ?? "Unknown",
        anime: picked.anime?.name ?? anime,
      });
    }

    return res.status(200).json({
      quote: data.data?.content ?? "No quote found",
      character: data.data?.character?.name ?? "Unknown",
      anime: data.data?.anime?.name ?? "Unknown",
    });
  } catch (err) {
    console.error("Quote fetch failed:", err.message);
    return res.status(500).json({ error: "Failed to fetch quote" });
  }
}
