// TODO: Home page styling
// Update styling for page layout
// Add pay link to hamburger icon
// Send email on submit of contact form
// Add images and whatnot to carousel
// Reset interval for auto-scrolling when user interacts with carousel

import { useState } from "react";
import "./HomePage.css";
import { Footer } from "../Components/Footer/Footer";
import { ContactForm } from "../Components/ContactForm";
import AboutUsPage from "./AboutUs/AboutUs";
import efrain from "../assets/efrain.png";
import dustin from "../assets/dustin.png";
import mac from "../assets/mac.png";
import randall from "../assets/randall.png";
import ProfilePhotoFrameGroup from "../Components/ProfilePhotoGroup";
import ModalOverlay from "../Components/ContactFormOverlay";
import { Header } from "../Components/Header/Header";
import ScrollingCarousel from "../Components/ScrollingCarousel";

const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleEmailButtonClick = () => {
    setShowContactForm(true);
  };
  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const profiles = [
    { photo: mac, name: "Mac" },
    { photo: randall, name: "Randall" },
    { photo: dustin, name: "Dustin" },
    { photo: efrain, name: "Efrain" },
  ];

  return (
    <>
      <div id="page-container" className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <div id="content-container">
          <AboutUsPage
            handleEmailButtonClick={handleEmailButtonClick}
            handleCloseContactForm={handleCloseContactForm}
            showContactForm={showContactForm}
            isDarkMode={darkMode}
          />
          <ScrollingCarousel />
          <div className="profiles">
            <h2 id="team">Meet the Team</h2>
            <ProfilePhotoFrameGroup
              profiles={profiles}
              onClick={handleEmailButtonClick}
            />
          </div>
          <ContactForm showCloseButton={false} />
          {/* Footer with legal links */}
          <Footer />
        </div>
      </div>
      {showContactForm && (
        <ModalOverlay
          onClose={handleCloseContactForm}
          showCloseButton={showContactForm} // Pass the showContactForm state
        >
          <ContactForm />
        </ModalOverlay>
      )}
    </>
  );
};

export default HomePage;
