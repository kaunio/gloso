// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import SaveLink from './SaveLink';
import StartTestLink from './StartTestLink';
import LoadLink from './LoadLink';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>GLOSO</h2>
          <Link to="/createBundle">Create bundle</Link><br /><br/>

          <SaveLink data={this.props.saveData}>Save stuff</SaveLink><br />
          <LoadLink>Load the stuff</LoadLink><br /><br/>

          <StartTestLink>Start test</StartTestLink>
        </div>
      </div>
    );
  }
}
