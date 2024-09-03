import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { AppBar, Toolbar, IconButton, CssBaseline, Typography, useScrollTrigger, Box } from '@mui/material';

import {VerticalIconLabel} from '../styles/templates.jsx'
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/AccountCircle';
import ProjectsIcon from '@mui/icons-material/Work';

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
              justifyContent: 'space-between',
            }}
          >
            {/* Left side */}
            <Box sx={{flex:1}}/> 

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
              <VerticalIconLabel icon={HomeIcon} label="home" to="/" />   
              <VerticalIconLabel icon={AboutIcon} label="about" to="/about" />   
              <VerticalIconLabel icon={ProjectsIcon} label="work" to="/work" />   
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

