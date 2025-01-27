import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { PrivacyPolicyPage } from "./Pages/Footer/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./Pages/Footer/TermsAndConditionsPage";
import { AccessibilityPage } from "./Pages/Footer/AccessibilityPage";
import BusinessCard from "./Pages/eBusinessCards/BusinessCard";
import AboutUsPage from "./Pages/AboutUs/AboutUs";
import BlogList from "./Pages/Blog/BlogList";
import BlogDetail from "./Pages/Blog/BlogDetail";
import WebAndMobilePage from "./Pages/WebAndMobile/WebAndMobilePage";
import CloudInfrastructurePage from "./Pages/CloudInfrastructure/CloudInfrastructurePage";
import AIAndAutomationPage from "./Pages/AIAndAutomation/AIAndAutomationPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUsPage />} />
        <Route exact path="/about/card/:name" element={<BusinessCard />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
        <Route exact path="/terms" element={<TermsAndConditionsPage />} />
        <Route exact path="/accessibility" element={<AccessibilityPage />} />
        <Route exact path="/blog/list" element={<BlogList />} />
        <Route exact path="/blog/:id" element={<BlogDetail />} />
        <Route path="/web-and-mobile" element={<WebAndMobilePage />} />
        <Route path="/cloud" element={<CloudInfrastructurePage />} />
        <Route path="/ai-and-automation" element={<AIAndAutomationPage />} />
      </Routes>
    </>
  );
}

export default App;
