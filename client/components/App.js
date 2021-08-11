import React, { Component } from "react";
import Month from "./Month";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello Wes! You successfully bundled!
        <div className="main-container">
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
          <Month />
        </div>
      </div>
    );
  }
}

export default App;
