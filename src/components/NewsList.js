import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, Skeleton } from '@mui/material';
import NewsCard from './NewsCard';
import { fetchNews } from '../api';

const NewsList = ({ selectedCategory }) => {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchNews(selectedCategory, currentPage, perPage);
        setNewsList(data);
        setTotalPages(10);
      } catch (error) {
        console.error('Error loading news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, [selectedCategory, currentPage, perPage]);

  const handlePageChange = (event, newPage) => {
    window.scrollTo(0, 0);
    setCurrentPage(newPage);
  };

  return (
    <Container>
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
