import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import { PrivacyPolicyPage } from "./Components/Footer/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./Components/Footer/TermsAndConditionsPage";
import { AccessibilityPage } from "./Components/Footer/AccessibilityPage";

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
