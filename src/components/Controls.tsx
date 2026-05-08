interface Props {
  name: string;
  price: number;
  count: number;
  image: string;
  onAdd: () => void;
  onRemove: () => void;
  disabledRemove: boolean;
}

const Controls = ({ name, price, count, image, onAdd, onRemove, disabledRemove }: Props) => {
  return (
    <div className="control-item">
      <img
        src={image}
        alt={name}
        className="ingredient-img control-item"
        onClick={onAdd}
      />
      <p>{name}</p>
      <p>{price}</p>
      <div className="controls-row">
        <span className="count-display">{count}</span>
        <button className="control-btn add-btn" onClick={onAdd}>
          {name}
        </button>
        <button
          className="control-btn remove-btn"
          onClick={onRemove}
          disabled={disabledRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Controls;
