import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";

const App = () => {
  return (
    <div>
      Hello Wes! You successfully bundled!
      <h1 className="header"> Money Tracker</h1>
      <Login />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//       username: "",
//       password: "",
//     };
//   }
//   handleSubmit = (e) => {
//     alert(`${this.state.username} and ${this.state.password}`);
//     e.preventDefault();
//   };
//   handleUserChange = (e) => {
//     this.setState({
//       username: e.target.value,
//     });
//   };
//   handlePassChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <div>
//           Hello Wes! You successfully bundled!
//           <h1 className="header"> Money Tracker</h1>
//           <Login
//             onSubmit={this.state.handleSubmit}
//             user={this.state.handleUserChange}
//             pass={this.state.handlePassChange}
//           />
//           <MainContainer />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           Hello Wes! You successfully bundled!
//           <h1 className="header"> Money Tracker</h1>
//           <Login
//             onSubmit={this.state.handleSubmit}
//             user={this.state.handleUserChange}
//             pass={this.state.handlePassChange}
//           />
//         </div>
//       );
//     }
//     // return (
//     //   <div>
//     //     Hello Wes! You successfully bundled!
//     //     <h1 className="header"> Money Tracker</h1>
//     //     <Login />
//     //   </div>
//     // );

//     // return (
//     //   <div>
//     //     Hello Wes! You successfully bundled!
//     //     <h1 className="header"> Money Tracker</h1>
//     //     <Login />
//     //     <MainContainer />
//     //   </div>
//     // );
//   }
// }
