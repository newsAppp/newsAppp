// src/app/api/news/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
  
    try {
      const response = await fetch(`https://server2.opencoursehub.online/news?query=${encodeURIComponent(query)}&skip=0&limit=10`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        return new Response('Failed to fetch data', { status: response.status });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response('An error occurred', { status: 500 });
    }
  }
  