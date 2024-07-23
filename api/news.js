// pages/api/news.js
export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await fetch(`https://server2.opencoursehub.online/news?query=${encodeURIComponent(query)}&skip=0&limit=10`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
}
