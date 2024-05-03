import { currencyFormatter, toTwoDecimals } from "../util/formatting";
import items from "../data/items";
import { useState, useEffect } from "react";

export default function Results({ elapsedTime, wage }) {
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemIndex( (prevIndex) => (prevIndex + 1) % items.length);
    }, 5000)
    return () => clearInterval(interval);
  }, []);

  function resultItem() {
    const amount = (wage / 60 / 60 / 1000) * elapsedTime;

    function changeItemHandler() {
      setItemIndex((itemIndex + 1) % items.length);
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
          <h3>That could get you </h3>
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
