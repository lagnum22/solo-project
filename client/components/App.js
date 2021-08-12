import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         Hello Wes! You successfully bundle!
//         <div className="main-container">
//           <Login />
//         </div>
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      Hello Wes! You successfully bundled!
      <h1 className="header"> Money Tracker</h1>
      <Login />
      <MainContainer />
    </div>
  );
};

export default App;
