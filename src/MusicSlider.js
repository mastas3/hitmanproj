import React, { Component } from "react";

export default class MusicSlider extends Component {
  render() {
    return (
      <div>
        <form>
          <input value="0" type="range" name="musicslider" />
        </form>
      </div>
    )
  }
}
