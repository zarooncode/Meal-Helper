import FoodCard from "../components/homeCard";
import RefreshButton from "../components/jumbleMealsButton";
import Testimonials from "../components/reviews";
import About from "../components/about";
import Features from "../components/features";
import Search from "../components/search";

export default function HomePage() {
  return (
    <div className="home-page" id="home-page">
      <div className="home-text" id="home-text">
        <h1 className="title" id="title">
          WELCOME TO{" "}
          <span style={{ textDecoration: "underline" }}>MEAL-HELPER</span>!
        </h1>
        <h3 className="title-info">
          The only website you'll ever need <br /> to{" "}
          <span style={{ color: "#4caf4fe2" }}>calculate</span> your{" "}
          <span style={{ color: "#4caf4fe2" }}>calories</span>!
        </h3>
        <h4>
          Worried about eating too many or too few calories? <br /> With
          Meal-Helper, you can track your food, see <br /> its{" "}
          <span style={{ color: "#4caf4fe2" }}>macros</span>, and plan out your{" "}
          <span style={{ color: "#4caf4fe2" }}>weekly meals</span>!
        </h4>
        <h4>
          Dive right in to check your{" "}
          <span style={{ color: "#4caf4fe2" }}>macros</span> for the day!
        </h4>
      </div>
      <RefreshButton />
      <div className="food-cards-container">
        <Search />
        <div className="card-container" id="card-containers">
          <FoodCard />
        </div>
      </div>
      <div className="reviews-container">
        <Testimonials />
      </div>
      <div className="features-container">
        <Features />
      </div>
      <div className="about-container">
        <About />
      </div>
    </div>
  );
}
