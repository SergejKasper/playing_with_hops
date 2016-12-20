import React, { createClass, PropTypes } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import reducers from './reducers';
import {changeMessage} from './actions/message';

import { render } from 'hops';

import { headline } from './style.css';
const Home = connect(reducers, {changeMessage})(
  createClass({
    displayName: 'Home',
    propTypes: {
      message: PropTypes.string,
      changeMessage: PropTypes.func
    },
    componentDidMount() {
      this.props.changeMessage('Hello World!');
    },
    render() {
      return (
        <h1 className={ headline }>{ this.props.message }</h1>
      );
    }
  })
);

const routes = (
  <Route path='/' component={ Home }/>
);

export default render({ routes });
export { Home };
