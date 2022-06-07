import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store';

import MainLayout from './core/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <MainLayout>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MainLayout>
  </Provider>
);
