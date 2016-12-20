/*modules*/
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MessageDisplay extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.message}</h2>
        </div>
      </div>
    );
  }
}
