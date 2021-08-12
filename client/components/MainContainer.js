import React from "react";
import TotalsDisplay from "./TotalsDisplay";
import Month from "./Month";

//presenation component that will hold the totals box
const MainContainer = () => {
  return (
    <div className="main-container">
      <TotalsDisplay />
      <div className="months-container">
        <h1>2021</h1>
        <div className="all-months">
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
    </div>
  );
};

export default MainContainer;
