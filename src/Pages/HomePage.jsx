// TODO: Home page styling
// Update styling for page layout
// Add pay link to hamburger icon
// Send email on submit of contact form
// Add images and whatnot to carousel
// Reset interval for auto-scrolling when user interacts with carousel

import { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import motherboard from "../assets/motherboard.jpg";
import servers from "../assets/servers.jpg";
import satellite from "../assets/satellite.jpg";
import { Footer } from "../Components/Footer/Footer";
import { NavMenu } from "../Components/Nav";
import { ContactForm } from "../Components/ContactForm";
import AboutUsPage from "./AboutUs/AboutUs";
import efrain from "../assets/efrain.png";
import dustin from "../assets/dustin.png";
import mac from "../assets/mac.png";
import randall from "../assets/randall.png";
import ProfilePhotoFrameGroup from "../Components/ProfilePhotoGroup";
import ModalOverlay from "../Components/ContactFormOverlay";
import { Header } from "../Components/Header/Header";
const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
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
  const totalSlides = 4; // Assuming you have 3 slides, adjust accordingly
  const slideIntervalTime = 9000; // Slide interval time in milliseconds

  const profiles = [
    { photo: mac, name: "Mac" },
    { photo: randall, name: "Randall" },
    { photo: dustin, name: "Dustin" },
    { photo: efrain, name: "Efrain" },
  ];

  let slideInterval = useRef(null);

  const autoScroll = () => {
    clearInterval(slideInterval.current); // Clear existing interval
    slideInterval.current = setInterval(() => {
      console.log(
        `Auto-scrolling to the next slide: ${new Date().toLocaleTimeString()}`
      );
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, slideIntervalTime);
  };

  useEffect(() => {
    autoScroll(); // Initialize auto-scrolling on component mount
    return () => clearInterval(slideInterval.current); // Cleanup on component unmount
  }, [totalSlides]);

  const moveSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= totalSlides) newIndex = 0;
    if (newIndex < 0) newIndex = totalSlides - 1;
    setSlideIndex(newIndex);
    autoScroll(); // Reset the auto-scroll interval
  };

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
          <div className="carousel">
            <div
              className="carousel-slides"
              style={{
                transform: `translateX(-${slideIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              <div className="carousel-slide">
                <img
                  className="slide-img"
                  src={satellite}
                  alt="satellite pointed at the sky"
                />
                <div className="img-text-container">
                  <h3 className="img-text">
                    Infrastructure and Cloud Services
                  </h3>
                  <p className="img-text">
                    AWS solutions tailored to meet your unique business needs.
                  </p>
                  <ul className="photo-text-ul">
                    <li className="photo-text-list">
                      Infrastructure as Code and Cloud Migration
                    </li>
                    <li className="photo-text-list">
                      Optimized Performance for Infrastructure
                    </li>
                    <li className="photo-text-list">
                      Built for Reliability and Scalability
                    </li>
                    <li className="photo-text-list">
                      AWS Certified Solutions Architects
                    </li>
                    <li className="photo-text-list">
                      Industry Standard Cloud Security
                    </li>
                  </ul>
                </div>
              </div>
              <div className="carousel-slide">
                <img
                  className="slide-img"
                  src={servers}
                  alt="server cage with wires and lights"
                />
                <div className="img-text-container">
                  <h3 className="img-text">Networking and Communications</h3>
                  <p className="img-text">
                    Comprehensive networking and communications setup solutions.
                  </p>
                  <ul className="photo-text-ul">
                    <li className="photo-text-list">
                      Implementation: Design and Execution
                    </li>
                    <li className="photo-text-list">
                      Security: Alerting and Monitoring
                    </li>
                    <li className="photo-text-list">
                      Complexity: Private to Enterprise Levels
                      <li className="photo-text-list">
                        Access: Wired and Wireless
                      </li>
                    </li>
                    <li className="photo-text-list">VoIP and Telephony</li>
                  </ul>
                </div>
              </div>
              <div className="carousel-slide">
                <img
                  className="slide-img"
                  src={motherboard}
                  alt="computer chip close up"
                />
                <div className="img-text-container">
                  <h3 className="img-text">Mobile and Web Development</h3>
                  <p className="img-text">
                    Cutting-edge mobile and web applications
                  </p>
                  <ul className="photo-text-ul">
                    <li className="photo-text-list">
                      Zero-Trust Authentication and Authorization
                    </li>
                    <li className="photo-text-list">
                      Enterprise Level, Security First Development
                    </li>
                    <li className="photo-text-list">
                      Modern languages and Frameworks
                    </li>
                    <li className="photo-text-list">
                      Scalable and Optimized Code
                    </li>
                    <li className="photo-text-list">Reliable Execution</li>
                  </ul>
                </div>
              </div>
              <div className="carousel-slide">
                <img
                  className="slide-img"
                  src={motherboard}
                  alt="computer chip close up"
                />
                <div className="img-text-container">
                  <h3 className="img-text">Automation and AI</h3>
                  <p className="img-text">
                    Modern automation and AI solutions for your business.
                  </p>
                  <ul className="photo-text-ul">
                    <li className="photo-text-list">
                      Website AI assistant integration
                    </li>
                    <li className="photo-text-list">
                      Specialized AI for your business
                    </li>
                    <li className="photo-text-list">
                      Business process automation
                    </li>
                    <li className="photo-text-list">
                      AI and Automation consulting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div>
          <div className="profiles">
            <h2 id="team">Meet the Team</h2>
            <ProfilePhotoFrameGroup
              profiles={profiles}
              onClick={handleEmailButtonClick}
            />
          </div>
          <div id="cta">
            Contact us using the form below <br /> to let us know your vision,{" "}
            <br /> and we will help you bring it to life.
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
