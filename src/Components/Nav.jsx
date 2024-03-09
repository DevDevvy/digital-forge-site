import { Link } from "react-router-dom";
import "../Pages/HomePage.css";

export const NavMenu = () => {
  function toggleMenu() {
    const navContainer = document.getElementById("nav-menu-container");
    navContainer.classList.toggle("open");
    const icon = document.getElementById("hamburger-icon");
    icon.classList.toggle("open");

    const digitalforge = document.getElementById("digitalforge");
    digitalforge.classList.toggle("open");

    const contentContainer = document.getElementById("content-container");
    contentContainer.classList.toggle("open");

    const navIcons = document.getElementsByClassName("nav");
    for (let i = 0; i < navIcons.length; i++) {
      navIcons[i].classList.toggle("open");
    }
  }
  return (
    <>
      <div id="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 id="digitalforge">Digital Forge</h1>
      <div id="nav-menu-container">
        <Link to="/" id="nav-home" className="nav">
          Home
        </Link>
        <Link to="/about" id="nav-about" className="nav">
          About
        </Link>
        <Link
          id="nav-pay"
          className="nav"
          to="https://connect.intuit.com/pay/DigitalForge/scs-v1-e82ba5da82074903b2a743c776bbb8c2cc6f34a98fd541fd920c5bbbac5328edcde7207b3ca04e0b9ea2687db200b4fe?locale=EN_US"
        >
          Buy Us A Coffee
        </Link>
      </div>
    </>
  );
};
