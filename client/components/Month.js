import React from "react";

const Month = ({ months, setValueState }) => {
  const incomeHandler = (e) => {
    //PASS AN INDEX AS SECOND VARIABLE
    setValueState(e.target.value);
  };

  //use indicies to reference each month state
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
            defaultValue={months[0].income}
            onChange={incomeHandler}
          />
        </label>
      </p>
      <p>
        <strong>Expense: </strong>
        <label>
          <input type="text" name="name" defaultValue={months[0].expense} />
        </label>
      </p>
    </div>
  );
};

export default Month;
