import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <a href="/privacy" aria-label="Privacy policy" className="footer-links">
          Privacy
        </a>
        <a
          href="/terms"
          aria-label="Terms and conditions"
          className="footer-links"
        >
          Terms and Conditions
        </a>
        <a
          href="/accessibility"
          aria-label="Our Commitment to Accessibility"
          className="footer-links"
        >
          Accessibility
        </a>
      </footer>
    </>
  );
};

export default Footer;
