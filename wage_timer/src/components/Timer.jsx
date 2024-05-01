import { useEffect, useState } from "react";

export default function Timer({initialTime}) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
        
      setTime((prevTime) => prevTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>--TIMER--</p>
      <p>{time/1000}</p>
    </div>
  );
}
