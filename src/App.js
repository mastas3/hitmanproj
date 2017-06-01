import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from './Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>L</h2>
        </div>
        <p className="App-intro">
          <Player />
        </p>
      </div>
    );
  }
}

export default App;
