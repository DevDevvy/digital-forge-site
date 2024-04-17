import { useState, useCallback, useRef } from "react";
import "./HomePage.css";
import ParallaxHeroImage from "../Components/ParallaxHeroImage/ParallaxHeroImage.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ModalOverlay from "../Components/ModalOverlay.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import AboutUsPage from "./AboutUs/AboutUs";

const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const aboutUsRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

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
      <ParallaxHeroImage
        scrollToAbout={() => scrollToRef(aboutUsRef)}
        scrollToContact={() => scrollToRef(contactFormRef)}
      />
      <div id="content-container" ref={aboutUsRef}>
        <AboutUsPage
          handleEmailButtonClick={handleEmailButtonClick}
          handleCloseContactForm={handleCloseContactForm}
          showContactForm={showContactForm}
          isDarkMode={darkMode}
        />
        {/* <ProfilePhotoFrameGroup onClick={handleEmailButtonClick} /> */}
        <ContactForm showCloseButton={false} ref={contactFormRef} />
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
