// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import NewsCard from './NewsCard';
import CategorySelector from './CategorySelector';
import { fetchNews } from '../api';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews(selectedCategory);
        setNewsList(data);
      } catch (error) {
        console.error('Error loading news:', error);
      }
    };

    loadNews();
  }, [selectedCategory]);

  return (
    <Container>
      {/* <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      /> */}
      <Grid container spacing={2}>
        {newsList.map((news) => (
          <Grid item xs={12} sm={6} md={4} key={news.article_id}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsList;
