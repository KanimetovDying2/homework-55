import "../Burger.css";
import type { IngredientCount } from "../type";

interface Props {
  ingredients: IngredientCount[];
}

const Burger = ({ ingredients }: Props) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>

      {ingredients.map((ing) => {
        const ingredientClass =
          ing.name[0].toUpperCase() + ing.name.slice(1);
        let layers = [];
        for (let i = 0; i < ing.count; i++) {
          layers.push(<div key={ing.name + i} className={ingredientClass}></div>);
        }
        return layers;
      })}

      <div className="BreadBottom"></div>
    </div>
  );  
};

export default Burger;
