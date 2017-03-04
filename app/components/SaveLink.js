
import React, { Component } from 'react';
import { remote } from 'electron';
import { writeFileSync } from 'fs';

export default class Save extends Component {
  saveData() {
    console.log(this.props.data);
    const rawData = JSON.stringify(this.props.data);
    let file = remote.dialog.showSaveDialog();

    if (file) {
      var fs = require('fs');
      try { writeFileSync(file, rawData, 'utf-8'); }
      catch(e) { alert('Failed to save the file !'); }
    }

  }

  render() {
    return (
      <span onClick={() => this.saveData()}>{this.props.children}</span>
    );
  }
}
