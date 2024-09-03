import React from 'react';
import { Typography } from '@mui/material';

const Bold = ({ children, sx }) => (
  <Typography component="span" sx={{ color:'rgba(0,100,115,1)', ...sx }}>
    {children}
  </Typography>
);

export {Bold};
