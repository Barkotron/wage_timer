import { useEffect } from "react";

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

  function formattedTime() {
    const h = Math.floor(elapsedTime / 1000 / 60 / 60);
    const m = Math.floor((elapsedTime / 1000 / 60 / 60 - h) * 60);
    const s = Math.floor(((elapsedTime / 1000 / 60 / 60 - h) * 60 - m) * 60);

    const formattedTime = `${h}:${m}:${s}`;

    return formattedTime;
  }

  return (
    <div>
      <p>--TIMER--</p>
      <p>{formattedTime()}</p>
    </div>
  );
}
