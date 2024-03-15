import { useState, useCallback } from "react";
import "./HomePage.css";
import ProfilePhotoFrameGroup from "../Components/ProfilePhotoFrameGroup";
import ScrollingCarousel from "../Components/ScrollingCarousel";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ModalOverlay from "../Components/ModalOverlay.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import AboutUsPage from "./AboutUs/AboutUs";

const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  const handleEmailButtonClick = useCallback(() => {
    setShowContactForm(true);
  }, []);

  const handleCloseContactForm = useCallback(() => {
    setShowContactForm(false);
  }, []);

  return (
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
        <ProfilePhotoFrameGroup onClick={handleEmailButtonClick} />
        <ContactForm showCloseButton={false} />
        <Footer />
      </div>
      {showContactForm && (
        <ModalOverlay
          onClose={handleCloseContactForm}
          showCloseButton={showContactForm}
        >
          <ContactForm />
        </ModalOverlay>
      )}
    </div>
  );
};

export default HomePage;
