const VariablesWidget = (props) => {
  return (
    <table>
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
            <td>{entry[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default VariablesWidget;
