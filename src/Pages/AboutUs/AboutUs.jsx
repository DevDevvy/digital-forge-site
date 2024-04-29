import "./AboutUs.css";
import ContactForm from "../../Components/ContactForm";
import ModalOverlay from "../../Components/ModalOverlay";
import logo from "../../assets/DF-Logo.png";
import ProfilePhotoFrameGroup from "../../Components/ProfilePhotoFrameGroup";
import ScrollingCarousel from "../../Components/ScrollingCarousel";

const AboutUsPage = ({
  handleEmailButtonClick,
  handleCloseContactForm,
  showContactForm,
  isDarkMode,
}) => {
  return (
    <>
      <div className="about-us">
        <div className={isDarkMode ? "content dark-mode-p" : "content"}>
          <div className="content-box-1">
            <div>
              <img src={logo} id="df-logo-p" alt="Digital Forge Logo" />
            </div>

            <div className="paragraph">
              <h2>Transforming Your Ideas Into Software and Infrastructure</h2>
              <p>
                As technology has evolved, our dedicated group of innovators
                have worked tirelessly to obtain the skills necessary to work
                fluently across multiple languages and frameworks. Now, we offer
                our skills to the world at large. Operating advanced tools
                including Artificial Intelligence for software development,
                cloud native, as well as web and mobile app development, our
                experts can handle anything from enterprise-level cloud
                solutions, all the way to web and mobile app development, and
                are available to assist at any time. Whether you are
                establishing the next big thing or building on existing success,
                let us help ease your transition to the next level.
              </p>
            </div>
          </div>

          <div className="content-box-2">
            <ProfilePhotoFrameGroup />
            <div className="mission-container">
              <div className="paragraphs">
                <h2>Our Mission:</h2>
                <p>
                  To provide high-quality, innovative, and secure solutions to
                  businesses of all sizes. We believe that technology should be
                  accessible to everyone, and we strive to make our solutions as
                  user-friendly and accessible as possible. We are committed to
                  providing our clients with the best possible service, and we
                  work closely with them to ensure that our solutions meet their
                  needs and are able to scale as needed.
                </p>
              </div>
              <ScrollingCarousel />
            </div>
          </div>
          <div className="content-box-3">
            <h2>Security and Development</h2>
            <p>
              We are an onshore, veteran owned operation ensuring data
              sovereignty and peace of mind that offshore organizations just
              can't give.
              <br></br>
              We pride ourselves on being security driven, always ensuring that
              our solutions are secure and compliant with the latest standards.
            </p>
            <div className="two-column">
              <div id="list-container">
                <h3>Our Focus:</h3>
                <ul id="column-list">
                  <li>Mobile and Web Apps</li>
                  <li>Automation and AI Solutions</li>
                  <li>AWS and Cloud Infrastructure</li>
                  <li>Hardware Networking and Communications</li>
                  <li>Cost-effective Scale-As-You-Scale Tailoring</li>
                </ul>
              </div>
              <div className="padlock">
                {" "}
                <svg
                  version="1.1"
                  id="locker_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="150px"
                  height="200px"
                  viewBox="-49 141 512 512"
                  xmlSpace="preserve"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      data-name="Dégradé GoVélo"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#009ab7" />
                      <stop offset="1" stopColor="#153751" />
                    </linearGradient>
                  </defs>
                  <path
                    className="locker locker-block"
                    d="M354.5,644H58.373c-14.025,0-25.5-11.475-25.5-25.5V385.297c0-14.025,11.475-25.5,25.5-25.5H354.5
	c14.025,0,25.5,11.475,25.5,25.5V618.5C380,632.525,368.525,644,354.5,644z"
                  />
                  <path
                    className="locker bar"
                    d="M309.398,302v-44.903c0-56.485-46.215-102.699-102.699-102.699h0
	C150.215,154.398,104,200.613,104,257.097V373v105"
                  />
                  <path
                    className="locker locker-block"
                    d="M354.5,644H58.373c-14.025,0-25.5-11.475-25.5-25.5V385.297c0-14.025,11.475-25.5,25.5-25.5H354.5
	c14.025,0,25.5,11.475,25.5,25.5V618.5C380,632.525,368.525,644,354.5,644z"
                  />
                  <g className="unlock">
                    <path
                      className="key"
                      d="M207.001,417.673c-28.017,0-50.81,22.793-50.81,50.81c0,13.895,5.775,27.33,15.858,36.891v45.875
	c0,19.273,15.68,34.953,34.953,34.953s34.953-15.68,34.953-34.953v-45.875c10.078-9.555,15.857-22.993,15.857-36.891
	C257.81,440.466,235.016,417.673,207.001,417.673z M224.979,487.558c-4.851,4.571-7.633,10.96-7.633,17.53v46.161
	c0,5.705-4.64,10.345-10.345,10.345c-5.704,0-10.345-4.64-10.345-10.345v-46.161c0-6.569-2.782-12.957-7.63-17.527
	c-5.307-5.003-8.229-11.778-8.229-19.078c0-14.447,11.755-26.202,26.202-26.202s26.202,11.755,26.202,26.202
	C233.203,475.783,230.281,482.558,224.979,487.558z"
                    />
                  </g>
                </svg>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default AboutUsPage;
