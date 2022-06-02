import "./App.css";
import ArticleForm from "./pages/home/ArticleForm";
import { useState, useEffect } from "react";
import * as React from "react";
import ResultsRouter from "./pages/results/ResultsRouter";
import PagesRouter from "./pages/PagesRouter";
import predict from "./controller/requests";

const App = () => {
  const [topic, setTopic] = useState([]);
  const [headline, setHeadline] = useState([]);
  const [article, setArticle] = useState([]);
  const [results, setResults] = useState({});
  const [hasResults, setHasResults] = useState(false);

  useEffect(() => {
    setHasResults(Object.keys(results).length !== 0);
  }, [results]);

  const featureImportance = {
    headline_avg_subjetivity: 9.26543131054493,
    headline_especiales: 6.760821461305923,
    headline_mayusculas: 2.288598447668221,
    headline_numbers: 5.407225946330669,
    headline_palabras: 8.319235401354966,
    headline_palabras_avg_len: 6.042072182987105,
    headline_stopwords: 5.272774086006602,
    headline_unicas: 4.04243289873048,
    text_especiales: 6.129971093433766,
    text_mayusculas: 1.671052693444975,
    text_numbers: 2.7313164118359996,
    text_oraciones: 12.695798037380655,
    text_oraciones_avg_len: 8.842395576626684,
    text_palabras: 0.3342635475646531,
    text_palabras_avg_len: 5.740365609424486,
    text_stopwords: 3.212380005933827,
    text_unicas: 6.6617567062222705,
    topic: 4.582108583203765,
  };

  const mockResults = (payload) => {
    return {
      probability: {
        catboost: 0.6,
        rnn: 0.55,
      },
      ngrams: {
        text_bigrams: [
          ["(1, 2)", 10],
          ["(1, 3)", 10],
          ["(1, 4)", 10],
          ["(1, 5)", 10],
          ["(1, 6)", 10],
          ["(1, 7)", 10],
          ["(1, 8)", 10],
          ["(1, 9)", 10],
          ["(1, 10)", 10],
          ["(1, 11)", 10],
        ],
        text_trigrams: [
          ["(1, 2, 1)", 10],
          ["(1, 2, 2)", 10],
          ["(1, 2, 3)", 10],
          ["(1, 2, 4)", 10],
          ["(1, 2, 5)", 10],
          ["(1, 2, 6)", 10],
          ["(1, 2, 7)", 10],
          ["(1, 2, 8)", 10],
          ["(1, 2, 9)", 10],
          ["(1, 2, 10)", 10],
        ],
      },
      sentiment: {
        headline: {
          polarity: 0.7,
          subjetivity: 0.8,
        },
        text: {
          polarity: 0.7,
          subjetivity: 0.8,
        },
      },
      variables: {
        headline_palabras: 100,
        headline_palabras_avg_len: 100,
        headline_mayusculas: 100,
        headline_numbers: 100,
        headline_especiales: 100,
        headline_stopwords: 100,
        headline_unicas: 100,
        headline_avg_subjetivity: 100,
        text_palabras: 100,
        text_palabras_avg_len: 100,
        text_mayusculas: 100,
        text_numbers: 100,
        text_especiales: 100,
        text_stopwords: 100,
        text_unicas: 100,
        text_oraciones: 100,
        text_oraciones_avg_len: 100,
      },
    };
  };

  const handleArticleRequest = async (payload) => {
    setTopic(payload.topic);
    setHeadline(payload.headline);
    setArticle(payload.article);

    let _results = await predict(payload);
    setResults(_results);
  };

  return (
    <div>
      <div>
        <PagesRouter
          handleArticleRequest={handleArticleRequest}
          topic={topic}
          headline={headline}
          article={article}
          results={results}
          hasResults={hasResults}
          featureImportance={featureImportance}
        ></PagesRouter>
      </div>
    </div>
  );
};

export default App;
