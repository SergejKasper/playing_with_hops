/*modules*/
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MessageDisplay extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.message}</h1>
        </div>
      </div>
    );
  }
}
