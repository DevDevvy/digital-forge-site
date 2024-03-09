import { Link } from "react-router-dom";
import robuddies from "../../assets/robuddies.png";
import "./AboutUs.css";
import { ContactForm } from "../../Components/ContactForm";
import { useState } from "react";
import ModalOverlay from "../../Components/ContactFormOverlay";
import { Footer } from "../../Components/Footer/Footer";
import { NavMenu } from "../../Components/Nav";

const AboutUsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleEmailButtonClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <div id="page-container">
        <NavMenu />
        <div id="content-container">
          <div className="about-us">
            <div className="about-us-hero">
              <img className="about-us-hero-image" src={robuddies} />
              <div className="overlay">
                <p onClick={handleEmailButtonClick}>Contact Us Now</p>
              </div>
              <div className="quote">
                <h2>
                  Amazing things are within reach <br></br>when you keep the
                  right company.
                </h2>
                {/* Add a short blurb or quote about the company */}
              </div>
            </div>
            <div className="content">
              <p className="paragraph">
                DigitalForge is a new company with a seasoned team. We are
                professionals who saw too much value in ourselves to stay victim
                to the whims of an industry. Now, we offer our skills to the
                world at large instead of limiting our scope. We come from MERN
                development, cloud native, web and mobile app development, but
                we are language and framework agnostic and will use the best
                tools for the job. Our experts can do everything from
                enterprise-level cloud infrastructure, database management,
                migration, and infrastructure as code, to web and mobile app
                development and even hardware and networking solutions.
              </p>
              <p className="paragraph">
                We are an onshore operation ensuring data sovereignty and
                protections offshore organizations can't give. Our focus is on
                delivering modern automation and AI solutions, tailored AWS
                infrastructure and cloud services, comprehensive networking and
                communications setups, and cutting-edge mobile and web
                applications.
              </p>
              <p className="paragraph">
                We pride ourselves on being security driven, always ensuring
                that our solutions are secure and compliant with the latest
                standards. We are also committed to accessibility and inclusion,
                and we are always looking for ways to make our solutions more
                accessible to everyone.
              </p>
              <p className="paragraph">
                Contact us now to get your free consultation and see how we can
                help you.
              </p>
            </div>
            <div className="about-us-footer">
              <Link to="/" className="btn-home">
                Home
              </Link>
              <button className="btn-email-us" onClick={handleEmailButtonClick}>
                Email Us
              </button>
              {showContactForm && (
                <ModalOverlay
                  onClose={handleCloseContactForm}
                  showCloseButton={showContactForm} // Pass the showContactForm state
                >
                  <ContactForm />
                </ModalOverlay>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
