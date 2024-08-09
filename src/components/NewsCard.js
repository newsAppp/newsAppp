// src/components/NewsCard.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import OGContentList from './OGContentList'; // Import the OGContentList component

const NewsCard = ({ news }) => {
  const [open, setOpen] = useState(false);
  const [similarUrls, setSimilarUrls] = useState([]); // State for similar URLs

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetch similar URLs when the modal opens
  useEffect(() => {
    const fetchSimilarUrls = async () => {
      try {
        const response = await fetch(`/similar/${news.article_id}`);
        const data = await response.json();
        setSimilarUrls(data); // Assuming the API response has a 'similar_urls' array
      } catch (error) {
        console.error('Error fetching similar URLs:', error);
      }
    };

    if (open) {
      fetchSimilarUrls();
    }
  }, [open, news.article_id]);

  return (
    <div>
      <Card onClick={handleClickOpen}>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refrences</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            <Typography variant="h6" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" marginTop={2} color="text.secondary">
              {news.summary}
            </Typography>
          </DialogContentText> */}
          {/* Display OGContentList here */}
          <OGContentList urls={similarUrls} /> {/* Pass the fetched similar URLs */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewsCard;
