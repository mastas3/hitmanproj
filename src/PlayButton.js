import React, { Component } from "react";

export default class PlayButton extends Component{
  render() {
    return (
      <div className="Button" onClick={this.props.onToggle}>
      {
        this.props.playStatus ?
          <i className="fa fa-pause" aria-hidden="true"></i>
          :
          <i className="fa fa-play" aria-hidden="true"></i>
      }
      </div>
    )
  }
}
