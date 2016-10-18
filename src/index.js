import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ViewDetailsPage from './components/ViewDetailsPage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="search" component={SearchPage} />
      <Route path="details" component={ViewDetailsPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
