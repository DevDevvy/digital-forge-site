// src/components/SphereAnimation.jsx

import "./SphereAnimation.css"; // Assuming you'll move the CSS here

const SphereAnimation = () => {
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
