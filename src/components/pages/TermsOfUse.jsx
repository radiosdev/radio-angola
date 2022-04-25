import Download from "../Download";
import Footer from "../Footer";
import Header from "../Header";
import HeroTermsOfUse from "../HeroTermsOfUse.jsx";

export function TermsOfUsePage() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <HeroTermsOfUse />     
      <Download />
      <Footer />
    </div>
  );
}
