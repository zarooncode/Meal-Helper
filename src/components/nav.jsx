import { Link } from "react-router-dom";

export default function NavBar() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element
      ? setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50)
      : console.log(`Could not find Element searched by ${id}`);
  }

  return (
    <nav className="nav-bar">
      <Link
        className="nav-buttons"
        to="/home"
        onClick={() => {
          scrollToSection("home-title");
        }}
      >
        Home
      </Link>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("features-title")}
      >
        Features
      </button>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("reviews-title")}
      >
        Testimonials
      </button>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("about-title")}
      >
        About
      </button>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("meal-start-title")}
      >
        Product
      </button>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("footer-bar")}
      >
        Contact / Privileges
      </button>
    </nav>
  );
}
