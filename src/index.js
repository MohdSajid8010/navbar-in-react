import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>

    <App />
  </BrowserRouter>//any component inside bowser router will be acces all feature of router

  , document.getElementById("root"));
