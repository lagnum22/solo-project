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
    // alert(`${this.state.username} and ${typeof this.state.password}`);
    console.log(
      `${typeof this.state.username} and ${typeof this.state.password}`
    );
    console.log("values:", `${this.state.username} and ${this.state.password}`);
    //send async request to db
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("this is data you are receiving ;", data);
        if (data === true) {
          this.setState({ isLoggedIn: data });

          // this.setState({ password: "" });
        }
      });
    this.setState({ password: "" });
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

export default Login;

// const Login = () => {
//   return <div className="login-div"> </div>;
// };

// handleSubmit = (e) => {
//   // alert(`${this.state.username} and ${typeof this.state.password}`);
//   console.log(
//     `${typeof this.state.username} and ${typeof this.state.password}`
//   );
//   //send async request to db
//   fetch("/login", {
//     method: "POST",
//     body: JSON.stringify({
//       username: this.state.username,
//       password: this.state.password,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("this is data you are receiving ;", data);
//       this.setState({ isLoggedIn: data });
//     });

//   e.preventDefault();
// };
