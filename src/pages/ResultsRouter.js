import ArticleView from "./results/ArticleView";
import ResultsPanel from "./results/ResultsPanel";

const ResultsRouter = (props) => {
  switch (props.route) {
    case "articleView":
      return <ArticleView {...props}></ArticleView>;
    case "resultsPanel":
    default:
      return <ResultsPanel {...props}></ResultsPanel>;
  }
};
export default ResultsRouter;
