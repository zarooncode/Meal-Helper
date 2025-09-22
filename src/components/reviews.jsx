import TestimonyCard from "./testimonialsCard";

export default function Testimonials() {
  return (
    <div className="reviews-container">
      <h1 className="reviews-title titles" id="reviews-title">
        TESTIOMONIALS<span style={{color: "black", textDecoration: "none"}}>/</span>REVIEWS
      </h1>
      <div className="testimony-card-container">
        <TestimonyCard />
      </div>
    </div>
  );
}
