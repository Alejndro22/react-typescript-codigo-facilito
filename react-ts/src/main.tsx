import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   MemoCallbackApp,
//   AppReducer,
//   MemoCallAppBadUse,
//   AppReducerBadUse,
//   AppContext,
//   AppRef,
//   UseStateHook
// } from './hooks';
import './index.css';
import { FormApp } from './forms';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <UseStateHook /> */}
    {/* <AppContext /> */}
    {/* <AppRef /> */}
    {/* <AppReducer /> */}
    {/* <MemoCallbackApp /> */}
    <FormApp />
  </React.StrictMode>
);
