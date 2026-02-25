export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://animechan.io/api/v1/available/anime?page=1");

    if (!response.ok) {
      throw new Error(`Upstream error ${response.status}`);
    }

    const data = await response.json();
    const titles = (data.data ?? []).map((a) => a.name ?? a).filter(Boolean);

    return res.status(200).json({ animes: titles });
  } catch (err) {
    console.error("Animes fetch failed:", err.message);
    return res.status(500).json({ error: "Failed to fetch anime list" });
  }
}
