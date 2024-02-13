import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from '@/reportWebVitals';
import Router from '@/Router';
import '@/core/sass/main.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
    <ToastContainer />
  </React.StrictMode>
);
reportWebVitals();
