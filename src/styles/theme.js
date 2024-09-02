import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background:{
      main: "#180021",
      secondary: "#260133",
    },
    highlight:{
      main:"#00afc9",
      secondary:"#00404a"
    },
    error: {
      main: red.A400,
    },
    text: {
      light: '#ffffff',
      dark:'#000000',
    }
  },
});

export default theme;
