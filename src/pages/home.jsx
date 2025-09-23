import FoodCard from "../components/homeCard";
import Testimonials from "../components/reviews";
import About from "../components/about";
import Features from "../components/features";
import MealSection from "../components/mealStart";

export default function HomePage() {
  return (
    <div className="home-page" id="home-page">
      <div className="home-text" id="home-text">
        <h1 className="home-title" id="home-title">
          WELCOME TO{" "}
          <span style={{ color: "#4caf4fe2", textDecoration: "underline" }}>
            MEAL-HELPER
          </span>
          !
        </h1>
        <h3 className="title-info">
          The only website you'll ever need <br /> to{" "}
          <span style={{ color: "#4caf4fe2", textDecoration: "underline" }}>
            calculate
          </span>{" "}
          your{" "}
          <span style={{ color: "#4caf4fe2", textDecoration: "underline" }}>
            calories
          </span>
          !
        </h3>
        <h4>
          Worried about eating too many or too few calories? <br /> With
          Meal-Helper, you can track your food, see <br /> its{" "}
          <span style={{ color: "#4caf4fe2" }}>macros</span>, and plan out your{" "}
          <span style={{ color: "#4caf4fe2" }}>weekly meals</span> effortlessly!
        </h4>
        <h4>
          Here are some {" "}
          <span style={{ color: "#4caf4fe2" }}>meals</span>!
        </h4>
      </div>
      <div className="food-cards-container">
        <div className="card-container" id="card-containers">
          <FoodCard />
        </div>
      </div>
      <div className="features-container">
        <Features />
      </div>
      <div className="reviews-container">
        <Testimonials />
      </div>
      <div className="about-container">
        <About />
      </div>
      <div className="meals-component-container">
        <MealSection />
      </div>
    </div>
  );
}
