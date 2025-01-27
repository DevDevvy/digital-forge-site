import { useState, useEffect, useRef } from "react";
import "./ScrollingCarousel.css";
import motherboard from "../assets/motherboard.jpg";
import servers from "../assets/servers.jpg";
import satellite from "../assets/satellite.jpg";
import { Link } from "react-router-dom";

const ScrollingCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const totalSlides = 4; // Adjust accordingly
  const slideIntervalTime = 9000; // Slide interval time in milliseconds
  let slideInterval = useRef(null);

  const autoScroll = () => {
    clearInterval(slideInterval.current); // Clear existing interval
    slideInterval.current = setInterval(() => {
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
      {/* <div className="carousel-header"> OUR SERVICES</div> */}
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
              <h3 className="img-text-header">
                <Link className="carousel-link" to="/cloud">
                  Infrastructure and Cloud Services
                </Link>
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
              <h3 className="img-text-header">Networking and Communications</h3>
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
                </li>
                <li className="photo-text-list">Access: Wired and Wireless</li>
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
              <Link className="carousel-link" to="/web-and-mobile">
                <h3 className="img-text-header">Mobile and Web Development</h3>
              </Link>
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
                <li className="photo-text-list">Scalable and Optimized Code</li>
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
              <Link className="carousel-link" to="/ai-and-automation">
                <h3 className="img-text-header">Automation and AI</h3>
              </Link>
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
                <li className="photo-text-list">Business process automation</li>
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
    </>
  );
};

export default ScrollingCarousel;
