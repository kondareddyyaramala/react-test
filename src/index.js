import React from 'react';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './index.css';
import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

