import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import { PrivacyPolicyPage } from "./Components/Footer/PrivacyPolicyPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  );
}

export default App;
