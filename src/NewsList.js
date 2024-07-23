// src/components/NewsList.jsx
import React, { useState, useEffect } from 'react';

// Function to fetch news data from the API
const fetchNewsData = async (query, skip, limit) => {
    try {
        const response = await fetch(
            'https://cors-anywhere.herokuapp.com/https://server2.opencoursehub.online/news?query='+query+'&skip=0&limit=10',
            {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                },
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Adjust based on the API response structure
    } catch (error) {
        console.error('Error fetching news data:', error);
        return { news: [] }; // Return an empty array or handle as needed
    }
};

const NewsList = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            setLoading(true);
            try {
                const data = await fetchNewsData(searchQuery, 0, 10);
                setNewsData(data); // Adjust based on the API response structure
            } catch (err) {
                setError('Failed to load news');
            } finally {
                setLoading(false);
            }
        };
        loadNews();
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        if (e.key === 'Enter') {
            // loadNews();
            setSearchQuery(e.target.value);
        }
    };

    const filteredNews = newsData;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder={searchQuery}
                    //   value={searchQuery}
                    onKeyDown={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="space-y-4">
                {filteredNews.length > 0 ? (
                    filteredNews.map((news) => (
                        <div key={news.id} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                            <h2 className="text-xl font-semibold mb-2">{news.news_title}</h2>
                            <p className="text-gray-700 mb-2">{news.news_title}</p>
                            <span className="text-sm text-gray-500">{news.news_title}</span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No news items found.</p>
                )}
            </div>
        </div>
    );
};

export default NewsList;
