import { Box, useTheme } from '@mui/material';

export default function ArcadeWrapper({ children, ...props }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '95vh',
        backgroundColor: theme.palette.background.main,
        color: theme.palette.text.light,
      }}
      {...props}
    >
      <Box
        sx={{
          border: `2px solid ${theme.palette.highlight.main}`,
          marginTop: '2rem',
          backgroundColor: theme.palette.background.secondary,
          height: '80vh',
          width: '80vw',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

