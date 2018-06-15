import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../HomePage';

import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
