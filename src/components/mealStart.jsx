import { useNavigate } from "react-router-dom";

export default function MealSection() {
  const navigate = useNavigate();

  function goToPage(page) {
    navigate(`/${page}`);
  }

  return (
    <div className="meal-start-container">
      <h1 className="meal-start-title title" id="meal-start-title">Start calculating your macros!</h1>
      <div className="meal-start-info-container ids">
        <h3>
          Ready to find some meals and calculate their macros?
          <br />
          Click here!
        </h3>
        <button
          className="meal-opener-button"
          onClick={() => goToPage("meals")}
        >
          Find Meals!
        </button>
      </div>
    </div>
  );
}
