import { useState } from "react";
import HomeRouter from "./home/HomeRouter";
import ResultsRouter from "./results/ResultsRouter";

const PagesRouter = (props) => {
  const [pagesRoute, setPagesRoute] = useState("home");

  const Router = () => {
    switch (pagesRoute) {
      case "home":
        return <HomeRouter {...props}></HomeRouter>;
      case "results":
      default:
        return <ResultsRouter {...props}></ResultsRouter>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setPagesRoute("home")}>home</button>
        <button
          onClick={() => setPagesRoute("results")}
          disabled={!props.hasResults}
        >
          results
        </button>
      </div>
      <div>
        <Router {...props}></Router>
      </div>
    </div>
  );
};

export default PagesRouter;
