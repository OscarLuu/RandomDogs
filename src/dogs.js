import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const API = "https://dog.ceo/api/breed/";
const endAPI = "/images/random";

function Title() {
  return (
    <div>
      <h1 className="Title">Random Dog Image by Breed</h1>
    </div>
  );
}

function DogImage(props) {
  return (
    <div>
      <img className="dog" src={props.url} />
    </div>
  );
}

class Weather extends React.Component {
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
        console.log(array);
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
          <label>
            Pick a dog breed and get a random image:
            <select
              className="select"
              value={this.state.dogSelected}
              onChange={this.handleChange}
            >
              <option selected disabled />
              {this.state.dogs.map(function(dog) {
                return (
                  <option key={dog} value={dog}>
                    {dog.slice(0, 1).toUpperCase() + dog.slice(1, dog.length)}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
        <DogImage url={this.state.dogImg} />
        <Link
          className="button"
          to={{
            pathname: "/moredogs",
            search: `?dog=` + this.state.dogSelected,
            state: {
              dogBreed: this.state.dogSelected
            }
          }}
        >
          {" "}
          More{" "}
        </Link>
      </div>
    );
  }
}

export default Weather;
