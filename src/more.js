import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const beginURL = "https://dog.ceo/api/breed/";
const endURL = "/images";

const ImageLoad = props => {
  return (
    <div>
      {props.data.slice(0, props.limit).map(function(data) {
        return (
          <div>
            <img src={data} />
          </div>
        );
      })}
      <button onClick={props.onClick}>Load More</button>
    </div>
  );
};

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: null,
      limit: 5
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 5
    });
    console.log(this.state.limit);
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
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            Go back
          </Link>
        </div>
        {!this.state.dogImages ? (
          <p>Loading</p>
        ) : (
          <ImageLoad
            data={this.state.dogImages}
            onClick={this.onLoadMore}
            limit={this.state.limit}
          />
        )}
      </div>
    );
  }
}

export default More;
