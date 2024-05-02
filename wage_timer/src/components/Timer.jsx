import { useEffect, useState } from "react";

export default function Timer({ targetTime, elapsedTime, setElapsedTime }) {
  //const [time, setTime] = useState(0);

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
        console.log("timer");
        return newTime;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>--TIMER--</p>
      <p>{elapsedTime / 1000}</p>
    </div>
  );
}
