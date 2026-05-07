import "./App.css";
import type { Ingredient, IngredientCount } from "./type";

import BaconImg from "./assets/bacon.jpg";
import CheeseImg from "./assets/cheese.jpg";
import MeatImg from "./assets/meat.jpg";
import SaladImg from "./assets/salad.jpg";
import { useState } from "react";

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

  const totalPrice = ingredients.reduce((acc, item) => {
    const currentIngredient = INGREDIENTS.find((ing) => ing.name === item.name);
    if (!currentIngredient) return acc;
    return acc + currentIngredient.price * item.count;
  }, 30);

  return <></>;
};

export default App;
