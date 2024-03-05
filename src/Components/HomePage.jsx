// TODO: Home page styling
// Update styling for page layout
// Add pay link to hamburger icon
// Send email on submit of contact form
// Add images and whatnot to carousel
// Reset interval for auto-scrolling when user interacts with carousel

import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import motherboard from "../assets/motherboard.jpg";
import servers from "../assets/servers.jpg";
import satellite from "../assets/satellite.jpg";
import axios from "axios";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; // Assuming you have 3 slides, adjust accordingly
  const slideIntervalTime = 4500; // Slide interval time in milliseconds

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

  function toggleMenu() {
    const navContainer = document.getElementById("nav-menu-container");
    navContainer.classList.toggle("open");
    const icon = document.getElementById("hamburger-icon");
    icon.classList.toggle("open");

    const digitalforge = document.getElementById("digitalforge");
    digitalforge.classList.toggle("open");

    const contentContainer = document.getElementById("content-container");
    contentContainer.classList.toggle("open");

    const navIcons = document.getElementsByClassName("nav");
    for (let i = 0; i < navIcons.length; i++) {
      navIcons[i].classList.toggle("open");
    }
  }

  const moveSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= totalSlides) newIndex = 0;
    if (newIndex < 0) newIndex = totalSlides - 1;
    setSlideIndex(newIndex);
    autoScroll(); // Reset the auto-scroll interval
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = { email, name, message };
    const API_ENDPOINT =
      "https://mfg9emrvth.execute-api.us-east-1.amazonaws.com/prod"; // TODO: Add your API endpoint here

    try {
      // Send a POST request to your endpoint
      const response = await axios.post(API_ENDPOINT, formData);

      // Handle response here
      console.log("Email sent successfully:", response.data);

      // Optionally reset form fields
      setEmail("");
      setName("");
      setMessage("");

      // Provide feedback to user or redirect as needed
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <div id="page-container">
        <div id="hamburger-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 id="digitalforge">Digital Forge</h1>
        <div id="nav-menu-container">
          <nav id="nav-home" className="nav">
            Home
          </nav>
          <nav id="nav-about" className="nav">
            About
          </nav>
          <nav id="nav-pay" className="nav">
            Pay Link
          </nav>
        </div>
        <div id="content-container">
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
                  <ul>
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
                  <ul>
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
                  <ul>
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
            </div>
            <button className="prev" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div>
          <div id="cta">
            Contact us using the form below <br /> to let us know your vision,{" "}
            <br /> and we will help you bring it to life.
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-div">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-div">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  // style={{ resize: "none" }}
                ></textarea>
              </div>
              <button id="homePageSubmitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
          {/* Footer with legal links */}
          <footer id="footer">
            <a
              href="/terms"
              aria-label="Terms and conditions"
              className="footer-links"
            >
              Terms and Conditions
            </a>
            <a
              href="/privacy"
              aria-label="Privacy policy"
              className="footer-links"
            >
              Privacy Policy
            </a>
            <a
              href="/accessibility"
              aria-label="Our Commitment to Accessibility"
              className="footer-links"
            >
              Our Commitment to Accessibility
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
