// src/components/OGContentCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Divider, CardHeader, Grid } from '@mui/material';

const OGContentCard = ({ content }) => {
  const handleClick = () => {
    window.open(content.loc, '_blank'); // Open the link in a new tab
  };

  return (
    <Grid item key={content.loc}>
      <Card onClick={handleClick}> {/* Add onClick handler to the Card */}
        <CardContent>
          <Typography variant="body2" color="text.primary" component="div">
            {content.news_title}
          </Typography>
          <Typography color="text.secondary" component="div">
            Source: {content.news_publication_name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OGContentCard;
