/*modules*/
import React, { Component, PropTypes } from 'react';
/*styling*/
import { headline } from './style.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className={headline}>
        {this.props.children}
      </div>
    );
  }
}
