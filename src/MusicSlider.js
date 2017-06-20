import React, { Component } from "react";
import PubSub from "./pubsub";

export default class MusicSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currentTime: "00:00"
    };
    this.interval = null;
    PubSub.subscribe("onNextTrack", this.nextTrackHandler.bind(this));
    PubSub.subscribe("onPlay", this.handleOnPlay.bind(this));
    PubSub.subscribe("onPause", this.handleOnPause.bind(this));
  }

  handleOnPlay() {
    this.generateNewValue();
  }

  handleOnPause(currentPositionInTrack) {
    console.log(currentPositionInTrack)
    this.stopInterval();
  }

  nextTrackHandler() {
    this.setState({
      value: 0,
      currentMS: 0,
      currentTime: "00:00"
    });
    clearInterval(this.interval);
    this.interval = null;
  }

  generateNewValue() {
    this.interval = setInterval(() => {
      console.log("this.state.currentTime: " + this.state.currentTime);
      console.log("this.props.length: " + this.props.length);
      if (this.state.currentTime == this.props.length) {
        this.stopInterval();
        return;
      }
      this.setState({
        value: this.state.value + this.props.lengthInMs / 320 / 320,
        currentTime: this.incSeconds(this.state.currentTime)
      });
    }, 1000);
  }

  incSeconds(strcurrentTime) {
    const padZeros = timeStr => {
      return timeStr
        .split(":")
        .map(val => {
          if (val == 0) {
            return "00";
          } else if (val < 10) {
            return "0" + val;
          } else {
            return val;
          }
        })
        .join(":");
    };

    let timeArr = strcurrentTime.split(":").map(val => +val);
    let result = timeArr[1] + 1 === 60
      ? `${timeArr[0] + 1}:00`
      : `${timeArr[0]}:${timeArr[1] + 1}`;
    return padZeros(result);
  }

  stopInterval() {
    window.clearInterval(this.interval);
  }

  handleSliderInput(e) {
    this.setState({
      value: +e.target.value,
      currentTime: this.MStoTimeString(+e.target.value * 320)
    });
  }

  MStoTimeString(ms) {
    var d = new Date(ms);
    return [d.getMinutes(), d.getSeconds()]
      .map(val => {
        if (val < 10) {
          return "0" + val;
        } else {
          return val;
        }
      })
      .join(":");
  }

  render() {
    return (
      <div className="musicSlider">
        <form>
          <input
            value={this.state.value}
            min="0"
            max={this.props.lengthInMs / 320}
            step={1}
            type="range"
            name="musicslider"
            onChange={this.handleSliderInput.bind(this)}
          />
        </form>
        <div className="timeAndTimeLeft">
          <span>{this.state.currentTime}</span>
          <span>{this.props.length}</span>
        </div>
      </div>
    );
  }
}
