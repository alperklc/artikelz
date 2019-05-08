import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/store-context';
import App from './App';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
