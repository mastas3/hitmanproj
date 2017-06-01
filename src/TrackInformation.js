import React, { Component } from "react";

export default class TrackInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TrackInformation">
        <div className="Name">{this.props.name}</div>
        <div className="Artist">{this.props.artist}</div>
        <div className="Album">{this.props.album}</div>
      </div>
    );
  }
}
