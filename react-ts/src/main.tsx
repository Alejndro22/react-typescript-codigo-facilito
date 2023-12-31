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
// import { FormApp } from './forms';
// import { AppStyles } from './styles/AppStyles';
// import { ErrorsApp } from './errors/ErrorsApp';
import { UtilityApp } from './utility/UtilityApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <UseStateHook /> */}
    {/* <AppContext /> */}
    {/* <AppRef /> */}
    {/* <AppReducer /> */}
    {/* <MemoCallbackApp /> */}
    {/* <FormApp /> */}
    {/* <AppStyles /> */}
    {/* <ErrorsApp /> */}
    <UtilityApp />
  </React.StrictMode>
);
