import React, { Component } from 'react';
import { remote } from 'electron';
import { readFileSync } from 'fs';
import * as glosorActions from '../actions/glosorActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class StartTestLink extends Component {
  loadData() {
    console.log("Inside load link");
    let file = remote.dialog.showOpenDialog();

    if (file) {
      console.log("File path:", file);
      var fs = require('fs');
      let data;
      try {
        data = readFileSync(file[0]);
        this.props.replaceState(JSON.parse(data));
      }
      catch(e) { console.log(e); alert('Failed to load the file !'); }
    }

  }

  render() {
    return (
      <a href="#" onClick={() => this.startTest()}>{this.props.children}</a>
    );
  }
}

function mapStateToProps(state) {
  return {
    glosor: state.glosor.glosor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(glosorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartTestLink);
