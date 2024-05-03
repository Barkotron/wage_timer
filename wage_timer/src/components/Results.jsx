import { currencyFormatter, toTwoDecimals } from "../util/formatting";
import items from "../data/items";
import { useState, useEffect, useRef } from "react";

export default function Results({ elapsedTime, wage }) {
  const [itemIndex, setItemIndex] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemIndex(Math.floor(Math.random() * items.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [reset]);

  function resultItem() {
    const amount = (wage / 60 / 60 / 1000) * elapsedTime;

    function changeItemHandler() {
      setItemIndex(randomChoice());
      setReset(!reset);
    }

    function randomChoice() {
      return Math.floor(Math.random() * items.length);
    }

    return (
      <>
        <div className="results-sub-section">
          <h3>You've made</h3>
          <p>{currencyFormatter.format(amount)}</p>
        </div>

        <div
          className="results-sub-section clickable-section"
          onClick={changeItemHandler}
        >
          <h3>You could get</h3>
          <p>
            {toTwoDecimals(amount / items[itemIndex].price)}{" "}
            {items[itemIndex].name}
          </p>
        </div>
      </>
    );
  }

  return resultItem();
}
