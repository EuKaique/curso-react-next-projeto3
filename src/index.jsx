import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme.jsx'
import {GlobalStyles} from './styles/global.jsx'
import Home from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
