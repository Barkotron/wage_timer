export default function WageInput({ formSubmit }) {
  return (
    <div className="results-sub-section">
      <h3>Wage Input</h3>
      <form onSubmit={formSubmit} id="wage-input-form">
        <div className="form-field">
          <label htmlFor="wage">Wage/h: </label>
          <input type="number" id="wage" name="wage" required step="0.05" min="0"></input>
        </div>

        <div className="form-field">
          <label htmlFor="time">Hours: </label>
          <input type="number" id="time" name="time" required step="0.05" min="0" ></input>
        </div>

        <div id="go">
          <button type="submit">Go!</button>
        </div>
      </form>
    </div>
  );
}
