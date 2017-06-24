import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import styles from './index.css';

import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render((
  < BrowserRouter >
    <App/>
  </BrowserRouter >),
  document.getElementById('app')
);