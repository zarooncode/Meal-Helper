import Search from "../components/search";
import FoodCardForMeals from "../components/mealCard";
import RefreshButton from "../components/jumbleMealsButton";

export default function MealPage() {
  return (
    <div className="meal-page">
      <div className="food-cards-container">
        <div className="extra-container">
          <RefreshButton />          
          <Search />
        </div>
        <div className="card-container" id="card-containers">
          <FoodCardForMeals />
        </div>
      </div>
    </div>
  );
}
