
/*modules*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
/*components*/
import MessageDisplay from '../../components/MessageDisplay';
/*dataFlow*/
import reducers from '../../reducers';
import { changeMessage } from '../../actions/message';

class HomePage extends Component {
  componentDidMount() {
    this.props.changeMessage('Loaded!');
  }
  render() {
    return (
      <div>
        <MessageDisplay message={this.props.message} />
        <div>What is up</div>
        <Link to="/other-page">Go to other page</Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMessage }, dispatch)
}

export default connect(reducers, mapDispatchToProps)(HomePage)
