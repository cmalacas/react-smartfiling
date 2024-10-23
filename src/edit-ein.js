import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import EditEin from '../Components/EditEin';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('edit-ein'));
root.render(
  <React.StrictMode>
    <EditEin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
