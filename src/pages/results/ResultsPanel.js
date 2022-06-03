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
            color="green"
            header="Catboost Probability"
            value={props.results.probability.catboost}
            description="Probabilidad de ser un artículo falso, basada en ensambles de árboles"
          ></SingleValueWidget>
          <SingleValueWidget
            header="RNN Probability"
            value={props.results.probability.rnn}
            description="Probabilidad de ser un artículo falso, Probabilidad basada en redes neuronales"
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
            description="La Polaridad busca determinar si el sentimiento expresado en el texto es positivo (1), neutral (0) o negativo (-1)"
          ></SingleValueWidget>
          <SingleValueWidget
            header="Headline Subjetivity"
            value={props.results.sentiment.headline.subjetivity}
            description="La Subjetividad busca indicar el grado de opinión del texto, donde cero (0) es un valor neutral"
          ></SingleValueWidget>
        </div>
        <div className="row">
          <SingleValueWidget
            header="Text Polarity"
            value={props.results.sentiment.text.polarity}
            description="La Polaridad busca determinar si el sentimiento expresado en el texto es positivo (1), neutral (0) o negativo (-1). Aqui se promedia el sentimiento de todas las frases."
          ></SingleValueWidget>
          <SingleValueWidget
            header="Text Subjetivity"
            value={props.results.sentiment.text.subjetivity}
            description="La Subjetividad busca indicar el grado de opinión del texto, donde cero (0) es un valor neutral. Aqui se promedia la subjetividad de todas las frases."
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
