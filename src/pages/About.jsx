import * as React from 'react';
import { Typography } from '@mui/material';
import { MachineWrapper } from '../styles/templates.jsx'

export default function About() {
  return (
    <MachineWrapper>
      <Typography variant="body3" component="h1" sx={{ mb: 2 }}>
        Howdy! I'm Deric, and I'm currently a senior at 
        Texas A&M University studying Computer Science. Also,
        I'm minoring in Cybersecurity with the goal of furthering
        my career in Cybersecurity after graduation. Some of my 
        interests in this field are: Incident Response,
        Reverse Engineering, and Penetration Testing.
      </Typography>
    </MachineWrapper>
  );
}


