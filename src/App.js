import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicy";
import { HomePage } from "./components/pages/Home";
import { TermsOfUsePage } from "./components/pages/TermsOfUse";
import { AboutUsPage } from "./components/pages/AboutUs";
import { CopyrightPolicyPage } from "./components/pages/CopyrightPolicy";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route exact path="/termsofusepage" element={<TermsOfUsePage />} />
		<Route exact path="/aboutusage" element={<AboutUsPage />} />
		<Route exact path="/copyrightpolicy" element={<CopyrightPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
