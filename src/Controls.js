import React, { Component } from "react";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import PlayButton from './PlayButton';

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Controls">
        <PrevButton previousTrack={this.props.previousTrack}/>
        <PlayButton playStatus={this.props.playStatus} onToggle={this.props.onToggle}/>
        <NextButton nextTrack={this.props.nextTrack}/>
      </div>
    );
  }
}
