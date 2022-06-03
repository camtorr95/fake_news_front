import SingleValueWidget from "./widgets/probability";
import NGramsWidget from "./widgets/ngrams";
import VariablesWidget from "./widgets/variables";

const ResultsPanel = (props) => {
  if (props.hasResults) {
    return (
      <div className="container text-center pt-3">
        <h1>Resultados</h1>
        <div className="row">
          <div className="col">
            <h2>{props.headline}</h2>
          </div>
          <div className="col">
            <h2>{props.topic}</h2>
          </div>
        </div>
        <div className="row">
          <SingleValueWidget
            header="Catboost Probability"
            value={props.results.probability.catboost}
            footer="Probabilidad de ser un artículo falso, basada en ensambles de árboles"
          ></SingleValueWidget>
          <SingleValueWidget
            header="RNN Probability"
            value={props.results.probability.rnn}
            footer="Probabilidad de ser un artículo falso, Probabilidad basada en redes neuronales"
          ></SingleValueWidget>
          <div></div>
        </div>
        <div className="row">
          <NGramsWidget
            header="Bigrams"
            ngrams={props.results.ngrams.text_bigrams}
          ></NGramsWidget>
          <NGramsWidget
            header="Trigrams"
            ngrams={props.results.ngrams.text_trigrams}
          ></NGramsWidget>
        </div>
        <div className="row">
          <SingleValueWidget
            header="Headline Polarity"
            value={props.results.sentiment.headline.polarity}
            footer="Polaridad del Título"
          ></SingleValueWidget>
          <SingleValueWidget
            header="Headline Subjetivity"
            value={props.results.sentiment.headline.subjetivity}
            footer="Subjetividad del Título"
          ></SingleValueWidget>
        </div>
        <div className="row">
          <SingleValueWidget
            header="Text Polarity"
            value={props.results.sentiment.text.polarity}
            footer="Polaridad promedio del artículo"
          ></SingleValueWidget>
          <SingleValueWidget
            header="Text Subjetivity"
            value={props.results.sentiment.text.subjetivity}
            footer="Subjetividad promedio del artículo"
          ></SingleValueWidget>
        </div>
        <div className="row text-center">
          <VariablesWidget
            variables={props.results.variables}
          ></VariablesWidget>
        </div>
      </div>
    );
  } else {
    return <h2>No se ha procesado ningún artículo</h2>;
  }
};

export default ResultsPanel;
