import "./App.css";
import type { Ingredient, IngredientCount } from "./type";
import Controls from "./components/Controls";
import { useState } from "react";

import BaconImg from "./assets/bacon.jpg";
import CheeseImg from "./assets/cheese.jpg";
import MeatImg from "./assets/meat.jpg";
import SaladImg from "./assets/salad.jpg";

const INGREDIENTS: Ingredient[] = [
  { name: "bacon", price: 60, image: BaconImg },
  { name: "cheese", price: 50, image: CheeseImg },
  { name: "meat", price: 80, image: MeatImg },
  { name: "salad", price: 10, image: SaladImg },
];

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientCount[]>([
    { name: "bacon", count: 0 },
    { name: "cheese", count: 0 },
    { name: "meat", count: 0 },
    { name: "salad", count: 0 },
  ]);

  const addIngredient = (userIngredient: string) => {
    setIngredients(
      ingredients.map((item) =>
        item.name === userIngredient
          ? { ...item, count: item.count + 1 }
          : item,
      ),
    );
  };

  const removeIngredient = (userRemoved: string) => {
    setIngredients(
      ingredients.map((item) =>
        item.name === userRemoved
          ? item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
          : item,
      ),
    );
  };

  const resetIngredients = () => {
    setIngredients(
      ingredients.map((ing) => {
        return {
          ...ing,
          count: 0,
        };
      }),
    );
  };

  const totalPrice = ingredients.reduce((acc, item) => {
    const currentIngredient = INGREDIENTS.find((ing) => ing.name === item.name);
    if (!currentIngredient) return acc;
    return acc + currentIngredient.price * item.count;
  }, 30);

  return (
    <div className="App">
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
              onAdd={() => addIngredient(ing.name)}
              onRemove={() => removeIngredient(ing.name)}
              disabledRemove={currentCount === 0}
            />
          );
        })}
      </div>
      <div className="order-info">
        <p>
          Итоговая стоимость: <strong>{totalPrice}</strong> сом
        </p>
        <button className="reset-btn" onClick={resetIngredients}>
          Очистить всё
        </button>
      </div>
    </div>
  );
};

export default App;
