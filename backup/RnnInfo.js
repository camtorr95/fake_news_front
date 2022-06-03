import GraficaWidget from "./widgets/grafica";

const RnnInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center pt-3">Información sobre la RNN</h2>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/scores.jpeg"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/classification_report.jpeg"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/model.PNG"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/histograma.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/confusion_matrix.jpeg"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-center">
          <GraficaWidget
            header="HEADER"
            source="/rnn/auc.jpeg"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
    </div>
  );
};

export default RnnInfo;
