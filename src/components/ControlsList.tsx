import type { IngredientCount } from "../type";
import { INGREDIENTS } from "../ingredients";
import Controls from "./Controls";

interface Props {
  ingredients: IngredientCount[];
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
}

const ControlsList = ({ ingredients, onAdd, onRemove }: Props) => {
  return (
    <div className="container">
      {INGREDIENTS.map((ing) => {
        const currentCount =
          ingredients.find((i) => i.name === ing.name)?.count ?? 0;
        return (
          <Controls
            key={ing.name}
            name={ing.name}
            price={ing.price}
            image={ing.image}
            count={currentCount}
            onAdd={() => onAdd(ing.name)}
            onRemove={() => onRemove(ing.name)}
            disabledRemove={currentCount === 0}
          />
        );
      })}
    </div>
  );
};

export default ControlsList;
