import devImage from "../assets/zaroon.png";

export default function About() {
  function openNewWin(url) {
    window.open(url);
  }

  return (
    <div className="about-container">
      <h1 className="about-title titles" id="about-title">
        ABOUT US
      </h1>
      <div className="about-info-container ids">
        <p className="about-intro">
          Hi! My name is{" "}
          <span
            style={{
              color: "#4caf4fe2",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Zaroon Ali
          </span>{" "}
          and I'm the developer of this website! This website was made by <br /> me
          alone, and I have learnt alot of things while making this website! <br />
          I have experience with coding in the past in other languages and as
          well as in making <br /> websites with{" "}
          <a className="links" href="https://react.dev/" target="_blank">
            React.js
          </a>
          ! This website is made in React.js, and the purpose of this website{" "}
          <br /> was fullfilled by using various APIs for calculating macros,
          search queries and etc! <br />
          I also want to thank all my friends who gave me permission to use
          their pictures as testimonies! <br />
          (Want to check out my github and other projects? Click on my face!) <br />
          (Built this Website for CS Exhibition, No templates used - ONLY CODE)
          <br />
        </p>
        <img
          className="dev-image images"
          src={devImage}
          alt="image"
          onClick={() => openNewWin("https://github.com/zarooncode/")}
        />
      </div>
    </div>
  );
}
