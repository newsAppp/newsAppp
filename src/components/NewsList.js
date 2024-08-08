// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, CircularProgress, Skeleton } from '@mui/material';
import NewsCard from './NewsCard';
import CategorySelector from './CategorySelector';
import { fetchNews } from '../api';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(5); // Set the number of items per page
  const [isLoading, setIsLoading] = useState(false); // State for loader

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true); // Show loader on API call
      try {
        const data = await fetchNews(selectedCategory, currentPage, perPage);
        setNewsList(data);
        setTotalPages(10); // Update total pages from API response
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setIsLoading(false); // Hide loader after API call (success or error)
      }
    };

    loadNews();
  }, [selectedCategory, currentPage, perPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      {/* <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      /> */}
      {isLoading && (
        <Grid container spacing={2}>
          {Array(perPage).fill(null).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" width="100%" height={140} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && (
        <Grid container spacing={2}>
          {newsList.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.article_id}>
              <NewsCard news={news} />
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 2 }}
      />
    </Container>
  );
};

export default NewsList;
