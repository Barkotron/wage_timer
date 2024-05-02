export default function WageInput({
  wage,
  time,
  wageInput,
  timeInput,
  formSubmit,
}) {
  return (
    <div>
      <p>--WAGE INPUT--</p>

      <form onSubmit={formSubmit}>
        <label htmlFor="wage">Wage/h: </label>
        <input
          type="number"
          id="wage"
          name="wage"
          required
          onChange={wageInput}
          value={wage}
        ></input>

        <label htmlFor="time">Hours: </label>
        <input
          type="number"
          id="time"
          name="time"
          required
          onChange={timeInput}
          value={time}
        ></input>

        <p>
          <button type="submit">Go!</button>
        </p>
      </form>
    </div>
  );
}
