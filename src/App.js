import "./App.css";
import ArticleForm from "./pages/forms/ArticleForm";
import { useState, useEffect } from "react";
import * as React from "react";
import ResultsPanel from "./pages/results/ResultsPanel";
import PagesRouter from "./pages/PagesRouter";

const App = () => {
  const [topic, setTopic] = useState([]);
  const [headline, setHeadline] = useState([]);
  const [article, setArticle] = useState([]);
  const [results, setResults] = useState([]);

  const [route, setRoute] = useState("/");

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
        headline_palabras: { value: 100, importance: 5.89 },
        headline_palabras_avg_len: { value: 100, importance: 5.89 },
        headline_mayusculas: { value: 100, importance: 5.89 },
        headline_numbers: { value: 100, importance: 5.89 },
        headline_especiales: { value: 100, importance: 5.89 },
        headline_stopwords: { value: 100, importance: 5.89 },
        headline_unicas: { value: 100, importance: 5.89 },
        headline_avg_subjetivity: { value: 100, importance: 5.89 },
        text_palabras: { value: 100, importance: 5.89 },
        text_palabras_avg_len: { value: 100, importance: 5.89 },
        text_mayusculas: { value: 100, importance: 5.89 },
        text_numbers: { value: 100, importance: 5.89 },
        text_especiales: { value: 100, importance: 5.89 },
        text_stopwords: { value: 100, importance: 5.89 },
        text_unicas: { value: 100, importance: 5.89 },
        text_oraciones: { value: 100, importance: 5.89 },
        text_oraciones_avg_len: { value: 100, importance: 5.89 },
      },
    };
  };

  const handleArticleRequest = (payload) => {
    setTopic(payload.topic);
    setHeadline(payload.headline);
    setArticle(payload.article);
    setResults(mockResults(payload));
    setRoute("results");
  };

  const handleGoBack = () => {
    setRoute("/");
  };

  return (
    <React.Fragment>
      <PagesRouter
        handleArticleRequest={handleArticleRequest}
        handleGoBack={handleGoBack}
        topic={topic}
        headline={headline}
        results={results}
        route={route}
      ></PagesRouter>
    </React.Fragment>
  );
};

export default App;
