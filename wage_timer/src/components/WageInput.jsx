export default function WageInput({ wage, onChange }) {
  return (
    <div>
      <p>--WAGE INPUT--</p>
      <input type="number" label="Wage" onChange={onChange} value={wage}></input>
      <p>{wage}</p>
    </div>
  );
}
