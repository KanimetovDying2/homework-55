import "./App.css";
import type { IngredientCount } from "./type";
import { INGREDIENTS } from "./ingredients";
import Controls from "./components/Controls";
import Burger from "./components/Burger";
import { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientCount[]>(
    INGREDIENTS.map((ing) => ({ name: ing.name, count: 0 })),
  );

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
      <div className="main-content">
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
        <Burger ingredients={ingredients} />
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
