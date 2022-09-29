import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'js/components/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalCSS from './GlobalCss/global.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/book-reader-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
