import * as React from 'react'
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './styles/theme';
import { ArcadeWrapper,MachineWrapper } from './styles/templates.jsx'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Footer from './components/Footer'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>

        <CssBaseline />

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer /> 

      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
