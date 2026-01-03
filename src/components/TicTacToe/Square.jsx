const Square = (props) => {
  const { value, onClick } = props;

  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export default Square;
