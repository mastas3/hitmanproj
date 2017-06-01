import React, { Component } from "react";
import background from './images/cassette.jpg';

export default class Artwork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.url)

    return (
      <div className="Artwork">
        <div ></div>
      </div>
    );
  }
}
