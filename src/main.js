/*modules*/
import React, { createClass, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { bindActionCreators } from 'redux'
import { render } from 'hops';
/*components*/
import App from './containers/App'
import HomePage from './containers/HomePage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

export default render({ routes });
