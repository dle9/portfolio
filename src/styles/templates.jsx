import React from 'react';
import { Link } from 'react-router-dom'; 
import { useTheme, Box, IconButton, Typography } from '@mui/material';

const VerticalIconLabel = ({ icon: Icon, label, to }) => {
  // Split the label into an array of letters
  const letters = label.split('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack icon and label vertically
        alignItems: 'center', // Center horizontally
        '&:hover .label': {
          opacity: 1,
        },
      }}
    >
      <IconButton color="inherit" component={Link} to={to}>
        <Icon />
      </IconButton>
      <Box
        className="label"
        sx={{
          position:'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0,
          transition: 'opacity 0.3s',
          marginTop: 5, // Space between the icon and the label
        }}
      >
        {letters.map((letter, index) => (
          <Typography
            key={index}
            variant="h4" 
            sx={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            {letter}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

const ArcadeWrapper = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '95vh',
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.light,
      }}
      {...props}
    >
      <Box
        sx={{
          border: `2px solid ${theme.palette.highlight.main}`,
          marginTop: '2rem',
          backgroundColor: theme.palette.background.light,
          height: '80vh',
          width: '80vw',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export { VerticalIconLabel, ArcadeWrapper };
