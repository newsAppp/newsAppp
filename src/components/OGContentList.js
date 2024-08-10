import React, { useState, useEffect } from 'react';
import { Container, Grid, CircularProgress, Skeleton } from '@mui/material';
import OGContentCard from './OGContentCard'; // Create this component
import { Card, CardContent } from '@mui/material';


const OGContentList = ({ urls }) => {
  const [ogContentList, setOGContentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          {Array(5).fill(null).map((_, index) => (
            <Grid item key={index}>
              <Card  >
                <CardContent>
                  <Skeleton variant="text" width="80%" height={20} />
                  <Skeleton variant="text" width="60%" height={20} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && (
        <Grid container spacing={2}>
          {ogContentList.map((content) => (
            <Grid item key={content.loc}>
              <OGContentCard content={content} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default OGContentList;
