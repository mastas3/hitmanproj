import React, { Component } from "react";

export default class NextButton extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Button">
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    )
  }
}
