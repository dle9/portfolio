import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
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
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'background.main',
            marginLeft: 'auto',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'text.light',
            }}
          >
            <IconButton color="inherit" component={Link} to="/">
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/about">
              <AboutIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/projects">
              <PortfolioIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

