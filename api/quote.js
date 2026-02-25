export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.animechan.io/v1/quotes/random");

    if (!response.ok) {
      throw new Error(`Upstream error ${response.status}`);
    }

    const data = await response.json();

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
