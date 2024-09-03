import React from 'react';
import { Link } from 'react-router-dom'; 
import { useTheme, Box, IconButton, Typography } from '@mui/material';

import arcadeBg from '../assets/images/home-bg.png';
import machineBg from '../assets/images/info-bg.png';

const VerticalIconLabel = ({ icon: Icon, label, to }) => {
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
        marginTop: '2rem',
        backgroundColor: theme.palette.background.light,
        height: '80vh',
        width: '80vw',   
      }}>
        <Box sx={{
          border: `2px solid ${theme.palette.highlight.main}`,
          borderRadius:'20px',
          backgroundImage: `url(${arcadeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

const MachineWrapper = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height:'95vh',
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.light,
      }}
      {...props}
    >
      <Box  
        sx={{
          display:'flex', justifyContent:'center', alignItems:'center',
          overflowY:'auto',
          border: `2px solid ${theme.palette.highlight.main}`,
          borderRadius:'60px',
          marginTop: '2rem',
          backgroundColor: theme.palette.background.light,
          height: '702px',
          width:'771px',
          backgroundImage: `url(${machineBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center',
          textAlign:'center',
        }}
      >
        <Box sx={{height:'70%', width:'80%'}}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export { VerticalIconLabel, ArcadeWrapper, MachineWrapper };
