import ArticleForm from "./ArticleForm";
import ModelsRouter from "./models/ModelsRouter";
import { useState } from "react";

const HomeRouter = (props) => {
  const [homeRoute, setHomeRoute] = useState("input");

  const Router = () => {
    switch (homeRoute) {
      case "modelInfo":
        return <ModelsRouter {...props}></ModelsRouter>;
      case "input":
      default:
        return <ArticleForm {...props}></ArticleForm>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setHomeRoute("input")}>input</button>
        <button onClick={() => setHomeRoute("modelInfo")}>info</button>
      </div>
      <div>
        <Router {...props}></Router>
      </div>
    </div>
  );
};

export default HomeRouter;
