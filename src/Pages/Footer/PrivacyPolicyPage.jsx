import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ParallaxHeroImage from "../../Components/ParallaxHeroImage/ParallaxHeroImage";
import "./PrivacyPolicy.css";

export const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <ParallaxHeroImage />
      <div id="policyContainer">
        <h1>PRIVACY NOTICE</h1>

        <h2>SUMMARY OF KEY POINTS</h2>
        <p className="policyParagraph">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>
        <ul>
          <li>
            What personal information do we process?{" "}
            <a href="#section1">Learn more</a>
          </li>
          <li>
            Do we process any sensitive personal information?{" "}
            <a href="#section2">Learn more</a>
          </li>
          <li>
            Do we receive any information from third parties?{" "}
            <a href="#section3">Learn more</a>
          </li>
          <li>
            How do we process your information?{" "}
            <a href="#section4">Learn more</a>
          </li>
          <li>
            In what situations and with which parties do we share personal
            information? <a href="#section5">Learn more</a>
          </li>
          <li>
            What are your rights? <a href="#section6">Learn more</a>
          </li>
          <li>
            How do you exercise your rights? <a href="#section7">Learn more</a>
          </li>
          <li>
            Want to learn more about what we do with any information we collect?
            Review the privacy notice in full.
          </li>
        </ul>

        <h2>TABLE OF CONTENTS</h2>
        <ol>
          <li>
            <a href="#section1">WHAT INFORMATION DO WE COLLECT?</a>
          </li>
          <li>
            <a href="#section2">HOW DO WE PROCESS YOUR INFORMATION?</a>
          </li>
          <li>
            <a href="#section3">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </a>
          </li>
          <li>
            <a href="#section4">
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </a>
          </li>
          <li>
            <a href="#section5">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
          </li>
          <li>
            <a href="#section6">
              IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </a>
          </li>
          <li>
            <a href="#section7">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
          </li>
          <li>
            <a href="#section8">DO WE COLLECT INFORMATION FROM MINORS?</a>
          </li>
          <li>
            <a href="#section9">WHAT ARE YOUR PRIVACY RIGHTS?</a>
          </li>
          <li>
            <a href="#section10">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
          </li>
          <li>
            <a href="#section11">DO WE MAKE UPDATES TO THIS NOTICE?</a>
          </li>
          <li>
            <a href="#section12">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
          </li>
          <li>
            <a href="#section13">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </a>
          </li>
        </ol>

        <h2 id="section1">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <p className="policyParagraph">
          Personal information you disclose to us:
        </p>
        <p className="policyParagraph">
          <strong>In Short:</strong> We collect personal information that you
          provide to us.
        </p>
        <p className="policyParagraph">
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p className="policyParagraph">
          <strong>Sensitive Information:</strong> We do not process sensitive
          information.
        </p>
        <p className="policyParagraph">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information. Ensuring the accuracy of your information is
          vital for effective communication and to maintain the security of your
          account.
        </p>

        <h2 id="section2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="policyParagraph">
          In Short: We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </p>
        <p className="policyParagraph">
          We process your personal information for various reasons, depending on
          how you interact with our Services. For example:
        </p>
        <ul>
          <li>
            To provide personalized services tailored to your preferences.
          </li>
          <li>
            To improve our Services based on user feedback and usage patterns.
          </li>
          <li>
            To ensure the security of your account and prevent fraudulent
            activities.
          </li>
          <li>To comply with legal obligations and regulations.</li>
        </ul>

        <h2 id="section3">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <p className="policyParagraph">
          In Short: We may share information in specific situations described in
          this section and/or with the following third parties.
        </p>
        <p className="policyParagraph">
          We may need to share your personal information in the following
          situations:
          <ul>
            <li>
              Business Transfers: We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </li>
            <li>
              Affiliates: We may share your information with our affiliates,
              ensuring they adhere to this privacy notice.
            </li>
            <li>
              Business Partners: We may share your information with our business
              partners to offer you certain products, services, or promotions.
            </li>
          </ul>
        </p>
        <p className="policyParagraph">
          We have implemented safeguards to protect your personal information
          when shared with third parties, including contractual obligations and
          data protection agreements.
        </p>

        {/* Rest of the sections follow the same pattern */}
      </div>
      <Footer />
    </>
  );
};
