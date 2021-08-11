import React, { Component } from "react";
import Month from "./Month";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello Wes! You successfully bundle!
        <div className="main-container">
          <Login />
          {/* <Month />
          <Month />
          <Month /> */}
        </div>
      </div>
    );
  }
}

export default App;
