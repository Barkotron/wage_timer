import { currencyFormatter, toTwoDecimals } from "../util/formatting";
import items from "../data/items";

export default function Results({ elapsedTime, wage }) {
  function resultItem() {
    const amount = (wage/60/60/1000) * (elapsedTime);

    const index = 8;

    return (
      <>
        <p>You've been working hard! you have made:</p>
        <p>{currencyFormatter.format(amount)}</p>

        <p>That could get you: </p>
        <p>{toTwoDecimals(amount/items[index].price)} {items[index].name}</p>
      </>
    );
  }

  return resultItem();
}
