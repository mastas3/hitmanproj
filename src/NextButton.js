import React, { Component } from "react";


export default class NextButton extends Component{
  handleClick() {
    this.props.nextTrack(false)
  }

  render() {
    return (
      <div className="Button" onClick={this.handleClick.bind(this)}>
        <i className="fa fa-forward" aria-hidden="true"></i>
      </div>
    )
  }
}
