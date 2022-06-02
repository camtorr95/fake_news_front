const NGramsWidget = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>n-gram</th>
          <th>frequency</th>
        </tr>
      </thead>
      <tbody>
        {props.ngrams.map((element) => (
          <tr key={element[0]}>
            <td>{element[0]}</td>
            <td>{element[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default NGramsWidget;
