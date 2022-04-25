import Download from "../Download";
import Footer from "../Footer";
import Header from "../Header";
import HeroPrivacyPolicy from "../HeroPrivacyPolicyPage";

export function PrivacyPolicyPage() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <HeroPrivacyPolicy />     
      <Download />
      <Footer />
    </div>
  );
}
