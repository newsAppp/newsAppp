import axios from 'axios';

const API_URL = 'https://server2.opencoursehub.online';
// const API_URL = '';


export const fetchNews = async (category, page = 1, perPage = 5) => {
  try {
    if (category !== 'top-news') {
      return await fetchSummary(2, page, perPage, [category])
    }
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

export const getSimilar = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/similar/${id}`, {});
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchSummary = async (day, page = 1, perPage = 6, categories = ["cities"]) => {
  try {
    const response = await axios.get(`${API_URL}/summary`, {
      params: {
        day, page,
        per_page: perPage,
        categories: categories.join(',')
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
};

