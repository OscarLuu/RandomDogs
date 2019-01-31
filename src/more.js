import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "react-modal";

const beginURL = "https://dog.ceo/api/breed/";
const endURL = "/images";

// const ImageLoad = props => {
//   return (
//     <div>
//       <p className="title-more">
//         Pictures of{" "}
//         {props.breed.slice(0, 1).toUpperCase() +
//           props.breed.slice(1, props.breed.length)}
//         s
//       </p>
//       <div className="image-gallery">
//         {props.data.slice(0, props.limit).map(function(data) {
//           return (
//             <div className="image-gallery">
//               <img src={data} className="more-image" />
//             </div>
//           );
//         })}
//       </div>
//       <div className="button-center">
//         <button onClick={props.onClick} className="button">
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// };

class ImageLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <p className="title-more">
          Pictures of{" "}
          {this.props.breed.slice(0, 1).toUpperCase() +
            this.props.breed.slice(1, this.props.breed.length)}
          s
        </p>
        <div className="image-gallery">
          {this.props.data.slice(0, this.props.limit).map(data => {
            return (
              <div className="image-gallery">
                <img
                  src={data}
                  className="more-image"
                  onClick={this.handleOpenModal}
                />
                <Modal isOpen={this.state.showModal}>
                  <img src={data} onClick={this.handleCloseModal} />
                </Modal>
              </div>
            );
          })}
        </div>
        <div className="button-center">
          <button onClick={this.props.onClick} className="button">
            Load More
          </button>
        </div>
      </div>
    );
  }
}

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
