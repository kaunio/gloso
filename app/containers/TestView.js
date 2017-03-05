// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import InputAnswerView from '../components/InputAnswerView';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class TestView extends Component {
  render() {
    const { glosor, base } = this.props;

    console.log(glosor.get(0));
    if (glosor.size > 0) {
      return (<InputAnswerView lang1={base.lang1} lang2={base.lang2} glosa={glosor.get(0)} />)
    }

    return (
      <div>
        Test complete
        <Link to="/">Back to main</Link>
      </div>
    );
  }

  componentWillMount() {
    if (this.props.base.glosor.size === 0) {
        this.props.router.push("/");
    }
  }
}

function mapStateToProps(state) {
  return {
    glosor: state.testGlosor.glosor,
    base: state.glosor
  };
}

export default connect(mapStateToProps)(withRouter(TestView));
