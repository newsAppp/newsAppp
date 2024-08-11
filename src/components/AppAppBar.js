import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import AppMenus from './AppMenus'; // Import the new component
import { Divider } from '@mui/material';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode, handleCategoryChange, isHindi, setIsHindi }) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    handleCategoryChange(sectionId);
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const menuItems = [
    { label: 'Top News', labelHindi: 'मुख्य समाचार', section: 'top-news' },
    { label: 'National', labelHindi: 'राष्ट्रीय', section: 'national' },
    { label: 'International', labelHindi: 'अंतरराष्ट्रीय', section: 'international' },
    { label: 'Sci-Tech', labelHindi: 'विज्ञान-तकनीक', section: 'sci-tech' },
    { label: 'Technology', labelHindi: 'प्रौद्योगिकी', section: 'technology' },
    { label: 'Entertainment', labelHindi: 'मनोरंजन', section: 'entertainment' },
    { label: 'Movies', labelHindi: 'फिल्में', section: 'movies' },
    { label: 'Sport', labelHindi: 'खेल', section: 'sport' },
    { label: 'Olympics', labelHindi: 'ओलंपिक', section: 'olympics' },
    { label: 'Business', labelHindi: 'व्यापार', section: 'business' },
    { label: 'Budget', labelHindi: 'बजट', section: 'budget' },
    { label: 'Health', labelHindi: 'स्वास्थ्य', section: 'health' },
    { label: 'Cricket', labelHindi: 'क्रिकेट', section: 'cricket' },
    { label: 'Science', labelHindi: 'विज्ञान', section: 'science' },
    { label: 'Markets', labelHindi: 'बाजार', section: 'markets' },
    { label: 'Energy and Environment', labelHindi: 'ऊर्जा और पर्यावरण', section: 'energy-and-environment' },
    { label: 'Industry', labelHindi: 'उद्योग', section: 'industry' },
    { label: 'Sport Races', labelHindi: 'खेल दौड़', section: 'sport-races' },
    { label: 'Economy', labelHindi: 'अर्थव्यवस्था', section: 'economy' },
    { label: 'Music', labelHindi: 'संगीत', section: 'music' },
  ];


  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={'/logo/vector/default.svg'}
                style={logoStyle}
                alt="logo of sitemark"
              />
              <AppMenus
                menuItems={menuItems}
                scrollToSection={scrollToSection}
                handleMenuOpen={handleMenuOpen}
                handleMenuClose={handleMenuClose}
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                isHindi={isHindi}
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                variant="text"
                color="primary"
                size="small"
                onClick={() => setIsHindi(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                हिंदी
              </Button>
              <Button
                variant="text"
                color="primary"
                size="small"
                onClick={() => setIsHindi(false)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                English
              </Button>
              {/* <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
              >
                Sign up
              </Button> */}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <Box marginY={1}>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      onClick={() => setIsHindi(true)}
                      sx={{ minWidth: '30px', p: '4px' }}
                    >
                      हिंदी
                    </Button>
                    <Button
                      variant="text"
                      color="primary"
                      size="small"
                      onClick={() => setIsHindi(false)}
                      sx={{ minWidth: '30px', p: '4px' }}
                    >
                      English
                    </Button>
                  </Box>
                  <Divider />
                  {menuItems.map((item) => (
                    <MenuItem key={item.section} onClick={() => scrollToSection(item.section)}>
                      {isHindi ? item.labelHindi : item.label}
                    </MenuItem>
                  ))}
                  {/* <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem> */}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
