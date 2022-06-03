import { useState } from "react";

const ArticleForm = (props) => {
  const topics = [
    "Educacion",
    "Sociedad",
    "Ciencia",
    "Seguridad",
    "Salud",
    "Economia",
    "Deportes",
    "Política",
    "Entretenimiento",
    "Covid-19",
    "Internacional",
    "Deporte",
    "Ambiental",
  ];

  const [topic, setTopic] = useState(topics[0]);
  const [headline, setHeadline] = useState([]);
  const [article, setArticle] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      topic: topic,
      headline: headline,
      article: article,
    };
    props.handleArticleRequest(payload);
  };

  return (
    <div className="container pt-3">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <fieldset>
            <label className="form-label mt-3" htmlFor="topic">
              Topic:
            </label>
            <select
              className="form-select"
              id="topic"
              name="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              required
            >
              {topics.map((topic, i) => (
                <option value={topic} key={i}>
                  {topic}
                </option>
              ))}
            </select>
            <label className="form-label mt-3" htmlFor="headline">
              Título del Artículo:
            </label>
            <input
              className="form-control"
              type="text"
              id="headline"
              name="headline"
              value={headline}
              onChange={(event) => setHeadline(event.target.value)}
              required
            ></input>
            <label className="form-label mt-3" htmlFor="article">
              Artículo:
            </label>
            <textarea
              className="form-control"
              rows="10"
              id="article"
              name="article"
              value={article}
              onChange={(event) => setArticle(event.target.value)}
              required
            ></textarea>
            <input
              className="source-button btn btn-primary btn-xs mt-3"
              type="submit"
              value="Submit"
            />
          </fieldset>
        </div>
      </form>
      {props.hasResults ? (
        <div className="alert alert-dismissible alert-success mt-3">
          <strong>Well done!</strong> Procesado Exitosamente. Ya se pueden
          consultar los resultados.
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ArticleForm;
