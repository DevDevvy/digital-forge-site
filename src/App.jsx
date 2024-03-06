import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { PrivacyPolicyPage } from "./Pages/Footer/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./Pages/Footer/TermsAndConditionsPage";
import { AccessibilityPage } from "./Pages/Footer/AccessibilityPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
        <Route exact path="/terms" element={<TermsAndConditionsPage />} />
        <Route exact path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
    </>
  );
}

export default App;
