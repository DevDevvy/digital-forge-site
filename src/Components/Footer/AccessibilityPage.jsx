import "./PrivacyPolicy.css";
export const AccessibilityPage = () => {
  return (
    <div id="policyContainer">
      <h1>ACCESSIBILITY STATEMENT</h1>
      <h2>Our Commitment</h2>
      <p className="policyParagraph">
        Digital Forge Technologies is committed to ensuring digital
        accessibility for people with disabilities. We are continually improving
        the user experience for everyone and applying the relevant accessibility
        standards to ensure we provide equal access to all users.
      </p>
      <h4 className="privacyPolicySummaryOfKeyPoints">
        Standards and Guidelines
      </h4>
      <p className="policyParagraph">
        Our website aims to conform to the Web Content Accessibility Guidelines
        (WCAG) 2.1 at Level AA. These guidelines explain how to make web content
        more accessible for people with disabilities, and user-friendly for
        everyone.
      </p>
      <h4 className="privacyPolicySummaryOfKeyPoints">Features</h4>
      <p className="policyParagraph">
        Our website includes the following features designed to improve
        accessibility:
        <ul>
          <li>
            <em>Text Alternatives:</em> Images have alternative text that can be
            read by screen reader software.
          </li>
          <li>
            <em>Keyboard Navigation:</em> The website can be navigated using a
            keyboard.
          </li>
          <li>
            <em>Contrast:</em> We have ensured that text contrasts with
            background colors to improve readability.
          </li>
        </ul>
      </p>
      <h4 className="privacyPolicySummaryOfKeyPoints">Feedback</h4>
      <p className="policyParagraph">
        We welcome your feedback on the accessibility of digitalforge-tek.com.
        Please let us know if you encounter accessibility barriers on
        digitalforge-tek.com:
        <a href="mailto:support@digitalforge-tek.com">Email Support</a>
        <br></br>
        We try to respond to feedback within 3 business days.
      </p>
      <h4 className="privacyPolicySummaryOfKeyPoints">Assistance</h4>
      <p className="policyParagraph">
        If you need any assistance while visiting our website, or if you require
        any information in an alternative format, please contact us.
      </p>
      <h4 className="privacyPolicySummaryOfKeyPoints">
        Continuous Improvement
      </h4>
      <p className="policyParagraph">
        We consider accessibility as an ongoing effort and are continually
        seeking solutions that will bring all areas of our site to the same
        level of overall web accessibility. In the meantime, should you
        experience any difficulty in accessing digitalforge-tek.com, please
        don't hesitate to contact us.
      </p>
    </div>
  );
};
