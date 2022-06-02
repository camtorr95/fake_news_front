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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="headline">Título del Artículo:</label>
        <input
          type="text"
          id="headline"
          name="headline"
          value={headline}
          onChange={(event) => setHeadline(event.target.value)}
          required
        ></input>
        <label htmlFor="article">Artículo:</label>
        <textarea
          id="article"
          name="article"
          value={article}
          onChange={(event) => setArticle(event.target.value)}
          required
        ></textarea>
        <label htmlFor="topic">Topic:</label>
        <select
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ArticleForm;
