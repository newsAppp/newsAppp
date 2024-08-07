// src/api.js
import axios from 'axios';

const API_URL = 'https://server2.opencoursehub.online/summaries';

export const fetchNews = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/last-2-days`, {
      params: { category }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
