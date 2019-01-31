import React, { Component } from "react";
import Dogs from "./dogs";
import More from "./more";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/RandomDogs/" component={Dogs} />
            <Route path="/moredogs" component={More} />
            <Route
              render={() => {
                return (
                  <div className="container">
                    <p className="title"> 404! Sorry page not found.</p>
                    <div className="button-div">
                      <Link to="/RandomDogs/" className="button">
                        {" "}
                        Go Home{" "}
                      </Link>
                    </div>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
