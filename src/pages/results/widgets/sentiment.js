const SentimentWidget = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>source</th>
          <th>polarity</th>
          <th>subjetivity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>headline</td>
          <td>{props.headline.polarity}</td>
          <td>{props.headline.subjetivity}</td>
        </tr>
        <tr>
          <td>text</td>
          <td>{props.text.polarity}</td>
          <td>{props.text.subjetivity}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default SentimentWidget;
