import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const OGContentCard = ({ content }) => {
  const handleClick = () => {
    window.open(content.loc, '_blank');
  };

  return (
    <Grid item key={content.loc}>
      <Card onClick={handleClick}>
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

