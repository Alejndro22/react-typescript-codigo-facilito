import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppReducer,
  // AppReducerBadUse,
  // AppContext,
  // AppRef,
  // UseStateHook
} from './hooks';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <UseStateHook /> */}
    {/* <AppContext /> */}
    {/* <AppRef /> */}
    <AppReducer />
  </React.StrictMode>
);
