// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Typography variant="h6" style={{ color: 'white' }}>
          News App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
