import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-modal";

const beginURL = "https://dog.ceo/api/breed/";
const endURL = "/images";

const ImageLoad = props => {
  return (
    <div>
      <p className="title-more">
        Pictures of{" "}
        {props.breed.slice(0, 1).toUpperCase() +
          props.breed.slice(1, props.breed.length)}
      </p>
      <div className="image-gallery">
        {props.data.slice(0, props.limit).map(function(data) {
          return (
            <div className="image-gallery">
              <img src={data} className="more-image" />
            </div>
          );
        })}
      </div>
      <button onClick={props.onClick}>Load More</button>
    </div>
  );
};

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: null,
      limit: 6
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 6
    });
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
      <div className="container-more">
        <div className="more-button-div">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="back-button"
          >
            Go Back
          </Link>
        </div>
        <div>
          {!this.state.dogImages ? (
            <p>Loading</p>
          ) : (
            <ImageLoad
              data={this.state.dogImages}
              onClick={this.onLoadMore}
              limit={this.state.limit}
              breed={this.props.location.state.dogBreed}
            />
          )}
        </div>
      </div>
    );
  }
}

export default More;
