import Footer from "../../Components/Footer/Footer";
import SingleBlogPreview from "../../Components/SingleBlogPreview/SingleBlogPreview";
import "../WebAndMobile/WebAndMobilePage.css";
import blogs from "../Blog/blogs";
import Header from "../../Components/Header/Header";
import ParallaxHeroImage from "../../Components/ParallaxHeroImage/ParallaxHeroImage";
import { Link } from "react-router-dom";

const AIAndAutomationPage = () => {
  return (
    <>
      <Header />
      <ParallaxHeroImage />
      <body className="page-container">
        <div className="services-buttons">
          <Link className="service-button" to="/cloud">
            Cloud & Infrastructure
          </Link>
          <Link className="service-button" to="/web-and-mobile">
            Web & Mobile
          </Link>
        </div>
        <header className="page-header">
          <h1>AI & Automation Solutions</h1>
          <p>
            At the forefront of AI and automation, Digital Forge provides
            solutions that streamline operations, enhance accuracy, and empower
            innovation.
          </p>
        </header>
        <section className="page-section">
          <article>
            <h2>Custom AI Solutions</h2>
            <p>
              We specialize in fine-tuning AI to fit your business needs,
              developing custom assistants that enhance productivity and
              decision-making processes. Our AI solutions use natural language
              processing and machine learning to provide intuitive and smart
              interactions.
            </p>
          </article>
          <article>
            <h2>Automation for Efficiency</h2>
            <p>
              Our automation services utilize scripts and tools in various
              programming languages to automate repetitive tasks, saving time
              and reducing error rates. This helps free up your staff to focus
              on more strategic tasks, boosting overall productivity and
              efficiency.
            </p>
          </article>
        </section>
        <SingleBlogPreview blogs={blogs} />
        <footer>
          <p>Transform Your Operations with Digital Forge</p>
          <p>
            Let us help you leverage AI and automation to transform your
            business operations. Contact us for a discovery call to explore how
            our customized solutions can make your business smarter and more
            efficient.
          </p>
        </footer>
      </body>
      <Footer />
    </>
  );
};

export default AIAndAutomationPage;
