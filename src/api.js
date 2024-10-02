import axios from 'axios';

const API_URL = 'https://server4e.opencoursehub.online';
// const API_URL = '';

export const fetchNews = async (category, page = 1, perPage = 5) => {
  try {
    if (category === 'top30') {
      return await fetchTop30(1, page, perPage)
    }
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
    const response = await axios.get(`${API_URL}/v1.1/summary`, {
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

export const fetchTop30 = async (day, page = 1, perPage = 6) => {
  try {
    const response = await axios.get(`${API_URL}/top30`, {
      params: {
        page: page,
        per_page: perPage
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
};


export const getCategoriesV2 = async () => {
  try {
    const response = await axios.get(`${API_URL}/v1.1/categories`, {});
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};