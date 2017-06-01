import React, { Component } from "react";

export default class PrevButton extends Component{
  render() {
    return (
      <div className="Button" onClick={this.props.previousTrack}>
        <i className="fa fa-backward" aria-hidden="true"></i>
      </div>
    )
  }
}
