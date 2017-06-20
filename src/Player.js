import React, { Component } from "react";
import Controls from "./Controls";
import TrackInformation from "./TrackInformation";
import PubSub from "./pubsub";
import background from "./images/cassette.jpg";
import track35 from "./sound/35.mp3";
import track35beat from "./sound/35 beat.mp3";
import Anachronism from "./sound/Anachronism.mp3";
import Anachronismbeat from "./sound/Anachronism beat.mp3";
import Nothing from "./sound/Nothing.mp3";
import Nothingbeat from "./sound/Nothing beat.mp3";
import staticp from "./sound/static.mp3";
import staticbeat from "./sound/static beat.mp3";
import MusicSlider from "./MusicSlider";

const lengthInMs = lengthInStr => {
  let timeArr = lengthInStr.split(":");
  return timeArr[0]*60*1000 + timeArr[1] * 1000;
};

const TRACKS = [
  {
    id: 0,
    name: "35",
    url: track35,
    album: "Hitman",
    artist: "Hitman",
    length: "03:03",
    lengthInMs: lengthInMs("03:03"),
  },
  {
    id: 1,
    name: "35 Beat",
    url: track35beat,
    album: "Hitman",
    artist: "Hitman",
    length: "03:03",
    lengthInMs: lengthInMs("03:03"),
  },
  {
    id: 2,
    name: "Anachronism",
    url: Anachronism,
    album: "Hitman",
    artist: "Hitman",
    length: "03:50",
    lengthInMs: lengthInMs("03:50"),
  },
  {
    id: 3,
    name: "Anachronism beat (624 part2)",
    url: Anachronismbeat,
    album: "Hitman",
    artist: "Hitman",
    length: "03:50",
    lengthInMs: lengthInMs("03:50"),
  },
  {
    id: 4,
    name: "Nothing",
    url: Nothing,
    album: "Hitman",
    artist: "Hitman",
    length: "02:01",
    lengthInMs: lengthInMs("02:01"),
  },
  {
    id: 5,
    name: "Nothing beat",
    url: Nothingbeat,
    album: "Hitman",
    artist: "Hitman",
    length: "03:58",
    lengthInMs: lengthInMs("03:58"),
  },
  {
    id: 6,
    name: "Static",
    url: staticp,
    album: "Hitman",
    artist: "Hitman",
    length: "03:28",
    lengthInMs: lengthInMs("03:28"),
  },
  {
    id: 7,
    name: "Static beat",
    url: staticbeat,
    album: "Hitman",
    artist: "Hitman",
    length: "03:28",
    lengthInMs: lengthInMs("03:28"),
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
    this.state.playStatus ? PubSub.publish('onPause', 'stuff') : PubSub.publish('onPlay');
  }

  nextTrack() {
    this.setState({
      currentTrack: this.state.currentTrack.id + 1 < TRACKS.length
        ? TRACKS[this.state.currentTrack.id + 1]
        : TRACKS[0],
      playStatus: false
    });
    PubSub.publish('onNextTrack');
    document.getElementById("audio").src = this.state.currentTrack.url;
  }

  previousTrack() {
    this.setState({
      currentTrack: this.state.currentTrack.id - 1 < 0
        ? TRACKS[7]
        : TRACKS[this.state.currentTrack.id - 1],
      playStatus: false
    });
    document.getElementById("audio").src = this.state.currentTrack.url;
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
    console.log(this.state.currentTrack);
    return (
      <div className="Player">
        <div
          className="Artwork"
          style={{ backgroundImage: "url(" + background + ")" }}
        />
        <MusicSlider {...this.state.currentTrack} />
        {/* <div className="songfInfo">{`${this.state.currentTrack.id + 1} / ${TRACKS.length}`}</div> */}
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
