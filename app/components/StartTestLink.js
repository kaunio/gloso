import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testGlosorActions from '../actions/testGlosorActions';
import { withRouter } from 'react-router';

class StartTestLink extends Component {
  startTest() {
    this.props.startGlosorTest(this.props.glosor);
    this.props.router.push("/test");
  }

  render() {
    return (
      <a href="#/test" onClick={() => this.startTest()}>{this.props.children}</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartTestLink));
