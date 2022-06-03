const VariablesWidget = (props) => {
  return (
    <div className="col-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>variable</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.variables).map((entry) => (
            <tr key={entry[0]}>
              <td>{entry[0]}</td>
              <td>{entry[1].toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default VariablesWidget;
