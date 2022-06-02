const ProbabilityWidget = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>model</th>
          <th>probability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>catboost</td>
          <td>{props.catboost}</td>
        </tr>
        <tr>
          <td>rnn</td>
          <td>{props.rnn}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default ProbabilityWidget;
