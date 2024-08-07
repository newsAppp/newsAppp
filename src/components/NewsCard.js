// src/components/NewsCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const NewsCard = ({ news }) => {
  return (
    <Card>
      {news.img && (
        <CardMedia
          component="img"
          alt={news.title}
          height="140"
          image={`https://via.placeholder.com/150?text=${news.image_keyword}`}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" marginTop={2} color="text.secondary">
          {news.summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
