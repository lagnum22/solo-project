import React, { Component } from "react";
import MainContainer from "./MainContainer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      username: "",
      password: "",
      totalIncome: 1000000,
      totalExpenditures: 300,
      netSavings: function () {
        return this.totalIncome - this.totalExpenditures;
      },
      months: [
        { month: "January", income: 0, expense: 0 },
        { month: "February", income: 0, expense: 0 },
        { month: "March", income: 0, expense: 0 },
        { month: "April", income: 0, expense: 0 },
        { month: "May", income: 0, expense: 0 },
        { month: "June", income: 0, expense: 0 },
        { month: "July", income: 0, expense: 0 },
        { month: "August", income: 0, expense: 0 },
        { month: "September", income: 0, expense: 0 },
        { month: "October", income: 0, expense: 0 },
        { month: "November", income: 0, expense: 0 },
        { month: "December", income: 0, expense: 0 },
      ],
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
  setValueState = (value, INDEX) => {
    //access correct property
    //there is a difference betwen setting state and handling event
    //we can pass the functionailty to change the state down, but where the event is taking place has exist in that component.
    //pass an index here
    this.setState((this.state.months[0].income = value));
    console.log(this.state);
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
                <input type="password" onChange={this.handlePassChange} />
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
          <MainContainer
            totalIncome={this.state.totalIncome}
            totalExpenditures={this.state.totalExpenditures}
            netSavings={this.state.netSavings()}
            months={this.state.months}
            setValueState={this.setValueState}
          />
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
