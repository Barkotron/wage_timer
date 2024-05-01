
import "./App.css";
import Timer from "./components/Timer";
import WageInput from "./components/WageInput";

function App() {

  
  return (
    <>
      <Timer initialTime={10000}></Timer>
      <WageInput></WageInput>
    </>
  );
}

export default App;
