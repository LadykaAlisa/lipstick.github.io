import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

WebFont.load({
    google: {
        families: ['Helvetica:300,400,700', 'sans-serif']
    }
});
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
          </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();