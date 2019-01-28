import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const beginURL = "https://dog.ceo/api/breed/";
const endURL = "/images";

const ImageLoad = props => {
  return (
    <div>
      <p>
        {props.data.map(function(data) {
          return (
            <div className="image-gallery">
              <img src={data} className="image-sizing" />
            </div>
          );
        })}
      </p>
    </div>
  );
};

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: null
    };
  }

  componentDidMount() {
    const breed = this.props.location.state.dogBreed;
    const apiURL = beginURL + breed + endURL;
    fetch(apiURL)
      .then(response => response.json())
      .then(response => this.setState({ dogImages: response.message }));
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Go back</Link>
        {!this.state.dogImages ? (
          <p>Loading</p>
        ) : (
          <ImageLoad data={this.state.dogImages} />
        )}
      </div>
    );
  }
}

export default More;
