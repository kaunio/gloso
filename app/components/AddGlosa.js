// @flow
import React, { Component } from 'react';

export default class AddGlosa extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang1input: null,
      lang2input: null
    };
  }

  clickFn() {
    const lang1 = this.state.lang1input.value;
    const lang2 = this.state.lang2input.value;

    this.props.createFn(lang1,lang2);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            Language 1: <input type="text" ref={(input) => { this.state.lang1input = input; }} />
          </div>
          <div>
            Language 2: <input type="text" ref={(input) => { this.state.lang2input = input; }} />
          </div>
          <div>
            <button type="button" onClick={() => this.clickFn()}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}
