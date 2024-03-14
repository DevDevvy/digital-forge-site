import React, { useEffect, useRef } from "react";
import { HamburgerMenu } from "../HamburgerMenu";
import "./Header.css";

export const Header = ({ toggleDarkMode, darkMode }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Define the function that handles the scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationAngle = scrollPosition / 2; // Adjust the division factor to control the rotation speed

      // Safely attempt to modify the style of the referenced element
      if (titleRef.current) {
        titleRef.current.style.transform = `rotateX(${rotationAngle}deg)`;
      }
    };

    // Add the event listener to the window object
    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function from useEffect
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div id="fixed-header">
      <div id="header">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <h2 id="title" ref={titleRef}>
          DIGITAL FORGE
        </h2>
        <HamburgerMenu darkMode={darkMode} />
      </div>
    </div>
  );
};
