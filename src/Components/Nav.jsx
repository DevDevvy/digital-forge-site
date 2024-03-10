import { Link } from "react-router-dom";
import "../Pages/HomePage.css"; // Make sure this path is correct

export const NavMenu = () => {
  function toggleMenu() {
    document.body.classList.toggle("menu-open");
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
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/about" className="nav">
          About
        </Link>
        <Link
          className="nav"
          to="https://connect.intuit.com/pay/DigitalForge/scs-v1-e82ba5da82074903b2a743c776bbb8c2cc6f34a98fd541fd920c5bbbac5328edcde7207b3ca04e0b9ea2687db200b4fe?locale=EN_US"
        >
          Buy Us A Coffee
        </Link>
      </div>
    </>
  );
};
