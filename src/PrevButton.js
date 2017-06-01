import React, { Component } from "react";

export default class PrevButton extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Button">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    )
  }
}
