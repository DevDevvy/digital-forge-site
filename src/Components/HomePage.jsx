import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; // Assuming you have 3 slides, adjust accordingly

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Adjust time for your needs

    return () => clearInterval(autoScroll); // Cleanup interval on component unmount
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
            <img src="image1.jpg" alt="Image 1" />
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
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
