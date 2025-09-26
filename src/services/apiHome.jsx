export async function fetchFoodData() {
  const meal = [];

  for (let i = 0; i < 3; i++) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const data = await response.json();
    meal.push(data.meals[0]);
  }

  return meal || [];
}
