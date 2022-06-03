const NGramsWidget = (props) => {
  return (
    <div className="col">
      <div className="card border-secondary mb-3">
        <div className="card-header">{props.header}</div>
        <table className="table table-hover mb-3">
          <thead className="table-secondary">
            <tr>
              <th>N-gram</th>
              <th>Frecuencia</th>
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
      </div>
    </div>
  );
};
export default NGramsWidget;
