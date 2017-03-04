// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { List } from 'immutable';
import LanguagePair from '../components/LanguagePair';
import GlosaTableRow from '../components/GlosaTableRow';
import AddGlosa from '../components/AddGlosa';
import * as glosorActions from '../actions/glosorActions';

class GlosorEditor extends Component {

  addGlosa(l1, l2) {
    this.props.addGlosa(l1,l2);
  }

  render() {
    console.log('state', this.props);
    const glosor = this.props.glosor.map((g) => <GlosaTableRow g1={g.g1} g2={g.g2} key={g.order} />);

    return (
      <div>
        <h1>Glosor</h1>
        <table>
          <tbody>
            {glosor}
          </tbody>
        </table>
        <AddGlosa createFn={(a, b) => this.addGlosa(a, b)} />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

GlosorEditor.propTypes = {
  glosor: React.PropTypes.instanceOf(List)
}

function mapStateToProps(state) {
  return {
    glosor: state.glosor.glosor
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(glosorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GlosorEditor);
