import type { Ingredient } from "./type";
import BaconImg from "./assets/bacon.jpg";
import CheeseImg from "./assets/cheese.jpg";
import MeatImg from "./assets/meat.jpg";
import SaladImg from "./assets/salad.jpg";

export const INGREDIENTS: Ingredient[] = [
  { name: "bacon", price: 60, image: BaconImg },
  { name: "cheese", price: 50, image: CheeseImg },
  { name: "meat", price: 80, image: MeatImg },
  { name: "salad", price: 10, image: SaladImg },
];
