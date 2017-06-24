import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import styles from './index.css';
import drop from './Dropdown.jsx'
import head from './Header.jsx'

import { Switch, hashHistory, Router, IndexRoute, Route, Link } from 'react-router'

ReactDOM.render(
   <main>
<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={drop} />
      <Route path='admin' component={head} />
      <Route path='genre' component={drop} />
    </Route>
  </Router>,
  </main>,
  document.getElementById('app')
);