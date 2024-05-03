import { useEffect } from "react";
import { formattedTime } from "../util/formatting";
import ProgressBar from "./ProgressBar";

export default function Timer({ targetTime, elapsedTime, setElapsedTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => {
        let newTime = prevTime;
        if (prevTime >= targetTime) {
          newTime = targetTime;
          clearInterval(interval);
        } else {
          newTime = prevTime + 100;
        }
        return newTime;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [targetTime]);

  const time = formattedTime(elapsedTime);

  return (
    <div className="results-sub-section progress-bar">
      <h3>Time worked</h3>
      <p>{time}</p>
      {/*<input type="range" min={0} max={targetTime} value={elapsedTime}></input>*/}
      <ProgressBar percent={elapsedTime/targetTime}></ProgressBar>
    </div>
    
  );
}
