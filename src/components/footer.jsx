import { Link } from "react-router-dom";

export default function FooterBar() {
  return (
    <footer className="footer-bar" id="footer-bar">
      <hr color="black" size="5" />
      <h1>
        Contact <span style={{ textDecoration: "underline" }}>me</span>:
      </h1>
      <h3>
        Mail me:{" "}
        <a
          className="contact-links"
          href="mailto:zaroonworkemail@gmail.com"
          target="_blank"
        >
          zaroonworkemail@gmail.com
        </a>
        <br />
        Chat with me on Teams:{" "}
        <a
          className="contact-links"
          href="https://teams.microsoft.com/l/chat/0/0?users=17R001@pises.edu.sa"
          target="_blank"
        >
          Zaroon Ali
        </a>
        <br />
        Check out my Github:{" "}
        <a
          className="contact-links"
          href="https:/github.com/zarooncode"
          target="_blank"
        >
          Zaroon's Github
        </a>
      </h3>
      <h1>
        Legal <span style={{ textDecoration: "underline" }}>Rights</span>:
      </h1>
      <h5>&copy; COPYRIGHTS RESERVED</h5>
      <h6>
        🔴TESTIMONIES ARE NOT REAL; <br /> TESTIMONIES WERE WRITTEN BY THE
        DEVELOPER OF THE WEBSITE, <br /> IMAGES USED FOR TESTIMONIES ARE TAKEN
        BY CONSENT.
      </h6>
      <h1>More <span style={{textDecoration: "underline"}}>Info</span>:</h1>
      <h3>
        Have a question? Find the answer: {" "}
        <Link className="faq-button" to="/faq">
          FAQ Page
        </Link>
      </h3>
    </footer>
  );
}
