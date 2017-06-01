import React, { Component } from "react";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import PlayButton from './PlayButton';

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  onToggle() {
    this.props.onToggle()
  }

  render() {
    return (
      <div className="Controls">
        <PrevButton />
        <PlayButton onToggle={this.onToggle.bind(this)}/>
        <NextButton />
      </div>
    );
  }
}
