const SingleValueWidget = (props) => {
  return (
    <div className="col">
      <div className="card border-secondary mb-3">
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <h3 className="card-title">{props.value.toFixed(4)}</h3>
          <p className="card-text">{props.footer}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleValueWidget;
