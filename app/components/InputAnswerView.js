// @flow
import React, { Component, PropTypes } from 'react';

export default class InputAnswerView extends Component {
  static propTypes = {
    glosa: PropTypes.any.isRequired,
    lang1: PropTypes.string.isRequired,
    lang2: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    console.log("Init running");
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

    if (!shouldProcess) {
      return;
    }

    const answer = this.state.answer;
    const glosa = this.props.glosa;

    const glosaAnswer = glosa.leftSide ?
      glosa.glosa.g2 :
      glosa.glosa.g1;

    if (glosaAnswer === answer) {
      // Answer was right
      console.log("Righty");
      this.setState({ ...this.state, showIncorrect: false });
    } else {
      // Answer was wrong
      console.log("Falsy");
      this.setState({ ...this.state, showIncorrect: true, answer: '' });
    }
  }


  render() {
    const glosa = this.props.glosa;
    const l1 = this.createSection(this.props.lang1, glosa.glosa.g1, glosa.leftSide);
    const l2 = this.createSection(this.props.lang2, glosa.glosa.g1, !glosa.leftSide);

    let errorSection = this.state.showIncorrect ?
      <div>That was not the right answer!</div> :
      null;

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
