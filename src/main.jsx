import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './styles/theme';

import ArcadeWrapper from './components/ArcadeWrapper.jsx'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>

        <CssBaseline />
        <NavBar />
        
        <Routes>
          <Route path="/" element={
            <ArcadeWrapper>
              <Home />
            </ArcadeWrapper>
          } />
          <Route path="/about" element={
            <ArcadeWrapper>
              <About />
            </ArcadeWrapper>
          } />
          <Route path="/projects" element={
            <ArcadeWrapper>
              <Projects />
            </ArcadeWrapper>
          } />
        </Routes>

      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
