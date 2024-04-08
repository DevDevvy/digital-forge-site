// src/components/SphereAnimation.jsx
import React, { useEffect } from "react";
import "./SphereAnimation.css"; // Assuming you'll move the CSS here

const SphereAnimation = () => {
  // JS logic for the dark mode toggle
  useEffect(() => {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");

    function toggleDarkMode(state) {
      document.documentElement.classList.toggle("darkMode", state);
    }

    toggleDarkMode(useDark.matches);

    useDark.addListener((evt) => toggleDarkMode(evt.matches));
  }, []);

  // JSX structure converted from your provided HTML
  return (
    <div className="sphereContainer">
      <div className="sphere">
        <div className="line x"></div>
        <div className="line y"></div>
        <div className="line z"></div>
        <div className="circleContainer">
          {[...Array(20)].map((_, index) => (
            <div className="circle" key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SphereAnimation;
