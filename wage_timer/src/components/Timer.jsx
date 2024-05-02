import { useEffect } from "react";
import { formattedTime } from "../util/formatting";

export default function Timer({ targetTime, elapsedTime, setElapsedTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => {
        let newTime = prevTime;
        if (prevTime >= targetTime) {
          newTime = targetTime;
          clearInterval(interval);
          console.log("interval cleared");
        } else {
          newTime = prevTime + 100;
        }
        //console.log("timer");
        return newTime;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const time = formattedTime(elapsedTime);

  return (
    <div className="results-sub-section">
      <h3>Time worked</h3>
      <p>{time}</p>
    </div>
  );
}
