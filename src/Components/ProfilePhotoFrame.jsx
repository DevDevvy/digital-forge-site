//component that creates a spinning ring that glows around a circular photo div

import "./ProfilePhotoFrame.css";

export const ProfilePhotoFrame = ({ photo, name, linkedin }) => {
  function tiltDiv(event) {
    const tiltStrength = 30; // Adjust this value to control the tilt strength

    const boundingBox = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - boundingBox.left;
    const mouseY = event.clientY - boundingBox.top;
    const halfWidth = boundingBox.width / 2;
    const halfHeight = boundingBox.height / 2;

    const tiltX = ((mouseX - halfWidth) / halfWidth) * tiltStrength;
    const tiltY = ((mouseY - halfHeight) / halfHeight) * tiltStrength;

    event.currentTarget.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
  }
  return (
    <div className="photo-frame" onMouseOver={tiltDiv}>
      <a href={linkedin}>
        <div className="photo-ring">
          <img src={photo} alt={`${name}-headshot`} className="profile-photo" />
          <p className="profile-name">{name.toUpperCase()}</p>
        </div>
      </a>
    </div>
  );
};
