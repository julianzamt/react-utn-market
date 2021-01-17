import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from "./Routes"
import reportWebVitals from './reportWebVitals'
import { HashRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <HashRouter>
      <Routes />
    </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
