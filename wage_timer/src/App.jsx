import "./App.css";
import Timer from "./components/Timer";
import WageInput from "./components/WageInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [enteredWage, setEnteredWage] = useState(0);
  const [enteredTime, setEnteredTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWageInput, setShowWageInput] = useState(true);

  function wageInputHandler(event) {
    setEnteredWage(event.target.value);
  }

  function timeInputHandler(event) {
    const toMili = event.target.value*1000*60*60;
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
    <>
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
          <button onClick={showTimerHandler}>Start again</button>
          <Timer targetTime={enteredTime * 1000} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime}></Timer>
          <Results elapsedTime={elapsedTime} wage={enteredWage}></Results>
        </>
      )}
    </>
  );
}

export default App;
