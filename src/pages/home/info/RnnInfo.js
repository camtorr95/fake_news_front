import GraficaWidget from "./widgets/grafica";

const RnnInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center pt-3">
        Información sobre desempeño del modelo de Red Neuronal Recurrente
      </h2>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="Métricas de desempeño"
            source="/rnn/scores.jpeg"
            descripcion="Si bien el porcentaje de casos positivos detectados es amplio, el número de falsos positivos también lo es."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="Reporte de Clasificación"
            source="/rnn/classification_report.jpeg"
            descripcion="La precisión del modelo para la detección de noticias falsas es baja, lo que de cara al objetivo del proyecto lo convierte en un modelo de menor desempeño."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="Descripción de las capas del modelo"
            source="/rnn/model.PNG"
            descripcion=""
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="Histograma del total de palabras por artículo"
            source="/rnn/histograma.png"
            descripcion="Dada la distribución, para el entrenamiento se emplearon artículos con un máximo de 920 palabras (más del 90% de los artículos)."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="Matriz de Confusión"
            source="/rnn/confusion_matrix.jpeg"
            descripcion=""
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="Curva ROC"
            source="/rnn/auc.jpeg"
            descripcion="El área bajo la curva de este modelo es de 0.70"
          />
        </div>
      </div>
    </div>
  );
};

export default RnnInfo;
