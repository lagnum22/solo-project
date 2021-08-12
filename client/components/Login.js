import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="login-div">
        <form>
          <label>
            User Name:
            <input type="text" name="name" />
          </label>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Sign In" />
          <input type="submit" value="New User" />
        </form>
      </div>
    );
  }
}

// const Login = () => {
//   return <div className="login-div"> </div>;
// };

export default Login;
