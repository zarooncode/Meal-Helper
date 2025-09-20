export default function FooterBar() {
  return (
    <footer className="footer-bar" id="footer-bar">
      <hr color="black" size="5" />
      <h1>Contact <span style={{textDecoration: "underline"}}>me</span>:</h1>
      <h3>
        Mail me:{" "}
        <a className="contact-links" href="mailto:zaroonworkemail@gmail.com" target="_blank">
          zaroonworkemail@gmail.com
        </a>
        <br />
        Chat with me on Teams:{" "}
        <a className="contact-links" href="https://teams.microsoft.com/l/chat/0/0?users=17R001@pises.edu.sa" target="_blank">
          Zaroon Ali
        </a>
      </h3>
      <h5>
        &copy; COPYRIGHTS RESERVED
      </h5>
    </footer>
  );
}
