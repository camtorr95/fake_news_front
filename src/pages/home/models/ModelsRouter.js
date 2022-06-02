import { useState } from "react";
import CatboostInfo from "./CatboostInfo";
import RnnInfo from "./RnnInfo";

const ModelsRouter = (props) => {
  const [modelRoute, setModelRoute] = useState("catboost");

  const Router = () => {
    switch (modelRoute) {
      case "catboost":
        return <CatboostInfo {...props}></CatboostInfo>;
      case "rnn":
      default:
        return <RnnInfo {...props}></RnnInfo>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setModelRoute("catboost")}>catboost</button>
        <button onClick={() => setModelRoute("rnn")}>rnn</button>
      </div>
      <div>
        <Router {...props}></Router>
      </div>
    </div>
  );
};

export default ModelsRouter;
