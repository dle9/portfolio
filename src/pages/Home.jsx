import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {blinkingAnimation} from '../styles/animation.js'
import backgroundImage from '../assets/images/home-bg.png';

export default function Home() {
  const handleClick = () => {
    const userInput = prompt('Work in progres!');
    if (userInput) {
      alert(`You entered: ${userInput}`);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
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
      }}
    >
      <Typography
        variant="body1"
        sx={{
          mb:19
        }}
      >
        Welcome to my website! <br />
        Feel free to play along, <br />
        or just browse as you wish. <br />
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mb:19,
          cursor: 'pointer',
          fontWeight: 'bold',
          animation: `blink-animation 1s infinite`,
          '@keyframes blink-animation': blinkingAnimation,
        }}
        onClick={handleClick}
      >
        Start
      </Typography>
    </Box>
  );
}

