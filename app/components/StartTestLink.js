import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testGlosorActions from '../actions/testGlosorActions';

class StartTestLink extends Component {
  startTest() {
    this.props.startGlosorTest(this.props.glosor);
  }

  render() {
    return (
      <a href="#startTestLink" onClick={() => this.startTest()}>{this.props.children}</a>
    );
  }
}

function mapStateToProps(state) {
  return {
    glosor: state.glosor.glosor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(testGlosorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartTestLink);
