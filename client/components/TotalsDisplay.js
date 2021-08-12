import React from "react";
//you'll be able to update the 0's to be the prop values from the states

const TotalsDisplay = ({ totIncome, totExpense, netSavings }) => (
  <div className="total-box">
    <p>
      <strong>Total Income: </strong>0
    </p>
    <p>
      <strong>Total Expenditures: </strong>0
    </p>
    <p>
      <strong>Net Savings: </strong>0
    </p>
  </div>
);
export default TotalsDisplay;
