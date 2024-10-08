import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import './fonts.css'

// Create a theme instance.
const theme = createTheme({
  typography: {
    h3: {
      fontFamily: 'my-title, Arial, sans-serif',
      fontSize: '2.6rem',
      color:'#ffffff',
    },
    h4: {
      fontFamily: 'my-menu, Arial, sans-serif',
      fontSize: '1.3rem',
      color:'#ffffff',
    },
    body1: {
      fontFamily: 'my-body, Arial, sans-serif',
      fontSize: '1.3rem',
      color:'rgba(255,255,255,0.36)'
    },
    body2: {
      fontFamily: 'my-body, Arial, sans-serif',
      fontSize: '2.3rem',
      color: '#ffffff'
    },
    body3: {
      fontFamily: 'my-body, Arial, sans-serif',
      fontSize: '1.3rem',  
      color:'rgba(255,255,255,0.7)'
    },
  },

  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background:{
      light: "#1d0229",
      dark: "#0d0012",
    },
    highlight:{
      main:"#00afc9",
      secondary:"#00404a",
      bold:"#026473"
    },
    game:{
      material:"#221642",
      screen:"#180f2e",
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
