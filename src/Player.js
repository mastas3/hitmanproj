import React, { Component } from "react";
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
const { SoundCloudLogoSVG } = Icons;

export default class Player extends Component {
  render() {
    return (
      <PlayButton
        playing={false}
      />
    )
  }
}
