// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import * as testGlosorActions from '../actions/testGlosorActions';


class InputAnswerView extends Component {
  static propTypes = {
    glosa: PropTypes.any.isRequired,
    lang1: PropTypes.string.isRequired,
    lang2: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      showIncorrect: false
    };
  }

  createSection(lang, text, editor) {
     if (editor) {
       return (
         <div>
           <div>
             {lang}
           </div>
           <div>
             {text}
           </div>
         </div>
       );
     } else {
       return (
         <div>
           <div>
             {lang}
           </div>
           <div>
             <input type="text" autoFocus="autofocus" value={this.state.answer} onChange={this.handleChange} onKeyPress={this.handleAnswer} />
           </div>
         </div>
       );
     }
   };

  handleChange = (event) => {
    let answer = event.target.value;
    this.setState({ answer });
    //console.log("Processing answer", this.state.answer);
  }

  handleAnswer = (event) => {
    const shouldProcess = event.charCode === 13;

    if (!shouldProcess || !this.state.answer) {
      return;
    }

    this.props.testGlosaAnswered(this.props.glosa, this.state.answer);
  }

  nextQuestion = () => {
    this.setState({answer: ''});
    this.props.testNextQuestion();
  }


  render() {
    const mode = this.props.mode;
    const readOnly = mode === "failed" || mode === "correct";

    const glosa = this.props.glosa;
    const l1 = this.createSection(this.props.lang1, glosa.glosa.g1, readOnly || glosa.leftSide);
    const l2 = this.createSection(this.props.lang2, glosa.glosa.g2, readOnly || !glosa.leftSide);

    let errorSection;

    if(mode === 'incorrect') {
      errorSection = <div>That was not the right answer!</div>;
    } else if (mode === 'failed' || mode === 'correct') {
      errorSection = <button type="button" onClick={this.nextQuestion}>Next question</button>;
    }

    return (
      <div>
        <form>
          {l1}
          {l2}
        </form>
        {errorSection}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(testGlosorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InputAnswerView));
