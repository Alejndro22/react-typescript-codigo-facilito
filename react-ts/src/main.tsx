import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppContext,
  // UseStateHook
} from './hooks';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <UseStateHook /> */}
    <AppContext />
  </React.StrictMode>
);
