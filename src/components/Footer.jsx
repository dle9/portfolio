import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, CssBaseline, Typography, useScrollTrigger, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

export default function Footer(props) {
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
        <AppBar position="fixed" sx={{ backgroundColor: 'background.dark',boxShadow: 'none',bottom: 0,top: 'auto',}}>
          <Toolbar sx={{display: 'flex',alignItems: 'center',mb: 2,justifyContent: 'space-between',}}>
            {/* Left side */}
            <Box sx={{ flex: 1 }} />

            {/* Center: Social Links */}
            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton
                color="inherit"
                href="https://www.github.com/dle9"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/dericle"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>

            {/* Right side */}
            <Box sx={{ flex: 1 }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

