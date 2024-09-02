import * as React from 'react';
import { Typography } from '@mui/material';
import { MachineWrapper } from '../styles/templates.jsx'

export default function Work() {
  return (
    <MachineWrapper>
      <Typography variant="body3" component="h1" sx={{ mb: 2 }}>
        work
      </Typography>
    </MachineWrapper>
  );
}

