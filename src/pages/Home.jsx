import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { Typography } from '@mui/material';

import { blinkingAnimation } from '../styles/textStyle.js';
import { ArcadeWrapper } from '../styles/templates.jsx';

export default function Home() {
  const navigate=useNavigate();

  const handleClick = async () => {
    const userInput = prompt('The hieroglyps seem interesting. I wonder who made them?');
    
    if (userInput) {
      try {
        const response = await fetch('http://dericle.com:8000/check_lvl1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password: userInput }),
        });

        const result = await response.json();
        
        alert(result.message);
        if (result.message === "Correct!") {
          navigate('/about');
        }

      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <ArcadeWrapper>
      <Typography
        variant="body1"
        sx={{
          mb: 15
        }}
      >
        Welcome to the Alpha Arcade! <br />
        Feel free to play along, <br />
        or just browse as you wish. <br />
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mb: 19,
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

