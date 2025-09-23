import featuresImage from "../assets/features.png";

export default function Features() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element
      ? setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50)
      : console.log(`Could not find Element searched by ${id}`);
  }

  return (
    <div className="features-container">
      <h1 className="features-title titles" id="features-title">
        How does it work?
      </h1>
      <div className="features-info-container ids">
        <img
          className="features-image"
          src={featuresImage}
          alt="Image"
          onClick={() => scrollToSection("features-title")}
        />
        <h3>
          Alot of our users are confused and ask how to use this website, or
          what are the websites{" "}
          <span style={{ color: "#4caf4fe2", textDecoration: "underline" }}>
            Features
          </span>
          ! We have made this website very easy to use, so let's dive right in
          to learn more about the features!
        </h3>
        <h4>
          This website is made for you to count your calories, start planning
          your meals, all so you can gain or lose your weight by calculating the
          macros of the meal you are eating! You can search up the meal you are
          eating and find instant results. Click on the meal you are looking
          for, and you will be taken to the information of the meal. The meal’s
          macros will be displayed upon your screen! (WIP, WILL REMOVE THIS ONCE
          FEATURES ARE MADE.) You can also plan out your weekly meals, so you
          won’t have to worry about deciding what to eat until the week is over!
        </h4>
      </div>
    </div>
  );
}
