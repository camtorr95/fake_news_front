const GraficaWidget = (props) => {
  return (
    <div className="col">
      <div className="card border-secondary mb-3">
        <img
          className="card-img-top"
          src={props.source}
          alt={props.header}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.header}</h5>
          <p className="card-text">{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
};
export default GraficaWidget;
