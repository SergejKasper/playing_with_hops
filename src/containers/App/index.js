/*modules*/
import React, { Component, PropTypes } from 'react';
/*styling*/
import { content } from './style.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className={content}>
        {this.props.children}
      </div>
    );
  }
}
