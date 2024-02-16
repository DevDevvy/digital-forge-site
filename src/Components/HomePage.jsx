import "./HomePage.css";
const HomePage = () => {
  function toggleMenu() {
    const icon = document.getElementById("hamburger-icon");
    icon.classList.toggle("open");
  }

  return (
    <div id="hamburger-icon" onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomePage;
