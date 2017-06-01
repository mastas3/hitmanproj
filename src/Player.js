import React, { Component } from "react";
import Controls from "./Controls";
import TrackInformation from "./TrackInformation";
import background from "./images/cassette.jpg";
import audioSource from "./sound/bells.wav";
import track35 from "./sound/35.mp3";
import track35beat from "./sound/35 beat.mp3";

const TRACKS = [
  {
    id: 0,
    name: "35",
    url: track35,
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 1,
    name: "35 Beat",
    url: track35beat,
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 2,
    name: "Anachronism",
    url: audioSource,
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 3,
    name: "Anachronism beat (624 part2)",
    url: "http://google.com",
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 4,
    name: "Nothing",
    url: "http://google.com",
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 5,
    name: "Nothing beat",
    url: "http://google.com",
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 6,
    name: "static",
    url: "http://google.com",
    album: "Hitman",
    artist: "Hitman"
  },
  {
    id: 7,
    name: "static beat",
    url: "http://google.com",
    album: "Hitman",
    artist: "Hitman"
  }
];

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: false,
      currentTrack: TRACKS[0]
    };
  }

  onToggle() {
    this.setState({ playStatus: !this.state.playStatus });
    this.state.playStatus ? this.pauseTrack() : this.playTrack();
  }

  nextTrack() {
    this.setState({
      currentTrack: this.state.currentTrack.id + 1 < TRACKS.length
        ? TRACKS[this.state.currentTrack.id + 1]
        : TRACKS[0],
        playStatus: false
    });
    document.getElementById('audio').src = this.state.currentTrack.url
  }

  previousTrack() {
    this.setState({
      currentTrack: this.state.currentTrack.id - 1 < 0
        ? TRACKS[7]
        : TRACKS[this.state.currentTrack.id - 1],
        playStatus: false
    });
    document.getElementById('audio').src = this.state.currentTrack.url
  }

  playTrack() {
    let audio = document.getElementById("audio");
    audio.src = this.state.currentTrack.url;
    audio.play();
  }

  pauseTrack() {
    let audio = document.getElementById("audio");
    audio.pause();
  }

  render() {
    console.log(this.state.currentTrack)
    return (
      <div className="Player">
        <div
          className="Artwork"
          style={{ backgroundImage: "url(" + background + ")" }}
        />
        <TrackInformation {...this.state.currentTrack} />
        <Controls
          playStatus={this.state.playStatus}
          onToggle={this.onToggle.bind(this)}
          previousTrack={this.previousTrack.bind(this)}
          nextTrack={this.nextTrack.bind(this)}
        />
        <audio id="audio"><source src={this.state.currentTrack.url} /></audio>
      </div>
    );
  }
}
