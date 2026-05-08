interface Props {
  name: string;
  price: number;
  count: number;
  image: string;
  onAdd: () => void;
  onRemove: () => void;
}

const Controls = ({ name, price, count, image, onAdd, onRemove }: Props) => {
  return (
    <div className="control-item">
      <img src={image} alt={name} className="ingredient-img" />
      <p>{name}</p>
      <p>{price}</p>
      <div className="controls-row">
        <span className="count-display">{count}</span>
        <button className="control-btn add-btn" onClick={onAdd}>
          Add
        </button>
        <button className="control-btn remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Controls;
