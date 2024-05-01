import { useState } from "react";
export default function WageInput() {
  const [enteredWage, setEnteredWage] = useState(0);

  function wageInputHandler(event) {
    setEnteredWage(event.target.value);
  }

  return (
    <div>
      <p>--WAGE INPUT--</p>

      <form>
        <label htmlFor="wage">Wage/h: </label>
        <input
          type="number"
          id="wage"
          name="wage"
          onChange={wageInputHandler}
          value={enteredWage}
        ></input>

        <label htmlFor="time">Time: </label>
        <input
          type="date"
          id="time"
          name="time"
          onChange={() => {}}
          value={0}
        ></input>

        <span>
          <p>{enteredWage}</p>
          <button>Set</button>
        </span>
      </form>
    </div>
  );
}
