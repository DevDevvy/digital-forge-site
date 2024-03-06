import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import { PrivacyPolicyPage } from "./Components/Footer/PrivacyPolicyPage";
import { AccessibilityPage } from "./Components/Footer/AccessibilityPage";
import { TermsAndConditionsPage } from "./Components/Footer/TermsAndConditionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
        <Route exact path="/accessibility" element={<AccessibilityPage />} />
        <Route exact path="/terms" element={<TermsAndConditionsPage />} />
      </Routes>
    </>
  );
}

export default App;
