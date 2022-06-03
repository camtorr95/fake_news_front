const SingleValueWidget = (props) => {
  const ColoredHeader = () => {
    switch (props.color) {
      case "green":
        return (
          <div className="card-header text-white bg-primary">
            {props.header}
          </div>
        );
      default:
        return <div className="card-header">{props.header}</div>;
    }
  };

  return (
    <div className="col">
      <div className="card mb-3">
        <ColoredHeader />
        <div className="card-body">
          <h3 className="card-title">{props.value.toFixed(4)}</h3>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleValueWidget;
