import ProbabilityWidget from "./widgets/probability";
import SentimentWidget from "./widgets/sentiment";
import NGramsWidget from "./widgets/ngrams";
import VariablesWidget from "./widgets/variables";

const ResultsPanel = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.handleGoBack}>back</button>
      </div>
      <h1>Resultados</h1>
      <h2>{props.headline}</h2>
      <div>
        <ProbabilityWidget {...props.results.probability}></ProbabilityWidget>
      </div>
      <div>
        <SentimentWidget {...props.results.sentiment}></SentimentWidget>
      </div>
      <div>
        <NGramsWidget ngrams={props.results.ngrams.text_bigrams}></NGramsWidget>
      </div>
      <div>
        <NGramsWidget
          ngrams={props.results.ngrams.text_trigrams}
        ></NGramsWidget>
      </div>
      <div>
        <VariablesWidget variables={props.results.variables}></VariablesWidget>
      </div>
    </div>
  );
};

export default ResultsPanel;
