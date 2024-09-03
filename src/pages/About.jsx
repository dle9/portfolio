import * as React from 'react';
import { Typography } from '@mui/material';
import { MachineWrapper } from '../styles/templates.jsx'
import {Bold} from '../styles/textStyle.jsx' 
import {blinkingAnimation} from '../styles/textStyle.js'

export default function About() {
  return (
    <MachineWrapper>
      <Typography variant="body3" component="h1" sx={{ mb: 2 }}>
        Howdy! I'm <Bold>Deric</Bold>, and I'm currently a senior at 
        Texas A&M University studying Computer Science. Also,
        I'm minoring in <Bold>Cybersecurity</Bold> with the goal of furthering
        my career in Cybersecurity after graduation. Some of my 
        interests in this field are: <Bold>Incident Response,
        Reverse Engineering, and Penetration Testing</Bold>.


        <br/><br/><br/><br/><br/><br/>
        <Typography 
          variant="body3" 
          sx={{ mt: 5, mb:15 }}
        >
          <a 
            href="https://drive.google.com/file/d/1MoyexGbH0ISQdjYPAb3V6rkYqWmbLZZZ/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <Bold sx={{
              animation: `blink-animation 1s infinite`,
              '@keyframes blink-animation': blinkingAnimation,
            }}>
              Resume
            </Bold>
          </a>
        </Typography>

      </Typography>
    </MachineWrapper>
  );
}


