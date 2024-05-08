import { useState, useCallback, useRef, useEffect } from "react";
import "./HomePage.css";
import ParallaxHeroImage from "../Components/ParallaxHeroImage/ParallaxHeroImage.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ModalOverlay from "../Components/ModalOverlay.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import AboutUsPage from "./AboutUs/AboutUs";
import SingleBlogPreview from "../Components/SingleBlogPreview/SingleBlogPreview.jsx";
import blogs from "../Pages/Blog/blogs";
const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const aboutUsRef = useRef(null);
  const contactFormRef = useRef(null);
  const refSlide = useRef(null);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSlideIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (refSlide.current) {
      observer.observe(refSlide.current);
    }

    return () => observer.disconnect();
  }, []);
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
        homepage={true}
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
        <div
          className={`single-blog ${slideIn ? "slide-in-right" : ""}`}
          ref={refSlide}
        >
          <SingleBlogPreview blogs={blogs} />
        </div>
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
