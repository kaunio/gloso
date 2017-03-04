// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LanguagePair from '../components/LanguagePair';
import * as glosorActions from '../actions/glosorActions';

class HomePage extends Component {

  createFn(lang1, lang2) {
      this.props.setLangs(lang1, lang2);
      this.props.router.push("/addGlosor");
  }

  render() {
    return (
      <LanguagePair createFn={(a,b) => this.createFn(a,b)} />
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(glosorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
