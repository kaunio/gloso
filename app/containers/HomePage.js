// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return (
      <Home saveData={this.props.saveData} />
    );
  }
}

function mapStateToProps(state) {
  return {
    saveData: state.glosor
  };
}

export default connect(mapStateToProps)(HomePage);
