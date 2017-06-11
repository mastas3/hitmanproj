import React, { Component } from "react";
import "./App.css";
import Player from "./Player";
import Modal from "react-modal";
import About from "./About";
import cassette from './sound/cassette.zip'

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
          <li className="download-album"><a href={cassette}>Download the album</a></li>
        </ul>
          <Player />
      </div>
    );
  }
}

export default App;
