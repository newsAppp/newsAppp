import React, { useState } from 'react';
import { 
  IconButton, 
  Popover, 
  Box, 
  Typography, 
  Button, 
  Snackbar,
  Fade
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  LinkedIn, 
  Email, 
  Share as ShareIcon, 
  ContentCopy 
} from '@mui/icons-material';

const ShareButton = ({ icon: Icon, color, label, onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      color: 'white',
      backgroundColor: color,
      '&:hover': {
        backgroundColor: color,
        opacity: 0.8,
      },
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    }}
  >
    <Icon />
  </IconButton>
);

const Share = ({ url, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
    email: `mailto:?subject=${shareTitle}&body=Check this out: ${shareUrl}`
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank');
    handleClose();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setSnackbarOpen(true);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Fade in={true}>
        <IconButton
          onClick={handleClick}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            width: 56,
            height: 56,
            boxShadow: 3,
          }}
        >
          <ShareIcon />
        </IconButton>
      </Fade>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <Typography variant="h6" gutterBottom>
            Share this content
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <ShareButton
              icon={Facebook}
              color="#1877F2"
              label="Share on Facebook"
              onClick={() => handleShare('facebook')}
            />
            <ShareButton
              icon={Twitter}
              color="#1DA1F2"
              label="Share on Twitter"
              onClick={() => handleShare('twitter')}
            />
            <ShareButton
              icon={LinkedIn}
              color="#0A66C2"
              label="Share on LinkedIn"
              onClick={() => handleShare('linkedin')}
            />
            <ShareButton
              icon={Email}
              color="#EA4335"
              label="Share via Email"
              onClick={() => handleShare('email')}
            />
          </Box>
          <Button
            variant="outlined"
            startIcon={<ContentCopy />}
            fullWidth
            onClick={handleCopyLink}
          >
            Copy Link
          </Button>
        </Box>
      </Popover>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Link copied to clipboard"
      />
    </Box>
  );
};

export default Share;