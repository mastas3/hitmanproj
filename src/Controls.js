import React, { Component } from "react";
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import PlayButton from './PlayButton';
import MusicSlider from "./MusicSlider";

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Controls">
        <div className="MusicSlider">
          <MusicSlider />
        </div>
        <div className="Buttons">
          <PrevButton previousTrack={this.props.previousTrack}/>
          <PlayButton playStatus={this.props.playStatus} onToggle={this.props.onToggle}/>
          <NextButton nextTrack={this.props.nextTrack}/>
        </div>
      </div>
    );
  }
}
