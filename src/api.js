// src/api.js
import axios from 'axios';

// const API_URL = 'https://server2.opencoursehub.online';
const API_URL = '';


export const fetchNews = async (category, page = 1, perPage = 5) => {
  try {
    const response = await axios.get(`${API_URL}/top`, {
      params: { category, page, per_page: perPage }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`, {});
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
