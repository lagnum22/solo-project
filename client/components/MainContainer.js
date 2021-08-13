import React from "react";
import TotalsDisplay from "./TotalsDisplay";
import Month from "./Month";

//presenational component that will hold the totals box
const MainContainer = ({
  totalIncome,
  totalExpenditures,
  netSavings,
  months,

  setValueState,
}) => {
  return (
    <div className="main-container">
      <TotalsDisplay
        totalIncome={totalIncome}
        totalExpenditures={totalExpenditures}
        netSavings={netSavings}
      />
      <div className="months-container">
        <h1>2021</h1>
        <div className="all-months">
          <Month months={months} setValueState={setValueState} />
          {/* <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
