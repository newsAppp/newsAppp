import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AppMenus({ menuItems, scrollToSection, handleMenuOpen, handleMenuClose, anchorEl, isMenuOpen }) {
  const MAX_ITEMS = 3;

  const mainItems = menuItems.slice(0, MAX_ITEMS);
  const moreItems = menuItems.slice(MAX_ITEMS);

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      {mainItems.map((item) => (
        <MenuItem
          key={item.section}
          onClick={() => scrollToSection(item.section)}
          sx={{ py: '6px', px: '12px' }}
        >
          <Typography variant="body2" color="text.primary">
            {item.label}
          </Typography>
        </MenuItem>
      ))}
      {moreItems.length > 0 && (
        <MenuItem onClick={handleMenuOpen} sx={{ py: '6px', px: '12px' }}>
          <Typography variant="body2" color="text.primary">
            More
          </Typography>
          <ExpandMoreIcon />
        </MenuItem>
      )}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
            borderRadius: '8px',
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
      >
        {moreItems.map((item) => (
          <MenuItem
            key={item.section}
            onClick={() => {
              scrollToSection(item.section);
              handleMenuClose();
            }}
            sx={{ py: '6px', px: '12px' }}
          >
            <Typography variant="body2" color="text.primary">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

AppMenus.propTypes = {
  menuItems: PropTypes.array.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default AppMenus;
