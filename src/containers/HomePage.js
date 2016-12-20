
/*modules*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
/*components*/
import MessageDisplay from '../components/MessageDisplay';
/*dataFlow*/
import reducers from '../reducers';
import { changeMessage } from '../actions/message';
/*styling*/
import { headline } from './style.css';

class HomePage extends Component {
  componentDidMount() {
    this.props.changeMessage('Loaded!');
  }
  render() {
    return (
      <div className={headline}>
        <MessageDisplay message={this.props.message} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMessage }, dispatch)
}

export default connect(reducers, mapDispatchToProps)(HomePage)
