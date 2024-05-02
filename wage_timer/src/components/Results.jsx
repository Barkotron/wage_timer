export default function Results({ elapsedTime, wage }) {
  function resultItem() {
    const amount = Math.round((wage*(elapsedTime/1000)) * 10 ** 2) / 10 ** 2;
    
    return <p>You've been working hard! you have made ${amount}!</p>;
  }

  return resultItem();
}
