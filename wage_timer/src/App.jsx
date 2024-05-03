import "./App.css";
import Timer from "./components/Timer";
import WageInput from "./components/WageInput";
import Results from "./components/Results";
import { useState } from "react";
import Header from "./components/Header";
import { currencyFormatter } from "./util/formatting";

function App() {
  const [enteredWage, setEnteredWage] = useState(0);
  const [enteredTime, setEnteredTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWageInput, setShowWageInput] = useState(true);

  function wageInputHandler(event) {
    setEnteredWage(event.target.value);
  }

  function timeInputHandler(event) {
    const toMili = event.target.value * 1000 * 60 * 60;
    setEnteredTime(toMili);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    setShowWageInput(false);
    console.log(data);
  }

  function showTimerHandler() {
    setShowWageInput(true);
  }

  return (
    <div>
      <Header></Header>
      {showWageInput ? (
        <WageInput
          wage={enteredWage}
          time={enteredTime}
          wageInput={wageInputHandler}
          timeInput={timeInputHandler}
          formSubmit={handleFormSubmit}
        ></WageInput>
      ) : (
        <>
          <div id="main-section">
              <Timer
                targetTime={enteredTime * 1000}
                elapsedTime={elapsedTime} 
                setElapsedTime={setElapsedTime}
              ></Timer>
              <div className="results-sub-section">
                <h3>Wage</h3>
                <p>{currencyFormatter.format(enteredWage)}/h</p>
              </div>
            <Results elapsedTime={elapsedTime} wage={enteredWage}></Results>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
