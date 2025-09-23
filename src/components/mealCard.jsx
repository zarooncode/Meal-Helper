import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFoodDataForMeals } from "../services/apiMeal";

export default function FoodCardForMeals() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFoods() {
      const products = await fetchFoodDataForMeals();
      setFoods(products);
    }

    loadFoods();
  }, []);

  function openInfoPage() {
    navigate("/info");
  }

  return (
    <div className="food-card">
      {foods.map((food) => (
        <div className="food-id ids" key={food.idMeal}>
          <img
            className="food-image images"
            src={food.strMealThumb}
            alt="Image"
            onClick={() => openInfoPage()}
          />
          <p className="food-name">{food.strMeal}</p>
        </div>
      ))}
    </div>
  );
}
