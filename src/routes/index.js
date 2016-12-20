/*modules*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';
/*components*/
import App from '../containers/App';
import HomePage from '../containers/HomePage';
import OtherPage from '../containers/OtherPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/other" component={OtherPage} />
  </Route>
);
