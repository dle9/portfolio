import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { AppBar, Toolbar, IconButton, CssBaseline, Typography, useScrollTrigger, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/AccountCircle';
import PortfolioIcon from '@mui/icons-material/Work';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function NavBar(props) {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      default:
        return location.pathname.substring(1);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'background.dark',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2,
              justifyContent: 'space-between', // Adjust spacing for side items
            }}
          >
            {/* Left side */}
            <Box sx={{ flex: 1 }}>
              {/* Empty box for spacing */}
            </Box>

            {/* Center: Title */}
            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'text.light',
                  marginTop:'1rem',
                }}
              >
                {getTitle()}
              </Typography>
            </Box>

            {/* Right side: Nav */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="inherit" component={Link} to="/">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/about">
                <AboutIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/projects">
                <PortfolioIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

