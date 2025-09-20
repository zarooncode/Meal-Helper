import { Link } from "react-router-dom";

export default function NavBar() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element
      ? element.scrollIntoView({ behavior: "smooth", block: "center" })
      : console.log(`Could not find Element searched by ${id}`);
  }

  return (
    <nav className="nav-bar">
      <Link
        className="nav-buttons"
        to="/home"
        onClick={() => {
          displayHomePage();
        }}
      >
        Home
      </Link>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("reviews-title")}
      >
        Testimonials
      </button>
      <button
        className="smoothScroll-buttons"
        onClick={() => scrollToSection("footer-bar")}
      >
        Contact
      </button>
      <Link
        className="nav-buttons"
        to="/search"
        onClick={() => {
          scrollToSection("text-box");
          displaySearchBar();
        }}
      >
        Search
      </Link>
    </nav>
  );
}
