import ArticleForm from "./forms/ArticleForm";
import ResultsRouter from "./ResultsRouter";

const PagesRouter = (props) => {
  switch (props.route) {
    case "results":
      return <ResultsRouter {...props}></ResultsRouter>;
    case "/":
    default:
      return <ArticleForm {...props}></ArticleForm>;
  }
};

export default PagesRouter;
