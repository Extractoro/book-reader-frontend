import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'js/components/App';
import { BrowserRouter } from 'react-router-dom';
// import GlobalCSS from './GlobalCss/global.css'
import { persistor, store } from './js/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
