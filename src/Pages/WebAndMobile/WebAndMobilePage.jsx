import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ParallaxHeroImage from "../../Components/ParallaxHeroImage/ParallaxHeroImage";
import SingleBlogPreview from "../../Components/SingleBlogPreview/SingleBlogPreview";
import blogs from "../Blog/blogs";
import "./WebAndMobilePage.css";
const WebAndMobilePage = () => {
  return (
    <>
      <Header />
      <div className="overlay-black">
        <ParallaxHeroImage />
        <body className="page-container">
          <header className="page-header">
            <h1>Harness Cutting-Edge Technology with Digital Forge</h1>
            <p>
              At Digital Forge, our web and mobile app development services
              harness the latest technological trends to provide innovative
              solutions that meet your specific business needs. From advanced
              web applications to intuitive mobile apps, our expertise is your
              gateway to a digitally transformed future.
            </p>
          </header>
          <section className="page-section">
            <article>
              <p id="web-technologies">
                <h2>Advanced Web Technologies</h2>
                <p>
                  Our team utilizes{" "}
                  <strong>Accelerated Mobile Pages (AMP)</strong> and{" "}
                  <strong>Progressive Web Apps (PWAs)</strong> to enhance the
                  speed and performance of web applications, ensuring they are
                  optimized for mobile devices and designed for peak
                  performance. These technologies enable faster loading times
                  and offline capabilities, improving user engagement and
                  retention.
                </p>
              </p>
            </article>
            <article>
              <p id="ai-ml">
                <h2>AI and Machine Learning</h2>
                <p>
                  We integrate AI technologies to create smart, responsive
                  applications that improve over time, utilizing machine
                  learning to offer personalized experiences to users. Our
                  AI-powered solutions are designed to streamline operations and
                  provide key insights, driving efficiency and innovation.
                </p>
              </p>
            </article>
            <article id="security">
              <h2>Security and Encryption</h2>
              <p>
                In a world where data breaches are common, we prioritize robust
                security measures including the latest encryption standards to
                protect your applications and user data from cyber threats.
              </p>
            </article>
          </section>
          <SingleBlogPreview blogs={blogs} />
          <footer>
            <p>Connect with Us Today</p>
            <p>
              Let Digital Forge be your partner in navigating the complex
              landscape of digital transformation. Whether you&#39;re looking to
              enhance your existing application or build a new one from scratch,
              our experts are ready to help. Contact us for a discovery call to
              explore tailored solutions that can drive your business forward.
              Embrace the future with confidence with Digital Forge.
            </p>
          </footer>
        </body>
        <Footer />
      </div>
    </>
  );
};

export default WebAndMobilePage;
