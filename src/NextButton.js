import React, { Component } from "react";


export default class NextButton extends Component{
  render() {
    return (
      <div className="Button" onClick={this.props.nextTrack}>
        <i className="fa fa-forward" aria-hidden="true"></i>
      </div>
    )
  }
}
