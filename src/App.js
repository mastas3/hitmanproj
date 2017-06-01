import React, { Component } from "react";
import "./App.css";
import Player from "./Player";
import About from "./About";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <ul className="top-buttons">
          <li className="about-me-button">About me</li>
          <li className="download-album">Download the album</li>
        </ul>
        <p className="App-intro">
          <Player />
        </p>
      </div>
    );
  }
}

export default App;
