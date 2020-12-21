import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from "./Routes"
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
