import React, { Component } from "react";
import Dogs from "./dogs";
import More from "./more";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dogs} />
          <Route path="/moredogs" component={More} />
        </div>
      </Router>
    );
  }
}

export default App;
