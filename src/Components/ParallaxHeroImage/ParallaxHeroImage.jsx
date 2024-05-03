import "./ParallaxHeroImage.css";

import forge from "../../assets/DF-forge.png";

const ParallaxHeroImage = ({ scrollToAbout, scrollToContact }) => {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  document.addEventListener("scroll", function (e) {
    e.preventDefault();
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateImagePosition(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });

  function updateImagePosition(scrollPos) {
    var image = document.querySelector(".hero-image");
    var sparks = document.querySelector(".spark-layer");

    // Making the hero image move faster than the sparks
    image.style.top = 0 + scrollPos * -0.05 + "vh"; // More negative for a faster effect

    // Sparks move slower to create a subtle parallax effect
    sparks.style.top = 0 + scrollPos * -0.01 + "vh"; // Less negative for a slower effect
  }
  return (
    <div className="parallax-container">
      <div className="spark-layer"></div>
      <img className="hero-image" src={forge} />
      <h1 id="tagline">
        Adapted Software Solutions <br></br>that Scale with You
      </h1>
      <div className="navigation-links">
        <button className="nav-button" onClick={scrollToAbout}>
          About
        </button>
        <button className="nav-button" onClick={scrollToContact}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default ParallaxHeroImage;
