import * as React from 'react';
import { Typography } from '@mui/material';

import {blinkingAnimation} from '../styles/textStyle.js'
import { ArcadeWrapper } from '../styles/templates.jsx'

export default function Home() {
  const handleClick = () => {
    const userInput = prompt('Work in progress!');
    if (userInput) {
      alert(`You entered: ${userInput}`);
    }
  };

  return (
    <ArcadeWrapper>
      <Typography
        variant="body1"
        sx={{
          mb:19
        }}
      >
        Welcome to the Alpha Arcade! <br />
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
    </ArcadeWrapper>
  );
}

