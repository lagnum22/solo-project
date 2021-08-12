import React from "react";

const Month = ({ months, onChange }) => {
  return (
    <div className="month">
      <h3>{months[0].month}</h3>
      <p>
        <strong>Income: </strong>
        <br></br>
        <label>
          <input
            type="text"
            name="name"
            value={months[0].income}
            onChange={onChange}
          />
        </label>
      </p>
      <p>
        <strong>Expense: </strong>
        <label>
          <input type="text" name="name" value={months[0].expense} />
        </label>
      </p>
    </div>
  );
};

export default Month;
