import GraficaWidget from "./widgets/grafica";

const CatboostInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center pt-3">Información sobre el Catboost</h2>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/catboost/scores.PNG"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/catboost/classification_report.PNG"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/catboost/confusion_matrix.png"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/catboost/auc.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <div className="row">
        <GraficaWidget
          header="HEADER"
          source="/catboost/feature_importance.png"
          descripcion="DESCRIPCION."
        />
      </div>
      <div className="col text-center">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Importancia</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(props.featureImportance).map((entry) => (
              <tr
                key={entry[0]}
                className={entry[1] > 8 ? "table-success" : "table-secondary"}
              >
                <td>{entry[0]}</td>
                <td>{entry[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatboostInfo;
