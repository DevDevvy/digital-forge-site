import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { PrivacyPolicyPage } from "./Pages/Footer/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./Pages/Footer/TermsAndConditionsPage";
import { AccessibilityPage } from "./Pages/Footer/AccessibilityPage";
import AboutUsPage from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUsPage />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
        <Route exact path="/terms" element={<TermsAndConditionsPage />} />
        <Route exact path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
    </>
  );
}

export default App;
