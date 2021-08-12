import React from "react";

const Month = () => {
  return (
    <div className="month">
      <h3>Month</h3>
      <p>
        <strong>Income: </strong>
        <br></br>
        <label>
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <strong>Expense: </strong>
        <label>
          <input type="text" name="name" />
        </label>
      </p>
    </div>
  );
};

export default Month;
