import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const placeHolderList = [
    {
      idMeal: 0,
      strMeal: "Sorry, could not find any results.",
      strMealThumb: "Error",
    },
  ];
  const [results, setResults] = useState([]);
  const [searchText, setText] = useState("");
  const navigate = useNavigate();

  async function displayInputFoods(inputText) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    );
    const data = await response.json();

    data.meals
      ? (setResults(data.meals), console.log(data.meals[0].strMeal))
      : setResults(placeHolderList);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      const cards = document.getElementById("card-containers");
      displayInputFoods(searchText);
      setText("");
      cards.style.display = "none";
    }
  }

  function openInfoPage() {
    navigate("/info");
  } 

  return (
    <div className="searchig" id="searchig">
      <input
        value={searchText}
        className="text-box"
        id="text-box"
        type="text"
        placeholder="Search for a meal and get instant results!"
        onKeyDown={(event) => handleEnter(event)}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="food-cards-container">
        <div className="food-card">
          {results.map((food) => (
            <div className="food-id ids" key={food.idMeal}>
              <img
                className="food-image images"
                src={food.strMealThumb}
                alt="Image Not Found"
                onClick={() => openInfoPage()}
              />
              <p className="food-name">{food.strMeal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
