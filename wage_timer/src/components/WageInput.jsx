export default function WageInput({
  wage,
  time,
  wageInput,
  timeInput,
  formSubmit,
}) {
  return (
    <div className="results-sub-section">
      <h3>Wage Input</h3>
      <form onSubmit={formSubmit} id="wage-input-form">
        <div className="form-field">
          <label htmlFor="wage">Wage/h: </label>
          <input
            type="number"
            id="wage"
            name="wage"
            required
            onChange={wageInput}
            value={wage}
          ></input>
        </div>

        <div className="form-field">
          <label htmlFor="time">Hours: </label>
          <input
            type="number"
            id="time"
            name="time"
            required
            onChange={timeInput}
            //value={time}
          ></input>
        </div>

        <div>
          <button type="submit">Go!</button>
        </div>
      </form>
    </div>
  );
}
