// TODO: Home page styling
// Update styling for page layout
// Add pay link to hamburger icon
// Send email on submit of contact form
// Add images and whatnot to carousel
// Reset interval for auto-scrolling when user interacts with carousel

import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import DFLogo from "../assets/DF-Logo.png";

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
    const icon = document.getElementById("hamburger-icon");
    icon.classList.toggle("open");
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
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Submitting form with:", { email, name, message });
    // Here you would typically send the data to a server or handle it as needed
  };

  return (
    <>
      <div id="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="carousel">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${slideIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <div className="carousel-slide">
            <img src={DFLogo} alt="Image 1" />
            <p>Text for Image 1</p>
          </div>
          <div className="carousel-slide">
            <img src="image2.jpg" alt="Image 2" />
            <p>Text for Image 2</p>
          </div>
          <div className="carousel-slide">
            <img src="image3.jpg" alt="Image 3" />
            <p>Text for Image 3</p>
          </div>
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button id="homePageSubmitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      {/* Footer with legal links */}
      <footer id="footer">
        <a href="/terms" aria-label="Terms and conditions">
          Terms and Conditions
        </a>
        <a href="/privacy" aria-label="Privacy policy">
          Privacy Policy
        </a>
        <a href="/accessibility" aria-label="Our Commitment to Accessibility">
          Our Commitment to Accessibility
        </a>
      </footer>
    </>
  );
};

export default HomePage;
