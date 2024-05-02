import { currencyFormatter } from "../util/formatting";
export default function Results({ elapsedTime, wage }) {
  function resultItem() {
    const amount = (wage/60/60/1000) * (elapsedTime);

    return (
      <>
        <p>You've been working hard! you have made:</p>
        <p>{currencyFormatter.format(amount)}</p>
      </>
    );
  }

  return resultItem();
}
