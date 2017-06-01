import React, { Component } from "react";
import "./App.css";
import Player from "./Player";
import Modal from "react-modal";
import About from "./About";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    console.log('click')
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <ul className="top-buttons">
          <li className="about-me-button" onClick={this.handleOpenModal}>
            Find me
          </li>
          <Modal isOpen={this.state.showModal} style={customStyles}>
            <div onClick={this.handleCloseModal} className="close-modal">X</div>
            <About handleCloseModal={this.handleCloseModal.bind(this)} />
          </Modal>
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
