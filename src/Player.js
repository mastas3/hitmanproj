import React, { Component } from "react";
import Artwork from "./Artwork";
import Controls from "./Controls";
import TrackInformation from "./TrackInformation";

const style = {
  Player: {
    position: "absolute",
    display: "flex",
    left: "15%",
    border: "1px solid black",
    width: "50%",
    height: "50%",
    padding: "10%",
    background: "#182530"
  }
};

const artworkUrl = "http://i.imgur.com/3FOUIcK.jpg";
const songUrl = "http://google.com";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
  }

  onToggle() {
    this.setState({playing: !this.state.playing})
    console.log(this.state.playing)
  }

  render() {
    return (
      <div class='Player'>
        <Artwork url={artworkUrl} />
        <Controls song={songUrl} onToggle={this.onToggle.bind(this)}/>
      </div>
    );
  }
}
