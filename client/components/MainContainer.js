import React from "react";
import TotalsDisplay from "./TotalsDisplay";
import Month from "./Month";

//presenational component that will hold the totals box
const MainContainer = ({
  totalIncome,
  totalExpenditures,
  netSavings,
  months,
}) => {
  months: [
    { month: "January", income: 40, expense: 0 },
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
    { month: "Decemver", income: 0, expense: 0 },
  ];

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
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
          <Month months={months} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
