const ArticleView = (props) => {
  return (
    <div className="container pt-3">
      <h3>{props.headline}</h3>
      <p>{props.article}</p>
    </div>
  );
};

export default ArticleView;
