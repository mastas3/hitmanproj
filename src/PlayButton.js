import React, { Component } from "react";

export default class PlayButton extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Button" onClick={this.props.onToggle}>
        <i className="fa fa-play" aria-hidden="true"></i>
      </div>
    )
  }
}
