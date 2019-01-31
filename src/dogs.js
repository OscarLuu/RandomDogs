import React, { Component } from "react";
import Modal from "react-modal";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://dog.ceo/api/breed/";
const endAPI = "/images/random";

function Title() {
  return (
    <div>
      <p className="title">Random Dog Pictures</p>
    </div>
  );
}

class DogImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="image-div">
        <img
          src={this.props.url}
          className="image"
          onClick={this.handleOpenModal}
        />
        <Modal isOpen={this.state.showModal}>
          <img src={this.props.url} onClick={this.handleCloseModal} />
        </Modal>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      dogSelected: "",
      dogImg: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      dogSelected: e.target.value
    });
    fetch(API + e.target.value + endAPI)
      .then(response => response.json())
      .then(responseJson => {
        const array = Object.values(responseJson);
        this.setState({
          dogImg: array[1]
        });
      });
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(responseJson => {
        const array = Object.keys(responseJson.message);
        this.setState({
          dogs: array
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Title />
        <form>
          <label className="text">
            Pick a dog breed and get a random image:
            <select
              value={this.state.dogSelected}
              onChange={this.handleChange}
              className="select"
            >
              <option selected disabled className="options" />
              {this.state.dogs.map(function(dog) {
                return (
                  <option key={dog} value={dog} className="options">
                    {dog.slice(0, 1).toUpperCase() + dog.slice(1, dog.length)}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
        <DogImage url={this.state.dogImg} />
        <div className="button-div">
          {!this.state.dogSelected ? null : (
            <Link
              to={{
                pathname: "/moredogs",
                search: `?dog=` + this.state.dogSelected,
                state: {
                  dogBreed: this.state.dogSelected
                }
              }}
              className="more-button"
            >
              {" "}
              More Dogs{" "}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
