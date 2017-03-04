// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {

    clickFn() {
        let lang1 = this.lang1input.value;
        let lang2 = this.lang2input.value;

        this.props.createFn(lang1,lang2);
    }

    render() {
        return (
            <form>
                <div>
                    Language 1: <input type="text" ref={(input) => { this.lang1input = input; }} />
                </div>
                <div style={{marginTop: "10px"}}>
                    Language 2: <input type="text" ref={(input) => { this.lang2input = input; }}/>
                </div>
                <div style={{marginTop: "10px"}}>
                    <button type="button" onClick={() => this.clickFn()}>Create</button>
                </div>
            </form>
        )
    }
}
