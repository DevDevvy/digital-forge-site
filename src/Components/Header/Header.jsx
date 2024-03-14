import { HamburgerMenu } from "../HamburgerMenu";
import "./Header.css";

export const Header = ({ toggleDarkMode, darkMode }) => {
  const title = document.querySelector("#title");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition / 2; // Adjust the division factor to control the rotation speed

    title.style.transform = `rotateX(${rotationAngle}deg)`;
  });
  return (
    <div id="fixed-header">
      <div id="header">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <h2 id="title">DIGITAL FORGE</h2>
        <HamburgerMenu darkMode={darkMode} />
      </div>
    </div>
  );
};
