import ArticleView from "./ArticleView";
import ResultsPanel from "./panels/ResultsPanel";
import { useState } from "react";

const ResultsRouter = (props) => {
  const [resultsRoute, setResultsRoute] = useState("resultsPanel");

  const Router = () => {
    switch (resultsRoute) {
      case "articleView":
        return <ArticleView {...props}></ArticleView>;
      case "resultsPanel":
      default:
        return <ResultsPanel {...props}></ResultsPanel>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setResultsRoute("articleView")}>articulo</button>
        <button onClick={() => setResultsRoute("resultsPanel")}>panel</button>
      </div>
      <div>
        <Router {...props}></Router>
      </div>
    </div>
  );
};
export default ResultsRouter;
