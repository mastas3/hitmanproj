import React, { Component } from "react";
import image from "./images/Itay.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="about-me-page">
        <img className="about-me-image" src={image} />
      </div>
    );
  }
}
