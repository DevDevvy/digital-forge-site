import { Link } from "react-router-dom";
import "./HamburgerMenu.css"; // Make sure this path is correct

export const HamburgerMenu = ({ darkMode }) => {
  function toggleHamburgerMenu() {
    document.body.classList.toggle("menu-open");
  }

  const handleLinkClick = () => {
    toggleHamburgerMenu();
  };

  return (
    <>
      <div
        id="hamburger-icon"
        className={darkMode ? "dark-mode" : ""}
        onClick={toggleHamburgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="nav-menu-container">
        <h1 id="digitalforge">DIGITAL FORGE</h1>
        <Link to="/" className="nav" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/ai-and-automation" className="nav" onClick={handleLinkClick}>
          AI & Automation
        </Link>
        <Link to="/cloud" className="nav" onClick={handleLinkClick}>
          Cloud & Infrastructure
        </Link>
        <Link to="/web-and-mobile" className="nav" onClick={handleLinkClick}>
          Web & Mobile Development
        </Link>
        <Link to="/blog/list" className="nav" onClick={handleLinkClick}>
          Digital Forge Blog
        </Link>

        {/* <Link
          className="nav"
          to="https://connect.intuit.com/pay/DigitalForge/scs-v1-e82ba5da82074903b2a743c776bbb8c2cc6f34a98fd541fd920c5bbbac5328edcde7207b3ca04e0b9ea2687db200b4fe?locale=EN_US"
        >
          Buy Us A Coffee
        </Link> */}
      </div>
    </>
  );
};
