import { INGREDIENTS } from "../ingredients";
import type { IngredientCount } from "../type";

interface Props {
  ingredients: IngredientCount[];
  resetIngredients: () => void;
}

const TotalPrice = ({ ingredients, resetIngredients }: Props) => {
  const total = ingredients.reduce((acc, item) => {
    const currentIngredient = INGREDIENTS.find((ing) => ing.name === item.name);
    if (!currentIngredient) return acc;
    return acc + currentIngredient.price * item.count;
  }, 30);

  return (
    <div className="order-info">
      <p>
        Итоговая стоимость: <strong>{total}</strong> сом
      </p>
      <button className="reset-btn" onClick={resetIngredients}>
        Очистить всё
      </button>
    </div>
  );
};

export default TotalPrice
