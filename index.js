const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-text">{text}</p>
    </div>
  );
};

const element = () => (
  <div className="bg">
    <h1 className="heading">Boxes</h1>
    <div className="bottom">
      <Box text="small" className="small" />
      <Box text="medium" className="medium" />
      <Box text="large" className="large" />
    </div>
  </div>
);

ReactDOM.render(<Box />, document.getElementById("root"));
