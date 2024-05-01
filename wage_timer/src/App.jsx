import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import WageInput from "./components/WageInput";

function App() {

  const [enteredWage, setEnteredWage] = useState(0);

  function wageInputHandler(event)
  {
    setEnteredWage(event.target.value);
  }

  return (
    <>
      <Timer></Timer>
      <WageInput wage={enteredWage} onChange={wageInputHandler}></WageInput>
    </>
  );
}

export default App;
