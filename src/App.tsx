import "./App.css";
import type { IngredientCount } from "./type";
import { INGREDIENTS } from "./ingredients";
import Burger from "./components/Burger";
import { useState } from "react";
import TotalPrice from "./components/TotalPrice";
import ControlsList from "./components/ControlsList";

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

  return (
    <div className="App">
      <div className="main-content">
        <ControlsList
          ingredients={ingredients}
          onAdd={addIngredient}
          onRemove={removeIngredient}
        />
        <Burger ingredients={ingredients} />
      </div>
      <TotalPrice
        ingredients={ingredients}
        resetIngredients={resetIngredients}
      />
    </div>
  );
};

export default App;
