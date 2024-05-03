import "./App.css";
import Timer from "./components/Timer";
import WageInput from "./components/WageInput";
import Results from "./components/Results";
import { useState } from "react";
import Header from "./components/Header";
import { currencyFormatter, hoursToMiliseconds } from "./util/formatting";

function App() {
  const [enteredWage, setEnteredWage] = useState(0);
  const [enteredTime, setEnteredTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWageInput, setShowWageInput] = useState(true);

  function handleFormSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    setShowWageInput(false);

    setEnteredWage(data.wage);
    setEnteredTime(hoursToMiliseconds(data.time));

    console.log(data);
  }

  function restartHandler() {

    setElapsedTime(0);
    setShowWageInput(true);
  }

  return (
    <div>
      <Header></Header>
      {showWageInput ? (
        <WageInput formSubmit={handleFormSubmit}></WageInput>
      ) : (
        <>
          <div>
            <button onClick={restartHandler}>Start Over</button>
          </div>
          <div id="main-section">
            <Timer
              targetTime={enteredTime}
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
