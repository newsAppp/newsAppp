'use client'

import { useState } from 'react';
import Head from 'next/head';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/news?query=${encodeURIComponent(query)}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data); // Adjust this line based on the actual structure of your API response
    } catch (error) {
      setError('An error occurred while fetching the data.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Search Page</title>
        <meta name="description" content="Search page with API integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col items-center">
          <img
            src="/google-logo.png" // Replace with your own logo or image
            alt="News App"
            className="mb-8"
            width={200} // Adjust width as needed
          />
          <form onSubmit={handleSearch} className="w-full max-w-md">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </form>
          {loading && <p className="mt-4 text-blue-500">Loading...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {results.length > 0 && (
            <ul className="mt-8 w-full max-w-md space-y-4">
              {results.map((result, index) => (
                <li key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                  {/* Adjust based on actual API response structure */}
                  <h2 className="text-lg font-semibold">{result.news_title}</h2>
                  <p>{result.news_title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
