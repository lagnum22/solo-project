import React, { Component } from "react";
import MainContainer from "./MainContainer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    alert(`${this.state.username} and ${typeof this.state.password}`);
    //send async request to db
    
    e.preventDefault();
  };
  handleUserChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePassChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const login = (
      <div>
        <div className="login-div">
          <form onSubmit={this.handleSubmit}>
            <span>
              <label>
                User Name:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUserChange}
                />
              </label>
            </span>
            <span>
              <label>
                Password:
                <input type="text" onChange={this.handlePassChange} />
              </label>
            </span>
            <button type="submit">Submit</button>
            <button type="submit"> New User</button>
          </form>
        </div>
      </div>
    );
    if (this.state.isLoggedIn) {
      return (
        <div>
          {login}
          <MainContainer />
        </div>
      );
    } else {
      return <div>{login}</div>;
    } //closes else and big state-if statement
  } //closes render function
}

// const Login = () => {
//   return <div className="login-div"> </div>;
// };

export default Login;
