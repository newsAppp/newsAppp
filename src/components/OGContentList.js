// src/components/OGContentList.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, CircularProgress, Skeleton } from '@mui/material';
import OGContentCard from './OGContentCard'; // Create this component

const OGContentList = ({ urls }) => {
  const [ogContentList, setOGContentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOGContent = async () => {
      setIsLoading(true);
      try {
        setOGContentList(urls);
      } catch (error) {
        console.error('Error fetching OG content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (urls.length > 0) {
      fetchOGContent();
    }
  }, [urls]);

  return (
    <Container>
      {isLoading && (
        <Grid container spacing={2}>
          {Array(urls.length).fill(null).map((_, index) => (
            <Grid item  key={index}>
              <Skeleton variant="rectangular" width="100%" height={140} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && (
        <Grid container spacing={2}>
          {ogContentList.map((content) => (
            <Grid item  key={content.loc}>
              <OGContentCard content={content} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default OGContentList;
