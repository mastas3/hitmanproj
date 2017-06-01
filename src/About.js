import React, { Component } from "react";
import image from "./images/Itay.jpg";

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="about-me-page">
        <img className="about-me-image" src={image} onClick={this.props.handleCloseModal}/>
        <div className="social-links">
          <a className="twitter-sign" href="https://twitter.com/itayhoward"><i className="fa fa-twitter"></i></a>
          <a className="facebook-sign" href="https://facebook.com/Itay.Hitman"><i className="fa fa-facebook-official"></i></a>
          <a className="soundcloud-sign" href="http://soundcloud.com/itayhoward"><i className="fa fa-soundcloud"></i></a>
        </div>
      </div>
    );
  }
}
