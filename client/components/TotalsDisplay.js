import React from "react";
//you'll be able to update the 0's to be the prop values from the states

const TotalsDisplay = ({
  totalIncome,
  totalExpenditures,
  netSavings,
  months,
}) => (
  <div className="total-box">
    <p>
      <strong>Total Yearly Income: </strong>
      {totalIncome}
    </p>
    <p>
      <strong>Total Yearly Expenditures: </strong>
      {totalExpenditures}
    </p>
    <p>
      <strong>Net Savings: </strong>
      {netSavings}
    </p>
  </div>
);
export default TotalsDisplay;
