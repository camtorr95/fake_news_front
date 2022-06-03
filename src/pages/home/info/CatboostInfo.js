import GraficaWidget from "./widgets/grafica";

const CatboostInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center pt-3">Información sobre desempeño del modelo Catboost</h2>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="Métricas de desempeño"
            source="/catboost/scores.PNG"
            descripcion="Se evidencian valores superiores a 0.70 para todos las métricas."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="Reporte de Clasificación"
            source="/catboost/classification_report.PNG"
            descripcion="No se observan diferencias importantes entre clases"
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="Matriz de Confusión"
            source="/catboost/confusion_matrix.png"
            descripcion=""
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="Curva ROC"
            source="/catboost/auc.png"
            descripcion="El área bajo la curva de este modelo es de 0.83"
          />
        </div>
      </div>
      <div className="row">
        <GraficaWidget
          header="Características relevantes para el modelo"
          source="/catboost/feature_importance.png"
          descripcion="El número de palabras y el índice de subjetividad son las variables más influyentes del Título; del texto las oraciones, su longitud promedio y la proporción de palabras únicas demuestran ser altamente representativas"
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
